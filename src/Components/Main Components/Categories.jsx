import React from 'react'
import styles from './styles/mainStyle.module.css';

function Categories() {
  return (
    <>
     <div>
            <ul className={styles.categoriesContainerUl}>
              <li style={{ fontWeight: "700" }}>CATEGORIES: </li>
              <li>
                <a  className={styles.categoriesLink}>
                  Property
                </a>
              </li>
              <li>
                <a  className={styles.categoriesLink}>
                  Auto Showroom
                </a>
              </li>
              <li>
                <a  className={styles.categoriesLink}>
                  Mobile Phones
                </a>
              </li>
              <li>
                <a  className={styles.categoriesLink}>
                  Computers
                </a>
              </li>
              <li>
                <a  className={styles.categoriesLink}>
                  Electronic Accessories
                </a>
              </li>
              <li>
                <a  className={styles.categoriesLink}>
                  Appliances
                </a>
              </li>
              <li>
                <a  className={styles.categoriesLink}>
                  Computers Accessories
                </a>
              </li>
            </ul>
          </div>
         
    </>
  )
}

export default Categories