import ScrollReveal from "@/animations/ScrollReveal";

function About() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:px-10 md:py-20">
      <header className="mb-12 md:mb-16">
        <h1 className="pixel-font font-bold md:text-3xl text-xl sm:text-3xl">
          What They Say
        </h1>

        <ScrollReveal
          baseOpacity={0}
          enableBlur
          blurStrength={8}
          textClassName="ibm-mono mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:text-base md:text-lg"
        >
          Feedback from people I've worked and learned with.
        </ScrollReveal>
      </header>
      <div>
        
      </div>
    </section>
  );
}

export default About;
