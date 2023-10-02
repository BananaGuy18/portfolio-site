import { VStack, Text, Flex } from "@chakra-ui/react";
import ProjectsGrid from "../components/ProjectsGrid";

const ProjectsPage = ({ projectsScroll }) => {
  return (
    <Flex
      width={"100%"}
      bgColor={"primary.bg"}
      ref={projectsScroll}
    >
      <VStack alignItems={"flex-start"}>
        <Text
          color={"primary.main"}
          textAlign={"left"}
          fontSize={"4xl"}
          fontWeight={"bold"}
          pt={"3rem"}
          pl={"4rem"}
        >
          .projects
        </Text>
        {/* <Flex> */}
        <ProjectsGrid />
      </VStack>
      {/* </Flex> */}
    </Flex>
  );
};

export default ProjectsPage;
