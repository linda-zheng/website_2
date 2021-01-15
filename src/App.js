import React from 'react';

import './App.css';

import {Box} from '@material-ui/core';

import Section from './Components/Section';
import Intro from './Components/Intro';
import WorkExp from './Components/WorkExp';
import Projects from './Components/Projects';
import Hobbies from './Components/Hobbies';
import ContactMe from './Components/ContactMe';

import Header from './Components/Header';

function App() {
  return (
    <div className="App">
    <Header/>
    <Box display="flex" flexDirection="column" width={1}>
      <Section
        color='light'
        name='Hello!'
        children={<Intro/>}
      />
      <Section
        color = 'dark'
        name='Work Experience'
        children={<WorkExp/>}
      />
      <Section
        color = 'light'
        name='Projects'
        children={<Projects/>}
      />
      <Section
        color = 'dark'
        name='Hobbies'
        children={<Hobbies/>}
      />
      <Section
        color = 'light'
        name='Contact Me'
        children={<ContactMe/>}
      />        
    </Box>
    </div>
  );
}

export default App;
