import React, { useState, useEffect } from 'react';
import { Video, FileText, Image } from "@phosphor-icons/react";
import styles from './UploadFiles.module.css';
import AddFile from '../AddFile/AddFile';

const UploadFiles = () => {
  const [activeIcon, setActiveIcon] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleIconClick = (icon, event) => {
    event.stopPropagation();
    setActiveIcon(icon);
  };

  const handleContainerClick = () => {
    setActiveIcon(null);
  };

  const handleUploadClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(`.${styles.iconWrapper}`) && !event.target.closest(`.${styles.uploadButton}`)) {
        setActiveIcon(null);
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const getIconColor = (icon) => {
    return activeIcon === icon ? '#007AFF' : '#D2D2D2';
  };

  const getTextClass = (icon) => {
    return activeIcon === icon ? styles.activeText : '';
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Upload Files</h1>
      <div className={styles.iconContainer}>
        <div
          className={`${styles.iconWrapper} ${activeIcon === 'video' ? styles.active : ''}`}
          onClick={(e) => handleIconClick('video', e)}
        >
          <Video color={getIconColor('video')} size={40} weight="thin" />
          <span className={`${styles.iconText} ${getTextClass('video')}`}>Video</span>
        </div>
        <div
          className={`${styles.iconWrapper} ${activeIcon === 'images' ? styles.active : ''}`}
          onClick={(e) => handleIconClick('images', e)}
        >
          <Image color={getIconColor('images')} size={40} weight="thin" />
          <span className={`${styles.iconText} ${getTextClass('images')}`}>Images</span>
        </div>
        <div
          className={`${styles.iconWrapper} ${activeIcon === 'documents' ? styles.active : ''}`}
          onClick={(e) => handleIconClick('documents', e)}
        >
          <FileText color={getIconColor('documents')} size={40} weight="thin" />
          <span className={`${styles.iconText} ${getTextClass('documents')}`}>Documents</span>
        </div>
        {/* Add more icons here if needed */}
      </div>
      <button
        className={`${styles.uploadButton} ${activeIcon ? styles.active : ''}`}
        onClick={handleUploadClick}
      >
        Upload
      </button>
      {showPopup && <AddFile onClose={handleClosePopup} />}
    </div>
  );
};

export default UploadFiles;
