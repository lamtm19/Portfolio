export interface Project {
  title: string;
  description: string;
  liveUrl?: string;
  githubUrl: string;
  image: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "KeepCloud",
    description: "Application de gestion de tâches.",
    liveUrl: "https://gestion-de-tache-lam.netlify.app/",
    githubUrl: "https://github.com/lamtm19/Application-de-gestion-de-taches",
    image: "resources/projects/project-01.png",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  // Ajouter de nouveaux projets ici
  {
    title: "Memory",
    description: "Jeu de cartes intéractif pour entraîner la mémoire visuelle.",
    liveUrl: "https://memory-lam.netlify.app/",
    githubUrl: "https://github.com/lamtm19/Memory/tree/main",
    image: "resources/projects/project-04.png",
    tags: ["Vue.js"]
  },
  {
    title: "ABBPC",
    description: "Refonte du site web d'une entreprise de services informatiques.",
    liveUrl: "https://refonte-site-abbpc-lam.netlify.app/",
    githubUrl: "https://github.com/lamtm19/refonte-site-abbpc",
    image: "resources/projects/project-02.png",
    tags: ["HTML","CSS", "JavaScript"]
  },
  {
    title: "Crakitoko",
    description: "Projet personnel d'un jeu en ligne reprenant le concept du jeu de société Cracklist.",
    liveUrl: "https://jeu-cracklist-lam.netlify.app/",
    githubUrl: "https://github.com/lamtm19/jeu-cracklist",
    image: "resources/projects/project-03.png",
    tags: ["HTML","CSS", "JavaScript"]
  },
];
