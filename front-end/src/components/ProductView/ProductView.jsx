// styles
import "./productView.css";

//icons
import { MdOutlineStar, MdStarHalf, MdStarOutline } from "react-icons/md";
import { HiOutlineChevronDown } from "react-icons/hi";
import { IoBag } from "react-icons/io5";
import { AiOutlinePlus, AiOutlineMail } from "react-icons/ai";
import { ImGift } from "react-icons/im";
import { BsCardText } from "react-icons/bs";
import { TfiGift, TfiDropbox } from "react-icons/tfi";
import { TiGift } from "react-icons/ti";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { mendata } from "../ProductPage/item/womens_data";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  const id = useParams();
  const [productData, setProductData] = useState({});
  const [cartItem, setCartItem] = useState(JSON.parse(localStorage.getItem("cart"))||[])
  const navigate = useNavigate();

  // console.log("id",id.id);
  // console.log("men data",mendata)
  // console.log("productData",productData.images)
  //this code is used for before the deployment

  //for getting single product from db after deployment
  // let url=`http://localhost:8080/api/products/find/${id}`
  // const getData=()=>{
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProductData(data.res);
  //     });
  // }
  // getData();


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
    mendata.map((e) => {
      if (e.id == id.id) {
        console.log(e);
        setProductData(e);
      } else {
        console.log("error");
      }
    });
  }, [cartItem]);

  //for getting single product from db after deployment

  // let url="http://localhost:8080/carts";
  const handleCart = (e) => {
    e.preventDefault();
    setCartItem([...cartItem, productData]);
    //   axios
    //   .post(url, productData)
    //   .then((res) => {
    //     console.log(res.data);
    navigate(`/cart`);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };


  return (
    <div className="product-view">
      <div className="pv-overview">
        <div className="ov-images">
          <div>
            <div className="ov-img">
              <img src={productData.images} alt="img1" />
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
          <p className="product-name">{productData.name}</p>
          <p className="p-ugg">
            {productData.brand}
            {/* UGG <sup>&#174;</sup> */}
          </p>
          <p className="product-price">
            INR <span>{productData.price}</span>
          </p>
          <p className="origin-p">
            INR <span>{productData.origPrice}</span>
          </p>
          <p className="product-desc">{productData.description}</p>
          <select name="product-size" id="p-size">
            <option>Size</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
          <p className="ps-guide">Size guides</p>
          {/* <select name="product-width" id="product-width">
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select> */}
          <select name="product-color" id="product-color">
            <option value="">Colours</option>
            <option value="white">White</option>
            <option value="blue">Blue</option>
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="gray">Gray</option>
          </select>
          <p className="p-view">
            <span>1893</span> people are viewing
          </p>
          <button className="pv-addToBag" onClick={handleCart}>
            <IoBag id="pv-bag" />
            <p>Add to Bag</p> 
          </button>
          <a href="#" className="p-wish">
            <AiOutlinePlus id="pv-plus" /> <p>Add to Wish List</p> 
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
          <ul>
            <li>True to size.</li>
          </ul>
          <h2>DETAILS & CARE</h2>
          <p>
            Signature wrinkle-resistant cotton keeps you looking crisp and neat
            all day in a dress shirt tailored for versatility from solid oxford
            cloth.
          </p>
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
          <p>
            Free Shipping & Returns <a href="#">See more</a>
          </p>
        </div>
        <div className="p-gift">
          <h2>
            <ImGift /> <p>GIFT OPTIONS</p>
          </h2>
          <p>
            Choose your gift options at Checkout. Some items may not be eligible
            for all gift options.
          </p>
          <h3>Free Pickup</h3>
          <ul>
            <li>
              <BsCardText />
              <p>Printed gift message (free)</p>
            </li>
            <li>
              <ImGift />
              <p>Nordstrom gift box (free)</p>
            </li>
            <li>
              <TfiGift />
              <p>Signature gift wrap ($5)</p>
            </li>
            <li>
              <TiGift />
              <p>Fabric gift bag ($5)</p>
            </li>
          </ul>
          <h3>Delivery</h3>
          <ul>
            <li>
              <AiOutlineMail />
              <p>Email gift message (free)</p>
            </li>
            <li>
              <BsCardText />
              <p>Printed gift message (free)</p>
            </li>
            <li>
              <TiGift />
              <p>Fabric gift bag ($5)</p>
            </li>
            <li>
              <TfiDropbox />
              <p>DIY Nordstrom gift box ($5)</p>
            </li>
          </ul>
          <p>Need help finding the perfect gift? We've got you covered.</p>
          <button className="shop-gift">Shop Gifts</button>
          <a href="/">FUSIONSTROM</a>
          <p>
            The Nordstrom line of high-quality clothing, shoes and accessories
            offers just the right pieces for women, men and kids seeking
            timeless, classic items to complement and polish their wardrobe.
            Versatility, ease and affordability are hallmarks of the Nordstrom
            collection. Available exclusively at Nordstrom.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
