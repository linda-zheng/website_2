import React from 'react';
import ProjectCard from './ProjectCard';

import projectDescriptions from '../Assets/projectDescriptions';

import { Container, Grid } from '@material-ui/core';

const Projects = () => {
    var projectCards = []
    for (var i = 0; i < projectDescriptions.projectDescriptions.length; i++) {
      projectCards.push(ProjectCard(projectDescriptions.projectDescriptions[i], i))
    }
    return (
      <Container maxWidth="lg">
      <Grid container spacing={3}>
        {projectCards}
      </Grid>
      </Container>
    )
  }
  
export default Projects;