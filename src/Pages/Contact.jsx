import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import "./Styles/style.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mkajela",
        "template_d76a6s5",
        form.current,
        "8zfEjcam-y0aL5Bqu"
      )
      .then(
        () => {
          alert(" Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert(" Failed to send message. Please try again later.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="contact-wrapper">
      {/* Hero Section  */}
      <div className="about-hero">
        <div className="hero-intro">
          <h1>Contact Us</h1>
          <div className="hero-links">
            <Link to="/" className="h-links">
              Home
            </Link>
            <Link to="/About" className="h-links">
              About
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-container">
        <div className="contact-left">
          <h2>Feel Free To <span> Contact Us!</span></h2>

          <form ref={form} onSubmit={sendEmail}>
            <div className="form-row">
              <input type="text" name="fullname" placeholder="Full Name" required />
              <input type="email" name="email" placeholder="Email Address" required />
            </div>

            <div className="form-row">
              <input type="text" name="phone" placeholder="Mobile Number" required />
              <input type="text" name="subject" placeholder="Subject" />
            </div>

            <textarea name="message" placeholder="Message" required></textarea>

            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>
        </div>

        <div className="contact-right">
          <h2>
            <span> | Get In Touch</span> With Us
          </h2>
          <ul>
            <li>
              {/* <i className="fa-solid fa-location-dot" style="color: #54ff52;"></i> */}
              <i className="fa-solid fa-location-dot"></i>Vill.Soharan, P.O Kharul via Droh,
              Teh Palampur, Distt. Kangra, Himachal Pradesh
            </li>
            <li> <i className="fa-solid fa-phone"></i> 9805062530, 8219203820</li>
            <li> <i className="fa-solid fa-envelope"></i> neha.kharul@gmail.com</li>
            <li> <i className="fa-solid fa-clock"></i>
            9:00 AM - 5:00 PM</li>
          </ul>
        </div>
      </div>

      {/* ----------event-donation-banner---------- */}
      <div className="event-donation">
        <div>
          <h2>Your <span>presence</span> and <span>donation</span> can change lives.</h2>
          <p> Join our event and help spread compassion far and wide.</p>
        </div>
        <div className="event-btn">
          <Link to="/Contact">
            <button>Donate Fund</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
