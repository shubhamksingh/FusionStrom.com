import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Flex,
  Box,
  Img,
  Text,
  Select,
} from "@chakra-ui/react";

export default function BasicUsage({
  isModalVisible,
  setIsModalVisible,
  data,
}) {
  const onClose = () => {
    setIsModalVisible(false);
  };
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal isOpen={isModalVisible} onClose={onClose} size={"xl"} >
        <ModalOverlay />
        <ModalContent
          style={{
            // border: "1px solid red",
            width: "80%",
            height: "500px",
            backgroundColor: "white",
            margin: "auto",
            padding: "10px",
            marginTop: "70px",
          }}
        >
          <ModalHeader></ModalHeader>
          <ModalCloseButton  />
          <ModalBody>
            {/* <Lorem count={2} /> */}
            {/* <h1>
             {data.name}
            </h1> */}

            <Box
              w="100%"
              style={{
                // border: "1px solid red",
                height: "350px",
                display: "flex",
              }}
            >
              <Box
                style={{
                  // border: "1px solid green",
                  height: "350px",
                  width: "50%",
                }}
              >
                <Img src={data.image} height="100%" width="100%" />
              </Box>
              <Box
                style={{
                  // border: "1px solid green",
                  height: "350px",
                  width: "50%",
                }}
              >
                <Text fontSize={"20px"} fontFamily="inherit">
                  {data.name}
                </Text>
                <Text fontSize={"20px"} fontFamily="inherit" color={"red"}>
                  INR {data.price}
                </Text>
               <Text fontSize={"20px"} textDecoration="line-through">INR {data.strprice}</Text>
               <Text  color={"red"} >Limited-Time Sale</Text>
               <Text fontSize={"10px"} color={"black"}>{data.description}</Text>
               <br/>
               <Select placeholder='Size'>
                <option value='option1'>Small</option>
                <option value='option2'>Medium</option>
                <option value='option3'>Large</option>
              </Select>
              <br/>
              <br/>
             <button style={{backgroundColor:"black",color:"white",width:"100%",height:"50px"}}> Add to Beg</button>



              </Box>
            </Box>
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button> */}
            {/* <Button variant="ghost">Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
