import React from "react";
import {
  Container,
  SimpleGrid,
  Image,
  Text,
  Stack,
  Box,
  VStack,
  HStack,
} from "@chakra-ui/react";
import progress from ".././Images/progress.png";
import man from ".././Images/man.png";
import star from ".././Images/star.png";
import "./Section2.css"

const features = [
  {
    id: 1,
    title: 'Interest Rate',
    text: <Text className="des">Usually <span className="span2">10.49% p.a.</span> onwards: some PSUs may offer lower rates</Text>
  },
  {
    id: 2,
    title: 'Loan Amount',
    text: <Text className="des">Can go up to <span className="span2">Rs 40 lakh:</span> some lenders may offer higher loan amount</Text>,
  },
  {
    id: 3,
    title: 'Processing Fees',
    text: <Text className="des"><span className="span2">0.5% to 4%</span> of loan amount (may vary across lenders)</Text>,
  },
  {
    id: 4,
    title: 'Tenure',
    text: <Text className="des">Up to <span className="span2">5 years</span> (some lenders offer repayment period till 8 year)</Text>,
  },
]

const Section2 = () => {
  return (
    <Container maxW={"100%"} mb={20}>
      <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={10}>
        <Box justifyContent={"end"} mt={41}>
          <div style={{display: "flex", justifyContent: "flex-start", alignItems: "center",marginLeft: "80px"}}>
            <img src={progress} alt="" />
            <Text className="loanText">Personal Loan Highlight</Text>
          </div>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={man}
            objectFit={"cover"}
            margin={"auto"}
          />
        </Box>
        <Stack spacing={4}>
        <Container maxW={'6xl'} mt={40}>
        <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <img src={star} alt="" />
              </Box>
              <VStack align={'start'}>
                <Text className="title">{feature.title}</Text>
                {feature.text}
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default Section2;
