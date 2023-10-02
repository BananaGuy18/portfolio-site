import React, { useEffect } from "react";
import { Flex, Box, Text, VStack } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";

const HomePage = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 1, ease: "easeIn", delay: 1 }});
  }, [controls]);

  return (
    <Box
      height={"100vh"}
      width={"100%"}
      bgColor={"primary.bg"}
    >
      <Flex>
        <VStack
          m={"10%"}
          align="start"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={controls}
          >
            <Text
              color={"white"}
              fontWeight={"bold"}
              fontSize={{ base: "4xl", md: "5xl" }}
              mb={"1rem"}
              mt={{ base: "6rem", md: "3rem" }}
            >
              hello, im ryan.
            </Text>
            <Text
              color={"primary.gray"}
              fontWeight={"bold"}
              fontSize={{ base: "xl", md: "2xl" }}
            >
              full stack developer & <br /> student
            </Text>
          </motion.div>
        </VStack>
      </Flex>
    </Box>
  );
};

export default HomePage;
