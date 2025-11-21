import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const reloadPage = (path) => {
    window.location.href = path;
  };

  return (
    <header className="header transparent-header">
      <nav className="navbar navbar-expand-lg py-1">

        {/* Top area */}
        <div className="container d-flex align-items-center justify-content-between">

          {/* Logo */}
          <Link to="/" onClick={() => reloadPage("/")}>
            <img
              src={logo}
              alt="Karma Financial Solutions Logo"
              className="navbar-brand"
              style={{ height: "48px" }}  /* smaller logo */
            />
          </Link>

          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-collapse ${isOpen ? "show" : ""}`}>
          <div className="container">
            <ul className="navbar-nav gap-lg-3 text-center py-3">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={() => reloadPage("/")}>Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/About" onClick={() => reloadPage("/About")}>About</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Service" onClick={() => reloadPage("/Service")}>Service</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Contact" onClick={() => reloadPage("/Contact")}>Contact</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Blogs" onClick={() => reloadPage("/Blogs")}>Blog</Link>
              </li>
            </ul>
          </div>
        </div>

      </nav>
    </header>
  );
}
