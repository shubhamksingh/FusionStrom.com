import flag from "../images/indiaFlag.png";
import { FcSmartphoneTablet } from "react-icons/fc";
import { AiOutlineInstagram, AiOutlinePlus } from "react-icons/ai";
import {
  TiSocialPinterest,
  TiSocialTwitter,
  TiSocialFacebook,
} from "react-icons/ti";
import { BsChevronUp } from "react-icons/bs";
import "../css/footer.model.css";
import {MdOutlineClose} from "react-icons/md";
import { useState } from "react";

function Footer() {
    const [isShown,setIsShown]=useState(false);

    const handleDisplay=()=>{
        setIsShown(c=>!c);
    }
  return (
    <div className="footer">
      <div className="foo-p1">
        <div className="foo-email-grid" style={{display: isShown ? 'block' : 'none'}}>
          <div>
            <MdOutlineClose id="foo-close" onClick={handleDisplay}/>
            <h2>You're in!</h2>
            <p>
              Stay tuned for the latest updates on new arrivals, special offers
              and more - all delivered straight to your inbox.
            </p>
            <a href="/">Privacy Policy</a>
          </div>
        </div>
        <div className="foo-form">
            <p className="foo-email-head">Get Email Updates:</p>
            <form className="foo-email-form">
            <input
                className="foo-email"
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                required
            />
            <input type="submit" value="Sign up" className="foo-submit" onClick={handleDisplay}/>
            </form>
        </div>
      </div>
      <div id="foo-down">
        <div className="foo-p2">
          <div className="foo service">
            <p className="foo-head">Customer Service</p>
            <p>Contact Us</p>
            <p>Order Status</p>
            <p>Shipping</p>
            <p>Return Policy & Exchange</p>
            <p>Price Adjustments</p>
            <p>Gift Cards</p>
            <p>FAQ</p>
            <p>Product Recalls</p>
            <p className="iflg">
              <img src={flag} alt="indiaFlag" id="iflag" />
              <p>India</p>
            </p>
          </div>
          <div className="foo about">
            <p className="foo-head">About Us</p>
            <p>All Brands</p>
            <p>Careers</p>
            <p>Corporate Social Responsibility</p>
            <p>Diversity, Inclusion & Belonging</p>
            <p>Get Email Updates</p>
            <p>Fusionstrom Blog</p>
            <p>The Thread</p>
            <p>Nordy Podcast</p>
          </div>
          <div className="foo store">
            <p className="foo-head">Store & Services</p>
            <p>Find a Store</p>
            <p>Free Style Help</p>
            <p>Alterations & Tailoring</p>
            <p>Pop-In Shop</p>
            <p>Virtual Events</p>
            <p>Spa Fusionstrom</p>
            <p>Fusionstrom Restaurants</p>
            <p>Fusionstrom Local</p>
          </div>
          <div className="foo reward">
            <p className="foo-head">Fusionstrom Card & Rewards</p>
            <p>The Fusion Club Rewards</p>
            <p>Pay My Bill</p>
            <p>Manage My Fusionstrom Card</p>
          </div>
          <div className="foo inc">
            <p className="foo-head">Fusionstrom, Inc.</p>
            <p>Fusionstrom Rack</p>
            <p>Fusionstrom Canada</p>
            <p>Investor Relations</p>
            <p>Press Releases</p>
            <p>Fusionstrom Media Network</p>
          </div>
          <div className="foo app">
            <p className="foo-head">
              <FcSmartphoneTablet id="foo-tablet" />
              <p>Get our apps</p>
            </p>
            <div className="social">
              <div className="foo-s-icon">
                <AiOutlineInstagram id="social-fa" />
              </div>
              <div className="foo-s-icon">
                <TiSocialPinterest id="social-fa" />
              </div>
              <div className="foo-s-icon">
                <TiSocialTwitter id="social-fa" />
              </div>
              <div className="foo-s-icon">
                <TiSocialFacebook id="social-fa" />
              </div>
              <div className="foo-s-plus">
                <AiOutlinePlus />
              </div>
            </div>
            <div className="pageup">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                <BsChevronUp id="pageup-chev" />
                Top
              </button>
            </div>
          </div>
        </div>
        <div className="foo-p3">
          <p>Privacy</p>
          <p>Do Not Sell My Personal Information</p>
          <p>Terms & Conditions</p>
          <p>Interest-Based Ads</p>
          <p>&copy;2022 Fusionstrom, Inc.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
