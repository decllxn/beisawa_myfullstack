// src/components/CorporateOnboardingForm.jsx
import React from "react";
import FormInput from "./FormInput";
import styles from "./Forms.module.css";

const CorporateOnboardingForm = () => {
  return (
    <form className={styles.contactForm}>
      <h3 className={styles.title}>Corporate Onboarding</h3>
      <FormInput type="text" name="corporateName" label="Corporate Name" />
      <FormInput type="email" name="corporateEmail" label="Corporate Email" />
      <FormInput type="textarea" name="onboardingDetails" label="Onboarding Details" />
      <button className={styles.btn2}>Submit</button>
    </form>
  );
};

export default CorporateOnboardingForm;