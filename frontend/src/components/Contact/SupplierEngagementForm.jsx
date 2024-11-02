import React from "react";
import useInputFocusEffect from "./Formfunction";
import contactStyles from "./Forms.module.css";

const SupplierEngagementForm = () => {
  useInputFocusEffect();

  return (
    <div>
      <div className={contactStyles.inputContainer}>
        <input type="text" className={contactStyles.input} required />
        <label>Supplier Name</label>
        <span>Supplier Name</span>
      </div>
      <div className={contactStyles.inputContainer}>
        <input type="text" className={contactStyles.input} required />
        <label>Supplier ID</label>
        <span>Supplier ID</span>
      </div>
      <div className={`${contactStyles.inputContainer} ${contactStyles.textarea}`}>
        <textarea className={contactStyles.input} required></textarea>
        <label>Engagement Details</label>
        <span>Engagement Details</span>
      </div>
      <button className={contactStyles.btn2}>Submit</button>
    </div>
  );
};

export default SupplierEngagementForm;