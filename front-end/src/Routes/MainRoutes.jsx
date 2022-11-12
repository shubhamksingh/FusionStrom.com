import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar2 from "../components/Navbar/Navbar2";
import Footer from "../components/Footer/Footer";
import ProductView from "../components/ProductView/ProductView";
import MenPage from "../components/ProductPage/MenPage";
import Signin from "../components/Auth/Signin/Signin"
import Signup from "../components/Auth/Signup/Signup"
import Profile from "../components/Auth/Profile/Profile"

const MainRoutes = () => {
  return (
    <>
    
      {/* <Navbar2 /> */}
    
      <Routes>
        <Route path="/" element={<h3></h3>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="mens" element={<MenPage/>} />
     
      </Routes>
  
      <Footer />
    </>
  );
};
export default MainRoutes;
