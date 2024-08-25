import React from 'react';
import { Book, DotsThreeVertical } from '@phosphor-icons/react';
import styles from './Module.module.css';

const Module = ({ moduleName, moduleCode, lecturerName, color }) => {
  return (
    <div className={styles.moduleContainer}>
      <div className={styles.leftBar} style={{ backgroundColor: color }}></div>
      <div className={styles.content}>
        <div className={styles.header}>
          <div
            className={styles.iconContainer}
            style={{ backgroundColor: `${color}33` }} // Light version of the color
          >
            <Book size={16} color={color} />
          </div>
          <div className={styles.moduleInfo}>
            <span className={styles.moduleName}>{moduleName}</span>
            <span className={styles.moduleCode} style={{ color: color }}>
              {' '}
              - {moduleCode}
            </span>
          </div>
          <div className={styles.menuIcon}>
            <DotsThreeVertical size={16} color="lightgray" />
          </div>
        </div>
        <div className={styles.lecturerName}>{lecturerName}</div>
      </div>
    </div>
  );
};

export default Module;
