import { Box, Image, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const images = [
  "https://www.bing.com/th/id/OIP.0GmahDEIb8q6IoUY9hc5kQHaE7?w=244&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  "https://www.bing.com/th/id/OIP.F1Ass4uhEfOmT6w-JP4t7wHaE7?w=246&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  "https://www.bing.com/th/id/OIP.zPBeO44D6CI0xKl9bEdGlwHaE7?w=244&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  "https://www.bing.com/th/id/OIP.1XerdekxkrB8LZ0F7PEmMgHaEK?w=245&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  "https://www.bing.com/th/id/OIP.9c4_ncoq7i5KIRzo0t2WXgHaE8?w=245&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  "https://www.bing.com/th/id/OIP.EAl9jO7qQ00twet6ht052wHaDY?w=244&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
];

const Carousel3D = () => {
  const [current, setCurrent] = useState(0);
  const radius = 250;
  const imageCount = images.length;

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % imageCount);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + imageCount) % imageCount);
  };

  return (
    <Box position="relative" w="full" h="500px" overflow="hidden">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        {images.map((src, index) => {
          const angle = (360 / imageCount) * (index - current);
          return (
            <Image
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              position="absolute"
              transform={`rotateY(${angle}deg) translateZ(${radius}px)`}
              transition="transform 0.5s ease"
              boxShadow="lg"
              borderRadius="md"
              w="200px"
              h="300px"
              objectFit="cover"
            />
          );
        })}
      </Box>

      <IconButton
        icon={<ArrowBackIcon />}
        position="absolute"
        top="50%"
        left="5"
        transform="translateY(-50%)"
        onClick={prevImage}
        aria-label="Previous"
      />
      <IconButton
        icon={<ArrowForwardIcon />}
        position="absolute"
        top="50%"
        right="5"
        transform="translateY(-50%)"
        onClick={nextImage}
        aria-label="Next"
      />
    </Box>
  );
};

export default Carousel3D;
