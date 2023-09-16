import { Box, Text, Flex } from "@chakra-ui/react";
import ProjectsGrid from "../components/ProjectsGrid";

const ProjectsPage = ({ projectsScroll }) => {
  return (
    <Box
      height={{ base: "auto", md: "100vh" }}
      width={"100%"}
      bgColor={"primary.bg"}
      ref={projectsScroll}
    >
        <Text
        color={"primary.main"}
        fontSize={"4xl"}
        fontWeight={"bold"}
        pt={"3rem"}
        pl={"4rem"}
      >
        .projects
      </Text>
      <Flex>
      <ProjectsGrid />
      </Flex>
    </Box>
  )
}

export default ProjectsPage