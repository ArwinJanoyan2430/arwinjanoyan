import { motion } from "framer-motion";
import pfp from "../assets/v2/pfp.png";
import QuoteTransition from "../animations/QuoteTransition";
import { Github, Linkedin, MailIcon, X } from "lucide-react";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";

function Home() {
  const email = "ajanoyan24@gmail.com";

  function copyEmail() {
    navigator.clipboard.writeText(email);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative grid min-h-screen w-full max-w-7xl items-center gap-12 px-6 md:grid-cols-[280px_1fr]"
    >
      {/* Profile */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="hidden justify-center md:flex"
      >
        <motion.div
          whileHover={{
            scale: 1.07,
            rotate: -2.5,
            y: -6,
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 220, damping: 20, mass: 0.8 }}
          className="cursor-pointer"
        >
          <motion.img
            src={pfp}
            alt="Arwin"
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
              rotate: [0, 1.2, 0, -1.2, 0],
              scale: [1, 1.015, 1],
            }}
            transition={{
              opacity: { duration: 0.45, ease: "easeOut" },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="h-65 w-65 object-contain will-change-transform drop-shadow-[0_18px_18px_rgba(0,0,0,0.18)]"
          />
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="flex w-full flex-col items-center text-center md:items-start md:text-left"
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
          className="mt-4 flex w-full flex-col items-center gap-8 md:flex-row md:justify-start"
        >
          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="btn-glitch-fill ibm-mono rounded-lg border px-6 py-1 text-xs md:px-5 md:py-2 md:text-sm"
          >
            <span className="text">projects</span>
            <span className="text-decoration"> _ </span>
            <span className="decoration">⇒</span>
          </button>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="https://github.com/ArwinJanoyan2430"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-600 hover:text-white dark:border-zinc-700 dark:hover:bg-white dark:hover:text-black"
            >
              <Github size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/arwin-ryan-janoyan-6b355a3a5/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-600 hover:text-white dark:border-zinc-700 dark:hover:bg-white dark:hover:text-black"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-600 hover:text-white dark:border-zinc-700 dark:hover:bg-white dark:hover:text-black"
            >
              <FaFacebook size={20} />
            </a>

            <a
              href = "#contact"
              aria-label="Open email"
              className="inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-600 hover:text-white dark:border-zinc-700 dark:hover:bg-white dark:hover:text-black"
            >
              <MailIcon size={20} />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Information */}
      <div className="absolute bottom-10 left-1/2 flex w-full -translate-x-1/2 flex-col items-center px-4 text-center">
        <p className="pixel-font text-[9px] tracking-wide sm:text-xs">
          INFORMATION TECHNOLOGY STUDENT
        </p>

        <p className="pixel-font text-[9px] tracking-wide sm:text-xs">
          Full-Stack Developer · Software Engineer · UI/UX Designer · Data Analyst
        </p>

        <p className="ibm-mono mt-3 text-[9px] tracking-widest text-zinc-500 sm:text-xs">
          SCROLL TO EXPLORE
        </p>
      </div>
    </motion.div>
  );
}

export default Home;
