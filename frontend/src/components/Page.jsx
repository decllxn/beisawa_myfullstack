import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import '../styles/Page.css';
import myImage from '../assets/shoppingpic.jpg'
import Navbar from './Navbar';

const Page = () => {

  useEffect(() => {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    // Apply ScrollReveal effects
    ScrollReveal().reveal(".header__image img", {
      ...scrollRevealOption,
      origin: "right",
    });

    ScrollReveal().reveal(".header__content h1", {
      ...scrollRevealOption,
      delay: 500,
    });

    ScrollReveal().reveal(".header__content p", {
      ...scrollRevealOption,
      delay: 1000,
    });

    ScrollReveal().reveal(".header__content form", {
      ...scrollRevealOption,
      delay: 1500,
    });

    ScrollReveal().reveal(".header__content .bar", {
      ...scrollRevealOption,
      delay: 2000,
    });

    ScrollReveal().reveal(".header__image__card", {
      duration: 1000,
      interval: 500,
      delay: 2500,
    });
  }, []);

  return (
    <>
    <Navbar />
    <header className="header__container">
      <div className="header__image">
        <div className="header__image__card header__image__card-1">
          <span><i className="ri-bread-line"></i></span>
          <a href="/image_slider" className="text__link">Bakery</a>
        </div>
        <div className="header__image__card header__image__card-2">
          <span><i className="ri-goblet-line"></i></span>
          <Link to="/display" className="text__link">Liqour Store</Link>
        </div>

        <div className="header__image__card header__image__card-3">
          <span><i className="ri-shopping-basket-fill"></i></span>
          <a href="/image_slider" className="text__link">Appliances</a>
        </div>
        <div className="header__image__card header__image__card-4">
          <span><i className="ri-store-2-line"></i></span>
          <a href="/image_slider" className="text__link">Cosmetics</a>
        </div>
        <div className="header__image__card header__image__card-5">
          <span><i className="ri-graduation-cap-line"></i></span>
          <a href="/image_slider" className="text__link">Back To School</a>
        </div>
        <img src={myImage} alt="header" />
      </div>
      <div className="header__content">
        <h1>WELCOME TO <br />THE <span>BEISAWA</span></h1>
        <p>
          where quality meets convenience! 
          Discover fresh produce, unbeatable prices, and friendly service 
          that makes every shopping trip a delight. 
          Your satisfaction is our priority!
        </p>
        <form action="/">
          <div className="input__row">
            <div className="input__group">
              <h5>Located at;</h5>
              <div>
                <span><i className="ri-map-pin-line"></i></span>
                <input type="text" placeholder="Meru, Kenya" />
              </div>
            </div>
          </div>
        </form>
        <div className="bar">
          Copyright © Beisawa limited.
        </div>
      </div>
    </header>
    </>
  );
};

export default Page;
