import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
  InputGroup,
  Center,
  InputRightElement,
} from "@chakra-ui/react";

import image2 from "../../../assets/teacher.png";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../../hooks/loginHooks";

export default function LoginTc() {
  const [showPassword, setShowPassword] = useState(false);
  const { handleLogin, handChange } = useLogin();
  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"}>
          <Stack align={"center"} color={"#192C33"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Flex
              mt={"15px"}
              borderRadius={"full"}
              w={"70px"}
              h={"70px"}
              bg={"#192C33"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image src={image2} w={"300px"} />
            </Flex>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  name="email"
                  onChange={handChange}
                  type="email"
                  borderColor={"#192C33"}
                  borderRadius={"full"}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    name="password"
                    onChange={handChange}
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
              <Stack spacing={6}>
                {/* <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Text color={"blue.400"}>Forgot password?</Text>
                </Stack> */}
                <Button
                  onClick={handleLogin}
                  mt={"7px"}
                  borderRadius={"full"}
                  bg={"#192C33"}
                  color={"white"}
                  _hover={{
                    color: "#192C33",
                    bg: "yellow.500",
                    transition: "background-color .5s, color .5s",
                  }}
                >
                  Sign in
                </Button>
                <Center>
                  <Flex color={"#192C33"} flexDirection={"row"} gap={2}>
                    <Text>Don't Have an Account?</Text>
                    <Link to={"/register/teacher"}>
                      <Text color={"yellow.500"}>Register</Text>
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
