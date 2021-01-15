import React from 'react';
import './CSS/Section.css';
import './CSS/Header.css';
import {AppBar, Box, Grid} from '@material-ui/core';

import githubIcon from '../Assets/github.svg';
import linkedinIcon from '../Assets/linkedin.svg';
import emailIcon from '../Assets/email.svg';
import resumeIcon from '../Assets/doc.svg';
import pdf from '../Assets/resume.pdf';

function Header(props) {
    return (
        <React.Fragment>
        <AppBar position="fixed" style={{backgroundColor: "rgba(235, 237, 239, 0.6)"}}>
            <Box px="20vw" py={2}>
            <Grid container>
                <Grid container item xs={6} justify="flex-start">
                <div className="heading">Linda Zheng</div>
                </Grid>
                <Grid container item xs={6} justify="flex-end">
                    <a href="https://github.com/thelindazheng"><img src={githubIcon} className="icon"/></a>
                    <a href="https://www.linkedin.com/in/thelindazheng/"><img src={linkedinIcon} className="icon"/></a>
                    <a href="mailto:linda.zheng1@uwaterloo.ca"><img src={emailIcon} className="icon"/></a>
                    <a href={pdf} target="_blank"><img src={resumeIcon} className="icon"/></a>
                </Grid>
            </Grid>
            </Box>
        </AppBar>
        </React.Fragment>
    )
}

export default Header;