import React from 'react'
import styles from "./NavStyles.module.css";

function Contact() {

    const handleSubmit = () => {

    }

  return (
    <div className={styles.contactPageContainer}>
    <form className={styles.contactFormContainer} onSubmit={handleSubmit}>
      <h2>Please fill the form to contact us</h2>
      <input type="text" placeHolder="Enter Your Name" className={styles.contactFormInput} />
      <input type="email" placeHolder="Enter Your Email" className={styles.contactFormInput} />
      <input type="text" placeHolder="Enter Your Message" id={styles.contactTextArea} className={styles.contactFormInput} />
        <button type="submit">Send</button>
    </form>
    </div>
  )
}

export default Contact; 