import React from "react";
import useInputFocusEffect from "./Formfunction";
import contactStyles from "./Forms.module.css";

const CorporateOnboardingForm = () => {
  const inputsRef = useInputFocusEffect(); // Use the hook to get the ref

  return (
    <>
      <div className={contactStyles.inputContainer}>
        <input
          type="text"
          ref={(el) => (inputsRef.current[0] = el)} // Attach ref to the Corporate Name input
          className={contactStyles.input}
          required
        />
        <label>Corporate Name</label>
        <span>Corporate Name</span>
      </div>
      <div className={contactStyles.inputContainer}>
        <input
          type="email"
          ref={(el) => (inputsRef.current[1] = el)} // Attach ref to the Corporate Email input
          className={contactStyles.input}
          required
        />
        <label>Corporate Email</label>
        <span>Corporate Email</span>
      </div>
      <div className={`${contactStyles.inputContainer} ${contactStyles.textarea}`}>
        <textarea
          ref={(el) => (inputsRef.current[2] = el)} // Attach ref to the Onboarding Details textarea
          className={contactStyles.input}
          required
        ></textarea>
        <label>Onboarding Details</label>
        <span>Onboarding Details</span>
      </div>
      <button className={contactStyles.btn2}>Submit</button>
    </>
  );
};

export default CorporateOnboardingForm;