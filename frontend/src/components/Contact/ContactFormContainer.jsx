// src/components/ContactFormContainer.jsx
import React, { useState } from "react";
import CorporateOnboardingForm from "./CorporateOnboardingForm";
import FeedbackForm from "./FeedbackForm";
import SupplierEngagement from "./SupplierEngagement";
import ContactInfo from "./ContactInfo";
import styles from "./Forms.module.css";

const ContactFormContainer = () => {
  const [selectedForm, setSelectedForm] = useState("feedback");

  const renderForm = () => {
    switch (selectedForm) {
      case "corporate":
        return <CorporateOnboardingForm />;
      case "supplier":
        return <SupplierEngagement />;
      default:
        return <FeedbackForm />;
    }
  };

  return (
    <div className={styles.container2}>
      <ContactInfo />
      <div className={styles.form2}>
        <div className={styles.formSelector}>
          <button onClick={() => setSelectedForm("feedback")}>Feedback Form</button>
          <button onClick={() => setSelectedForm("corporate")}>Corporate Onboarding</button>
          <button onClick={() => setSelectedForm("supplier")}>Supplier Engagement</button>
        </div>
        {renderForm()}
      </div>
    </div>
  );
};

export default ContactFormContainer;