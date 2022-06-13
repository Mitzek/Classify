import React, {useState, useEffect} from 'react';
import styles from './profileStyle.module.css';
import axios from 'axios';
import {passwordRoute} from '../../API/apiRoutes.js'
import { useNavigate } from 'react-router-dom';

function MyProfile() {
     
    const [password, setPassword] = useState({
      currentPassword: "", newPassword: ""
    })
    
const [currentUser, setCurrentUser] = useState()
    useEffect(()=> {
      const getUser = async () => {
          if(localStorage.getItem("classify-user")===undefined) {
          navigate("/login")
      }
      else {
        setCurrentUser(await JSON.parse(localStorage.getItem("classify-user")))
      }
    }
      getUser();
  }, [localStorage.getItem("classifyUser")])

  const navigate = useNavigate();


    let name, value;
    const handleInput = (e) => {
          name = e.target.name;
          value = e.target.value
          setPassword({...password, [name]: value})
    }

    const handleSubmit = (e) => {
          e.preventDefault();

          const { _id} = currentUser;
          const { currentPassword, newPassword} = password;

          const {data} = axios.get(passwordRoute, {
          _id, currentPassword, newPassword
          })

          if(data.status === false) {
            console.log(data.msg);

          }
    }


  return (

    <div className={styles.profilePageContainer}>
      
        
        <form  className={styles.profileForm} onSubmit={handleSubmit}>
        <h2 className={styles.profileTitle}>My Profile</h2> 
        <img className={styles.profileDp} src="" alt="Display"/>
        <h4>Change Password: </h4>
        <input onChange={handleInput} name="currentPassword" value={password.currentPassword} className={styles.changePassword} type="password"  placeholder="Type your current Password"/>
        <input onChange={handleInput} name="newPassword" pvalue={password.newPassword} className={styles.changePassword} type="password"  placeholder="Type your new Password"/>
        <button type="submit">Submit</button>
        </form>


    </div>
  )
}

export default MyProfile;