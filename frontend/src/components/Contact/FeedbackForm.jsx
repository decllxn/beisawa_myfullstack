import React from "react";
import useInputFocusEffect from "./Formfunction";
import contactStyles from "./Forms.module.css";

const FeedbackForm = () => {
    useInputFocusEffect();

  return (
    <>
      <div className={contactStyles.inputContainer}>
        <input type="text" className={contactStyles.input} required />
        <label>Customer Name</label>
        <span>Customer Name</span>
      </div>
      <div className={`${contactStyles.inputContainer} ${contactStyles.textarea}`}>
        <textarea className={contactStyles.input} required></textarea>
        <label>Your Feedback</label>
        <span>Your Feedback</span>
      </div>
      <button className={contactStyles.btn2}>Submit</button>
    </>
  );
};

export default FeedbackForm;
