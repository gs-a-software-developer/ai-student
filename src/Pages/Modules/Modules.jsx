import Content from "../../Component/Content/Content";
import { content1, content2, content3, content4 } from "../../Assets";

import styles from "./Modules.module.css";

const images = [content1, content2, content3, content4];

function Modules() {
  const modules = [
    {
      moduleName: "Information Systems",
      moduleCode: "ISY23BT",
      moduleDescription:
        "An introduction to information systems and their applications in business. This course covers various aspects of information systems including their role in business processes and decision-making.",
      moduleColor: "#F48FFA", // Example color
      image: images[0],
    },
    {
      moduleName: "Computer Science",
      moduleCode: "CSC101",
      moduleDescription:
        "Fundamentals of computer science including algorithms and programming. This module provides an overview of basic concepts in computer science and programming practices.",
      moduleColor: "#61A5F3", // Example color
      image: images[1],
    },
    {
      moduleName: "Mathematics for Computing",
      moduleCode: "MTH120",
      moduleDescription:
        "Mathematical concepts and techniques used in computer science. Includes topics such as linear algebra, calculus, and discrete mathematics relevant to computing.",
      moduleColor: " #8E6CDB", // Example color
      image: images[2],
    },
    {
      moduleName: "Data Structures and Algorithms",
      moduleCode: "DSA215",
      moduleDescription:
        "Study of data structures and algorithms for efficient data processing. Focuses on algorithm design, data structure implementation, and complexity analysis.",
      moduleColor: "#B6C1D6", // Example color
      image: images[3],
    },
    // Add more modules as needed
  ];

  return (
    <div className={styles.contentsContainer}>
      <h1 className={styles.title}>Modules</h1>
      <div className={styles.modulesGrid}>
        {modules.map((module, index) => (
          <div className={styles.moduleItem} key={index}>
            <Content module={module} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Modules;
