import ReactPlayer from "react-player";
import { Box, Heading } from "@chakra-ui/react";

const VideoSection = () => {
  return (
    <Box px={4} py={10} maxW="6xl" mx="auto">
      <Heading as="h2" size="xl" mb={6} textAlign="center">
        Watch Our Story
      </Heading>
      <Box
        position="relative"
        paddingTop="56.25%"
        borderRadius="xl"
        overflow="hidden"
        boxShadow="md"
      >
        <ReactPlayer
          url="https://youtu.be/VOeApNjlb8M?si=btM8-egvxA4uG4hG"
          width="100%"
          height="100%"
          style={{ position: "absolute", top: 0, left: 0 }}
          controls
        />
      </Box>
    </Box>
  );
};

export default VideoSection;
