import React from 'react';
import AddressSection from './AddressSection';
import Copyright from './Copyright';
import FooterLinks from './FooterLinks';
import FooterLogo from './FooterLogo';
import SocialLinks from './SocialLinks';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterLogo />
      <FooterLinks />
      <AddressSection />
      <SocialLinks />
      <Copyright />
    </footer>
  );
};

export default Footer;