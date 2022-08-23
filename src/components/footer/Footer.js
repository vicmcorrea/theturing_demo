import React from "react";
import "./Footer.css";
import logo from "../../assets/4.png";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container footer">
        <div className="footer-box">
          <h4>Useful Links</h4>
          <div className="footer-links">

            <a href="#">&bull; Learn More</a>

          </div>
        </div>
        <div className="footer-box">
          <h4>Support</h4>
          <div className="footer-links">
            <a href="#">&bull; Linkedin</a>
            <a href="#">&bull; Email</a>

          </div>
        </div>
        <div className="footer-box">
          <h4>Contact Us</h4>
          <div className="footer-contact u-text-small">
            <p>
              <FaMapMarkerAlt /> &nbsp; Brasil.
            </p>
            <p>
              <FaEnvelope /> &nbsp; Email: info@theturing.com
            </p>

          </div>
        </div>
        <div className="footer-box">
          <img src={logo} alt="logo" />
          <p className="u-text-small">&copy; Copyright 2022. theturing.com</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
