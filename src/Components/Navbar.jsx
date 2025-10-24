import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // ✅ Use NavLink instead of Link
import "./Nav.css";
import MoonSVG from "./darkmode.svg";
import SunSVG from "./lightmode.svg";
import "../Pages/Home.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("light-theme");
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="navsec">
      <div className="nav-name">SAROJ</div>

      <nav>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/work" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Work
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Toggle button */}
        <button className="toggle-btn" onClick={toggleDarkMode}>
          {darkMode ? (
            <img key="moon" src={MoonSVG} alt="Moon Icon" className="toggle-icon animate-toggle" />
          ) : (
            <img key="sun" src={SunSVG} alt="Sun Icon" className="toggle-icon animate-toggle" />
          )}
        </button>

        {/* Hamburger menu */}
        <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

        <div className="moving-line"></div>
      </nav>
    </div>
  );
};

export default Navbar;
