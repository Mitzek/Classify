import React from "react";
import styles from "./styles/layoutStyles.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <h2 className={styles.footerLogo}>CLASSIFY</h2>

        <ul>
          <Link style={{ textDecoration: "none" }} to="/home">
            <li>Home</li>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/contact">
            <li>Contact Us</li>
          </Link>
        </ul>
        <ul>
          <li>All rights reserved - 2023</li>
          <li>Portfolio project by Rehan Ali.</li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
