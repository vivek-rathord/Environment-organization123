import React from "react";
import Logo from "../Component/images/logo2_footer.png.webp";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      {/* Box 1: Logo and Description */}
      <div className="footer-box">
        <img src={Logo} alt="env-org" className="footer-logo" />
        <p>Nurturing Himalayan Communities, Empowering Lives, and Sustaining Livelihoods </p>
      </div>

      {/* Box 2: Our Solutions */}
      <div className="footer-box">
        <h6>Our Solutions</h6>
        <div className="footer-links">
          <Link to="/" className="footer-link">Design & Creatives</Link>
          <Link to="/" className="footer-link">Telecommunication</Link>
          <Link to="/" className="footer-link">Restaurant</Link>
          <Link to="/" className="footer-link">Programming</Link>
          <Link to="/" className="footer-link">Architecture</Link>
        </div>
      </div>

      {/* Box 3: Company */}
      <div className="footer-box">
        <h6>Company</h6>
        <div className="footer-links">
          <Link to="/" className="footer-link">About</Link>
          <Link to="/" className="footer-link">Review</Link>
          <Link to="/" className="footer-link">Insights</Link>
          <Link to="/" className="footer-link">Career</Link>
        </div>
      </div>

      {/* Box 4: Contact */}
      <div className="footer-box">
        <h6>Contact Us</h6>
        <div className="footer-links">
          <Link to="/" className="footer-link">
            neha.kharul@gmail.com</Link>
          <Link to="/" className="footer-link"> Vill.Sohran,P.O Kharul via Droh,
            Teh Palampur,Distt.Kangra ,
            Himachal Pradesh</Link>
          <Link to="/" className="footer-link">Privacy Policy</Link>
          <Link to="/" className="footer-link"><h3>9805062530</h3></Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="copywrite">
        <p>© 2025 All rights reserved | Made with :🤍 by Colorlib</p>
      </div>
    </footer>
  );
}

export default Footer;
