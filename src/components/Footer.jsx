import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPinterest,
  faFacebookF,
  faInstagram,
  faBehance,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";


// Add / remove social links here — icons render automatically
const socials = [
  { icon: faPinterest, href: "https://pinterest.com", label: "Pinterest" },
  { icon: faFacebookF, href: "https://facebook.com", label: "Facebook" },
  { icon: faInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: faBehance, href: "https://behance.net", label: "Behance" },
  { icon: faLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
];

const legalLinks = [
  { label: "Terms", href: "#terms" },
  { label: "Privacy", href: "#privacy" },
  { label: "Cookies", href: "#cookies" },
];

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container-fluid footer-container">
        <div className="row footer-cta-row gy-5">
          <div className="col-12 col-lg-5">
            <p className="footer-eyebrow mb-1">
              Are you <span className="footer-script">confused</span>.
            </p>
            <p className="footer-subtext mb-4">How to build your brand</p>

            <p className="footer-label mb-2">
              Book a <strong>Free Strategy</strong> call
            </p>

            <form
              className="footer-form"
             
            >
              <input
                type="email"
                className="footer-input mb-3"
                placeholder="your@email.com"
                required
              />
              <button type="submit" className="footer-book-btn">
                Book
              </button>
            </form>
          </div>

          <div className="col-12 col-lg-7">
            <h2 className="footer-heading mb-3">Have An Idea</h2>
            <p className="footer-heading-sub mb-4">
              Lets Build Something Memorable
            </p>

            <a href="#contact" className="footer-build-btn">
              Lets Build <span className="footer-build-arrow">&#8594;</span>
            </a>
          </div>
        </div>

        <div className="footer-socials">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
            >
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copy mb-0">@ PAWFORM 2026</p>

          <ul className="footer-legal-links mb-0">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;