import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, MailIcon } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

import QuoteTransition from "../animations/QuoteTransition";
import CursorCharacter from "../modal/CursorCharacter";

function Home() {
  const email = "ajanoyan24@gmail.com";
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 pb-36 pt-24 md:grid-cols-[280px_minmax(0,1fr)] md:gap-12 md:px-8 md:pb-32 md:pt-20"
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
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 20,
            mass: 0.8,
          }}
          className="cursor-pointer"
        >
          <CursorCharacter />
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="flex min-w-0 w-full flex-col items-center text-center md:items-start md:text-left"
      >
        <h1 className="pixel-font text-lg font-bold text-zinc-500 dark:text-zinc-100 md:text-xl">
          Hey, I'm Arwin
        </h1>

        {/* Quote */}
        <div className="relative mt-4 min-h-[110px] w-full shrink-0 sm:min-h-[140px] md:min-h-[120px]">
          <QuoteTransition />
        </div>

        {/* Buttons and Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 flex w-full flex-col items-center gap-5 md:flex-row md:flex-wrap md:items-center md:justify-start"
        >
          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              className="btn-glitch-fill ibm-mono rounded-lg border px-6 py-2 text-xs md:px-5 md:text-sm"
            >
              <span className="text">projects</span>
              <span className="text-decoration"> _ </span>
              <span className="decoration">⇒</span>
            </button>

            <a
              href="https://docs.google.com/document/d/1VP-TqcVEvLKOiXYFlrS82h1CEuJRLu3K0f_lTg-9vbI/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glitch-fill ibm-mono rounded-lg border bg-zinc-950 px-7 py-2 text-xs text-white md:px-6 md:text-sm"
            >
              View Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="https://github.com/ArwinJanoyan2430"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-900 hover:text-white dark:border-zinc-700 dark:hover:bg-white dark:hover:text-black"
            >
              <Github size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/arwin-ryan-janoyan-6b355a3a5/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-900 hover:text-white dark:border-zinc-700 dark:hover:bg-white dark:hover:text-black"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-900 hover:text-white dark:border-zinc-700 dark:hover:bg-white dark:hover:text-black"
            >
              <FaFacebook size={20} />
            </a>

            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                copyEmail();
              }}
              aria-label="Copy email address"
              title={copied ? "Email copied!" : "Copy email address"}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-900 hover:text-white dark:border-zinc-700 dark:hover:bg-white dark:hover:text-black"
            >
              <MailIcon size={20} />
            </a>
          </div>

          {copied && (
            <span className="text-xs text-emerald-500" role="status">
              Email copied!
            </span>
          )}
        </motion.div>
      </motion.div>

      {/* Bottom Information */}
      <div className="absolute bottom-6 left-0 flex w-full flex-col items-center px-4 text-center md:bottom-8">
        <p className="pixel-font text-[9px] tracking-wide sm:text-xs">
          INFORMATION TECHNOLOGY STUDENT
        </p>

        <p className="pixel-font text-[9px] tracking-wide sm:text-xs">
          Full-Stack Developer · Software Engineer · Data Analyst
        </p>

        <p className="ibm-mono mt-3 text-[9px] tracking-widest text-zinc-500 sm:text-xs">
          SCROLL TO EXPLORE
        </p>
      </div>
    </motion.div>
  );
}

export default Home;
