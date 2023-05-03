import React from "react";
import './Footer.css';

const Footer = ({ email }) => (
    <div className="footer">
      <h1>Footer</h1>
      <p>{email}</p>
    </div>
  );

export default Footer;