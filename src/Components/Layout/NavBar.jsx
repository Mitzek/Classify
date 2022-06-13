import React from 'react'
import {Menu, Typography, Button } from 'antd';
import { Link} from 'react-router-dom';
import styles from "./styles/layoutStyles.module.css"
import TopBar from './../Main Components/TopBar';
import Categories from './../Main Components/Categories';

function NavBar() {
  let style 
  const hideMenu = (e) => {
     
  }

  const showMenu = () => {
    
  }
  return (
    <>
    <div className={styles.header}>
        <nav>
            <h2>CLASSIFY</h2>
            <div id="menuDiv" className={styles.navLinks}>
            
            <ul >
              
                <Link to="/home">
                <li>
                    Home
                </li>
                </Link>

                
                <Link to="/contact">
                <li>
                Contact Us
                </li>
                </Link>

            </ul>
            
            </div>
            </nav>
            
    </div>
    
    </>
  )
}

export default NavBar