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
    title: 'FeedbackX',
    imageUrl: './img/portfolio/feedbackx.webp ',
    description:
      'An online platform is available for research and to increase employee engagement, assisting organizations in studying the satisfaction level and needs of their employees in real time.',
    techs: ['Vue', 'TypeScript', 'Sass'],
    mainUrl: 'https://happy-inc.ru/feedbackx/',
    type: 'commercial',
  },
  {
    title: 'Happy Job',
    imageUrl: './img/portfolio/hj.webp',
    description:
      'An online platform is available for research and to increase employee engagement, assisting organizations in studying the satisfaction level and needs of their employees in real time.',
    techs: ['React', 'Vue', 'TypeScript', 'Sass'],
    mainUrl: 'https://happy-job.ru/',
    type: 'commercial',
  },
  {
    title: 'Keyauto',
    imageUrl: './img/portfolio/keyauto.webp',
    description:
      'An online shop was created for KeyAuto, a car dealership. In 2021, Forbes ranked KeyAuto 108th among the 200 largest private companies in the country.',
    techs: ['Vue', 'JavaScript', 'TailwindCSS'],
    mainUrl: 'https://keyauto.ru/',
    type: 'commercial',
  },
  {
    title: 'Luidor',
    imageUrl: './img/portfolio/luidor.webp',
    description:
      'This is an online store for a car dealer that holds a strong position in the market for buying and selling used cars.',
    techs: ['Vue', 'JavaScript', 'TailwindCSS'],
    mainUrl: 'https://luidor-expert.ru/',
    type: 'commercial',
  },
  {
    title: 'Vsem Sad',
    imageUrl: './img/portfolio/plants.webp',
    description:
      'This is an e-commerce online shop that specializes in selling plants, offering a diverse selection and convenient shopping and shipping options, as well as helpful plant care advice.',
    techs: ['Vue', 'JavaScript', 'TailwindCSS'],
    mainUrl: 'https://vsem-sad.ru/',
    type: 'commercial',
  },
  {
    title: 'Vinyl Adventure Store',
    imageUrl: './img/portfolio/vinyl-store.webp',
    description:
      "This experimental project utilizes the MERN stack, as well as TypeScript and Styled Components, to display a store's product range with filtering capabilities.",
    techs: ['React', 'TypeScript'],
    githubUrl: 'https://github.com/No-colour-you-like/Vinyl-Record-Online-Store',
    mainUrl: 'https://vinyl-adventure.netlify.app/',
    type: 'personal',
  },
  {
    title: 'Crypto Dashboard',
    imageUrl: './img/portfolio/crypto.webp',
    description:
      'This application enables users to track three types of cryptocurrencies in real-time, as well as use a currency converter and monitor the dynamics of each cryptocurrency.',
    techs: ['JavaScript', 'Sass'],
    githubUrl: 'https://github.com/No-colour-you-like/Crypto',
    mainUrl: 'https://no-colour-you-like.github.io/Crypto/',
    type: 'personal',
  },
  {
    title: 'Wallet Dashboard',
    imageUrl: './img/portfolio/wallet.webp',
    description:
      'The Wallet Dashboard assists in recording expenses and income, allowing users to add and remove transactions and track the type and date of each expense.',
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
      info: 'React, Redux, Vue, Vuex, Pinia, Webpack, Vite, Node.js, Sass, TailwindCSS, Styled-components, Git, NPM, Docker',
    },
    {
      title: 'Other',
      info: 'Responsive design, Performance optimization, Authentication and authorization',
    },
  ],
  education: [
    {
      title: 'React - The Complete Guide Course',
      source: 'Maximilian Schwarzmüller',
      year: '2019',
    },
    {
      title: 'Data Structures and Algorithms',
      source: 'Zero to Mastery',
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
  softSkills: ['Critical thinking', 'Adaptability and flexibility', 'Teamwork', 'Problem Solving'],
  experience: [
    {
      title: 'Front-end Developer | Happy Inc',
      gap: 'April 2022 - Present',
      mainDuty: 'Worked with applications in a single powerful online survey platform using React and Vue.',
      otherDuties: [
        "Developed 3 reports for 'FeedbackX' platform to display research data in a dynamic format",
        "Architected 2 new personal reports for 'Happy Job' platform, boosting clients ability to analyze and understand survey data",
        'Developed/redesigned platform components, resulting in a 12% decrease in user complaints and improved UX',
        'Engineered/maintained major features, including cutting-edge data visualization tools that increased data interpretation efficiency by 17%',
      ],
    },
    {
      title: 'Front-end Developer | Autodrive Agency',
      gap: 'March 2021 - April 2022',
      mainDuty: 'Developed e-commerce projects for car dealers and other businesses as a frontend web developer.',
      otherDuties: [
        'Built 3 high-quality online stores from scratch using Vue, VueX, Vue Router, and TailwindCSS with mobile and desktop versions',
        'Implemented admin panels for managing products, orders, and other site content',
        'Increased project productivity and availability by 15% using Google Lighthouse',
        'Eliminated dead code in previous projects and introduced consistent coding style using ESLint and Prettier',
      ],
    },
    {
      title: 'Freelance Web Developer',
      gap: 'September 2019 - March 2021',
      mainDuty: 'Developed and maintained websites for clients using primarily HTML, CSS (Sass), and JavaScript.',
      otherDuties: [
        'Implemented a "mobile-first" approach to new projects, resulting in a 20% increase in development speed',
        'Manually tested sites for cross-browser compatibility and responsiveness',
        'Adopted modern coding standards and utilized ES6 syntax to write performant and robust code for a diverse range of web projects.',
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
    'Hi there! As a frontend developer, I specialize in creating intuitive, responsive interfaces that are both aesthetically pleasing and functional. I have a keen eye for design and a deep understanding of user experience.',
    'With my expertise in frontend technologies, I can bring vision to life in a way that engages and delights users. I also strive to create scalable and maintainable code that can easily be extended and adapted to meet future needs. ',
    "Let's work together to create a stunning frontend that makes your application stand out from the crowd!",
  ],
  techsTitle: "Here are a few technologies I've been working with:",
}
