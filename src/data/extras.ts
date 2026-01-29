export interface Extra {
  title: string;
  description: string;
  image: string;
  category: string;
}

export const extras: Extra[] = [
  {
    title: "Coiffeur / Barbier",
    description: "Auto-entrepreneur, habitué à gérer une forte clientèle avec une centaine de clients par mois. La coiffure m’a appris la discipline, la rigueur et l’exigence du détail, ainsi qu’une vraie maîtrise de la relation client.",
    image: "resources/extras/lamsbarber.mp4",
    category: "Discipline & Relation Client"
  },
  {
    title: "Vidéo / Vlog",
    description: "Réalisation et montage vidéo, guidé par la créativité et le plaisir de raconter des histoires à travers l’image.",
    image: "resources/extras/video-01.mp4",
    category: "Créativité"
  },
  {
    title: "Football en équipe",
    description: "Investi au sein d’une association, j’ai déjà encadré des équipes et aidé à l’organisation d’événements. Le football en équipe fait partie de nos activités et reflète des valeurs de partage, de solidarité et de travail collectif.",
    image: "resources/extras/YujiNike.mp4",
    category: "Esprit d'équipe"
  }
];
