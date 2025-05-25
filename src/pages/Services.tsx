// ServicesSection.jsx
import React from "react";
import { Box, SimpleGrid, Icon, Text, Heading, VStack } from "@chakra-ui/react";
import { FaTools, FaShieldAlt, FaRocket, FaUsers } from "react-icons/fa";

const services = [
  {
    icon: FaTools,
    title: "Custom Solutions",
    description: "Tailored services to meet your unique business needs.",
  },
  {
    icon: FaShieldAlt,
    title: "Secure & Reliable",
    description: "Top-tier security with dependable performance.",
  },
  {
    icon: FaRocket,
    title: "Fast Deployment",
    description: "Get started quickly with our streamlined process.",
  },
  {
    icon: FaUsers,
    title: "24/7 Support",
    description: "Dedicated team ready to assist you anytime.",
  },
];

const Services = () => {
  return (
    <Box px={4} py={10} maxW="7xl" mx="auto">
      <Heading as="h2" size="xl" mb={8} textAlign="center">
        Our Services
      </Heading>
      <SimpleGrid columns={[1, 2, 2, 4]} spacing={8}>
        {services.map((service, index) => (
          <Box
            key={index}
            p={6}
            borderWidth={1}
            borderRadius="xl"
            shadow="md"
            _hover={{ shadow: "lg", transform: "translateY(-4px)" }}
            transition="all 0.3s ease"
          >
            <VStack spacing={4} align="start">
              <Icon as={service.icon} boxSize={10} color="orange.400" />
              <Heading as="h3" size="md">
                {service.title}
              </Heading>
              <Text fontSize="sm" color="gray.600">
                {service.description}
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Services;
