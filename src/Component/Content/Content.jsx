// Content.js
import React from 'react';
import styles from './Content.module.css';
import { CaretCircleRight } from '@phosphor-icons/react';

const truncateDescription = (text, maxSentences) => {
  const sentences = text.split('. ');
  if (sentences.length <= maxSentences) return text;

  return sentences.slice(0, maxSentences).join('. ') + '.';
};

const Content = ({ module }) => {
  // Light color version
  const lightColor = `${module.moduleColor}15`; // Add alpha for lighter color
  const iconColor = module.moduleColor; // Use the same color for the icon
  const borderColor = module.moduleColor; // Border color
  const lightBackgroundColor = `${module.moduleColor}15`; // Light background color for moduleCode
  
  // Applying light background color for moduleCode
  const moduleCodeStyle = {
    color: borderColor,
    backgroundColor: lightBackgroundColor,
    border: 'none',
    borderRadius: '25px',
  };
  
  const truncatedDescription = truncateDescription(module.moduleDescription);

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: lightColor, borderColor: borderColor }}
    >
      <div className={styles.leftSection}>
        <img
          src={module.image} // Use the image prop
          alt="Module Image"
          className={styles.image}
        />
      </div>
      <div className={styles.rightSection}>
        <div className={styles.textContainer}>
          <p className={styles.moduleName}>{module.moduleName}</p>
          <p className={styles.moduleDescription}>{truncatedDescription}</p>
        </div>
        <div className={styles.bottomTextContainer}>
          <span className={styles.moduleCode} style={moduleCodeStyle}>
            {module.moduleCode}
          </span>
          <span className={styles.icon}>
            <CaretCircleRight size={32} weight="fill" color={iconColor} />  
          </span>
        </div>
      </div>
    </div>
  );
};

export default Content;
