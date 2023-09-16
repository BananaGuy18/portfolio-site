import { Text, Flex, Box, Link } from "@chakra-ui/react";

const ContactItem = ({ item, contactScroll }) => {
  return (
    <Box
      ml={{ base: "5rem", md: "5rem" }}
      mt={{ base: "5rem", md: "5rem" }}
    >
      <Link
        _hover={{ textDecoration: "none" }}
        href={item.link !== "" ? item.link : contactScroll}
      >
        <Text
          fontSize={{ base: "xl", md: "3xl" }}
          color={"white"}
          fontWeight={"bold"}
          _hover={{
            color: "primary.main",
            transition: "all 0.3s ease",
          }}
        >
          <Text
            color={"primary.main"}
            display={"inline"}
          >
            /
          </Text>{" "}
          {item.name}
        </Text>
        <Flex alignItems={"center"}>
          {item.icon}
          <Text
            ml={"0.5rem"}
            color={"primary.gray"}
            fontWeight={"medium"}
            fontStyle={"italic"}
          >
            {item.handle}
          </Text>
        </Flex>
      </Link>
    </Box>
  );
};

export default ContactItem;
