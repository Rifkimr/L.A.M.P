import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Image,
  Text,
  AspectRatio,
} from "@chakra-ui/react";
import HeadBar from "../../../components/HeadBar";

export default function CardDetail() {
  return (
    <>
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
        h="90vh"
        mt="90px"
      >
        <Flex
          //   bg={"yellow"}
          flexDirection={"row"}
          width={"80%"}
          alignItems={"center"}
        >
          <Grid
            w={"100%"}
            h={"100%"}
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={2} colSpan={3} p={4}>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Caffe Latte"
                />

                <Stack>
                  <CardBody>
                    <Heading size="md">Belajar Bahasa Sunda</Heading>

                    <Text py="2">
                      Belajar Bahasa Sunda dari pemula sampai mahir
                    </Text>
                  </CardBody>

                  <CardFooter>
                    <Button variant="solid" colorScheme="blue">
                      Share
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
              <Text
                color={"blackAlpha.600"}
                fontWeight={"semibold"}
                fontSize={"3xl"}
                top={"90px"}
              >
                TENTANG EDUKASI
              </Text>
              <Text color={"blackAlpha.600"} fontSize={"large"} top={"90px"}>
                • Mengerti logat dari berbagai daerah
              </Text>
              <Text color={"blackAlpha.600"} fontSize={"large"} top={"90px"}>
                • Mengerti Algoritma
              </Text>
              <Text color={"blackAlpha.600"} fontSize={"large"} top={"90px"}>
                • Mengerti Bahasa baik dan benar
              </Text>
              <Text
                color={"blackAlpha.600"}
                fontWeight={"semibold"}
                fontSize={"3xl"}
                top={"90px"}
              >
                DESCRIPSI
              </Text>
              <Text color={"blackAlpha.600"} fontSize={"large"} top={"90px"}>
                Jadi, jika Anda ingin meningkatkan kemampuan pemrograman
                JavaScript Anda dan mempelajari alat yang dapat membantu Anda
                mengembangkan kode yang lebih terstruktur dan aman, jangan
                lewatkan video tutorial ini. Bersiaplah untuk menguasai
                TypeScript dan meningkatkan kemampuan pengembangan Anda menjadi
                tingkat yang lebih tinggi. Ayo mulai belajar TypeScript
                sekarang!
              </Text>
            </GridItem>
            <GridItem colSpan={2} rowSpan={2} p={4}>
              <Card w={"100%"}>
                <CardBody>
                  <AspectRatio
                    maxW="500px"
                    ratio={1}
                    borderRadius="lg"
                    objectFit={"cover"}
                  >
                    <iframe
                      width="560"
                      height="215"
                      src="https://www.youtube.com/embed/KDrolNtl1vI?si=RVYSvYdNCHUDt5ZR"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                  </AspectRatio>
                  <Stack mt="6" spacing="3">
                    <Heading size="md">Di ajar bahasa Sunda</Heading>
                    <Text>
                      This sofa is perfect for modern tropical spaces, baroque
                      inspired spaces, earthy toned spaces and for people who
                      love a chic design with a sprinkle of vintage design.
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
              </Card>
            </GridItem>
          </Grid>
        </Flex>
      </Box>
    </>
  );
}
