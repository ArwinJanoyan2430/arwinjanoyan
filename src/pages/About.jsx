import ScrollReveal from "@/animations/ScrollReveal";
import TiltedCard from "@/animations/TitledCard";
import { useEffect, useState } from "react";
import LogoLoop from "@/animations/LogoLoop";
import Carousel from "@/animations/Carousel";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSupabase,
  SiMysql,
  SiGit,
  SiGithub,
  SiVite,
  SiExpo,
  SiPostman,
  SiVercel,
  SiHtml5,
  SiPython,
  SiTypescript,
} from "react-icons/si";

//pfp
import pfp2 from "../assets/v2/pfp2.png";

//carousel
import g2 from "../assets/p1.jpg";
import g1 from "../assets/g1.jpg";
import p1 from "../assets/g2.jpg";

//image-icons
import surge from "../assets/v2/surge-logo.png";
import simplilearn from "../assets/v2/simplilearn.png";

//icons
import { FcGoogle } from "react-icons/fc";
import { ArrowUpRight, Database, Trophy } from "lucide-react";
import IntelliPaat from "../assets/v2/IntelliPaat.png";
import harvardLogo from "../assets/v2/harvard-logo.png";

//certs
import BestInWebManagement from "../assets/v2/BestInWebManagement.png";
import sqlCert from "../assets/v2/sqlCert.png";
import HourOfCode from "../assets/v2/hourofcode.png";
import webdesignCert from "../assets/v2/webdesignCert.png";
import oracleCert from "../assets/v2/oracleCert.png";
import IntelliPatCert from "../assets/v2/IntelliPatCert.png";
import harvard from "../assets/v2/harvard.png";

