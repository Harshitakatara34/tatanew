import React from "react";
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
  VStack,
  HStack,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import cartoon from "../Images/cartoon.png";
import star from "../Images/star.png";
import "./Section5.css";

const features = [
  {
    id: 1,
    title: "Citizenship proof",
    text: "Indian citizen with valid ID proof"
  },
  {
    id: 2,
    title: "Age",
    text: "23 Tp 58 Years Of Age"
  },
  {
    id: 3,
    title: "Lorem",
    text: "Lorem Ipsum"
  },
  {
    id: 4,
    title: "Ipsum",
    text: "Ipsum Lorem"
  },
];

const Section5 = () => {
  return (
    <Container maxW={"100%"} mt={20}>
      <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={10}>
        <Container maxW={"6xl"}>
          <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10} ml={"5%"}>
            {features.map((feature) => (
              <HStack key={feature.id} align={"top"}>
                <Box color={"green.400"} px={2}>
                  <img src={star} alt="" />
                </Box>
                <VStack align={"start"}>
                  <Text className="title">{feature.title}</Text>
                  <Text className="text1">{feature.text}</Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>
        <Stack spacing={4}>
          <Box justifyContent={"end"}>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={cartoon}
              objectFit={"cover"}
              margin={"auto"}
            />
          </Box>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default Section5;
