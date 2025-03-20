// Layout.jsx
import React, { useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Welcome from "../components/Welcome/Welcome";
import Navbar from "../components/Navbar/Navbar";
import Authentication from "../page/Authentication/Authentication";
import Login from "../page/Authentication/Login";
import Register from "../page/Authentication/Register";
import Chats from "../components/Chats/Chats";
import Generate from "../components/Generate/Generate";
import Role from "../components/Role/Role";
import Modules from "../components/Modules/Modules";
import Contents from "../components/Contents/Contents";
import ChatBox from "../page/ChatBox/ChatBox";
import Settings from "../page/Settings/Settings";
import styles from "./Layout.module.css";

const sidebarComponents = {
  "/ai-tutor/chatbox": <Chats />,
  "/ai-tutor/modules": <Generate selectedFiles={[]} />,
  "/ai-tutor/contents": <Generate selectedFiles={[]} />,
};

const getSidebarComponent = (path, selectedFiles) => {
  if (path.startsWith("/ai-tutor/chatbox")) return <Chats />;
  if (path.startsWith("/authentication")) return <Role />;

  if (path === "/ai-tutor/modules") return null;
  if (path.startsWith("/ai-tutor/modules/"))
    return <Generate selectedFiles={selectedFiles} />;

  return null;
};

const Layout = () => {
  const { pathname } = useLocation();
  const isAuthPage = pathname.startsWith("/authentication");
  const [selectedFiles, setSelectedFiles] = useState([]);

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        {isAuthPage ? <Welcome /> : <Navbar />}
      </div>
      <div className={styles.center}>
        <div className={styles.content}>
          <Routes>
            {/* Authentication Routes */}
            <Route path="/" element={<Navigate to="/authentication/login" />} />
            <Route path="authentication" element={<Authentication />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>

            {/* App Routes */}
            <Route path="/ai-tutor/modules" element={<Modules />} />
            <Route
              path="/ai-tutor/modules/:moduleName"
              element={<Contents onSelectFiles={setSelectedFiles} />}
            />
            <Route path="/ai-tutor/chatbox" element={<ChatBox />} />
            <Route path="/ai-tutor/chatbox/:id" element={<ChatBox />} />
            <Route path="/ai-tutor/settings" element={<Settings />}/>
          </Routes>
        </div>
        <div className={styles.sidebar}>
          {getSidebarComponent(pathname, selectedFiles)}
        </div>
      </div>
    </div>
  );
};

export default Layout;
