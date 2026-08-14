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
            include full-stack development, UI/UX design, and data analytics.
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
              UI/UX
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

      <div className="mt-4 w-full min-w-0 animate-[fadeIn_0.35s_ease-out] overflow-hidden rounded-[24px] border border-zinc-200/80 bg-[linear-gradient(135deg,_rgba(255,255,255,0.98),_rgba(244,244,245,0.96))] p-2 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] dark:border-zinc-800 dark:bg-[linear-gradient(135deg,_rgba(24,24,27,0.98),_rgba(9,9,11,1))] sm:rounded-[32px] sm:p-3">
        <div className="min-w-0 rounded-[18px] p-3 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/70 sm:rounded-[24px] sm:p-4">
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:justify-between">
            <div className="min-w-0">
              <p className="ibm-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                Stack overview
              </p>
              <h3 className="pixel-font mt-1 text-base text-zinc-900 dark:text-white sm:text-lg">
                My toolkit
              </h3>
              <p className="mt-2 max-w-xl text-xs leading-5 text-zinc-600 dark:text-zinc-400 sm:text-sm sm:leading-6">
                A quick look at the languages, frameworks, and tools I use to
                build modern products.
              </p>
            </div>
            <div className="shrink-0 rounded-full border border-zinc-200 bg-zinc-950 px-3 py-1 text-xs font-semibold text-white shadow-sm dark:border-zinc-700 dark:bg-white dark:text-zinc-950">
              {techGroups.reduce(
                (count, group) => count + group.items.length,
                0,
              )}{" "}
              tools
            </div>
          </div>

          <div className="mt-4 grid min-w-0 grid-cols-1 gap-3 md:mt-5 md:grid-cols-2">
            {techGroups.map((group, index) => (
              <div
                key={group.title}
                className={`group relative min-w-0 overflow-hidden rounded-[18px] border border-zinc-200 p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 sm:rounded-[22px] sm:p-4 ${
                  index % 2 === 0
                    ? "bg-zinc-50/90 dark:bg-zinc-950/80"
                    : "bg-white/90 dark:bg-zinc-900/80"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/5 via-transparent to-zinc-900/10 opacity-0 transition duration-300 group-hover:opacity-100 dark:from-white/5 dark:to-white/10" />
                <div className="relative flex min-w-0 items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                      {group.title}
                    </p>
                    <h4 className="mt-1 break-words text-sm font-semibold text-zinc-900 transition-colors duration-300 group-hover:text-zinc-700 dark:text-zinc-100 dark:group-hover:text-zinc-300 sm:text-base">
                      {group.title}
                    </h4>
                  </div>
                  <span className="shrink-0 rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-zinc-600 transition-all duration-300 group-hover:scale-105 group-hover:shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    {group.items.length}
                  </span>
                </div>

                <div className="relative mt-3 flex min-w-0 flex-wrap gap-1.5 sm:gap-2">
                  {group.items.map((title) => (
                    <span
                      key={title}
                      className="max-w-full break-words rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 sm:px-3 sm:py-1.5 sm:text-sm"
                    >
                      {title}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
