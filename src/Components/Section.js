import React from 'react';

import './CSS/Section.css';
import './CSS/Text.css'
import { Box } from '@material-ui/core';

function Section(props) {
    const section_name = <div className='section-title'>{props.name} <hr color="#BAB2B5" width="100px"/></div>
    if (props.color === "dark") {
        return (
            <Box alignItems="center" className="Section-dark" width={1} py={15}>
                {section_name}
                {props.children}
            </Box>
        );
    } 
    return (
        <Box alignItems="center" className="Section-light" width={1} py={15}>
            {section_name}
            {props.children}
        </Box>
    );
}

export default Section;