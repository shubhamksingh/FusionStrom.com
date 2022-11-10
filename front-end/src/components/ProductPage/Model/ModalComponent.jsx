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
} from "@chakra-ui/react";

export default function BasicUsage({isModalVisible,
    setIsModalVisible,
    data}) {

        const onClose = () => {
            setIsModalVisible(false);
          };
//   const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal  isOpen={isModalVisible} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          style={{
            border: "1px solid red",
            width: "60%",
            height: "500px",
            backgroundColor: "white",
            margin: "auto",
            padding:"10px",
            marginTop:"70px"

          }}
        >
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton style={{width:"25px",display:"flex",}} />
          <ModalBody>
            {/* <Lorem count={2} /> */}
            {/* <h1>
             {data.name}
            </h1> */}
            
                <Box w='100%' style={{border:"1px solid red",height:"430px",display:"flex"}}>
                  
                    <Box style={{border:"1px solid green",height:"430px",width:"50%"}}>
                        <Img src={data.image} height="100%"width="100%"/>
                    </Box>
                    <Box style={{border:"1px solid green",height:"430px",width:"50%"}}>
                        <Text fontSize={"25px"} fontFamily="inherit">{data.name}</Text>
                        <Text fontSize={"25px"} fontFamily="inherit" color={"red"}>INR {data.price}</Text>
                    </Box>
                   


                </Box>

           
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
