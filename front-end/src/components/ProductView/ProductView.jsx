// styles
import "./productView.model.css";

//icons
import { MdOutlineStar, MdStarHalf } from "react-icons/md";
import { HiOutlineChevronDown } from "react-icons/hi";
import {IoBag} from "react-icons/io5";
import {AiOutlinePlus} from "react-icons/ai";

const ProductView = () => {
  return (
    <div className="product-view">
      <div className="pv-overview">
        <div className="ov-images">
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
        <div className="ov-desc">
          <div className="o-stars">
            <div className="ov-star">
              <div>
                <MdOutlineStar id="o-star checked" />
                <MdOutlineStar id="o-star checked" />
                <MdOutlineStar id="o-star checked" />
                <MdStarHalf id="o-star checked" />
                <MdOutlineStar id="o-star " />
              </div>
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
          <p>UGG <sup>&#174;</sup></p>
          <p className="product-price">INR <span>12,357</span></p>
          <p className="product-desc">An ultra-short shaft adds a twist to this abbreviated version of a classic UGG boot.</p>
          <select name="product-size" id="product-size">
            <option>Size</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
          <p className="ps-guide">Size guides</p>
          <select name="product-width" id="product-width">
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
          <select name="product-color" id="product-color">
            <option value="">Carnation</option>
            <option value=""></option>
          </select>
          <p>1893 people are viewing</p>
          <button className="pv-addToBag"><IoBag id="pv-bag"/>Add to Bag</button>
          <a href="#"><AiOutlinePlus id="pv-plus"/> Add to Wish List</a>
        </div>
        <div className="ov-mLike">
            <h2 className="ov-mLike-head">You might also like</h2>
            <div className="mlike-container">
                <div className="mlc-up">
                    <img src="https://n.nordstrommedia.com/id/sr3/d251006c-442a-41de-a9c1-8ad9710e22b0.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838" alt="img" />
                    <p className="mlike-popular">Popular</p>
                    <button>Quick View</button>
                </div>
                <div className="mlc-down">
                    <p>UGG <sup>&#174;</sup></p>
                    <p>INR <span>12,345.56</span></p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
