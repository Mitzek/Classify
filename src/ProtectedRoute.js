import React, { useState, useEffect } from 'react';
import {Navigate, Route } from 'react-router-dom';


function ProtectedRoute({authStatus, component: Component, ...rest}) {
  return (
      
    <Route {...rest} render={(props)=> {
        if(authStatus) {
                return <Component { ...props} />
        }

        if(!authStatus) {
            return <Navigate to="/"/>
        }

    }}/>
  )
}

export default ProtectedRoute