  <Carousel responsive={responsive}>
        <Card width="100%" height="100%" maxW={"260px"} borderRadius={"10px"}>
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
          <Divider orientation="horizontal" borderColor="grey" height="100px" />
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