import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";

import Item from "./Item";
import "./styles.css";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 },
];

 export default function Index() {
  return (
    <>
     
      <div className="App">
        <Carousel breakPoints={breakPoints}>
        <Item>
            <div className="slidePic">
           <Link to="./womens"><img className="slidpicture" src="https://n.nordstrommedia.com/id/sr3/9f7f66fd-c5bb-4000-8888-32014d1d9f32.jpeg?q=45&dpr=2&h=365.31&w=230"></img></Link> 
            </div>
            <div className="itemDetails">
              <p className="redP">Holiday Deal</p>
              <p className="blackP">1.STATE</p>
              <p className="redP">INR 2,573.03 (Extra 25% off)</p>
              <p className="blackP"><strike>INR 3,431.00</strike></p>
              <p className="blackP"><strike>INR 5,933.73</strike></p>
            </div>
            

        </Item>
          <Item>
          <div className="slidePic">
          <Link to="womens"> <img className="slidpicture" src="https://n.nordstrommedia.com/id/sr3/06b31d11-f015-4960-a38a-be4856858d27.jpeg?q=45&dpr=2&h=365.31&w=230"></img></Link> 
            </div>
            <div className="itemDetails">
              <p className="redP">Holiday Deal</p>
              <p className="blackP">1.STATE</p>
              <p className="redP">INR 2,573.03 (Extra 25% off)</p>
              <p className="blackP"><strike>INR 3,431.00</strike></p>
              <p className="blackP"><strike>INR 5,933.73</strike></p>
            </div>

          </Item>

          <Item>
          <div className="slidePic">
          <Link to="womens"><img className="slidpicture" src="	https://n.nordstrommedia.com/id/sr3/15664e25-8d1c-4a41-861e-fcd8086cddfd.jpeg?q=45&dpr=2&h=365.31&w=230"></img></Link> 
            </div>
            <div className="itemDetails">
              <p className="redP">Holiday Deal</p>
              <p className="blackP">1.STATE</p>
              <p className="redP">INR 2,573.03 (Extra 25% off)</p>
              <p className="blackP"><strike>INR 3,431.00</strike></p>
              <p className="blackP"><strike>INR 5,933.73</strike></p>
            </div>

          </Item>

          <Item>
          <div className="slidePic">
          <Link to="womens"> <img className="slidpicture" src="https://n.nordstrommedia.com/id/sr3/2bc45b97-9ada-4eb6-ac18-5bc9c4ad0015.jpeg?q=45&dpr=2&h=365.31&w=230"></img></Link> 
            </div>
            <div className="itemDetails">
              <p className="redP">Holiday Deal</p>
              <p className="blackP">1.STATE</p>
              <p className="redP">INR 2,573.03 (Extra 25% off)</p>
              <p className="blackP"><strike>INR 3,431.00</strike></p>
              <p className="blackP"><strike>INR 5,933.73</strike></p>
            </div>

          </Item>

          <Item>
          <div className="slidePic">
          <Link to="womens"> <img className="slidpicture" src="https://n.nordstrommedia.com/id/sr3/d690e0d2-2337-4a61-a387-c7dd738c23d0.jpeg?q=45&dpr=2&h=365.31&w=230"></img></Link> 
            </div>
            <div className="itemDetails">
              <p className="redP">Holiday Deal</p>
              <p className="blackP">1.STATE</p>
              <p className="redP">INR 2,573.03 (Extra 25% off)</p>
              <p className="blackP"><strike>INR 3,431.00</strike></p>
              <p className="blackP"><strike>INR 5,933.73</strike></p>
            </div>

          </Item>

          <Item>
          <div className="slidePic">
          <Link to="womens"> <img className="slidpicture" src="https://n.nordstrommedia.com/id/sr3/d3b6c9bf-21f9-40a0-86b0-b245f0d82224.jpeg?q=45&dpr=2&h=365.31&w=230"></img></Link> 
            </div>
            <div className="itemDetails">
              <p className="redP">Holiday Deal</p>
              <p className="blackP">1.STATE</p>
              <p className="redP">INR 2,573.03 (Extra 25% off)</p>
              <p className="blackP"><strike>INR 3,431.00</strike></p>
              <p className="blackP"><strike>INR 5,933.73</strike></p>
            </div>

          </Item>

          <Item>
          <div className="slidePic">
          <Link to="womens"> <img className="slidpicture" src="https://n.nordstrommedia.com/id/sr3/b4c3ce60-b72e-421f-84eb-0471421c17db.jpeg?q=45&dpr=2&h=365.31&w=230"></img></Link> 
            </div>
            <div className="itemDetails">
              <p className="redP">Holiday Deal</p>
              <p className="blackP">1.STATE</p>
              <p className="redP">INR 2,573.03 (Extra 25% off)</p>
              <p className="blackP"><strike>INR 3,431.00</strike></p>
              <p className="blackP"><strike>INR 5,933.73</strike></p>
            </div>

          </Item>

          <Item>
          <div className="slidePic">
          <Link to="womens"> <img className="slidpicture" src="https://n.nordstrommedia.com/id/sr3/31932e4a-19c5-4a87-8171-4f87b2e32dd2.jpeg?q=45&dpr=2&h=365.31&w=230"></img></Link> 
            </div>
            <div className="itemDetails">
              <p className="redP">Holiday Deal</p>
              <p className="blackP">1.STATE</p>
              <p className="redP">INR 2,573.03 (Extra 25% off)</p>
              <p className="blackP"><strike>INR 3,431.00</strike></p>
              <p className="blackP"><strike>INR 5,933.73</strike></p>
            </div>

          </Item>

          <Item>
          <div className="slidePic">
          <Link to="womens"> <img className="slidpicture" src="https://n.nordstrommedia.com/id/sr3/2f41cf14-284f-46f9-b2cf-c49ae6ee7903.jpeg?q=45&dpr=2&h=365.31&w=230"></img></Link> 
            </div>
            <div className="itemDetails">
              <p className="redP">Holiday Deal</p>
              <p className="blackP">1.STATE</p>
              <p className="redP">INR 2,573.03 (Extra 25% off)</p>
              <p className="blackP"><strike>INR 3,431.00</strike></p>
              <p className="blackP"><strike>INR 5,933.73</strike></p>
            </div>

          </Item>

          <Item>
          <div className="slidePic">
          <Link to="womens"> <img className="slidpicture" src="https://n.nordstrommedia.com/id/sr3/5fd7f595-e5bc-49f0-972d-e0cbb2d008a3.jpeg?q=45&dpr=2&h=365.31&w=230"></img></Link> 
            </div>
            <div className="itemDetails">
              <p className="redP">Holiday Deal</p>
              <p className="blackP">1.STATE</p>
              <p className="redP">INR 2,573.03 (Extra 25% off)</p>
              <p className="blackP"><strike>INR 3,431.00</strike></p>
              <p className="blackP"><strike>INR 5,933.73</strike></p>
              
            </div>

          </Item>
         
        </Carousel>
      </div>
    </>
  );
}

