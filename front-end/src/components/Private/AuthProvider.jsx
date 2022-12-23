import React from 'react'
import {Navigate} from 'react-router-dom'

const useAuth=()=>{

  const user=localStorage.getItem('user_info')
  console.log("user",user)

  if(user){
    return true
  } else {
    return false
  }
}

const AuthProvider = ({ children }) => {

  const auth=useAuth()

  return (auth?children:<Navigate to={"/"}/>)

};

export default AuthProvider