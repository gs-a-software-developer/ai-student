import React, { useState } from "react";
import { File } from "../../Component/File/File";
import filesData from "../../Data/filesData.json";
import {
  Sliders,
  TrashSimple,
  X,
  ArrowLeft,
  ArrowRight,
  FileText,
  Image,
  Video,
  SortAscending,
  SortDescending,
} from "@phosphor-icons/react";
import styles from "./Files.module.css";
import pageStyles from "../pageStyles.module.css";

const Files = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isSortModalOpen, setSortModalOpen] = useState(false);
  const [sortOption, setSortOption] = useState("date");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("ascending");
  const [selectedFileType, setSelectedFileType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showFileTypeDropdown, setShowFileTypeDropdown] = useState(false);
  const [showCategoryCheckboxes, setShowCategoryCheckboxes] = useState(false);

  const filesPerPage = 10;
  const totalPages = Math.ceil(filesData.length / filesPerPage);

  const indexOfLastFile = currentPage * filesPerPage;
  const indexOfFirstFile = indexOfLastFile - filesPerPage;
  const currentFiles = filesData.slice(indexOfFirstFile, indexOfLastFile);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    setCurrentPage(1); // Reset to page 1 when searching
  };

  const handleCheckboxChange = (fileId) => {
    setSelectedFiles((prev) =>
      prev.includes(fileId)
        ? prev.filter((id) => id !== fileId)
        : [...prev, fileId]
    );
  };

  const handleSelectAllChange = () => {
    if (selectedFiles.length === filteredFiles.length) {
      setSelectedFiles([]);
    } else {
      setSelectedFiles(filteredFiles.map((file) => file.id));
    }
  };

  const handleDelete = () => {
    console.log("Deleting files:", selectedFiles);
    setSelectedFiles([]);
  };

  const handleSort = (option) => {
    setSortOption(option);
    setCurrentPage(1); // Reset to page 1 when sorting
  };

  const handleSortOrder = (order) => {
    setSortOrder(order);
  };

  const filteredFiles = filesData.filter((file) =>
    file.name.toLowerCase().includes(searchTerm)
  );

  const sortedFiles = [...filteredFiles].sort((a, b) => {
    let comparison = 0;
    switch (sortOption) {
      case "type":
        comparison = a.type.localeCompare(b.type);
        break;
      case "moduleCode":
        comparison = a.moduleCode.localeCompare(b.moduleCode);
        break;
      case "theme":
        comparison = a.theme.localeCompare(b.theme);
        break;
      case "faculty":
        comparison = a.faculty.localeCompare(b.faculty);
        break;
      default:
        comparison = new Date(b.date) - new Date(a.date);
        break;
    }
    return sortOrder === "ascending" ? comparison : -comparison;
  });

  const paginatedFiles = sortedFiles.slice(
    (currentPage - 1) * filesPerPage,
    currentPage * filesPerPage
  );

  const handleFileTypeSelect = (type) => {
    setSelectedFileType(type);
    setShowFileTypeDropdown(false);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowCategoryCheckboxes(true);
  };

  const handleApplyFilters = () => {
    setSortModalOpen(false);
    setShowCategoryCheckboxes(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={pageStyles.filePageTitle}>Files</h1>
      <div className={styles.header}>
        <input
          type="checkbox"
          checked={
            selectedFiles.length === filteredFiles.length &&
            filteredFiles.length > 0
          }
          onChange={handleSelectAllChange}
          className={`${styles.selectAllCheckbox} ${styles.checkbox}`}
        />
        <input
          type="text"
          placeholder="Search files..."
          className={styles.searchBar}
          onChange={handleSearch}
        />
        <div className={styles.buttonContainer}>
          <button
            className={styles.selectButton}
            onClick={() => setSortModalOpen(true)}
          >
            <Sliders size={24} color="#007AFF" />
          </button>
          <button
            className={`${styles.deleteButton} ${
              selectedFiles.length > 0 ? styles.deleteButtonActive : ""
            }`}
            onClick={handleDelete}
            disabled={selectedFiles.length === 0}
          >
            <TrashSimple
              size={24}
              color={selectedFiles.length > 0 ? "#FFFFFF" : "#DA263E"}
            />
          </button>
        </div>
      </div>
      <div className={styles.fileList}>
        {paginatedFiles.map((file) => (
          <div key={file.id} className={styles.fileItem}>
            <input
              type="checkbox"
              checked={selectedFiles.includes(file.id)}
              onChange={() => handleCheckboxChange(file.id)}
              className={`${styles.checkbox} ${
                selectedFiles.includes(file.id) ? styles.checkboxActive : ""
              }`}
            />
            <File file={file} />
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={styles.pageButton}
          style={{ backgroundColor: "transparent" }} // Transparent button
        >
          <ArrowLeft
            size={24}
            color={currentPage === 1 ? "#E6EDFB" : "#007AFF"} // Light blue if disabled, dark blue if selectable
          />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={styles.pageButton}
            style={{
              backgroundColor:
                currentPage === index + 1 ? "#007AFF" : "#E6EDFB", // Blue background if active, light blue if not active
              color: currentPage === index + 1 ? "#FFFFFF" : "#007AFF", // White text if active, blue text if not active
              border: "none", // Optional: remove border if any
            }}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={styles.pageButton}
          style={{ backgroundColor: "transparent" }} // Transparent button
        >
          <ArrowRight
            size={24}
            color={currentPage === totalPages ? "#E6EDFB" : "#007AFF"} // Light blue if disabled, dark blue if selectable
          />
        </button>
      </div>
      {isSortModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.sortModal}>
            <div className={styles.modalHeader}>
              <h2>Sort Files</h2>
              <button
                className={styles.closeButton}
                onClick={() => setSortModalOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            <div className={styles.modalContent}>
              <div className={styles.leftSide}>
                <button
                  className={styles.modelButton}
                  onClick={() => handleSortOrder("ascending")}
                >
                  <SortAscending weight="thin" size={24} color="#007AFF" />
                </button>
                <button
                  className={styles.modelButton}
                  onClick={() => handleSortOrder("descending")}
                >
                  <SortDescending weight="thin" size={24} color="#007AFF" />
                </button>
                <button
                  className={styles.modelButton}
                  onClick={() => setShowFileTypeDropdown(!showFileTypeDropdown)}
                >
                  {selectedFileType ? (
                    <>
                      {selectedFileType === "document" && (
                        <FileText size={24} />
                      )}
                      {selectedFileType === "image" && <Image size={24} />}
                      {selectedFileType === "video" && <Video size={24} />}
                    </>
                  ) : (
                    "File Type"
                  )}
                </button>
                {showFileTypeDropdown && (
                  <div className={styles.fileTypeDropdown}>
                    <button onClick={() => handleFileTypeSelect("document")}>
                      <FileText size={24} />
                      Document
                    </button>
                    <button onClick={() => handleFileTypeSelect("image")}>
                      <Image size={24} />
                      Image
                    </button>
                    <button onClick={() => handleFileTypeSelect("video")}>
                      <Video size={24} />
                      Video
                    </button>
                  </div>
                )}
              </div>
              <div className={styles.rightSide}>
                <select
                  className={styles.sortDropdown}
                  onChange={(e) => handleCategorySelect(e.target.value)}
                >
                  <option value="">Select Category</option>
                  <option value="moduleCode">Module Code</option>
                  <option value="faculty">Faculty</option>
                  <option value="theme">Theme</option>
                </select>
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button
                className={
                  selectedCategory || selectedFileType
                    ? styles.applyButton
                    : `${styles.applyButton} ${styles.applyButtonDisabled}`
                }
                onClick={handleApplyFilters}
                disabled={!selectedCategory && !selectedFileType}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Files;
