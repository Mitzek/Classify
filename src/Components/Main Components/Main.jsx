import React, { useState, useEffect } from "react";
import styles from "./styles/mainStyle.module.css";
import { useNavigate } from "react-router-dom";
import Categories from './Categories';
import TopBar from './TopBar';
import RecentAds from './RecentAds';
import QueryBox from './QueryBox';
import CreateAd from './../Ads/CreateAd';

function Main() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
      const setUser = async () => {
        if(localStorage.getItem("classify-user")===undefined)
        {
          navigate("/login"); 
        }
        else {
          setCurrentUser(await JSON.parse(localStorage.getItem("classify-user")));
          <TopBar currentUser={currentUser}/>;
          <CreateAd currentUser={currentUser}/>
          
        }
      
      }
      
      setUser();
      
    }, [])
    
  return (
    <>
      <div>
      
        <div className={styles.mainContainer}>
        <div className={styles.sliderContainer}>
          <img className={styles.sliderImage} src="https://firebasestorage.googleapis.com/v0/b/classify-50003.appspot.com/o/slider.jpg?alt=media&token=b3087f4f-8d0f-4a39-a662-1580d5ad39c3" alt="" />
        </div>
          <RecentAds/>
          {/* <QueryBox/> */}
          <div className={styles.sellerContainer}>
              <h3>BECOME AN AUTHORIZED CLASSIFY SELLER</h3>
              <p>Authorized seller's ads are featured at top.</p>  
              <button>JOIN TODAY!</button>
            
          </div>
          
        </div>
      
        
      </div>
      
    </>
  );
}

export default Main;
