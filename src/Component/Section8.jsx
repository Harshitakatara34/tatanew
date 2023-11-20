import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import question from "../Images/question.png";
import "./Section8.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";


const arr = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit",
  },
  {
    id: 2,
    title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit",
  },
  {
    id: 3,
    title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit",
  },
  {
    id: 4,
    title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit",
  },
  {
    id: 5,
    title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit",
  },
  {
    id: 6,
    title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit",
  },
  {
    id: 7,
    title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit",
  },
];

const Section8 = () => {
  return (
    <div className="faqSection">
      <Box justifyContent={"end"}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginLeft: "5%"
          }}
        >
          <img src={question} alt="" />
          <Text className="faq" ml={3}>
            FAQ'S
          </Text>
        </div>
      </Box>
      <Accordion allowToggle w={"90%"} style={{ marginLeft: "5%", marginTop: "30px" }}>
        {arr?.map((el, i) => (
          <AccordionItem style={{border: "0px", margin: "20px 0"}}>
            {({ isExpanded }) => (
            <>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" className="text">
                {el.id}
                {". "}
                {el.title}
              </Box>
              {isExpanded ? (
                <MinusIcon fontSize="12px" />
              ) : (
                <AddIcon fontSize="12px" />
              )}
            </AccordionButton>
            <AccordionPanel pb={4} textAlign={"left"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
            </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Section8;
