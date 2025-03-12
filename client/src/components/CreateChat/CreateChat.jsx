// CreateChat
import React from "react";
import { Plus, PaperPlaneRight, X } from "@phosphor-icons/react";
import styles from "./CreateChat.module.css";

const CreateChat = () => {
  const [inputText, setInputText] = React.useState("");
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [selectedModule, setSelectedModule] = React.useState(null); // Track selected module
  const dropdownItems = [
    { moduleName: "Mathematics", moduleCode: "MATH101" },
    { moduleName: "Physics", moduleCode: "PHYS101" },
    { moduleName: "Chemistry", moduleCode: "CHEM101" },
    { moduleName: "Biology", moduleCode: "BIO101" },
  ];

  const handleInputChange = (e) => setInputText(e.target.value);

  const handleSend = () => {
    console.log("Send:", inputText);
    setInputText("");
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleModuleSelect = (module) => {
    if (selectedModule && selectedModule.moduleCode === module.moduleCode) {
      // Deselect if the same module is clicked again
      setSelectedModule(null);
    } else {
      // Select the new module
      setSelectedModule(module);
    }
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className={styles.createChatContainer}>
      <h1 className={styles.heading}>Get Smarter with Ai-Tutor</h1>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          placeholder="Enter text here"
          type="text"
          value={inputText}
          onChange={handleInputChange}
        />
        <button
          className={`${styles.selectButton} ${
            selectedModule ? styles.noBackground : ""
          }`}
          onClick={toggleDropdown}
        >
          {selectedModule ? (
            <span className={styles.moduleCode}>
              {selectedModule.moduleCode}
            </span>
          ) : isDropdownOpen ? (
            <X size={16} color="var(--color-dark-2)" weight="light" />
          ) : (
            <Plus size={16} color="var(--color-dark-2)" weight="light" />
          )}
        </button>
        {isDropdownOpen && (
          <div className={styles.dropdownList}>
            {dropdownItems.map((item, index) => (
              <div
                key={index}
                className={styles.dropdownItem}
                onClick={() => handleModuleSelect(item)}
              >
                <input
                  type="radio"
                  className={styles.radio}
                  checked={
                    selectedModule &&
                    selectedModule.moduleCode === item.moduleCode
                  }
                  onChange={() => handleModuleSelect(item)}
                />
                <span className={styles.dropdownText}>
                  {item.moduleName} ({item.moduleCode})
                </span>
              </div>
            ))}
          </div>
        )}
        <button className={styles.sendButton} onClick={handleSend}>
          <PaperPlaneRight size={16} color="#007aff" />
        </button>
      </div>
    </div>
  );
};

export default CreateChat;
