// Chats.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { DotsThreeVertical, OpenAiLogo } from '@phosphor-icons/react';
import { fetchChats } from '../../redux/actions/chatActions';
import styles from './Chats.module.css';

const Chats = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { chats, loading, error } = useSelector((state) => state.chat);

  useEffect(() => {
    dispatch(fetchChats());
  }, [dispatch]);

  const handleNewChat = () => navigate('/ai-tutor/chatbox');
  const handleChatClick = (chatId) => navigate(`/ai-tutor/chatbox/${chatId}`);

  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.chatsContainer}>
      <h2 className={styles.chatsHeading}>Chats</h2>
      <NewChatButton onClick={handleNewChat} />
      {loading
        ? Array.from({ length: 5 }).map((_, index) => <ChatSkeleton key={index} />)
        : chats.map((chat) => (
            <ChatItem
              key={chat.id}
              chat={chat}
              isActive={location.pathname === `/ai-tutor/chatbox/${chat.id}`}
              onClick={() => handleChatClick(chat.id)}
            />
          ))}
    </div>
  );
};

// New Chat Button Component
const NewChatButton = ({ onClick }) => (
  <button className={styles.newChatButton} onClick={onClick}>
    <OpenAiLogo size={20} style={{ marginRight: '8px' }} />
    New Chat
  </button>
);

// Chat Skeleton Component - Mimicking exact ChatItem styling
const ChatSkeleton = () => (
  <div className={`${styles.chatContainer} ${styles.skeleton}`}>
    <div className={styles.chatHeader}>
      <div className={styles.skeletonText} />
      <div className={styles.skeletonIcon} />
    </div>
    <div className={styles.chatFooter}>
      <div className={styles.skeletonText} />
      <div className={styles.skeletonTag} />
    </div>
  </div>
);

// Chat Item Component
const ChatItem = ({ chat, isActive, onClick }) => (
  <div
    className={`${styles.chatContainer} ${isActive ? styles.activeMessage : ''}`}
    onClick={onClick}
  >
    <div className={styles.chatHeader}>
      <div className={styles.chatTopic}>
        <p>{chat.topic}</p>
      </div>
      <div className={styles.menuIcon}>
        <DotsThreeVertical size={16} color="#D4DDEB" />
      </div>
    </div>
    <div className={styles.chatFooter}>
      <span className={styles.timeText}>{chat.time}</span>
      <span
        className={styles.tag}
        style={{
          backgroundColor: `${chat.color}1A`,
          color: chat.color,
        }}
      >
        {chat.moduleCode}
      </span>
    </div>
  </div>
);

export default Chats;

