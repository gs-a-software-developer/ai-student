import React from "react";
import {
  Notepad,
  QuestionMark,
  CardsThree,
  Cards,
} from '@phosphor-icons/react';
import styles from "./Generate.module.css";

const icons = [
  { id: 1, label: "Quiz", icon: <QuestionMark size={20} />, color: "#1542B4" },
  {
    id: 2,
    label: "Flash Cards",
    icon: <CardsThree size={20} />,
    color: "#F48FFA",
  },
  { id: 3, label: "Notes", icon: <Notepad size={20} />, color: "#61A5F3" },
  { id: 1, label: "Slides", icon: <Cards size={20} />, color: "#8E6CDB" },
];

const Generate = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Generate Content</h2>
      <div className={styles.iconsBox}>
        <div className={styles.iconsContainer}>
          {icons.map((item) => (
            <div key={item.id} className={styles.iconWrapper}>
              <div
                className={styles.icon}
                style={{
                  backgroundColor: item.color + "33",
                  color: item.color,
                }}
              >
                {item.icon}
              </div>
              <span className={styles.label}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <button className={styles.generateButton}>Generate</button>
    </div>
  );
};

export default Generate;
