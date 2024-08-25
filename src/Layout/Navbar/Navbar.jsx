import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { Bone, Gauge, User, Note, Gear, SignOut } from "@phosphor-icons/react";
import styles from "./Navbar.module.css";
import { logo_1, upgrade } from "../../Assets/index"; // Importing the logo

const Navbar = () => {
  const isActive = (path) => window.location.pathname === path;

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logo_1} alt="Logo" className={styles.logo} /> {/* Adding the logo */}
        <span className={styles.appName}>AI TUTOR</span>
      </div>
      <ul className={styles.upperMenu}>
        <li>
          <Link to="/ai-tutor/modules">
            <div
              className={classNames(styles.link, {
                [styles.activeLink]: isActive("/ai-tutor/modules"),
              })}
            >
              <div>
                <Gauge size={20} weight="light" />
              </div>
              <div>Modules</div>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/ai-tutor/contents">
            <div
              className={classNames(styles.link, {
                [styles.activeLink]: isActive("/ai-tutor/contents"),
              })}
            >
              <div>
                <User size={20} weight="light" />
              </div>
              <div>Contents</div>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/ai-tutor/chatbox">
            <div
              className={classNames(styles.link, {
                [styles.activeLink]: isActive("/ai-tutor/chatbox"),
              })}
            >
              <div>
                <Note size={20} weight="light" />
              </div>
              <div>Chatbox</div>
            </div>
          </Link>
        </li>
      </ul>
      <ul className={styles.bottomMenu}>
        <li className={styles.imageContainer}>
          <img
            src={upgrade}
            alt="Bottom Image"
            className={styles.bottomImage}
          />
        </li>
        <li>
          <button className={styles.upgradeButton}>Upgrade</button>
        </li>
        <li>
          <Link to="/ai-tutor/settings">
            <div
              className={classNames(styles.link, {
                [styles.activeLink]: isActive("/ai-tutor/settings"),
              })}
            >
              <div>
                <Gear size={20} weight="light" />
              </div>
              <div>Settings</div>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div className={styles.link}>
              <div>
                <SignOut size={20} weight="light" />
              </div>
              <div>Logout</div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;