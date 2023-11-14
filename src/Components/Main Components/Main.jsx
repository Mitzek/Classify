import React from "react";
import styles from "./styles/mainStyle.module.css";

import RecentAds from "./RecentAds";
import QueryBox from "./QueryBox";

function Main() {
  return (
    <>
      <div>
        <div className={styles.mainContainer}>
          <div className={styles.sliderContainer}>
            <img
              className={styles.sliderImage}
              src="https://firebasestorage.googleapis.com/v0/b/classify-50003.appspot.com/o/slider.jpg?alt=media&token=b3087f4f-8d0f-4a39-a662-1580d5ad39c3"
              alt=""
            />
          </div>
          <RecentAds />
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
