import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/Footer";
import ProductView from "../components/ProductView/ProductView";
import Dashboard from "../components/dashboard/dashboard";
import CartPage from "../components/Cart/cart";
import MenPage from "../components/ProductPage/MenPage";
import Signin from "../components/Auth/Signin/Signin"
import Signup from "../components/Auth/Signup/Signup"
import Profile from "../components/Auth/Profile/Profile"
import Checkout from "../components/Checkout/Checkout"
import Flash from "../components/Flash/Flash";
import Adminlogin from "../components/Auth/AdminLogin/Adminlogin";


const MainRoutes = () => {
  return (
    <>
      <Navbar/>
      {/* <Navbar2 /> */}

      <Routes>
        <Route path="/" element={<Dashboard/>} />

        <Route path="payment" element={<h3>Payment </h3>} />

        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="mens" element={<MenPage/>} />
        <Route path="/adminlogin" element={<Adminlogin/>} />

        <Route
          path="cart"
          element={
            // <RequiredAuth>
            <CartPage/>
            // {/* </RequiredAuth> */}
          }
        />
        <Route
          path="purchase"
          element={
            // <RequiredAuth>
            <h3>Purchase</h3>
            // {/* </RequiredAuth> */}
          }
        />
        <Route
          path="wishlist"
          element={
            // <RequiredAuth>
            <h3>WishList</h3>
            // </RequiredAuth>
          }
        />
        <Route
          path="shippingaddress"
          element={
            // <RequiredAuth>
            <h3>ShippingAddress</h3>
            // </RequiredAuth>
          }
        />
        <Route
          path="paymentmethods"
          element={
            // <RequiredAuth>
            <h3>PaymentMethods </h3>
            // </RequiredAuth>
          }
        />
        <Route
          path="password"
          element={
            // <RequiredAuth>
            <h3>Password </h3>
            // </RequiredAuth>
          }
        />
        <Route path="gift" element={<h3>Gift</h3>} />
        <Route path="products/:id" element={<ProductView/>} />
        <Route path="flash/women" element={<Flash />} />
        {/* <Route path="flash/kids" element={<Kids />} />
        <Route path="flash/mens" element={<Mens />} />
        <Route path="flash/home" element={<Home />} />
        <Route path="flash/beauty" element={<Beauty />} /> */}

      </Routes>
  
      <Footer />
    </>
  );
};
export default MainRoutes;
