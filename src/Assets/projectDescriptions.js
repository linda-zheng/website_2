import githubIcon from "./github.svg"

function toDictionary(image, title, blurb, techStack, link) {
    return {
        image : image,
        title : title,
        blurb : blurb,
        techStack : techStack,
        link: link,
    }
    
}

var projectDescriptions = [
    new toDictionary(
        githubIcon,
        "Multiplayer Online Tetris",
        ["Create an online room. Invite you're friends. Crush 'em in a game of Tetris."],
        ["Websocket", "Node.js", "HTML/CSS", "Javascript", "MVC pattern"],
        "https://github.com/thelindazheng/tetris"

    ),
    new toDictionary(
        githubIcon,
        "Cloud Optical Spectrum Analyzer",
        "Working remote can be tough during a pandemic. Control your lab equipment remotely.",
        ["Flask", "PyVISA", "canvasJS", "HTML/CSS", "Javascript"],
        "https://github.com/thelindazheng/OSA_webapp"
    ),
    new toDictionary(
        githubIcon,
        "Remote-controlled Drone",
        "An android app that controls our DIY drone.",
        ["C++", "Arduino UNO", "NodeMCU", "ESP8266"],
        "https://github.com/thelindazheng/remote_controlled_drone"
    ),
    new toDictionary(
        githubIcon,
        "Food Mood",
        "What's for dinner? Generate a recipe based on the ingredients in your fridge",
        ["SQL", "Flask", "React.js", "Google Cloud SQL", "Google App Engine"],
        "https://github.com/selinali2010/CS348Proj"
    ),
    new toDictionary(
        githubIcon,
        "WikiTunes",
        "A chrome extension that randomly generates music based on your webpage content.",
        ["Javascript", "HTML", "Spotify API"],
        "https://github.com/thelindazheng/music-extension"
    ),
    new toDictionary(
        githubIcon,
        "Personal Website",
        "You're visiting it right now :)",
        ["React.js", "HTML/CSS", "Firebase"],
        "https://github.com/thelindazheng/website_2"
    ),

]

export default { projectDescriptions };