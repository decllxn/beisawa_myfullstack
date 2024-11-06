import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="col">
                    <h2 className="thislogo">Beisawa</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aliquid neque facilis officiis necessitatibus! Iusto!</p>
                </div>
                <div className="col">
                    <h3>
                        Office
                        <div className="underline">
                            <span></span>
                        </div>
                    </h3>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                    <p className="email-id">beisawa@gmail.com</p>
                    <h4>+254-123456789</h4>
                </div>
                <div className="col">
                    <h3>
                        Links
                        <div className="underline">
                            <span></span>
                        </div>
                    </h3>
                    <ul>
                        <li className="footer-list"><a href="#home">Home</a></li>
                        <li className="footer-list"><a href="#services">Services</a></li>
                        <li className="footer-list"><a href="#about">About Us</a></li>
                        <li className="footer-list"><a href="#features">Features</a></li>
                        <li className="footer-list"><a href="#contacts">Contacts</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h3>
                        Newsletter
                        <div className="underline">
                            <span></span>
                        </div>
                    </h3>
                    <form className="footer-form">
                        <i className="far fa-envelope"></i>
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit">
                            <i id="myArrow" className="fas fa-arrow-right"></i>
                        </button>
                    </form>
                    <div className="footer-icons">
                        <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
                        <a href="#instagram"><i className="fab fa-instagram"></i></a>
                        <a href="#twitter"><i className="fab fa-twitter"></i></a>
                        <a href="#whatsapp"><i className="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
            <hr className="footer-hr"/>
            <p className="copyright">copyright @beisawa - all rights reserved</p>
        </footer>
    );
};

export default Footer;