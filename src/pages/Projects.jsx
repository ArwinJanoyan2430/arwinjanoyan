import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  FlaskConical,
  FolderGit2,
} from "lucide-react";

import ScrollReveal from "../animations/ScrollReveal";
import ProjectCard from "@/modal/ProjectsCard";
import ResearchModal from "@/modal/Research";
import OngoingProjects from "../modal/OngoingProjects";
import projects from "@/data/projects";
import sensCaneImage from "@/assets/SENSCANE.png";

function Projects() {
  const [showResearch, setShowResearch] = useState(false);

  const clientProjects = projects.filter((project) => project.clientProject);

  const selfProjects = projects.filter((project) => !project.clientProject);


  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-7xl px-0 pb-0 pt-28 sm:px-0 sm:pt-32 md:px-0 md:pb-32"
    >
      {/* Hero */}
      {/* Header */}
<header className="mb-10 border-b border-zinc-200 pb-6 dark:border-zinc-800 sm:mb-12">
  <p className="ibm-mono mb-3 text-[10px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
    Portfolio
  </p>

  <h1 className="pixel-font text-2xl font-bold tracking-tight sm:text-3xl">
    Projects
  </h1>

  <p className="ibm-mono mt-3 max-w-xl text-xs leading-6 text-zinc-600 dark:text-zinc-400 sm:text-sm">
    A selection of client work, personal projects, and experiments I've built
    through code and creativity.
  </p>
</header>

      {/* Client Projects */}
      <section id="client-work" className="scroll-mt-28">
        <SectionHeading
          number="01"
          title="Client work"
          description="Projects built around real needs and practical solutions."
          count={clientProjects.length}
          icon={<FolderGit2 size={16} />}
        />

        {clientProjects.length > 0 ? (
          <div className="mt-7 space-y-6">
            {clientProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        ) : (
          <EmptyState message="Client projects will appear here." />
        )}
      </section>

      {/* Personal Projects */}
      <section className="mt-20 sm:mt-28">
        <SectionHeading
          number="02"
          title="Personal projects"
          description="Things I've designed, developed, and learned from."
          count={selfProjects.length}
          icon={<FolderGit2 size={16} />}
        />

        {selfProjects.length > 0 ? (
          <div className="mt-7 space-y-6">
            {selfProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        ) : (
          <EmptyState message="Personal projects will appear here." />
        )}
      </section>

      {/* Ongoing Projects */}
      <section className="mt-20 sm:mt-28">
        <SectionHeading
          number="03"
          title="Currently building"
          description="Experiments and projects still in progress."
          icon={<FolderGit2 size={16} />}
          badge="In progress"
        />

        <div className="mt-7">
          <OngoingProjects />
        </div>
      </section>

      {/* Research */}
      <section className="mt-20 sm:mt-28">
        <SectionHeading
          number="04"
          title="Research & development"
          description="Academic work exploring technology and its applications."
          icon={<FlaskConical size={16} />}
          badge="Academic"
        />

        <button
          type="button"
          onClick={() => setShowResearch(true)}
          className="group mt-7 grid w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 dark:bg-zinc-900/80 text-left transition duration-500 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-950/5 dark:border-zinc-800 dark:hover:border-zinc-600 dark:hover:shadow-black/20 md:grid-cols-[1.05fr_0.95fr]"
        >
          {/* Research Image */}
          <div className="relative min-h-[240px] overflow-hidden bg-zinc-100 dark:bg-zinc-900 sm:min-h-[340px]">
            <img
              src={sensCaneImage}
              alt="SensCane smart blind stick research presentation"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            <span className="ibm-mono absolute bottom-4 left-4 rounded-full border border-white/25 bg-black/40 px-3 py-2 text-[9px] uppercase tracking-[0.18em] text-white backdrop-blur-md">
              Research archive / 01
            </span>
          </div>

          {/* Research Details */}
          <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
            <div className="flex flex-wrap items-center gap-2">
              <span className="ibm-mono rounded-full bg-zinc-100 px-3 py-1.5 text-[9px] uppercase tracking-wider text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                Grade 12
              </span>
              <span className="ibm-mono rounded-full border border-zinc-200 px-3 py-1.5 text-[9px] uppercase tracking-wider text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
                Assistive technology
              </span>
            </div>

            <h3 className="pixel-font mt-7 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              SensCane
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400 sm:text-base">
              Smart Blind Stick for Visually Impaired Individuals
            </p>

            <p className="mt-5 max-w-lg text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              An academic research project exploring an affordable,
              sensor-assisted device designed to support safer and more
              independent navigation for visually impaired individuals.
            </p>

            <div className="mt-8 flex items-center justify-between border-t border-zinc-200 pt-5 dark:border-zinc-800">
              <span className="ibm-mono text-[10px] uppercase tracking-[0.16em]">
                View research
              </span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 transition duration-300 group-hover:border-zinc-950 group-hover:bg-zinc-950 group-hover:text-white dark:border-zinc-700 dark:group-hover:border-white dark:group-hover:bg-white dark:group-hover:text-zinc-950">
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </div>
          </div>
        </button>
      </section>

      {showResearch && <ResearchModal onClose={() => setShowResearch(false)} />}
    </section>
  );
}

function SectionHeading({ number, title, description, count, icon, badge }) {
  return (
    <div className="flex flex-col gap-4 border-b border-zinc-200 pb-5 dark:border-zinc-800 sm:flex-row sm:items-end sm:justify-between">
      <div className="min-w-0">
        <div className="ibm-mono flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
          <span>{number}</span>
          <span className="h-px w-5 bg-zinc-300 dark:bg-zinc-700" />
          {icon}
          {badge && (
            <span className="rounded-full border border-zinc-200 px-2 py-1 tracking-wider dark:border-zinc-700">
              {badge}
            </span>
          )}
        </div>

        <h2 className="pixel-font mt-4 text-xl font-bold tracking-tight sm:text-2xl">
          {title}
        </h2>

        <p className="ibm-mono mt-3 max-w-xl text-xs leading-6 text-zinc-500 dark:text-zinc-400 sm:text-sm">
          {description}
        </p>
      </div>

      {count !== undefined && (
        <p className="ibm-mono shrink-0 text-[10px] uppercase tracking-[0.16em] text-zinc-400 dark:text-zinc-500">
          {String(count).padStart(2, "0")} items
        </p>
      )}
    </div>
  );
}

function EmptyState({ message }) {
  return (
    <div className="mt-7 rounded-2xl border border-dashed border-zinc-300 px-5 py-10 text-center dark:border-zinc-800">
      <p className="ibm-mono text-xs text-zinc-500 dark:text-zinc-400">
        {message}
      </p>
    </div>
  );
}

export default Projects;
