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
    title: "Happy Inc",
    imageUrl: "./img/portfolio/hj.jpeg",
    description:
      "Project for Launcher Inc. , a rocket engine testing company. This multi-page site contains information about the company, its product and personnel.",
    techs: ["TypeScript", "Vue"],
    githubUrl: "someurl",
    mainUrl: "url",
  },
  {
    title: "Keyauto",
    imageUrl: "./img/portfolio/keyauto.jpeg",
    description:
      "Project for Launcher Inc. , a rocket engine testing company. This multi-page site contains information about the company, its product and personnel.",
    techs: ["TypeScript", "Vue"],
    githubUrl: "someurl",
    mainUrl: "url",
  },
  {
    title: "Luidor",
    imageUrl: "./img/portfolio/luidor.png",
    description:
      "Project for Launcher Inc. , a rocket engine testing company. This multi-page site contains information about the company, its product and personnel.",
    techs: ["TypeScript", "Vue"],
    githubUrl: "someurl",
    mainUrl: "url",
  },
  {
    title: "Launcher Inc",
    imageUrl: "./img/portfolio/launcher-inc.jpg",
    description:
      "Project for Launcher Inc. , a rocket engine testing company. This multi-page site contains information about the company, its product and personnel.",
    techs: ["TypeScript", "Vue"],
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
      title: "Frameworks",
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
      title: "Front-end Developer @Happy Inc",
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
    {
      title: "Front-end Developer @Happy Inc",
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

export const techs = [
  {
    title: "JavaScript",
    iconUrl: "./img/techs/js.svg",
    color: "rgb(247, 223, 28)",
    shadow: "0 0 20px rgb(247, 223, 28)",
  },
  {
    title: "TypeScript",
    iconUrl: "./img/techs/typescript.svg",
    color: "rgb(0, 122, 204)",
    shadow: "0 0 20px rgb(0, 122, 204)",
  },
  {
    title: "React",
    iconUrl: "./img/techs/react.svg",
    color: "rgb(97, 218, 251)",
    shadow: "0 0 20px rgb(97, 218, 251)",
  },
  {
    title: "Vue",
    iconUrl: "./img/techs/vue.svg",
    color: "rgb(63, 184, 131)",
    shadow: "0 0 20px rgb(63, 184, 131)",
  },
  {
    title: "HTML5",
    iconUrl: "./img/techs/html.svg",
    color: "rgb(238, 101, 42)",
    shadow: "0 0 20px rgb(238, 101, 42)",
  },
  {
    title: "CSS3",
    iconUrl: "./img/techs/css.svg",
    color: "rgb(38, 81, 229)",
    shadow: "0 0 20px rgb(38, 81, 229)",
  },
  {
    title: "Sass",
    iconUrl: "./img/techs/sass.svg",
    color: "rgb(204, 102, 153)",
    shadow: "0 0 20px rgb(204, 102, 153)",
  },
  {
    title: "TailwindCSS",
    iconUrl: "./img/techs/tailwind.svg",
    color: "rgb(5, 182, 213)",
    shadow: "0 0 20px rgb(5, 182, 213)",
  },
  {
    title: "Git",
    iconUrl: "./img/techs/git.svg",
    color: "rgb(240, 60, 45)",
    shadow: "0 0 20px rgb(240, 60, 45)",
  },
  {
    title: "ES Lint",
    iconUrl: "./img/techs/eslint.svg",
    color: "rgb(74, 50, 195)",
    shadow: "0 0 20px rgb(74, 50, 195)",
  },
  {
    title: "Prettier",
    iconUrl: "./img/techs/prettier.svg",
    color: "rgb(85, 179, 180)",
    shadow: "0 0 20px rgb(85, 179, 180)",
  },
  {
    title: "Figma",
    iconUrl: "./img/techs/figma.svg",
    color: "rgb(161, 89, 255)",
    shadow: "0 0 20px rgb(161, 89, 255)",
  },
];

export const aboutMe = {
  textBlocks: [
    "Hi! I'm a Front-End Developer who specializes in building exceptional digital experiences. I strive to create immersive, beautiful, user-friendly web applications with quality and carefully designed code.",
    "I work on making web applications better based on interactive design using animations and smooth transitions.",
    "I always care about what I create, keep learning new things and challenging myself. I enjoy gaining experience in the field of web development and discovering something new for myself.",
  ],
  techsTitle: "Here are a few technologies I've been working with:",
};
