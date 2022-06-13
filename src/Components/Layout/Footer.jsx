import React from 'react';
import styles from "./styles/layoutStyles.module.css"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className={styles.footer}>
    <h2  className={styles.footerLogo} >CLASSIFY</h2>                  
   
    <ul >
    
              <Link style={{textDecoration: "none"}} to="/home">
              <li>
                  Home
              </li>
              </Link>

              
              <Link style={{textDecoration: "none"}} to="/about">
              <li>
                  About Us
              </li>
              </Link>

              
              <Link style={{textDecoration: "none"}} to="/contact">
              <li>
              Contact Us
              </li>
              </Link>

          </ul>
          <p >All rights reserved - 2022</p>
          </div>

  
    </>
  )
}

export default Footer;