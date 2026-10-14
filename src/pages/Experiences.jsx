
import { useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Clock3,
  MapPin,
  BriefcaseBusiness,
} from "lucide-react";

import experiences from "../data/experiences";

const PREVIEW_COUNT = 3;

function Experiences() {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpanded = (key) => {
    setExpandedItems((current) => ({
      ...current,
      [key]: !current[key],
    }));
  };

  return (
    <section
      id="experiences"
      className="mx-auto w-full max-w-7xl px-0 pb-5 pt-10 sm:px-0 sm:pb-5 sm:pt-25 md:px-0 md:pb-5"
    >
      {/* Header */}
      <header className="mb-8 border-b border-zinc-200 pb-6 dark:border-zinc-800 sm:mb-12 sm:pb-10">
        <p className="ibm-mono text-[9px] font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 sm:text-[10px] sm:tracking-[0.25em]">
          Experience / Timeline
        </p>

        <h1 className="pixel-font mt-3 text-xl font-bold leading-relaxed sm:mt-4 sm:text-3xl">
          My journey
        </h1>

        <p className="ibm-mono mt-3 max-w-xl text-[11px] leading-6 text-zinc-600 dark:text-zinc-400 sm:mt-4 sm:text-sm sm:leading-7">
          Growing through hands-on projects, new challenges, and continuous learning.
        </p>
      </header>

      {/* Timeline Summary */}
      <div className="mb-0 flex flex-wrap items-center justify-between gap-3 sm:mb-5">
        <div className="ibm-mono flex items-center gap-2 text-[9px] uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-400 sm:tracking-[0.2em]">
          <BriefcaseBusiness size={13} />
          Career timeline
        </div>

        <span className="ibm-mono text-[9px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
          {String(experiences.length).padStart(2, "0")} entries
        </span>
      </div>

      {/* Timeline */}
      <div className="border-t border-zinc-200 dark:border-zinc-800">
        {experiences.map((item, index) => {
          const itemKey = `${item.year}-${item.company}-${item.title}`;
          const isExpanded = Boolean(expandedItems[itemKey]);
          const hasMore = item.roles.length > PREVIEW_COUNT;

          const visibleRoles = isExpanded
            ? item.roles
            : item.roles.slice(0, PREVIEW_COUNT);

          const remainingCount = item.roles.length - PREVIEW_COUNT;

          return (
            <article
              key={itemKey}
              className="group border-b border-zinc-200 py-6 transition-colors duration-300 hover:bg-zinc-50/60 dark:border-zinc-800 dark:hover:bg-zinc-900/30 sm:py-10 md:px-5 lg:px-8"
            >
              <div className="grid gap-5 sm:gap-7 md:grid-cols-[8rem_minmax(0,1fr)] md:gap-8 lg:grid-cols-[9rem_minmax(0,1fr)] lg:gap-10">
                {/* Year */}
                <div className="flex items-center justify-between gap-4 md:block md:border-r md:border-zinc-200 md:pr-6 dark:md:border-zinc-800 lg:pr-8">
                  <div>
                    <span className="ibm-mono text-[8px] uppercase tracking-[0.16em] text-zinc-400 dark:text-zinc-600 sm:text-[9px] sm:tracking-[0.2em]">
                      Entry {String(index + 1).padStart(2, "0")}
                    </span>

                    <time className="pixel-font mt-1.5 block text-2xl tracking-tight text-zinc-950 dark:text-white sm:mt-3 sm:text-4xl md:text-3xl lg:text-4xl">
                      {item.year}
                    </time>
                  </div>

                  {/* Compact mobile index */}
                  <span className="ibm-mono text-[9px] text-zinc-400 dark:text-zinc-600 md:hidden">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(experiences.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Details */}
                <div className="min-w-0">
                  <div className="flex flex-col gap-3 sm:gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div className="min-w-0">
                      <p className="ibm-mono text-[9px] font-medium uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400 sm:text-[10px] sm:tracking-[0.2em]">
                        {item.company}
                      </p>

                      <h2 className="pixel-font mt-2 text-base leading-relaxed text-zinc-950 dark:text-white sm:mt-3 sm:text-2xl sm:leading-snug">
                        {item.title}
                      </h2>
                    </div>

                    {(item.location || item.duration) && (
                      <div className="ibm-mono flex flex-wrap gap-x-3 gap-y-2 text-[9px] uppercase leading-5 tracking-wide text-zinc-500 dark:text-zinc-400 sm:gap-x-4 sm:text-[10px] lg:max-w-64 lg:justify-end lg:text-right">
                        {item.location && (
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin
                              size={12}
                              className="shrink-0"
                              aria-hidden="true"
                            />
                            <span>{item.location}</span>
                          </span>
                        )}

                        {item.duration && (
                          <span className="inline-flex items-center gap-1.5">
                            <Clock3
                              size={12}
                              className="shrink-0"
                              aria-hidden="true"
                            />
                            <span>{item.duration}</span>
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Contributions and Skills */}
                  <div className="mt-5 grid gap-7 border-t border-zinc-200 pt-5 dark:border-zinc-800 sm:mt-7 sm:gap-8 sm:pt-6 lg:grid-cols-[1.35fr_0.65fr] lg:gap-12">
                    <div className="min-w-0">
                      <h3 className="ibm-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-400 dark:text-zinc-500 sm:tracking-[0.2em]">
                        Key contributions
                      </h3>

                      <ul className="mt-3 space-y-2.5 sm:mt-4 sm:space-y-3">
                        {visibleRoles.map((role) => (
                          <li
                            key={role}
                            className="grid grid-cols-[10px_minmax(0,1fr)] gap-2.5 text-[13px] leading-6 text-zinc-600 dark:text-zinc-300 sm:grid-cols-[1rem_minmax(0,1fr)] sm:gap-3 sm:text-[15px] sm:leading-7"
                          >
                            <span className="ibm-mono pt-0.5 text-[10px] text-zinc-400 dark:text-zinc-600">
                              —
                            </span>

                            <span className="break-words">{role}</span>
                          </li>
                        ))}
                      </ul>

                      {hasMore && (
                        <button
                          type="button"
                          onClick={() => toggleExpanded(itemKey)}
                          aria-expanded={isExpanded}
                          className="group/more ibm-mono mt-5 inline-flex min-h-10 items-center gap-2 border-b border-zinc-300 pb-2 text-[9px] font-medium uppercase tracking-[0.12em] text-zinc-600 transition hover:border-zinc-950 hover:text-zinc-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-white dark:hover:text-white sm:mt-6 sm:tracking-[0.16em]"
                        >
                          {isExpanded
                            ? "Show less"
                            : `Show ${remainingCount} more`}

                          {isExpanded ? (
                            <ArrowUp
                              size={13}
                              aria-hidden="true"
                              className="transition-transform group-hover/more:-translate-y-0.5"
                            />
                          ) : (
                            <ArrowDown
                              size={13}
                              aria-hidden="true"
                              className="transition-transform group-hover/more:translate-y-0.5"
                            />
                          )}
                        </button>
                      )}
                    </div>

                    {item.skills?.length > 0 && (
                      <div className="min-w-0">
                        <h3 className="ibm-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-400 dark:text-zinc-500 sm:tracking-[0.2em]">
                          Skills & tools
                        </h3>

                        <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className="ibm-mono max-w-full break-words rounded-full border border-zinc-200 bg-white/70 px-2.5 py-1.5 text-[8px] uppercase leading-4 tracking-wide text-zinc-500 transition-colors hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-950/60 dark:text-zinc-400 dark:hover:border-zinc-500 sm:px-3 sm:py-2 sm:text-[9px] sm:tracking-[0.08em]"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Entry Footer */}
                  <div className="mt-5 flex items-center justify-between border-t border-zinc-100 pt-3 dark:border-zinc-900 sm:mt-7 sm:pt-4">
                    <span className="ibm-mono text-[8px] uppercase tracking-[0.12em] text-zinc-400 dark:text-zinc-600 sm:text-[9px] sm:tracking-[0.15em]">
                      Experience / {String(index + 1).padStart(2, "0")}
                    </span>

                    <ArrowUpRight
                      size={15}
                      aria-hidden="true"
                      className="text-zinc-400 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-950 dark:group-hover:text-white sm:size-4"
                    />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Experiences;
