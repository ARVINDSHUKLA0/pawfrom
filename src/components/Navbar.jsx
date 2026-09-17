
"use client";

import Link from "next/link";
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ theme = "dark", className = "" }) => {
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const isDark = theme === "dark";

  const closeMenu = () => {
    setOpen(false);
    setServiceOpen(false);
  };

  const handleServiceToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setServiceOpen((prev) => !prev);
  };

  return (
    <nav
      className={`navbar-main ${
        isDark ? "navbar-dark" : "navbar-light"
      } ${className}`}
    >
      <div className="container-fluid custom-container my-3">
        <div className="custom-border">

          {/* LOGO */}
          <div className="navbar-logo">
            <Link href="/" onClick={closeMenu}>
              <img
                src="/img/logoBlack.jpeg"
                width={100}
                alt="Pawform"
              />
            </Link>
          </div>

          {/* ==============================
              DESKTOP MENU
          ============================== */}
          <div className="desktop-menu">
            <ul className="custom-flex-dilapy">

              {/* ABOUT */}
              <li>
                <Link
                  href="/about"
                  className="navbar-link"
                >
                  About
                </Link>
              </li>

              {/* ==============================
                  SERVICE + DROPDOWN
              ============================== */}
              <li className="service-dropdown">

                {/* THIS ENTIRE AREA IS HOVER AREA */}
                <div className="service-hover-area">

                  <Link
                    href="/our-services"
                    className="navbar-link"
                  >
                    Service
                  </Link>

                  <span className="service-icon">
                    <i className="fa-solid fa-angle-up m-0">
                      <span className="icon-fallback"></span>
                    </i>
                  </span>

                  {/* DROPDOWN */}
                  <div className="service-dropdown-menu">

                    <Link href="/our-services">
                      All Services
                    </Link>

                    <Link href="/our-services/pet-photography">
                      Pet Photography
                    </Link>

                    <Link href="/our-services/pet-modeling">
                      Pet Modeling
                    </Link>

                    <Link href="/our-services/pet-casting">
                      Pet Casting
                    </Link>

                  </div>

                </div>
              </li>

              {/* PET CASTING */}
              <li>
                <Link
                  href="/pet-casting"
                  className="navbar-link"
                >
                  Pet Casting
                </Link>
              </li>

              {/* CONTACT */}
              <li>
                <Link
                  href="/contact"
                  className="navbar-link"
                >
                  Contact Us
                </Link>
              </li>

            </ul>
          </div>

          {/* ==============================
              MOBILE HAMBURGER
              0 - 1024px
          ============================== */}
          <button
            type="button"
            className="navbar-menu-btn"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </div>

      {/* ==============================
          OVERLAY
      ============================== */}
      {open && (
        <div
          className="mobile-menu-overlay"
          onClick={closeMenu}
        />
      )}

      {/* ==============================
          MOBILE SIDE MENU
      ============================== */}
      <div
        className={`side-menu ${
          open ? "active" : ""
        }`}
      >

        {/* CLOSE */}
        <div className="mobile-menu-header">

          <button
            type="button"
            className="navbar-close-btn"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <span></span>
            <span></span>
          </button>

        </div>

        {/* MOBILE MENU */}
        <ul className="mobile-menu-list">

          {/* ABOUT */}
          <li>
            <Link
              href="/about"
              className="navbar-link"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>

          {/* ==============================
              MOBILE SERVICE
          ============================== */}
          <li className="mobile-service-item">

            <div className="mobile-service-row">

              {/* SERVICE TEXT */}
              <Link
                href="/our-services"
                className="navbar-link"
                onClick={closeMenu}
              >
                Service
              </Link>

              {/* SERVICE ICON */}
              <button
                type="button"
                className={`mobile-service-icon ${
                  serviceOpen
                    ? "mobile-service-icon-active"
                    : ""
                }`}
                onClick={handleServiceToggle}
                aria-label="Open Service menu"
                aria-expanded={serviceOpen}
              >
                <i className="fa-solid fa-angle-up">
                  <span className="icon-fallback"></span>
                </i>
              </button>

            </div>

            {/* ==============================
                MOBILE SERVICE DROPDOWN
            ============================== */}
            <div
              className={`mobile-service-menu ${
                serviceOpen
                  ? "mobile-service-menu-active"
                  : ""
              }`}
            >

              <Link
                href="/our-services"
                onClick={closeMenu}
              >
                All Services
              </Link>

              <Link
                href="/our-services/pet-photography"
                onClick={closeMenu}
              >
                Pet Photography
              </Link>

              <Link
                href="/our-services/pet-modeling"
                onClick={closeMenu}
              >
                Pet Modeling
              </Link>

              <Link
                href="/our-services/pet-casting"
                onClick={closeMenu}
              >
                Pet Casting
              </Link>

            </div>

          </li>

          {/* PET CASTING */}
          <li>
            <Link
              href="/pet-casting"
              className="navbar-link"
              onClick={closeMenu}
            >
              Pet Casting
            </Link>
          </li>

          {/* CONTACT */}
          <li>
            <Link
              href="/contact"
              className="navbar-link"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;