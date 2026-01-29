import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      "nav.projects": "Projets",
      "nav.skills": "Compétences",
      "nav.about": "Au-delà du code",
      "nav.contact": "Contact",
      "hero.title": "Développeur Full Stack",
      "hero.subtitle": "Paris — 19 ans",
      "hero.cta": "Voir mes projets",
      "skills.title": "Compétences",
      "projects.title": "Mes Projets",
      "projects.visit": "Voir le site",
      "projects.github": "Code source",
      "extras.title": "Au-delà du code",
      "contact.title": "Me contacter",
      "contact.cv": "Télécharger mon CV",
      "contact.email": "M'envoyer un mail",
      "contact.form.name": "Nom",
      "contact.form.email": "Email",
      "contact.form.message": "Message",
      "contact.form.send": "Envoyer",
      "contact.copy": "Copier l'e-mail",
      "contact.copied": "Copié !",
      "contact.success": "Message envoyé avec succès !",
      "extras.subtitle": "Mon parcours ne s'arrête pas au développement. Voici ce qui forge ma discipline, ma créativité et mon esprit d'équipe.",
      "footer.text": "Design & Code avec soin.",
      "projects.github_link": "https://github.com/lamtm19/Portfolio",
      "projects.portfolio.title": "Mon Portfolio",
      "projects.portfolio.desc": "Portfolio professionnel optimisé pour les recruteurs, développé avec React et Tailwind CSS.",
      "extras.barber.title": "Coiffeur / Barbier",
      "extras.barber.desc": "Auto-entrepreneur, habitué à gérer une forte clientèle avec une centaine de clients par mois. La coiffure m’a appris la discipline, la rigueur et l’exigence du détail, ainsi qu’une vraie maîtrise de la relation client.",
      "extras.video.title": "Vidéo / Vlog",
      "extras.video.desc": "Réalisation et montage vidéo, guidé par la créativité et le plaisir de raconter des histoires à travers l’image.",
      "extras.football.title": "Football en équipe & engagement associatif",
      "extras.football.desc": "Investi au sein d’une association, j’ai déjà encadré des équipes et aidé à l’organisation d’événements. Le football en équipe fait partie de nos activités et reflète des valeurs de partage, de solidarité et de travail collectif.",
      "projects.keepcloud.desc": "Application de gestion de tâches.",
      "projects.memory.desc": "Jeu de cartes intéractif pour entraîner la mémoire visuelle.",
      "projects.abbpc.desc": "Refonte du site web d'une entreprise de services informatiques.",
      "projects.crakitoko.desc": "Projet personnel d'un jeu en ligne reprenant le concept du jeu de société Cracklist.",
      "extras.barber.category": "Discipline & Relation Client",
      "extras.video.category": "Créativité",
      "extras.football.category": "Esprit d'équipe",
      "skills.frontend": "Front-end",
      "skills.backend": "Back-end",
      "skills.database": "Bases de données",
      "skills.devops": "DevOps / Infrastructure",
      "skills.tools": "Outils & versioning"
    }
  },
  en: {
    translation: {
      "nav.projects": "Projects",
      "nav.skills": "Skills",
      "nav.about": "Beyond Code",
      "nav.contact": "Contact",
      "hero.title": "Full Stack Developer",
      "hero.subtitle": "Paris — 19 years old",
      "hero.cta": "View my projects",
      "skills.title": "Skills",
      "projects.title": "My Projects",
      "projects.visit": "Visit site",
      "projects.github": "Source code",
      "extras.title": "Beyond Code",
      "contact.title": "Contact Me",
      "contact.cv": "Download CV",
      "contact.email": "Send me an email",
      "contact.form.name": "Name",
      "contact.form.email": "Email",
      "contact.form.message": "Message",
      "contact.form.send": "Send",
      "contact.copy": "Copy email",
      "contact.copied": "Copied!",
      "contact.success": "Message sent successfully!",
      "extras.subtitle": "My journey doesn't stop at development. Here is what forges my discipline, my creativity and my team spirit.",
      "footer.text": "Design & Code with care.",
      "projects.github_link": "https://github.com/lamtm19/Portfolio",
      "projects.portfolio.title": "My Portfolio",
      "projects.portfolio.desc": "Professional portfolio optimized for recruiters, developed with React and Tailwind CSS.",
      "extras.barber.title": "Hairdresser / Barber",
      "extras.barber.desc": "Self-employed, used to managing a large customer base with a hundred customers per month. Hairdressing taught me discipline, rigor and attention to detail, as well as a real mastery of customer relations.",
      "extras.video.title": "Video / Vlog",
      "extras.video.desc": "Video production and editing, guided by creativity and the pleasure of telling stories through images.",
      "extras.football.title": "Team football & community involvement",
      "extras.football.desc": "Involved in an association, I have already supervised teams and helped organize events. Team football is one of our activities and reflects values of sharing, solidarity and collective work.",
      "projects.keepcloud.desc": "Task management application.",
      "projects.memory.desc": "Interactive card game to train visual memory.",
      "projects.abbpc.desc": "Website redesign for an IT services company.",
      "projects.crakitoko.desc": "Personal project for an online game based on the Cracklist board game concept.",
      "extras.barber.category": "Discipline & Customer Relations",
      "extras.video.category": "Creativity",
      "extras.football.category": "Team Spirit",
      "skills.frontend": "Front-end",
      "skills.backend": "Back-end",
      "skills.database": "Databases",
      "skills.devops": "DevOps / Infrastructure",
      "skills.tools": "Tools & Versioning"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr",
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
