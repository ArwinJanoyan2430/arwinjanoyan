import { motion } from "framer-motion";
import pfp from "../assets/v2/pfp.png";
import QuoteTransition from "../animations/QuoteTransition";
import { Github, Linkedin, MailIcon, X } from "lucide-react";
import { useState } from "react";

function Home() {
  const [showEmailCard, setShowEmailCard] = useState(false);
  const [copied, setCopied] = useState(false);

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
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-600 hover:text-white dark:border-zinc-700 dark:hover:bg-white dark:hover:text-black"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/arwin-ryan-janoyan-6b355a3a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-600 hover:text-white dark:border-zinc-700 dark:hover:bg-white dark:hover:text-black"
            >
              <Linkedin size={20} />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-600 hover:text-white dark:border-zinc-700 dark:hover:bg-white dark:hover:text-black"
            >
              <Github size={20} />
            </a>
            <a
              onClick={() => setShowEmailCard(true)} rel="noopener noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-600 hover:text-white dark:border-zinc-700 dark:hover:bg-white dark:hover:text-black"
            >
              <MailIcon size={20} />
            </a>
            {showEmailCard && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                <div className="w-100 rounded-2xl bg-white p-8 shadow-xl dark:bg-zinc-900">
                  <div className="flex items-center justify-between">
                    <h2 className="text-[10px] inter-font justify-start text-zinc-400 font-light tracking-widest">
                      GET IN TOUCH
                    </h2>

                    <button
                      onClick={() => setShowEmailCard(false)}
                      className="text-zinc-500 cursor-pointer transition hover:bg-zinc-100 hover:text-black dark:hover:bg-zinc-800 dark:hover:text-white"
                      aria-label="Close"
                    >
                      <X size={18} />
                    </button>
                  </div>
                  <h2 className="text-xl pixel-font mt-2 font-semibold">
                    Say hello
                  </h2>

                  <p className="mt-2 inter-font text-sm text-zinc-600 dark:text-zinc-100">
                    For work, collabs, or just to say hi — drop me a line.
                  </p>

                  <div className="mt-4 ibm-mono flex items-center justify-between rounded-lg border dark:bg-zinc-800 border-zinc-300 p-1 dark:border-zinc-700">
                    <span className="text-sm mx-2">ajanoyan24@gmail.com</span>

                    <button
                      onClick={copyEmail}
                      className="rounded-lg cursor-pointer ibm-mono text-sm bg-zinc-800 px-3 py-1.5 text-white hover:bg-zinc-700 dark:hover:bg-zinc-300 dark:bg-white dark:text-black"
                    >
                      {copied ? "Copied" : "Copy"}
                    </button>
                  </div>

                  <button
                    onClick={() =>
                      window.open(
                        "https://mail.google.com/mail/?view=cm&fs=1&to=ajanoyan24@gmail.com&su=Portfolio%20Inquiry",
                        "_blank",
                      )
                    }
                    className="mt-2 cursor-pointer w-full rounded-lg border border-zinc-300 py-2 text-sm ibm-mono font-semibold transition hover:border-zinc-400  dark:border-zinc-700"
                  >
                    Send Email
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Home;
