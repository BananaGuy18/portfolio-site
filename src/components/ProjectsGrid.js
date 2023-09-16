import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { PROJECT_ITEMS } from '../constants'
import ProjectItem from './ProjectItem'

const ProjectsGrid = () => {
  return (
    <SimpleGrid columns={{ base: "1", md: "3"}}>
        {PROJECT_ITEMS.map((project, index) => (
            <ProjectItem key={index} project={project} />
        ))}
    </SimpleGrid>
  )
}

export default ProjectsGrid