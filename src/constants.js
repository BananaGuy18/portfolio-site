import { FaRegEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const NAV_ITEMS = [
    {
        label: ".about",
        
      },
      {
        label: ".projects"
      },
      {
        label: ".contact"
      }
  ];


const ABOUT_ITEMS = [
    {
        title: "introduction",
        description: `" hey! my name is ryan, a student and passionate developer with the desire to expand my knowledge and learn new things.\n\ni'm currently a second year student attending the University of Calgary pursing Computer Science and minoring in Management and Society\n\nfrom front end user interfaces to designing back end architectures, I enjoy every aspect of development.\n\ni always enjoy meeting new people, so let's connect! "`
    },
    {
        title: "skills",
        description: `[ Dart , HTML/CSS , TypeScript , Java , JavaScript , Python , R ]\n\n[ AWS , Docker , Express.js , Firebase , Git/GitHub , MongoDB , Node.js , React ] `
    },
    {
        title: "education",
        description: "University of Calgary [ 2022 - 2026 ]",
        smaller: "Major in Computer Science, Minor in Management and Society"
    }
];

const PROJECT_ITEMS = [
  {
    project_name: "Car Catalog",
    project_stack: "[ CharkaUI , Express , JavaScript , MongoDB , Node.js , React ]",
    description: "Visual and interactive website to display a collection of model cars and their specifications with JavaScript, React, Node.js and MongoDB, utilizing a REST API.",
    live_site_link: "https://cars.ryanwong.ca/",
    git_repo_link: "https://github.com/BananaGuy18/car-catalog",
  },
  {
    project_name: "Social Discord Bot",
    project_stack: "[ Discord.js , JavaScript , MongoDB , Node.js ]",
    description: "A bot made for Discord servers that listens for social media updates such as Tweets, going live on Twitch and Youtube posts. It can also post custom messages at a certain time of the day. There is also a voting system where users can react to the message to cast their votes.",
    live_site_link: "",
    git_repo_link: "https://github.com/BananaGuy18/Social-Discord-Bot"
  },
  {
    project_name: "Music Application",
    project_stack: "[ Dart , Firebase , Flutter ]",
    description: "This application was developed as part of the International Baccalaureate program’s Internal Assessment. It allows general users to listen to, comment, and vote on songs. Administrator accounts are able to add, remove, and edit songs on the application.",
    live_site_link: "",
    git_repo_link: "https://github.com/BananaGuy18/Music-App-IA"
  },
  {
    project_name: "Portfolio Website",
    project_stack: "[ CharkaUI , JavaScript , React ]",
    description: "This site was made to display my projects and a short about me! (you're looking right at it!).",
    live_site_link: "https://ryanwong.ca",
    git_repo_link: ""
  }
]

const CONTACT_INFO = [
  {
    name: "e-mail",
    handle: "ryanwong.yyc@gmail.com",
    link: "mailto:ryanwong.yyc@gmail.com",
    icon: <FaRegEnvelope color={"white"}/>
  },
  {
    name: "GitHub",
    handle: "BananaGuy18",
    link: "https://github.com/BananaGuy18",
    icon: <FaGithub color={"white"} />
  },
  {
    name: "LinkedIn",
    handle: "ryanwongyyc",
    link: "https://www.linkedin.com/in/ryanwongyyc/",
    icon: <FaLinkedin color={"white"} />
  }
]
  
export { NAV_ITEMS, ABOUT_ITEMS, PROJECT_ITEMS, CONTACT_INFO };