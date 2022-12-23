import React from 'react'
import { Navigate } from 'react-router-dom'

const AuthProvider = ({ children }) => {
  const user  = JSON.parse(localStorage.getItem("user_info"))
//   console.log("user", user);
return children
//   return user? children : <Navigate to="/" />;
};


export default AuthProvider