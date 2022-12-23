import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import Flash from "../Flash/Flash";
import logo from "../../images/logoName.png";
import { Button } from "@chakra-ui/react";


const Navbar = () => {

  const userLogged=sessionStorage.getItem("username") || "";
 
  const nav = useNavigate();

  const handleLogout=()=>{
    sessionStorage.setItem("username",""); 
    nav("/");
  }
  
  return (
    
    <div className='navBarDiv'>
      <div className="fstDiv">
        <p><b>Holiday Deals are on now!</b>Up to 60% off. Deals</p>

      </div>
      <nav>
        <div className='navbar_logo'>
          <Link to={"/"}>
            <img
              src={logo}
              alt=''
            />
          </Link>
        </div>
        <div className='navbar_search'>
          {/* <input type='text' placeholder=' Search for products or brands' /> */}
          <input type="text" placeholder="Search for products or brands" />
        </div>
        <div className='navbar_cart'>
        {userLogged=="" ?
          <Link
            to={"/signin"}
            style={{ textDecoration: "none", color: "rgb(60, 57, 57)" }}
          >
            <span>{"Sign In"}</span>
          </Link>
          : <div>{userLogged} <Button onClick={handleLogout}>Logout</Button> </div>   }
          <Link
            to='/cart'
            style={{ textDecoration: "none", color: "rgb(60, 57, 57)" }}
          >
            <i className='uil uil-bag'></i>
          </Link>
        </div>
      </nav>
      <hr />
      <div className='menu_div'>
        <span
          onClick={() => {
            nav("/clearance");
          }}
        >
          Clearance
        </span>
        <span
          onClick={() => {
            nav("womens");
          }}
        >
          Women
        </span>
        <span
          onClick={() => {
            nav("./mens");
          }}
        >
          Men
        </span>
        <span
          onClick={() => {
            nav("/kid");
          }}
        >
          Kids
        </span>
        <span
          onClick={() => {
            nav("/shoes");
          }}
        >
          Shoes
        </span>
        <span
          onClick={() => {
            nav("/activeware");
          }}
        >
          Activewear
        </span>
        <span
          onClick={() => {
            nav("/bags");
          }}
        >
          Bags & Accessories
        </span>
        <span
          onClick={() => {
            nav("/beauty");
          }}
        >
          Beauty
        </span>
        <span onClick={() => {
            nav("/gift");
          }}
        >
          Gifts
        </span>
        <span>Home</span>
        <span onClick={() => {
            nav("flash/women");
          }}>Flash Events</span>
      </div>
    </div>
  );
};

export default Navbar;