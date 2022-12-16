import { useState, useEffect } from "react";
import "./Nav.css";
import logo from "../assets/images/logo.png";

function Header() {
  const [navOnScroll, setNavOnScroll] = useState(false);
  const changeNavBackground = () => {
    if (window.scrollY >= 10) {
      setNavOnScroll(true);
    } else {
      setNavOnScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavBackground);
  });
  return (
    <header className={navOnScroll ? "header-active" : ""}>
      <div className="container">
        <a href="#" className="logo">
          <span>H</span>ealth<span>C</span>are.
        </a>

        <nav className="nav">
          <ul>
            <li>
              <a href="#home">home</a>
            </li>
            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <a href="#facility">facility</a>
            </li>
            <li>
              <a href="#review">review</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
            <li>
              <a href="#post">post</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;