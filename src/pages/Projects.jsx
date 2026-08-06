import ScrollReveal from "../animations/ScrollReveal";
import ProjectCard from "@/modal/ProjectsCard";
import projects from "@/data/projects";

function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 transition-colors duration-300">
      {/* Heading */}
      <header className="mb-12">
        <h1 className="pixel-font mb-4 text-2xl font-bold">Projects</h1>

        <ScrollReveal
          baseOpacity={0}
          enableBlur
          blurStrength={8}
          textClassName="ibm-mono text-sm md:text-lg font-light leading-7 text-zinc-600 dark:text-zinc-400"
        >
          Products and platforms I've designed and shipped—spanning developer
          education, generative AI, and consumer apps.
        </ScrollReveal>
      </header>

      {/* Project Cards */}
      <div className="space-y-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
