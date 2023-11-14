import React, { useLayoutEffect, useState } from "react";
import "./App.css";
import NavBar from "./Components/Layout/NavBar";
import About from "./Components/Navigation/About";
import Contact from "./Components/Navigation/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Components/Authentication/Register.jsx";
import Login from "./Components/Authentication/Login.jsx";
import Main from "./Components/Main Components/Main";
import CreateAd from "./Components/Ads/CreateAd";
import Footer from "./Components/Layout/Footer";
import MyProfile from "./Components/Profile.jsx/MyProfile";
import MyAds from "./Components/Profile.jsx/MyAds";


import DisplayAd from "./Components/Ads/DisplayAd";
import Categories from "./Components/Main Components/Categories";
import TopBar from "./Components/Main Components/TopBar";
import { useEffect } from "react";

import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
import { authRoute } from './API/apiRoutes';

function App() {
  const [auth, setAuth] = useState();
  const [loading, setLoading] = useState(false)   
  const [currentUser, setCurrentUser] = useState(undefined);

  // useLayoutEffect(() => {
  //     localStorage.setItem("classify-user", undefined)    
  // }, [])
  
  useEffect(() => {
     const getToken = async () => {
      const { data } = await axios.get(authRoute, {
        headers: {
          "x-access-token": localStorage.getItem("classify-user-token"),
        },
      });
      if (data.auth === true) {
        setAuth(true);
        

      } else {
        setAuth(false);
        setLoading(true);
        
      
      }
    };
    getToken()

  }, [auth]); 

      useEffect(() => {
      const setUser = async () => {
        if(localStorage.getItem("classify-user")===undefined) {
          console.log("see this");
        }
        else if(localStorage.getItem("classify-user"===null)){
          console.log("from else if");
        }
        else {
          setCurrentUser(await JSON.parse(localStorage.getItem("classify-user")));
          console.log("dont see this");
          
        }
      
      }
      
      setUser();
      
    }, [])

console.log(auth);
console.log(currentUser);
  return (
    <>
      <Router>
      <NavBar />
      
             <TopBar currentUser={currentUser}/>  
            <Categories/>     

        <Routes>
          
          {auth && (
            <>
            
              <Route path="/sell" element={<CreateAd />} />
              <Route path="/displayAd" element={<DisplayAd />} />
              <Route path="/myProfile" element={<MyProfile />} />
              <Route path="/myAds" element={<MyAds />} />
            </>
          )}

          {!auth && (
            <>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </>
          )}

          <Route
            path="*"
            element={<Navigate to={auth ? "/home  " : "/login"}/>}
          />

          <Route path="/home" element={<Main />} />  
        </Routes>
          <>
            <Footer />
          </>
          
              </Router>


    </>
  );
}

export default App;
