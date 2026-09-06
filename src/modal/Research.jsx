import { useEffect } from "react";
import {
  X,
  ExternalLink,
  Cpu,
  Eye,
  GraduationCap,
  Lightbulb,
  Target,
  Sparkles,
} from "lucide-react";

const projectDetails = [
  "Obstacle detection",
  "Assistive navigation",
  "Affordable prototype",
  "Safety-focused design",
];

const ResearchModal = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const openResearch = () => {
    window.open(
      "https://docs.google.com/document/d/13rWnxwauvyl8jXIPXLyHGPPOG4YcXeMs/edit?usp=sharing&ouid=117251014395481625843&rtpof=true&sd=true",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-zinc-950/80 p-3 backdrop-blur-sm sm:p-6"
      aria-modal="true"
      role="dialog"
      aria-labelledby="research-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto border border-zinc-200 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.35)] dark:border-zinc-800 dark:bg-[#090b0d]"
      >
        <header className="relative border-b border-zinc-200 px-6 pb-8 pt-6 dark:border-zinc-800 sm:px-10 sm:pb-10 sm:pt-8">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close research modal"
            className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-500 transition hover:rotate-90 hover:border-zinc-950 hover:bg-zinc-950 hover:text-white dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-white dark:hover:bg-white dark:hover:text-zinc-950 sm:right-8 sm:top-8"
          >
            <X size={17} aria-hidden="true" />
          </button>

          <div className="pr-14">
            <div className="flex items-center gap-3">
              <span className="ibm-mono text-[9px] uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                Research / 01
              </span>
              <span className="h-px w-10 bg-zinc-300 dark:bg-zinc-700" />
              <span className="ibm-mono text-[9px] uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                Grade 12
              </span>
            </div>

            <h1
              id="research-title"
              className="pixel-font mt-7 text-[2.6rem] leading-none tracking-[-0.06em] text-zinc-950 dark:text-white sm:text-[4rem]"
            >
              SensCane
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400 sm:text-base">
              Smart Blind Stick for Visually Impaired Individuals
            </p>
          </div>
        </header>

        <div className="px-6 py-8 sm:px-10 sm:py-10">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <section>
              <div className="flex items-center gap-2 text-zinc-950 dark:text-white">
                <Lightbulb size={16} aria-hidden="true" />
                <h2 className="ibm-mono text-[10px] font-semibold uppercase tracking-[0.2em]">
                  Project overview
                </h2>
              </div>
              <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              SensCane was developed as a Grade 12 research requirement. The
              project focused on creating a smart blind stick prototype that helps
              visually impaired individuals detect nearby obstacles and move with
              greater safety, confidence, and independence.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-2 text-zinc-950 dark:text-white">
                <Target size={16} aria-hidden="true" />
                <h2 className="ibm-mono text-[10px] font-semibold uppercase tracking-[0.2em]">
                  Research objective
                </h2>
              </div>
              <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              The goal was to design an affordable assistive device that uses
              sensor-based technology to detect surrounding obstacles and provide
              timely feedback for easier and safer navigation.
              </p>
            </section>
          </div>

          <section className="mt-10 border-y border-zinc-200 dark:border-zinc-800">
            <div className="grid sm:grid-cols-2">
              <div className="border-b border-zinc-200 py-6 sm:border-b-0 sm:border-r sm:pr-8 dark:border-zinc-800">
                <div className="flex items-center gap-2">
                  <Cpu size={15} className="text-zinc-500" aria-hidden="true" />
                  <h2 className="ibm-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    Technologies used
                  </h2>
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-800 dark:text-zinc-200">
                  Arduino · Ultrasonic Sensor · Embedded Systems · Electronics
                </p>
              </div>

              <div className="py-6 sm:pl-8">
                <div className="flex items-center gap-2">
                  <GraduationCap size={15} className="text-zinc-500" aria-hidden="true" />
                  <h2 className="ibm-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    Research background
                  </h2>
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-800 dark:text-zinc-200">
                  Grade 12 STEM Research Requirement
                </p>
              </div>
            </div>
          </section>

          <div className="mt-8 grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <div className="flex items-center gap-2 text-zinc-950 dark:text-white">
                <Eye size={15} aria-hidden="true" />
                <h2 className="ibm-mono text-[10px] font-semibold uppercase tracking-[0.2em]">
                  Focus areas
                </h2>
              </div>
              <ul className="mt-4 space-y-2">
                {projectDetails.map((item) => (
                  <li
                    key={item}
                    className="ibm-mono flex items-center gap-3 text-[11px] text-zinc-600 dark:text-zinc-400"
                  >
                    <span className="h-px w-4 bg-zinc-400 dark:bg-zinc-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-l-0 border-zinc-200 md:border-l md:pl-8 dark:border-zinc-800">
              <div className="flex items-center gap-2 text-zinc-950 dark:text-white">
                <Sparkles size={15} aria-hidden="true" />
                <h2 className="ibm-mono text-[10px] font-semibold uppercase tracking-[0.2em]">
                  Impact
                </h2>
              </div>
              <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              The project reflects a practical, user-centered approach to
              accessibility technology and demonstrates how simple electronics and
              engineering can create real-world solutions for people with visual
              impairments.
              </p>
            </div>
          </div>

          <footer className="mt-10 flex flex-col gap-3 border-t border-zinc-200 pt-6 dark:border-zinc-800 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={openResearch}
              className="ibm-mono inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-[10px] font-medium uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 hover:bg-zinc-700 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              View Research Paper
              <ExternalLink size={14} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={onClose}
              className="ibm-mono px-4 py-3 text-[10px] uppercase tracking-[0.14em] text-zinc-500 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
            >
              Close
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ResearchModal;
