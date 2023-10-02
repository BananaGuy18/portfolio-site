import { Box, HStack, Button, Link, Text } from "@chakra-ui/react";
import StyleChar from "../functions/StyleChar";

const ProjectItem = ({ project }) => {
  return (
    <Box
      m={"4rem"}
    >
      <Text
        color={"white"}
        fontWeight={"bold"}
        fontSize={"2xl"}
        textAlign={"left"}
      >
        <Text display={"inline"} color={"primary.main"}>/</Text> {project.project_name}
      </Text>
      <Text
        color={"primary.gray"}
        fontWeight={"medium"}
        fontStyle={"italic"}
        fontSize={"lg"}
        textAlign={"left"}
      >
        {project.project_stack.split("").map((char, index) => (
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
        fontWeight={"medium"}
        fontStyle={"italic"}
        fontSize={{ base: "md", md: "lg" }}
        mt={"1rem"}
        textAlign={"left"}
        overflowWrap={"break-word"}
        wordBreak={"break-word"}
      >
        {project.description}
      </Text>
      <HStack mt={"2rem"}>
        {project.live_site_link !== "" ? (
          <Link
            href={project.live_site_link}
            isExternal={"true"}
          >
            <Button
              w={{ base: "4xs", md: "3xs" }}
              p={{ base: "1.6rem", md: "2rem" }}
              bgColor={"primary.main"}
              color={"white"}
              _hover={{
                color: "primary.main",
                bgColor: "transparent",
              }}
            >
              live site
            </Button>
          </Link>
        ) : (
          <></>
        )}
        
        {project.git_repo_link !== "" ? (
          <Link
            href={project.git_repo_link}
            isExternal={"true"}
          >
            <Button
              w={{ base: "4xs", md: "3xs" }}
              p={{ base: "1.6rem", md: "2rem" }}
              bgColor={"primary.main"}
              color={"white"}
              _hover={{
                color: "primary.main",
                bgColor: "transparent",
              }}
            >
              GitHub repository
            </Button>
          </Link>
        ) : (
          <></>
        )}
      </HStack>
    </Box>
  );
};

export default ProjectItem;
