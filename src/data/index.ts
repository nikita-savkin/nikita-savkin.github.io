import { Title, PersonalInfo, ProjectExample } from './types'

export const middleBlocksTitles: Title[] = [
  {
    id: '01',
    title: 'about_me',
    infoMenuTitle: 'About Me',
  },
  {
    id: '02',
    title: 'portfolio',
    infoMenuTitle: 'Portfolio',
  },
  {
    id: '03',
    title: 'resume',
    infoMenuTitle: 'Resume',
  },
  {
    id: '04',
    title: 'contacts',
    infoMenuTitle: 'Contacts',
  },
]

export const personalInfo: PersonalInfo = {
  name: 'Nikita',
  surname: 'Savkin',
  profession: 'Frontend Developer',
  links: [
    {
      id: 'email',
      url: 'mailto:no.colour.you.like@gmail.com',
      icon: './img/icons/email.svg',
    },
    {
      id: 'linkedin',
      url: 'https://www.linkedin.com/in/nikitasavkin',
      icon: './img/icons/linkedin.svg',
    },
    {
      id: 'github',
      url: 'https://github.com/no-colour-you-like',
      icon: './img/icons/github.svg',
    },
  ],
}

export const ProjectExampleInfo: ProjectExample[] = [
  {
    title: 'Happy Inc',
    imageUrl: './img/portfolio/hj.webp',
    description:
      'Online platform for research and increase of employee engagement, that helps organizations to study the satisfaction level and needs of their employees in real time.',
    techs: ['React', 'Vue', 'TypeScript', 'Sass'],
    mainUrl: 'https://happy-job.ru/',
    type: 'commercial',
  },
  {
    title: 'Keyauto',
    imageUrl: './img/portfolio/keyauto.webp',
    description:
      'Online shop for car dealer "KeyAuto". In 2021 company took 108th place in the rating of the 200 largest private companies in Russia according to Forbes.',
    techs: ['Vue', 'JavaScript', 'TailwindCSS'],
    mainUrl: 'https://keyauto.ru/',
    type: 'commercial',
  },
  {
    title: 'Luidor',
    imageUrl: './img/portfolio/luidor.webp',
    description:
      'An online store for a car dealer who occupies a strong position in the market for the purchase and sale of used cars.',
    techs: ['Vue', 'JavaScript', 'TailwindCSS'],
    mainUrl: 'https://luidor-expert.ru/',
    type: 'commercial',
  },
  {
    title: 'Vsem Sad',
    imageUrl: './img/portfolio/plants.webp',
    description:
      'E-commerce plants store is online shop that offer a variety of plants with convenient shopping, shipping options, and plant care advices.',
    techs: ['Vue', 'JavaScript', 'TailwindCSS'],
    mainUrl: 'https://vsem-sad.ru/',
    type: 'commercial',
  },
  {
    title: 'Vinyl Adventure Store',
    imageUrl: './img/portfolio/vinyl-store.webp',
    description:
      "Experimental project employs the MERN stack, along with TypeScript and Styled Components, to showcase a store's range of products with filtering.",
    techs: ['React', 'TypeScript'],
    githubUrl: 'https://github.com/No-colour-you-like/Vinyl-Record-Online-Store',
    mainUrl: 'https://vinyl-adventure.netlify.app/',
    type: 'personal',
  },
  {
    title: 'Crypto Dashboard',
    imageUrl: './img/portfolio/crypto.webp',
    description:
      'This application allows to track three types of cryptocurrencies in real time. It is also possible to use a currency converter and track the dynamics of the cryptocurrency.',
    techs: ['JavaScript', 'Sass'],
    githubUrl: 'https://github.com/No-colour-you-like/Crypto',
    mainUrl: 'https://no-colour-you-like.github.io/Crypto/',
    type: 'personal',
  },
  {
    title: 'Wallet Dashboard',
    imageUrl: './img/portfolio/wallet.webp',
    description:
      'Wallet Dashboard helps to record expenses and income. Allows to add and remove transactions, track the type and date of expenses.',
    techs: ['JavaScript', 'Sass'],
    githubUrl: 'https://github.com/No-colour-you-like/Wallet',
    mainUrl: 'https://no-colour-you-like.github.io/Wallet/',
    type: 'personal',
  },
]

