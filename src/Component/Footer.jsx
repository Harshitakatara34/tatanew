import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
} from '@chakra-ui/react'
import Logo from ".././Images/Logo.png";
import facebook from ".././Images/facebook.png";
import Instagram from ".././Images/Instagram.png";
import Youtube from ".././Images/Youtube.png";
import linkedin from ".././Images/linkedin.png";

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('black', 'black')}
      color={useColorModeValue('white', 'white')}>
      <Container as={Stack} maxW={'7xl'} py={10}>
        <SimpleGrid
          margin={{sm: "15px auto", md: "0px"}}
          templateColumns={{ sm: '1fr', md: '2fr 1fr 10% 1fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <img src={Logo} alt="" />
            </Box>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'facebook'} href={'#'}>
                <img src={facebook} alt="" />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <img src={Instagram} alt="" />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <img src={Youtube} alt="" />
              </SocialButton>
              <SocialButton label={'Linkedin'} href={'#'}>
                <img src={linkedin} alt="" />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}></Stack>
          <Stack align={'flex-start'}></Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Help & Support</ListHeader>
            <Box as="a" href={'#'}>
              Terms & Service
            </Box>
            <Box as="a" href={'#'}>
              987654321
            </Box>
            <Box as="a" href={'#'}>
              Tataneu Email ID
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Customer Care</ListHeader>
            <Box as="a" href={'#'}>
              2972 Westheimer Rd. Santa Ana, Illinois 85486
            </Box>
            <Box as="a" href={'#'}>
              Terms of Service
            </Box>
            <Box as="a" href={'#'}>
              Legal
            </Box>
            <Box as="a" href={'#'}>
              Privacy Policy
            </Box>
            <Box as="a" href={'#'}>
              Satus
            </Box>
          </Stack>

        </SimpleGrid>
      </Container>
    </Box>
  )
}