import React from "react";
import styles from "./Contents.module.css";
import Module from "../../Component/Module/Module";
import { content1, content2, content3, content4 } from "../../Assets";

const images = [content1, content2, content3, content4];

const Contents = () => {
  const modules = [
    {
      moduleName: "Information Systems",
      moduleCode: "ISY23BT",
      lecturerName: "Dr Jesus Christ",
      color: "#1542B4", // Blue
    },
    {
      moduleName: "Computer Science",
      moduleCode: "CSC101",
      lecturerName: "Prof John Doe",
      color: "#F48FFA", // Orange
    },
    {
      moduleName: "Mathematics for Computing",
      moduleCode: "MTH120",
      lecturerName: "Dr Mary Smith",
      color: "#61A5F3", // Green
    },
    {
      moduleName: "Data Structures and Algorithms",
      moduleCode: "DSA215",
      lecturerName: "Dr Alan Turing",
      color: "#8E6CDB", // Red
    },
    {
      moduleName: "Database Management Systems",
      moduleCode: "DBMS310",
      lecturerName: "Prof Grace Hopper",
      color: "#B6C1D6", // Purple
    },
    {
      moduleName: "Artificial Intelligence",
      moduleCode: "AI450",
      lecturerName: "Dr Andrew Ng",
      color: "#3C7CC6", // Yellow
    },
    {
      moduleName: "Web Development",
      moduleCode: "WEB230",
      lecturerName: "Ms Ada Lovelace",
      color: "#8e44ad", // Dark Purple
    },
    {
      moduleName: "Operating Systems",
      moduleCode: "OS220",
      lecturerName: "Dr Linus Torvalds",
      color: "#1542B4", // Light Blue
    },
    {
      moduleName: "Computer Networks",
      moduleCode: "NET101",
      lecturerName: "Prof Vinton Cerf",
      color: "#F48FFA", // Teal
    },
    {
      moduleName: "Software Engineering",
      moduleCode: "SWE200",
      lecturerName: "Prof Margaret Hamilton",
      color: "#61A5F3", // Dark Orange
    },
  ];

  return (
    <div>
      <h1 className={styles.title}>Contents</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "10px",
        }}
      >
        {modules.map((module, index) => (
          <Module
            key={index}
            color={module.color}
            moduleName={module.moduleName}
            moduleCode={module.moduleCode}
            lecturerName={module.lecturerName}
          />
        ))}
      </div>
    </div>
  );
};

export default Contents;
