
import { useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Github,
  Lock,
} from "lucide-react";

export default function ProjectCard({
  images,
  image,
  title,
  subtitle,
  description,
  technologies = [],
  liveLink,
  githubLink,
  private: isPrivate,
  clientProject = false,
  variant = "default",
  category,
}) {
  const projectImages = images?.length ? images : image ? [image] : [];
  const [activeImage, setActiveImage] = useState(0);

  const showPreviousImage = () => {
    setActiveImage((current) =>
      current === 0 ? projectImages.length - 1 : current - 1,
    );
  };

  const showNextImage = () => {
    setActiveImage((current) => (current + 1) % projectImages.length);
  };

  // Directory variant
  if (variant === "directory") {
    return (
      <article className="group border-b border-zinc-200 bg-white transition-colors duration-300 hover:bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-950/20 dark:hover:bg-zinc-900/50">
        <a
          href={liveLink || githubLink || "#"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${title}`}
          className="grid grid-cols-1 gap-0 px-4 py-5 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.5fr)_auto] sm:items-center sm:gap-0 sm:px-6 sm:py-5"
        >
          {/* Project title */}
          <div className="min-w-0">
            <h2 className="pixel-font text-sm leading-relaxed text-zinc-950 transition-colors duration-300 group-hover:text-zinc-500 dark:text-zinc-100 dark:group-hover:text-zinc-400 sm:text-base">
              {title}
            </h2>

            {clientProject && (
              <span className="ibm-mono mt-2 inline-block text-[9px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                Client project
              </span>
            )}
          </div>

          {/* Project details */}
          <div className="min-w-0">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="ibm-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                {category || "Platform"}
              </span>

              <span className="text-zinc-300 dark:text-zinc-700">/</span>

              <span className="ibm-mono text-[9px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                {isPrivate ? "Private" : "Public"}
              </span>
            </div>

            <p className="max-w-2xl break-words text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {description}
            </p>
          </div>

          {/* Action */}
          <div className="flex items-center justify-between border-t mt-2 border-zinc-200/70 pt-5 dark:border-zinc-800 sm:justify-end sm:border-0 sm:pt-0">
            <span className="ibm-mono text-[9px] uppercase tracking-[0.18em] text-zinc-400 transition-colors group-hover:text-zinc-800 dark:text-zinc-500 dark:group-hover:text-zinc-200 sm:hidden">
              Explore project
            </span>

            <ArrowUpRight
              size={18}
              aria-hidden="true"
              className="shrink-0 text-zinc-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-zinc-950 dark:group-hover:text-white"
            />
          </div>
        </a>
      </article>
    );
  }

  // Default project card
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 shadow-[0_20px_60px_-30px_rgba(24,24,27,0.12)] transition-all duration-500 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_30px_80px_-30px_rgba(24,24,27,0.18)] dark:border-zinc-800 dark:bg-zinc-900/80 dark:hover:border-zinc-700 dark:hover:shadow-black/30 sm:rounded-[28px] sm:p-4">
      <div className="grid gap-5 md:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] md:gap-6">
        {/* Project image carousel */}
        <div className="relative min-h-[220px] overflow-hidden rounded-xl bg-white sm:min-h-[300px] sm:rounded-[22px] md:min-h-[360px]">
          {projectImages.length > 0 ? (
            <img
              src={projectImages[activeImage]}
              alt={`${title} project preview ${activeImage + 1} of ${projectImages.length}`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-50 dark:bg-zinc-800">
              <span className="ibm-mono text-xs uppercase tracking-widest text-zinc-400">
                No preview available
              </span>
            </div>
          )}

          {/* Image overlay */}
          {projectImages.length > 0 && (
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/75 via-zinc-950/15 to-transparent" />
          )}

          {/* Project status */}
          <div className="absolute left-3 top-3 flex flex-wrap items-center gap-2 sm:left-4 sm:top-4">
            <span className="ibm-mono rounded-full border border-white/20 bg-black/25 px-2.5 py-1.5 text-[9px] font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
              {isPrivate ? "Private" : "Live"}
            </span>
          </div>

          {/* Previous / next buttons */}
          {projectImages.length > 1 && (
            <>
              <button
                type="button"
                onClick={showPreviousImage}
                aria-label={`Show previous ${title} image`}
                className="absolute left-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white sm:left-3 sm:h-10 sm:w-10"
              >
                <ChevronLeft size={18} aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={showNextImage}
                aria-label={`Show next ${title} image`}
                className="absolute right-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white sm:right-3 sm:h-10 sm:w-10"
              >
                <ChevronRight size={18} aria-hidden="true" />
              </button>

              {/* Image indicators */}
              <div
                className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/45 px-3 py-2 backdrop-blur-sm sm:bottom-4"
                aria-label={`${title} image selector`}
              >
                {projectImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={`Show ${title} image ${index + 1}`}
                    aria-current={index === activeImage ? "true" : undefined}
                    className={`h-2 rounded-full transition-all ${
                      index === activeImage
                        ? "w-6 bg-white"
                        : "w-2 bg-white/60 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Project details */}
        <div className="flex min-w-0 flex-col justify-center px-1 pb-3 pt-2 sm:px-3 md:px-2 md:py-4">
          <p className="ibm-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 sm:text-[10px] sm:tracking-[0.22em]">
            {clientProject ? "Client project" : "Featured project"}
          </p>

          <h2 className="pixel-font mt-3 break-words text-xl leading-tight text-zinc-950 dark:text-white sm:text-2xl md:text-3xl">
            {title}
          </h2>

          {subtitle && (
            <p className="ibm-mono mt-2 text-xs leading-6 text-zinc-500 dark:text-zinc-400 sm:text-sm">
              {subtitle}
            </p>
          )}

          <p className="mt-4 break-words text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:mt-5">
            {description}
          </p>

          {/* Technologies */}
          {technologies.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="ibm-mono rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-[9px] uppercase tracking-[0.1em] text-zinc-600 transition-colors hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 sm:text-[10px] sm:tracking-[0.12em]"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Project actions */}
          <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7">
            {isPrivate ? (
              <div className="ibm-mono inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2.5 text-[10px] text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 sm:px-3.5 sm:text-xs">
                <Lock size={14} aria-hidden="true" />
                Private repository
              </div>
            ) : (
              <>
                {liveLink && (
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ibm-mono inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-3.5 py-2.5 text-[10px] font-medium text-white transition hover:-translate-y-0.5 hover:bg-zinc-700 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 sm:px-4 sm:text-xs"
                  >
                    View project
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                )}

                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${title} source on GitHub`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-700 transition hover:-translate-y-0.5 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-white dark:hover:bg-white dark:hover:text-zinc-950"
                  >
                    <Github size={18} aria-hidden="true" />
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
