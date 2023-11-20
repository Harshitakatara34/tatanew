import React from "react";
import {
  Container,
  Image,
} from "@chakra-ui/react";
import data from "../Images/Frame 1244831845.png";
import "./Section5.css";

const Section6 = () => {
  return (
    <Container maxW={"100%"} mt={20}>
      <Image
        maxW={"100%"}
        mt={20}
        rounded={"md"}
        alt={"feature image"}
        src={data}
        margin={"auto"}
        height={"80%"}
        width={"100%"}
      />
    </Container>
  );
};

export default Section6;
