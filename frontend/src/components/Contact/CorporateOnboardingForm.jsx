import React from "react";
import useInputFocusEffect from "./Formfunction";
import contactStyles from "./Forms.module.css";

const CorporateOnboardingForm = () => {
    useInputFocusEffect();

  return (
    <>
      <div className={contactStyles.inputContainer}>
        <input type="text" className={contactStyles.input} required />
        <label>Corporate Name</label>
        <span>Corporate Name</span>
      </div>
      <div className={contactStyles.inputContainer}>
        <input type="email" className={contactStyles.input} required />
        <label>Corporate Email</label>
        <span>Corporate Email</span>
      </div>
      <div className={`${contactStyles.inputContainer} ${contactStyles.textarea}`}>
        <textarea className={contactStyles.input} required></textarea>
        <label>Onboarding Details</label>
        <span>Onboarding Details</span>
      </div>
      <button className={contactStyles.btn2}>Submit</button>
    </>
  );
};

export default CorporateOnboardingForm;
