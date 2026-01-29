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
      "contact.success": "Message envoyé avec succès !"
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
      "contact.success": "Message sent successfully!"
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
