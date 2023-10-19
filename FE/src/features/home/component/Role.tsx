import { Flex, Image, Text } from "@chakra-ui/react";
import image1 from "../../../assets/students.png";
import image2 from "../../../assets/teacher.png";
import { Link } from "react-router-dom";

export default function Role() {
  return (
    <>
      <Flex flexDirection={"row"}>
        <Link to={"/login/teacher"} style={{ width: "50%" }}>
          <Flex
            _hover={{
              backgroundColor: "yellow.500",
              color: "#192C33",
              transition: "background-color .5s, color .5s",
              cursor: "pointer",
            }}
            bg={"#192C33"}
            h={"100vh"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            color={"white"}
          >
            <Text
              fontFamily={"monospace"}
              fontWeight={"bold"}
              fontSize={"3xl"}
              mb={"20px"}
            >
              Are You Teacher?
            </Text>
            <Flex
              borderRadius={"full"}
              w={"250px"}
              h={"250px"}
              bg={"#1BB4AD"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image src={image2} w={"300px"} />
            </Flex>
            <Text
              fontFamily={"monospace"}
              fontWeight={"bold"}
              fontSize={"3xl"}
              mt={"20px"}
            >
              Yes I'm Teacher?
            </Text>
          </Flex>
        </Link>
        <Link to={"/login/student"} style={{ width: "50%" }}>
          <Flex
            _hover={{
              backgroundColor: "yellow.500",
              color: "#192C33",
              transition: "background-color .5s, color .5s",
              cursor: "pointer",
            }}
            bg={"#1BB4AD"}
            h={"100vh"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            color={"#192C33"}
          >
            <Text
              fontFamily={"monospace"}
              fontWeight={"bold"}
              fontSize={"3xl"}
              mb={"20px"}
            >
              Or Student?
            </Text>
            <Flex
              borderRadius={"full"}
              w={"250px"}
              h={"250px"}
              bg={"#192C33"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image src={image1} w={"225px"} />
            </Flex>
            <Text
              fontFamily={"monospace"}
              fontWeight={"bold"}
              fontSize={"3xl"}
              mt={"20px"}
            >
              Yes I'm Student?
            </Text>
          </Flex>
        </Link>
      </Flex>
    </>
  );
}
