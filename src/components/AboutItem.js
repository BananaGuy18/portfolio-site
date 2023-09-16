import { Flex, Text } from "@chakra-ui/react";
import StyleChar from "../functions/StyleChar";

const AboutItem = ({ item, index }) => {
  return (
    <Flex
      key={index}
      direction={"column"}
      p={"2rem"}
    >
      <Text
        color={"white"}
        fontWeight={"bold"}
        fontSize={{ base: "2xl", md: "3xl" }}
        mb={"1rem"}
      >
        <Text
          color={"primary.main"}
          display={"inline"}
        >
          /
        </Text>{" "}
        {item.title}
      </Text>
      <Text
        color={"primary.gray"}
        fontStyle={"italic"}
        fontWeight={"medium"}
        fontSize={{ base: "lg", md: "xl" }}
        whiteSpace={"pre-wrap"}
        overflow={"scroll"}
      >
        {item.description.split("").map((char, index) => (
          <span
            key={index}
            style={StyleChar(char)}
          >
            {char}
          </span>
        ))}
      </Text>
      <Text
        color={"primary.gray"}
        fontStyle={"italic"}
        fontWeight={"medium"}
        fontSize={"lg"}
        whiteSpace={"pre-wrap"}
        mt={"1rem"}
      >
        {item.smaller}
      </Text>
    </Flex>
  );
};

export default AboutItem;
