import { Title, PersonalInfo, ProjectExample } from "./types";

export const middleBlocksTitles: Title[] = [
  {
    id: "01",
    title: "about_me",
    infoMenuTitle: "About Me",
  },
  {
    id: "02",
    title: "portfolio",
    infoMenuTitle: "Portfolio",
  },
  {
    id: "03",
    title: "resume",
    infoMenuTitle: "Resume",
  },
  {
    id: "04",
    title: "contacts",
    infoMenuTitle: "Contacts",
  },
];

export const personalInfo: PersonalInfo = {
  name: "Nikita",
  surname: "Savkin",
  profession: "Front-End Developer",
  links: [
    {
      id: "email",
      url: "mailto:no.colour.you.like@gmail.com",
      icon: "./img/icons/email.svg",
    },
    {
      id: "github",
      url: "https://github.com/No-colour-you-like",
      icon: "./img/icons/github.svg",
    },
    {
      id: "linkedin",
      url: "https://www.linkedin.com/in/nikitasavkin",
      icon: "./img/icons/linkedin.svg",
    },
  ],
};

export const ProjectExampleInfo: ProjectExample[] = [
  {
    title: "Launcher Inc",
    imageUrl: "./img/portfolio/launcher-inc.jpg",
    description:
      "Project for Launcher Inc. , a rocket engine testing company. This multi-page site contains information about the company, its product and personnel.",
    tools: "HTML CSS",
    githubUrl: "someurl",
    mainUrl: "url",
  },
  {
    title: "GYM Sports",
    imageUrl: "./img/portfolio/gymsports.jpg",
    description:
      "In this project, I created a convenient website for a fitness club, where you can find out all the information about training, schedule and payment terms.",
    tools: "HTML CSS",
    githubUrl: "someurl",
    mainUrl: "url",
  },
  {
    title: "Launcher Inc",
    imageUrl: "./img/portfolio/launcher-inc.jpg",
    description:
      "Project for Launcher Inc. , a rocket engine testing company. This multi-page site contains information about the company, its product and personnel.",
    tools: "HTML CSS",
    githubUrl: "someurl",
    mainUrl: "url",
  },
];

export const resume = {
  hardSkills: [
    {
      title: "Languages",
      info: "JavaScript (ES6), TypeScript, HTML5, CSS (SASS, SCSS)",
    },
    {
      title: "Libraries & Frameworks",
      info: "React, Redux",
    },
    {
      title: "Additional",
      info: "Git, GitHub, Gulp, NPM, BEM, Responsive design",
    },
  ],
  softSkills: ["Critical thinking", "Adaptability and Flexibility", "Teamwork"],
  experience: [
    {
      title: "Front-end Developer",
      gap: "March 2020 - Present",
      duties: [
        "Developed and maintained code for client websites primarily using HTML, CSS(SASS) and JavaScript;",
        "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness;",
        "Wrote modern, performant, maintainable code for websites and web applications.",
      ],
      achievements: [
        "engineered and implemented five adaptive websites",
        "five JavaScript applications",
        "e-commerce project using React.",
      ],
    },
  ],
};
