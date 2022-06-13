import React from 'react'
import style from './adStyle.module.css'
import {useLocation} from 'react-router-dom'
function DisplayAd({cardPrice, cardTitle}) {

  
console.log(cardPrice, cardTitle);
    const {state} = useLocation();
    const {price, title, img, city, desc, user, contact} = state;
  return (
    <div className={style.displayAdContainer}>
            <div className={style.adContainer}>
                
                <img className={style.adImageContainer} src={img} alt="" />
              
              <div className={style.adDescription}>
                <h2>Title: {title} <hr /></h2>
                <h3>Price: {price} <hr /></h3>
                <h4>City:   {city} <hr /></h4>
                <p><strong> Description: <br /> </strong></p> <p id={style.desc}>{desc}</p>
              </div>
              </div>
              
              <div className={style.adInfoContainer}>
              <h2> Seller Information <hr /> </h2>
                <h3>Name: {user}<hr /></h3>
                <h4>Contact: {contact}<hr /></h4>
                <h4>City: {city}</h4>
              </div>
            </div>
    
  )
}

export default DisplayAd