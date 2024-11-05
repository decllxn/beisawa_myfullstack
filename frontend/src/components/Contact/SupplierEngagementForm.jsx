import React from "react";
import styles from "./Forms.modules.css"; // Assume this CSS module handles styles for all forms

const SupplierEngagement = () => {
  // Handle focus effect for the input fields
  const handleFocus = (e) => {
    e.target.parentNode.classList.add(styles.focus);
  };

  const handleBlur = (e) => {
    if (e.target.value === "") {
      e.target.parentNode.classList.remove(styles.focus);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.contactForm}>
        <span className={`${styles.circle} ${styles.one}`}></span>
        <span className={`${styles.circle} ${styles.two}`}></span>

        <form action="#" autoComplete="off" className={styles.form}>
          <h3 className={styles.title}>Supplier Engagement</h3>

          {/* Company Name */}
          <div className={`${styles.inputContainer}`}>
            <input
              type="text"
              name="companyName"
              className={styles.input}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
            <label htmlFor="companyName">Company Name</label>
            <span>Company Name</span>
          </div>

          {/* Contact Person */}
          <div className={`${styles.inputContainer}`}>
            <input
              type="text"
              name="contactPerson"
              className={styles.input}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
            <label htmlFor="contactPerson">Contact Person</label>
            <span>Contact Person</span>
          </div>

          {/* Phone Number */}
          <div className={`${styles.inputContainer}`}>
            <input
              type="tel"
              name="phone"
              className={styles.input}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
            <label htmlFor="phone">Phone Number</label>
            <span>Phone Number</span>
          </div>

          {/* Email */}
          <div className={`${styles.inputContainer}`}>
            <input
              type="email"
              name="email"
              className={styles.input}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
            <label htmlFor="email">Email</label>
            <span>Email</span>
          </div>

          {/* Message */}
          <div className={`${styles.inputContainer} ${styles.textarea}`}>
            <textarea
              name="message"
              className={styles.input}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            ></textarea>
            <label htmlFor="message">Message</label>
            <span>Message</span>
          </div>

          <input type="submit" value="Send" className={styles.btn2} />
        </form>
      </div>
    </div>
  );
};

export default SupplierEngagement;