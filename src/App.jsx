import profile from "./assets/profile.png";
import profile2 from "./assets/profile2.png";
import "./index.css";
import resume from "./assets/ArwinResume.pdf";
import { useState, useEffect, useRef } from "react";
import badge from "./assets/badge.png";
import Loader from "./pages/loader.jsx";
import BestInWebManagement from "./assets/BestInWebManagement.png";
import harvard from "./assets/harvard.png";
import IntelliPatCert from "./assets/IntelliPatCert.png";
import sqlCert from "./assets/sqlCert.png";
import hourofcode from "./assets/hourofcode.png";
import webdesignCert from "./assets/webdesignCert.png";
import oracleCert from "./assets/oracleCert.png";
import alingnena from "./assets/alingnena.png";
import nike from "./assets/nike.png";
import experiences from "./data/experiences";
import { Linkedin, Github, Instagram } from "lucide-react";
import dict from "./assets/dict-logo.png";
import {
  ChevronRight,
  Mail,
  Trophy,
  MapPin,
  FileText,
  Coffee,
  FolderOpen,
} from "lucide-react";
import TypewriterRole from "./animations/TypewriterRole";
import BotpressChat from "./modal/BotpressChat";
import EmailModal from "./modal/EmailModal";
import g1 from "./assets/g1.jpg";
import CoffeeSales from "./assets/CoffeeSales.png";
import ResumeModal from "./modal/ResumeModal";
import m4 from "./assets/m4.mp4";
import m4Reverse from "./assets/m4Reverse.mp4";
import ProjectsModal from "./modal/ProjectsModal";
import feedback from "./assets/feedback.png";

