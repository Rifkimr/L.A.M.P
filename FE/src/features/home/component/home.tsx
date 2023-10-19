"use client";

import {
  Box,
  Button,
  Text,
  Image,
  Flex,
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  CardFooter,
  Grid,
  GridItem,
  Container,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import React from "react";
import HeadBar from "../../../components/HeadBar";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import homelogo from "../../../assets/logo/bg-home.jpeg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  BsClock,
  BsGraphUpArrow,
  BsPeople,
  BsFillBookFill,
  BsStarHalf,
} from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 200,
  autoplaySpeed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export function Home() {
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [slider, setSlider] = React.useState<Slider | null>(null);

  const cards = [
    {
      image:
        "https://i.pinimg.com/originals/22/78/74/227874846ea8c3e2774f96f8ea5b34a9.png",
    },
    {
      image:
        "https://png.pngtree.com/png-vector/20221025/ourmid/pngtree-discussion-abstract-concept-vector-illustration-png-image_6353857.png",
    },
    {
      image:
        "https://i.pinimg.com/originals/22/78/74/227874846ea8c3e2774f96f8ea5b34a9.png",
    },
    {
      image:
        "https://png.pngtree.com/png-vector/20221025/ourmid/pngtree-discussion-abstract-concept-vector-illustration-png-image_6353857.png",
    },
  ];

  const cardData = [
    {
      image:
        "https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      title: "Data Analist",
      description: "Belajar data Analist",
    },
    {
      image:
        "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYiUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Backend Web Developer",
      description: "Belajar pemrograman TypeScript dari pemula",
    },
    {
      image:
        "https://images.unsplash.com/photo-1599837565318-67429bde7162?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Frontend Web Developer",
      description:
        "Belajar database PostgreSQL dari pemula sampai mahir disertai studi kasus",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1668198395291-d87bba7d5b16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Data Analist",
      description: "Ini adalah description Moduls Lorem ipsum dolor sit amet",
    },
    {
      image:
        "https://images.unsplash.com/photo-1627843240167-b1f9d28f732e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZla3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      title: "Judul Artikel 5",
      description: "Ini adalah description Moduls Lorem ipsum dolor sit amet",
    },
    {
      image:
        "https://images.unsplash.com/photo-1633773455198-434f4110ef74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZla3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      title: "Judul Artikel 6",
      description: "Ini adalah description Moduls Lorem ipsum dolor sit amet",
    },
  ];

  const visibleCards = cardData.slice(currentCard, currentCard + 4);
  const isLastCard = currentCard === cardData.length - 1;

  useEffect(() => {
    // Opsi konfigurasi Typed.js
    const options = {
      strings: [
        "Empower Your Mind,",
        "Education is the Key,",
        "Together We Learn, ",
        "Together We Succeed,",
      ],
      typeSpeed: 50, // Kecepatan pengetikan (dalam milidetik)
      // backSpeed: 50,  Kecepatan penghapusan teks (dalam milidetik)
      backDelay: 1000, // Jeda sebelum penghapusan teks (dalam milidetik)
      startDelay: 500, // Jeda sebelum efek dimulai (dalam milidetik)
      loop: true, // Mengulang efek pengetikan
    };

    // Inisialisasi Typed.js
    const typed = new Typed(".typing-element", options);

    // Bersihkan Typed.js ketika komponen unmount
    return () => {
      typed.destroy();
    };
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Box bg={"#eaeaea"}>
      <HeadBar />
      <Box
        display={"flex"}
        w={"100%"}
        gap={3}
        justifyContent={"center"}
        color={"blackAlpha.100"}
        boxShadow={"md"}
        objectFit={"cover"}
        bgRepeat={"no-repeat"}
        h="70vh"
        mt="90px"
        bgImage={homelogo}
        style={{
          backgroundPosition: "center button", // Mengatur posisi latar belakang ke tengah vertikal dan ke atas.
          backgroundSize: "cover", // Mengatur latar belakang untuk menutupi seluruh elemen.
        }}
      >
        <Flex
          px={"7"}
          position={"relative"}
          width={"85%"}
          justifyContent={"space-between"}
        >
          <Box w={"50%"} position={"relative"}>
            <Text
              color={"white"}
              fontWeight={"semibold"}
              fontSize={"4xl"}
              top={"90px"}
              position={"absolute"}
            >
              Let's Learn Together
            </Text>
            <Text
              color={"white"}
              fontWeight={"semibold"}
              fontSize={"4xl"}
              className="typing-element"
              top={"150px"}
              position={"absolute"}
            ></Text>
            <Text
              top={"200"}
              mt={"4"}
              color={"white"}
              fontWeight={"semibold"}
              position={"absolute"}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
              eaque in magni asperiores doloremque quisquam neque quam nesciunt
              voluptatum, labore corporis, nemo deleniti, excepturi saepe at
              natus exercitationem? Cum, excepturi!
            </Text>
            <Button mx={-1} top={"350px"}>
              Mulai Sekarang
            </Button>
            <Button
              ms={4}
              border={"1px solid white"}
              colorScheme="none"
              top={"350px"}
            >
              Tanya Cs
            </Button>
          </Box>
          <Box
            top={"60px"}
            position={"relative"}
            height={"sm"}
            overflow={"hidden"}
            objectFit={"cover"}
            w={"sm"}
          >
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
              {cards.map((card, index) => (
                <Image key={index} src={`${card.image}`} />
              ))}
            </Slider>
          </Box>
        </Flex>
      </Box>
      <Box ms={"125px"} width={"85%"} alignItems={"center"} my="4">
        <Text
          color={"blackAlpha.600"}
          fontWeight={"semibold"}
          fontSize={"3xl"}
          top={"90px"}
        >
          Roadmap Belajar
        </Text>
      </Box>
      <Box
        display={"flex"}
        w={"100%"}
        gap={3}
        justifyContent={"center"}
        color={"blackAlpha.100"}
        boxShadow={"md"}
        objectFit={"cover"}
        bgRepeat={"no-repeat"}
        h="70vh"
        p={"5"}
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
                w="250px"
                maxH="400px"
                position={"relative"}
                borderRadius={"15px"}
                mr={index === visibleCards.length - 1 ? "0" : "20px"}
              >
                <Image
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  borderRadius={"15px"}
                  opacity={0.9}
                  src={card.image}
                />
                <Box
                  p={3}
                  top={"270px"}
                  w="100%"
                  h={"30%"}
                  position={"absolute"}
                >
                  <Link to="/carddetail">
                    <Text
                      color={"white"}
                      fontWeight={"semibold"}
                      fontSize={"3xl"}
                    >
                      {card.title}
                    </Text>
                  </Link>
                  <Text color={"white"}>{card.description}</Text>
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

      <Box ms={"125px"} width={"85%"} alignItems={"center"} my="5">
        <Text color={"blackAlpha.600"} fontWeight={"semibold"} fontSize={"3xl"}>
          Kelas Terbaru
        </Text>
      </Box>

      <Flex
        w={"100%"}
        gap={3}
        justifyContent={"center"}
        color={"blackAlpha.100"}
        boxShadow={"md"}
        objectFit={"cover"}
        bgRepeat={"no-repeat"}
        h="75vh"
        p={"5"}
      >
        <Box width={"85%"} gap={5} ps={"20px"}>
          <Carousel responsive={responsive}>
            <Card
              width="100%"
              height="100%"
              maxW={"260px"}
              borderRadius={"10px"}
            >
              <Image
                src="https://images.unsplash.com/photo-1593118247619-e2d6f056869e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="Green double couch with wooden legs"
                objectFit={"cover"}
                borderRadius="10px 10px 0px 0px"
              />
              <Flex alignItems="center" gap="3" ms="3" mt="3">
                <Text color="blackAlpha.700" fontWeight="semibold">
                  By Bagja sugana
                </Text>
                <AiFillCheckCircle color="#279EFF" size="20px" />
              </Flex>
              <Heading mt="3" ms="3" size="md">
                Belajar Bahasa Sunda
              </Heading>
              <Grid
                templateColumns="repeat(2, 1fr)"
                templateRows="repeat(2, 1fr)"
                gap={2}
                m="4"
              >
                <GridItem w="100%" h="10">
                  <Flex alignItems="center">
                    <BsGraphUpArrow />
                    <Text ms="2" color="blackAlpha.700" fontWeight="semibold">
                      content
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Flex alignItems="center">
                    <BsClock />
                    <Text ms="2" color="blackAlpha.700" fontWeight="semibold">
                      content
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Flex alignItems="center">
                    <BsPeople />
                    <Text ms="2" color="blackAlpha.700" fontWeight="semibold">
                      content
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Flex alignItems="center">
                    <BsFillBookFill />
                    <Text ms="2" color="blackAlpha.700" fontWeight="semibold">
                      content
                    </Text>
                  </Flex>
                </GridItem>
              </Grid>
              <Flex alignItems="center" columnGap="3" ms="4">
                <BsStarHalf color="#FFC436" />
                <Text color="#FFC436" fontWeight="semibold">
                  4,8
                </Text>
                <Text color="blackAlpha.700" fontWeight="semibold">
                  penilaian
                </Text>
              </Flex>
              <Divider
                orientation="horizontal"
                borderColor="grey"
                height="10px"
              />
              <Text
                color="blackAlpha.700"
                fontWeight="semibold"
                m="2"
                textAlign="end"
              >
                Join Sekarang
              </Text>
            </Card>
            <Card
              width="100%"
              height="100%"
              maxW={"260px"}
              borderRadius={"10px"}
            >
              <Image
                src="https://images.unsplash.com/photo-1590845947376-2638caa89309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                objectFit={"cover"}
                borderRadius="10px 10px 0px 0px"
              />
              <Flex alignItems="center" gap="3" ms="3" mt="3">
                <Text color="blackAlpha.700" fontWeight="semibold">
                  By Surya Insomnia
                </Text>
                <AiFillCheckCircle color="#279EFF" size="20px" />
              </Flex>
              <Heading mt="3" ms="3" size="md">
                Belajar Bahasa Sunda
              </Heading>
              <Grid
                templateColumns="repeat(2, 1fr)"
                templateRows="repeat(2, 1fr)"
                gap={2}
                m="4"
              >
                <GridItem w="100%" h="10">
                  <Flex alignItems="center">
                    <BsGraphUpArrow />
                    <Text ms="2" color="blackAlpha.700" fontWeight="semibold">
                      content
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Flex alignItems="center">
                    <BsClock />
                    <Text ms="2" color="blackAlpha.700" fontWeight="semibold">
                      content
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Flex alignItems="center">
                    <BsPeople />
                    <Text ms="2" color="blackAlpha.700" fontWeight="semibold">
                      content
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Flex alignItems="center">
                    <BsFillBookFill />
                    <Text ms="2" color="blackAlpha.700" fontWeight="semibold">
                      content
                    </Text>
                  </Flex>
                </GridItem>
              </Grid>
              <Flex alignItems="center" columnGap="3" ms="4">
                <BsStarHalf color="#FFC436" />
                <Text color="#FFC436" fontWeight="semibold">
                  4,8
                </Text>
                <Text color="blackAlpha.700" fontWeight="semibold">
                  penilaian
                </Text>
              </Flex>
              <Divider
                orientation="horizontal"
                borderColor="grey"
                height="10px"
              />
              <Text
                color="blackAlpha.700"
                fontWeight="semibold"
                m="2"
                textAlign="end"
              >
                Join Sekarang
              </Text>
            </Card>
            <Card
              width="100%"
              height="100%"
              maxW={"260px"}
              borderRadius={"10px"}
            >
              <Image
                src="https://images.unsplash.com/photo-1580327344181-c1163234e5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                objectFit={"cover"}
                borderRadius="10px 10px 0px 0px"
              />
              <Flex alignItems="center" gap="3" ms="3" mt="3">
                <Text color="blackAlpha.700" fontWeight="semibold">
                  By Ilham Ramadhan
                </Text>
                <AiFillCheckCircle color="#279EFF" size="20px" />
              </Flex>
              <Heading mt="3" ms="3" size="md">
                Belajar Bahasa Sunda
              </Heading>
              <Grid
                templateColumns="repeat(2, 1fr)"
                templateRows="repeat(2, 1fr)"
                gap={2}
                m="4"
              >
                <GridItem w="100%" h="10">
                  <Flex alignItems="center">
                    <BsGraphUpArrow />
                    <Text ms="2" color="blackAlpha.700" fontWeight="semibold">
                      content
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Flex alignItems="center">
                    <BsClock />
                    <Text ms="2" color="blackAlpha.700" fontWeight="semibold">
                      content
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Flex alignItems="center">
                    <BsPeople />
                    <Text ms="2" color="blackAlpha.700" fontWeight="semibold">
                      content
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Flex alignItems="center">
                    <BsFillBookFill />
                    <Text ms="2" color="blackAlpha.700" fontWeight="semibold">
                      content
                    </Text>
                  </Flex>
                </GridItem>
              </Grid>
              <Flex alignItems="center" columnGap="3" ms="4">
                <BsStarHalf color="#FFC436" />
                <Text color="#FFC436" fontWeight="semibold">
                  4,8
                </Text>
                <Text color="blackAlpha.700" fontWeight="semibold">
                  penilaian
                </Text>
              </Flex>
              <Divider
                orientation="horizontal"
                borderColor="grey"
                height="10px"
              />
              <Text
                color="blackAlpha.700"
                fontWeight="semibold"
                m="2"
                textAlign="end"
              >
                Join Sekarang
              </Text>
            </Card>
            <Card
              width="100%"
              height="100%"
              maxW={"260px"}
              borderRadius={"10px"}
            >
              <Image
                src="https://images.unsplash.com/photo-1592155931584-901ac15763e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                objectFit={"cover"}
                borderRadius="10px 10px 0px 0px"
              />
              <Flex alignItems="center" gap="3" ms="3" mt="3">
                <Text color="blackAlpha.700" fontWeight="semibold">
                  By Hellen amir
                </Text>
                <AiFillCheckCircle color="#279EFF" size="20px" />
              </Flex>
              <Heading mt="3" ms="3" size="md">
                Belajar Bahasa Inggris
              </Heading>
              <Grid
                templateColumns="repeat(2, 1fr)"
                templateRows="repeat(2, 1fr)"
                gap={2}
                m="4"
              >
                <GridItem w="100%" h="10">
                  <Flex alignItems="center">
                    <BsGraphUpArrow />
                    <Text ms="2" color="blackAlpha.700" fontWeight="semibold">
                      content
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Flex alignItems="center">
                    <BsClock />
                    <Text ms="2" color="blackAlpha.700" fontWeight="semibold">
                      content
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Flex alignItems="center">
                    <BsPeople />
                    <Text ms="2" color="blackAlpha.700" fontWeight="semibold">
                      content
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Flex alignItems="center">
                    <BsFillBookFill />
                    <Text ms="2" color="blackAlpha.700" fontWeight="semibold">
                      content
                    </Text>
                  </Flex>
                </GridItem>
              </Grid>
              <Flex alignItems="center" columnGap="3" ms="4">
                <BsStarHalf color="#FFC436" />
                <Text color="#FFC436" fontWeight="semibold">
                  4,8
                </Text>
                <Text color="blackAlpha.700" fontWeight="semibold">
                  penilaian
                </Text>
              </Flex>
              <Divider
                orientation="horizontal"
                borderColor="grey"
                height="10px"
              />
              <Text
                color="blackAlpha.700"
                fontWeight="semibold"
                m="2"
                textAlign="end"
              >
                Join Sekarang
              </Text>
            </Card>
            <Card
              width="100%"
              height="100%"
              maxW={"260px"}
              borderRadius={"10px"}
            >
              <Image
                src="https://images.unsplash.com/photo-1593118247619-e2d6f056869e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="Green double couch with wooden legs"
                objectFit={"cover"}
                borderRadius="10px 10px 0px 0px"
              />
              <Flex alignItems="center" gap="3" ms="3" mt="3">
                <Text color="blackAlpha.700" fontWeight="semibold">
                  By Bagja sugana
                </Text>
                <AiFillCheckCircle color="#279EFF" size="20px" />
              </Flex>
              <Heading mt="3" ms="3" size="md">
                Belajar Bahasa Sunda
              </Heading>
              <Grid
                templateColumns="repeat(2, 1fr)"
                templateRows="repeat(2, 1fr)"
                gap={2}
                m="4"
              >
                <GridItem w="100%" h="10">
                  <Flex alignItems="center">
                    <BsGraphUpArrow />
                    <Text ms="2" color="blackAlpha.700" fontWeight="semibold">
                      content
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Flex alignItems="center">
                    <BsClock />
                    <Text ms="2" color="blackAlpha.700" fontWeight="semibold">
                      content
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Flex alignItems="center">
                    <BsPeople />
                    <Text ms="2" color="blackAlpha.700" fontWeight="semibold">
                      content
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Flex alignItems="center">
                    <BsFillBookFill />
                    <Text ms="2" color="blackAlpha.700" fontWeight="semibold">
                      content
                    </Text>
                  </Flex>
                </GridItem>
              </Grid>
              <Flex alignItems="center" columnGap="3" ms="4">
                <BsStarHalf color="#FFC436" />
                <Text color="#FFC436" fontWeight="semibold">
                  4,8
                </Text>
                <Text color="blackAlpha.700" fontWeight="semibold">
                  penilaian
                </Text>
              </Flex>
              <Divider
                orientation="horizontal"
                borderColor="grey"
                height="10px"
              />
              <Text
                color="blackAlpha.700"
                fontWeight="semibold"
                m="2"
                textAlign="end"
              >
                Join Sekarang
              </Text>
            </Card>
            <Card
              width="100%"
              height="100%"
              maxW={"260px"}
              borderRadius={"10px"}
            >
              <Image
                src="https://images.unsplash.com/photo-1593118247619-e2d6f056869e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="Green double couch with wooden legs"
                objectFit={"cover"}
                borderRadius="10px 10px 0px 0px"
              />
              <Flex alignItems="center" gap="3" ms="3" mt="3">
                <Text color="blackAlpha.700" fontWeight="semibold">
                  By Bagja sugana
                </Text>
                <AiFillCheckCircle color="#279EFF" size="20px" />
              </Flex>
              <Heading mt="3" ms="3" size="md">
                Belajar Bahasa Sunda
              </Heading>
              <Grid
                templateColumns="repeat(2, 1fr)"
                templateRows="repeat(2, 1fr)"
                gap={2}
                m="4"
              >
                <GridItem w="100%" h="10">
                  <Flex alignItems="center">
                    <BsGraphUpArrow />
                    <Text ms="2" color="blackAlpha.700" fontWeight="semibold">
                      content
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Flex alignItems="center">
                    <BsClock />
                    <Text ms="2" color="blackAlpha.700" fontWeight="semibold">
                      content
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Flex alignItems="center">
                    <BsPeople />
                    <Text ms="2" color="blackAlpha.700" fontWeight="semibold">
                      content
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Flex alignItems="center">
                    <BsFillBookFill />
                    <Text ms="2" color="blackAlpha.700" fontWeight="semibold">
                      content
                    </Text>
                  </Flex>
                </GridItem>
              </Grid>
              <Flex alignItems="center" columnGap="3" ms="4">
                <BsStarHalf color="#FFC436" />
                <Text color="#FFC436" fontWeight="semibold">
                  4,8
                </Text>
                <Text color="blackAlpha.700" fontWeight="semibold">
                  penilaian
                </Text>
              </Flex>
              <Divider
                orientation="horizontal"
                borderColor="grey"
                height="10px"
              />
              <Text
                color="blackAlpha.700"
                fontWeight="semibold"
                m="2"
                textAlign="end"
              >
                Join Sekarang
              </Text>
            </Card>
            <Card
              width="100%"
              height="100%"
              maxW={"260px"}
              borderRadius={"10px"}
            >
              <Image
                src="https://images.unsplash.com/photo-1593118247619-e2d6f056869e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="Green double couch with wooden legs"
                objectFit={"cover"}
                borderRadius="10px 10px 0px 0px"
              />
              <Flex alignItems="center" gap="3" ms="3" mt="3">
                <Text color="blackAlpha.700" fontWeight="semibold">
                  By Bagja sugana
                </Text>
                <AiFillCheckCircle color="#279EFF" size="20px" />
              </Flex>
              <Heading mt="3" ms="3" size="md">
                Belajar Bahasa Sunda
              </Heading>
              <Grid
                templateColumns="repeat(2, 1fr)"
                templateRows="repeat(2, 1fr)"
                gap={2}
                m="4"
              >
                <GridItem w="100%" h="10">
                  <Flex alignItems="center">
                    <BsGraphUpArrow />
                    <Text ms="2" color="blackAlpha.700" fontWeight="semibold">
                      content
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Flex alignItems="center">
                    <BsClock />
                    <Text ms="2" color="blackAlpha.700" fontWeight="semibold">
                      content
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Flex alignItems="center">
                    <BsPeople />
                    <Text ms="2" color="blackAlpha.700" fontWeight="semibold">
                      content
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Flex alignItems="center">
                    <BsFillBookFill />
                    <Text ms="2" color="blackAlpha.700" fontWeight="semibold">
                      content
                    </Text>
                  </Flex>
                </GridItem>
              </Grid>
              <Flex alignItems="center" columnGap="3" ms="4">
                <BsStarHalf color="#FFC436" />
                <Text color="#FFC436" fontWeight="semibold">
                  4,8
                </Text>
                <Text color="blackAlpha.700" fontWeight="semibold">
                  penilaian
                </Text>
              </Flex>
              <Divider
                orientation="horizontal"
                borderColor="grey"
                height="10px"
              />
              <Text
                color="blackAlpha.700"
                fontWeight="semibold"
                m="2"
                textAlign="end"
              >
                Join Sekarang
              </Text>
            </Card>
          </Carousel>
        </Box>
      </Flex>
      <Box ms={"125px"} width={"85%"} alignItems={"center"} my="5">
        <Text color={"blackAlpha.600"} fontWeight={"semibold"} fontSize={"3xl"}>
          Rekomendasi guru
        </Text>
      </Box>
      <Flex
        w={"100%"}
        gap={3}
        justifyContent={"center"}
        color={"blackAlpha.100"}
        boxShadow={"md"}
        objectFit={"cover"}
        bgRepeat={"no-repeat"}
        h="50vh"
        p={"5"}
      >
        <Box width={"80%"} gap={5}>
          <Grid templateColumns="repeat(4, 1fr)" gap={5}>
            <GridItem w="100%" h="20" p="2" borderRadius="15px" bg="white">
              <Box
                display={"flex"}
                w="65px"
                h="9vh"
                borderRadius="10px"
                bg="red"
                gap="5"
              >
                <Image
                  borderRadius={"10px"}
                  objectFit={"cover"}
                  w="100%"
                  src="https://s3-alpha.figma.com/hub/file/2892125217/716d53e1-341c-43a7-a634-d5e175b01bcb-cover.png"
                />
                <Box>
                  <Text
                    fontWeight={"semibold"}
                    fontSize={"large"}
                    color={"blackAlpha.500"}
                  >
                    Figma
                  </Text>
                  <Text
                    fontWeight={"semibold"}
                    fontSize={"large"}
                    color={"blackAlpha.500"}
                    mt={"2"}
                    w={"150px"}
                  >
                    Lorem Ipsum
                  </Text>
                </Box>
              </Box>
            </GridItem>
            <GridItem w="100%" h="20" p="2" borderRadius="15px" bg="white">
              <Box
                display={"flex"}
                w="65px"
                h="9vh"
                borderRadius="10px"
                bg="red"
                gap="5"
              >
                <Image
                  borderRadius={"10px"}
                  objectFit={"cover"}
                  w="100%"
                  src="https://s3-alpha.figma.com/hub/file/2892125217/716d53e1-341c-43a7-a634-d5e175b01bcb-cover.png"
                />
                <Box>
                  <Text
                    fontWeight={"semibold"}
                    fontSize={"large"}
                    color={"blackAlpha.500"}
                  >
                    Figma
                  </Text>
                  <Text
                    fontWeight={"semibold"}
                    fontSize={"large"}
                    color={"blackAlpha.500"}
                    mt={"2"}
                    w={"150px"}
                  >
                    Lorem Ipsum
                  </Text>
                </Box>
              </Box>
            </GridItem>
            <GridItem w="100%" h="20" p="2" borderRadius="15px" bg="white">
              <Box
                display={"flex"}
                w="65px"
                h="9vh"
                borderRadius="10px"
                bg="red"
                gap="5"
              >
                <Image
                  borderRadius={"10px"}
                  objectFit={"cover"}
                  w="100%"
                  src="https://s3-alpha.figma.com/hub/file/2892125217/716d53e1-341c-43a7-a634-d5e175b01bcb-cover.png"
                />
                <Box>
                  <Text
                    fontWeight={"semibold"}
                    fontSize={"large"}
                    color={"blackAlpha.500"}
                  >
                    Figma
                  </Text>
                  <Text
                    fontWeight={"semibold"}
                    fontSize={"large"}
                    color={"blackAlpha.500"}
                    mt={"2"}
                    w={"150px"}
                  >
                    Lorem Ipsum
                  </Text>
                </Box>
              </Box>
            </GridItem>
            <GridItem w="100%" h="20" p="2" borderRadius="15px" bg="white">
              <Box
                display={"flex"}
                w="65px"
                h="9vh"
                borderRadius="10px"
                bg="red"
                gap="5"
              >
                <Image
                  borderRadius={"10px"}
                  objectFit={"cover"}
                  w="100%"
                  src="https://s3-alpha.figma.com/hub/file/2892125217/716d53e1-341c-43a7-a634-d5e175b01bcb-cover.png"
                />
                <Box>
                  <Text
                    fontWeight={"semibold"}
                    fontSize={"large"}
                    color={"blackAlpha.500"}
                  >
                    Figma
                  </Text>
                  <Text
                    fontWeight={"semibold"}
                    fontSize={"large"}
                    color={"blackAlpha.500"}
                    mt={"2"}
                    w={"150px"}
                  >
                    Lorem Ipsum
                  </Text>
                </Box>
              </Box>
            </GridItem>
            <GridItem w="100%" h="20" p="2" borderRadius="15px" bg="white">
              <Box
                display={"flex"}
                w="65px"
                h="9vh"
                borderRadius="10px"
                bg="red"
                gap="5"
              >
                <Image
                  borderRadius={"10px"}
                  objectFit={"cover"}
                  w="100%"
                  src="https://s3-alpha.figma.com/hub/file/2892125217/716d53e1-341c-43a7-a634-d5e175b01bcb-cover.png"
                />
                <Box>
                  <Text
                    fontWeight={"semibold"}
                    fontSize={"large"}
                    color={"blackAlpha.500"}
                  >
                    Figma
                  </Text>
                  <Text
                    fontWeight={"semibold"}
                    fontSize={"large"}
                    color={"blackAlpha.500"}
                    mt={"2"}
                    w={"150px"}
                  >
                    Lorem Ipsum
                  </Text>
                </Box>
              </Box>
            </GridItem>
            <GridItem w="100%" h="20" p="2" borderRadius="15px" bg="white">
              <Box
                display={"flex"}
                w="65px"
                h="9vh"
                borderRadius="10px"
                bg="red"
                gap="5"
              >
                <Image
                  borderRadius={"10px"}
                  objectFit={"cover"}
                  w="100%"
                  src="https://s3-alpha.figma.com/hub/file/2892125217/716d53e1-341c-43a7-a634-d5e175b01bcb-cover.png"
                />
                <Box>
                  <Text
                    fontWeight={"semibold"}
                    fontSize={"large"}
                    color={"blackAlpha.500"}
                  >
                    Figma
                  </Text>
                  <Text
                    fontWeight={"semibold"}
                    fontSize={"large"}
                    color={"blackAlpha.500"}
                    mt={"2"}
                    w={"150px"}
                  >
                    Lorem Ipsum
                  </Text>
                </Box>
              </Box>
            </GridItem>
            <GridItem w="100%" h="20" p="2" borderRadius="15px" bg="white">
              <Box
                display={"flex"}
                w="65px"
                h="9vh"
                borderRadius="10px"
                bg="red"
                gap="5"
              >
                <Image
                  borderRadius={"10px"}
                  objectFit={"cover"}
                  w="100%"
                  src="https://s3-alpha.figma.com/hub/file/2892125217/716d53e1-341c-43a7-a634-d5e175b01bcb-cover.png"
                />
                <Box>
                  <Text
                    fontWeight={"semibold"}
                    fontSize={"large"}
                    color={"blackAlpha.500"}
                  >
                    Figma
                  </Text>
                  <Text
                    fontWeight={"semibold"}
                    fontSize={"large"}
                    color={"blackAlpha.500"}
                    mt={"2"}
                    w={"150px"}
                  >
                    Lorem Ipsum
                  </Text>
                </Box>
              </Box>
            </GridItem>
            <GridItem w="100%" h="20" p="2" borderRadius="15px" bg="white">
              <Box
                display={"flex"}
                w="65px"
                h="9vh"
                borderRadius="10px"
                bg="red"
                gap="5"
              >
                <Image
                  borderRadius={"10px"}
                  objectFit={"cover"}
                  w="100%"
                  src="https://s3-alpha.figma.com/hub/file/2892125217/716d53e1-341c-43a7-a634-d5e175b01bcb-cover.png"
                />
                <Box>
                  <Text
                    fontWeight={"semibold"}
                    fontSize={"large"}
                    color={"blackAlpha.500"}
                  >
                    Figma
                  </Text>
                  <Text
                    fontWeight={"semibold"}
                    fontSize={"large"}
                    color={"blackAlpha.500"}
                    mt={"2"}
                    w={"150px"}
                  >
                    Lorem Ipsum
                  </Text>
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
}

export default Home;
