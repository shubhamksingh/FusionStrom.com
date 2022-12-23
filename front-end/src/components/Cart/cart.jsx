import "./cart.css";
import "./cartResponsive.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { ImGift } from "react-icons/im";
import { BsTruck } from "react-icons/bs";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaRegDotCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";

const viewed = [
  {
    img: "https://n.nordstrommedia.com/id/sr3/e9737c84-c956-4a05-984f-a22a098d5ea5.jpeg?w=156&h=240",
    tag: "Sustainable Style",
    brand: "PAIGE",
    price: "12,999.65",
    off: "20%",
    avail: 10,
  },
  {
    img: "https://n.nordstrommedia.com/id/sr3/8fca7188-4bb4-47fb-9dc2-4430088d267d.jpeg?q=45&dpr=2&h=135.8&w=88",
    tag: "Sustainable Style",
    brand: "UGG",
    price: "13,181.65",
    off: "20%",
    avail: 2,
  },
  {
    img: "https://n.nordstrommedia.com/id/sr3/09398284-872c-4e46-8f24-e2ba0fa8bdbd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
    tag: "Sustainable Style",
    brand: "COACH",
    price: "13,999.65",
    off: "25%",
    avail: 10,
  },
  {
    img: "https://n.nordstrommedia.com/id/sr3/ba8b5555-165d-4def-a47b-199a42f73493.jpeg?h=365&w=240&dpr=2",
    tag: "Limited-Time Sale",
    brand: "Zella",
    price: "2,799.65",
    off: "25%",
    avail: 10,
  },
];

