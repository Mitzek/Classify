import React, { useState, useEffect } from 'react';
import styles from './profileStyle.module.css';
import {displayAdRoute} from '../../API/apiRoutes.js';
import axios from 'axios';

function MyAds() {
    const [ads, setAds] = useState()

    useEffect(()=> {
     const getAds = async () => {
       // const advert = await axios.get(displayAdRoute)
       // setAds(advert);
     }
        getAds();
    }, [])
  return (
    <div className={styles.myAdsContainer}>
            <h2 className={styles.profileTitle}> My Advertisments</h2>
            <div className={styles.myAdsCardContainer}>
                <div className={styles.myAdsCard}>
                  <img/>
                  <h4>NAME: </h4>
                  <h5>PRICE (PKR): </h5>
                </div>

            </div>


    </div>

  )
}

export default MyAds