// Generate
import React, { useState, useEffect } from "react";
import { Notepad, QuestionMark, CardsThree, Cards } from "@phosphor-icons/react";
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
  { id: 4, label: "Slides", icon: <Cards size={20} />, color: "#8E6CDB" },
];

const Generate = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleIconClick = (id) => {
    setSelectedId((prevSelectedId) => (prevSelectedId === id ? null : id));
  };

  const handleOutsideClick = (event) => {
    const target = event.target;
    if (!target.closest(`.${styles.iconWrapper}`)) {
      setSelectedId(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className={`${styles.container} ${styles.dFlex} ${styles.flexColumn}`}>
      <h2 className={`${styles.heading} ${styles.heading2}`}>Generate Content</h2>
      <div className={styles.iconsBox}>
        <div className={styles.iconsContainer}>
          {icons.map((item) => (
            <div
              key={item.id}
              className={`${styles.iconWrapper} ${
                selectedId === item.id ? styles.selected : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                handleIconClick(item.id);
              }}
            >
              <div
                className={styles.icon}
                style={{
                  backgroundColor:
                    selectedId === item.id ? item.color : item.color + "33",
                  color: selectedId === item.id ? "#fff" : item.color,
                }}
              >
                {item.icon}
              </div>
              <span className={`${styles.label} ${styles.text1}`}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <button
        className={styles.generateButton}
        disabled={!selectedId}
        style={{
          backgroundColor: selectedId ? "var(--color-secondary)" : "var(--color-muted)",
          cursor: selectedId ? "pointer" : "not-allowed",
        }}
      >
        Generate
      </button>
    </div>
  );
};

export default Generate;
