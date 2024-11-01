import React from 'react';

const AddressSection = () => {
  return (
    <div className="address">
      <h2>Address</h2>
      <img src="./assets/images/about/home_line.png" alt="Line" className="img-fluid" />
      <ul className="address-links">
        <li className="address1"><i className="fa-solid fa-location-dot"></i> Kolathur Ramankulam, Malappuram Dt, Kerala 679338</li>
        <li><a href="tel:+9190904500112"><i className="fa-solid fa-phone"></i> +91 90904500112</a></li>
        <li><a href="mailto:mail@1234567.com"><i className="fa-solid fa-envelope"></i> mail@1234567.com</a></li>
      </ul>
    </div>
  );
};

export default AddressSection;