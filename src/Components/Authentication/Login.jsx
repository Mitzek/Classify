import React, { useState, useEffect } from 'react';
//import styles from './authStyles.module.css'
import styles from "./styles/authStyle.module.css";
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios'
import {loginRoute} from '../../API/apiRoutes.js';
import { authRoute } from './../../API/apiRoutes';
import App from './../../App';


function Login() {
      const [user, setUser] = useState({email:"", password:""})
      const [loading, setLoading] = useState(false)
     
      
      const navigate = useNavigate();

      let name, value
      const handleInputs = (e) => {
            name = e.target.name
            value = e.target.value
            setUser({...user, [name]: value})
      }

      const handleSubmit = async (e) => {
            e.preventDefault();
            const { email, password} = user;
            const {data} = await axios.post(loginRoute, {
              email, password
            })

            if(data.status === false) {
              window.alert(data.msg)
              console.log("Error" + data.msg);
            }
            else {
                 localStorage.setItem("classify-user", JSON.stringify(data.userCheck))
                 localStorage.setItem("classify-user-token", data.token)
                 setLoading(true)
                 window.location.reload();
                 navigate("/home")
                
              
              //  else
              //  <div className={styles.ldsRing}><div></div><div></div><div></div><div></div></div>
            }
            
       }

      //  const userAuthentication = async() => {
      //   const { data } = await axios.get(authRoute, {
      //     headers: {
      //       "x-access-token" : localStorage.getItem("classify-user-token")
      //     }
      //   })
      //   console.log(data);
      //  }
      
  return (
            <>
            <div className={styles.regContainer}>
              <form action="POST" className={styles.regForm} onSubmit={handleSubmit}>
              <div className={styles.regLogo}>
                <h1>CLASSIFY</h1> 
                <h3>Please Login to your account!</h3>  
              </div>
            
              <input type="email" className={styles.regInput} placeholder="Enter your email" name="email" id="email"  value={user.email} onChange={handleInputs} />
              <input type="password" className={styles.regInput} placeholder="Enter your password" name="password" id="password"  value={user.password} onChange={handleInputs} />
              <button className={styles.regSubmit} type="submit">Log In</button>
              <p>Dont have an account? <Link style={{color: "white", textDecoration: "none"}} to="/register"> REGISTER </Link></p>
           
              </form>
            </div>
            </>
  )
}

export default Login