"use client";

import {
  Box,
  Button,
  Text,
  Image,
  Grid,
  GridItem,
  Avatar,
  Flex,
  Card,
  Link,
  AspectRatio,
  CardBody,
  CardHeader,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import logo from "../../../assets/logo/lamp-logo.png";
import {
  GoHomeFill,
  GoVideo,
  GoCommentDiscussion,
  GoCopilot,
} from "react-icons/go";

export function DasboardTeacher() {
  const [currentCard, setCurrentCard] = useState(0);

  const nextCard = () => {
    setCurrentCard((prevCard) =>
      prevCard === cardData.length - 1 ? 0 : prevCard + 1
    );
  };

  const prevCard = () => {
    setCurrentCard((prevCard) =>
      prevCard === 0 ? cardData.length - 1 : prevCard - 1
    );
  };

  const cardData = [
    {
      image: "https://www.youtube.com/embed/KDrolNtl1vI?si=RVYSvYdNCHUDt5ZR",
      title: "Judul Artikel 1",
      description: "Ini adalah description Moduls Lorem ipsum dolor sit amet",
    },
    {
      image: "https://www.youtube.com/embed/KDrolNtl1vI?si=RVYSvYdNCHUDt5ZR",
      title: "Judul Artikel 2",
      description: "Ini adalah description Moduls Lorem ipsum dolor sit amet",
    },
    {
      image: "https://www.youtube.com/embed/KDrolNtl1vI?si=RVYSvYdNCHUDt5ZR",
      title: "Judul Artikel 3",
      description: "Ini adalah description Moduls Lorem ipsum dolor sit amet",
    },
    {
      image: "https://www.youtube.com/embed/KDrolNtl1vI?si=RVYSvYdNCHUDt5ZR",
      title: "Judul Artikel 4",
      description: "Ini adalah description Moduls Lorem ipsum dolor sit amet",
    },
    {
      image: "https://www.youtube.com/embed/KDrolNtl1vI?si=RVYSvYdNCHUDt5ZR",
      title: "Judul Artikel 5",
      description: "Ini adalah description Moduls Lorem ipsum dolor sit amet",
    },
    {
      image: "https://www.youtube.com/embed/KDrolNtl1vI?si=RVYSvYdNCHUDt5ZR",
      title: "Judul Artikel 6",
      description: "Ini adalah description Moduls Lorem ipsum dolor sit amet",
    },
  ];

  const visibleCards = cardData.slice(currentCard, currentCard + 3);
  const isLastCard = currentCard === cardData.length - 1;

  const [message, setMessage] = useState(
    "Education about sex is not just about biology; it's about empowering individuals with knowledge and understanding to make informed choices, foster healthy relationships, and promote overall well-being. Embrace the opportunity to learn about this important aspect of life, as it equips you with the tools to navigate the complexities of human relationships and sexuality with confidence and responsibility."
  );
  const [position, setPosition] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage((prevMessage) => {
        const nextMessage = prevMessage.slice(1) + prevMessage.charAt(0);
        return nextMessage;
      });

      setPosition((prevPosition) =>
        prevPosition === 0 ? 100 : prevPosition - 1
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Grid
        m={3}
        h="100vh"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={2}
      >
        <GridItem
          pos={"fixed"}
          w={"230px"}
          rowSpan={2}
          colSpan={1}
          borderRight={"2px solid grey"}
        >
          <Box w={"100%"} h="90px">
            <Image alignItems={"center"} w={"180px"} m={4} src={logo} />
          </Box>
          <Text ms={5} my={4} fontWeight={"semibold"} color={"black"}>
            MAIN MENU
          </Text>
          <Box
            p={5}
            display={"flex"}
            flexDirection={"column"}
            gap={5}
            h="300px"
          >
            <Button
              colorScheme="none"
              gap={3}
              fontSize={"larger"}
              fontWeight={"semibold"}
              color={"black"}
              display="flex"
              alignItems="center"
              textAlign="left"
              _hover={{ bg: "gray.200" }}
            >
              <GoHomeFill />
              Dashboard
            </Button>

            <Button
              colorScheme="none"
              gap={3}
              fontSize={"larger"}
              fontWeight={"semibold"}
              color={"black"}
              display="flex"
              alignItems="center"
              textAlign="left"
            >
              <GoVideo />
              My Course
            </Button>

            <Button
              colorScheme="none"
              gap={3}
              fontSize={"larger"}
              fontWeight={"semibold"}
              color={"black"}
              display="flex"
              alignItems="center"
              textAlign="left"
            >
              <GoCommentDiscussion />
              Questions
            </Button>

            <Button
              colorScheme="none"
              gap={3}
              fontSize={"larger"}
              fontWeight={"semibold"}
              color={"black"}
              display="flex"
              alignItems="center"
              textAlign="left"
            >
              <GoCopilot />
              For you ...
            </Button>
          </Box>
        </GridItem>
        <GridItem
          zIndex="999"
          bg="white"
          pos={"fixed"}
          w={"1050px"}
          ms="250px"
          h={"90px"}
          rowSpan={1}
          colSpan={4}
        >
          <Flex justify="end" align="center" h="100%" gap={1}>
            <Flex gap="2" justifyContent="center" alignItems="center">
              <Text
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
              >
                Hello User |
              </Text>
              <Avatar
                me={4}
                size="lg"
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
              />
            </Flex>
          </Flex>
        </GridItem>
        <GridItem mt="70px" ms="250px" h={"100vh"} colSpan={4} w={"100%"}>
          <Text my={5} fontWeight={"extrabold"} fontSize={"4xl"}>
            Rekomendasi Materi
          </Text>
          <Box
            display={"flex"}
            w={"100%"}
            gap={3}
            justifyContent={"center"}
            color={"blackAlpha.100"}
            boxShadow={"md"}
            objectFit={"cover"}
            bgRepeat={"no-repeat"}
            h="50vh"
            p={"5"}
            borderRadius={"20px"}
            // bgImage={
            //   "https://drive.google.com/uc?export=view&id=1ZgCm9levYnenwJ-COQgiiqZ8PEQksait"
            // }
          >
            <Flex
              px={"7"}
              position={"relative"}
              width={"85%"}
              justifyContent={"space-between"}
              gap={"4"}
            >
              <Button
                position="absolute"
                left="0"
                top="50%"
                transform="translateY(-50%)"
                onClick={prevCard}
                bg="transparent"
                _hover={{ bg: "transparent" }}
              >
                &#10094;
              </Button>

              <Box display="flex" width="100%" overflow="hidden">
                {visibleCards.map((card, index) => (
                  <Card
                    key={index}
                    maxW="500px"
                    maxH="500px"
                    position={"relative"}
                    borderRadius={"15px"}
                    mr={index === visibleCards.length - 1 ? "0" : "20px"} // Jarak antar kartu
                  >
                    <AspectRatio
                      ratio={1}
                      borderRadius="10px"
                      overflow="hidden"
                    >
                      <iframe
                        width="560"
                        height="215"
                        src={card.image}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </AspectRatio>
                    <Box p={3} top={"270px"} w="100%">
                      <Link>
                        <Text color={"black"} fontWeight={"semibold"}>
                          {card.title}
                        </Text>
                      </Link>
                      <Text color={"black"}>{card.description}</Text>
                    </Box>
                  </Card>
                ))}
              </Box>
              <Button
                position="absolute"
                right="0"
                top="50%"
                transform="translateY(-50%)"
                onClick={nextCard}
                bg="transparent"
                _hover={{ bg: "transparent" }}
                isDisabled={isLastCard}
              >
                &#10095;
              </Button>
            </Flex>
          </Box>
          <Text my={5} fontWeight={"extrabold"} fontSize={"4xl"}>
            Rekomendasi Mentor
          </Text>
          <Box
            display={"flex"}
            w={"100%"}
            gap={3}
            justifyContent={"center"}
            color={"blackAlpha.100"}
            boxShadow={"md"}
            objectFit={"cover"}
            bgRepeat={"no-repeat"}
            h="60vh"
            p={"5"}
            borderRadius={"20px"}
          >
            <Card>
              <Box
                borderRadius="10px"
                p={3}
                bgImage={
                  "https://drive.google.com/uc?export=view&id=1ZgCm9levYnenwJ-COQgiiqZ8PEQksait"
                }
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Avatar
                  size="xl"
                  name="Christian Nwamba"
                  src="https://bit.ly/code-beast"
                />
              </Box>
              <CardHeader>
                <Text fontSize="larger" fontWeight="extrabold">
                  {" "}
                  Guru Spiritual
                </Text>
              </CardHeader>
              <CardBody>
                <Text>
                  View a summary of all your customers over the last month.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Text>
              </CardBody>
            </Card>
            <Card>
              <Box
                borderRadius="10px"
                p={3}
                bgImage={
                  "https://drive.google.com/uc?export=view&id=1ZgCm9levYnenwJ-COQgiiqZ8PEQksait"
                }
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Avatar
                  size="xl"
                  name="Christian Nwamba"
                  src="https://bit.ly/code-beast"
                />
              </Box>
              <CardHeader>
                <Text fontSize="larger" fontWeight="extrabold">
                  {" "}
                  Guru Spiritual
                </Text>
              </CardHeader>
              <CardBody>
                <Text>
                  View a summary of all your customers over the last month.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Text>
              </CardBody>
            </Card>
            <Card>
              <Box
                borderRadius="10px"
                p={3}
                bgImage={
                  "https://drive.google.com/uc?export=view&id=1ZgCm9levYnenwJ-COQgiiqZ8PEQksait"
                }
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Avatar
                  size="xl"
                  name="Christian Nwamba"
                  src="https://bit.ly/code-beast"
                />
              </Box>
              <CardHeader>
                <Text fontSize="larger" fontWeight="extrabold">
                  {" "}
                  Guru Spiritual
                </Text>
              </CardHeader>
              <CardBody>
                <Text>
                  View a summary of all your customers over the last month.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Text>
              </CardBody>
            </Card>
            <Card>
              <Box
                borderRadius="10px"
                p={3}
                bgImage={
                  "https://drive.google.com/uc?export=view&id=1ZgCm9levYnenwJ-COQgiiqZ8PEQksait"
                }
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Avatar
                  size="xl"
                  name="Christian Nwamba"
                  src="https://bit.ly/code-beast"
                />
              </Box>
              <CardHeader>
                <Text fontSize="larger" fontWeight="extrabold">
                  {" "}
                  Guru Spiritual
                </Text>
              </CardHeader>
              <CardBody>
                <Text>
                  View a summary of all your customers over the last month.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Text>
              </CardBody>
            </Card>
            <Card>
              <Box
                borderRadius="10px"
                p={3}
                bgImage={
                  "https://drive.google.com/uc?export=view&id=1ZgCm9levYnenwJ-COQgiiqZ8PEQksait"
                }
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Avatar
                  size="xl"
                  name="Christian Nwamba"
                  src="https://bit.ly/code-beast"
                />
              </Box>
              <CardHeader gap>
                <Text fontSize="larger" fontWeight="extrabold">
                  {" "}
                  Guru Spiritual
                </Text>
              </CardHeader>
              <CardBody>
                <Text>
                  View a summary of all your customers over the last month.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Text>
              </CardBody>
            </Card>
          </Box>
        </GridItem>
      </Grid>
      <Grid
        h="800px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} bg="tomato" pos="fixed">
          asdnasndalsdnalsnd alsdna Sunda{" "}
        </GridItem>
        <GridItem h="100px" colSpan={4} bg="tomato" pos="fixed"></GridItem>
        <GridItem h="100vh" colSpan={4} bg="papayawhip"></GridItem>
      </Grid>
    </>
  );
}

export default DasboardTeacher;
