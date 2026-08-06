import ScrollReveal from "../animations/ScrollReveal";
import ProjectCard from "@/modal/ProjectsCard";
import projects from "@/data/projects";

function Projects() {
  return (
    <section className="mx-auto max-w-7xl px-10 py-20 transition-colors duration-300">
      {/* Heading */}
      <header className="mb-12">
        <h1 className="pixel-font md:text-3xl sm:text-4xl">Things I've Built</h1>

        <ScrollReveal
          baseOpacity={0}
          enableBlur
          blurStrength={8}
          textClassName="ibm-mono text-sm md:text-lg font-light leading-7 text-zinc-600 dark:text-zinc-400"
        >
          Real-world applications I've designed and developed using modern web and mobile technologies.
        </ScrollReveal>
      </header>

      {/* Project Cards */}
      <div className="space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
