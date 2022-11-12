import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Checkbox,
  } from "@chakra-ui/react";
  import { AddIcon, MinusIcon } from "@chakra-ui/icons";
  import { IoMdAdd } from "react-icons/io";
  import { AiOutlineMinus } from "react-icons/ai";
const Hamberger = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Button onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader fontSize={"30px"}>FusionStrom</DrawerHeader>
          <DrawerBody>

            {/* -------------------------------accordian------------------------------------------- */}
          <Accordion allowMultiple>
        <AccordionItem
          style={{
            borderTop: "0.1px solid #8c8c8c",
            borderBottom: "0.1px solid #8c8c8c",
          }}
        >
          {({ isExpanded }) => (
            <>
              <AccordionButton
                style={{
                  border: "none",
                  height: "50px",
                  backgroundColor: "white",
                }}
              >
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
                <div >
                  <input type="checkbox" />
                  {"   "}
                  <label>L</label>
                </div>
                <div>
                  <input type="checkbox" />
                  {"   "}
                  <label>M</label>
                </div>
                <div>
                  <input type="checkbox" />
                  {"   "}
                  <label>XL</label>
                </div>
                <div>
                  <input type="checkbox" />
                  {"   "}
                  <label>XXL</label>
                </div>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem
          style={{
            borderTop: "0.1px solid #8c8c8c",
            borderBottom: "0.1px solid #8c8c8c",
          }}
        >
          {({ isExpanded }) => (
            <>
              <AccordionButton
                style={{
                  border: "none",
                  height: "50px",
                  backgroundColor: "white",
                }}
              >
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
              <div>
                  <input type="checkbox" />
                  {"   "}
                  <label>Red</label>
                </div>
                <div>
                  <input type="checkbox" />
                  {"   "}
                  <label>White</label>
                </div>
                <div>
                  <input type="checkbox" />
                  {"   "}
                  <label>black</label>
                </div>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem
          style={{
            borderTop: "0.1px solid #8c8c8c",
            borderBottom: "0.1px solid #8c8c8c",
          }}
        >
          {({ isExpanded }) => (
            <>
              <AccordionButton
                style={{
                  border: "none",
                  height: "50px",
                  backgroundColor: "white",
                }}
              >
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
                <div>
                  <input type="checkbox" />
                  {"   "}
                  <label>Adidas</label>
                </div>
                <div>
                  <input type="checkbox" />
                  {"   "}
                  <label>Adidas Golf</label>
                </div>
                <div>
                  <input type="checkbox" />
                  {"   "}
                  <label>5000-7000</label>
                </div>
                <div>
                  <input type="checkbox" />
                  {"   "}
                  <label>7000-15000</label>
                </div>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>

        <AccordionItem
          style={{
            borderTop: "0.1px solid #8c8c8c",
            borderBottom: "0.1px solid #8c8c8c",
          }}
        >
          {({ isExpanded }) => (
            <>
              <AccordionButton
                style={{
                  border: "none",
                  height: "50px",
                  backgroundColor: "white",
                }}
              >
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
              <div>
                  <input type="checkbox" />
                  {"   "}
                  <label>Classic Fit</label>
                </div>
                <div>
                  <input type="checkbox" />
                  {"   "}
                  <label>Regular Fit</label>
                </div>
                <div>
                  <input type="checkbox" />
                  {"   "}
                  <label>Slim Fit</label>
                </div>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem
          style={{
            borderTop: "0.1px solid #8c8c8c",
            borderBottom: "0.1px solid #8c8c8c",
          }}
        >
          {({ isExpanded }) => (
            <>
              <AccordionButton
                style={{
                  border: "none",
                  height: "50px",
                  backgroundColor: "white",
                }}
              >
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
              <div>
                  <input type="checkbox" />
                  {"   "}
                  <label>100% Cotten</label>
                </div>
                <div>
                  <input type="checkbox" />
                  {"   "}
                  <label>100% Wool</label>
                </div>
                <div>
                  <input type="checkbox" />
                  {"   "}
                  <label>100% Linen</label>
                </div>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem
          style={{
            borderTop: "0.1px solid #8c8c8c",
            borderBottom: "0.1px solid #8c8c8c",
          }}
        >
          {({ isExpanded }) => (
            <>
              <AccordionButton
                style={{
                  border: "none",
                  height: "50px",
                  backgroundColor: "white",
                }}
              >
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
                <div>
                  <input
                    type="checkbox"
                    // checked={order === "asc"}
                    // onChange={(e) =>
                    //   setOrderBy(e.target.checked ? "asc" : "desc")
                    // }
                  />
                   {"   "}
                  <label>0-1000</label>
                </div>
                <div>
                  <input type="checkbox" />
                  {"   "}
                  <label>1000-5000</label>
                </div>
                <div>
                  <input type="checkbox" />
                  {"   "}
                  <label>5000-7000</label>
                </div>
                <div>
                  <input type="checkbox" />
                  {"   "}
                  <label>7000-15000</label>
                </div>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem
          style={{
            borderTop: "0.1px solid #8c8c8c",
            borderBottom: "0.1px solid #8c8c8c",
          }}
        >
          {({ isExpanded }) => (
            <>
              <AccordionButton
                style={{
                  border: "none",
                  height: "50px",
                  backgroundColor: "white",
                }}
              >
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
              <div>
                  <input type="checkbox" />
                  {"   "}
                  <label>Regular</label>
                </div>
                <div>
                  <input type="checkbox" />
                  {"   "}
                  <label>Sale</label>
                </div>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem
          style={{
            borderTop: "0.1px solid #8c8c8c",
            borderBottom: "0.1px solid #8c8c8c",
          }}
        >
          {({ isExpanded }) => (
            <>
              <AccordionButton
                style={{
                  border: "none",
                  height: "50px",
                  backgroundColor: "white",
                }}
              >
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
              <div>
                  <input type="checkbox" />
                  {"   "}
                  <label>Sleev less</label>
                </div>
                <div>
                  <input type="checkbox" />
                  {"   "}
                  <label>Sort</label>
                </div>
                <div>
                  <input type="checkbox" />
                  {"   "}
                  <label>Long</label>
                </div>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem
          style={{
            borderTop: "0.1px solid #8c8c8c",
            borderBottom: "0.1px solid #8c8c8c",
          }}
        >
          {({ isExpanded }) => (
            <>
              <AccordionButton
                style={{
                  border: "none",
                  height: "50px",
                  backgroundColor: "white",
                }}
              >
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
              <div>
                  <input type="checkbox" />
                  {"   "}
                  <label>Coolage</label>
                </div>
                <div>
                  <input type="checkbox" />
                  {"   "}
                  <label>Golf</label>
                </div>
                <div>
                  <input type="checkbox" />
                  {"   "}
                  <label>NBA</label>
                </div>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem
          style={{
            borderTop: "0.1px solid #8c8c8c",
            borderBottom: "0.1px solid #8c8c8c",
          }}
        >
          {({ isExpanded }) => (
            <>
              <AccordionButton
                style={{
                  border: "none",
                  height: "50px",
                  backgroundColor: "white",
                }}
              >
                <Box flex="1" textAlign="left">
                  Sport Lague
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
        <AccordionItem
          style={{
            borderTop: "0.1px solid #8c8c8c",
            borderBottom: "0.1px solid #8c8c8c",
          }}
        >
          {({ isExpanded }) => (
            <>
              <AccordionButton
                style={{
                  border: "none",
                  height: "50px",
                  backgroundColor: "white",
                }}
              >
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

     
       
        


        {/* -----------------------------------Accordion end------------------------------- */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Hamberger;
