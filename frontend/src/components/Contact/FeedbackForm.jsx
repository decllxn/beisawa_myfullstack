import React from "react";
import useInputFocusEffect from "./Formfunction";
import contactStyles from "./Forms.module.css";

const FeedbackForm = () => {
  const inputsRef = useInputFocusEffect(); // Use the hook to get the ref

  return (
    <>
      <div className={contactStyles.inputContainer}>
        <input
          type="text"
          ref={(el) => (inputsRef.current[0] = el)} // Attach ref to each input
          className={contactStyles.input}
          required
        />
        <label>Customer Name</label>
        <span>Customer Name</span>
      </div>
      <div className={`${contactStyles.inputContainer} ${contactStyles.textarea}`}>
        <textarea
          ref={(el) => (inputsRef.current[1] = el)}
          className={contactStyles.input}
          required
        ></textarea>
        <label>Your Feedback</label>
        <span>Your Feedback</span>
      </div>
      <button className={contactStyles.btn2}>Submit</button>
    </>
  );
};

export default FeedbackForm;