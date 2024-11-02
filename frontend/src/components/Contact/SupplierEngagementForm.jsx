import React from "react";
import useInputFocusEffect from "./Formfunction";
import contactStyles from "./Forms.module.css";

const SupplierEngagementForm = () => {
  const inputsRef = useInputFocusEffect(); // Use the hook to get the ref

  return (
    <div>
      <div className={contactStyles.inputContainer}>
        <input
          type="text"
          ref={(el) => (inputsRef.current[0] = el)} // Attach ref to each input
          className={contactStyles.input}
          required
        />
        <label>Supplier Name</label>
        <span>Supplier Name</span>
      </div>
      <div className={contactStyles.inputContainer}>
        <input
          type="text"
          ref={(el) => (inputsRef.current[1] = el)}
          className={contactStyles.input}
          required
        />
        <label>Supplier ID</label>
        <span>Supplier ID</span>
      </div>
      <div className={`${contactStyles.inputContainer} ${contactStyles.textarea}`}>
        <textarea
          ref={(el) => (inputsRef.current[2] = el)}
          className={contactStyles.input}
          required
        ></textarea>
        <label>Engagement Details</label>
        <span>Engagement Details</span>
      </div>
      <button className={contactStyles.btn2}>Submit</button>
    </div>
  );
};

export default SupplierEngagementForm;