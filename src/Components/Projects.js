import React from 'react';
import ProjectCard from './ProjectCard';

import projectDescriptions from '../Assets/projectDescriptions';

import { Container, Box } from '@material-ui/core';

const Projects = () => {
    var projectCards = []
    for (var i = 0; i < projectDescriptions.projectDescriptions.length; i++) {
      projectCards.push(ProjectCard(projectDescriptions.projectDescriptions[i], i))
    }
    return (
      <Container maxWidth="lg">
      <Box display="flex" flexDirection="width" flexWrap="wrap" justifyContent="center">
        {projectCards}
      </Box>
      </Container>
    )
  }
  
export default Projects;