import { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Github, Lock } from "lucide-react";

export default function ProjectCard({
  images,
  image,
  title,
  subtitle,
  description,
  technologies,
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

  if (variant === "directory") {
    return (
      <article className="group border-y border-zinc-200 transition-colors duration-300 hover:bg-zinc-100/70 dark:border-zinc-800 dark:hover:bg-zinc-900/50">
        <a
          href={liveLink || githubLink || "#"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${title}`}
          className="grid gap-5 px-3 py-8 sm:px-5 sm:py-10 md:grid-cols-[minmax(180px,0.72fr)_minmax(0,1.28fr)] md:items-center md:gap-10 lg:px-8 lg:py-12"
        >
          <div className="flex items-center justify-between gap-4 md:block">
            <h2 className="pixel-font text-xl leading-tight text-zinc-950 transition-colors duration-300 group-hover:text-zinc-600 dark:text-white dark:group-hover:text-zinc-300 sm:text-2xl">
              {title}
            </h2>
            <ArrowUpRight
              size={17}
              aria-hidden="true"
              className="shrink-0 text-zinc-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-zinc-950 dark:text-zinc-700 dark:group-hover:text-white md:hidden"
            />
          </div>

          <div className="grid min-w-0 grid-cols-[1fr_auto] items-center gap-5">
            <div>
              <p className="ibm-mono text-[9px] font-medium uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400 sm:text-[10px]">
                {category || "Platform"}
              </p>
              <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-700 dark:text-zinc-300 sm:text-base sm:leading-7">
                {description}
              </p>
            </div>

            <ArrowUpRight
              size={18}
              aria-hidden="true"
              className="hidden text-zinc-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-zinc-950 dark:text-zinc-700 dark:group-hover:text-white md:block"
            />
          </div>
        </a>
      </article>
    );
  }

  return (
    <article className="group overflow-hidden rounded-[28px] border border-zinc-200 bg-white/80 p-3 shadow-[0_20px_60px_-30px_rgba(24,24,27,0.35)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_30px_80px_-30px_rgba(24,24,27,0.45)] dark:border-zinc-800 dark:bg-zinc-900/80 dark:hover:border-zinc-700 dark:hover:shadow-black/30 md:p-4">
      <div className="grid gap-4 md:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] md:gap-6">
        <div className="relative min-h-[260px] overflow-hidden rounded-[22px] bg-zinc-100 dark:bg-zinc-800 sm:min-h-[320px] md:min-h-[360px]">
          {projectImages.length > 0 && (
            <img
              src={projectImages[activeImage]}
              alt={`${title} project preview ${activeImage + 1} of ${projectImages.length}`}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/75 via-zinc-950/15 to-transparent" />

          <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
            <span className="ibm-mono rounded-full border border-white/20 bg-black/25 px-2.5 py-1.5 text-[9px] font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
              {isPrivate ? "Private" : "Live"}
            </span>
          </div>

          {projectImages.length > 1 && (
            <>
              <button
                type="button"
                onClick={showPreviousImage}
                aria-label={`Show previous ${title} image`}
                className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <ChevronLeft size={18} aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={showNextImage}
                aria-label={`Show next ${title} image`}
                className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <ChevronRight size={18} aria-hidden="true" />
              </button>

              <div
                className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/45 px-3 py-2 backdrop-blur-sm"
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

        <div className="flex flex-col justify-center px-2 pb-3 pt-2 sm:px-4 md:px-2 md:pb-3 md:pt-2">
          <p className="ibm-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
            {clientProject ? "Client project" : "Featured project"}
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
                className="ibm-mono rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-zinc-600 transition-colors dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-7 flex items-center gap-3">
            {isPrivate ? (
              <div className="ibm-mono inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-xs text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400">
                <Lock size={14} aria-hidden="true" />
                Private repository
              </div>
            ) : (
              <>
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ibm-mono inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-4 py-2.5 text-xs font-medium text-white transition hover:-translate-y-0.5 hover:bg-zinc-700 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                >
                  View project <ArrowUpRight size={15} aria-hidden="true" />
                </a>

                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${title} source on GitHub`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 text-zinc-700 transition hover:-translate-y-0.5 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-white dark:hover:bg-white dark:hover:text-zinc-950"
                >
                  <Github size={18} aria-hidden="true" />
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
