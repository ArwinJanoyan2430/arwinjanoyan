
import { useEffect, useRef } from "react";
import {
  X,
  ExternalLink,
  Cpu,
  Eye,
  GraduationCap,
  Lightbulb,
  Target,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const projectDetails = [
  "Obstacle detection",
  "Assistive navigation",
  "Affordable prototype",
  "Safety-focused design",
];

const RESEARCH_URL =
  "https://docs.google.com/document/d/13rWnxwauvyl8jXIPXLyHGPPOG4YcXeMs/edit?usp=sharing&ouid=117251014395481625843&rtpof=true&sd=true";

const ResearchModal = ({ onClose }) => {
  const closeButtonRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      // Keep keyboard focus inside the modal.
      if (event.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );

        const elements = Array.from(focusableElements).filter(
          (element) => element.getClientRects().length > 0,
        );

        if (elements.length === 0) return;

        const firstElement = elements[0];
        const lastElement = elements[elements.length - 1];

        if (
          event.shiftKey &&
          (document.activeElement === firstElement ||
            !modalRef.current.contains(document.activeElement))
        ) {
          event.preventDefault();
          lastElement.focus();
        } else if (
          !event.shiftKey &&
          (document.activeElement === lastElement ||
            !modalRef.current.contains(document.activeElement))
        ) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto backdrop-blur-xs p-3 animate-in fade-in duration-200 sm:items-center sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      aria-modal="true"
      role="dialog"
      aria-labelledby="research-title"
      aria-describedby="research-subtitle"
    >
      <div
        ref={modalRef}
        className="relative my-auto  w-full max-w-4xl overflow-hidden rounded-2xl border border-zinc-200 bg-white text-zinc-950 shadow-[0_25px_100px_rgba(0,0,0,0.2)] dark:border-zinc-800 dark:bg-[#090b0d] dark:text-white sm:rounded-3xl"
      >
        {/* Header */}
        <header className="border-b border-zinc-200 px-5 pb-7 pt-2 dark:border-zinc-800 sm:px-8 sm:pb-4 sm:pt-0 md:px-10">
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close SensCane research details"
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 transition hover:border-zinc-400 hover:bg-zinc-50 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-500 dark:hover:text-white dark:focus-visible:ring-offset-zinc-950 sm:right-6 sm:top-6"
          >
            <X size={17} aria-hidden="true" />
          </button>

          <div className="pr-12 sm:pr-14">

            <h1
              id="research-title"
              className="pixel-font mt-6 break-words text-3xl font-bold leading-tight tracking-tight sm:mt-7 sm:text-4xl md:text-5xl"
            >
              SensCane
            </h1>

            <p
              id="research-subtitle"
              className="mt-3 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400 sm:text-base sm:leading-7"
            >
              Smart Blind Stick for Visually Impaired Individuals
            </p>

            <div className="ibm-mono mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-[9px] uppercase tracking-wider text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                Assistive technology
              </span>
              <span className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-[9px] uppercase tracking-wider text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                Academic research
              </span>
            </div>
          </div>
        </header>

        {/* Modal content */}
        <div className="max-h-[calc(100dvh-220px)] overflow-y-auto overscroll-contain px-5 py-6 sm:max-h-[calc(100dvh-240px)] sm:px-8 sm:py-8 md:px-10 md:py-10">
          {/* Overview and objective */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            <section className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/40 sm:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900">
                  <Lightbulb
                    size={17}
                    className="text-zinc-700 dark:text-zinc-300"
                    aria-hidden="true"
                  />
                </div>

                <h2 className="ibm-mono text-[10px] font-semibold uppercase tracking-[0.16em] sm:tracking-[0.2em]">
                  Project overview
                </h2>
              </div>

              <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                SensCane was developed as a Grade 12 research requirement. The
                project focused on creating a smart blind stick prototype that
                helps visually impaired individuals detect nearby obstacles
                and move with greater safety, confidence, and independence.
              </p>
            </section>

            <section className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/40 sm:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900">
                  <Target
                    size={17}
                    className="text-zinc-700 dark:text-zinc-300"
                    aria-hidden="true"
                  />
                </div>

                <h2 className="ibm-mono text-[10px] font-semibold uppercase tracking-[0.16em] sm:tracking-[0.2em]">
                  Research objective
                </h2>
              </div>

              <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                The goal was to design an affordable assistive device that
                uses sensor-based technology to detect surrounding obstacles
                and provide timely feedback for easier and safer navigation.
              </p>
            </section>
          </div>

          {/* Technologies and academic background */}
          <section className="mt-6 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="p-5 sm:border-r sm:border-zinc-200 sm:p-6 dark:sm:border-zinc-800">
                <div className="flex items-center gap-3">
                  <Cpu
                    size={16}
                    className="shrink-0 text-zinc-500"
                    aria-hidden="true"
                  />
                  <h2 className="ibm-mono text-[9px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                    Technologies used
                  </h2>
                </div>

                <p className="mt-4 text-sm leading-7 text-zinc-800 dark:text-zinc-200">
                  Arduino · Ultrasonic Sensor · Embedded Systems · Electronics
                </p>
              </div>

              <div className="border-t border-zinc-200 p-5 dark:border-zinc-800 sm:border-t-0 sm:p-6">
                <div className="flex items-center gap-3">
                  <GraduationCap
                    size={17}
                    className="shrink-0 text-zinc-500"
                    aria-hidden="true"
                  />
                  <h2 className="ibm-mono text-[9px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                    Research background
                  </h2>
                </div>

                <p className="mt-4 text-sm leading-7 text-zinc-800 dark:text-zinc-200">
                  Grade 12 STEM Research Requirement
                </p>
              </div>
            </div>
          </section>

          {/* Focus areas and impact */}
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-[0.85fr_1.15fr] md:gap-5">
            <section className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/40 sm:p-6">
              <div className="flex items-center gap-3">
                <Eye
                  size={17}
                  className="shrink-0 text-zinc-500"
                  aria-hidden="true"
                />
                <h2 className="ibm-mono text-[10px] font-semibold uppercase tracking-[0.18em]">
                  Focus areas
                </h2>
              </div>

              <ul className="mt-5 space-y-3">
                {projectDetails.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400"
                  >
                    <span className="ibm-mono mt-0.5 text-[9px] text-zinc-400 dark:text-zinc-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/40 sm:p-6">
              <div className="flex items-center gap-3">
                <Sparkles
                  size={17}
                  className="shrink-0 text-zinc-500"
                  aria-hidden="true"
                />
                <h2 className="ibm-mono text-[10px] font-semibold uppercase tracking-[0.18em]">
                  Impact
                </h2>
              </div>

              <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                The project reflects a practical, user-centered approach to
                accessibility technology and demonstrates how simple
                electronics and engineering can create real-world solutions
                for people with visual impairments.
              </p>
            </section>
          </div>

          {/* Footer actions */}
          <footer className="mt-7 flex flex-col gap-3 border-t border-zinc-200 pt-6 dark:border-zinc-800 sm:mt-8 sm:flex-row sm:items-center sm:justify-between">
            <a
              href={RESEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ibm-mono inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-[10px] font-medium uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:bg-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 dark:focus-visible:ring-offset-zinc-950 sm:tracking-[0.14em]"
            >
              View research paper
              <ExternalLink size={14} aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="ibm-mono inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-zinc-200 px-5 py-3 text-[10px] uppercase tracking-[0.14em] text-zinc-600 transition hover:border-zinc-400 hover:bg-zinc-50 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-500 dark:hover:bg-zinc-900 dark:hover:text-white"
            >
              <X size={14} aria-hidden="true" />
              Close
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ResearchModal;
