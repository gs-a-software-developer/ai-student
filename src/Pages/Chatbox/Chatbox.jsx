import React, { useState } from "react";
import {
  PaperPlaneRight,
  OpenAiLogo,
  FilePdf,
  FileJs,
} from "@phosphor-icons/react";
import styles from "./Chatbox.module.css";
import { sample1, sample2, sample3 } from "../../Assets";

const chatData = [
  {
    id: 1,
    title: "Discussion on React Components",
    time: "10:45 AM",
    text: "This is a sample conversation paragraph. The conversation continues here with more details. This is another sample conversation paragraph. The conversation continues with more details.",
    images: [sample1, sample2, sample3],
    imageCount: 2,
    replies: [],
  },
  {
    id: 2,
    title: "JavaScript Best Practices",
    time: "11:00 AM",
    text: "This is another sample conversation paragraph. The conversation continues with more details.",
    attachments: [
      { id: 1, type: "pdf", name: "document.pdf" },
      { id: 2, type: "js", name: "script.js" },
    ],
    replies: [],
  },
  {
    id: 3,
    title: "New CSS Features",
    time: "11:30 AM",
    text: "Check out the new CSS features that make responsive design easier. These features include CSS grid, flexbox improvements, and new units like `ch` and `vw`.",
    images: [], // Ensure images is an empty array if there are no images
    attachments: [], // Ensure attachments is an empty array if there are no attachments
    replies: [],
  },
];

const Chatbox = () => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSend = () => {
    // Handle sending message logic here
    setInputText("");
  };

  return (
    <div className={styles.chatboxContainer}>
      <div className={styles.messages}>
        {chatData.map((message) => (
          <div key={message.id} className={styles.messageContainer}>
            <div className={styles.messageHeader}>
              <span className={styles.icon}>
                <OpenAiLogo size={16} />
              </span>
              <span className={styles.title}>{message.title}</span>
              <span className={styles.time}>{message.time}</span>
            </div>
            <p className={styles.conversationText}>{message.text}</p>

            {message.images && message.images.length > 0 && (
              <div className={styles.imageContainer}>
                {message.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`sample${index}`}
                    className={styles.image}
                  />
                ))}
                {message.imageCount > 0 && (
                  <span className={styles.imageCount}>
                    +{message.imageCount}
                  </span>
                )}
              </div>
            )}

            {message.attachments && message.attachments.length > 0 && (
              <div className={styles.attachmentContainer}>
                {message.attachments.map((attachment) => (
                  <div key={attachment.id} className={styles.attachment}>
                    {attachment.type === "pdf" && (
                      <span className={styles.fileIcon}>
                        <FilePdf size={28} color="#007aff" weight="bold" />
                      </span>
                    )}
                    {attachment.type === "js" && (
                      <span className={styles.fileIcon}>
                        <FileJs size={28} color="#007aff" weight="bold" />
                      </span>
                    )}
                    <span className={styles.fileName}>{attachment.name}</span>
                  </div>
                ))}
              </div>
            )}

            <div className={styles.replyText}>Reply</div>
            <hr className={styles.horizontalLine} />
          </div>
        ))}
      </div>

      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          placeholder="Enter text here"
          type="text"
          id="unique-input"
          value={inputText}
          onChange={handleInputChange}
        />
        <button className={styles.sendButton} onClick={handleSend}>
          <PaperPlaneRight size={16} color="#007aff" />
        </button>
      </div>
    </div>
  );
};

export default Chatbox;
