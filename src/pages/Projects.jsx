import { useState } from "react";
import ScrollReveal from "../animations/ScrollReveal";
import ProjectCard from "@/modal/ProjectsCard";
import ResearchModal from "@/modal/Research";
import projects from "@/data/projects";
import sensCaneImage from "@/assets/SENSCANE.png";
import { ArrowUpRight, Eye } from "lucide-react";

function Projects() {
  const [showResearch, setShowResearch] = useState(false);
  const clientProjects = projects.filter((project) => project.clientProject);
  const selfProjects = projects.filter((project) => !project.clientProject);

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:px-10 md:py-20">
      {/* Heading */}
      <header className="mb-12 grid gap-6 md:mb-16 md:grid-cols-[0.8fr_1.2fr] md:items-end">
        <div>
          <p className="ibm-mono text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-400">
            Work / Selected projects
          </p>
          <h1 className="pixel-font mt-4 text-xl font-bold sm:text-3xl">What I&apos;ve built</h1>
        </div>

        <ScrollReveal
          baseOpacity={0}
          enableBlur
          blurStrength={8}
          containerClassName="md:flex md:justify-end"
          textClassName="ibm-mono max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:text-base md:mx-0 md:text-right"
        >
          Where ideas became applications.
        </ScrollReveal>
      </header>
      

      {/* Client Projects */}
      <section aria-labelledby="client-projects-heading">
        <div className="mb-5 flex items-center gap-4">
          <h2
            id="client-projects-heading"
            className="ibm-mono shrink-0 text-[10px] font-medium uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400"
          >
            Client projects
          </h2>
          <span className="h-px w-full bg-zinc-200 dark:bg-zinc-800" />
          <span className="ibm-mono shrink-0 text-[9px] uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-600">
            {String(clientProjects.length).padStart(2, "0")} projects
          </span>
        </div>

        <div className="space-y-6">
          {clientProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      {/* Self Projects */}
      <section className="mt-14 sm:mt-20" aria-labelledby="self-projects-heading">
        <div className="mb-5 flex items-center gap-4">
          <h2
            id="self-projects-heading"
            className="ibm-mono shrink-0 text-[10px] font-medium uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400"
          >
            Self projects
          </h2>
          <span className="h-px w-full bg-zinc-200 dark:bg-zinc-800" />
          <span className="ibm-mono shrink-0 text-[9px] uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-600">
            {String(selfProjects.length).padStart(2, "0")} projects
          </span>
        </div>

        <div className="space-y-6">
          {selfProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      <section className="mt-14 sm:mt-20" aria-labelledby="research-heading">
        <div className="mb-5 flex items-center gap-4">
          <p
            id="research-heading"
            className="ibm-mono shrink-0 text-[10px] font-medium uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400"
          >
            Academic research
          </p>
          <span className="h-px w-full bg-zinc-200 dark:bg-zinc-800" />
          <span className="ibm-mono shrink-0 text-[9px] uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-600">
            Grade 12
          </span>
        </div>

        <button
          type="button"
          onClick={() => setShowResearch(true)}
          className="group relative grid w-full overflow-hidden rounded-[28px] border border-zinc-200 bg-white p-3 text-left text-zinc-950 shadow-[0_22px_65px_-38px_rgba(24,24,27,0.45)] transition duration-500 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_30px_75px_-35px_rgba(24,24,27,0.55)] dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:border-zinc-700 dark:hover:shadow-black/40 sm:p-4 md:grid-cols-[1.05fr_0.95fr] md:gap-2"
        >
          <span className="pointer-events-none absolute -right-5 -top-12 select-none font-mono text-[10rem] font-bold leading-none text-zinc-950/[0.025] dark:text-white/[0.025] sm:text-[14rem]">
            01
          </span>

          <div className="relative min-h-[230px] overflow-hidden rounded-[22px] bg-white sm:min-h-[300px] md:min-h-[380px]">
            <img
              src={sensCaneImage}
              alt="SensCane smart blind stick research presentation"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
            <p className="ibm-mono absolute bottom-4 left-4 rounded-full border border-white/25 bg-zinc-950/55 px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-white backdrop-blur-sm">
              Research archive / 01
            </p>
          </div>

          <div className="relative flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <div className="flex items-center gap-3">
              <span className="ibm-mono text-[9px] font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                Grade 12 research
              </span>
            </div>
            <p className="ibm-mono mt-6 text-[9px] font-medium uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
              Assistive technology / STEM
            </p>
            <h2 className="pixel-font mt-7 text-3xl leading-none tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              SensCane
            </h2>
            <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400 sm:text-base">
              Smart Blind Stick for Visually Impaired Individuals
            </p>
            <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              A Grade 12 research requirement exploring how an affordable,
              sensor-assisted device can support safer and more independent
              navigation.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 border-b border-zinc-300 pb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-950 transition-colors group-hover:border-zinc-950 dark:border-zinc-600 dark:text-white dark:group-hover:border-white">
              Explore the research
              <ArrowUpRight
                size={15}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </div>
          </div>
        </button>
      </section>

      {showResearch && (
        <ResearchModal onClose={() => setShowResearch(false)} />
      )}
    </section>
  );
}

export default Projects;
