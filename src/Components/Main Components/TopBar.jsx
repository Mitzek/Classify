import React from 'react';
import styles from "./styles/mainStyle.module.css"
import { useNavigate } from "react-router-dom";

function TopBar({currentUser}) {
    
    const navigate = useNavigate();
  
    const handleSell = (e) => {
        e.preventDefault();
      navigate("/sell");
    };
    const profileAction = () => {
      localStorage.setItem("classify-user", undefined)    
      localStorage.setItem("classify-user-token", undefined)    
      navigate("/login")
    }

  return (
    <form className={styles.mainTopBar}>
    <select className={styles.location}>
      <option>Karachi</option>
      <option>Hyderabad</option>
      <option>Lahore</option>
      <option>Islamabad</option>
    </select>

    <input type="text" className={styles.searchBar} placeholder="Search" />
    <button onClick={handleSell} className={styles.sellButton}>SELL</button>
  
  
    <div className={styles.profileName}>

     {/* <h3>{currentUser.name}</h3>  */}
      <button className={styles.profileActions} onClick={profileAction}>Log Out</button>
     
    </div>
    </form>
  )
}

export default TopBar