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

// import React from "react";
// import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

// const videos = [
//   "/videointro.mp4",
//   // "/videos/sample2.mp4",
//   // "/videos/sample3.mp4",
// ];

// export default function VideoSection() {
//   return (
//     <Box maxW="6xl" mx="auto" px={4} py={10}>
//       <Heading as="h2" size="xl" mb={6} textAlign="center">
//         Local Video Gallery
//       </Heading>

//       <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
//         {videos.map((src, index) => (
//           <Box
//             key={index}
//             overflow="hidden"
//             borderRadius="lg"
//             boxShadow="md"
//             bg="black"
//           >
//             <video
//               controls
//               preload="metadata"
//               style={{
//                 width: "100%",
//                 height: "auto",
//                 borderRadius: "10px",
//               }}
//             >
//               <source src={src} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </Box>
//         ))}
//       </SimpleGrid>
//     </Box>
//   );
// }
