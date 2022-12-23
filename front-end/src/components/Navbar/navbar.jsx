import React from "react";
import { Link, useNavigate} from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
import { useContext } from "react";
import Flash from "../Flash/Flash";
import logo from "../../images/logoName.png";
import icon from "react-icons";
// import js from "../Navbar/js";

const Navbar = () => {
  const nav = useNavigate();
  const user = JSON.parse(localStorage.getItem("user_info"));
  // console.log("user", user);

  const handleLogout = () => {
       localStorage.removeItem("user_info");
       nav("/signin")
  };


  let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");


const handlenavClick = () => {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
    searchForm.classList.remove("active");
    searchToggle.classList.remove("active");
  }
};

// let searchToggle = document.querySelector(".search__toggle");
// let searchForm = document.querySelector(".search__form");
const [searchToggle,setSearchToggle] = useState(false);
const [searchForm,setSearchForm]=useState(false);
// searchToggle.addEventListener("click", showSearch);

const handleClick = () => {
  setSearchForm(true);
  setSearchToggle(true);

  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "menu");
  navWrapper.classList.remove("active");

  if (  navToggle) {
    navToggle.setAttribute("aria-label", "Close search");
  } else {
     navToggle.setAttribute("aria-label", "Open search");
  }
}

  return (
    // <!-- Header Start -->
    
    <header class="site-header">
       <div className="fstDiv">
        <p>
          <b>Holiday Deals are on now!</b>Up to 60% off. Deals
        </p>
      </div>

      <nav>
        <div className="navbar_logo">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar_search">
          {/* <input type='text' placeholder=' Search for products or brands' /> */}
          <input type="text" placeholder="Search for products or brands" />
        </div>
        <div className="navbar_cart">
          {/* <Link
            // to={"/signin"}
            style={{ textDecoration: "none", color: "rgb(60, 57, 57)" }}
          > */}
    

      <div class="site-header__top">
        <div class="wrapper site-header__wrapper">
          <div class="site-header__start">
            <ul class="">
              <li class=""><a href="#">About</a></li>
              <li class=""><a href="#">Contact</a></li>
            </ul>
          </div>
          <div class="site-header__middle">
            <a href="/" class="brand">FUSIONSTROM</a>
          </div>
          <div className="extradiv">
          <div class="site-header__en">
          <span><Link
            to="/cart"
            style={{ textDecoration: "none", color: "rgb(60, 57, 57)" , fontSize:"25px"}}
          >
            <i className="uil uil-bag"></i> 
          </Link></span>
           
          </div>
          <div class="site-header__end">
          {user?user.user.username:null}

            {user? (
              <span onClick={handleLogout}>LogOut</span>
            ) : (
            <a href="/signin" class="signin">SignIn</a>
            )}
          </div>
          
          </div>
          
          
          
        </div>
      </div>
      <hr />
      <div class="site-header__bottom">
        <div class="wrapper site-header__wrapper">
          <div class="site-header__start">
            <div class="search">
              <button class="search__toggle" aria-label="Open search" onClick={()=>handleClick()}>
                Search
                
              </button>
              <form class="search__form" action="">
                <label class="sr-only" for="search">Search</label>
                <input
                  type="search"
                  name=""
                  id="search"
                  placeholder="What's on your mind?"
                />
              </form>
            </div>
          </div>

          <div class="site-header__middle">
            <nav class="nav">
              <button class="nav__toggle" aria-expanded="false" type="button" onClick={() => handlenavClick()}>
                menu
              </button>
              <ul class="nav__wrapper">
                <li class="nav__item"><Link  to="#">Clearance</Link></li>
                <li class="nav__item"><Link  to="/womens">Women</Link></li>
                <li class="nav__item"><Link  to="/mens">Men</Link></li>
                <li class="nav__item"><Link  to="#">Kids</Link></li>
                <li class="nav__item"><Link  to="#">Shoes</Link></li>
                <li class="nav__item"><Link  to="#">Activewear</Link></li>
                <li class="nav__item"><Link  to="#">Bags & Accessories</Link></li>
                <li class="nav__item"><Link  to="#">Beauty</Link></li>
                <li class="nav__item"><Link  to="#"> Gifts</Link></li>
              </ul>
            </nav>
          </div>

          {/* <div class="site-header__end">
            <a href="#">عربي</a>
          </div> */}
        </div>
      </div>
    </header>
    
    // <!-- Header End -->
  )
};

export default Navbar;



//how to replace classList.toggle in react?
// const Header = (props) => {
//  const [isContainerActive, setIsContainerActive] = React.useState(false);
//   const signUpButton = () => {
//      setIsContainerActive(false);
//   };  
//   const signInButton = () => {
//      setIsContainerActive(true);
//   };

//   return (
//     <div className="header">
//       <div id="container" className={`container${isContainerActive ? " right-panel-active" : ""}`}>
//          <button className="ghost" id="signIn" onClick={signInButton}>Sign In</button>
//       </div>
//       <div className="overlay-panel overlay-right">
//        <p>Enter your personal details and start journey with us</p>
//        <button className="ghost" id="signUp" onClick={signUpButton}>Sign Up</button>
//       </div>
//     </div>
//   );
// }

// ReactDOM.render(<Header />, document.getElementById("root"));

// .header {height: 120px;}
// .container {float:left;}
// .overlay-right {display: none;background: red;float:right;height:100%;}
// .right-panel-active ~ .overlay-right {display: inline-block;}

// <div id="root"></div>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.8.4/umd/react.production.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.4/umd/react-dom.production.min.js"></script>








