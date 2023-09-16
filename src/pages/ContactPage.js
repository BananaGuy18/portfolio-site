import { Box, Text } from "@chakra-ui/react";
import ContactGrid from "../components/ContactGrid";

const ContactPage = ({ contactScroll }) => {
  return (
    <Box
      height={{ base: "auto", md: "40vh" }}
      width={"100%"}
      bgColor={"primary.bg"}
      pb={{ base: "5rem", md: "none" }}
      ref={contactScroll}
    >
      <Text
        color={"primary.main"}
        fontSize={"4xl"}
        fontWeight={"bold"}
        pt={"3rem"}
        pl={"4rem"}
      >
        .contact
      </Text>
      <ContactGrid contactScroll={contactScroll} />
    </Box>
  );
};

export default ContactPage;
