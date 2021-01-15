import React from 'react';
import WorkCard from './WorkCard';

import workDescriptions from '../Assets/workDescriptions';

import { Container, Box } from '@material-ui/core';

const WorkExp = () => {
    var workCards = []
    for (var i = 0; i < workDescriptions.workDescriptions.length; i++) {
      workCards.push(WorkCard(workDescriptions.workDescriptions[i], i))
    }
    return (
      <Container maxWidth="lg">
        {workCards}
      </Container>
    )
  }
  
export default WorkExp;