export const resume = {
  hardSkills: [
    {
      title: 'Languages',
      info: 'JavaScript, TypeScript, HTML, CSS',
    },
    {
      title: 'Technologies',
      info: 'React, Redux, Vue, Vuex, Pinia, Webpack, Vite, Node.js',
    },
    {
      title: 'Other',
      info: 'Sass, TailwindCSS, Styled Components, NPM, Git, Docker, Responsive design, Performance optimization',
    },
  ],
  education: [
    {
      title: 'React - The Complete Guide Course',
      source: 'Maximilian Schwarzmüller',
      year: '2020',
    },
    {
      title: 'The Complete JavaScript Course',
      source: 'Jonas Schmedtmann',
      year: '2019',
    },
    {
      title: 'Bachelor of Management',
      source: 'Moscow State University of Mechanical Engineering',
      year: '2016',
    },
  ],
  softSkills: ['Critical thinking', 'Adaptability and flexibility', 'Teamwork', 'Problem Solving'],
  experience: [
    {
      title: 'Front-end Developer | Happy Inc',
      gap: 'April 2022 - Present',
      mainDuty: 'Worked with applications in a single powerful online survey platform using React and Vue.',
      otherDuties: [
        "Architected 2 new personal reports for the company's clients, developed and redesigned platform components for compatibility with previous reports",
        'Engineered and maintained new major features for online survey application',
        'Developed new functions for the admin panel in order to flexibly configure the online survey application and the report panel',
        'Interacted productively with the designer, manager and backend developers to improve the quality of the whole system and create the most user friendly interface',
      ],
    },
    {
      title: 'Front-end Developer | Autodrive Agency',
      gap: 'March 2021 - April 2022',
      mainDuty: 'Developed e-commerce projects for car dealers and other businesses as a frontend engineer.',
      otherDuties: [
        'Developed 3 high-quality online stores from scratch using Vue 3, VueX, Vue Router, TailwindCSS with support for mobile and desktop versions of applications',
        'Implemented admin panels for online stores',
        'Investigated, evaluated and debugged application issues across time',
        'Improved the productivity and availability of projects using Google Lighthouse on 15%',
        'Introduced and enforced a consistent coding style across the applications using ESLint and Prettier',
        'Eliminated dead code thereby making it more readable for all team',
      ],
    },
    {
      title: 'Freelance Web Developer',
      gap: 'September 2019 - March 2021',
      mainDuty: "Developed and maintained code for clients' websites primarily using HTML, CSS (Sass) and JavaScript.",
      otherDuties: [
        'Implemented a "mobile-first" approach to creating new projects which increased the development speed by 20%',
        'Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness',
        'Wrote modern, performant, and robust code for a diverse array of client',
      ],
    },
  ],
}

export const techs = [
  {
    title: 'JavaScript',
    iconUrl: './img/techs/js.svg',
    color: 'rgb(247, 223, 28)',
    shadow: '0 0 20px rgb(247, 223, 28)',
  },
  {
    title: 'TypeScript',
    iconUrl: './img/techs/typescript.svg',
    color: 'rgb(0, 122, 204)',
    shadow: '0 0 20px rgb(0, 122, 204)',
  },
  {
    title: 'React',
    iconUrl: './img/techs/react.svg',
    color: 'rgb(97, 218, 251)',
    shadow: '0 0 20px rgb(97, 218, 251)',
  },
  {
    title: 'Redux',
    iconUrl: './img/techs/redux.svg',
    color: 'rgb(118, 74, 188)',
    shadow: '0 0 20px rgb(118, 74, 188)',
  },
  {
    title: 'Vue',
    iconUrl: './img/techs/vue.svg',
    color: 'rgb(63, 184, 131)',
    shadow: '0 0 20px rgb(63, 184, 131)',
  },
  {
    title: 'Pinia',
    iconUrl: './img/techs/pinia.svg',
    color: 'rgb(118, 225, 135)',
    shadow: '0 0 20px rgb(118, 225, 135)',
  },
  {
    title: 'Node.js',
    iconUrl: './img/techs/node-js.svg',
    color: 'rgb(103, 159, 99)',
    shadow: '0 0 20px rgb(103, 159, 99)',
  },
  {
    title: 'HTML5',
    iconUrl: './img/techs/html.svg',
    color: 'rgb(238, 101, 42)',
    shadow: '0 0 20px rgb(238, 101, 42)',
  },
  {
    title: 'CSS3',
    iconUrl: './img/techs/css.svg',
    color: 'rgb(38, 81, 229)',
    shadow: '0 0 20px rgb(38, 81, 229)',
  },
  {
    title: 'Sass',
    iconUrl: './img/techs/sass.svg',
    color: 'rgb(204, 102, 153)',
    shadow: '0 0 20px rgb(204, 102, 153)',
  },
  {
    title: 'TailwindCSS',
    iconUrl: './img/techs/tailwind.svg',
    color: 'rgb(5, 182, 213)',
    shadow: '0 0 20px rgb(5, 182, 213)',
  },
  {
    title: 'Git',
    iconUrl: './img/techs/git.svg',
    color: 'rgb(240, 60, 45)',
    shadow: '0 0 20px rgb(240, 60, 45)',
  },
]

export const aboutMe = {
  textBlocks: [
    "Hi! I specialise in creating unique web applications. I strive to create visually compelling, user-friendly applications with high-quality and well-designed code. I'm well-organized person, problem solver and responsible coder.",
    'I always care about what I create, keep learning new things and challenge myself. I enjoy gaining experience in the field of web development and discovering something new for myself.',
  ],
  techsTitle: "Here are a few technologies I've been working with:",
}
