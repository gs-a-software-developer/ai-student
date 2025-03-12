// Chat.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Paperclip, PaperPlaneRight, OpenAiLogo } from '@phosphor-icons/react';
import { fetchMessages } from '../../redux/actions/chatActions';
import { getFileIcon } from '../../utils/fileIcons';
import styles from './Chat.module.css';

const Chat = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  // Fetch messages from Redux store
  const { messages, loading, error } = useSelector((state) => state.chat);

  useEffect(() => {
    dispatch(fetchMessages(id));
  }, [dispatch, id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.chatboxContainer}>
      {/* Message Header */}
      <div className={styles.messageContainer}>
        <div className={styles.messageHeader}>
          <span className={styles.icon}>
            <OpenAiLogo size={16} />
          </span>
          <span className={styles.title}>Chat {id}</span>
        </div>

        {/* Messages */}
        <div className={styles.conversation}>
          {messages.map((message, idx) => (
            <div
              key={idx}
              className={`${styles.message} ${
                message.isSender ? styles.sender : styles.receiver
              }`}
            >
              {message.text && <p className={styles.conversationText}>{message.text}</p>}

              {/* Images */}
              {message.images &&
                message.images.map((image, imgIdx) => (
                  <img key={imgIdx} src={image} alt={`attachment-${imgIdx}`} className={styles.image} />
                ))}

              {/* Attachments */}
              {message.attachments && <ChatAttachments attachments={message.attachments} />}
            </div>
          ))}
        </div>
      </div>

      {/* Input Section */}
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          placeholder="Enter text here"
          type="text"
        />
        <button className={styles.sendButton}>
          <PaperPlaneRight size={16} color="#007aff" />
        </button>
      </div>
    </div>
  );
};

// Separate component for handling attachments
const ChatAttachments = ({ attachments }) => (
  <div className={styles.attachmentContainer}>
    {attachments.map((attachment) => (
      <div key={attachment.id} className={styles.attachment}>
        <span className={styles.fileIcon}>{getFileIcon(attachment.type)}</span>
        <span className={styles.fileName}>{attachment.name}</span>
      </div>
    ))}
  </div>
);

export default Chat;