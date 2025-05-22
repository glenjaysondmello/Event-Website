import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  Container,
} from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Box position="relative" height="100vh" overflow="hidden">
      <Box
        as="video"
        autoPlay
        loop
        muted
        playsInline
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        objectFit="cover"
        zIndex={-1}
      >
        <source src="/herovideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Box>

      <Container maxW="container.xl" height="100%">
        <VStack
          justify="center"
          align="center"
          spacing={6}
          height="100%"
          textAlign="center"
        >
          <Heading
            size="2xl"
            color="white"
            textShadow="0 0 10px rgba(0,0,0,0.7)"
          >
            Welcome to PG Events
          </Heading>
          <Text
            fontSize="xl"
            color="white"
            textShadow="0 0 6px rgba(0,0,0,0.5)"
          >
            We deliver high performance, beautiful UI, and a smooth experience
          </Text>
          <Button
            colorScheme="teal"
            size="lg"
            px={8}
            py={6}
            _hover={{ transform: "scale(1.05)" }}
          >
            Get Started
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default HeroSection;
