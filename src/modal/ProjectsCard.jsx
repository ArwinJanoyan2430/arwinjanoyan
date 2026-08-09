import { ArrowUpRight, Github, Lock } from "lucide-react";

export default function ProjectCard({
  image,
  title,
  subtitle,
  description,
  technologies,
  liveLink,
  githubLink,
  private: isPrivate,
}) {
  return (
    <article className="group grid overflow-hidden rounded-3xl border border-zinc-200 bg-white p-3 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-950/10 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:shadow-black/30 md:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] md:p-4">
      <div className="relative min-h-64 overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800 md:min-h-[350px]">
        <img
          src={image}
          alt={`${title} project preview`}
          className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
      </div>

      <div className="flex flex-col px-2 pb-3 pt-6 sm:px-4 md:px-8 md:py-7">
        <p className="ibm-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
          Featured project
        </p>

        <h2 className="pixel-font mt-3 text-2xl leading-tight sm:text-3xl">
          {title}
        </h2>
        <p className="ibm-mono mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          {subtitle}
        </p>

        <p className="ibm-mono mt-5 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="ibm-mono rounded-md bg-zinc-100 px-2.5 py-1 text-[10px] uppercase tracking-wide text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-7 flex items-center gap-3">
          {isPrivate ? (
            <div className="ibm-mono inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-xs text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400">
              <Lock size={14} aria-hidden="true" />
              Private client project
            </div>
          ) : (
            <>
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ibm-mono inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2.5 text-xs font-medium text-white transition hover:-translate-y-0.5 hover:bg-zinc-700 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                View project <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} source on GitHub`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 transition hover:-translate-y-0.5 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-white dark:hover:bg-white dark:hover:text-zinc-950"
              >
                <Github size={18} aria-hidden="true" />
              </a>
            </>
          )}
        </div>
      </div>
    </article>
  );
}
