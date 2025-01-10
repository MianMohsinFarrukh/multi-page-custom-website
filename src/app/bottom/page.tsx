import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-logo">
          <img src="/images/logo.png" alt="Logo" className="footer-img" />
          <p className="footer-description">
            Transforming your ideas into stunning visuals with creativity and precision.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <h4 className="footer-heading">Quick Links</h4>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/pages/about">About</Link>
            </li>
            <li>
              <Link href="/pages/work">Work</Link>
            </li>
            <li>
              <Link href="/pages/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="footer-social">
          <h4 className="footer-heading">Follow Us</h4>
          <div className="social-icons">
            <Link href="https://facebook.com" target="_blank">
              <FaFacebook />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <FaTwitter />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <FaInstagram />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Your Brand. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
