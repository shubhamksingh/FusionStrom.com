import React, { useState } from "react";
import {
  Button,
  Flex,
  Text,
  Stack,
  Center,
  Input,
  Box,
  useToast,
} from "@chakra-ui/react";
import { useNavigate, useHistory } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const initalInput = {
    email: "",
    password: "",
  };
  const [user, Setuser] = useState(initalInput);

  const handleChange = (e) => {
    const { name, value } = e.target;
    Setuser({
      ...user,
      [name]: value,
    });
  };

  // <<<<<<<<<<< LOGIN FUNCTION >>>>>>>>>>>>>
  const handlelogin = async (e) => {
    e.preventDefault();
    const { email, password } = user;

    if(!email ||!password){
      toast({
        title: "Fill all inputs",
        description: "We've not Login your account",
        status: "error",
        position: "top",
        duration: 1000,
        isClosable: true,
      });
    }
else{
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          email,
          password,
        }
      );
      // console.log("data", data);
      if (data === "User Unauthorired") {
        toast({
          title: "User Unauthorired",
          description: "We've not Login your account",
          status: "error",
          position: "top",
          duration: 1000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Login Success",
          description: "We've Login your account",
          status: "success",
          position: "top",
          duration: 1000,
          isClosable: true,
        });

        // SET DATA IN LOCAL STORAGE
        
        setTimeout(() => {
          navigate("/profile");
        }, 1000);
      }
      // console.log("data", data);
      localStorage.setItem("user_info", JSON.stringify(data));
    } catch (e) {
      console.log("error", e);
    }
    Setuser(initalInput);
  }
  };


  return (
    <Center>
      <Box mt={"1.5rem"} w={"fit-content"}>
        <Stack>
          <Text fontSize="1.6rem">Sign In</Text>
          <Text fontSize="0.8rem">
            New to Nordstrom?{" "}
            <Text as={"u"}>
              <Link to="/signup">Create an account.</Link>
            </Text>
          </Text>
        </Stack>
        <br />

        <Box
          w={["300px", "400px", "500px"]}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Text fontSize="0.8rem">Email*</Text>
          <Input
            style={{ border: "1px solid black" }}
            w={["300px", "300px", "400px"]}
            mb={5}
            type="email"
            placeholder="Email"
            value={user.email}
            name="email"
            onChange={handleChange}
          />
          <Text fontSize="0.8rem">Password*</Text>
          <Input
            style={{ border: "1px solid black" }}
            w={["300px", "300px", "400px"]}
            mb={5}
            border={" 1px solid black"}
            type="password"
            placeholder="Password"
            value={user.password}
            name="password"
            onChange={handleChange}
          />
          <Text w={["300px", "300px", "400px"]} mb={5} fontSize="0.8rem">
            <Text as={"u"}>
              <Link href="">Forgot password?</Link>
            </Text>
          </Text>
        </Box>

        <Box
          bg={"#eaeaea"}
          padding={"0.2rem"}
          w={["300px", "300px", "400px"]}
          mb={4}
        >
          <input type="checkbox" size={"50px"} />
          <Text fontSize="0.8rem" w={["300px", "300px", "400px"]} mb={2}>
            Keep me signed in
          </Text>

          <Text fontSize="0.8rem" w={["300px", "300px", "400px"]}>
            You won't need to sign in as often. Only do this if you're on your
            personal device. Just sign out if you change your mind.
          </Text>
        </Box>
        <Text w={["300px", "300px", "400px"]} mb={5} fontSize="0.8rem">
          By tapping Next, you agree to our{" "}
          <Text as={"u"}>
            <Link href="">Privacy Policy </Link>
          </Text>{" "}
          and{" "}
          <Text as={"u"}>
            <Link href="">Terms & Conditions.</Link>
          </Text>
          .
        </Text>

        <Button
          bg={"black"}
          color={"white"}
          w={["300px", "300px", "400px"]}
          onClick={handlelogin}
        >
          Sign In
        </Button>
      </Box>
    </Center>
  );
};

export default Signin;
