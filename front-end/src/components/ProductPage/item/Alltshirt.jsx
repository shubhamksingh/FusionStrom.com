
import Product_card from '../card_page/Product_card';
import "../../ProductPage/product-page.css";
import { mendata } from "./womens_data";
import React, { useState, useEffect } from "react";
import ModalComponent from '../Model/ModalComponent';
import MensAccordion from '../MensAccordion';

const Alltshirt = () => {
    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [orderBy, setOrderBy] = useState("asc");
  const [selectedBox, setSelectedBox] = useState({});
  
    useEffect(() => {
      const sortArray = (type) => {
        const types = {
          CustomerRating: "rating",
          PriceHighToLow: "price",
          Newest: "id",
        };
        const sortProperty = types[type];
        const sorted = [...mendata].sort(
          (a, b) => b[sortProperty] - a[sortProperty]
        );
        setData(sorted);
      };
      sortArray(sortType);
    }, [sortType,orderBy]);
    // if(mendata.price<1000){
    //   setData(mendata)
    // }
    //
  return (
    <>
      <div className="total_item">
        <p className="total_item_1">{`${data.length} items`}</p>
        <select
          className="sort_by_feature"
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="">Custom Sorting</option>
          <option value="CustomerRating">Sort by customer rating</option>
          <option value="Newest">Sort by NewArrival</option>
          <option value="PriceHighToLow">Sort by price: high to low</option>
          <option value="PriceLowToHigh">Sort by price: low to high</option>
        </select>
      </div>
      <div className="display_item">
        {data.map((ele) => {
          return (
            <Product_card
            id={ele.id}
              key={ele.id}
              name={ele.name}
              price={ele.price}
              strprice={ele.origPrice}
              description={ele.description}
              image={ele.images}
              rating={ele.rating}
              item={ele}
            />
          );
        })}
       
       
      </div>
    </>
  )
}

export default Alltshirt
