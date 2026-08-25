import { useState } from "react";
import { ChevronDown, ChevronUp, Clock3, MapPin } from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";
import experiences from "../data/experiences";

const PREVIEW_COUNT = 3;

function Experiences() {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpanded = (key) => {
    setExpandedItems((current) => ({ ...current, [key]: !current[key] }));
  };

  return (
    <section id="experiences" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:px-10 md:py-20">
      <header className="mb-12 max-w-3xl md:mb-16">
        <p className="ibm-mono text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-400">
          Experience
        </p>
        <h1 className="pixel-font mt-3 text-2xl font-bold sm:text-3xl">My journey</h1>
        <ScrollReveal
          baseOpacity={0}
          enableBlur
          blurStrength={8}
          textClassName="ibm-mono mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:text-base"
        >
          I’ve grown through hands-on projects, competitions, and real-world opportunities.
        </ScrollReveal>
      </header>

      <div className="relative mx-auto max-w-5xl">
        <div
          className="absolute bottom-0 left-[7px] top-2 w-px bg-zinc-200 dark:bg-zinc-800 md:left-[7.75rem]"
          aria-hidden="true"
        />

        <div className="space-y-8 md:space-y-10">
          {experiences.map((item, index) => {
            const itemKey = `${item.year}-${item.title}`;
            const isExpanded = Boolean(expandedItems[itemKey]);
            const hasMore = item.roles.length > PREVIEW_COUNT;
            const visibleRoles = isExpanded ? item.roles : item.roles.slice(0, PREVIEW_COUNT);
            const remainingCount = item.roles.length - visibleRoles.length;

            return (
              <article
                key={itemKey}
                className="relative grid gap-4 pl-9 md:grid-cols-[7.75rem_minmax(0,1fr)] md:gap-8 md:pl-0"
              >
                <div className="md:pt-7 md:text-right">
                  <time className="ibm-mono inline-flex rounded-full bg-zinc-900 px-3 py-1.5 text-[11px] font-medium tracking-[0.14em] text-white dark:bg-white dark:text-zinc-950">
                    {item.year}
                  </time>
                </div>

                <span
                  className={`absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-[3px] border-white dark:border-zinc-950 md:left-[7.3rem] md:top-8 ${
                    index === 0
                      ? "bg-zinc-950 ring-4 ring-zinc-200 dark:bg-white dark:ring-zinc-800"
                      : "bg-zinc-400 dark:bg-zinc-600"
                  }`}
                  aria-hidden="true"
                />

                <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 sm:p-7 md:p-8">
                  <div className="flex flex-col gap-4 border-b border-zinc-100 pb-6 dark:border-zinc-800 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <h2 className="pixel-font text-lg leading-snug text-zinc-950 dark:text-white sm:text-xl">
                        {item.title}
                      </h2>
                      <p className="ibm-mono mt-2 text-sm font-semibold leading-6 text-zinc-700 dark:text-zinc-300">
                        {item.company}
                      </p>

                      {(item.location || item.duration) && (
                        <div className="ibm-mono mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                          {item.location && (
                            <span className="inline-flex items-center gap-1.5">
                              <MapPin size={14} aria-hidden="true" />
                              {item.location}
                            </span>
                          )}
                          {item.duration && (
                            <span className="inline-flex items-center gap-1.5">
                              <Clock3 size={14} aria-hidden="true" />
                              {item.duration}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {index === 0 && (
                      <span className="ibm-mono w-fit shrink-0 rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
                        Latest
                      </span>
                    )}
                  </div>

                  <div className="pt-6">
                    <h3 className="ibm-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                      Key highlights
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {visibleRoles.map((role) => (
                        <li
                          key={role}
                          className="flex gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300 sm:text-[15px] sm:leading-7"
                        >
                          <span
                            className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-900 dark:bg-white"
                            aria-hidden="true"
                          />
                          <span>{role}</span>
                        </li>
                      ))}
                    </ul>

                    {hasMore && (
                      <button
                        type="button"
                        onClick={() => toggleExpanded(itemKey)}
                        className="ibm-mono mt-4 inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-xs font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
                        aria-expanded={isExpanded}
                      >
                        {isExpanded ? (
                          <>
                            Show fewer highlights <ChevronUp size={15} aria-hidden="true" />
                          </>
                        ) : (
                          <>
                            Show {remainingCount} more <ChevronDown size={15} aria-hidden="true" />
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {item.skills?.length > 0 && (
                    <div className="mt-6 border-t border-zinc-100 pt-5 dark:border-zinc-800">
                      <h3 className="sr-only">Skills used</h3>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="ibm-mono rounded-md bg-zinc-100 px-2.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experiences;
