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
    imageUrl: './img/portfolio/feedback.webp ',
    description:
      'The online platform for multi-role assessment, employee skills development and career track building.',
    techs: ['Vue', 'TypeScript', 'Sass'],
    mainUrl: 'https://happy-inc.ru/feedbackx/',
    type: 'commercial',
  },
  {
    title: 'Happy Job',
    imageUrl: './img/portfolio/hj.webp',
    description:
      'The online platform for research and increasing employee engagement, assisting organizations in studying the satisfaction levels and needs of their employees in real-time.',
    techs: ['React', 'Vue', 'TypeScript', 'Sass'],
    mainUrl: 'https://happy-job.ru/',
    type: 'commercial',
  },
  {
    title: 'KeyAuto',
    imageUrl: './img/portfolio/keyauto.webp',
    description:
      'The online shop was created for KeyAuto, a car dealership. In 2021, Forbes ranked KeyAuto 108th among the 200 largest private companies in the country.',
    techs: ['Vue', 'JavaScript', 'TailwindCSS'],
    mainUrl: 'https://keyauto.ru/',
    type: 'commercial',
  },
  {
    title: 'Luidor',
    imageUrl: './img/portfolio/luidor.webp',
    description:
      'The online store for a car dealer that holds a strong position in the market for buying and selling used cars.',
    techs: ['Vue', 'JavaScript', 'TailwindCSS'],
    mainUrl: 'https://luidor-expert.ru/',
    type: 'commercial',
  },
  {
    title: 'Garden for everyone',
    imageUrl: './img/portfolio/plants.webp',
    description:
      'The e-commerce online shop that specializes in selling plants, offering a diverse selection and convenient shopping and shipping options, as well as helpful plant care advice.',
    techs: ['Vue', 'JavaScript', 'TailwindCSS'],
    mainUrl: 'https://vsem-sad.ru/',
    type: 'commercial',
  },
  {
    title: 'Vinyl Adventure Store',
    imageUrl: './img/portfolio/vinyl-store.webp',
    description:
      "The MERN stack, along with TypeScript and Styled Components, is employed in this experimental project to showcase a store's array of products while offering filtering functionalities.",
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
      info: 'React, Redux, Vue, Vuex, Pinia, Webpack, Vite, Node.js, Sass, TailwindCSS, version control/Git, browser developer tools, NPM, Docker',
    },
    {
      title: 'Other',
      info: 'Cross-browser compatibility, responsive design, mobile design, web performance optimization, search engine optimization (SEO), testing/debugging, browser developer tools, RESTful services/APIs, web accessibility, CI/CD',
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
      title: 'Frontend Developer | Happy Inc',
      gap: 'June 2022 - Present',
      mainDuty: 'Worked with applications in a powerful online survey platform',
      otherDuties: [
        'Developed 2 reports for the \'Happy Job\' platform, presenting research data in a new, dynamic format, boosting the company\'s income by 14%',
        'Architected 4 reports from scratch for the \'FeedbackX\' platform, enhancing clients\' ability to analyze new survey data by 20%',
        'Advanced and redesigned platform components, improving the UX/UI, which led to a 12% decrease in user complaints',
        'Engineered and maintained new features, including cutting-edge data visualization tools that increased data interpretation efﬁciency by 17%'
      ],
    },
    {
      title: 'Frontend Developer | Autodrive Agency',
      gap: 'March 2021 - June 2022',
      mainDuty: 'Developed e-commerce projects for car dealers and various businesses',
      otherDuties: [
        'Built 3 high-quality online stores from scratch, each with mobile and desktop versions, and developed admin panels for them ',
        'Employed SEO best practices to enhance the speed and scalability of web apps, resulting in a 10-23% improvement in performance',
        'Refactored code in past projects and implemented ESLint and Prettier, resulting in 7-15% decrease in project build size',
        'Increased project productivity and availability by 10-15% using Google Lighthouse'
      ],
    },
    {
      title: 'Freelance Web Developer',
      gap: 'September 2019 - March 2021',
      mainDuty: 'Developed and maintained websites for various businesses',
      otherDuties: [
        'Implemented a "mobile-ﬁrst" approach to new projects, resulting in a 18% increase in development speed',
        'Adopted modern coding standards and utilized ES6 syntax to write performant and robust code for a diverse range of web projects',
        'Manually tested sites for cross-browser compatibility and responsiveness'
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
    'Experienced frontend developer with 4+ years of cross-industry expertise in technology and retail sectors.',
    'Proficient in JavaScript, TypeScript, and modern frameworks like Vue and React, with a focus on responsive design, cross-browser compatibility, and performance optimization.',
    'Strong problem-solving abilities and attention to detail. Continuously learning and staying up-to-date with industry trends.'
  ],
  techsTitle: "Here are a few technologies I've been working with:",
}
