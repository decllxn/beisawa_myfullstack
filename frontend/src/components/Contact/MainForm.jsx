import React, { useState } from "react";
import SupplierEngagementForm from "./SupplierEngagementForm";
import CorporateOnboardingForm from "./CorporateOnboardingForm";
import FeedbackForm from "./FeedbackForm";
import ContactInfo from "./ContactInfo";
import styles from "./Forms.module.css"; // Adjusted import

const MainForm = () => {
  const [formType, setFormType] = useState("");

  const renderForm = () => {
    switch (formType) {
      case "feedback":
        return <FeedbackForm />;
      case "supplier":
        return <SupplierEngagementForm />;
      case "corporate":
        return <CorporateOnboardingForm />;
      default:
        return <FeedbackForm />;
    }
  };

  return (
    <>
      <div className={styles.container2}>
        <div className={styles.form2}>
          <ContactInfo />
          <div className={styles.contactForm}>
            <span className={styles.circleOne}></span>
            <span className={styles.circleTwo}></span>
            <form className={styles.myForm}>
              <h3 className={styles.title}>Contact Us</h3>
              <div className={styles.inputContainer}>
                <label htmlFor="form-select">Select Form Type</label>
                <select
                  id="form-select"
                  className={styles.input}
                  value={formType}
                  onChange={(e) => setFormType(e.target.value)}
                >
                  <option value="" disabled hidden></option>
                  <option value="feedback">Customer Feedback</option>
                  <option value="supplier">Supplier Engagement</option>
                  <option value="corporate">Corporate Onboarding</option>
                </select>
                <span>Select Form Type</span>
              </div>
              {renderForm()}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainForm;