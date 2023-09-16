import React from "react";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import { ABOUT_ITEMS } from "../constants";
import AboutItem from "../components/AboutItem";

const AboutPage = ({ aboutScroll }) => {
  return (
    <Box
      height={{ base: "auto", md: "100vh" }}
      width={"100%"}
      bgColor={"primary.bg"}
      ref={aboutScroll}
    >
      <Text
        color={"primary.main"}
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight={"bold"}
        pt={"3rem"}
        pl={"4rem"}
      >
        .about
      </Text>
      <SimpleGrid
        columns={{ base: "1", md: "3"}}
        mx={"3rem"}
      >
        {ABOUT_ITEMS.map((item, index) => (
          <AboutItem item={item} index={index} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default AboutPage;
