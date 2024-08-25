import React from "react";
import { HeadCircuit, Code } from "@phosphor-icons/react";
import styles from "./StartPage.module.css";
import { logo_1 } from "../../Assets";

const StartPage = () => {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.logoContainer}>
        <img src={logo_1} alt="Logo" className={styles.logo} /> {/* Adding the logo */}
        <span className={styles.appName}>AI TUTOR</span>
      </div>

      {/* Middle Section */}
      <section className={styles.middle}>
        <p className={styles.bigParagraph}>
          AI Tutor platform by Tshwane University of Technology and merSETA
          Chair in Tech-Enabled TVET
        </p>
        <p className={styles.smallParagraph}>
          Discover the future of education with our AI-driven platform.
          Personalize your learning, enhance your skills, and achieve your goals
          quickly with the tools you need to succeed..
        </p>
      </section>

      {/* Bottom Section */}
      <footer className={styles.footer}>
        <div className={styles.section}>
          <HeadCircuit size={24} color="#30B0C7" />
          <p className={styles.shortParagraph}>
            Transform Your Learning Experience with AI
          </p>
        </div>
        <div className={styles.section}>
          <Code size={24} color="#30B0C7" />
          <p className={styles.shortParagraph}>
            Unlock your potential with our AI-powered platform
          </p>
        </div>
      </footer>
    </div>
  );
};

export default StartPage;
