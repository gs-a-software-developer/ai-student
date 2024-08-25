// File.js
import React, { useState } from "react";
import { CaretCircleDown, CaretCircleUp, Video, FileText, Image } from "@phosphor-icons/react";
import styles from "./File.module.css";

export const File = ({ file, onSelect }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const renderIcon = (type) => {
    switch (type) {
      case "video":
        return <Video size={32} color="#007AFF" weight="thin" />;
      case "document":
        return <FileText size={32} color="#007AFF" weight="thin" />;
      case "image":
        return <Image size={32} color="#007AFF" weight="thin" />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.wrapper} onClick={onSelect}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.fileIcon}>
            {renderIcon(file.type)}
          </div>
          <div className={styles.textContainer}>
            <div className={styles.fileName}>{file.name}</div>
            <div className={styles.authorName}>{file.author}</div>
          </div>
          <div className={styles.tags}>
            <span className={styles.tag}>{file.moduleCode}</span>
            <span className={styles.tag}>{file.faculty}</span>
            <span className={styles.tag}>{file.theme}</span>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.timeText}>{file.date}</div>
          <button onClick={toggleDropdown} className={styles.dropdownButton}>
            {isDropdownOpen ? (
              <CaretCircleUp size={24} weight="fill" color="#007AFF" />
            ) : (
              <CaretCircleDown size={24} weight="fill" color="#007AFF" />
            )}
          </button>
        </div>
      </div>
      {isDropdownOpen && (
        <div className={`${styles.bottomSection} ${isDropdownOpen ? styles.bottomSectionOpen : ""}`}>
          <p className={styles.descriptionTitle}>Description</p>
          <p className={styles.description}>{file.description}</p>
        </div>
      )}
    </div>
  );
};
