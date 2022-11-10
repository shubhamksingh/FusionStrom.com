import { Center,Text,Input,Stack } from '@chakra-ui/react'

import React from 'react'

import { BiLockOpen } from 'react-icons/bi'

const Checkout = () => {

const handleChange=()=>{

    }

    return (

        <div>
            <BiLockOpen></BiLockOpen>
            <Text> Secure Checkout</Text>
            <p>powered by Borderfree</p>
            <p>Already have a Borderfree account? Click here.</p>

            <h3> 1 Delivery</h3>

            <form >

                <Stack direction={['column', 'column']} spacing='20px'>

                <Input type="email"
                    placeholder='Email'
                    name='email'
                    onChange={handleChange} />

                <Input type="text"
                    placeholder='First Name'
                    name='firstname'
                    onChange={handleChange} />

                <Input type="text"
                    placeholder='Email'
                    name='email'
                    onChange={handleChange} />

                <Input type="text"
                    placeholder='Email'
                    name='email'
                    onChange={handleChange} />

                <Input type="text"
                    placeholder='Email'
                    name='email'
                    onChange={handleChange} />

                <Input type="text"
                    placeholder='Email'
                    name='email'
                    onChange={handleChange} />

                <Input type="number"
                    placeholder='Email'
                    name='email'
                    onChange={handleChange} />

                <Input type="number"
                    placeholder='Email'
                    name='email'
                    onChange={handleChange} />

                <select name="location" onChange={handleChange} >
                    <option value="india">India</option>
                </select>

            </Stack>
            </form>

            <div>
                <div>
                    <table>
                        <thead></thead>

                        <tbody></tbody>
                    </table>
               
               <button>Continue</button>
                </div>
            </div>

            <h3> 2 Payment</h3>

        </div>

    )
}

export default Checkout