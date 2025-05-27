import {
  Box,
  Image,
  IconButton,
  Text,
  Flex,
  HStack,
  useBoolean,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?...",
    title: "Mountain Landscape",
    description: "Breathtaking mountain vista at golden hour",
  },
  {
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?...",
    title: "Forest Path",
    description: "Serene woodland trail leading into mystery",
  },
  {
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?...",
    title: "Ocean Waves",
    description: "Powerful waves crashing against rocky shores",
  },
  {
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?...",
    title: "Desert Dunes",
    description: "Endless golden sand dunes under starlit sky",
  },
  {
    url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?...",
    title: "Lake Reflection",
    description: "Perfect mirror reflection on pristine lake",
  },
];

const progressKeyframes = keyframes`
  0% { width: 0% }
  100% { width: 100% }
`;

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useBoolean(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setIsTransitioning(false);
    }, 150);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      setIsTransitioning(false);
    }, 150);
  }, [isTransitioning]);

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 150);
  };

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  return (
    <Box pos="relative" w="full" h="100vh" bg="black" overflow="hidden">
      {/* Main Image Layer */}
      {images.map((img, idx) => (
        <Box
          key={idx}
          pos="absolute"
          inset={0}
          transition="all 1s ease-in-out"
          opacity={idx === currentIndex ? 1 : 0}
          transform={idx === currentIndex ? "scale(1)" : "scale(1.05)"}
          zIndex={idx === currentIndex ? 10 : 0}
        >
          <Image
            src={img.url}
            alt={img.title}
            objectFit="cover"
            w="full"
            h="full"
          />
          <Box
            pos="absolute"
            inset={0}
            bgGradient="linear(to-t, blackAlpha.700, transparent, blackAlpha.300)"
          />
        </Box>
      ))}

      {/* Loading Spinner */}
      {isTransitioning && (
        <Flex
          pos="absolute"
          inset={0}
          zIndex={20}
          align="center"
          justify="center"
          bg="blackAlpha.400"
        >
          <Box
            w="32px"
            h="32px"
            border="2px solid"
            borderColor="whiteAlpha.300"
            borderTopColor="white"
            borderRadius="full"
            animation="spin 1s linear infinite"
          />
        </Flex>
      )}

      {/* Navigation */}
      <IconButton
        icon={<ChevronLeft />}
        onClick={prevSlide}
        pos="absolute"
        left={6}
        top="50%"
        transform="translateY(-50%)"
        zIndex={30}
        bg="whiteAlpha.100"
        color="white"
        border="1px solid"
        borderColor="whiteAlpha.300"
        isDisabled={isTransitioning}
        aria-label="Previous"
        _hover={{ bg: "whiteAlpha.300", transform: "scale(1.1)" }}
        _active={{ transform: "scale(0.95)" }}
      />
      <IconButton
        icon={<ChevronRight />}
        onClick={nextSlide}
        pos="absolute"
        right={6}
        top="50%"
        transform="translateY(-50%)"
        zIndex={30}
        bg="whiteAlpha.100"
        color="white"
        border="1px solid"
        borderColor="whiteAlpha.300"
        isDisabled={isTransitioning}
        aria-label="Next"
        _hover={{ bg: "whiteAlpha.300", transform: "scale(1.1)" }}
        _active={{ transform: "scale(0.95)" }}
      />

      {/* Play/Pause */}
      <IconButton
        icon={isPlaying ? <Pause /> : <Play />}
        onClick={setIsPlaying.toggle}
        pos="absolute"
        top={6}
        right={6}
        zIndex={30}
        bg="whiteAlpha.100"
        color="white"
        border="1px solid"
        borderColor="whiteAlpha.300"
        aria-label="Toggle play"
        _hover={{ bg: "whiteAlpha.300", transform: "scale(1.1)" }}
        _active={{ transform: "scale(0.95)" }}
      />

      {/* Title & Description */}
      <Box pos="absolute" bottom={20} left={6} right={6} zIndex={30}>
        <Box
          bg="blackAlpha.600"
          border="1px solid"
          borderColor="whiteAlpha.300"
          borderRadius="2xl"
          p={6}
        >
          <Text fontSize="3xl" fontWeight="bold" color="white" mb={2}>
            {images[currentIndex].title}
          </Text>
          <Text fontSize="lg" color="whiteAlpha.900">
            {images[currentIndex].description}
          </Text>
        </Box>
      </Box>

      {/* Dots */}
      <HStack
        pos="absolute"
        bottom={6}
        left="50%"
        transform="translateX(-50%)"
        zIndex={30}
        spacing={3}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            w="12px"
            h="12px"
            borderRadius="full"
            bg={index === currentIndex ? "white" : "whiteAlpha.500"}
            cursor="pointer"
            onClick={() => goToSlide(index)}
            pos="relative"
            _hover={{ transform: "scale(1.2)", bg: "whiteAlpha.700" }}
          >
            {index === currentIndex && (
              <Box
                pos="absolute"
                inset={0}
                borderRadius="full"
                bg="white"
                opacity={0.2}
                animation="pulse 1.5s infinite"
              />
            )}
          </Box>
        ))}
      </HStack>

      {/* Progress Bar */}
      {isPlaying && (
        <Box
          pos="absolute"
          top={0}
          left={0}
          w="full"
          h="1"
          bg="whiteAlpha.300"
          zIndex={30}
        >
          <Box
            h="full"
            bgGradient="linear(to-r, blue.400, purple.500)"
            animation={`${progressKeyframes} 3s linear infinite`}
          />
        </Box>
      )}
    </Box>
  );
};

export default ImageCarousel;
