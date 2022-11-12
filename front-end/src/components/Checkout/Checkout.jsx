import { Center, Text, Input, Stack, Box, Select, Flex, Link, Image, Button } from '@chakra-ui/react'

import React from 'react'
import { BiLockOpen } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import logo from "../Checkout/checkout_pic.png"

const Checkout = () => {
    const navigate = useNavigate()

    const handleCheckout = () => {
        navigate("/payment")
    }

    const handleChange = () => {

    }

    return (

        <Box ml={"10rem"} w={"fit-content"} mt={"8rem"}>

            <Stack spacing={"1.5rem"} mb={"1rem"}>

                <Flex gap={"0.5rem"}>
                    <BiLockOpen size={"2rem"}></BiLockOpen>
                    <hr />
                    <Text fontSize='1.6rem'>Secure Checkout</Text>
                    <Center>
                        <Text fontSize='0.8rem'> powered by Borderfree</Text>
                    </Center>
                    <select name="" id="" >
                        <option value="">English</option>
                    </select>
                    <hr />
                </Flex>

                <Text>Already have a Borderfree account? Click <Text as={"u"}><Link href=''>here.</Link></Text></Text>

                <Flex gap={"1rem"} >
                    <Text style={{ "backgroundColor": "black", "borderRadius": "50%", "height": "20px", "width": "20px", color: "white" }}>
                        <Center>1</Center>

                    </Text>
                    <Center>
                        <Text fontSize='1.2rem'>Delivery</Text>
                    </Center>
                </Flex>

            </Stack>

            <form >

                <Stack direction={['column', 'column']} spacing='20px' mb={"1rem"}>

                    <Input style={{ border: "1px solid black" }} w={"610px"}
                        type="email"
                        placeholder='Email'
                        name='email'
                        onChange={handleChange} />

                    <Box style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>

                        <Input style={{ border: "1px solid black" }} w={"300px"}
                            type="text"
                            placeholder='First Name'
                            name='first_name'
                            onChange={handleChange} />

                        <Input style={{ border: "1px solid black" }} w={"300px"}
                            type="text"
                            placeholder='Last name'
                            name='last_name'
                            onChange={handleChange} />
                    </Box>

                    <Input style={{ border: "1px solid black" }} w={"610px"}
                        type="text"
                        placeholder='Address'
                        name='address'
                        onChange={handleChange} />

                    <Box style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>

                        <Input style={{ border: "1px solid black" }} w={"300px"}
                            type="text"
                            placeholder='Address 2 (Optional)'
                            name='address_2'
                            onChange={handleChange} />

                        <Input style={{ border: "1px solid black" }} w={"300px"}
                            type="number"
                            placeholder='Postal code'
                            name='postal_code'
                            onChange={handleChange} />
                    </Box>

                    <Box style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
                        <Input style={{ border: "1px solid black" }} w={"300px"}
                            type="text"
                            placeholder='City'
                            name='city'
                            onChange={handleChange} />


                        <Input style={{ border: "1px solid black" }} w={"300px"}
                            type="text"
                            placeholder='Region (Optional)'
                            name='region'
                            onChange={handleChange} />
                    </Box>

                    <Box style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
                        <Input style={{ border: "1px solid black" }} w={"300px"}
                            type="number"
                            placeholder='Phone'
                            name='phone'
                            onChange={handleChange} />

                        <Select style={{ border: "1px solid black" }}
                            name="location" onChange={handleChange} w={"300px"}>
                            <option value="india">India</option>
                            <option value="india">India</option>
                            <option value="india">India</option>
                        </Select>
                    </Box>

                </Stack>

            </form>

            <Image src={logo} alt="logo" w={"620px"} />
<Center>
            <Button bg={"black"} color={"white"} w={"400px"} onClick={handleCheckout}>Continue</Button>
            </Center>
            {/* <div>
                <div>
                    <table>
                        <thead></thead>

                        <tbody></tbody>
                    </table>
               
               <button>Continue</button>
                </div>
            </div>

            <h3> 2 Payment</h3> */}

        </Box>

    )
}

export default Checkout