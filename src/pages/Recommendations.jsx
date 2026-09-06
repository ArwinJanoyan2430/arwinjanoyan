import ScrollReveal from "@/animations/ScrollReveal";
import Dict from "../assets/v2/dict-logo.png";
import OmboyStore from "../assets/v2/omboy-store.png";
import Surge from "../assets/v2/surge-logo.png";

const recommendations = [
  {
    name: "Engr. Octavio S. Guibelondo, Jr.",
    role: "Provincial Director",
    company: "Department of Information and Communications Technology (DICT)",
    logo: Dict,
    recommendation:
      "Mr. Janoyan has shown a strong sense of curiosity and eagerness to understand how tasks are done. His inquisitive nature and willingness to ask questions demonstrate a genuine interest in learning.",
  },
  {
    name: "Erica Omboy",
    role: "Store Owner",
    company: "Omboy Store",
    logo: OmboyStore,
    recommendation:
      "I really appreciate how easy the system is to use. Recording sales and managing products is straightforward, and the sales report visuals make it easy to understand my store's performance.",
  },
  {
    name: "Jho Ash",
    role: "Virtual Assistant & Training Coach",
    company: "SURGE Freelancing Marketplace",
    logo: Surge,
    recommendation:
      "During our portfolio-building sessions, Arwin showed a strong understanding of frontend development and web design. His layouts were modern, responsive, and easy to navigate. He pays close attention to detail and consistently delivers interfaces that are both visually appealing and user-friendly.",
  },
];

function Recommendation() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:px-10 md:py-20">
      <header className="mb-12 grid gap-6 md:mb-16 md:grid-cols-[0.8fr_1.2fr] md:items-end">
        <div>
          <p className="ibm-mono text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-400">
            Testimonials / Feedback
          </p>
          <h1 className="pixel-font mt-4 text-xl font-bold sm:text-3xl">What they say</h1>
        </div>

        <ScrollReveal
          baseOpacity={0}
          enableBlur
          blurStrength={8}
          containerClassName="md:flex md:justify-end"
          textClassName="ibm-mono max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:text-base md:mx-0 md:text-right"
        >
          Feedback from people I&apos;ve worked and learned with.
        </ScrollReveal>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {recommendations.map((item, index) => (
          <article
            key={`${item.name}-${item.company}`}
            className="group relative flex min-h-[390px] flex-col overflow-hidden rounded-[28px] border border-zinc-200 bg-white p-6 shadow-[0_18px_55px_-38px_rgba(24,24,27,0.35)] transition-all duration-500 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_28px_65px_-35px_rgba(24,24,27,0.45)] dark:border-zinc-800 dark:bg-[#090b0d] dark:hover:border-zinc-700 dark:hover:shadow-black/40 sm:p-8"
          >
            <img
              src={item.logo}
              alt=""
              aria-hidden="true"
              className="absolute -right-8 -top-8 h-36 w-36 object-contain opacity-[0.06] grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-10 dark:opacity-10 dark:group-hover:opacity-20 sm:h-44 sm:w-44"
            />

            <div className="relative z-10 mb-8 flex items-center justify-between sm:mb-10">
              <span className="ibm-mono text-[9px] uppercase tracking-[0.24em] text-zinc-400 dark:text-zinc-500">
                Recommendation / {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-serif text-4xl leading-none text-zinc-200 dark:text-zinc-700" aria-hidden="true">
                “
              </span>
            </div>

            <blockquote className="relative z-10">
              <p className="text-sm leading-7 text-zinc-700 dark:text-zinc-300 sm:text-[15px] sm:leading-8">
                {item.recommendation}
              </p>
            </blockquote>

            <footer className="relative z-10 mt-auto pt-8">
              <div className="mb-5 h-px bg-zinc-200 dark:bg-zinc-800" />
              <h2 className="pixel-font text-base leading-snug text-zinc-950 dark:text-white sm:text-lg">
                {item.name}
              </h2>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{item.role}</p>
              <div className="mt-4 flex items-start gap-3">
                <span className="mt-2 h-px w-5 shrink-0 bg-zinc-400 dark:bg-zinc-600" />
                <p className="ibm-mono text-[9px] uppercase leading-5 tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                  {item.company}
                </p>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Recommendation;
