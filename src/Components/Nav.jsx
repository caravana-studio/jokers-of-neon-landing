import React, { useState } from "react";
import "./Nav.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav">
      <h1 className="h1-nav">JN</h1>
      <button className={`menu-toggle ${menuOpen ? "active" : ""}`} onClick={toggleMenu} aria-label="Toggle menu">
        ☰
      </button>
      <ul className={`sidebar ${menuOpen ? "active" : ""}`}>
        <li className="li-nav"><a href="#">About Game</a></li>
        <li className="li-nav"><a href="#">Play</a></li>
        <li className="li-nav"><a href="#">Contact</a></li>
        <h1 className="footer-title">JOKERS OF NEON</h1>
      </ul>
    </nav>
  );
}

export default Nav;
