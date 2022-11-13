import React, { useState } from 'react'
import { Button, Flex, Text, Stack, Center, Input, Box, Link } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Signup = () => {
  const navigate = useNavigate()

  const [user, Setuser] = useState({
    first_name: "",
    last_name: "",
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

  const register=()=>{
    const {first_name,last_name,email,password} = user

    if(first_name && last_name && email && password ){
      axios.post("http://localhost:8080/signup", user)
      .then(res=>{
        // console(res)
        alert("Registation Successfull")
       navigate("/signin")
      }
        )
    }
    else{
      alert("Fill all inputs")
    }
  }



  return (
    <Center >

      <Box mt={"1.5rem"} w={"fit-content"} >

        <Stack>
          <Text fontSize='1.6rem'>Create Account</Text>
          <Text fontSize='0.8rem'>Check out faster</Text>
          <Text fontSize='0.8rem'>Track orders easily</Text>
          <Text fontSize='0.8rem'>Use one sign-in across our brands</Text>
        </Stack>


        <Box w={["300px", "400px", "500px"]} mt={5} style={{ display: "flex", flexDirection: "column" }}>

          <Text fontSize='0.8rem'>Email*</Text>
          <Input style={{ border: "1px solid black" }} w={["300px", "300px", "400px"]} mb={5} type="email"
            placeholder='Email'
            name='email'
            value={user.email}
            onChange={handleChange}
          />

          <Text fontSize='0.8rem'>First name*</Text>
          <Input style={{ border: "1px solid black" }} w={["300px", "300px", "400px"]} mb={5} type="text"
            placeholder='First name'
            name='first_name'
            value={user.first_name}
            onChange={handleChange}
          />


          <Text fontSize='0.8rem'>Last name*</Text>
          <Input style={{ border: "1px solid black" }} w={["300px", "300px", "400px"]} mb={5} type="text"
            placeholder='Last name'
            name='last_name'
            value={user.last_name}
            onChange={handleChange}
          />


          <Text fontSize='0.8rem'>Create password*</Text>
          <Input style={{ border: "1px solid black" }} w={["300px", "300px", "400px"]} mb={5} type="password"
            placeholder='Password'
            name='password'
            onChange={handleChange}
          />
        </Box>

        <Box mt={4}>
          <input type="checkbox" />
          <Text mb={2} fontSize='0.8rem'>Keep me signed in</Text>
          <Text w={["300px", "300px", "400px"]} mb={2} fontSize='0.8rem'>You won't need to sign in as often. Only do this if you're on your personal device. Just sign out if you change your mind.</Text>
        </Box>


        <Text w={["300px", "300px", "400px"]} mb={5} fontSize='0.8rem'>By tapping Next, you agree to our <Text as={"u"}><Link href=''>Privacy Policy </Link></Text> and <Text as={"u"}><Link href=''>Terms & Conditions.</Link></Text></Text>

        <Button bg={"black"} color={"white"} w={["300px", "300px", "400px"]} onClick={register}>Create Account</Button>


      </Box>
    </Center>
  )
}

export default Signup