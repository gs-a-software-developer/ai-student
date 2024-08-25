import React from "react";
import Module from "./Module";
import styles from "./Module.module.css";

const ModuleRow = () => {
  const modules = [
    {
      moduleName: "Information Systems",
      moduleCode: "ISY23BT",
      lecturerName: "Dr Jesus Christ",
    },
    {
      moduleName: "Computer Science",
      moduleCode: "CSC101",
      lecturerName: "Prof John Doe",
    },
    {
      moduleName: "Mathematics for Computing",
      moduleCode: "MTH120",
      lecturerName: "Dr Mary Smith",
    },
    {
      moduleName: "Data Structures and Algorithms",
      moduleCode: "DSA215",
      lecturerName: "Dr Alan Turing",
    },
    {
      moduleName: "Database Management Systems",
      moduleCode: "DBMS310",
      lecturerName: "Prof Grace Hopper",
    },
    {
      moduleName: "Artificial Intelligence",
      moduleCode: "AI450",
      lecturerName: "Dr Andrew Ng",
    },
    {
      moduleName: "Web Development",
      moduleCode: "WEB230",
      lecturerName: "Ms Ada Lovelace",
    },
    {
      moduleName: "Operating Systems",
      moduleCode: "OS220",
      lecturerName: "Dr Linus Torvalds",
    },
    {
      moduleName: "Computer Networks",
      moduleCode: "NET101",
      lecturerName: "Prof Vinton Cerf",
    },
    {
      moduleName: "Software Engineering",
      moduleCode: "SWE200",
      lecturerName: "Prof Margaret Hamilton",
    },
  ];

  return (
    <div className={styles.moduleRow}>
      {modules.map((module, index) => (
        <Module
          key={index}
          moduleName={module.moduleName}
          moduleCode={module.moduleCode}
          lecturerName={module.lecturerName}
        />
      ))}
    </div>
  );
};

export default ModuleRow;
