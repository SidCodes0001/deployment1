import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Navbar } from "../components/Homepage/Navbar";
import note from "../assets/note.png";

export default function Homepage() {
  return (
    <Box padding={8}>
      {/* <Image position={"absolute"} right={0} w={500} src={note} /> */}
      <Heading mt={16} textAlign={"center"} size={"4xl"}>
        Notes App
      </Heading>
      <Text mt={8} maxW={"100%"} textAlign={"center"}>
      WELCOME TO NOTES APPLICATION BY SANYA & SIDAK
       
      </Text>
    </Box>
  );
}
