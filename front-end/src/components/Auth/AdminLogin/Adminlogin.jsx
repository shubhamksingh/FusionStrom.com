import React, { useState } from 'react'
import { Button, Flex, Text, Stack, Center, Input, Box, Link } from '@chakra-ui/react'

import { useNavigate } from "react-router-dom"

const Adminlogin = () => {
    const navigate = useNavigate()

    const [admin, Setadmin] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        Setadmin({
            ...admin,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        Setadmin("")
        alert("Login successfully")
        navigate("/profile")
    }

    return (
        <Center >
            <Box mt={"1.5rem"} w={"fit-content"}  >
                <Center>
                    <Text fontSize='1.6rem'>Admin LogIn</Text>

                </Center>
                <br />

                <Box w={["300px", "400px", "500px"]} style={{ display: "flex", flexDirection: "column", width: "fit-content" }}>

                    <Text fontSize='0.8rem'>Email*</Text>
                    <Input style={{ border: "1px solid black" }} w={["300px", "300px", "400px"]} mb={5} type="email"
                        placeholder='Email'
                        value={admin.email}
                        name='email'
                        onChange={handleChange}
                    />
                    <Text fontSize='0.8rem'>Password*</Text>
                    <Input style={{ border: "1px solid black" }} w={["300px", "300px", "400px"]} mb={5} border={" 1px solid black"}
                        type="password"
                        placeholder='Password'
                        value={admin.password}
                        name='password'
                        onChange={handleChange}
                    />
                    <Text w={["300px", "300px", "400px"]} mb={5} fontSize='0.8rem'><Text as={"u"}><Link href=''>Forgot password?</Link></Text></Text>
                </Box>

                <Box bg={"#eaeaea"} padding={"0.2rem"} w={["300px", "300px", "400px"]} mb={4}>
                    <input type="checkbox" size={"50px"} />
                    <Text fontSize='0.8rem' w={["300px", "200px", "400px"]} mb={2}>Keep me signed in</Text>

                </Box>


                <Button bg={"black"} color={"white"} w={["300px", "300px", "400px"]} onClick={handleSubmit}>LogIn</Button>

            </Box>
        </Center>

    )
}

export default Adminlogin