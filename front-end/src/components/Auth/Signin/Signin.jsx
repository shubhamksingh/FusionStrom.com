import React, { useState } from 'react'
import { Button, Flex, Text, Stack, Center, Input, Box, Link } from '@chakra-ui/react'

import { useNavigate } from "react-router-dom"

const Signin = () => {
    const navigate = useNavigate()

    const [user, Setuser] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        Setuser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        Setuser("")
        alert("Login successfully")
        navigate("/profile")
    }

    return (
        <Center>
            <Box mt={"8rem"}  >
                <Stack>
                    <Text fontSize='1.6rem'>Sign In</Text>
                    <Text fontSize='0.8rem'>New to Nordstrom? <Text as={"u"}><Link href='/signup'>Create an account.</Link></Text></Text>
                </Stack>
                <br />

                <Box style={{ display: "flex", flexDirection: "column", width: "fit-content" }}>

                    <Text fontSize='0.8rem'>Email*</Text>
                    <Input style={{ border: "1px solid black" }} w={"400px"} mb={5} type="email"
                        placeholder='Email'
                        value={user.email}
                        name='email'
                        onChange={handleChange}
                    />
                    <Text fontSize='0.8rem'>Password*</Text>
                    <Input style={{ border: "1px solid black" }} w={"400px"} mb={5} border={" 1px solid black"}
                        type="password"
                        placeholder='Password'
                        value={user.password}
                        name='password'
                        onChange={handleChange}
                    />
                    <Text w={"400px"} mb={5} fontSize='0.8rem'><Text as={"u"}><Link href=''>Forgot password?</Link></Text></Text>
                </Box>

                <Box bg={"#eaeaea"} padding={"0.2rem"} boxSize={"border-box"} mb={4}>
                    <input type="checkbox" size={"50px"} />
                    <Text fontSize='0.8rem' w={"400px"} mb={2}>Keep me signed in</Text>

                    <Text fontSize='0.8rem' w={"400px"}>You won't need to sign in as often. Only do this if you're on your personal device. Just sign out if you change your mind.</Text>
                </Box>
                <Text w={"400px"} mb={5} fontSize='0.8rem'>By tapping Next, you agree to our <Text as={"u"}><Link href=''>Privacy Policy </Link></Text> and <Text as={"u"}><Link href=''>Terms & Conditions.</Link></Text>.</Text>

                <Button bg={"black"} color={"white"} w={"400px"} onClick={handleSubmit}>Sign In</Button>

            </Box>
        </Center>

    )
}

export default Signin