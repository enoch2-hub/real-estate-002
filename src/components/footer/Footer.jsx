import React from "react";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaPinterest />
      </div>

      <div className="container">
        <div className="col">
          <h3>About</h3>
          <p>Company</p>
          <p>Company</p>
          <p>Company</p>
          <p>Company</p>
        </div>
        <div className="col">
          <h3>Company</h3>
          <p>About</p>
          <p>Fluffy</p>
          <p>Company</p>
          <p>Company</p>
        </div>
        <div className="col">
          <h3>Fluffy</h3>
          <p>Company</p>
          <p>Details</p>
          <p>Company</p>
          <p>Company</p>
        </div>
        <div className="col">
          <h3>Details</h3>
          <p>Company</p>
          <p>Details</p>
          <p>Fluffy</p>
          <p>About</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
