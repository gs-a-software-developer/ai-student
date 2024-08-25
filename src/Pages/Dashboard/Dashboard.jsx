import React, { useEffect, useState } from 'react';
import styles from './Dashboard.module.css';
import pageStyles from '../pageStyles.module.css';
import { CaretDown } from "@phosphor-icons/react";
import { File } from '../../Component/File/File';
import filesData from '../../Data/filesData.json';

const Dashboard = () => {
  const [fileCounts, setFileCounts] = useState({ video: 0, document: 0, image: 0 });

  useEffect(() => {
    // Count the files by type
    const counts = { video: 0, document: 0, image: 0 };
    filesData.forEach(file => {
      counts[file.type]++;
    });
    setFileCounts(counts);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={pageStyles.pageTitle}>Dashboard</h1>
      <div className={styles.textContainer}>
        <span className={styles.leftText}>
          <span className={styles.fileCount}>{fileCounts.video + fileCounts.document + fileCounts.image}</span>
          <span>files uploaded</span>
        </span>
        <span className={styles.rightText}>
          <span className={styles.sortBy}>Sort by Date</span>
          <CaretDown weight='bold' className={styles.dropdownIcon} />
        </span>
      </div>
      <div className={styles.content}>
        {filesData.map((file) => (
          <File key={file.id} file={file} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
