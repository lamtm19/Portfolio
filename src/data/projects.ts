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
    description: "projects.keepcloud.desc",
    liveUrl: "https://gestion-de-tache-lam.netlify.app/",
    githubUrl: "https://github.com/lamtm19/Application-de-gestion-de-taches",
    image: "resources/projects/project-01.png",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  // Ajouter de nouveaux projets ici
  {
    title: "Memory",
    description: "projects.memory.desc",
    liveUrl: "https://memory-lam.netlify.app/",
    githubUrl: "https://github.com/lamtm19/Memory/tree/main",
    image: "resources/projects/project-04.png",
    tags: ["Vue.js"]
  },
  {
    title: "Coffrette",
    description: "projects.coffrette.desc",
    liveUrl: "https://coffrette.vercel.app/",
    githubUrl: "https://github.com/lamtm19/coffrette",
    image: "resources/projects/project-06.png",
    tags: ["HTML","CSS", "JavaScript"]
  },
  {
    title: "ABBPC",
    description: "projects.abbpc.desc",
    liveUrl: "https://refonte-site-abbpc-lam.netlify.app/",
    githubUrl: "https://github.com/lamtm19/refonte-site-abbpc",
    image: "resources/projects/project-02.png",
    tags: ["HTML","CSS", "JavaScript"]
  },
  {
    title: "Crakitoko",
    description: "projects.crakitoko.desc",
    liveUrl: "https://jeu-cracklist-lam.netlify.app/",
    githubUrl: "https://github.com/lamtm19/jeu-cracklist",
    image: "resources/projects/project-03.png",
    tags: ["HTML","CSS", "JavaScript"]
  },
  {
    title: "Pause du Champion",
    description: "projects.pauseduchampion.desc",
    liveUrl: "https://pause-du-champion.vercel.app/",
    githubUrl: "https://github.com/lamtm19/Application_Muscu",
    image: "resources/projects/project-05.png",
    tags: ["HTML","CSS", "JavaScript"]
  },
];
