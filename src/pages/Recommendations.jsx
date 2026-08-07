import ScrollReveal from "@/animations/ScrollReveal";
import Dict from "../assets/v2/dict-logo.png";
import OmboyStore from "../assets/v2/omboy-store.png";
import Surge from "../assets/v2/surge-logo.png";

function Recommendation() {
  const recommendations = [
    {
      name: "Engr. Octavio S. Guibelondo, Jr.",
      role: "Provincial Director",
      company: "Department of Information Communications Technology (DICT)",
      logo: Dict,
      recommendation:
        "Mr. Janoyan has shown a strong sense of curiosity and eagerness to understand how tasks are done. His inquisitive nature and willingness to ask questions demonstrate a genuine interest in learning.",
    },
    {
      name: "Verified Client",
      role: "Store Owner",
      company: "Local Sari-Sari Store",
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

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:px-10 md:py-20">
      {/* Header */}
      <header className="mb-12 md:mb-16">
        <h1 className="pixel-font md:text-3xl text-xl sm:text-3xl">What They Say</h1>

        <ScrollReveal
          baseOpacity={0}
          enableBlur
          blurStrength={8}
          textClassName="ibm-mono mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:text-base md:text-lg"
        >
          Where I've learned, built, and grown.
        </ScrollReveal>
      </header>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
        {recommendations.map((item, index) => (
          <div
            key={index}
            className="group relative flex min-h-[380px] flex-col overflow-hidden rounded-[28px] border border-zinc-800/70 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-6 transition-all duration-500 hover:-translate-y-2 hover:border-zinc-600 hover:shadow-[0_25px_80px_rgba(255,255,255,0.05)] sm:p-8 lg:min-h-[430px]"
          >
            {/* Glow */}
            <div className="absolute -right-24 -top-24 h-52 w-52 rounded-full bg-white/5 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Border */}
            <div className="absolute inset-0 rounded-[28px] border border-transparent transition-all duration-500 group-hover:border-white/10" />

            {/* Left Accent */}
            <div className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-gradient-to-b from-transparent via-white to-transparent transition-transform duration-500 group-hover:scale-y-100" />

            {/* Quote */}
            <img
              src={item.logo}
              alt={item.company}
              className="absolute -right-15 -top-13 h-40 w-40 object-contain opacity-[0.1] grayscale transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:opacity-[0.3] sm:h-40 sm:w-40 lg:h-50 lg:w-50"
            />
            {/* Number */}
            <div className="relative z-10 mb-8 flex items-center gap-3 sm:mb-10">
              <div className="h-px w-8 bg-zinc-700 transition-all duration-500 group-hover:w-14" />

              <span className="pixel-font text-[10px] tracking-[0.35em] text-zinc-500 sm:text-xs">
                0{index + 1}
              </span>
            </div>

            {/* Testimonial */}
            <blockquote className="relative z-10">
              <p className="font-inter italic text-base leading-8 tracking-wide text-zinc-200 sm:text-md sm:leading-9 lg:text-[17px] lg:leading-8">
                “{item.recommendation}”
              </p>
            </blockquote>

            {/* Footer */}
            <div className="mt-auto pt-8">
              <div className="mb-5 h-px bg-gradient-to-r from-zinc-700 via-zinc-600 to-transparent" />

              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="pixel-font text-lg text-white sm:text-md">
                    {item.name}
                  </h3>

                  <p className="font-inter mt-1 text-sm text-zinc-400">
                    {item.role}
                  </p>
                </div>

                <p className="ibm-mono text-[10px] uppercase tracking-[0.35em] text-zinc-500 sm:max-w-[130px] sm:text-right">
                  {item.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Recommendation;
