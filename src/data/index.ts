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
      url: 'https://github.com/nikita-savkin',
      icon: './img/icons/github.svg',
    },
  ],
}

export const ProjectExampleInfo: ProjectExample[] = [
  {
    title: 'FeedbackX',
    imageUrl: './img/portfolio/feedback.webp ',
    description:
      'The online platform for multi-role assessment, employee skills development and career track building.',
    techs: ['Vue', 'TypeScript', 'Sass'],
    mainUrl: 'https://happy-inc.ru/feedbackx/',
    type: 'platform',
  },
  {
    title: 'Happy Job',
    imageUrl: './img/portfolio/hj.webp',
    description:
      'Complex application for research and increasing employee engagement, assisting organizations in studying the satisfaction levels and needs of their employees in real-time.',
    techs: ['React', 'Vue', 'TypeScript', 'Sass'],
    mainUrl: 'https://happy-job.ru/',
    type: 'platform',
  },
  {
    title: 'Happy Job Int\'l',
    imageUrl: './img/portfolio/hj-international.webp',
    description:
      'The online platform for conducting employee engagement research of any frequency and format based on any methodology.',
    techs: ['React', 'Vue', 'TypeScript', 'Sass'],
    mainUrl: 'https://happy-job.ru/international/',
    type: 'platform',
  },
  {
    title: 'KeyAuto',
    imageUrl: './img/portfolio/keyauto.webp',
    description:
      'The online shop was created for KeyAuto, a car dealership. In 2021, Forbes ranked KeyAuto 108th among the 200 largest private companies in the country.',
    techs: ['Vue', 'JavaScript', 'TailwindCSS'],
    mainUrl: 'https://keyauto.ru/',
    type: 'e-commerce',
  },
  {
    title: 'Luidor',
    imageUrl: './img/portfolio/luidor.webp',
    description:
      'The online store for a car dealer that holds a strong position in the market for buying and selling used cars.',
    techs: ['Vue', 'JavaScript', 'TailwindCSS'],
    mainUrl: 'https://luidor-expert.ru/',
    type: 'e-commerce',
  },
  // {
  //   title: 'Garden for everyone',
  //   imageUrl: './img/portfolio/plants.webp',
  //   description:
  //     'The e-commerce online shop that specializes in selling plants, offering a diverse selection and convenient shopping and shipping options, as well as helpful plant care advice.',
  //   techs: ['Vue', 'JavaScript', 'TailwindCSS'],
  //   mainUrl: 'https://vsem-sad.ru/',
  //   type: 'e-commerce',
  // }
]

export const resume = {
  hardSkills: [
    {
      title: 'Languages',
      info: 'JavaScript, TypeScript, HTML, CSS',
    },
    {
      title: 'Technologies',
      info: 'HTML, CSS, JavaScript (ES6+), TypeScript, React, Next.js, Redux, React Router, Vue, Vuex, Webpack, Vite, Node.js, Chart.js, D3.js, Sass, Tailwind CSS, Bootstrap, Jest, Version Control/Git, Docker, AWS, npm, i18n, SSR',
    },
    {
      title: 'Other',
      info: 'Cross-browser compatibility, responsive design, mobile design, web performance optimization, search engine optimization (SEO), testing/debugging, browser developer tools, RESTful APIs, web accessibility, CI/CD, Agile',
    },
  ],
  education: [
    {
      title: 'React - The Complete Guide Course',
      source: 'Maximilian Schwarzmüller',
      year: '2019',
    },
    {
      title: 'Algorithms and Data Structures Masterclass',
      source: 'Colt Steele',
      year: '2019',
    },
    {
      title: 'The Complete JavaScript Course',
      source: 'Jonas Schmedtmann',
      year: '2018',
    },
    {
      title: 'Bachelor of Management',
      source: 'Moscow State University of Mechanical Engineering',
      year: '2016',
    },
  ],
  softSkills: ['Teamwork and communication', 'Adaptability and flexibility', 'Time management', 'Problem solving'],
  experience: [
    {
      title: 'Senior Frontend Engineer | Happy Inc',
      gap: 'June 2022 - Present',
      mainDuty: 'Crafted dynamic and visually engaging reports for web applications on the online survey platforms.',
      otherDuties: [
        'Developed 3 dynamic reports for the \'Happy Job\' app, using React, Vue, TypeScript, and data visualization libraries, resulting in a 14% increase in company income;',
        'Architected 4 reports for \'FeedbackX\', employing Vue and Chart.js, enhancing the convenience of survey data analysis for clients by 20%;',
        'Advanced platform components, reducing user complaints by 12% through UX/UI improvements using Tailwind CSS;',
        'Engineered advanced data visualization tools with Chart.js, contributing to a 17% boost in data interpretation efficiency.'
      ],
    },
    {
      title: 'Frontend Developer | Autodrive Agency',
      gap: 'March 2021 - June 2022',
      mainDuty: 'Created and optimized e-commerce apps for diverse clients, improving performance and scalability.',
      otherDuties: [
        'Built 3 comprehensive online stores with both mobile and desktop versions, alongside admin panels;',
        'Implemented SEO strategies, achieving a performance boost of 10-23% for web applications by using Next.js;',
        'Refactored codebases with ESLint/Prettier, resulting in a reduction of project build size by 7-15%;',
        'Enhanced project productivity by 10-15% through the utilization of Google Lighthouse and customized Webpack configuration.'
      ],
    },
    {
      title: 'Freelance Web Developer',
      gap: 'September 2019 - March 2021',
      mainDuty: 'Developed and maintained websites, prioritizing efficiency and compatibility.',
      otherDuties: [
        'Employed a \'mobile-first\' approach for new projects, accelerating development speed by 18%;',
        'Implemented modern coding standards and utilized JavaScript ES6 syntax to ensure robust and efficient codebases;',
        'Ensured cross-browser compatibility and responsiveness through detailed testing and debugging procedures.'
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
    'Frontend developer with 5+ years of experience in creating interactive web applications and enhancing user interfaces.',
    'Committed to using the latest technologies to drive company growth, improve user satisfaction, and increase product efficiency. Proficient in HTML, CSS, JavaScript, TypeScript, and modern frameworks like React and Vue.',
    'Dedicated to delivering results, whether it\'s optimizing performance or building applications from scratch.'
  ],
  techsTitle: "Here are a few technologies I've been working with:",
}
