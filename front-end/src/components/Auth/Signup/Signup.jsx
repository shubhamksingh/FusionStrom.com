import React, { useState } from 'react'
import { Button, Flex, Text, Stack, Center, Input, Box } from '@chakra-ui/react'

const Signup = () => {

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

      <Center style={{ display:"flex",flexDirection:"column"}}>
        <Text fontSize='1.6rem'>Create Account</Text>
        <Text fontSize='1rem'>Check out faster</Text>
        <Text fontSize='1rem'>Track orders easily</Text>
        <Text fontSize='1rem'>Use one sign-in across our brands</Text>
        <Text fontSize='1rem'>Required</Text>

        <Text fontSize='1rem'>Email</Text>

        <Text fontSize='1rem'>First name*</Text>
        <Input w={"300px"} mb={5} type="email"
          placeholder='enter email'
          // value={email}
          name='email'
          onChange={handleChange}
        />


        <Text fontSize='1rem'>Last name*</Text>
        <Input w={"300px"} mb={5} type="email"
          placeholder='enter email'
          // value={email}
          name='email'
          onChange={handleChange}
        />


        <Text fontSize='1rem'>Create password*</Text>
        <Input w={"300px"} mb={5} type="email"
          placeholder='enter email'
          // value={email}
          name='email'
          onChange={handleChange}
        />

        <Box>
          <input type="checkbox" />
          <Text>Keep me signed in</Text>
          <Text>You won't need to sign in as often. Only do this if you're on your personal device. Just sign out if you change your mind.</Text>
        </Box>


        <Text w={"300px"} mb={5} fontSize='1rem'>By tapping Next, you agree to our Privacy Policy and Terms & Conditions.</Text>

        <Button bg={"black"} color={"white"} w={"300px"}>Craete Account</Button>


      </Center>

  )
}

export default Signup