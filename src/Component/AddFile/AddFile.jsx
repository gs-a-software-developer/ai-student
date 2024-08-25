import React, { useState } from 'react';
import UploadFileComponent from '../UploadFileComponent/UploadFileComponent';
import AddFileDetails from '../AddFileDetails/AddFileDetails';
import SelectCategories from '../SelectCategories/SelectCategories';
import { X } from "@phosphor-icons/react";
import styles from "./AddFile.module.css";

const AddFile = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    year: "",
    author: "",
    moduleCode: "",
    facultyName: "",
    courseCode: "",
    categories: [],
  });

  const handleNextStep = (data) => {
    setFormData({ ...formData, ...data });
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <UploadFileComponent onNext={handleNextStep} formData={formData} />
        );
      case 1:
        return (
          <AddFileDetails
            onNext={handleNextStep}
            onBack={handlePrevStep}
            formData={formData}
          />
        );
      case 2:
        return (
          <SelectCategories
            onNext={handleNextStep}
            onBack={handlePrevStep}
            formData={formData}
            onClose={onClose}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <h2>Upload File</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        <div className={styles.modalContent}>{renderStepContent()}</div>
      </div>
    </div>
  );
};

export default AddFile;
