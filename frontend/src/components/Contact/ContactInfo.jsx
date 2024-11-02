import React from 'react';
import contactStyles from './Forms.module.css';
import Mylogo from './logo2.jpeg';

const ContactInfo = () => {
  return (
    <div className={contactStyles.contactInfo}>
      <img src={Mylogo} alt="company-logo" className={contactStyles.logo} />
      <h3 className={contactStyles.title}>Let's get in touch</h3>
      <p className={contactStyles.text}>
        Are you a customer? Supplier? Corporate customer? Your feedback helps us serve you better! We value your insights
        and invite you to share your thoughts on how we can enhance our partnership.
      </p>
      <div className={contactStyles.info}>
        <div className={contactStyles.information}>
          <div className={contactStyles.icon}><i className="ri-map-pin-2-line"></i></div>
          <p>Meru, Kenya</p>
        </div>
        <div className={contactStyles.information}>
          <div className={contactStyles.icon}><i className="ri-mail-line"></i></div>
          <p>beisawa@gmail.com</p>
        </div>
        <div className={contactStyles.information}>
          <div className={contactStyles.icon}><i className="ri-phone-line"></i></div>
          <p>0712345678</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;