import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from "./Styles.module.css";

const Login = ({ handleSwitch }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here, then redirect
    navigate('/ai-tutor/modules');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Login</h1>
      <div className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            id="studentIdentifier"
            className={styles.formInput}
            placeholder=" "
          />
          <label htmlFor="studentIdentifier" className={styles.formLabel}>
            Student Number/Email
          </label>
        </div>
        <div className={styles.inputContainer}>
          <input
            type="password"
            id="password"
            className={styles.formInput}
            placeholder=" "
          />
          <label htmlFor="password" className={styles.formLabel}>
            Password
          </label>
        </div>
      </div>
      <div className={styles.footer}>
        <button className={styles.switchButton} onClick={handleSwitch}>
          Go to Register
        </button>
        <button className={styles.submitButton} onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
};

export default Login;
