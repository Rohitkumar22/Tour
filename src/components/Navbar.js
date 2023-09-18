import React from "react";
import logo from "../Images/logo.svg";
import { pageLinks, socialLinks } from "../data";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <ul className="nav-links" id="nav-links">
            {pageLinks.map((obj) => {
              return (
                <li key={obj.id}>
                  <a href={obj.href} className="nav-link">
                    {" "}
                    {obj.text}{" "}
                  </a>
                </li>
              );
            })}
          </ul>
          <ul className="nav-icons">
            {socialLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="nav-icon"
                  >
                    <i className={link.className}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
