import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/Footer";
import ProductView from "../components/ProductView/ProductView";
import Dashboard from "../components/dashboard/dashboard";
import CartPage from "../components/Cart/cart";
import MenPage from "../components/ProductPage/MenPage";
import Crewneck from "../components/ProductPage/item/Crewneck";
import Signin from "../components/Auth/Signin/Signin"
import Signup from "../components/Auth/Signup/Signup"
import Profile from "../components/Auth/Profile/Profile"
import Checkout from "../components/Checkout/Checkout"
import Flash from "../components/Flash/Flash";
import Adminlogin from "../components/Auth/AdminLogin/Adminlogin";
import Womens from "../components/ProductPage/Womens";

const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/checkout" element={<h3>Checkout</h3>} />
        <Route path="payment" element={<h3>Payment </h3>} />
        <Route path="mens" element={<MenPage/>} />
        <Route path="womens" element={<Womens/>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="cart"
          element={
            // <RequiredAuth>
            <CartPage />
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
        <Route path="mens/products/:id" element={<ProductView />} />
        {/* <Route path="womens/products/:id" element={<ProductView />} /> */}
        {/* <Route path="flash/women" element={<Flash />} />
        <Route path="flash/kids" element={<Kids />} /> */}
        <Route path="flash/women" element={<h1>Flash</h1>} />
        <Route path="flash/kids" element={<h1>Kids</h1>} />
        <Route path="flash/mens" element={<MenPage />} />
        <Route path="flash/home" element={<Dashboard/>} />
        <Route path="flash/beauty" element={<h1>Beauty</h1>} />
        {/* <Route path="flash/home" element={<Home />} />
        <Route path="flash/beauty" element={<Beauty />} /> */}

      </Routes>

      <Footer />
    </>
  );
};
export default MainRoutes;
