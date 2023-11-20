import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from '@chakra-ui/react';
import "./Section7.css"
import boys from "../Images/boys.png";

export default function Section7() {
  return (
    <Container maxW={'8xl'}>
      <Stack
        textAlign={"left"}
        style={{marginLeft: "5%", marginRight: "5%"}}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Text className='Earn'>Refer & Earn Now</Text>
          <Text className='gift'>Get a ₹500 Big Basket gift card</Text>
          <button className='applyButton3'>REFER AND EARN</button>
          <Text className='decor'>
            Terms and Conditions apply
          </Text>
        </Stack>
        <Flex
          flex={1}
          justifyContent={'center'}
          align={'center'}
          position={'relative'}
          w={'md'}
          className='bgImage'
          >
            <Image src={boys} height='100%' />
        </Flex>
      </Stack>
    </Container>
  )
}