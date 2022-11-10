import React, { useState } from 'react'
import { Button, Flex, Text, Stack, Center, Input, Box } from '@chakra-ui/react'
import Style from "./Signin.module.css"

const Signin = () => {

    const [signin, Setsignin] = useState({
        email: ""
    })

    const handleChange = (e) => {
        Setsignin(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        Setsignin("")
    }

    return (

        <Center mt={"200px"} >
            <Stack direction={['column', 'column']} spacing='20px'>
                <Text fontSize='1.6rem'>Sign In | Create Account</Text>
                <Text fontSize='1rem'>Enter your email to get started.</Text>

                {/* <Text >Email</Text> */}

                <form onSubmit={handleSubmit} >

                    <Input w={"300px"} mb={5} type="email"
                        placeholder='enter email'
                        // value={email}
                        name='email'
                        onChange={handleChange}

                    />

                    <Text w={"300px"} mb={5} fontSize='1rem'>By tapping Next, you agree to our Privacy Policy and Terms & Conditions.</Text>
               
                    <Button bg={"black"} color={"white"} w={"300px"}>Next</Button>

                </form>

            </Stack>
        </Center>

    )
}

export default Signin