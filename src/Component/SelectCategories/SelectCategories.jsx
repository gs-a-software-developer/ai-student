import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import data from '../../Data/data.json';
import styles from "./SelectCategories.module.css";
import commonStyles from "../commonStyles.module.css";

const SelectCategories = ({ onBack, onFinish }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  const items = [...data.faculties, ...data.moduleCodes, ...data.themes]; // Combine all categories

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleItemSelection = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const removeTag = (item) => {
    setSelectedItems(selectedItems.filter((i) => i !== item));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFinish(selectedItems);
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <p className={styles.subTitle}>
        Please select the categories that best match your file details.
      </p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.select}>
          <div className={styles.dropdownContainer}>
            <div className={styles.selectHeader} onClick={toggleDropdown}>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Search options..."
                value={searchTerm}
                onChange={handleSearchChange}
                onClick={(e) => e.stopPropagation()} // prevent closing the dropdown
              />
              <div className={styles.arrow}>
                {isOpen ? (
                  <FontAwesomeIcon icon={faCaretUp} />
                ) : (
                  <FontAwesomeIcon icon={faCaretDown} />
                )}
              </div>
            </div>
            {selectedItems.length > 0 && (
              <div className={styles.tags}>
                {selectedItems.map((item) => (
                  <div className={styles.tag} key={item}>
                    <span>{item}</span>
                    <span
                      className={styles.removeTag}
                      onClick={() => removeTag(item)}
                    >
                      x
                    </span>
                  </div>
                ))}
              </div>
            )}
            {isOpen && (
              <div className={styles.dropdownList}>
                {filteredItems.map((item) => (
                  <div
                    key={item}
                    className={`${styles.dropdownItem} ${
                      selectedItems.includes(item) ? styles.selected : ""
                    }`}
                    onClick={() => toggleItemSelection(item)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div
          className={`${styles.buttonsContainer} ${commonStyles.buttonsContainer}`}
        >
          <button
            type="button"
            onClick={onBack}
            className={`${commonStyles.button} ${commonStyles.backButton}`}
          >
            Back
          </button>
          <button
            type="submit"
            className={`${commonStyles.button} ${commonStyles.nextButton}`}
          >
            Finish
          </button>
        </div>
      </form>
    </div>
  );
};

export default SelectCategories;
