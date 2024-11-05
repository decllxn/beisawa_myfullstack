// src/components/ContactInfo.jsx
import React from "react";
import styles from "./Forms.module.css";

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <img src="../assets/logo2.jpeg" alt="company-logo" className={styles.logo} />
      <h3 className={styles.title}>Let's get in touch</h3>
      <p className={styles.text}>
        Are you a customer? Supplier? Corporate customer? Your feedback helps us serve you better!
        We value your insights and invite you to share your thoughts on how we can enhance our partnership.
      </p>
      <div className={styles.info}>
        <div className={styles.information}>
          <i className="ri-map-pin-2-line"></i>
          <p>Meru, Kenya</p>
        </div>
        <div className={styles.information}>
          <i className="ri-mail-line"></i>
          <p>beisawa@gmail.com</p>
        </div>
        <div className={styles.information}>
          <i className="ri-phone-line"></i>
          <p>0712345678</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;