// src/components/FeedbackForm.jsx
import React from "react";
import FormInput from "./FormInput";
import styles from "./Forms.module.css";

const FeedbackForm = () => {
  return (
    <form className={styles.contactForm}>
      <h3 className={styles.title}>Feedback</h3>
      <FormInput type="text" name="customerName" label="Customer Name" />
      <FormInput type="textarea" name="feedback" label="Your Feedback" />
      <button className={styles.btn2}>Submit</button>
    </form>
  );
};

export default FeedbackForm;