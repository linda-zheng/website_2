import React from 'react';

function WorkCard(jobDescription, key) {
    return (
        <GridItem rowSpan={{ base: 2 }} colSpan={{ base: 20 }} mb={{ base: "3vh" }} key={key}>
            <a href={jobDescription.link}>
                <div className="WorkExperienceTextContainer">
                    <Flex className="WorkExperienceCard" direction="row">
                        <Box flexBasis={{ md: "35%", lg: "30%", xl: "25%" }} className="WorkExperienceImageWrapper">
                            <img src={jobDescription.image} className="WorkExperienceImage" alt="work experience" />
                        </Box>
                        <Stack flexBasis={{ base: "100%", md: "65%", lg: "70%", xl: "75%" }} ml={{ md: "1.5vw" }} p={{ base: "2vh", md: "1.5vh" }}>
                            <Text className="WorkExperienceTextTitle" fontSize={{ base: "30px", md: "38px", lg: "40px" }} >{jobDescription.title}</Text>
                            <Text className="WorkExperienceTextPosition" fontSize={{ base: "20px", md: "20px", lg: "20px" }}>{jobDescription.jobPosition} - {jobDescription.location}</Text>
                            <Text fontSize={{ base: "17px", lg: "19px" }} className="WorkExperienceCardText">{jobDescription.text}</Text>
                        </Stack>
                    </Flex>
                </div>
            </a>
        </GridItem>
    );
}

export default WorkCard;