// CreateChat 
import React from "react";
import { Paperclip, PaperPlaneRight } from "@phosphor-icons/react";
import styles from "./CreateChat.module.css";

const CreateChat = () => {
  const [inputText, setInputText] = React.useState("");

  const handleInputChange = (e) => setInputText(e.target.value);

  const handleSend = () => {
    console.log("Send:", inputText);
    setInputText("");
  };

  return (
    <div className={styles.createChatContainer}>
      <h1 className={styles.heading}>Get Smarter with Ai-Tutor</h1>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          placeholder="Enter text here"
          type="text"
          value={inputText}
          onChange={handleInputChange}
        />
        <button className={styles.attachmentButton} onClick={handleSend}>
          <Paperclip size={16} color="#34A853" />
        </button>
        <button className={styles.sendButton} onClick={handleSend}>
          <PaperPlaneRight size={16} color="#007aff" />
        </button>
      </div>
    </div>
  );
};

export default CreateChat;
