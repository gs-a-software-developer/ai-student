// Generate
import React, { useState, useEffect, useRef } from "react";
import { Notepad, QuestionMark, CardsThree } from "@phosphor-icons/react";
import styles from "./Generate.module.css";

const icons = [
  { id: 1, label: "Quiz", icon: <QuestionMark size={20} />, color: "#1542B4" },
  {
    id: 2,
    label: "Flash Cards",
    icon: <CardsThree size={20} />,
    color: "#F48FFA",
  },
  { id: 3, label: "Summary", icon: <Notepad size={20} />, color: "#61A5F3" },
];

const Generate = ({ selectedFiles }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [generationType, setGenerationType] = useState(null);
  const containerRef = useRef(null);

  const handleIconClick = (id) => {
    console.log("Icon clicked, selectedId:", id);
    setSelectedId((prevSelectedId) => (prevSelectedId === id ? null : id));
    setGenerationType(icons.find((icon) => icon.id === id)?.label || null);
  };

  const handleOutsideClick = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setSelectedId(null);
    }
  };

  const handleGenerate = () => {
    console.log("selectedFiles:", selectedFiles);
    console.log("selectedId:", selectedId);

    if (selectedFiles.length > 0 && selectedId) {
      console.log("Generating...");
      setIsLoading(true);
      
      setTimeout(() => {
        setIsLoading(false);
        alert(`Generated ${generationType} for selected files.`);
      }, 3000);
    } else {
      if (selectedFiles.length === 0) {
        alert("Please select at least one file.");
      }
      if (!selectedId) {
        alert("Please select a generation type.");
      }
    }
  };

  const handleCancel = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${styles.dFlex} ${styles.flexColumn}`}
    >
      <h2 className={`${styles.heading} ${styles.heading2}`}>
        Generate Content
      </h2>
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
                    selectedId === item.id ? item.color : `${item.color}33`,
                  color: selectedId === item.id ? "#fff" : item.color,
                }}
              >
                {item.icon}
              </div>
              <span className={`${styles.label} ${styles.text1}`}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <button
        className={styles.generateButton}
        onClick={handleGenerate}
        disabled={!selectedId}
        style={{
          backgroundColor: selectedId
            ? "var(--color-secondary)"
            : "var(--color-muted)",
          cursor: selectedId ? "pointer" : "not-allowed",
        }}
      >
        Generate
      </button>

      {/* Loading Screen */}
      {isLoading && (
        <LoadingScreen
          generationType={generationType}
          onCancel={() => setIsLoading(false)}
        />
      )}
    </div>
  );
};

const LoadingScreen = ({ generationType, onCancel }) => {
  console.log("LoadingScreen rendered"); // Debugging log
  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.loadingContent}>
        <div className={styles.loadingAnimation}>
          <div className={styles.spinner}></div>
        </div>
        <p className={styles.loadingMessage}>
          AI-Tutor is generating a {generationType} for you...
        </p>
        <div className={styles.modalFooter}>
          <button className={styles.cancelButton} onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Generate;
