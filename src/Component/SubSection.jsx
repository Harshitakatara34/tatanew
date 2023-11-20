import React from "react";
import {
    Grid,
    GridItem,
    Image,
    Text,
  } from '@chakra-ui/react';
  import Hdfc from "../Images/Hdfc.png";
  import Icici from "../Images/Icici.png";
  import Bob from "../Images/Bob.png";
  import "./Section2.css"

  const Feature = ({ heading, image }) => {
    return (
      <GridItem>
        {image ? <Image src={image} alt="" m={"auto"}  /> : <div className="partner"><p>Our Partners</p></div>}
        <Text className="heading">
          {heading}
        </Text>
      </GridItem>
    )
  }

const SubSection = () => {
  return (
    <div>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(5, 1fr)",
        }}
        gap={{ base: "8", sm: "12", md: "12" }}
      >
        <Feature 
          heading={""}
        />
        <Feature
          image={Hdfc}
          heading={"HDFC Bank"}
        />
        <Feature
          image={Icici}
          heading={"ICICI Bank"}
        />
        <Feature
          image={Icici}
          heading={"ICICI Bank"}
        />
        <Feature
          image={Bob}
          heading={"Bank of Baroda"}
        />
      </Grid>
    </div>
  );
};

export default SubSection;
