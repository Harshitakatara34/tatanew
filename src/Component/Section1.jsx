import React from "react";
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Text,
  Stack,
  HStack,
  Avatar,
} from "@chakra-ui/react";
import "./Section1.css";
import father from "../Images/father.png";
import credit from "../Images/credit.png";
import quick from "../Images/quick.png";
import lowest from "../Images/lowest.png";
import minimal from "../Images/minimal.png";

const features = [
  {
    id: 1,
    icons: credit,
    title: "Avail Zero",
    des: "Processing Fee",
  },
  {
    id: 2,
    icons: quick,
    title: "Quick",
    des: "Personal Loan",
  },
  {
    id: 3,
    icons: lowest,
    title: "Lowest",
    des: "Interest Rates",
  },
  {
    id: 4,
    icons: minimal,
    title: "Miniamal",
    des: "Documentation",
  },
];

const Section1 = () => {
  return (
    <Container maxW={"100%"} m={{ base: "100px 0 0 0", lg: "100px 0px 70px" }}>
      <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }}>
        <Stack spacing={4} ml={{ lg: "80px" }}>
          <Text className="boldText" fontSize={{ md: 60, lg: 60 }}>
            Turn Dreams Into Reality With <span className="span1">Personal Loans</span>
          </Text>
              <SimpleGrid m={{base: "auto", md: "0px"}} columns={{ base: 1, md: 2 }} spacing={10} mt={30} className="gridBox">
                {features.map((feature) => (
                  <HStack key={feature.id} align={"top"}>
                    <Avatar src={feature.icons} />
                    <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                      <Text className="flexText">{feature.title}</Text>
                      <Text className="flexDes">{feature.des}</Text>
                    </Stack>
                  </HStack>
                ))}
              </SimpleGrid>
          <button className="applyButton">APPLY NOW</button>
        </Stack>
        <Flex justifyContent={"end"} mr={"80px"} mt={41}>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={father}
          
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default Section1;
