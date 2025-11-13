import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img
             src={logo}
             alt="Karma Financial Solutions Logo"
             onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/assets/logo.png"; }}
             className="footer-logo"
           />
      </div>
      <nav>
        <Link to="/" >Home</Link>
        <Link to="/About" >About</Link> 
        <Link to="/Service" >Service</Link>
        <Link to="/Contact" >Contact</Link>
        <Link to="/Blogs" >Blog</Link>

      </nav>
    </header>
  );
}
