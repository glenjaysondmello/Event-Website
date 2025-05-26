import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
  Collapse,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", current: location.pathname === "/" },
    { name: "About", href: "/about", current: location.pathname === "/about" },
    {
      name: "Services",
      href: "/services",
      current: location.pathname === "/services",
    },
    {
      name: "Contact",
      href: "/contact",
      current: location.pathname === "/contact",
    },
  ];

  const navBg = useColorModeValue("gray.900", "gray.800");
  const navText = useColorModeValue("white", "white");

  return (
    <Box bg={navBg} px={4} position="fixed" w="100%" top="0" zIndex="999">
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        maxW="7xl"
        mx="auto"
      >
        <Link to="/">
          <Flex align="center" gap={2}>
            <Image
              src="/logo.png"
              alt="Logo"
              boxSize="50px"
              objectFit="contain"
            />
            <Box
              w={2}
              h={2}
              bg="yellow.400"
              borderRadius="full"
              animation="pulse 2s infinite"
            />
          </Flex>
        </Link>

        {/* Desktop Nav */}
        <HStack spacing={8} display={{ base: "none", sm: "flex" }}>
          {navigation.map((item) => (
            <Link key={item.name} to={item.href}>
              <Text
                position="relative"
                fontSize="sm"
                fontWeight="medium"
                color={item.current ? "yellow.400" : navText}
                _hover={{ color: "yellow.400" }}
              >
                {item.name}

                {item.current && (
                  <Box
                    position="absolute"
                    bottom={-1}
                    left={0}
                    right={0}
                    height="2px"
                    bg="yellow.400"
                    borderRadius="md"
                  />
                )}
              </Text>
            </Link>
          ))}
        </HStack>

        {/* Mobile Button */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ sm: "none" }}
          onClick={onToggle}
          color="gray.300"
          _hover={{ color: "yellow.400", bg: "gray.700" }}
        />
      </Flex>

      {/* Mobile Menu */}
      <Collapse in={isOpen} animateOpacity>
        <Box pb={4} display={{ sm: "none" }} bg="gray.900">
          <VStack align="start" spacing={1} px={4}>
            {navigation.map((item) => (
              <Link key={item.name} to={item.href} onClick={onToggle}>
                <Text
                  w="full"
                  px={3}
                  py={2}
                  rounded="md"
                  fontSize="md"
                  fontWeight="medium"
                  bg={item.current ? "yellow.400" : "transparent"}
                  color={item.current ? "black" : "gray.300"}
                  _hover={{
                    bg: "yellow.50",
                    color: "black",
                  }}
                >
                  {item.name}
                </Text>
              </Link>
            ))}
          </VStack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navbar;
