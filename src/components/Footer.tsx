import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Link,
  Icon,
  Image,
} from "@chakra-ui/react";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="black" px={{ base: 6, md: 20 }} py={12}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        wrap="wrap"
      >
        {/* Left Section: Logo and Description */}
        <Box maxW="300px" mb={{ base: 10, md: 0 }}>
          <Flex align="center" mb={4}>
            <Image
              src="/logo.png"
              alt="Logo"
              boxSize="100px"
              objectFit="contain"
            />
          </Flex>
          <Text fontSize="sm" color="gray.600" mb={6}>
            mediaPro is a premier technical production company based in the UAE,
            with a prominent presence in the Middle East, Asia and Europe.
          </Text>

          <Text fontWeight="medium" mb={2}>
            Follow Us
          </Text>
          <HStack spacing={4}>
            <Link href="#" isExternal>
              <Icon as={FaLinkedinIn} w={5} h={5} color="gray.600" />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaInstagram} w={5} h={5} color="gray.600" />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaFacebookF} w={5} h={5} color="gray.600" />
            </Link>
          </HStack>
        </Box>

        {/* Columns Section */}
        <Flex flexWrap="wrap" justify="space-between" flex="1" ml={{ md: 20 }}>
          {/* Column 1 */}
          <VStack align="start" spacing={2} minW="150px" mb={8}>
            <Text fontWeight="bold" color="goldenrod">
              Explore mediaPro
            </Text>
            <Link color="gray.600">About Us</Link>
            <Link color="gray.600">Our Legacy</Link>
            <Link color="gray.600">Vision</Link>
            <Link color="gray.600">Mission</Link>
            <Link color="gray.600">Group of Companies</Link>
          </VStack>

          {/* Column 2 */}
          <VStack align="start" spacing={2} minW="150px" mb={8}>
            <Text fontWeight="bold" color="goldenrod">
              Projects
            </Text>
            <Link color="gray.600">Ceremonies</Link>
            <Link color="gray.600">Concerts & Festivals</Link>
            <Link color="gray.600">Special Events</Link>
            <Link color="gray.600">Sports</Link>
            <Link color="gray.600">Corporate Events</Link>
            <Link color="gray.600">Trade Shows</Link>
          </VStack>

          {/* Column 3 */}
          <VStack align="start" spacing={2} minW="150px" mb={8}>
            <Text fontWeight="bold" color="goldenrod">
              Products & Services
            </Text>
            <Link color="gray.600">Audio</Link>
            <Link color="gray.600">Video</Link>
            <Link color="gray.600">Lighting</Link>
            <Link color="gray.600">Rigging</Link>
            <Link color="gray.600">Power</Link>
            <Link color="gray.600">Backline</Link>
            <Link color="gray.600">Staging</Link>
            <Link color="gray.600">Automation</Link>
            <Link color="gray.600">Stage Effects</Link>
          </VStack>

          {/* Column 4 */}
          <VStack align="start" spacing={2} minW="150px" mb={8}>
            <Text fontWeight="bold" color="goldenrod">
              Insights
            </Text>
            <Link color="gray.600">News</Link>
            <Link color="gray.600">Showcase</Link>
            <Link color="gray.600">Recognition</Link>
            <Link color="gray.600">New addition</Link>
            <Link color="gray.600">Training</Link>
            <Link color="gray.600">Partnership</Link>
          </VStack>
        </Flex>
      </Flex>

      <Box textAlign="center" pt={10} fontSize="sm" color="gray.500">
        Copyright © 2024 mediaPro International. All rights reserved.
      </Box>
    </Box>
  );
};

export default Footer;
