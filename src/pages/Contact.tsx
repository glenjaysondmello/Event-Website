import { useRef } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  VStack,
  HStack,
  Text,
  Icon,
  Link,
  useToast,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import * as z from "zod";
import emailjs from "@emailjs/browser";

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  address: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async () => {
    try {
      if (!formRef.current) return;

      await emailjs.sendForm(
        "service_k9b8co2",
        "template_hucnx27",
        formRef.current,
        "Q19M-h5lOEhdYtq8D"
      );
      toast({
        title: "Message sent successfully!",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      reset();
    } catch (error) {
      console.error(error);
      toast({
        title: "Failed to send message.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <Box px={4} py={10} maxW="6xl" mx="auto">
      <Text fontSize="3xl" fontWeight="bold" mb={4}>
        Contact Us
      </Text>
      <Text fontSize="md" mb={8}>
        We'd love to hear from you. Please reach out through any of the
        following methods or fill out the form below.
      </Text>

      <HStack spacing={10} alignItems="flex-start" flexWrap="wrap">
        <VStack align="start" spacing={4} flex={1}>
          <HStack>
            <Icon as={FaPhoneAlt} color="orange.400" />
            <Link href="tel:+971 4 338 6835">+971 4 338 6835</Link>
          </HStack>
          <HStack>
            <Icon as={FaEnvelope} color="orange.400" />
            <Link href="mailto:contact@yourdomain.com">
              contact@yourdomain.com
            </Link>
          </HStack>
          <HStack spacing={4} pt={4}>
            <Link href="https://instagram.com" isExternal>
              <Icon as={FaInstagram} boxSize={6} />
            </Link>
            <Link href="https://facebook.com" isExternal>
              <Icon as={FaFacebook} boxSize={6} />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <Icon as={FaLinkedin} boxSize={6} />
            </Link>
          </HStack>
        </VStack>

        <Box as="form" ref={formRef} onSubmit={handleSubmit(onSubmit)} flex={1}>
          <VStack spacing={4}>
            <HStack spacing={4} w="100%">
              <FormControl isInvalid={!!errors.firstName}>
                <FormLabel>First Name</FormLabel>
                <Input {...register("firstName")} name="firstName" />
                <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.lastName}>
                <FormLabel>Last Name</FormLabel>
                <Input {...register("lastName")} name="lastName" />
                <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
              </FormControl>
            </HStack>
            <FormControl isInvalid={!!errors.email}>
              <FormLabel>Email</FormLabel>
              <Input {...register("email")} name="email" />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input {...register("address")} name="address" />
            </FormControl>
            <FormControl isInvalid={!!errors.message}>
              <FormLabel>Message</FormLabel>
              <Textarea {...register("message")} name="message" />
              <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
            </FormControl>
            <Button type="submit" colorScheme="orange" isLoading={isSubmitting}>
              Send Message
            </Button>
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default Contact;
