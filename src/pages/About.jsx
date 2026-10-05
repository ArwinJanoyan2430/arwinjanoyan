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
        "AsyncStorage",
      ],
    },
    {
      title: "Data Analytics",
      items: ["Python", "Excel", "Tableau"],
    },
    {
      title: "Other Tools",
      items: ["Git", "GitHub", "Vercel", "ChatGpt 5.6", "Gemini", "VS Code"],
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-8 md:px-10 py-10 md:py-18">
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

      <div className="mt-4 w-full min-w-0 overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-[0_20px_70px_-25px_rgba(0,0,0,0.2)] dark:border-zinc-800 dark:bg-zinc-950">
        {/* Header */}
        <div className="border-b border-zinc-200 px-4 py-5 sm:px-6 sm:py-6 dark:border-zinc-800">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="min-w-0">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-zinc-900 dark:bg-white" />
                <p className="ibm-mono text-[10px] font-medium uppercase tracking-[0.25em] text-zinc-500">
                  Stack overview
                </p>
              </div>

              <h3 className="pixel-font text-xl tracking-tight text-zinc-950 dark:text-white sm:text-2xl">
                My toolkit
              </h3>

              <p className="mt-2 max-w-2xl text-xs leading-5 text-zinc-500 dark:text-zinc-400 sm:text-sm sm:leading-6">
                Technologies and tools I use to design, develop, and ship modern
                digital products.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <span className="ibm-mono rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-[10px] uppercase tracking-wider text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
                {techGroups.reduce(
                  (count, group) => count + group.items.length,
                  0,
                )}{" "}
                tools
              </span>
            </div>
          </div>
        </div>

        {/* Stack */}
        <div className="grid min-w-0 grid-cols-1 divide-y divide-zinc-200 dark:divide-zinc-800 md:grid-cols-2 md:divide-x md:divide-y-0">
          {techGroups.map((group, index) => (
            <div
              key={group.title}
              className="group relative min-w-0 p-4 transition-colors duration-300 hover:bg-zinc-50 sm:p-6 dark:hover:bg-zinc-900/60"
            >
              {/* Category number */}
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="ibm-mono text-[10px] text-zinc-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="h-px w-8 bg-zinc-200 dark:bg-zinc-800" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                    {group.title}
                  </p>
                </div>

                <span className="ibm-mono text-[10px] text-zinc-400">
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </div>

              {/* Technologies */}
              <div className="flex min-w-0 flex-wrap gap-2">
                {group.items.map((title) => (
                  <span
                    key={title}
                    className="inline-flex max-w-full items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-medium text-zinc-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-white hover:text-zinc-950 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-white"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300 transition-colors duration-300 group-hover:bg-zinc-500 dark:bg-zinc-700 dark:group-hover:bg-zinc-400" />

                    <span className="break-words">{title}</span>
                  </span>
                ))}
              </div>

              {/* Subtle bottom indicator */}
              <div className="mt-6 flex items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
                <span className="ibm-mono text-[9px] uppercase tracking-widest text-zinc-400">
                  active stack
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-zinc-200 bg-zinc-50/70 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900/40 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <p className="ibm-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400">
              Built with curiosity
            </p>

            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-600 dark:bg-zinc-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
