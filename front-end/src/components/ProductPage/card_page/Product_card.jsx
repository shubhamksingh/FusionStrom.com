import { useState } from "react";
import BasicUsage from "../Model/ModalComponent";
// import ModalComponent from "../Model/ModalComponent";


const Product_card = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedBox, setSelectedBox] = useState({});
    console.log(props)


    const handleClick = (item) => {
        setIsModalVisible(true);
        setSelectedBox(item);
      };
  
    return (
        <>
      <div className='item_card' onClick={() => handleClick(props)}>
        <div className='img_div'>
          <img src={props.image} />
          {/* <div className='hid_box' >Quick View</div> */}
          <div className='hid_box'  onClick={() => handleClick(props)}>
          Quick View
            </div>
        </div>
        <div className='item_card_sub'>
          <div className='title_div'>
            <h4 className='new_markdown'>New Markdown</h4>
            <h4 className='product_name'>{props.name}</h4>
          </div>
          <div className='discription_div'>
            <p className='discription'>{props.description}</p>
          </div>
          <div className='price_info'>
            <p className='price'>INR {props.price}</p>
          </div>
          <div className='strike_price_div'>
            <p className='strike_price'>INR {props.strprice}</p>
            <p className='rating'>
              <span className='no_rating'>{props.rating}</span>
            </p>
          </div>
          <div className='last_div'>
            <p className='free_shiping'>★ ★ ★</p>
            {/* <button className='add_to_cart' >
              Add to Bag
            </button> */}
          </div>
        </div>
      </div>
      <BasicUsage
          data={selectedBox}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      
</>
    );
  };
  export default Product_card;