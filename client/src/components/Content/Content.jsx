// Content
import React from "react";
import {
  Book,
  Notepad,
  QuestionMark,
  Code,
  Video,
  Image,
  CardsThree,
  Graph,
  Slideshow,
  Trash, // Import the Trash icon
} from "@phosphor-icons/react";
import { getIconAndColor } from "../../utils/getIconAndColor";
import styles from "./Content.module.css";

const Content = ({ content, isSelected, onSelect, onDelete }) => {
  console.log("Content rendered:", content.id); // Debugging log
  const { icon, color } = getIconAndColor(content.contentType);
  const IconComponent = {
    Book: Book,
    Notepad: Notepad,
    QuestionMark: QuestionMark,
    Code: Code,
    Video: Video,
    Image: Image,
    CardsThree: CardsThree,
    Graph: Graph,
    Slideshow: Slideshow,
  }[icon] || Book;

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => {
            console.log("Checkbox clicked:", content.id);
            onSelect(content.id);
          }}
          className={styles.checkbox}
        />
      </div>

      <div key={content.id} className={styles.moduleContainer}>
        <div className={styles.leftBar} style={{ backgroundColor: color }}></div>
        <div className={styles.content}>
          <div className={styles.iconContainer} style={{ backgroundColor: `${color}33` }}>
            <IconComponent size={20} color={color} />
          </div>
          <div className={styles.moduleInfo}>
            <div>
              <span className={styles.moduleName}>{content.contentType}</span>
              <span className={styles.moduleCode}> {" - " + content.name}</span>
            </div>
            <span className={styles.subtopic}>{content.subject || "Unknown Subject"}</span>
          </div>
        </div>
        {/* Delete icon */}
        <div className={styles.deleteIcon} onClick={() => onDelete(content.id)}>
          <Trash size={20} color="var(--color-muted)" />
        </div>
      </div>
    </div>
  );
};

export default Content;