const CartPage = () => {
  const navigate = useNavigate();
  // let userid = useSelector((store) => store.user._id);
  let userid = "63702410f7967c7e1768f4f0";
  const [items, setItems] = useState([]);
  const [wishList, setWishlists] = useState([]);
  const [count, setCount] = useState(1);
  let totalCart;

  console.log(`https://fusionstrom-backend-production.up.railway.app/api/carts/find/${userid}`)

  const url1 = `http://localhost:8080/api/carts/find/${userid}`;
  const getCartItems = () => {
    axios.get(`https://fusionstrom-backend-production.up.railway.app/api/carts/find/${userid}`).then((res) => {
      console.log(res);
      let pid = res.data.products[0].productId;
      console.log(pid);
      // axios.get(`http://localhost:8080/api/products/find/${pid}`).then((res)=>{
      //   console.log(res)
      // })
      // console.log(res.data);
    });
  };
  getCartItems();

  const url2 = `http://localhost:8080/whislist/find/${userid}`;
  const getWishListitem = () => {
    // axios.get(url2).then((res) => {
    //   setWishlists(res.data);
    //   console.log(res.data);
    // });
  };

  getWishListitem();

  const handleCitemRemove = () => {
    // const url = `http://localhost:8080/carts/find/${id}`;
    // axios.delete(url).then((res) => {
    //   alert("Item removed successfully");
    // });
  };

  const handleWishlist = (data) => {
    let url = "http://localhost:8080/whislist";
    // axios
    //   .post(url, data)
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const handleWishRemove = () => {
    // const url = `http://localhost:8080/whislist/find/${id}`;
    // axios.delete(url).then((res) => {
    //   alert("Item removed successfully");
    // });
  };

  const handleMovebag = (data) => {
    let url = "http://localhost:8080/carts";
    // axios
    //   .post(url, data)
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const handleCheckout = () => {
   
  };
 const onToken = (token)=>{
  navigate(`/`);
 }
  return (
    <div className="cart-part">
      <div className="cart-right">
        <Tabs variant="unstyled" className="cart-tab">
          <TabList>
            <Tab
              _selected={{
                color: "#484848",
                bg: "#D0D0D0",
                outline: "none",
                border: "none",
                fontWeight: "600",
              }}
              className="cart-tab-head"
            >
              Shopping Bag <span>(2)</span>
            </Tab>
            <Tab
              _selected={{
                color: "#484848",
                bg: "#D0D0D0",
                outline: "none",
                border: "none",
                fontWeight: "600",
              }}
              className="cart-tab-head"
            >
              Saved for Later<span>(1)</span>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className="ct-info-one">
                <div className="bag-gift">
                  <h3>Shopping Bag</h3>
                  <p>Items in your bag are not on hold.</p>
                  <p>
                    <ImGift id="c-gift" />
                    <span>Choose gift options when you check out.</span>
                  </p>
                </div>
                <hr />
                <div className="cart-delivery">
                  <h4>
                    <BsTruck id="c-truck" />
                    <p>
                      Delivery (1 item) to <span>India</span>
                    </p>
                  </h4>
                  <p>International shipping</p>
                </div>
                <hr />
                <div className="cart-items">
                  <div className="c-img">
                    <img src="https://n.nordstrommedia.com/id/sr3/ea872fc8-9371-4add-9971-983c516d8261.jpeg?h=365&w=240&dpr=2" alt="img" />
                  </div>
                  <div className="c-info">
                    <p>LUCKY BRAND</p>
                    <p>Karl Lagerfeld Paris</p>
                    <p>Size: M</p>
                    <p>Color: Gray</p>
                    <p>Item: 6031488</p>
                    <select name="c-qty" id="c-qty">
                      <option value="1">Qty 1</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                    <div className="c-actions">
                      <button onClick={handleCitemRemove()}>Remove</button>
                      <button onClick={handleWishlist()}>
                        Save for later
                      </button>
                    </div>
                  </div>
                  <div className="c-delivery">
                    <div>
                      <p>
                        <MdDoNotDisturbAlt id="d-logo" />{" "}
                        <span>Not available for pickup</span>
                      </p>
                      <p>
                        <FaRegDotCircle id="d-logo" /> <span>Delivery</span>
                      </p>
                    </div>
                    <p>
                      Delivery International orders usually arrive within 5–13
                      business days. We'll give you delivery dates in checkout.
                    </p>
                  </div>
                  <div className="c-price">
                    <p>2241.08</p>
                  </div>
                </div>
                <hr />
                <div className="cart-items">
                  <div className="c-img">
                    <img src="https://n.nordstrommedia.com/id/sr3/788e718d-52fa-4041-98b1-6cf80eb0b9d2.jpeg?h=365&w=240&dpr=2" alt="img" />
                  </div>
                  <div className="c-info">
                    <p>BROOKS BROTHERS</p>
                    <p>Essentials Oversize Long Sleeve Logo T-Shirt</p>
                    <p>Size: L</p>
                    <p>Color: Red</p>
                    <p>Item: 6031488</p>
                    <select name="c-qty" id="c-qty">
                      <option value="1">Qty 1</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                    <div className="c-actions">
                      <button onClick={handleCitemRemove()}>Remove</button>
                      <button onClick={handleWishlist()}>
                        Save for later
                      </button>
                    </div>
                  </div>
                  <div className="c-delivery">
                    <div>
                      <p>
                        <MdDoNotDisturbAlt id="d-logo" />{" "}
                        <span>Not available for pickup</span>
                      </p>
                      <p>
                        <FaRegDotCircle id="d-logo" /> <span>Delivery</span>
                      </p>
                    </div>
                    <p>
                      Delivery International orders usually arrive within 5–13
                      business days. We'll give you delivery dates in checkout.
                    </p>
                  </div>
                  <div className="c-price">
                    <p>3869.86</p>
                  </div>
                </div>
                <hr />
                <div className="c-check-part">
                  <div className="c-payments">
                    <p>Accepted Payment Methods</p>
                    <div className="payImgDiv">
                      <img
                        src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png"
                        alt=""
                      />
                      <img
                        src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png"
                        alt=""
                      />
                      <img
                        src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png"
                        alt=""
                      />
                      <img
                        src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png"
                        alt=""
                      />
                    </div>
                    <p>
                      Need help? Call 1.888.282.6060 or{" "}
                      <span>chat with us</span>
                    </p>
                    <p>Shipping internationally?</p>
                  </div>
                  <div className="c-checkout">
                    <div className="c-total">
                      <p>Subtotal</p>
                      <p>6110.94</p>
                    </div>
                    <hr />
                    <StripeCheckout
                     
                     name = "FusionStrom"
                     image = "https://cdn.freebiesupply.com/logos/large/2x/nordstrom-logo-png-transparent.png"
                     billingAddress
                     shippingAddress
                     description={`Your total is RS 50000`}
                     amount = {50000}
                     token = {onToken}
                     stripeKey = {`pk_test_51M3UvKSJRcG25NZVdrV6dtiT8qLQZnxvHRg7mE2F1HPu3dC0wDL3VnqUF0mpTaeDMMOoPs0vxRU5o9fq3remWHPi00Sk3wOLKi`}
                    >
                    <button id="bb" onClick={handleCheckout}>Check Out</button>
                    </StripeCheckout>
                    {/* <button onClick={handleCheckout}>Check Out</button> */}
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="ct-info-one">
                <div className="bag-gift">
                  <h3>Shopping Bag</h3>
                </div>
                <hr />
                <div className="cart-items">
                  <div className="c-img">
                    <img src="https://n.nordstrommedia.com/id/sr3/4664a52d-25f1-443e-9c97-38183c9e0c46.jpeg?h=365&w=240&dpr=2" alt="img" />
                  </div>
                  <div className="c-info">
                    <p>LUCKY BRAND</p>
                    <p>121 Heritage Slim Straight Leg Jeans</p>
                    <p>Size: L</p>
                    <p>Color: Black</p>
                    <p>Item: 6031488</p>
                    <select name="c-qty" id="c-qty">
                      <option value="1">Qty 1</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                    <div className="c-actions">
                      <button onClick={handleCitemRemove()}>Remove</button>
                      <button onClick={handleWishlist()}>
                        Save for later
                      </button>
                    </div>
                  </div>
                  <div className="c-delivery">
                    <div>
                      <p>
                        <MdDoNotDisturbAlt id="d-logo" />{" "}
                        <span>Not available for pickup</span>
                      </p>
                      <p>
                        <FaRegDotCircle id="d-logo" /> <span>Delivery</span>
                      </p>
                    </div>
                    <p>
                      Delivery International orders usually arrive within 5–13
                      business days. We'll give you delivery dates in checkout.
                    </p>
                  </div>
                  <div className="c-price">
                    <p>3405.48</p>
                  </div>
                </div>
                <hr />
                   
                <div className="c-check-part">
                  <div className="c-payments">
                    <p>Accepted Payment Methods</p>
                    <div className="payImgDiv">
                      <img
                        src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png"
                        alt=""
                      />
                      <img
                        src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png"
                        alt=""
                      />
                      <img
                        src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png"
                        alt=""
                      />
                      <img
                        src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png"
                        alt=""
                      />
                    </div>
                    <p>Need help? Call 1.888.282.6060 or chat with us</p>
                    <p>Shipping internationally?</p>
                  </div>
                </div>
              </div>
            </TabPanel>
          </TabPanels>
          {/* <TabPanels>
            <TabPanel>
              <div className="ct-info-one">
                <div className="bag-gift">
                  <h3>Shopping Bag</h3>
                  <p>Items in your bag are not on hold.</p>
                  <p>
                    <ImGift id="c-gift" />
                    <span>Choose gift options when you check out.</span>
                  </p>
                </div>
                <hr />
                <div className="cart-delivery">
                  <h4>
                    <BsTruck id="c-truck" />
                    <p>
                      Delivery (1 item) to <span>India</span>
                    </p>
                  </h4>
                  <p>International shipping</p>
                </div>
                <hr />
                {items.map((e) => {
                  let amount=count*e.price
                  totalCart+=amount;
                  return (
                    <>
                      <div className="cart-items">
                        <div className="c-img">
                          <img
                            src={e.images}
                            alt="img"
                          />
                        </div>
                        <div className="c-info">
                          <p>{e.brand}</p>
                          <p>{e.name}</p>
                          <p>Size: {e.size}</p>
                          <p>Color: {e.color}</p>
                          <p>Item: 6031488</p>
                          <select name="c-qty" id="c-qty">
                            <option value="1">Qty 1</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                          </select>
                          <div className="c-actions">
                            <button onClick={handleCitemRemove(e._id)}>Remove</button>
                            <button onClick={handleWishlist(e)}>
                              Save for later
                            </button>
                          </div>
                        </div>
                        <div className="c-delivery">
                          <div>
                            <p>
                              <MdDoNotDisturbAlt id="d-logo" />{" "}
                              <span>Not available for pickup</span>
                            </p>
                            <p>
                              <FaRegDotCircle id="d-logo" />{" "}
                              <span>Delivery</span>
                            </p>
                          </div>
                          <p>
                            Delivery International orders usually arrive within
                            5–13 business days. We'll give you delivery dates in
                            checkout.
                          </p>
                        </div>
                        <div className="c-price">
                          <p>{amount}</p>
                        </div>
                      </div>
                      <hr />
                    </>
                  );
                })}

                <div className="c-check-part">
                  <div className="c-payments">
                    <p>Accepted Payment Methods</p>
                    <div className="payImgDiv">
                      <img
                        src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png"
                        alt=""
                      />
                      <img
                        src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png"
                        alt=""
                      />
                      <img
                        src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png"
                        alt=""
                      />
                      <img
                        src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png"
                        alt=""
                      />
                    </div>
                    <p>
                      Need help? Call 1.888.282.6060 or{" "}
                      <span>chat with us</span>
                    </p>
                    <p>Shipping internationally?</p>
                  </div>
                  <div className="c-checkout">
                    <div className="c-total">
                      <p>Subtotal</p>
                      <p>{totalCart}</p>
                    </div>
                    <hr />
                    <button onClick={handleCheckout}>Check Out</button>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="ct-info-one">
                <div className="bag-gift">
                  <h3>Shopping Bag</h3>
                </div>
                <hr />
                {
                  wishList.map(e=>{
                    return(
                      <><div className="cart-items">
                        <div className="c-img">
                          <img
                            src={e.images}
                            alt="img" />
                        </div>
                        <div className="c-info">
                          <p>{e.brand}</p>
                          <p>{e.name}</p>
                          <p>Size: {e.size}</p>
                          <p>Color: {e.color}</p>
                          <p>Item: 6031488</p>

                          <div className="c-actions">
                            <button onClick={handleWishRemove(e._id)}>Remove</button>
                            <button onClick={handleMovebag(e)}>Move to bag</button>
                          </div>
                        </div>
                        <div className="c-delivery">
                          <p>QTY :1</p>
                        </div>
                        <div className="c-price">
                          <p>{e.price}</p>
                        </div>
                      </div><hr /></>
                    );
                  })
                }
                <div className="c-check-part">
                  <div className="c-payments">
                    <p>Accepted Payment Methods</p>
                    <div className="payImgDiv">
                      <img
                        src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png"
                        alt=""
                      />
                      <img
                        src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png"
                        alt=""
                      />
                      <img
                        src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png"
                        alt=""
                      />
                      <img
                        src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png"
                        alt=""
                      />
                    </div>
                    <p>Need help? Call 1.888.282.6060 or chat with us</p>
                    <p>Shipping internationally?</p>
                  </div>
                </div>
              </div>
            </TabPanel>
          </TabPanels> */}
        </Tabs>
      </div>
      <div className="cart-left">
        <div className="rightSection">
          <div className="head">
            <p>People also viewed</p>
          </div>
          {viewed.map((e) => {
            return (
              <div className="sliderr">
                <div>
                  <img src={e.img} alt="img" />
                </div>
                <div>
                  <p style={{ color: "black", fontWeight: "bold" }}>{e.tag}</p>
                  <p>{e.brand}</p>
                  <div className="smallDiv">
                    <p style={{ color: "red", fontWeight: "bold" }}>
                      INR {e.price}
                    </p>
                    <p>{e.off} off</p>
                  </div>
                  <p>Size {e.avail} available</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
