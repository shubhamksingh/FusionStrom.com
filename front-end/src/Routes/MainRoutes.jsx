import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/Footer";
import ProductView from "../components/ProductView/ProductView";
import Dashboard from "../components/dashboard/dashboard";
import CartPage from "../components/Cart/cart";
import MenPage from "../components/ProductPage/MenPage";
import Signin from "../components/Auth/Signin/Signin";
import Signup from "../components/Auth/Signup/Signup";
import Profile from "../components/Auth/Profile/Profile";
import Checkout from "../components/Checkout/Checkout";
import Womens from "../components/ProductPage/Womens";
import AuthProvider from "../components/Private/AuthProvider";

const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/checkout" element={<h3>Checkout</h3>} />
        <Route path="payment" element={<h3>Payment </h3>} />
        <Route path="mens" element={<MenPage />} />
        <Route path="womens" element={<Womens />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="mens/products/:id" element={<ProductView />} />
        <Route path="flash/mens" element={<MenPage />} />
        <Route path="flash/home" element={<Dashboard />} />
      </Routes>

      <Footer />
    </>
  );
};
export default MainRoutes;
