import Flash from "../components/Flash/Flash";
import Kids from "../components/Flash/Kids";
import Mens from "../components/Flash/Mens";
import Home from "../components/Flash/Home";
import Beauty from "../components/Flash/Beauty";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar2 from "../components/Navbar/Navbar2";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/Footer";
import ProductView from "../components/ProductView/ProductView";

const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path="/" element={<h3></h3>} />
        <Route path="/" element={<h3>Checkout</h3>} />
        <Route path="payment" element={<h3>Payment </h3>} />
        <Route path="signin" element={<h3>Singin</h3>} />
        <Route path="createacc" element={<h3>Createacc</h3>} />
        <Route
          path="cart"
          element={
            // <RequiredAuth>
            <h3>Cart</h3>
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
        <Route path="flash/kids" element={<Kids />} />
        <Route path="flash/mens" element={<Mens />} />
        <Route path="flash/home" element={<Home />} />
        <Route path="flash/beauty" element={<Beauty />} />
      </Routes>
      <Footer />
    </>
  );
};
export default MainRoutes;
