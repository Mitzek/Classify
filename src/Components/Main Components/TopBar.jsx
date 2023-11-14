import React, { useEffect, useState } from "react";
import styles from "./styles/mainStyle.module.css";
import { useNavigate } from "react-router-dom";

function TopBar({ currentUser }) {
  const [loginBtn, setLoginBtn] = useState(false);

  useEffect(() => {
    const getUser = () => {
      if (currentUser != null) {
        setLoginBtn(true);
      }
    };

    getUser();
  }, [currentUser]);

  const navigate = useNavigate();

  const handleSell = (e) => {
    e.preventDefault();
    navigate("/sell");
  };
  const profileLogIn = () => {
    navigate("/login");
  };
  const profileLogOut = () => {};

  const profileActions = (e) => {
    console.log(e.target.value);
    if (e.target.value === "Profile") {
      navigate("/myProfile");
    } else if (e.target.value === "Logout") {
      localStorage.removeItem("classify-user");
      localStorage.removeItem("classify-user-token");
      window.location.reload();
    }
  };

  return (
    <div className={styles.mainTopBar}>
      <select className={styles.location}>
        <option>Karachi</option>
        <option>Hyderabad</option>
        <option>Lahore</option>
        <option>Islamabad</option>
      </select>

      <input type="text" className={styles.searchBar} placeholder="Search" />
      <button onClick={handleSell} className={styles.sellButton}>
        Sell
      </button>

      <div className={styles.profileName}>
        {loginBtn && (
          <select className={styles.profileActions} onChange={profileActions}>
            <option value="Name">{currentUser.name}</option>
            <option value="Profile">Profile</option>
            <option value="Logout">Logout</option>
          </select>
        )}
        {!loginBtn && (
          <button className={styles.profileActions} onClick={profileLogIn}>
            Log In
          </button>
        )}
      </div>
    </div>
  );
}

export default TopBar;
