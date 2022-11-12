import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductView from "../../ProductView/ProductView";
import BasicUsage from "../Model/ModalComponent";
// import ModalComponent from "../Model/ModalComponent";


const Product_card = (props) => {
  const Navigate=useNavigate()
    const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedBox, setSelectedBox] = useState({});
    console.log(props)


    const handleClick = (item) => {
      setTimeout(()=>{
        setIsModalVisible(true);
        setSelectedBox(item);

      },500)
        
      };
      // const handleClick1=(item)=>{
      //   setSelectedBox(item);
      //   Navigate("products/:id")

      // }
  
    return (
        <>
      <div className='item_card'  >
      
        <div className='img_div'>
        <Link to={`products/${props.id}` } className='img_div'>
          <img src={props.image} />
          {/* <div className='hid_box' >Quick View</div> */}
          </Link>
          {/* onMouseOver */}
          <div className='hid_box'  onClick={() => handleClick(props)}>
          Quick View
            </div>
        </div>
       
        <div className='item_card_sub'>
          <div className='title_div'>
           
            <h4 className='new_markdown'>New</h4>

            <h4 className='product_name'>{props.name}</h4>
          </div>
          <div className='discription_div'>
            <p className='discription'>{props.description}</p>
          </div>
          <div className='price_info'>
            <p className='price'>INR {Math.ceil(props.strprice-0.2*props.strprice)}</p>
          </div>
          <div className='strike_price_div'>
            <p className='strike_price'>INR {props.strprice}</p>
            <p className='rating'>
              <span className='no_rating'>{props.rating}</span>
            </p>
          </div>
          
          <div className='last_div'>
            <p className='free_shiping'>{props.id%2==0?"★ ★":"★ ★ ★"}</p>
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