import TiltedCard from "@/animations/TitledCard";
import { useEffect, useState } from "react";
import LogoLoop from "@/animations/LogoLoop";
import PixelCharacter from "../animations/PixelCharacter";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSupabase,
  SiMysql,
  SiGit,
  SiGithub,
  SiVite,
  SiExpo,
  SiPostman,
  SiVercel,
  SiHtml5,
  SiPython,
  SiTypescript,
} from "react-icons/si";

//pfp
import pfp1 from "../assets/v2/pfp1.png";

function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const techLogos = [
    { node: <SiReact />, title: "React" },
    { node: <SiNextdotjs />, title: "Next.js" },
    { node: <SiJavascript />, title: "JavaScript" },
    { node: <SiTailwindcss />, title: "Tailwind CSS" },
    { node: <SiNodedotjs />, title: "Node.js" },
    { node: <SiExpress />, title: "Express.js" },
    { node: <SiSupabase />, title: "Supabase" },
    { node: <SiMysql />, title: "MySQL" },
    { node: <SiGit />, title: "Git" },
    { node: <SiGithub />, title: "GitHub" },
    { node: <SiVite />, title: "Vite" },
    { node: <SiExpo />, title: "Expo" },
    { node: <SiVercel />, title: "Vercel" },
    { node: <SiPython />, title: "Python" },
  ];
  const techGroups = [
    {
      title: "Front End",
      items: [
        "JavaScript",
        "TypeScript",
        "React",
        "React Native",
        "Next.js",
        "Tailwind CSS",
        "CSS3",
        "Vite",
        "Expo",
      ],
    },
    {
      title: "Back End",
      items: ["Node.js", "Express.js", "Supabase", "MongoDB", "MySQL"],
    },
    {
      title: "Data Analytics",
      items: ["Python", "Excel", "Tableau"],
    },
    {
      title: "Other Tools",
      items: [
        "Git",
        "GitHub",
        "Vercel",
        "Codex",
        "Claude",
        "Gemini",
        "VS Code",
      ],
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-0 md:px-0 py-10 md:py-20">
      <div className="mx-auto grid max-w-5xl items-center justify-items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Profile Card */}
        <div className="flex w-full justify-center">
          <TiltedCard
            imageSrc={pfp1}
            altText="Arwin Janoyan"
            captionText="Arwin Janoyan"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={10}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip
            displayOverlayContent
            overlayContent={
              <div className="flex h-full items-end rounded-2xl bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5">
                <h3 className="pixel-font text-sm font-semibold text-white">
                  Arwin Janoyan - dev
                </h3>
              </div>
            }
          />
        </div>

        {/* About */}
        <div className="max-w-xl text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-5">
            <h2
              id="about-greeting"
              className="pixel-font text-xl font-semibold sm:text-2xl"
            >
              Hi, I'm Arwin
            </h2>
          </div>

          <p className="mt-6 text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:text-[15px] sm:leading-8">
            I'm an Information Technology student at the University of Mindanao
            with a passion for building modern web applications and data-driven
            solutions.
          </p>

          <p className="mt-5 text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:text-[15px] sm:leading-8">
            I enjoy developing responsive websites, business systems, and
            interactive dashboards that solve real-world problems. My interests
            include software engineering, full-stack development, and data
            analytics.
          </p>

          <p className="mt-5 text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:text-[15px] sm:leading-8">
            Outside academics, I continuously improve my skills through personal
            projects, certifications, and programming competitions.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <span className="rounded-full border border-zinc-300 px-3 py-2 text-xs dark:border-zinc-700 sm:px-4 sm:py-2 sm:text-sm">
              Full Stack
            </span>

            <span className="rounded-full border border-zinc-300 px-3 py-2 text-xs dark:border-zinc-700 sm:px-4 sm:py-2 sm:text-sm">
              Software Engineer
            </span>

            <span className="rounded-full border border-zinc-300 px-3 py-2 text-xs dark:border-zinc-700 sm:px-4 sm:py-2 sm:text-sm">
              Data Analytics
            </span>
          </div>
        </div>
      </div>

      <div className="mt-12 md:mt-16">
        <div className="mb-5 flex items-center gap-4">
          <div>
            <p className="ibm-mono text-[11px] uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
              Tech stack
            </p>
            <h2 className="pixel-font mt-1 text-lg">Tools I use</h2>
          </div>
          <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
        </div>

        <div className="relative h-24 overflow-hidden">
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            ariaLabel="Technologies I use"
          />
        </div>
      </div>

      <div className="mt-8 w-full min-w-0">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 id="stack-heading" className="pixel-font text-2xl sm:text-3xl">
              My toolkit<span className="text-zinc-400">.</span>
            </h3>

            <p className="mt-3 max-w-md text-sm leading-6 text-zinc-500 dark:text-zinc-400">
              A collection of tools and technologies I use to turn ideas into
              working products.
            </p>
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {techGroups.map((group, index) => (
            <section
              key={group.title}
              className="group relative min-w-0 overflow-hidden rounded-xl border border-zinc-200 bg-white p-5 transition-all duration-300 hover:border-zinc-400 hover:shadow-[0_8px_30px_-18px_rgba(0,0,0,0.18)] dark:border-zinc-800 dark:bg-zinc-950/50 dark:hover:border-zinc-600 sm:p-6"
            >
              {/* Decorative index */}
              <span className="pointer-events-none absolute right-4 top-3 select-none font-mono text-5xl font-bold text-zinc-100 transition-colors duration-300 group-hover:text-zinc-200/80 dark:text-zinc-900 dark:group-hover:text-zinc-800">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Category heading */}
              <div className="relative mb-5 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {group.title}
                  </h4>

                  <p className="mt-1.5 text-xs text-zinc-500 dark:text-zinc-500">
                    {group.items.length}{" "}
                    {group.items.length === 1 ? "technology" : "technologies"}
                  </p>
                </div>
              </div>

              {/* Technology Tags */}
              <div className="relative flex flex-wrap gap-2">
                {group.items.map((title) => (
                  <span
                    key={title}
                    className="inline-flex max-w-full items-center rounded-md border border-zinc-200/80 bg-zinc-50 px-2.5 py-1.5 text-[11px] font-medium leading-4 text-zinc-600 transition-all duration-200 hover:border-zinc-300 hover:bg-white hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-white"
                  >
                    <span className="break-words">{title}</span>
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
