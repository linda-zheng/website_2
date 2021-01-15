import React from 'react';

import "./CSS/Card.css"
import ReactCardFlip from 'react-card-flip';
import { Container, Box, Grid, List, ListItem, Chip, Card, CardContent } from '@material-ui/core';

function ProjectCard(props, key) {
    const [isFlipped, setIsFlipped] = React.useState(false);
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }

    var techStack = []
    for (var i = 0; i < props.techStack.length; i++) {
        techStack.push(<Chip variant="outlined" label={props.techStack[i]} style={{marginRight:"3px", marginBottom: "3px",}}/>)
    }

  return (
    <Box onMouseEnter={handleClick} onMouseLeave={handleClick} m={3}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" key={key}>
            <Card variant="outlined" className="card-shadow" style={{ width: "350px", height: "300px"}} >
                <Box p="30px" textAlign="left" style={{height: "80%"}}>
                <div style={{bottom: "60%", position: "absolute", width:"85%"}} className="title">{props.title}</div>
                <div style={{bottom: "50%", position: "absolute", width:"85%"}}>
                <hr color="#BAB2B5" style={{width:"50%", textAlign:"left", marginLeft:"0", marginTop: "12px", maginBottom: "12px"}}/>
                </div>
                <div style={{top: "55%", position: "absolute", width:"85%"}}>
                {techStack}
                </div>
                </Box>
            </Card> 
            <Card variant="outlined" className="card-shadow" style={{ width: "350px", height: "300px"}}>
                <Box p="30px" style={{height: "80%"}}>
                    <div textAlign="left" className="blurb">{props.blurb}</div>
                    <div style={{bottom: "30px", right:"30px", position: "absolute"}}><a href={props.link}><img src={props.image} style={{ height: 'auto', width: '4vh'}} className="image"/></a></div>
                </Box>
            </Card>
      </ReactCardFlip>
    </Box>
  );
}
/*<Grid item xs={4} key={key}>
        <Card variant="outlined" className="card-shadow" style={{ height: "100%"}}>
        <CardContent className="text-left">
            <Box p="30px">
            <Grid container spacing={2}>
                <Grid container item xs={12}>
                    <Grid container item xs={9} justify="flex-start">
                    <div className="title">{props.title}</div>
                    </Grid>
                    <Grid container item xs={3} justify="flex-end">
                    <a href={props.link}><img src={props.image} style={{ height: 'auto', width: '3vh', bottom: "0"}} className="image"/></a>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                
                    <hr color="#BAB2B5" style={{width:"50%", textAlign:"left", marginLeft:"0", marginTop: "12px", maginBottom: "12px"}}/>
                    <div className="blurb">{props.blurb}</div>
                </Grid>
            </Grid>
            </Box>
        </CardContent>
        </Card>    
    </Grid>*/
export default ProjectCard;