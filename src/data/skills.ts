export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "skills.frontend",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Vue.js", "Alpine.js", "Three.js"]
  },
  {
    title: "skills.backend",
    skills: ["Node.js", "PHP", "Java", "Python", "Kotlin", "C", "Architecture MVC", "API REST"]
  },
  {
    title: "skills.database",
    skills: ["SQL", "PostgreSQL", "MongoDB", "NoSQL"]
  },
  {
    title: "skills.devops",
    skills: ["Docker", "Linux", "VMware", "CI/CD", "Cloud"]
  },
  {
    title: "skills.tools",
    skills: ["Git", "GitHub", "Google Apps Script"]
  }
];
