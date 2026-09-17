"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setIsServiceOpen(false);
  };

  return (
    <nav className={`navbar bg-white position-relative ${styles.navbar}`}>
      <div className="container-fluid px-sm-4 px-3 px-lg-5">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <Link
            href="/"
            className="navbar-brand fw-bold fs-4 text-dark mb-0"
            onClick={closeMenu}
          >
            <img
              className="img-fluid"
              src="/img/logoBlack.jpeg"
              width={140}
              alt="Logo"
            />
          </Link>
          <div className="d-none d-lg-flex align-items-center gap-4">
            <Link href="#about" className={styles.navLink}>
              About
            </Link>
            <div className={styles.serviceDropdown}>
              <Link
                href="/our-services"
                className={`${styles.navLink} ${styles.serviceLink}`}
              >
                Service
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={styles.dropdownIcon}
                />
              </Link>
              <div className={styles.dropdownMenu}>
                <ul className={styles.dropdownList}>
                  <li>
                    <Link className="text-capitalize" href="#">
                      website & development
                    </Link>
                  </li>
                  <li>
                    <Link className="text-capitalize" href="#">
                      Product design,
                    </Link>
                  </li>
                  <li>
                    <Link className="text-capitalize" href="#">
                      branding & packaging design
                    </Link>
                  </li>
                  <li>
                    <Link className="text-capitalize" href="#">
                      digital marketing
                    </Link>
                  </li>

                </ul>
              </div>
            </div>

            <Link href="/pet-casting" className={styles.navLink}>
              Pet Casting
            </Link>

            <Link href="#contact" className={styles.navLink}>
              Contact Us
            </Link>
          </div>

          <button
            type="button"
            className={`${styles.hamburgerBtn} d-lg-none`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <FontAwesomeIcon
              icon={isOpen ? faXmark : faBars}
              className={styles.hamburgerIcon}
            />
          </button>
        </div>
      </div>

      <div
        className={`${styles.mobileMenu} d-lg-none ${isOpen ? styles.mobileMenuOpen : ""
          }`}
      >
        <Link
          href="#about"
          className={styles.mobileMenuLink}
          onClick={closeMenu}
        >
          About
        </Link>

        {/* Mobile Service */}
        <div className={styles.mobileService}>

          <button
            type="button"
            className={styles.mobileServiceButton}
            onClick={() => setIsServiceOpen(!isServiceOpen)}
            aria-expanded={isServiceOpen}
          >
            <span>Service</span>

            <FontAwesomeIcon
              icon={faChevronDown}
              className={`${styles.mobileDropdownIcon} ${isServiceOpen ? styles.mobileDropdownIconOpen : ""
                }`}
            />
          </button>
          <div
            className={`${styles.mobileDropdown} ${isServiceOpen ? styles.mobileDropdownOpen : ""
              }`}
          >
            <ul className={styles.mobileDropdownList}>

              <li>
                <Link className="text-capitalize"
                  href="#"
                  onClick={closeMenu}
                >
                  website & development
                </Link>
              </li>

              <li>
                <Link
                  className="text-capitalize"
                  href="#"
                  onClick={closeMenu}
                >
                  Product design,
                </Link>
              </li>

              <li>
                <Link
                  className="text-capitalize"
                  href="#"
                  onClick={closeMenu}
                >
                  branding & packaging design
                </Link>
              </li>

              <li>
                <Link
                  className="text-capitalize"
                  href="#"
                  onClick={closeMenu}
                >
                  digital marketing
                </Link>
              </li>

            </ul>
          </div>
        </div>

        {/* Pet Casting */}
        <Link
          href="/pet-casting"
          className={styles.mobileMenuLink}
          onClick={closeMenu}
        >
          Pet Casting
        </Link>

        {/* Contact */}
        <Link
          href="#contact"
          className={styles.mobileMenuLink}
          onClick={closeMenu}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;