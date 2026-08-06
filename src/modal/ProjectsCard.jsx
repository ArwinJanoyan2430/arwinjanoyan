import { Github, ExternalLink } from "lucide-react";

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
    <article className="group mx-auto max-w-6xl overflow-hidden rounded-[30px] border border-zinc-200 bg-white p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900 md:p-8">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        {/* Image */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={title}
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-80 lg:h-[420px]"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center">
          <h2 className="pixel-font text-4xl font-extrabold tracking-tight lg:text-5xl">
            {title}
          </h2>

          <p className="ibm-mono mt-2 text-lg text-zinc-600 dark:text-zinc-400">
            {subtitle}
          </p>

          <p className="ibm-mono mt-6 text-sm leading-8 text-zinc-600 dark:text-zinc-400 lg:text-base">
            {description}
          </p>

          {/* Tech Stack */}
          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="ibm-mono rounded-full border border-zinc-300 px-4 py-2 text-xs font-medium uppercase tracking-wide dark:border-zinc-700"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex items-center gap-4">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ibm-mono inline-flex items-center gap-2 rounded-xl border border-zinc-900 bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 dark:border-white dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              Take a Look
              <ExternalLink size={16} />
            </a>

            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-300 transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
