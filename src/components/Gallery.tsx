import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const images = [
  "https://www.bing.com/th/id/OIP.0GmahDEIb8q6IoUY9hc5kQHaE7?w=244&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  "https://www.bing.com/th/id/OIP.F1Ass4uhEfOmT6w-JP4t7wHaE7?w=246&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  "https://www.bing.com/th/id/OIP.zPBeO44D6CI0xKl9bEdGlwHaE7?w=244&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  "https://www.bing.com/th/id/OIP.1XerdekxkrB8LZ0F7PEmMgHaEK?w=245&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  "https://www.bing.com/th/id/OIP.9c4_ncoq7i5KIRzo0t2WXgHaE8?w=245&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  "https://www.bing.com/th/id/OIP.EAl9jO7qQ00twet6ht052wHaDY?w=244&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
];

const Gallery = () => {
  return (
    <Box maxW="6xl" mx="auto" px={4} py={10}>
      <Heading as="h2" size="xl" mb={6} textAlign="center">
        Gallery
      </Heading>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
        {images.map((src, index) => (
          <Box
            key={index}
            overflow="hidden"
            borderRadius="lg"
            className="zoom-container"
          >
            <LazyLoadImage
              src={src}
              alt={`Gallery ${index + 1}`}
              effect="blur"
              className="zoom-img"
              style={{
                width: "100%",
                height: "240px",
                objectFit: "cover",
                transition: "transform 0.3s",
              }}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Gallery;
