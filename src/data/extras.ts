export interface Extra {
  title: string;
  description: string;
  image: string;
  category: string;
}

export const extras: Extra[] = [
  {
    title: "Barber / Coiffeur",
    description: "Auto-entrepreneur passionné par le détail et la relation client. La coiffure m'a appris la discipline et la rigueur.",
    image: "resources/extras/lamsbarber.mp4",
    category: "Discipline & Relation Client"
  },
  {
    title: "Vidéo / Vlog",
    description: "Réalisation et montage vidéo. Un œil créatif pour raconter des histoires et capturer l'instant.",
    image: "resources/extras/video-01.mp4",
    category: "Créativité"
  },
  {
    title: "Football en équipe",
    description: "Pratique en club. L'esprit d'équipe, la communication et l'effort collectif vers un but commun.",
    image: "resources/extras/YujiNike.mp4",
    category: "Esprit d'équipe"
  }
];
