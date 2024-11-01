import React from "react";
import useInputFocusEffect from "./Formfunction";

const CorporateOnboardingForm = () => {
    useInputFocusEffect();

  return (
    <>
      <div className={styles.inputContainer}>
        <input type="text" className={styles.input} required />
        <label>Corporate Name</label>
        <span>Corporate Name</span>
      </div>
      <div className={styles.inputContainer}>
        <input type="email" className={styles.input} required />
        <label>Corporate Email</label>
        <span>Corporate Email</span>
      </div>
      <div className={`${styles.inputContainer} ${styles.textarea}`}>
        <textarea className={styles.input} required></textarea>
        <label>Onboarding Details</label>
        <span>Onboarding Details</span>
      </div>
      <button className={styles.btn2}>Submit</button>
    </>
  );
};

export default CorporateOnboardingForm;
