import { motion } from "framer-motion";
import pfp from "../assets/v2/pfp.png";
import QuoteTransition from "../animations/QuoteTransition";
import { Github, Linkedin } from "lucide-react";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="selection:bg-black grid w-full max-w-7xl items-center gap-12 px-6 md:grid-cols-[280px_1fr]"
    >
      {/* Profile */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex justify-center"
      >
        <img
          src={pfp}
          alt="Arwin profile picture"
          className="hidden md:flex h-40 w-40 rounded-full object-cover transition-transform duration-300 hover:rotate-[-10deg] hover:scale-105 sm:h-52 sm:w-52 md:h-72 md:w-72"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="flex flex-col items-center text-center md:items-start md:text-left"
      >
        <h1 className="pixel-font text-lg font-bold text-zinc-500 dark:text-zinc-100 md:text-xl">
          Hey, I'm Arwin
        </h1>

        <div className="relative mt-4 w-full">
          <QuoteTransition />
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 flex w-full flex-col items-center gap-5 md:flex-row md:justify-start"
        >
          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="btn-glitch-fill ibm-mono rounded-2xl border px-4 py-1.5 text-sm md:px-5 md:py-2 md:text-base"
          >
            <span className="text">projects</span>
            <span className="text-decoration"> _ </span>
            <span className="decoration">⇒</span>
          </button>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            <a href="" target="_blank" rel="noopener noreferrer" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-600 hover:text-white dark:border-zinc-700 dark:hover:bg-white dark:hover:text-black">
              <Github size={20} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-600 hover:text-white dark:border-zinc-700 dark:hover:bg-white dark:hover:text-black">
              <Linkedin size={20} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-600 hover:text-white dark:border-zinc-700 dark:hover:bg-white dark:hover:text-black">
              <Github size={20} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-600 hover:text-white dark:border-zinc-700 dark:hover:bg-white dark:hover:text-black">
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Home;
