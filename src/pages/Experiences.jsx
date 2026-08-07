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
    company:
      "Department of Information and Communications Technology (DICT)",
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
        <h1 className="pixel-font md:text-3xl text-xl sm:text-3xl">
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


      <div className="
        grid 
        grid-cols-1 
        gap-x-10 
        gap-y-12 
        sm:gap-y-10
        lg:grid-cols-2
        lg:gap-x-20
      ">
        {experiences.map((item, index) => (
          <article key={index} className="max-w-xl">

            <p className="ibm-mono text-[11px] uppercase tracking-[0.25em] text-zinc-400 sm:text-sm">
              {item.year}
            </p>

            <h2 className="
              ibm-mono
              mt-2
              text-g
              font-light
              leading-tight
              sm:text-xl
            ">
              {item.title}
            </h2>

            <p className="
              ibm-mono
              mt-1
              break-words
              text-sm
              font-medium
              text-zinc-500
              sm:text-base
            ">
              {item.company}
            </p>

            <div className="mt-3 h-px w-14 bg-zinc-300 dark:bg-zinc-700" />

            <p className="
              ibm-mono
              mt-3
              text-sm
              leading-7
              text-zinc-600
              dark:text-zinc-400
              sm:text-base
              sm:leading-8
            ">
              {item.description}
            </p>

          </article>
        ))}
      </div>
    </section>
  );
}

export default Experiences;