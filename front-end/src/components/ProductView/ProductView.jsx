// styles
import "./productView.css";

//icons
import { MdOutlineStar, MdStarHalf, MdStarOutline } from "react-icons/md";
import { HiOutlineChevronDown } from "react-icons/hi";
import { IoBag } from "react-icons/io5";
import { AiOutlinePlus,AiOutlineMail } from "react-icons/ai";
import {ImGift} from "react-icons/im";
import {BsCardText} from "react-icons/bs";
import {TfiGift,TfiDropbox} from "react-icons/tfi";
import {TiGift} from "react-icons/ti";

const likeData = [
  {
    link: "https://n.nordstrommedia.com/id/sr3/eb2aba58-a33a-47fe-841b-07a854219056.jpeg?h=365&w=240&dpr=2",
    price: "1,600.01",
  },
  {
    link: "https://n.nordstrommedia.com/id/sr3/d644ef6a-f46d-4d5d-a16f-cda3344c451a.jpeg?h=365&w=240&dpr=2",
    price: "2,990.99",
  },
  {
    link: "https://n.nordstrommedia.com/id/sr3/1749804e-13c4-4471-97bd-6ce519cda779.jpeg?h=365&w=240&dpr=2",
    price: "800.95",
  },
  {
    link: "https://n.nordstrommedia.com/id/sr3/4903b65b-ae62-428a-ae1a-e2147b4c11e8.jpeg?h=365&w=240&dpr=2",
    price: "10,800.95",
  },
];


const ProductView = () => {
  
  
  return (
    <div className="product-view">
      <div className="pv-overview">
        <div className="ov-images">
          <div>
            <div className="ov-img">
              <img
                src="https://n.nordstrommedia.com/id/sr3/2bd75271-056d-4eb2-95d1-6c269eb8e2bf.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
                alt="img1"
              />
            </div>
            <div className="ov-img">
              <img
                src="https://n.nordstrommedia.com/id/sr3/d251006c-442a-41de-a9c1-8ad9710e22b0.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
                alt="img2"
              />
            </div>
            <div className="ov-img">
              <img
                src="https://n.nordstrommedia.com/id/sr3/1ed21d9c-e1fd-415c-b4ef-c917ba762250.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
                alt="img3"
              />
            </div>
            <div className="ov-img">
              <img
                src="https://n.nordstrommedia.com/id/sr3/1ed21d9c-e1fd-415c-b4ef-c917ba762250.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
                alt="img4"
              />
            </div>
          </div>
          <hr />
        </div>
        <div className="ov-desc">
          <div className="o-stars">
            <div className="ov-star">
              <MdOutlineStar id="o-star checked" />
              <MdOutlineStar id="o-star checked" />
              <MdOutlineStar id="o-star checked" />
              <MdStarHalf id="o-star checked" />
              <MdStarOutline id="o-star " />
            </div>
            <div>
              <p>(1.3K)</p>
            </div>
            <div className="ov-rev">
              <div className="ov-rev-chev-down">
                <HiOutlineChevronDown />
              </div>
              {/* <div className="ov-rev-chev-up"><HiOutlineChevronUp/></div> */}
            </div>
          </div>
          <p className="product-name">Ultra Mini Classic Boot</p>
          <p className="p-ugg">
            UGG <sup>&#174;</sup>
          </p>
          <p className="product-price">
            INR <span>12,357.56</span>
          </p>
          <p className="product-desc">
            An ultra-short shaft adds a twist to this abbreviated version of a
            classic UGG boot.
          </p>
          <select name="product-size" id="product-size">
            <option>Size</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
          <p className="ps-guide">Size guides</p>
          {/* <select name="product-width" id="product-width">
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select> */}
          <select name="product-color" id="product-color">
            <option value="">Carnation</option>
            <option value=""></option>
          </select>
          <p className="p-view">
            <span>1893</span> people are viewing
          </p>
          <button className="pv-addToBag">
            <IoBag id="pv-bag" />
            Add to Bag
          </button>
          <a href="#" className="p-wish">
            <AiOutlinePlus id="pv-plus" /> Add to Wish List
          </a>
        </div>
        <div className="ov-mLike">
          <h2 className="ov-mLike-head">You might also like</h2>
          {likeData.map((e) => {
            return (
              <div className="mlike-container">
                <div className="mlc-up">
                  <img src={e.link} alt="img" />
                  <p className="mlike-popular">Popular</p>
                  <button>Quick View</button>
                </div>
                <div className="mlc-down">
                  <p>
                    UGG <sup>&#174;</sup>
                  </p>
                  <p>
                    INR <span>{e.price}</span>
                  </p>
                </div>
              </div>
            );
          })}
          <div className="mlike-container">
            {/* <div className="mlc-up">
                    <img src="https://n.nordstrommedia.com/id/sr3/d251006c-442a-41de-a9c1-8ad9710e22b0.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838" alt="img" />
                    <p className="mlike-popular">Popular</p>
                    <button>Quick View</button>
                </div> */}
            <div className="mlc-down">
              <p>
                UGG <sup>&#174;</sup>
              </p>
              <p>
                INR <span>12,345.56</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-info">
        <div className="p-sizeinfo">
          <h2>SIZE INFO</h2>
          <ul><li>True to size.</li></ul>
          <h2>DETAILS & CARE</h2>
          <p>Signature wrinkle-resistant cotton keeps you looking crisp and neat all day in a dress shirt tailored for versatility from solid oxford cloth.</p>
          <ul>
            <li>Raised placket</li>
            <li>Point collar</li>
            <li>Rounded, adjustable button cuffs</li>
            <li>Chest patch pocket</li>
            <li>100% cotton</li>
            <li>Machine wash, tumble dry</li>
            <li>Imported</li>
            <li>Item #1083758</li>
          </ul>
          <p>Free Shipping & Returns <a href="#">See more</a></p>
        </div>
        <div className="p-gift">
          <h2><ImGift/> GIFT OPTIONS</h2>
          <p>Choose your gift options at Checkout. Some items may not be eligible for all gift options.</p>
          <h3>Free Pickup</h3>
          <ul>
            <li><BsCardText/>Printed gift message (free)</li>
            <li><ImGift/>Nordstrom gift box (free)</li>
            <li><TfiGift/>Signature gift wrap ($5)</li>
            <li><TiGift/>Fabric gift bag ($5)</li>
          </ul>
          <h3>Delivery</h3>
          <ul>
            <li><AiOutlineMail/>Email gift message (free)</li>
            <li><BsCardText/>Printed gift message (free)</li>
            <li><TiGift/>Fabric gift bag ($5)</li>
            <li><TfiDropbox/>DIY Nordstrom gift box ($5)</li>
          </ul>
          <p>Need help finding the perfect gift? We've got you covered.</p>
          <button className="shop-gift">Shop Gifts</button>
          <a href="/">FUSIONSTROM</a>
          <p>The Nordstrom line of high-quality clothing, shoes and accessories offers just the right pieces for women, men and kids seeking timeless, classic items to complement and polish their wardrobe. Versatility, ease and affordability are hallmarks of the Nordstrom collection. Available exclusively at Nordstrom.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
