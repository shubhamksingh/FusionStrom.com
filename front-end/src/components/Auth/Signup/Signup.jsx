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
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const intialInput = {
    username: "",
    email: "",
    password: "",
  };
  const [user, Setuser] = useState(intialInput);

  const handleChange = (e) => {
    const { name, value } = e.target;
    Setuser({
      ...user,
      [name]: value,
    });
  };

  // <<<<<<<<<<<< SIGNUP FUNCTION >>>>>>>>>
  const handleSignup = async (e) => {
    e.preventDefault();
    const { username, email, password } = user;
    // console.log(username, email, password);
    try {
      if (username, password, email) {
        const { data } = await axios.post(
          "http://localhost:8080/api/auth/register",
          { username, email, password }
        );

        // console.log("data", data);
        if (data.message == "Email and Username already Exit") {
          toast({
            title: data.message,
            description: "We've not Signup your account",
            status: "error",
            position: "top",
            duration: 1000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            position: "top",
            duration: 1000,
            isClosable: true,
          });
          setTimeout(() => {
            navigate("/signin");
          }, 1000);
        }

      } else {
        toast({
          title: "Fill all details",
          status: "warning",
          position: "top",
          duration: 1000,
          isClosable: true,
        });
      }
    } catch (e) {
      console.log("error", e);
    }
    Setuser(intialInput);
  };

  return (
    <Center>
      <Box mt={"1.5rem"} w={"fit-content"}>
        <Stack>
          <Text fontSize="1.6rem">Create Account</Text>
          <Text fontSize="0.8rem">Check out faster</Text>
          <Text fontSize="0.8rem">Track orders easily</Text>
          <Text fontSize="0.8rem">Use one sign-in across our brands</Text>
        </Stack>

        <Box
          w={["300px", "400px", "500px"]}
          mt={5}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Text fontSize="0.8rem">Username*</Text>
          <Input
            style={{ border: "1px solid black" }}
            w={["300px", "300px", "400px"]}
            mb={5}
            type="text"
            placeholder="Username"
            name="username"
            value={user.username}
            onChange={handleChange}
          />

          <Text fontSize="0.8rem">Email*</Text>
          <Input
            style={{ border: "1px solid black" }}
            w={["300px", "300px", "400px"]}
            mb={5}
            type="email"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />

          <Text fontSize="0.8rem">Create password*</Text>
          <Input
            style={{ border: "1px solid black" }}
            w={["300px", "300px", "400px"]}
            mb={5}
            type="password"
            placeholder="Password"
            value={user.password}
            name="password"
            onChange={handleChange}
          />
        </Box>

        <Box mt={4}>
          <input type="checkbox" />
          <Text mb={2} fontSize="0.8rem">
            Keep me signed in
          </Text>
          <Text w={["300px", "300px", "400px"]} mb={2} fontSize="0.8rem">
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
        </Text>

        <Button
          bg={"black"}
          color={"white"}
          w={["300px", "300px", "400px"]}
          onClick={handleSignup}
        >
          Create Account
        </Button>
      </Box>
    </Center>
  );
};

export default Signup;
