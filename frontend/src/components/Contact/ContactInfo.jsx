import React from 'react';
import styles from './Forms.module.css'; // Adjusted import for CSS module
import Mylogo from './logo2.jpeg';

const ContactInfo = () => {
  return (
    <>
      <img src="img/shape.png" className={styles.square} alt="Shape" />
      <div className={styles.contactInfo}>
        <img src={Mylogo} alt="company-logo" className={styles.logo} />

        <h3 className={styles.title}>Let's get in touch</h3>

        <p className={styles.text}>
          Are you a customer? Supplier? Corporate customer? Your feedback helps us serve you better! We value your insights
          and invite you to share your thoughts on how we can enhance our partnership.
        </p>

        <div className={styles.info}>
          <div className={styles.information}>
            <div className={styles.icon}>
              <i className="ri-map-pin-2-line"></i>
            </div>
            <p>Meru, Kenya</p>
          </div>

          <div className={styles.information}>
            <div className={styles.icon}>
              <i className="ri-mail-line"></i>
            </div>
            <p>beisawa@gmail.com</p>
          </div>

          <div className={styles.information}>
            <div className={styles.icon}>
              <i className="ri-phone-line"></i>
            </div>
            <p>0712345678</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;