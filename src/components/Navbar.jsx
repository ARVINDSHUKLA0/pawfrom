"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar bg-white py-3 position-relative ${styles.navbar}`}>
      <div className="container-fluid px-sm-4 px-3 px-lg-5">
        <div className="d-flex w-100 align-items-center justify-content-between">
          {/* logo - left */}
          <Link href="/" className="navbar-brand fw-bold fs-4 text-dark mb-0">
             <img className="img-fluid" src="/img/logoBlack.png" width={100} alt="" />
          </Link>

          {/* desktop links - right */}
          <div className="d-none d-lg-flex align-items-center gap-4">
            <a href="#about" className={styles.navLink}>
              About
            </a>
            <Link href="/our-services" className={styles.navLink}>
              Service
            </Link>
            <a href="pet-casting" className={styles.navLink}>
              Pet Casting
            </a>
            <a href="#contact" className={styles.navLink}>
              Contact Us
            </a>
          </div>

          {/* hamburger / cross toggle - mobile only */}
          <button
            type="button"
            className={`${styles.hamburgerBtn} d-lg-none`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className={styles.hamburgerIcon} />
          </button>
        </div>
      </div>

      {/* mobile menu panel */}
      <div className={`${styles.mobileMenu} d-lg-none ${isOpen ? styles.mobileMenuOpen : ""}`}>
        <a href="#about" className={styles.mobileMenuLink} onClick={closeMenu}>
          About
        </a>
        <Link href="/our-services" className={styles.mobileMenuLink} onClick={closeMenu}>
          Service
        </Link>
        <a href="/pet-casting" className={styles.mobileMenuLink} onClick={closeMenu}>
          Pet Casting
        </a>
        <a href="#contact" className={styles.mobileMenuLink} onClick={closeMenu}>
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;