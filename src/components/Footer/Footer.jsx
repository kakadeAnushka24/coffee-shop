import React from "react";
import {Link} from "react-router"
import "./Footer.css";



function Footer() {
  return (
    <div className="footer">
      <h2 className="footer-title">☕ Coffee House</h2>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="./About">About</Link>
        <Link to="./Contact">Contact</Link>
      </div>
       <p className="footer-copy">
        © 2026 Coffee House | All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;