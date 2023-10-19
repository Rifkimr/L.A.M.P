"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Image,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import image1 from "../../../assets/students.png";
import { Link } from "react-router-dom";

export default function RegisterSd() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"xl"} py={5} px={4}>
          <Stack align={"center"} color={"#192C33"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up for new account
            </Heading>
            <Flex
              mt={"10px"}
              borderRadius={"full"}
              w={"50px"}
              h={"50px"}
              bg={"#192C33"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image src={image1} w={"300px"} />
            </Flex>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
            width={"400px"}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Name</FormLabel>
                <Input
                  type="email"
                  borderColor={"#192C33"}
                  borderRadius={"full"}
                />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  borderColor={"#192C33"}
                  borderRadius={"full"}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    borderRadius={"full"}
                    borderColor={"#192C33"}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      size={"sm"}
                      borderRadius={"full"}
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={3} mt={"15px"}>
                <Button
                  borderRadius={"full"}
                  bg={"#1BB4AD"}
                  color={"white"}
                  _hover={{
                    color: "#192C33",
                    bg: "yellow.500",
                    transition: "background-color .5s, color .5s",
                  }}
                >
                  Sign up
                </Button>
                <Center>
                  <Flex color={"#192C33"} flexDirection={"row"} gap={2}>
                    <Text>Have Already an Account?</Text>
                    <Link to={"/login/student"}>
                      <Text color={"#1BB4AD"}>Login</Text>
                    </Link>
                  </Flex>
                </Center>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
