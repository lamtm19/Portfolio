export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Front-end",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Vue.js", "Alpine.js", "Three.js"]
  },
  {
    title: "Back-end",
    skills: ["Node.js", "PHP", "Java", "Python", "Kotlin", "C", "Architecture MVC", "API REST"]
  },
  {
    title: "Bases de données",
    skills: ["SQL", "PostgreSQL", "MongoDB", "NoSQL"]
  },
  {
    title: "DevOps / Infrastructure",
    skills: ["Docker", "Linux", "VMware", "CI/CD", "Cloud"]
  },
  {
    title: "Outils & versioning",
    skills: ["Git", "GitHub", "Google Apps Script"]
  }
];
