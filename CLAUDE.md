# Portfolio Lam - Guide de maintenance

Ce portfolio est conçu pour être performant, moderne et extrêmement facile à mettre à jour.

## Commandes de développement

- **Lancer le site en local** : `npm run dev`
- **Builder pour la production** : `npm run build`
- **Vérifier les types & lint** : `npm run lint`

## Comment ajouter un projet ?

1. Placez la capture d'écran du projet dans `resources/projects/nom-du-projet.jpg`.
2. Ouvrez le fichier `src/data/projects.ts`.
3. Ajoutez un nouvel objet à la liste `projects` :

```typescript
{
  title: "Nom du projet",
  description: "Brève description pour le recruteur.",
  liveUrl: "https://lien-du-site.com",
  githubUrl: "https://github.com/...",
  image: "resources/projects/nom-du-projet.jpg",
  tags: ["Techno 1", "Techno 2"]
}
```

## Structure des ressources

Toutes les ressources doivent être placées dans le dossier `public/resources/` :
- `/profile` : Photo de profil (`profile.jpg`)
- `/projects` : Captures d'écran des projets
- `/extras` : Photos pour la section "Au-delà du code"
- `/cv` : CV au format PDF (`lam-tham-vo-cv.pdf`)

## Stack Technique
- **React** + **TypeScript** + **Vite**
- **Tailwind CSS** (Styling)
- **Framer Motion** (Animations)
- **Lucide React** (Icônes)
- **i18next** (Multilingue FR/EN)
