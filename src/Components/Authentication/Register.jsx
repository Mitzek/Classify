import React, { useState } from 'react';
import styles from "./styles/authStyle.module.css";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import {registerRoute} from '../../API/apiRoutes.js';

function Register() {

      const [user, setUser] = useState({name:"", email:"", password:""})

      const navigate = useNavigate();
      let name, value
      const handleInputs = (e) => {
            name = e.target.name
            value = e.target.value
            setUser({...user, [name]: value})
      }

      const handleValidation = () => {
        const { name, password} = user
            if(name.length <= 1) {
                  alert("Name cannot be less than 1 character")
                  return false;
            }

            else if ( password.length < 6){
            alert("Password cannot be less than 6")
            return false;
            }

            return true;
      }

      const handleSubmit = async (e) => {
            e.preventDefault();
            if(handleValidation()) {
            const {name, email, password} = user;
            const {data} = await axios.post(registerRoute, {
              name, email, password
            })
            
            if(data.status === false)
                {
                  window.alert(data.msg)  
                  console.log(data.msg);
                }
            else {
              
              localStorage.setItem("classify-user", JSON.stringify(data.user))
              console.log(data);
              navigate("/login")
              alert("You have successfully registered you account please login")
              
           }
              
          }
      }
      
  return (
            <>
            <div className={styles.regContainer}>
              <form action="POST" className={styles.regForm} onSubmit={handleSubmit}>
              <div className={styles.regLogo}>
                <h1 >CLASSIFY</h1> 
                <h3 >Please Register your account!</h3>  
              </div>
              
              <input type="text"  className={styles.regInput}  placeholder="Enter your name" name="name" id="name" value={user.name} onChange={handleInputs} />
              <input type="email" className={styles.regInput} placeholder="Enter your email" name="email" id="email"  value={user.email} onChange={handleInputs} />
              <input type="password" className={styles.regInput} placeholder="Enter your password" name="password" id="password"  value={user.password} onChange={handleInputs} />
              <button className={styles.regSubmit} type="submit">Create Account</button>
              <p>Dont have an account? <Link style={{color: "white", textDecoration: "none"}} to="/login"> LOGIN </Link></p>

              </form>
            </div>
            </>
  )
}

export default Register