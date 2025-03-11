// ChatBox
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CaretLeft } from "@phosphor-icons/react";
import CreateChat from "../../components/CreateChat/CreateChat";
import Chat from "../../components/Chat/Chat";
import styles from "./ChatBox.module.css";

const ChatBox = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleBack = () => {
    setIsClicked(!isClicked);
    navigate(-1);
  };

  return (
    <div className={styles.chatboxContainer}>
      {id && (
        <div className={styles.header}>
          <CaretLeft
            size={20}
            color="#090909"
            onClick={handleBack}
            className={`${styles.backCaret} ${isClicked ? styles.clicked : ""}`}
          />
        </div>
      )}
      {!id ? <CreateChat /> : <Chat id={id} />}
    </div>
  );
};

export default ChatBox;
