import TiltedCard from "@/animations/TitledCard";
import { useEffect, useState } from "react";
import LogoLoop from "@/animations/LogoLoop";
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
      items: [
        "Node.js",
        "Express.js",
        "Supabase",
        "MongoDB",
        "MySQL",
      ],
    },
    {
      title: "Data Analytics",
      items: ["Python", "Excel", "Tableau"],
    },
    {
      title: "Other Tools",
      items: ["Git", "GitHub", "Vercel", "Codex", "Claude", "Gemini", "VS Code"],
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
          <h2 className="pixel-font text-xl font-semibold sm:text-2xl">
            Hi, I'm Arwin
          </h2>

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


<div className="mt-6 w-full min-w-0 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950/50">
  {/* Header */}
  <div className="relative overflow-hidden border-b border-zinc-200 px-5 py-6 sm:px-7 sm:py-8 dark:border-zinc-800">
    <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-zinc-100 blur-3xl dark:bg-zinc-800/40" />

    <div className="relative flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div className="min-w-0">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-900 dark:bg-white" />
          <span className="ibm-mono text-[9px] font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Technologies & tools
          </span>
        </div>

        <h3 className="pixel-font text-xl tracking-tight text-zinc-950 dark:text-white sm:text-3xl">
          My toolkit
        </h3>

        <p className="mt-3 max-w-lg text-xs leading-6 text-zinc-600 dark:text-zinc-400 sm:text-sm">
          The technologies I use to build functional, modern digital
          experiences.
        </p>
      </div>

      {/* Tool Count */}
      <div className="flex w-fit items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900/70">
        <span className="text-2xl font-semibold tabular-nums text-zinc-950 dark:text-white">
          {techGroups.reduce(
            (count, group) => count + group.items.length,
            0
          )}
        </span>

        <div>
          <p className="ibm-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Total
          </p>
          <p className="text-xs text-zinc-600 dark:text-zinc-300">
            Technologies
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Categories */}
  <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
    {techGroups.map((group, index) => (
      <section
        key={group.title}
        className="px-5 py-5 transition-colors duration-300 hover:bg-zinc-50/80 sm:px-7 sm:py-6 dark:hover:bg-zinc-900/40"
      >
        <div className="grid gap-4 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-6">
          {/* Category Label */}
          <div className="flex items-center gap-3 sm:items-start">
            <span className="ibm-mono pt-0.5 text-[10px] text-zinc-400 dark:text-zinc-600">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="min-w-0">
              <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-800 dark:text-zinc-200">
                {group.title}
              </h4>

              <p className="mt-1 text-[10px] text-zinc-500 dark:text-zinc-500">
                {group.items.length}{" "}
                {group.items.length === 1 ? "technology" : "technologies"}
              </p>
            </div>
          </div>

          {/* Technology Tags */}
          <div className="flex min-w-0 flex-wrap content-start gap-2">
            {group.items.map((title) => (
              <span
                key={title}
                className="inline-flex max-w-full items-center rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-medium text-zinc-700 transition-all duration-200 hover:border-zinc-400 hover:bg-white hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-white"
              >
                <span className="break-words">{title}</span>
              </span>
            ))}
          </div>
        </div>
      </section>
    ))}
  </div>
</div>

    </section>
  );
}

export default About;
