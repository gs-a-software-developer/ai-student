import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Contents from "../Pages/Contents/Contents";
import Chatbox from "../Pages/Chatbox/Chatbox";
import Modules from "../Pages/Modules/Modules";
import UploadFiles from "../Component/UploadFiles/UploadFiles";
import styles from "./Layout.module.css";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Role from "../Pages/Authentication/Role";
import Authentication from "../Pages/Authentication/Authentication";
import StartPage from "../Pages/Authentication/StartPage";
import Chats from "../Component/Chats/Chats";
import Generate from "../Component/Generate/Generate";

const Layout = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Determine which component to display in the sidebar
  const renderSidebarComponent = () => {
    if (currentPath === "/ai-tutor/chatbox") {
      return <Chats />;
    } else if (currentPath.startsWith("/authentication")) {
      return <Role />;
    } else if (currentPath === "/ai-tutor/modules" || currentPath === "/ai-tutor/contents") {
      return <Generate />;
    }
    return null;
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        {currentPath.startsWith("/authentication") ? (
          <StartPage />
        ) : (
          <Navbar />
        )}
      </div>
      <div className={styles.center}>
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Navigate to="/authentication/login" />} />
            <Route path="authentication" element={<Authentication />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route path="/ai-tutor/chatbox" element={<Chatbox />} />
            <Route path="/ai-tutor/modules" element={<Modules />} />
            <Route path="/ai-tutor/contents" element={<Contents />} />
          </Routes>
        </div>
        <div className={styles.sidebar}>
          {renderSidebarComponent()}
        </div>
      </div>
    </div>
  );
};

export default Layout;
