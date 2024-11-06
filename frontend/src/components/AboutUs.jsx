import React from "react";
import "../styles/AboutUs.css";

const AboutUs = () => {
    return (
        <div className="about-us">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay">
                    <h1>About Us</h1>
                    <p>Dedicated to excellence, innovation, and community impact.</p>
                </div>
            </section>

            {/* Image Gallery Section */}
            <section className="gallery">
                <div className="gallery-item"></div>
                <div className="gallery-item"></div>
                <div className="gallery-item"></div>
                <div className="gallery-item"></div>
            </section>

            {/* Info Sections */}
            <section className="info-section">
                <div className="info-content">
                    <h2>Our Story</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="info-content">
                    <h2>Our Vision</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </section>

            {/* Team Section */}
            <section className="team">
                <h2>Meet the Team</h2>
                <div className="team-members">
                    <div className="team-member">
                        <div className="member-image"></div>
                        <h3>John Doe</h3>
                        <p>CEO</p>
                    </div>
                    <div className="team-member">
                        <div className="member-image"></div>
                        <h3>Jane Smith</h3>
                        <p>CTO</p>
                    </div>
                    <div className="team-member">
                        <div className="member-image"></div>
                        <h3>Michael Lee</h3>
                        <p>COO</p>
                    </div>
                </div>
            </section>

            {/* Mission and Values Section */}
            <section className="mission-values">
                <h2>Our Mission & Values</h2>
                <p>Dedicated to innovation, responsibility, and delivering top value.</p>
            </section>

            {/* Contact CTA Section */}
            <section className="cta">
                <h2>Join Us in Making a Difference</h2>
                <button className="cta-button">Get in Touch</button>
            </section>
        </div>
    );
};

export default AboutUs;