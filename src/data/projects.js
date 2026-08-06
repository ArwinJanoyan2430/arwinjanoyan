import OmboyStore from "../assets/v2/alingnena.png";
import Kstock from "../assets/v2/Kstock.png";

const projects = [
  {
    id: 1,
    image: OmboyStore,
    title: "OmboyStore",
    subtitle: "POS & Inventory Management System",
    description:
      "A full-stack business management system that helps sari-sari store owners streamline inventory, process sales, monitor stock levels, and generate sales reports through an intuitive dashboard.",
    technologies: ["React", "Node.js", "Supabase", "JavaScript", "TailwindCss"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    image: Kstock,
    title: "KumpraStock",
    subtitle: "Grocery Purchase Calculator",
    description:
      "A lightweight grocery purchase calculator that lets users add items, enter prices and quantities, and instantly calculate the total cost to stay within budget.",
    technologies: ["React Native", "Expo", "JavaScript","AsyncStorage"],
    liveLink: "#",
    githubLink: "#",
  },
];

export default projects;
