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
    Button
} from '@chakra-ui/react'
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5'
import { ReactElement } from 'react';
import MobilePNG from ".././Images/MobilePNG.jpg"
import StarPNG from ".././Images/StarPNG.jpg"
import BarPNG from ".././Images/BarPNG.jpg";
import "./Section1.css"
  
  const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    )
  }



const Section3 = ()=>{
    return (
        <Container maxW={'6x1'} py={12}>
          <SimpleGrid  columns={{ base: 1, md: 2 }}>
          <Flex >
              <Image
                rounded={'md'}
                alt={'Mobile Png'}
                src={
                  MobilePNG
                }
                objectFit={'cover'}
              />
            </Flex>
            <Stack spacing={4} textAlign={"center"} gap={"51px"} justifyContent={"center"} align={"center"}>
              <Flex gap={5} flex={{base: "column", md: "row"}}>
                <Image src={StarPNG} height={{sm: 20, md: 50}} width={{sm: 20, md: 50}} alt="" />
                <Heading  fontWeight={600} fontSize={{base: 30, md: 44}} height={"61px"} width={{base: "100%", md: 447}}>Lighting Fast Process</Heading>
              </Flex>
              <Image src={BarPNG} width={{base: "100%", md: 536}}  alt="" srcset="" />
              <Text fontWeight={500} fontSize={"23px"} height={"28px"} width={"305px"} alignSelf={"center"}>Customer share basic details</Text>
              <button className="applyButton">APPLY NOW</button>
            </Stack>
          </SimpleGrid>
        </Container>
      )
}

export default Section3;