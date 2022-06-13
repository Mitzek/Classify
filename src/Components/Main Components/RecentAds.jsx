import React, { useState, useEffect } from 'react';
import styles from "./styles/mainStyle.module.css";
import DisplayAd from "./../Ads/DisplayAd";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { displayAdRoute } from './../../API/apiRoutes';
function RecentAds() {

  const [adverts  , setAdverts  ] = useState([])
  const navigate = useNavigate();
  const [user, setUser] = useState()

    useEffect(() => {
    const getUser = async() => {
        setUser(await JSON.parse(localStorage.getItem("classify-user")))
    }
    
        getUser();
      
    }, [])


  useEffect(()=>{
       const getAds = async () => {
        //const data = await axios.get(`${displayAdRoute}/${user._id}`);
        const data = await axios.get(displayAdRoute)
            
            setAdverts(data.data.ads);
        }
          getAds()
  },[])

  return (

    <>
      <h3 className={styles.topAdsTitle}>Recently Posted Ads: </h3>
        <div className={styles.topAdsContainer}>
          {adverts.map((advert, index, x) => {
            return (
              <div
                key={index}
                onClick={(index) => {
                  return (
                    navigate("/displayAd", {state: {price: advert.productPrice, title: advert.productTitle, img: advert.imgLink, 
                      city: advert.productCity, desc: advert.productDescription,
                        user: advert.sellerName, contact: advert.sellerContact  }} )
                       
                  );
                }}
                className={styles.topAdCard}
              >
                {

               <>
              <img src={advert.imgLink} className={styles.topAdCardImage} />
              <h4>{advert.productTitle}</h4>
              <h3>Price: {advert.productPrice}</h3>
              <h5>City: {advert.productCity}</h5>
              </> }
              </div> 
                
            );
          })}
        </div>
      
    </>
  );
}

export default RecentAds;
