import React from "react";
import heroimg from "../assets/Mukham Logo.png";
import { NavLink } from "react-router-dom";
import playstore_button from "../assets/google-play-badge.png";
import appstore_button from "../assets/apple-badge.svg";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <div className="footer_content">
        <div className="foo_logo">
          <img src={heroimg} alt="Mukham Logo" />
        </div>

        <ul className="foo_links">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/product">
              Product
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="foo_downlode">
          <a
            href="https://mukham.in/app.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={playstore_button} alt="playstore" />
          </a>
          <a
            href="https://mukham.in/app.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={appstore_button}
              alt="playstore"
              style={{ height: "100%", width: "245px" }}
              className="appstore"
            />
          </a>
        </div>
      </div>
      <div className="copyright">
        <p>
          © Copyright MUKHAM. All Rights Reserved <br />
          <a href="/t&c.html">Terms and Conditions</a>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="http://mukham.in/privacypolicy.html">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
