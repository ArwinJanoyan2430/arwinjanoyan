import Kstock from "../assets/v2/Kstock.png";
import nike from "../assets/v2/nike.png";
import aralflow from "../assets/aralflow.png";

//rj insurance services
import RJ from "../assets/v2/rj/rj-insurance.png";
import RJDashboard from "../assets/v2/rj/rj-dashboard.png";
import RJClient from "../assets/v2/rj/rj-clientlist.png";
import RJpending from "../assets/v2/rj/rj-pending.png";
import RJTranscation from "../assets/v2/rj/rj-transaction.png";

//omboy store
import OmboyStore from "../assets/v2/omboystore/omboystore.png";
import dashboard from "../assets/v2/omboystore/dashboard.png";
import cashier from "../assets/v2/omboystore/cashier.png";
import inventory from "../assets/v2/omboystore/inventory.png";
import sales from "../assets/v2/omboystore/salesreport.png";

const projects = [
  {
    id: 1,
    images: [RJ, RJDashboard, RJTranscation, RJpending, RJClient],
    title: "RJ Insurance Services",
    subtitle: "Insurance / Vehicle Services / Management System",

    description:
      "A web-based insurance and vehicle services management system that helps manage clients, vehicle records, insurance transactions, and LTO-related services in one organized platform.",

    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
      "Supabase",
      "React Router",
      "React Icons",
      "Git",
      "GitHub",
      "Vercel",
    ],
    private: true,
    liveLink: "#",
    githubLink: "#",
  },

  {
    id: 2,
    images: [OmboyStore, dashboard, cashier, inventory, sales],
    title: "Omboy Store",
    subtitle: "Smart POS / Inventory / Sales Analytics",
    description:
      "A cashier and inventory system that makes selling easier, manages products smoothly, and helps businesses grow.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "Supabase",
      "React Router",
      "React Icons",
      "Recharts",
      "Git",
      "GitHub",
      "Vercel",
    ],
    private: true,
    liveLink: "#",
    githubLink: "#",
  },

  {
    id: 3,
    images: [aralflow],
    title: "AralFlow",
    subtitle: "AI-Powered Study Companion",
    description:
      "An AI-powered study platform that transforms PDF study materials into focused practice experiences, helping students review, practice, and improve more effectively.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Supabase",
      "Framer Motion",
      "JavaScript",
      "Git",
      "GitHub",
      "Vercel",
    ],
    liveLink: "https://aralflow.vercel.app/",
    githubLink: "https://github.com/ArwinJanoyan2430/AralFlow",
    private: false,
  },

  {
    id: 4,
    images: [Kstock],
    title: "KumpraStock",
    subtitle: "POS & Inventory System",
    description:
      "A grocery budgeting app that helps you plan what to buy, organize your cart, and know your total before you checkout.",
    technologies: [
      "React Native",
      "Expo",
      "Expo Router",
      "TypeScript",
      "AsyncStorage",
      "React",
      "Git",
      "GitHub",
      "Vercel",
    ],
    liveLink: "https://kumprastock.vercel.app/",
    githubLink: "https://github.com/ArwinJanoyan2430/KumpraStock",
    private: false,
  },
  {
    id: 5,
    images: [nike],
    title: "Nike Landing Page",
    subtitle: "Frontend Practice Project",

    description:
      "A Nike-inspired landing page created as a frontend practice project to improve my skills in React, responsive design, and modern UI development.",

    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Git",
      "GitHub",
      "Vercel",
    ],

    liveLink: "https://nike-landingpage-rose.vercel.app/",
    githubLink: "https://github.com/ArwinJanoyan2430/nike-landingpage",
    private: false,
  },
];

export default projects;
