import { useState } from "react";
import { ArrowDown, ArrowUp, Clock3, MapPin } from "lucide-react";
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
      <header className="mb-12 grid gap-6 md:mb-16 md:grid-cols-[0.8fr_1.2fr] md:items-end">
        <div>
          <p className="ibm-mono text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-400">
            Experience / Timeline
          </p>
          <h1 className="pixel-font mt-4 text-2xl font-bold sm:text-3xl">My journey</h1>
        </div>

        <ScrollReveal
          baseOpacity={0}
          enableBlur
          blurStrength={8}
          containerClassName="md:flex md:justify-end"
          textClassName="ibm-mono max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:text-base md:mx-0 md:text-right"
        >
          I’ve grown through hands-on projects, competitions, and real-world opportunities.
        </ScrollReveal>
      </header>

      <div className="border-t border-zinc-300 dark:border-zinc-700">
        {experiences.map((item, index) => {
          const itemKey = `${item.year}-${item.company}-${item.title}`;
          const isExpanded = Boolean(expandedItems[itemKey]);
          const hasMore = item.roles.length > PREVIEW_COUNT;
          const visibleRoles = isExpanded ? item.roles : item.roles.slice(0, PREVIEW_COUNT);
          const remainingCount = item.roles.length - visibleRoles.length;

          return (
            <article
              key={itemKey}
              className="group grid border-b border-zinc-200 py-8 transition-colors hover:bg-zinc-100/60 dark:border-zinc-800 dark:hover:bg-zinc-900/40 sm:py-10 md:grid-cols-[8rem_minmax(0,1fr)] md:gap-8 md:px-5 lg:grid-cols-[9rem_minmax(0,1fr)] lg:gap-10 lg:px-8"
            >
              <div className="flex items-start justify-between gap-5 md:block md:self-start md:border-r md:border-zinc-200 md:pr-6 dark:md:border-zinc-800 lg:pr-8">
                <div>
                  <span className="ibm-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <time className="pixel-font mt-2 block text-3xl tracking-[-0.05em] text-zinc-950 dark:text-white sm:text-4xl md:text-3xl lg:text-4xl">
                    {item.year}
                  </time>
                </div>

                {index === 0 && (
                  <span className="ibm-mono rounded-full !border-zinc-200 !bg-zinc-100 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.16em] !text-zinc-600 dark:!border-zinc-700 dark:!bg-zinc-800 dark:!text-zinc-300 md:mt-5 md:inline-flex">
                    Latest
                  </span>
                )}
              </div>

              <div className="mt-7 min-w-0 md:mt-0">
                <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-start">
                  <div>
                    <p className="ibm-mono text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                      {item.company}
                    </p>
                    <h2 className="pixel-font mt-3 text-xl leading-snug text-zinc-950 dark:text-white sm:text-2xl">
                      {item.title}
                    </h2>
                  </div>

                  {(item.location || item.duration) && (
                    <div className="ibm-mono flex flex-wrap gap-x-4 gap-y-2 text-[10px] uppercase tracking-[0.1em] text-zinc-500 dark:text-zinc-400 lg:max-w-56 lg:justify-end lg:text-right">
                      {item.location && (
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin size={12} aria-hidden="true" />
                          {item.location}
                        </span>
                      )}
                      {item.duration && (
                        <span className="inline-flex items-center gap-1.5">
                          <Clock3 size={12} aria-hidden="true" />
                          {item.duration}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <div className="mt-7 grid gap-7 border-t border-zinc-200 pt-6 dark:border-zinc-800 lg:grid-cols-[1.35fr_0.65fr] lg:gap-12">
                  <div>
                    <h3 className="ibm-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-zinc-400 dark:text-zinc-500">
                      Selected contributions
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {visibleRoles.map((role) => (
                        <li key={role} className="grid grid-cols-[1rem_1fr] gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300 sm:text-[15px] sm:leading-7">
                          <span className="ibm-mono pt-0.5 text-[9px] text-zinc-400 dark:text-zinc-600">—</span>
                          <span>{role}</span>
                        </li>
                      ))}
                    </ul>

                    {hasMore && (
                      <button
                        type="button"
                        onClick={() => toggleExpanded(itemKey)}
                        className="ibm-mono mt-5 inline-flex items-center gap-2 border-b border-zinc-300 pb-1 text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-600 transition hover:border-zinc-950 hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-white dark:hover:text-white"
                        aria-expanded={isExpanded}
                      >
                        {isExpanded ? "Show fewer" : `Show ${remainingCount} more`}
                        {isExpanded ? <ArrowUp size={13} aria-hidden="true" /> : <ArrowDown size={13} aria-hidden="true" />}
                      </button>
                    )}
                  </div>

                  {item.skills?.length > 0 && (
                    <div>
                      <h3 className="ibm-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-zinc-400 dark:text-zinc-500">
                        Skills & tools
                      </h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <span key={skill} className="ibm-mono rounded-full border border-zinc-200 bg-white px-2.5 py-1.5 text-[9px] uppercase tracking-[0.1em] text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
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
