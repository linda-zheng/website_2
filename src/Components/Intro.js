import React from 'react';
import './CSS/Section.css';

import profilePic from '../Assets/profilepic.jpg';

import { Container, Box } from '@material-ui/core';

const Intro = () => {
  return (
    <Container maxWidth="lg">
      <Box display="flex" flexDirection="column">
        <Box p={3}>
          <img alt="Linda" src={profilePic} style={{ height: 'auto', width: '13vw', borderRadius: "50%"}}/>
        </Box>
        <Box>
          <div className="normal">
          <p>I'm Linda! It's nice to e-meet you. &#128075;</p>
          <p>I'm a third-year software engineering co-op student at the University of Waterloo.</p>
          <p>I've put the important links at the very top of the page &#9757;, but feel free to keep scrolling down &#128071; to learn more!</p>
          </div>
        </Box>
      </Box>
    </Container>
  )
}

export default Intro;