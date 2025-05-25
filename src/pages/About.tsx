import { Box, Heading, Text } from "@chakra-ui/react";
import Gallery from "../components/Gallery";
import VideoSection from "../components/VideoSection";

const About = () => {
  return (
    <>
      <Box maxW="6xl" mx="auto" px={4} py={10}>
        <Heading as="h2" size="xl" mb={4}>
          About Us
        </Heading>
        <Text fontSize="md" color="gray.700">
          We are a team of passionate innovators committed to delivering
          impactful digital experiences. Our journey began with a shared belief
          in the power of technology to transform lives. Today, we continue to
          build scalable, secure, and user-friendly applications that empower
          businesses and individuals to achieve more.
        </Text>
      </Box>
      <Gallery />
      <VideoSection />
    </>
  );
};

export default About;