function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showTechStack, setShowTechStack] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const galleryCardWidth = 500;
  const galleryCardHeight = 500;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const certifications = [
    {
      title: "CS50, Web Programming",
      issuer: "HARVARD",
      icon: (
        <img
          src={harvardLogo}
          alt="Harvard"
          className="h-6 w-6 object-contain"
        />
      ),
      iconStyle: "",
      image: harvard,
    },
    {
      title: "Best in Website Design",
      issuer: "SURGE",
      icon: <img src={surge} alt="SURGE" className="h-6 w-6 object-contain" />,
      iconStyle: "",
      image: BestInWebManagement,
    },
    {
      title: "Introduction to SQL",
      issuer: "SIMPLILEARN",
      icon: (
        <img
          src={simplilearn}
          alt="SIMPLILEARN"
          className="h-6 w-6 object-contain"
        />
      ),
      iconStyle: "",
      image: sqlCert,
    },
    {
      title: "AI Ready - Hour of code",
      issuer: "Google",
      icon: <FcGoogle size={20} />,
      iconStyle: "",
      image: HourOfCode,
    },
    {
      title: "Graphics Design",
      issuer: "SURGE",
      icon: <img src={surge} alt="SURGE" className="h-6 w-6 object-contain" />,
      iconStyle: "",
      image: webdesignCert,
    },
    {
      title: "SQL Table Functions",
      issuer: "ORACLE",
      icon: <Database size={20} />,
      iconStyle: "text-red",
      image: oracleCert,
    },
    {
      title: "Excel Course",
      issuer: "INTELLIPAAT",
      icon: (
        <img
          src={IntelliPaat}
          alt="IntelliPaat"
          className="h-6 w-6 object-contain"
        />
      ),
      iconStyle: "text-red",
      image: IntelliPatCert,
    },
  ];

  const techLogos = [
    { node: <SiReact />, title: "React" },
    { node: <SiNextdotjs />, title: "Next.js" },
    { node: <SiJavascript />, title: "JavaScript" },
    { node: <SiTailwindcss />, title: "Tailwind CSS" },
    { node: <SiNodedotjs />, title: "Node.js" },
    { node: <SiExpress />, title: "Express.js" },
    { node: <SiSupabase />, title: "Supabase" },
    { node: <SiMysql />, title: "MySQL" },
    { node: <SiGit />, title: "Git" },
    { node: <SiGithub />, title: "GitHub" },
    { node: <SiVite />, title: "Vite" },
    { node: <SiExpo />, title: "Expo" },
    { node: <SiVercel />, title: "Vercel" },
    { node: <SiPython />, title: "Python" },
  ];
  const techGroups = [
    {
      title: "Front End",
      items: [
        "JavaScript",
        "TypeScript",
        "React",
        "React Native",
        "Next.js",
        "Tailwind CSS",
        "CSS3",
        "Vite",
        "Expo",
      ],
    },
    {
      title: "Back End",
      items: [
        "Node.js",
        "Express.js",
        "Supabase",
        "MongoDB",
        "MySQL",
        "AsyncStorage",
      ],
    },
    {
      title: "Data Analytics",
      items: ["Python", "Excel", "Tableau"],
    },
    {
      title: "Other Tools",
      items: ["Git", "GitHub", "Vercel", "ChatGpt 5.6", "Gemini", "VS Code"],
    },
  ];

  const galleryItems = [
    {
      image: p1,
    },
    {
      image: g1,
    },
    {
      image: g2,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-8 md:px-12 py-10 md:py-50">
      <div className="mx-auto grid max-w-5xl items-center justify-items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Profile Card */}
        <div className="flex w-full justify-center">
          <TiltedCard
            imageSrc={pfp2}
            altText="Arwin Janoyan"
            captionText="Arwin Janoyan"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={10}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip
            displayOverlayContent
            overlayContent={
              <div className="flex h-full items-end rounded-2xl bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5">
                <div>
                  <h3 className="pixel-font text-sm font-semibold text-white">
                    Arwin Janoyan - dev
                  </h3>
                </div>
              </div>
            }
          />
        </div>

        {/* About */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="pixel-font text-xl font-semibold sm:text-2xl">Hi, I'm Arwin</h2>

          <p className="mt-6 text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:text-[15px] sm:leading-8">
            I'm an Information Technology student at the University of Mindanao
            with a passion for building modern web applications and data-driven
            solutions.
          </p>

          <p className="mt-5 text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:text-[15px] sm:leading-8">
            I enjoy developing responsive websites, business systems, and
            interactive dashboards that solve real-world problems. My interests
            include full-stack development, UI/UX design, and data analytics.
          </p>

          <p className="mt-5 text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:text-[15px] sm:leading-8">
            Outside academics, I continuously improve my skills through personal
            projects, certifications, and programming competitions.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <span className="rounded-full border border-zinc-300 px-3 py-2 text-xs dark:border-zinc-700 sm:px-4 sm:py-2 sm:text-sm">
              Full Stack
            </span>

            <span className="rounded-full border border-zinc-300 px-3 py-2 text-xs dark:border-zinc-700 sm:px-4 sm:py-2 sm:text-sm">
              UI/UX
            </span>

            <span className="rounded-full border border-zinc-300 px-3 py-2 text-xs dark:border-zinc-700 sm:px-4 sm:py-2 sm:text-sm">
              Data Analytics
            </span>
          </div>
        </div>
      </div>

      <div className="mt-12 md:mt-16">
        <div className="mb-5 flex items-center gap-4">
          <div>
            <p className="ibm-mono text-[11px] uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
              Tech stack
            </p>
            <h2 className="pixel-font mt-1 text-lg">Tools I use</h2>
          </div>
          <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
        </div>

        <div className="relative h-24 overflow-hidden">
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            ariaLabel="Technologies I use"
          />
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center gap-4 md:flex-row md:items-start md:justify-center">
        <div className="flex w-full flex-col items-center md:w-auto md:items-start md:pr-2">
          <button
            type="button"
            onClick={() => setShowTechStack((prev) => !prev)}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-zinc-300 bg-white/90 px-4 py-2.5 text-sm font-medium text-zinc-700 shadow-sm transition duration-300 hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900/90 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:bg-zinc-800"
          >
            <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition duration-700 group-hover:translate-x-[120%] dark:via-white/10" />
            <span className="relative">
              {showTechStack ? "Hide" : "View"} Tech Stack
            </span>
            <span
              className={`relative text-xs transition-transform duration-300 ${showTechStack ? "rotate-180" : ""}`}
            >
              ⌄
            </span>
          </button>
        </div>

        <div className="flex w-full flex-col items-center md:w-auto md:items-start md:pl-2">
          <button
            type="button"
            onClick={() => setShowGallery((prev) => !prev)}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-zinc-300 bg-white/90 px-4 py-2.5 text-sm font-medium text-zinc-700 shadow-sm transition duration-300 hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900/90 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:bg-zinc-800"
          >
            <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition duration-700 group-hover:translate-x-[120%] dark:via-white/10" />
            <span className="relative">
              {showGallery ? "Hide Gallery" : "View Gallery"}
            </span>
            <span
              className={`relative text-xs transition-transform duration-300 ${showGallery ? "rotate-180" : ""}`}
            >
              ⌄
            </span>
          </button>
        </div>
        <div></div>
      </div>
      {showGallery && (
        <div className="mx-auto mt-4 w-full max-w-[min(100%,400px)] animate-[fadeIn_0.35s_ease-out] overflow-hidden rounded-[32px] border border-zinc-200/80 bg-[linear-gradient(135deg,_rgba(255,255,255,0.98),_rgba(244,244,245,0.96))] p-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)] dark:border-zinc-800 dark:bg-[linear-gradient(135deg,_rgba(24,24,27,0.98),_rgba(9,9,11,1))] sm:max-w-[min(100%,380px)] md:max-w-[min(100%,500px)]">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Depth gallery
            </p>
            <span className="rounded-full border border-zinc-300 bg-white/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-300">
              {activeGalleryIndex + 1}/{galleryItems.length}
            </span>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-zinc-200 bg-white/80 p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70">
            <div className="mx-auto h-80 w-full max-w-[500px] sm:h-[360px] sm:max-w-[320px] md:h-[450px] md:max-w-[500px]">
              <Carousel
                items={galleryItems}
                cardWidth={galleryCardWidth}
                cardHeight={galleryCardHeight}
                radius={18}
                depth={isMobile ? 90 : 100}
                spread={isMobile ? 48 : 70}
                tilt={isMobile ? 14 : 20}
                tiltDirection="right"
                perspective={isMobile ? 1000 : 1200}
                visibleCards={isMobile ? 2 : 3}
                falloff={0.2}
                blur={isMobile ? 3 : 4}
                duration={700}
                autoplay={false}
                loop
                showControls
                showIndicators
                onChange={(index) => setActiveGalleryIndex(index)}
              />
            </div>
          </div>
        </div>
      )}
      
      {showTechStack && (
        <div className="mt-4 w-full min-w-[280px] animate-[fadeIn_0.35s_ease-out] overflow-hidden rounded-[32px] border border-zinc-200/80 bg-[linear-gradient(135deg,_rgba(255,255,255,0.98),_rgba(244,244,245,0.96))] p-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] dark:border-zinc-800 dark:bg-[linear-gradient(135deg,_rgba(24,24,27,0.98),_rgba(9,9,11,1))] md:min-w-[420px]">
          <div className="rounded-[24px] p-4 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/70">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="ibm-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                  Stack overview
                </p>
                <h3 className="pixel-font mt-1 text-lg text-zinc-900 dark:text-white">
                  My toolkit
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  A quick look at the languages, frameworks, and tools I use to
                  build modern products.
                </p>
              </div>
              <div className="rounded-full border border-zinc-200 bg-zinc-950 px-3 py-1 text-xs font-semibold text-white shadow-sm dark:border-zinc-700 dark:bg-white dark:text-zinc-950">
                {techGroups.reduce(
                  (count, group) => count + group.items.length,
                  0,
                )}{" "}
                tools
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {techGroups.map((group, index) => (
                <div
                  key={group.title}
                  className={`group relative overflow-hidden rounded-[22px] border border-zinc-200 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 ${
                    index % 2 === 0
                      ? "bg-zinc-50/90 dark:bg-zinc-950/80"
                      : "bg-white/90 dark:bg-zinc-900/80"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/5 via-transparent to-zinc-900/10 opacity-0 transition duration-300 group-hover:opacity-100 dark:from-white/5 dark:to-white/10" />
                  <div className="relative flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                        {group.title}
                      </p>
                      <h4 className="mt-1 text-base font-semibold text-zinc-900 transition-colors duration-300 group-hover:text-zinc-700 dark:text-zinc-100 dark:group-hover:text-zinc-300">
                        {group.title}
                      </h4>
                    </div>
                    <span className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-zinc-600 transition-all duration-300 group-hover:scale-105 group-hover:shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                      {group.items.length}
                    </span>
                  </div>

                  <div className="relative mt-3 flex flex-wrap gap-2">
                    {group.items.map((title) => (
                      <span
                        key={title}
                        className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
                      >
                        {title}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="mx-auto max-w-7xl py-20  px-0 md:px-0 md:py-25">
        <header className="mb-12 md:mb-16">
          <h1 className="pixel-font text-xl font-bold sm:text-2xl md:text-3xl">
            Certifications
          </h1>

          <ScrollReveal
            baseOpacity={0}
            enableBlur
            blurStrength={8}
            textClassName="ibm-mono mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:text-base md:text-lg"
          >
            Web development certifications & achievements{" "}
          </ScrollReveal>
        </header>

        {/* Certificates Grid */}
        <div
          className="
    grid grid-cols-2 gap-0
    rounded-xl
    p-0 md:p-2
    max-w-5xl
    mx-auto
    transition-colors duration-300
    md:grid-cols-3
    lg:grid-cols-4
  "
        >
          {certifications.map((cert, index) => (
            <button
              key={cert.title}
              onClick={() => {
                if (cert.link) {
                  window.open(cert.link, "_blank", "noopener,noreferrer");
                  return;
                }
                setSelectedCertificate(cert);
              }}
              aria-label={
                cert.link
                  ? `View ${cert.title} achievement on Facebook`
                  : `View ${cert.title} certificate`
              }
              className={`
  group relative z-0 -mx-2 -my-2 md:-my-2
  rounded-lg
  border border-zinc-100
  bg-white
  p-2
  shadow-lg
  transition-all duration-300
  backface-hidden
  transform-3d
  will-change-transform
  hover:z-20
  hover:-translate-y-6
  hover:rotate-0
 dark:border-zinc-950
dark:bg-gradient-to-b
dark:from-zinc-900
dark:via-zinc-900
dark:to-zinc-950
dark:shadow-black/30

  ${index % 4 === 0 ? "rotate-[-5deg]" : ""}
  ${index % 4 === 1 ? "rotate-[5deg]" : ""}
  ${index % 4 === 2 ? "rotate-[-5deg]" : ""}
  ${index % 4 === 3 ? "rotate-[5deg]" : ""}
`}
            >
              <div className="group relative rounded-lg border border-zinc-200 bg-white p-3 transition-all duration-500 dark:border-zinc-800 dark:bg-gradient-to-b dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-950 dark:shadow-black/30">
                {/* Icon */}
                <div className="mt-1 mb-4 flex justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-zinc-200 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900">
                    {cert.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="ibm-mono text-center text-[11px] font-bold leading-tight text-zinc-800 dark:text-zinc-200 sm:text-xs">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="mt-1 text-center font-mono text-[8px] uppercase tracking-wider text-zinc-400 sm:text-[9px]">
                  {cert.issuer}
                </p>

                {/* Verify */}
                <div className="mt-1 text-center">
                  <span className="pixel-font text-[8px] font-bold tracking-[0.15em] text-zinc-300 transition-colors duration-300 group-hover:text-zinc-700 dark:text-zinc-700 dark:group-hover:text-zinc-300 sm:text-[9px]">
                    {cert.link ? "( VIEW ACHIEVEMENT )" : "( VERIFY )"}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <a
          href="https://www.facebook.com/photo.php?fbid=611827651697333&set=pb.100086103111194.-2207520000&type=3"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mx-auto mt-10 flex max-w-5xl items-center justify-between gap-5 overflow-hidden rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-amber-100 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-950/10 dark:border-amber-500/25 dark:from-amber-500/15 dark:via-zinc-900 dark:to-zinc-900 dark:hover:border-amber-400/60 sm:p-6"
        >
          <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full border border-amber-300/50 dark:border-amber-400/15" />
          <div className="relative flex items-center gap-4 sm:gap-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-400 text-amber-950 shadow-lg shadow-amber-500/25 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <Trophy size={23} aria-hidden="true" />
            </span>
            <div>
              <p className="ibm-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300">
                Achievement unlocked · 2025
              </p>
              <h3 className="pixel-font mt-1.5 text-sm leading-snug text-zinc-900 dark:text-white sm:text-base">
                MMCM CodeClash Programming Competition — 2nd Place
              </h3>
            </div>
          </div>
          <span className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-300 bg-white/70 text-amber-800 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-amber-400 group-hover:text-amber-950 dark:border-amber-400/30 dark:bg-white/5 dark:text-amber-300 dark:group-hover:bg-amber-400">
            <ArrowUpRight size={18} aria-hidden="true" />
            <span className="sr-only">View achievement post</span>
          </span>
        </a>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedCertificate(null)}
          >
            <div
              className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-xl border border-zinc-800 bg-[#111113] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-black/70 text-xl text-zinc-400 transition-all duration-200 hover:scale-105 hover:bg-white hover:text-black"
                aria-label="Close certificate"
              >
                ×
              </button>

              {/* Certificate Image */}
              <div className="flex max-h-[75vh] items-center justify-center overflow-auto">
                <img
                  src={selectedCertificate.image}
                  alt={`${selectedCertificate.title} certificate`}
                  className="max-h-[75vh] max-w-full object-contain"
                />
              </div>

              {/* Information */}
              <div className="border-t border-zinc-800 px-5 py-4">
                <h2 className="text-sm font-semibold text-zinc-200">
                  {selectedCertificate.title}
                </h2>

                <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  {selectedCertificate.issuer}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default About;
