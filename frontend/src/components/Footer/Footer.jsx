import React from 'react';
import FooterLogo from './FooterLogo';
import FooterLinks from './FooterLinks';
import SocialLinks from './SocialLinks';
import AddressSection from './AddressSection';
import Copyright from './Copyright';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className="col-md-3">
            <FooterLogo />
          </div>
          <div className="col-md-3">
            <FooterLinks />
          </div>
          <div className="col-md-3">
            <SocialLinks />
          </div>
          <div className="col-md-3">
            <AddressSection />
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;