import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

 export default function Index() {
  return (
    <>
     
      <div className="App">
        <Carousel breakPoints={breakPoints}>
        <Item>
            <div className="slidePic">
            <img className="slidpicture" src="https://n.nordstrommedia.com/id/sr3/7ab68c55-33bd-4393-a29d-c264a53af209.jpeg?q=45&dpr=2&h=365.31&w=230"></img>
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
            <img className="slidpicture" src="https://n.nordstrommedia.com/id/sr3/d539b784-cc6f-4bc2-8ee6-d2733c89d906.jpeg?q=45&dpr=2&h=365.31&w=230"></img>
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
            <img className="slidpicture" src="https://n.nordstrommedia.com/id/sr3/1772a05e-aace-496d-bdfa-30bc13b72b34.jpeg?q=45&dpr=2&h=365.31&w=230"></img>
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
            <img className="slidpicture" src="https://n.nordstrommedia.com/id/sr3/85669c58-2bc3-4169-88c2-a07b307735de.jpeg?q=45&dpr=2&h=365.31&w=230"></img>
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
            <img className="slidpicture" src="https://n.nordstrommedia.com/id/sr3/d690e0d2-2337-4a61-a387-c7dd738c23d0.jpeg?q=45&dpr=2&h=365.31&w=230"></img>
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
            <img className="slidpicture" src="https://n.nordstrommedia.com/id/sr3/d3b6c9bf-21f9-40a0-86b0-b245f0d82224.jpeg?q=45&dpr=2&h=365.31&w=230"></img>
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
            <img className="slidpicture" src="https://n.nordstrommedia.com/id/sr3/b8a5394b-4795-419b-b6b4-27b546d90dec.jpeg?q=45&dpr=2&h=365.31&w=230"></img>
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
            <img className="slidpicture" src="https://n.nordstrommedia.com/id/sr3/c962cd16-1bff-46b4-8f8f-e26f5079eb35.jpeg?q=45&dpr=2&h=365.31&w=230"></img>
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
            <img className="slidpicture" src="https://n.nordstrommedia.com/id/sr3/36ea3293-0adf-48a8-8957-38a1fb3cbbb7.jpeg?q=45&dpr=2&h=365.31&w=230"></img>
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
            <img className="slidpicture" src="https://n.nordstrommedia.com/id/sr3/7ab68c55-33bd-4393-a29d-c264a53af209.jpeg?q=45&dpr=2&h=365.31&w=230"></img>
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

