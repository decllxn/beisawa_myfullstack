import React from "react";
import useInputFocusEffect from "./Formfunction";

const SupplierEngagementForm = () => {
  useInputFocusEffect();

  return (
    <>
      <div className={styles.inputContainer}>
        <input type="text" className={styles.input} required />
        <label>Supplier Name</label>
        <span>Supplier Name</span>
      </div>
      <div className={styles.inputContainer}>
        <input type="text" className={styles.input} required />
        <label>Supplier ID</label>
        <span>Supplier ID</span>
      </div>
      <div className={`${styles.inputContainer} ${styles.textarea}`}>
        <textarea className={styles.input} required></textarea>
        <label>Engagement Details</label>
        <span>Engagement Details</span>
      </div>
      <button className={styles.btn2}>Submit</button>
    </>
  );
};

export default SupplierEngagementForm;

