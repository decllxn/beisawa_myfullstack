import React from 'react';

const SocialLinks = () => {
  return (
    <div className={styles.social-links}>
      <h2>Follow Us</h2>
      <img src="./assets/images/about/home_line.png" alt="Line" className="img-fluid" />
      <ul className={styles.social-icons}>
        <li><a href="https://facebook.com"><i className="fa-brands fa-facebook-f"></i> Facebook</a></li>
        <li><a href="https://instagram.com"><i className="fa-brands fa-instagram"></i> Instagram</a></li>
        <li><a href="https://linkedin.com"><i className="fa-brands fa-linkedin-in"></i> LinkedIn</a></li>
      </ul>
    </div>
  );
};

export default SocialLinks;