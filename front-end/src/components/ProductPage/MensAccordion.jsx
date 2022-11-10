import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { IoMdAdd } from 'react-icons/io';
import { AiOutlineMinus } from 'react-icons/ai';
import { Link } from "react-router-dom";

const MensAccordion = () => {
  return (
    <div >
        <Accordion allowMultiple >
        <AccordionItem style={{borderTop:"0.5px solid #8c8c8c",borderBottom:"0.5px solid #8c8c8c"}}>
          {({ isExpanded }) => (
            <>
                <AccordionButton style={{border:"none",height:"50px",backgroundColor:"white"}} >
                  <Box flex="1" textAlign="left">
                   Size
                  </Box>
                  {isExpanded ? (
                    <AiOutlineMinus fontSize="25px" />
                  ) : (
                    <IoMdAdd fontSize="25px" />
                  )}
                </AccordionButton>
             
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem style={{borderTop:"0.5px solid #8c8c8c",borderBottom:"0.5px solid #8c8c8c"}}>
          {({ isExpanded }) => (
            <>
                <AccordionButton style={{border:"none",height:"50px",backgroundColor:"white"}} >
                  <Box flex="1" textAlign="left">
                   Color
                  </Box>
                  {isExpanded ? (
                    <AiOutlineMinus fontSize="25px" />
                  ) : (
                    <IoMdAdd fontSize="25px" />
                  )}
                </AccordionButton>
             
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem style={{borderTop:"0.5px solid #8c8c8c",borderBottom:"0.5px solid #8c8c8c"}}>
          {({ isExpanded }) => (
            <>
                <AccordionButton style={{border:"none",height:"50px",backgroundColor:"white"}} >
                  <Box flex="1" textAlign="left">
                   Brand
                  </Box>
                  {isExpanded ? (
                    <AiOutlineMinus fontSize="25px" />
                  ) : (
                    <IoMdAdd fontSize="25px" />
                  )}
                </AccordionButton>
             
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
       
        <AccordionItem style={{borderTop:"0.5px solid #8c8c8c",borderBottom:"0.5px solid #8c8c8c"}}>
          {({ isExpanded }) => (
            <>
                <AccordionButton style={{border:"none",height:"50px",backgroundColor:"white"}} >
                  <Box flex="1" textAlign="left">
                   Fit
                  </Box>
                  {isExpanded ? (
                    <AiOutlineMinus fontSize="25px" />
                  ) : (
                    <IoMdAdd fontSize="25px" />
                  )}
                </AccordionButton>
             
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem style={{borderTop:"0.5px solid #8c8c8c",borderBottom:"0.5px solid #8c8c8c"}}>
          {({ isExpanded }) => (
            <>
                <AccordionButton style={{border:"none",height:"50px",backgroundColor:"white"}} >
                  <Box flex="1" textAlign="left">
                   Material
                  </Box>
                  {isExpanded ? (
                    <AiOutlineMinus fontSize="25px" />
                  ) : (
                    <IoMdAdd fontSize="25px" />
                  )}
                </AccordionButton>
             
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem style={{borderTop:"0.5px solid #8c8c8c",borderBottom:"0.5px solid #8c8c8c"}}>
          {({ isExpanded }) => (
            <>
                <AccordionButton style={{border:"none",height:"50px",backgroundColor:"white"}} >
                  <Box flex="1" textAlign="left">
                   Price
                  </Box>
                  {isExpanded ? (
                    <AiOutlineMinus fontSize="25px" />
                  ) : (
                    <IoMdAdd fontSize="25px" />
                  )}
                </AccordionButton>
             
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem style={{borderTop:"0.5px solid #8c8c8c",borderBottom:"0.5px solid #8c8c8c"}}>
          {({ isExpanded }) => (
            <>
                <AccordionButton style={{border:"none",height:"50px",backgroundColor:"white"}} >
                  <Box flex="1" textAlign="left">
                   Sale
                  </Box>
                  {isExpanded ? (
                    <AiOutlineMinus fontSize="25px" />
                  ) : (
                    <IoMdAdd fontSize="25px" />
                  )}
                </AccordionButton>
             
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem style={{borderTop:"0.5px solid #8c8c8c",borderBottom:"0.5px solid #8c8c8c"}}>
          {({ isExpanded }) => (
            <>
                <AccordionButton style={{border:"none",height:"50px",backgroundColor:"white"}} >
                  <Box flex="1" textAlign="left">
                   Sleeve Length
                  </Box>
                  {isExpanded ? (
                    <AiOutlineMinus fontSize="25px" />
                  ) : (
                    <IoMdAdd fontSize="25px" />
                  )}
                </AccordionButton>
             
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem style={{borderTop:"0.5px solid #8c8c8c",borderBottom:"0.5px solid #8c8c8c"}}>
          {({ isExpanded }) => (
            <>
                <AccordionButton style={{border:"none",height:"50px",backgroundColor:"white"}} >
                  <Box flex="1" textAlign="left">
                   Sleeve Length
                  </Box>
                  {isExpanded ? (
                    <AiOutlineMinus fontSize="25px" />
                  ) : (
                    <IoMdAdd fontSize="25px" />
                  )}
                </AccordionButton>
             
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem style={{borderTop:"0.5px solid #8c8c8c",borderBottom:"0.5px solid #8c8c8c"}}>
          {({ isExpanded }) => (
            <>
                <AccordionButton style={{border:"none",height:"50px",backgroundColor:"white"}} >
                  <Box flex="1" textAlign="left">
                   Sport Team
                  </Box>
                  {isExpanded ? (
                    <AiOutlineMinus fontSize="25px" />
                  ) : (
                    <IoMdAdd fontSize="25px" />
                  )}
                </AccordionButton>
             
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem style={{borderTop:"0.5px solid #8c8c8c",borderBottom:"0.5px solid #8c8c8c"}}>
          {({ isExpanded }) => (
            <>
                <AccordionButton style={{border:"none",height:"50px",backgroundColor:"white"}} >
                  <Box flex="1" textAlign="left">
                   Style
                  </Box>
                  {isExpanded ? (
                    <AiOutlineMinus fontSize="25px" />
                  ) : (
                    <IoMdAdd fontSize="25px" />
                  )}
                </AccordionButton>
             
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>

        </Accordion>
     
      
    </div>
  );
};

export default MensAccordion;
