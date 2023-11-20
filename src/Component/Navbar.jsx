import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  PhoneIcon,
} from "@chakra-ui/icons";
import "./Navbar.css"
import search from ".././Images/search.png";
import location from ".././Images/location.png";
import notification from ".././Images/notification.png";
import User from ".././Images/User.png";
import cart from ".././Images/cart.png";
import Logo1 from ".././Images/Logo1.png";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position={"fixed"} width={"100%"} zIndex={4} top={0} >
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"90px"}
        ml={{base: -32, md: 22, lg: 12}}
        mr={{base: -32, md: 22, lg: 12}}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: 1, md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <img src={Logo1} alt="" />

          <Flex display={{ base: "none", md: "flex" }} ml={4}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack flex={{ sm: "column", md: "row" }} justify={"flex-end"} direction={"row"}>
          <InputGroup
            w={{sm: "120px", md: "258px", lg: "258px"}}
            display={{base: "none", md: "inline"}}
            style={{
              border: "none",
              borderRadius: "4px",
              background:
                "var(--light-states-on-background-high-contrast-opacity-012, rgba(33, 33, 33, 0.12))",
            }}
            mr={"24px"}
          >
            <InputLeftElement pointerEvents="none">
              <img src={search} alt="" />
            </InputLeftElement>
            <Input
              type="search"
              placeholder="Search Tata Neu"
              style={{ border: "none" }}
            />
          </InputGroup>
          <Stack
            flex={{ base: "none", md: 0 }}
            display={{ base: "flex", sm: "none", md: "none", lg: "flex"}}
            alignItems={{base: "center"}}
            direction={"row"}
            mr={{sm: 5}}
          >
            <Text className="text">122018</Text>
            <img src={location} alt="location" style={{marginRight: "24px"}} />
          </Stack>
          <Stack
            flex={{ base: "none", sm: "none", md: "none", lg: "row" }}
            display={{ base: "none",sm: "none", md: "none", lg: "flex"}}
            justifyContent={"space-between"}
            alignItems={"center"}
            direction={"row"}
          >
            <img src={cart} alt={cart} style={{marginRight: "24px"}} />
            <img src={notification} alt={notification} style={{marginRight: "24px"}} />
            <img src={User} alt={User} />
          </Stack>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4} w={"30%"} >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                px={2}
                href={navItem.href ?? "#"}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
                className="navbarRoutes"
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Offers",
    href: "#",
  },
  {
    label: "Stories",
    href: "#",
  },
  {
    label: "TataPay",
    href: "#",
  },
  {
    label: "NeuPass",
    href: "#",
  },
];

const logos = [cart, notification, User];
