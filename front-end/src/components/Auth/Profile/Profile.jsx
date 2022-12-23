import { Box, Text, Image, Button, Center, Stack, Link } from '@chakra-ui/react'
import React from 'react'
import nody1 from "../Profile/nody1.png"
import nody from "../Profile/nody.png"
import { useNavigate } from 'react-router-dom'


const Profile = () => {
    const userInfo =JSON.parse(localStorage.getItem("user_info"))
    // console.log(userInfo);

    const navigate = useNavigate()

    const handleshop = () => {
        navigate("/")
    }
    return (

        <Center mt={"8rem"} mb={"5rem"} >

            <Box  style={{ display: "flex", flexDirection: "column", width: "fit-content" }}>
                <Center>
                <Stack>
                    <Text fontSize='1.6rem' >Welcome! {userInfo? <span style={{color:"red"}}>{userInfo.user.username}</span>:null} </Text>
                    <Text fontSize='0.8rem'>Use your new account to shop at:</Text>

                    <Image src={nody1} alt="logo"  w ={"300px"}  />
                    {/* <Center> */}
                    <Button bg={"white"} fontSize='0.8rem' color={"Black"}  w={"300px"} style={{ border: "1px solid black" }} onClick={handleshop}> Shop Now</Button>
                    {/* </Center> */}
                    <Image  w={"300px"} src={nody} alt="logo" style={{marginTop:"2rem"}}  />
                </Stack>
                </Center>
            </Box>
        </Center>
    
    )
}

export default Profile