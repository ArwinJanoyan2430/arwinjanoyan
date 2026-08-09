import ScrollReveal from "../animations/ScrollReveal";

const experiences = [
  {
    year: "2026",
    title: "Freelance Full-Stack Developer",
    company: "OmBoy Store",
    description:
      "Worked with a local business owner to design and develop a custom inventory and point-of-sale system tailored for a sari-sari store.",
  },
  {
    year: "2026",
    title: "Website Management Training",
    company: "SURGE Freelancing Marketplace",
    description:
      "Completed training in website management, learning website maintenance, content updates, and client-focused digital services.",
  },
  {
    year: "2025",
    title: "Work Immersion",
    company: "Department of Information and Communications Technology (DICT)",
    description:
      "Gained practical experience in IT operations, workplace collaboration, and professional communication.",
  },
  {
    year: "2025",
    title: "Programming Competition",
    company: "Mapúa Malayan Colleges Mindanao Cup",
    description:
      "Represented TCNHS in the MMCM Cup, an inter-school programming competition that strengthened my teamwork and problem-solving skills.",
  },
  {
    year: "2023",
    title: "Programming Journey",
    company: "Introduction to Web Development",
    description:
      "Built my first two websites using HTML, CSS, and JavaScript for our ETech project, sparking my passion for web development.",
  },
];

function Experiences() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:px-10 md:py-20">
      <header className="mb-12 md:mb-16">
        <h1 className="pixel-font text-xl font-bold sm:text-3xl">
          Where I've Been
        </h1>

        <ScrollReveal
          baseOpacity={0}
          enableBlur
          blurStrength={8}
          textClassName="ibm-mono mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:text-base md:text-lg"
        >
          Where I've learned, built, and grown.
        </ScrollReveal>
      </header>

      <div className="relative ml-2 max-w-4xl border-l border-zinc-200 dark:border-zinc-800 sm:ml-4">
        {experiences.map((item, index) => (
          <article
            key={`${item.year}-${item.title}`}
            className="group relative pb-7 pl-7 last:pb-0 sm:pl-10"
          >
            <span className="absolute -left-[5px] top-7 h-2.5 w-2.5 rounded-full border-2 border-white bg-zinc-900 transition-transform duration-300 group-hover:scale-150 dark:border-zinc-950 dark:bg-white" />

            <div className="rounded-2xl border border-zinc-200 bg-white p-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-zinc-300 group-hover:shadow-lg group-hover:shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-900 dark:group-hover:border-zinc-700 dark:group-hover:shadow-black/20 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="ibm-mono text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
                  {item.year}
                </p>
                <span className="ibm-mono text-[10px] text-zinc-400 dark:text-zinc-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h2 className="pixel-font mt-4 text-lg leading-snug sm:text-xl">
                {item.title}
              </h2>

              <p className="ibm-mono mt-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {item.company}
              </p>

              <p className="ibm-mono mt-4 border-t border-zinc-100 pt-4 text-sm leading-7 text-zinc-600 dark:border-zinc-800 dark:text-zinc-300 sm:text-base">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experiences;
