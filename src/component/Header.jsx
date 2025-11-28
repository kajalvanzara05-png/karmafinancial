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
      <nav className="navbar navbar-expand-lg">
        <div className="d-flex w-100 align-items-center justify-content-between">
          {/* LOGO LEFT */}
          <Link to="/" className="navbar-brand" onClick={() => reloadPage("/")}>
            <img src={logo} alt="Karma Financial Solutions Logo" style={{ height: "48px" }} />
          </Link>

          {/* MOBILE TOGGLE BUTTON */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* NAV LINKS RIGHT */}
          <div className={`mobile-collapse ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav d-flex flex-row gap-4">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={() => reloadPage("/")}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About" onClick={() => reloadPage("/About")}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Service" onClick={() => reloadPage("/Service")}>
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact" onClick={() => reloadPage("/Contact")}>
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Blogs" onClick={() => reloadPage("/Blogs")}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
