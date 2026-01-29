export interface Extra {
  title: string;
  description: string;
  image: string;
  category: string;
}

export const extras: Extra[] = [
  {
    title: "extras.barber.title",
    description: "extras.barber.desc",
    image: "resources/extras/lamsbarber.mp4",
    category: "extras.barber.category"
  },
  {
    title: "extras.video.title",
    description: "extras.video.desc",
    image: "resources/extras/video-01.mp4",
    category: "extras.video.category"
  },
  {
    title: "extras.football.title",
    description: "extras.football.desc",
    image: "resources/extras/YujiNike.mp4",
    category: "extras.football.category"
  }
];