function App() {
  const [hover, setHover] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [dark, setDark] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [showProjectsModal, setShowProjectsModal] = useState(false);

  const projectRef = useRef(null);
  const certRef = useRef(null);
  const galleryRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode") === "true";
    setDark(saved);
    if (saved) document.documentElement.classList.add("dark");
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDark((prev) => {
      localStorage.setItem("darkMode", !prev);
      return !prev;
    });
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const viewResume = () => {
    if (typeof window !== "undefined") {
      window.open(resume, "_blank");
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setAnimate(true);
    }, 1900);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  const handleHorizontalScroll = (e, ref) => {
    const el = ref.current;
    if (!el) return;

    const isVerticalScroll = Math.abs(e.deltaY) > Math.abs(e.deltaX);

    if (isVerticalScroll) {
      e.preventDefault(); // 🚨 ALWAYS stop vertical scroll
      e.stopPropagation();

      el.scrollLeft += e.deltaY; // smooth enough already
    }
  };
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 ">
      <section
        className={`profile-card ${animate ? "animate-in" : ""} transition-colors duration-300`}
      >
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-4">
          <div className="relative w-[150px] h-[150px]">
            <video
              src={dark ? m4 : m4Reverse}
              autoPlay
              muted
              playsInline
              preload="auto"
              disablePictureInPicture
              controls={false}
              controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
              tabIndex={-1}
              aria-hidden="true"
              className="profile absolute object-cover transition-opacity duration-700 -translate-y-2 pointer-events-none select-none"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <h1 className="text-lg md:text-2xl font-stretch-expanded font-bold truncate dark:text-white">
                  Arwin Janoyan
                </h1>
                <img src={badge} className="w-4 mt-1" />
              </div>
              <label className="flex items-center cursor-pointer button-glow transform hover:scale-105 transition-transform duration-300 ease-in-out relative p-1 rounded">
                {/* Hidden checkbox */}
                <input
                  type="checkbox"
                  checked={dark}
                  onChange={toggleDarkMode}
                  className="theme-checkbox"
                />
              </label>
            </div>
            <p className="text-xs md:text-[14px] font-normal text-foreground/70 mt-0 flex items-center gap-1 dark:text-white">
              {" "}
              <MapPin
                size={14}
                className="w-3 h-3 md:w-3.5 md:h-3.5 flex-shrink-0 "
              />{" "}
              Tagum City, Philippines
            </p>
            <div className="flex items-center justify-between gap-0 mt-1.5">
              <p className="text-[10px] md:text-base font-medium text-black dark:text-white">
                BSIT Student
                <span className="text-gray-400">{" \\ "}</span>
                Aspiring
                <span className="text-white dark:text-black">-</span>
                <TypewriterRole />
              </p>
              <div className="hidden md:block">
                <div className="relative">
                  <button
                    className="cursor-pointer text-[11px] md:text-xs flex items-center justify-center gap-1 bg-blue-600 text-white font-medium rounded-lg w-full md:w-auto md:scale-90 mx-[-15px]"
                    onClick={() =>
                      window.open(
                        "https://www.facebook.com/photo.php?fbid=611827651697333&set=pb.100086103111194.-2207520000&type=3",
                        "_blank",
                      )
                    }
                  >
                    <span className="blue-bar inline-flex h-7 md:h-8 items-center rounded-l-lg px-2.5 md:px-2 md:text-xs font-bold transition-all duration-300 gap-1 md:gap-1.5 whitespace-nowrap relative overflow-hidden group flex-1 justify-center md:justify-start min-h-0">
                      <Trophy size={15} className="mx-2" /> MMCM Programming
                      Competition - 2nd Place{" "}
                      <ChevronRight size={18} className="mx-1" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-2 w-full flex flex-wrap items-center gap-2 mt-3">
              <button
                className="button text-sm md:text-xs inline-flex h-7 md:h-8 items-center rounded-lg bg-foreground px-2.5 md:px-6 text-[8px] font-medium text-background transition-all duration-200 hover:bg-foreground/90 hover:-translate-y-0.1 gap-1 md:gap-1.5 whitespace-nowrap min-h-0 bg-black dark:bg-white text-white dark:text-black"
                onClick={() => setShowResumeModal(true)}
              >
                {" "}
                <FileText size={16} /> View Resume
              </button>
              <button
                className="button-2 text-sm md:text-xs inline-flex h-7 md:h-8 items-center rounded-lg bg-foreground px-2.5 md:px-6 text-[8px] font-medium text-background transition-all duration-200 hover:bg-foreground/90 hover:-translate-y-0.1 gap-1 md:gap-1.5 whitespace-nowrap min-h-0 dark:bg-black dark:text-white"
                onClick={() => setShowEmailModal(true)}
              >
                {" "}
                <Mail size={16} /> Send Email
              </button>
              <button
                className="button-3  -translate-y-1 text-sm md:text-xs inline-flex h-7 md:h-8 items-center rounded-lg bg-foreground px-2.5 md:px-6 text-[8px] font-medium text-background transition-all duration-200 hover:bg-foreground/90 hover:-translate-y-0.1 gap-1 md:gap-1.5 whitespace-nowrap min-h-0 dark:bg-black dark:text-white"
                onClick={() => {
                  setShowProjectsModal(true);
                }}
              >
                <FolderOpen size={16} />
                Recent Projects
              </button>
            </div>
            <div className="block md:hidden">
              <div className="relative">
                <button
                  className="cursor-pointer flex items-center justify-center gap-1.5 bg-blue-600 font-bold text-white text-xs rounded-lg w-full md:w-auto md:scale-80"
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/photo.php?fbid=611827651697333&set=pb.100086103111194.-2207520000&type=3",
                      "_blank",
                    )
                  }
                >
                  <span className="blue-bar inline-flex h-7 md:h-8 items-center rounded-l-lg px-2.5 md:px-4 text-[7.5px] md:text-sm font-bold text-white transition-all duration-300 gap-1 md:gap-1.5 whitespace-nowrap relative overflow-hidden group flex-1 justify-center md:justify-start min-h-0">
                    <Trophy size={11} className="mx-2" /> MMCM CodeClash
                    Programming Competition — 2nd Place{" "}
                    <ChevronRight size={13} className="mx-0.5" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showEmailModal && (
        <EmailModal onClose={() => setShowEmailModal(false)} />
      )}

      {showResumeModal && (
        <ResumeModal onClose={() => setShowResumeModal(false)} />
      )}

      {showProjectsModal && (
        <ProjectsModal onClose={() => setShowProjectsModal(false)} />
      )}

      <section
        className={`dark:text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 ${animate ? "animate-in delay-100" : ""}`}
      >
        <div className=" bento-card p-4 col-span-1 md:col-span-4 space-y-2 hover:scale-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
          <h2 className="text-lg font-bold">About</h2>
          <p className="text-[14px] my-3 font-normal text-foreground/70">
            I'm an Information Technology student at the University of Mindanao
            with a passion for building modern web applications and data-driven
            solutions.
            <br />
            <br />
            I enjoy developing responsive websites, business systems, and
            interactive dashboards that solve real-world problems. My current
            interests include full-stack development, UI/UX design, and data
            analytics.
            <br />
            <br />
            Outside academics, I continuously improve my skills through personal
            projects, certifications, and programming competitions.
          </p>
        </div>

        <div className="col-span-1 md:col-span-2 md:row-span-3 space-y-2 animate-fade-in animation-delay-200 ">
          <div className="space-y-4 hover:-translate-y-1 transition-all duration-300 ease-in-out overflow-visible">
            <div className="relative p-[2px] rounded-2xl bg-gradient-to-r dark:from-[#3cf0ff] dark:via-[#7c5cff] dark:to-[#ff3cf7] ">
              {/* glow layer */}
              <div className="absolute inset-0 rounded-5xl border bg-gradient-to-r dark:from-[#3cf0ff] dark:via-[#7c5cff] dark:to-[#ff3cf7] blur-2xl opacity-50 dark:shadow-[0_0_0px_rgba(110,92,255,0.1)]"></div>
              <div className="bento-card relative bg-white/95 dark:bg-zinc-900/95 rounded-xl p-4 flex flex-col items-start space-y-4">
                <h2 className="text-lg font-bold">Experience</h2>

                <div className="relative mt-4">
                  <div className="absolute left-0 top-1.5 bottom-2 w-px bg-border"></div>

                  <div className="space-y-4">
                    {experiences.map((exp, index) => (
                      <div key={index} className="relative pl-6 group/role">
                        {/* Timeline Dot */}
                        <div
                          className={`absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                            index !== experiences.length - 1
                              ? "border-accent bg-accent"
                              : "border-border bg-background"
                          } group-hover/role:scale-125 group-hover/role:shadow-lg`}
                        />

                        {/* Timeline Content */}
                        <div className="space-y-1">
                          <h3
                            className={`text-sm font-semibold transition-colors ${
                              index !== experiences.length - 1
                                ? "text-accent"
                                : "group-hover/role:text-accent"
                            }`}
                          >
                            {exp.title}
                          </h3>

                          <div className="flex items-center justify-between">
                            <span className="text-xs text-foreground/70">
                              {exp.company}
                            </span>

                            <span
                              className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-foreground/5 ${
                                index !== experiences.length - 1
                                  ? "bg-accent/10"
                                  : ""
                              }`}
                            >
                              {exp.year}
                            </span>
                          </div>
                        </div>

                        {/* Hover Card */}
                        <div
                          className="
                                  absolute
                                  -translate-y-1/2
                                  left-full
                                  ml-8
                                  w-[400px]

                                  opacity-0
                                  invisible
                                  translate-x-2

                                  group-hover/role:opacity-100
                                  group-hover/role:visible
                                  group-hover/role:translate-x-0

                                  transition-all
                                  duration-300
                                  ease-out

                                  z-50
                                "
                        >
                          <div className="relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl shadow-2xl">
                            {/* Accent Line */}
                            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b bg-gradient-to-b from-gray-300 via-zinc-400 to-zinc-600" />

                            <div className="p-5">
                              {/* Header */}
                              <div className="flex items-start justify-between">
                                <div>
                                  <h4 className="font-semibold text-base mt-1">
                                    {exp.title}
                                  </h4>

                                  <p className="text-xs text-zinc-500">
                                    {exp.company}
                                  </p>
                                </div>
                              </div>

                              {/* Divider */}
                              <div className="my-4 border-t border-zinc-200 dark:border-zinc-700" />

                              {/* Responsibilities */}
                              <h5 className="text-xs uppercase tracking-widest text-zinc-400 mb-3">
                                Responsibilities
                              </h5>

                              <ul className="space-y-2">
                                {exp.roles.map((role, i) => (
                                  <li key={i} className="flex gap-3 text-sm">
                                    <div className="flex items-center justify-center text-xs">
                                      ✓
                                    </div>

                                    <span>{role}</span>
                                  </li>
                                ))}
                              </ul>

                              {/* Skills */}
                              <div className="mt-5">
                                <h5 className="text-xs uppercase tracking-widest text-zinc-400 mb-2">
                                  Skills
                                </h5>

                                <div className="flex flex-wrap gap-2">
                                  {exp.skills.map((skill) => (
                                    <span
                                      key={skill}
                                      className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs font-medium"
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 md:row-span-3 space-y-2 translate-y-1 animate-fade-in animation-delay-200">
            <div className="bento-card space-y-2 group flex-1 hover:shadow-xl transform hover:scale-100 hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <h2 className="text-lg font-bold">Education</h2>
              <div className="relative space-y-4.5 mt-4">
                <div className="absolute left-1.5 top-1.5 bottom-2 w-px bg-border"></div>

                <div className="relative pl-6 group/role">
                  <div
                    className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 
                    border-accent bg-accent 
                    transition-colors"
                  ></div>
                  <div className="space-y-1">
                    <h3
                      className="text-sm font-semibold 
                      text-accent 
                      transition-colors"
                    >
                      BS Information Technology
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-foreground/70 ">
                        University of Mindanao
                      </span>
                      <span
                        className="text-[10px] font-mono px-1.5 py-1 rounded-full bg-foreground/5 shadow-[0_1px_1px_rgba(0,0,0,0.03)]
                        bg-accent/10"
                      >
                        2026
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative pl-6 group/role">
                  <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-border bg-background group-hover/role:bg-accent transition-colors"></div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold group-hover/role:text-accent transition-colors">
                      Science, Technology, Engineering, and Mathematics (STEM)
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-foreground/70 ">
                        Tagum City National High School
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-1 rounded-full bg-foreground/5 shadow-[0_1px_1px_rgba(0,0,0,0.03)]">
                        2025
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bento-card p-4 col-span-1 md:col-span-4 space-y-2 group animate-fade-in animation-delay-200 transform hover:scale-100 hover:-translate-y-1 transition-all duration-300 ease-in-out">
          <div className="flex items-center justify-between ">
            <h2 className="text-lg font-bold">Tech Stack</h2>
            <a
              className="text-xs text-foreground/70 hover:text-foreground flex items-center gap-1 transition-colors"
              href="#"
            >
              View All
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
          <div className="space-y-4 my-3">
            <div>
              <h3 className="text-sm font-semibold mb-2">Frontend</h3>
              <div className="flex flex-wrap gap-1.5">
                <div className="flex bg-gray-100 dark:bg-[#2d2d2d] rounded-sm  px-3 py-1 items-center gap-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                    className="w-4 h-4"
                  />
                  <span className="py-0.5 text-xs">JavaScript</span>
                </div>

                <div className="flex bg-gray-100 dark:bg-[#2d2d2d] rounded-sm  px-3 py-1 items-center gap-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                    className="w-4 h-4"
                  />
                  <span className="py-0.5 text-xs">Tailwind CSS</span>
                </div>

                <div className="flex bg-gray-100 dark:bg-[#2d2d2d] rounded-sm  px-3 py-1 items-center gap-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                    className="w-4 h-4"
                  />
                  <span className="py-0.5 text-xs">React</span>
                </div>

                <div className="flex bg-gray-100 dark:bg-[#2d2d2d] rounded-sm  px-3 py-1 items-center gap-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                    className="w-4 h-4"
                  />
                  <span className="py-0.5 text-xs">Next.js</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">Backend</h3>
              <div className="flex flex-wrap gap-1.5">
                <div className="flex bg-gray-100 dark:bg-[#2d2d2d] rounded-sm  px-3 py-1 items-center gap-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                    className="w-4 h-4"
                  />
                  <span className="py-0.5 text-xs">MySQL</span>
                </div>

                <div className="flex bg-gray-100 dark:bg-[#2d2d2d] rounded-sm  px-3 py-1 items-center gap-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                    className="w-4 h-4"
                  />
                  <span className="py-0.5 text-xs">MongoDB</span>
                </div>

                <div className="flex bg-gray-100 dark:bg-[#2d2d2d] rounded-sm  px-3 py-1 items-center gap-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                    className="w-4 h-4"
                  />
                  <span className="py-0.5 text-xs">Java</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">Analytics Tools</h3>
              <div className="flex flex-wrap gap-1.5">
                <div className="flex bg-gray-100 dark:bg-[#2d2d2d] rounded-sm  px-3 py-1 items-center gap-2">
                  <img
                    src="https://www.svgrepo.com/show/354428/tableau-icon.svg"
                    className="w-4 h-4"
                  />
                  <span className="py-0.5 text-xs">Tableau</span>
                </div>

                <div className="flex bg-gray-100 dark:bg-[#2d2d2d] rounded-sm  px-3 py-1 items-center gap-2">
                  <img
                    src="https://www.svgrepo.com/show/373589/excel.svg"
                    className="w-4 h-4"
                  />
                  <span className="py-0.5 text-xs">Excel</span>
                </div>

                <div className="flex bg-gray-100 dark:bg-[#2d2d2d] rounded-sm  px-3 py-1 items-center gap-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                    className="w-4 h-4"
                  />
                  <span className="py-0.5 text-xs">Python</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">Developer Tools</h3>
              <div className="flex flex-wrap gap-1.5">
                <div className="flex bg-gray-100 dark:bg-[#2d2d2d] rounded-sm  px-3 py-1 items-center gap-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
                    className="w-4 h-4"
                  />
                  <span className="py-0.5 text-xs">VS Code</span>
                </div>

                <div className="flex bg-gray-100 dark:bg-[#2d2d2d] rounded-sm  px-3 py-1 items-center gap-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                    className="w-4 h-4"
                  />
                  <span className="py-0.5 text-xs">GitHub</span>
                </div>

                <div className="flex bg-gray-100 dark:bg-[#2d2d2d] rounded-sm  px-3 py-1 items-center gap-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                    className="w-4 h-4"
                  />
                  <span className="py-0.5 text-xs">Git</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-2 md:mt-0 bento-card">
        <h2 className="text-xl font-bold mb-4">Featured Projects</h2>

        <div
          ref={projectRef}
          className="scrollbar-hover overflow-x-auto"
          onWheel={(e) => handleHorizontalScroll(e, projectRef)}
        >
          <div className="flex gap-5 w-max py-2">
            {[
              {
                title: "Sari-Sari Store Management System",
                image: alingnena,
                desc: "A full-stack business management system that helps sari-sari store owners streamline inventory, process sales, monitor stock levels, and generate sales reports through an intuitive dashboard.",
                stack: [
                  "React",
                  "Node.js",
                  "Supabase",
                  "JavaScript",
                  "Tailwind CSS",
                ],
                color: "from-orange-500 to-red-500",
                link: "https://aling-nena-store-theta.vercel.app/login",
              },
              {
                title: "Coffee Sales Dashboard",
                image: CoffeeSales,
                desc: "An interactive Tableau dashboard that visualizes coffee sales performance, revenue trends, product insights, and business analytics.",
                stack: ["Tableau", "Excel", "Data Analytics"],
                color: "from-sky-500 to-cyan-500",
                link: "https://public.tableau.com/app/profile/arwin.janoyan/viz/Book1_17742456072680/Dashboard?publish=yes",
              },
              {
                title: "Nike Landing Page",
                image: nike,
                desc: "A responsive Nike landing page featuring a modern UI, smooth animations, and a mobile-first design built with React and Tailwind CSS.",
                stack: ["React", "Tailwind CSS", "Vite"],
                color: "from-violet-500 to-fuchsia-500",
                link: "https://nikeiske-landingpage-rose.vercel.app",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="group
                            w-[300px] sm:w-[340px] md:w-[400px]
                            min-h-[430px] md:h-[500px]
                            flex-shrink-0
                            overflow-hidden
                            rounded-2xl
                            border border-zinc-200 dark:border-zinc-800
                            bg-white dark:bg-zinc-900
                            transition-all duration-300
                            hover:-translate-y-2 hover:shadow-2xl
                            flex flex-col"
              >
                {/* Gradient Accent */}
                <div
                  className={`h-1.5 w-full bg-gradient-to-r ${project.color}`}
                />

                {/* Project Image */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-36 sm:h-40 md:h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-4 md:p-5">
                  <h3 className="text-md md:text-xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-xs md:text-sm leading-5 text-foreground/70 flex-1">
                    {project.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-3 md:mt-0 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-[11px] md:text-xs font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="my-4 border-t border-zinc-200 dark:border-zinc-800" />

                  {/* Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between text-sm font-medium text-accent group/link"
                  >
                    <span>View Live Demo</span>

                    <ChevronRight
                      size={18}
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${
          animate ? "animate-in" : ""
        } transition-colors duration-300 mt-3`}
      >
        <div className="bento-card p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-md md:text-lg font-bold">Let's Connect</h2>
              <p className="text-xs md:text-xs text-foreground/60 mt-1">
                Open for internships, freelance work, and collaborations.
              </p>
            </div>

            <div className="flex items-center gap-1 rounded-full bg-green-500/10 px-3 py-1">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-green-600 dark:text-green-400">
                Available
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-6">
            <a
              href="https://www.linkedin.com/in/arwin-ryan-janoyan-6b355a3a5"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-border bg-foreground/5 p-4 flex flex-col items-center gap-2 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-medium">LinkedIn</span>
            </a>

            <a
              href="https://github.com/ArwinJanoyan2430"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-border bg-foreground/5 p-4 flex flex-col items-center gap-2 hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-medium">GitHub</span>
            </a>

            <a
              href="https://www.instagram.com/arwinj.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-border bg-foreground/5 p-4 flex flex-col items-center gap-2 hover:border-pink-500 hover:bg-pink-500/10 transition-all duration-300"
            >
              <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-medium">Instagram</span>
            </a>
          </div>

          <div className="mt-6 rounded-xl border border-dashed border-border p-3">
            <p className="text-xs text-foreground/70 leading-relaxed">
              Feel free to reach out if you'd like to discuss a project,
              internship opportunity, or just connect with me.
            </p>
          </div>
        </div>

        {/* Recommendation */}
        <div className="bento-card p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <h2 className="text-lg font-bold">Recommendation</h2>

          <div className="flex items-center gap-3 mt-4">
            <img
              src={dict} // or alingnena
              alt="Recommender"
              className="w-12 h-12 rounded-full object-cover"
            />

            <div>
              <h3 className="font-semibold">
                Department of Information Communications Technology
              </h3>
              <p className="text-xs text-foreground/60">
                Immediate Supervisor • SHS Work Immersion
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm italic leading-relaxed text-foreground/70">
            "Mr. Janoyan has shown a strong sense of curiosity and eagerness to
            understand how tasks are done. His inquisitive nature and
            willingness to ask questions demonstrate a genuine interest in
            learning."
          </p>

          <div className="flex items-center gap-1 mt-4 text-yellow-500">
            ★★★★★
          </div>
          <button
            onClick={() => setSelectedImage(feedback)}
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all duration-300"
          >
            View Supervisor's Comment
            <ChevronRight size={16} />
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in animation-delay-600 mt-3 md:mt-4">
        <div className="bento-card p-1 col-span-1 md:col-span-6 space-y-2 animate-fade-in animation-delay-600 hover:scale-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
          <h2 className="text-lg font-bold">Certifications</h2>

          <div
            ref={certRef}
            className="scrollbar-hover w-full flex gap-4"
            onWheel={(e) => handleHorizontalScroll(e, certRef)}
          >
            <div className="flex gap-4 my-1 w-max snap-x snap-mandatory ">
              <div
                className="bg-white dark:bg-zinc-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden group flex-shrink-0 w-[220px]"
                onClick={() => setSelectedImage(BestInWebManagement)}
              >
                <div className="overflow-hidden">
                  <img
                    src={BestInWebManagement}
                    alt="Best in Web Management"
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-semibold hover:text-blue-500 transition-colors">
                    Best in Website Design
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Awarded for outstanding performance in website design during
                    the SURGE Freelancing Marketplace training program.
                  </p>
                </div>
              </div>

              <div
                className="bg-white dark:bg-zinc-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden group flex-shrink-0 w-[220px]"
                onClick={() => setSelectedImage(harvard)}
              >
                <div className="overflow-hidden">
                  <img
                    src={harvard}
                    alt="Best in Web Management"
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-semibold hover:text-blue-500 transition-colors">
                    CS50's Web Programming with Python and JavaScript
                  </h3>
                  <p className="text-xs text-muted-foreground ">
                    Web development course offered by Harvard University through
                    edX.
                  </p>
                </div>
              </div>

              <div
                className="bg-white dark:bg-zinc-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden group flex-shrink-0 w-[220px]"
                onClick={() => setSelectedImage(IntelliPatCert)}
              >
                <div className="overflow-hidden">
                  <img
                    src={IntelliPatCert}
                    alt="IntelliPat Certificate"
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-semibold hover:text-blue-500 transition-colors">
                    Excel Certification Course Online
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Professional certification in Microsoft Excel offered by
                    IntelliPaat Academy.
                  </p>
                </div>
              </div>

              <div
                className="bg-white dark:bg-zinc-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden group flex-shrink-0 w-[220px]"
                onClick={() => setSelectedImage(sqlCert)}
              >
                <div className="overflow-hidden">
                  <img
                    src={sqlCert}
                    alt="SQL Certificate"
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-semibold hover:text-blue-500 transition-colors">
                    Introduction to SQL
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Professional online course offered by Simplilearn SkillUp to
                    deepen technical skills and advance career capabilities.
                  </p>
                </div>
              </div>

              <div
                className="bg-white dark:bg-zinc-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden group flex-shrink-0 w-[220px]"
                onClick={() => setSelectedImage(hourofcode)}
              >
                <div className="overflow-hidden">
                  <img
                    src={hourofcode}
                    alt="Hour of Code Certificate"
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-semibold hover:text-blue-500 transition-colors">
                    Hour of Code - AI Ready ASEAN Programme
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Certificate of participation in the global "Hour of Code"
                    initiative, focused on foundational coding and AI awareness.
                  </p>
                </div>
              </div>

              <div
                className="bg-white dark:bg-zinc-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden group flex-shrink-0 w-[220px]"
                onClick={() => setSelectedImage(webdesignCert)}
              >
                <div className="overflow-hidden">
                  <img
                    src={webdesignCert}
                    alt="Website Design Certificate"
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-semibold hover:text-blue-500 transition-colors">
                    Best in Graphic Design (Surge Freelancing Marketplace)
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Awarded for outstanding achievement during an intensive
                    5-day masterclass training.
                  </p>
                </div>
              </div>

              <div
                className="bg-white dark:bg-zinc-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden group flex-shrink-0 w-[220px]"
                onClick={() => setSelectedImage(oracleCert)}
              >
                <div className="overflow-hidden">
                  <img
                    src={oracleCert}
                    alt="Oracle Certificate"
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-semibold hover:text-blue-500 transition-colors">
                    Oracle PL/SQL: Table Functions
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Advanced database programming certification from Oracle Dev
                    Gym
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bento-card p-1 col-span-1 md:col-span-6 space-y-2 animate-fade-in animation-delay-600 hover:shadow-xl transform hover:scale-100 hover:-translate-y-1 transition-all duration-300 ease-in-out">
          <h2 className="text-lg font-bold">Gallery</h2>

          <div
            ref={galleryRef}
            className="scrollbar-hover w-full flex gap-4 overflow-x-auto"
            onWheel={(e) => handleHorizontalScroll(e, galleryRef)}
          >
            <div className="flex gap-4 my-1 w-max snap-x snap-mandatory ">
              <div className="flex gap-4 my-1 w-max snap-x snap-mandatory">
                <img
                  src={g1}
                  alt="Gallery Image 1"
                  className="h-50 flex-shrink-0 cursor-pointer snap-start hover:scale-105 transition-transform duration-500 ease-out"
                  onClick={() => setSelectedImage(g1)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-xl"
            alt="Certificate"
          />
        </div>
      )}

      <section>
        <div className="text-center text-xs text-foreground/70 mt-8">
          <p>© 2026 Arwin Janoyan. All rights reserved.</p>
        </div>
      </section>

      <section>
        <div className="">
          <BotpressChat dark={dark} />
        </div>
      </section>
    </div>
  );
}

export default App;
