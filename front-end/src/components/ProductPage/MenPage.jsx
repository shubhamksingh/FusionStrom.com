import React from "react";
import "../ProductPage/product-page.css";
import MensAccordion from "./MensAccordion";
import Mensbredcrum from "./Mensbredcrum";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'
const MenPage = () => {
  return (
    <div className="mensmain">
      <br />
      <div className="crum1">
        <Mensbredcrum />
      </div>

      <div className="mensmain1">
        <div className="accordion">
          <MensAccordion />
        </div>
        <div className="item"></div>
      </div>
    </div>
   
  );
};

export default MenPage;