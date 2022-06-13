import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { authRoute } from './../../API/apiRoutes';
import { useNavigate, Navigate } from 'react-router-dom';



function Authentication({children}) {

          const [authenticate, setAuthenticate] = useState(false)

            useEffect(()=> {
              const getToken = async () => {
                const { data } = await axios.get(authRoute, {
                  headers: {
                    "x-access-token" : localStorage.getItem("classify-user-token")
                  }
                  
                })
                if(data.auth === true) {
                  setAuthenticate(true);
                }
                else {
                  setAuthenticate(false);
                }
               
              }
              getToken();
            },[authenticate])
            
              const navigate = useNavigate();
  return (
    <>
            {
              !authenticate && (
                navigate("/login")
              )
            }
            {
              authenticate && (
                <Navigate to={children}/>
              
              )
            }
    </>
  )
}

export default Authentication;