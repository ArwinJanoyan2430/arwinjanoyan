import { Github, ArrowUpRight } from "lucide-react";

export default function ProjectCard({
  image,
  title,
  subtitle,
  description,
  technologies,
  liveLink,
  githubLink,
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900 md:p-6">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        {/* Image */}
        <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
          <img
            src={image}
            alt={title}
            className="h-56 w-full object-cover transition duration-500 sm:h-72 lg:h-80"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col">
          <span className="ibm-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500">
            Featured Project
          </span>

          <h2 className="pixel-font mt-2 text-3xl md:text-4xl">{title}</h2>

          <p className="ibm-mono mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            {subtitle}
          </p>

          <p className="ibm-mono mt-5 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            {description}
          </p>

          {/* Tech Stack */}
          <div className="mt-5 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="ibm-mono rounded-full border border-zinc-300 bg-zinc-50 px-3 py-1 text-[11px] uppercase tracking-wide text-zinc-700 transition hover:bg-zinc-900 hover:text-white dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-white dark:hover:text-black"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-6 flex items-center gap-3">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glitch-fill ibm-mono inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs transition border   "
            >
              <span className="text">View Project</span>
              <span className="text-decoration"> _ </span>
              <span className="decoration">⇒</span>
            </a>

            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-300 transition-all duration-300 hover:scale-110 hover:bg-zinc-600 hover:text-white dark:border-zinc-700 dark:hover:bg-white dark:hover:text-black"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
