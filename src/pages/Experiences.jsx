import { useState } from "react";
import ScrollReveal from "../animations/ScrollReveal";
import experiences from "../data/experiences";

function Experiences() {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpanded = (key) => {
    setExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section id="experiences" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:px-10 md:py-20">
      <header className="mb-10 md:mb-14">
        <h1 className="pixel-font mt-2 text-2xl font-bold sm:text-3xl">
          My journey so far
        </h1>

        <ScrollReveal
          baseOpacity={0}
          enableBlur
          blurStrength={8}
          textClassName="ibm-mono mt-3  text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:text-base"
        >
          I’ve grown through hands-on projects, competitions, and real-world opportunities.
        </ScrollReveal>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        {experiences.map((item) => {
          const itemKey = `${item.year}-${item.title}`;
          const isExpanded = Boolean(expandedItems[itemKey]);

          return (
          <article
            key={itemKey}
            className="group rounded-3xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 dark:hover:shadow-black/20"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="ibm-mono text-[11px] font-medium uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                  {item.year}
                </p>
                <h2 className="pixel-font mt-3 text-lg leading-snug sm:text-xl">
                  {item.title}
                </h2>
                <p className="ibm-mono mt-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {item.company}
                </p>
                {item.location ? (
                  <p className="ibm-mono mt-1 text-xs text-zinc-400 dark:text-zinc-500">
                    {item.location}
                  </p>
                ) : null}
              </div>

              {item.duration ? (
                <span className="ibm-mono rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400">
                  {item.duration}
                </span>
              ) : null}
            </div>

            <div className="mt-5">
              <p className="ibm-mono text-[10px] uppercase tracking-[0.24em] text-zinc-400 dark:text-zinc-500">
                Highlights
              </p>
              <ul className={`mt-3 space-y-2 ${item.roles.length > 3 && !isExpanded ? "max-h-24 overflow-hidden sm:max-h-none" : ""}`}>
                {item.roles.map((role) => (
                  <li
                    key={role}
                    className="flex gap-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-900 dark:bg-white" />
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
              {item.roles.length > 3 ? (
                <button
                  type="button"
                  onClick={() => toggleExpanded(itemKey)}
                  className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white sm:hidden"
                  aria-expanded={isExpanded}
                >
                  {isExpanded ? "View less" : "View more"}
                </button>
              ) : null}
            </div>

            {item.skills?.length ? (
              <div className="mt-5 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="ibm-mono rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ) : null}
          </article>
          );
        })}
      </div>
    </section>
  );
}

export default Experiences;
