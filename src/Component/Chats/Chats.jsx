import React from "react";
import { DotsThreeVertical } from "@phosphor-icons/react";
import styles from "./Chats.module.css";

const Chats = () => {
  const chatData = [
    {
      topic: "Discussion on React Components",
      time: "09:34",
      moduleCode: "MAD115C",
      color: "#007aff",
    },
    {
      topic: "JavaScript Best Practices",
      time: "12 Aug",
      moduleCode: "PHY102B",
      color: "#FF7A00",
    },
    {
      topic: "New CSS Features",
      time: "25 October",
      moduleCode: "BIO210A",
      color: "#7AFF00",
    },
  ];

  return (
    <div className={styles.chatsContainer}>
      <h2 className={styles.chatsHeading}>Chats</h2>
      {chatData.map((chat, index) => (
        <div key={index} className={styles.chatContainer}>
          <div className={styles.chatHeader}>
            <div className={styles.chatTopic}>
              <p>{chat.topic}</p>
            </div>
            <div className={styles.menuIcon}>
              <DotsThreeVertical size={16} color="#D4DDEB"/>
            </div>
          </div>
          <div className={styles.chatFooter}>
            <span className={styles.timeText}>{chat.time}</span>
            <span
              className={styles.tag}
              style={{
                backgroundColor: `${chat.color}1A`,
                color: chat.color, // Text color
              }}
            >
              {chat.moduleCode}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
