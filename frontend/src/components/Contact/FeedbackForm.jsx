import React from "react";
import useInputFocusEffect from "./Formfunction";

const FeedbackForm = () => {
    useInputFocusEffect();

  return (
    <>
      <div className={styles.inputContainer}>
        <input type="text" className={styles.input} required />
        <label>Customer Name</label>
        <span>Customer Name</span>
      </div>
      <div className={`${styles.inputContainer} ${styles.textarea}`}>
        <textarea className={styles.input} required></textarea>
        <label>Your Feedback</label>
        <span>Your Feedback</span>
      </div>
      <button className={styles.btn2}>Submit</button>
    </>
  );
};

export default FeedbackForm;
