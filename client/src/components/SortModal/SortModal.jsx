// SortModal
// SortModal.jsx
import React, { useState } from "react";
import { X, CaretUp, CaretDown } from "@phosphor-icons/react";
import styles from "./SortModal.module.css";

const SortModal = ({
  isOpen,
  onClose,
  displayOptions,
  contentTypes,
  fileTypes,
  displayFilter,
  setDisplayFilter,
  contentTypeFilter,
  setContentTypeFilter,
  fileTypeFilter,
  setFileTypeFilter,
}) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  if (!isOpen) return null;

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const handleClearAll = () => {
    setDisplayFilter(["All Modules"]); 
    setContentTypeFilter([]);
    setFileTypeFilter([]);
  };
  

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        {/* Header with Close Button */}
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Sort and Filter Options</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Dropdowns aligned in the same row */}
        <div className={styles.dropdownGroup}>
          <Dropdown
            label="Display"
            type="radio"
            options={displayOptions}
            selected={displayFilter}
            onSelect={setDisplayFilter}
            isOpen={openDropdown === "display"}
            toggle={() => toggleDropdown("display")}
          />
          <Dropdown
            label="Content Type"
            type="multi-select"
            options={contentTypes}
            selected={contentTypeFilter}
            onSelect={setContentTypeFilter}
            onClear={() => setContentTypeFilter([])}
            isOpen={openDropdown === "contentType"}
            toggle={() => toggleDropdown("contentType")}
          />
          <Dropdown
            label="File Type"
            type="multi-select"
            options={fileTypes}
            selected={fileTypeFilter}
            onSelect={setFileTypeFilter}
            onClear={() => setFileTypeFilter([])}
            isOpen={openDropdown === "fileType"}
            toggle={() => toggleDropdown("fileType")}
          />
        </div>

        {/* Open Dropdown Content inside modalContent */}
        {openDropdown && (
          <div className={styles.dropdownList}>
            {openDropdown === "display" &&
              displayOptions.map((option, index) => (
                <DropdownItem key={index} option={option} selected={displayFilter} onSelect={setDisplayFilter} type="radio" />
              ))}
            {openDropdown === "contentType" &&
              contentTypes.map((option, index) => (
                <DropdownItem key={index} option={option} selected={contentTypeFilter} onSelect={setContentTypeFilter} type="multi-select" />
              ))}
            {openDropdown === "fileType" &&
              fileTypes.map((option, index) => (
                <DropdownItem key={index} option={option} selected={fileTypeFilter} onSelect={setFileTypeFilter} type="multi-select" />
              ))}
          </div>
        )}

        {/* Footer with Clear All Button */}
        <div className={styles.modalFooter}>
          <button className={styles.clearAllButton} onClick={handleClearAll}>
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

const Dropdown = ({ label, isOpen, toggle }) => {
  return (
    <div className={styles.dropdownContainer}>
      <div className={`${styles.dropdownHeader} ${isOpen ? styles.open : ""}`} onClick={toggle}>
        <span className={styles.dropdownText}>{label}</span>
        <div className={styles.caret}>{isOpen ? <CaretUp size={14} /> : <CaretDown size={14} />}</div>
      </div>
    </div>
  );
};

const DropdownItem = ({ option, selected, onSelect, type }) => {
  const handleChange = () => {
    if (type === "multi-select") {
      const updatedSelection = selected.includes(option)
        ? selected.filter((item) => item !== option)
        : [...selected, option];
      onSelect(updatedSelection);
    } else {
      onSelect([option]);
    }
  };

  return (
    <label className={styles.dropdownItem}>
      <input
        type={type === "multi-select" ? "checkbox" : "radio"}
        className={type === "multi-select" ? styles.checkbox : styles.radio}
        checked={selected.includes(option)}
        onChange={handleChange}
      />
      <span className={styles.dropdownText}>{option}</span>
    </label>
  );
};

export default SortModal;