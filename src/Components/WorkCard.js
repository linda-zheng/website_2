import React from 'react';

import "./CSS/Card.css"

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import Collapse from '@material-ui/core/Collapse';
import { Container, Box, Grid, List, ListItem } from '@material-ui/core';

function WorkCard(props, key) {
    const [expanded, setExpanded] = React.useState(false);
    const [btnText, setBtnText] = React.useState('Show More');

    const handleExpandClick = () => {
        setExpanded(!expanded);
        changeButtonName();
    };
    const changeButtonName = () => {
        if (btnText === 'Show More') {
            setBtnText('Show Less');
        } else {
            setBtnText('Show More');
        }        
    }
    var descriptionList = []
    for (var i = 0; i < props.description.length; i++) {
        var tempDescription = []
        for (var j = 0; j < props.description[i].length; j++) {
            if (j%2 == 0){
                tempDescription.push(<span className="description">{props.description[i][j]}</span>)
            } else {
                tempDescription.push(<span className="keyword">{props.description[i][j]}</span>)
            }
        }
        descriptionList.push(<ListItem key={i}><div> -&emsp;{tempDescription}</div></ListItem>)
    }

  return (
    <Box className="card-shadow" my="30px" key={key}>
        <Card variant="outlined">
        <CardContent className="text-left">
            <Box display="flex" flexDirection="width" px="30px">
                <Box display="flex" alignItems="center">
                    <img src={props.image} style={{ height: 'auto', width: '10vh', bottom: "0"}}/>
                </Box>
                <Box p={3}>
                    <Grid container alignItems="baseline">
                        <Grid container item xs={6} justify="flex-start">
                            <div className="title">{props.title}</div>
                        </Grid>
                        <Grid container item xs={6} justify="flex-end">
                            <div className="date">{props.date}</div>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid container item xs={6} justify="flex-start">
                            <div className="position">{props.position}</div>
                        </Grid>
                        <Grid container item xs={6} justify="flex-end">
                            <div className="location">{props.location}</div>
                        </Grid>
                    </Grid>
                    <hr color="#BAB2B5" style={{width:"100%", textAlign:"left", marginLeft:"0"}}/>
                    <div className="blurb">{props.blurb}</div>
                </Box>
            </Box>
        </CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent className="text-left">
                <Box display="flex" flexDirection="width" px="50px">
                    <List>
                        {descriptionList}
                    </List>
                </Box>       
            </CardContent>
        </Collapse>
        <Button size="small" onClick={handleExpandClick}>{btnText}</Button>
        </Card>    
    </Box>
  );
}

export default WorkCard;