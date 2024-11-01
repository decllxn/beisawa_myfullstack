import React from 'react';

const FooterLinks = () => {
  return (
    <div className={styles.useful-link}>
      <img src="./assets/images/about/home_line.png" alt="Line" className="img-fluid" />
      <ul className={styles.use-links}>
        <li><a href="/"><i className="fa-solid fa-angles-right"></i> Home</a></li>
        <li><a href="/about"><i className="fa-solid fa-angles-right"></i> About Us</a></li>
        <li><a href="/gallery"><i className="fa-solid fa-angles-right"></i> Gallery</a></li>
        <li><a href="/contact"><i className="fa-solid fa-angles-right"></i> Contact</a></li>
      </ul>
    </div>
  );
};

export default FooterLinks;