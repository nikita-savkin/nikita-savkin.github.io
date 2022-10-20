interface Link {
  id: string;
  url: string;
  icon: string;
}

export interface Title {
  id: string;
  title: string;
  infoMenuTitle: string;
}

export interface PersonalInfo {
  name: string;
  surname: string;
  profession: string;
  links: Link[];
}

export interface ProjectExample {
  title: string;
  imageUrl: string;
  description: string;
  tools: string;
  githubUrl: string;
  mainUrl: string;
}
