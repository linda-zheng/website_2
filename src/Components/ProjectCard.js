import React from 'react';

import "./CSS/Card.css"

import { Container, Box, Grid, List, ListItem, Chip, Card, CardContent } from '@material-ui/core';

function ProjectCard(props, key) {
    var techStack = []
    for (var i = 0; i < props.techStack.length; i++) {
        techStack.push(<Chip variant="outlined" label={props.techStack[i]}/>)
    }

    console.log(techStack)
  return (
    <Grid item xs={6} key={key}>
        <Card variant="outlined" className="card-shadow" style={{ height: "100%"}}>
        <CardContent className="text-left">
            <Box p="30px">
            <Grid container>
                <Grid item xs={12}>
                <div className="title">{props.title}</div><br/>
                {techStack}<br/>
                <hr color="#BAB2B5" style={{width:"50%", textAlign:"left", marginLeft:"0"}}/>
                </Grid>
                <Grid container item xs={12}>
                    <Grid container item xs={9} justify="flex-start">
                    <div className="blurb">{props.blurb}</div>
                    </Grid>
                    <Grid container item xs={3} justify="flex-end">
                    <a href={props.link}><img src={props.image} style={{ height: 'auto', width: '5vh', bottom: "0"}} className="image"/></a>
                    </Grid>
                </Grid>
            </Grid>
            </Box>
        </CardContent>
        </Card>    
    </Grid>
  );
}

export default ProjectCard;