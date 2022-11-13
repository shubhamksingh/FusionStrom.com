import React from "react";
import "../ProductPage/product-page.css";

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'
import Hamberger from "./ProductHamberger/Hamberger";
import Mensbredcrum from "./Mensbredcrum";
import MensAccordion from "./MensAccordion";
import Mensitem from "./Mensitem";
import Womensitem from "./Womensitem";
import Womensbredcrum from "./bredcrum/Womensbredcrum";


const Womens = () => {
  return (
    <div className="mensmain">
      <div className="hamberger">
          <Hamberger/>

        </div>
      <br />
      <div className="crum1">
        <Womensbredcrum />
      </div>

      <div className="mensmain1">
        <div className="accordion">
          <MensAccordion />
        </div>
        {/* <div className="hamberger">
          <Hamberger/>

        </div> */}
        <div className="item">
          <Womensitem/>

        </div>
      </div>
    </div>
  )
}

export default Womens
