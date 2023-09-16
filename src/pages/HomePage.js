import React from "react";
import { Flex, Box, Text, VStack } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Box height={"100vh"} width={"100%"} bgColor={"primary.bg"}>
        <Flex>
            <VStack m={"10%"} align="start">
                <Text color={"white"} fontWeight={"bold"} fontSize={{ base: "4xl", md: "5xl" }} mb={"1rem"} mt={{ base: "6rem", md: "none" }}>hello, im ryan.</Text>
                <Text color={"primary.gray"} fontWeight={"bold"} fontSize={{ base: "xl", md: "3xl" }}>full stack developer & <br/> student</Text>
            </VStack>
        </Flex>
    </Box>
  )
}

export default HomePage