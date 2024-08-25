import React, { useState } from "react";
import { CaretRight, CaretLeft  } from '@phosphor-icons/react';
import styles from "./AddFileDetails.module.css";
import commonStyles from "../commonStyles.module.css";

const AddFileDetails = ({ onNext, onBack, formData }) => {
  const [details, setDetails] = useState(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(details);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.subTitle}>
          Please provide the details for the file you have uploaded.
        </p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.gridContainer}>
            <div className={styles.gridItem}>
              <label>File Title</label>
              <input
                type="text"
                name="title"
                value={details.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.gridItem}>
              <label>Year</label>
              <input
                type="number"
                name="year"
                value={details.year}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.gridItem}>
              <label>Author</label>
              <input
                type="text"
                name="author"
                value={details.author}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.gridItem}>
              <label>Module Code</label>
              <input
                type="text"
                name="moduleCode"
                value={details.moduleCode}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.gridItem}>
              <label>Faculty Name</label>
              <input
                type="text"
                name="facultyName"
                value={details.facultyName}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.gridItem}>
              <label>Course Code</label>
              <input
                type="text"
                name="courseCode"
                value={details.courseCode}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </form>
      </div>
      <div className={`${styles.buttons} ${commonStyles.buttonsContainer}`}>
        <button
          type="button"
          onClick={onBack}
          className={`${commonStyles.button} ${commonStyles.backButton}`}
        >
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className={`${commonStyles.button} ${commonStyles.nextButton}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AddFileDetails;
