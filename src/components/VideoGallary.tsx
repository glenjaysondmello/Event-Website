import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import ReactPlayer from "react-player/lazy"; // Lazy loads the player

const videoUrls = [
  "https://youtu.be/WOZSI2_m-3o?si=HtorTmvweQzjnWF9",
  "https://youtu.be/PuozpNLfz7I?si=fL9YncwNQ8DgPg8e",
  "https://youtu.be/he1KGC9dkeE?si=s5htIGC6QcuSly8i",
];

const VideoGallery = () => {
  return (
    <Box maxW="6xl" mx="auto" px={4} py={10}>
      <Heading as="h2" size="xl" mb={6} textAlign="center">
        Video Gallery
      </Heading>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
        {videoUrls.map((url, index) => (
          <Box
            key={index}
            overflow="hidden"
            borderRadius="lg"
            boxShadow="md"
            position="relative"
            paddingTop="56.25%"
          >
            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
            >
              <ReactPlayer
                url={url}
                width="100%"
                height="100%"
                style={{ borderRadius: "12px" }}
                controls
                light
              />
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default VideoGallery;
