import React, { useState } from "react";
import SupplierEngagementForm from "./SupplierEngagementForm";
import CorporateOnboardingForm from "./CorporateOnboardingForm";
import FeedbackForm from "./FeedbackForm";
import ContactInfo from "./ContactInfo";
import contactStyles from "./Forms.module.css"; // Ensure Forms.module.css is correctly imported

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
    <div className={contactStyles.container2}>
      <div className={contactStyles.form2}>
        <ContactInfo />
        <div className={contactStyles.contactForm}>
          <span className={contactStyles.circleOne}></span>
          <span className={contactStyles.circleTwo}></span>
          <div className={contactStyles.myForm}>
            <h3 className={contactStyles.formTitle}>Contact Us</h3>
            <div className={contactStyles.inputContainer}>
              <label htmlFor="form-select">Select Form Type</label>
              <select
                id="form-select"
                className={contactStyles.input}
                value={formType}
                onChange={(e) => setFormType(e.target.value)}
              >
                <option value="" disabled hidden>Select Form Type</option>
                <option value="feedback">Customer Feedback</option>
                <option value="supplier">Supplier Engagement</option>
                <option value="corporate">Corporate Onboarding</option>
              </select>
            </div>
            {renderForm()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainForm;