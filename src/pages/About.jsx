import ScrollReveal from "@/animations/ScrollReveal";
import TiltedCard from "@/animations/TitledCard";
import { useEffect, useState } from "react";
import LogoLoop from "@/animations/LogoLoop";
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
} from "react-icons/si";

//images
import pfp2 from "../assets/v2/pfp2.png";
import surge from "../assets/v2/surge-logo.png";
import simplilearn from "../assets/v2/simplilearn.png";

//certs
import BestInWebManagement from "../assets/v2/BestInWebManagement.png";
import sqlCert from "../assets/v2/sqlCert.png";

function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const certifications = [
    {
      title: "Best in Website Design",
      issuer: "SURGE",
      icon: <img src={surge} alt="SURGE" className="h-6 w-6 object-contain" />,
      iconStyle: "text-blue-500",
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
      iconStyle: "text-blue-500",
      image: sqlCert,
    },
    {
      title: "Generative AI Certified Professional",
      issuer: "ORACLE",
      icon: "O",
      iconStyle: "text-red-500",
      image: "",
    },
    {
      title: "Neo4j & Generative AI Certification",
      issuer: "NEO4J",
      icon: "••",
      iconStyle: "text-cyan-400",
      image: "",
    },
    {
      title: "Building RAG Apps Using MongoDB",
      issuer: "MONGODB",
      icon: "◆",
      iconStyle: "text-green-400",
      image: "",
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
    { node: <SiPostman />, title: "Postman" },
    { node: <SiVercel />, title: "Vercel" },
    { node: <SiPython />, title: "Python" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-8 md:px-12 py-10 md:py-50">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left */}
        <div className="max-w-xl">
          <h2 className="pixel-font text-2xl font-semibold">Hi I'm Arwin</h2>

          <p className="mt-6 text-[15px] leading-8 text-zinc-600 dark:text-zinc-400">
            I'm an Information Technology student at the University of Mindanao
            with a passion for building modern web applications and data-driven
            solutions.
          </p>

          <p className="mt-5 text-[15px] leading-8 text-zinc-600 dark:text-zinc-400">
            I enjoy developing responsive websites, business systems, and
            interactive dashboards that solve real-world problems. My interests
            include full-stack development, UI/UX design, and data analytics.
          </p>

          <p className="mt-5 text-[15px] leading-8 text-zinc-600 dark:text-zinc-400">
            Outside academics, I continuously improve my skills through personal
            projects, certifications, and programming competitions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-zinc-300 px-4 py-2 text-sm dark:border-zinc-700">
              Full Stack
            </span>

            <span className="rounded-full border border-zinc-300 px-4 py-2 text-sm dark:border-zinc-700">
              UI/UX
            </span>

            <span className="rounded-full border border-zinc-300 px-4 py-2 text-sm dark:border-zinc-700">
              Data Analytics
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center md:justify-end">
          <TiltedCard
            imageSrc={pfp2}
            altText="Arwin Janoyan"
            captionText="Arwin Janoyan"
            containerHeight={isMobile ? "280px" : "300px"}
            containerWidth={isMobile ? "280px" : "300px"}
            imageHeight={isMobile ? "280px" : "300px"}
            imageWidth={isMobile ? "280px" : "300px"}
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
      </div>
      <div className="relative h-[200px] overflow-hidden translate-y-10 md:translate-y-[100px]">
        <LogoLoop
          logos={techLogos}
          speed={100}
          direction="left"
          logoHeight={60}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          ariaLabel="Technology partners"
        />
      </div>

      <div className="mx-auto max-w-7xl  px-0 md:px-0 md:py-30">
        <header className="mb-12 md:mb-16">
          <h1 className="pixel-font font-bold md:text-3xl text-xl sm:text-3xl">
            Certificates
          </h1>

          <ScrollReveal
            baseOpacity={0}
            enableBlur
            blurStrength={8}
            textClassName="ibm-mono mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:text-base md:text-lg"
          >
            Where I've learned, built, and grown.
          </ScrollReveal>
        </header>
        <div className="grid grid-cols-2 gap-x-0 gap-y-2 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {certifications.map((cert, index) => (
            <button
              key={cert.title}
              onClick={() => setSelectedCertificate(cert)}
              className={`
    cert-card
    group
    relative
    -m-1.5
    flex
    flex-col
    items-center
    rounded-xl
    bg-gradient-to-b
    from-gray-50
    to-white
    px-3.5
    py-5
    text-center
    shadow-sm
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-lg
    focus:outline-none
    focus:ring-2
    focus:ring-zinc-400

    dark:from-zinc-900
    dark:to-zinc-950
    dark:border
    dark:border-zinc-800

    ${index === 0 ? "rotate-[-2deg]" : ""}
    ${index === 1 ? "rotate-[2deg]" : ""}
    ${index === 2 ? "rotate-[-1deg]" : ""}
    ${index === 3 ? "rotate-[2deg]" : ""}
    ${index === 4 ? "rotate-[-2deg]" : ""}
  `}
            >
              {/* Icon */}
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-lg dark:border-zinc-800 dark:bg-zinc-950">
                {cert.icon}
              </div>

              {/* Title */}
              <h3 className="ibm-mono px-1 text-[11px] font-semibold leading-tight text-zinc-800 dark:text-zinc-200 sm:text-xs">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="mt-1 font-mono text-[8px] uppercase tracking-wider text-zinc-500 sm:text-[9px]">
                {cert.issuer}
              </p>

              {/* Verify */}
              <span className="mt-4 font-mono text-[8px] tracking-[0.15em] text-zinc-400 transition-colors group-hover:text-zinc-900 dark:text-zinc-600 dark:group-hover:text-white sm:text-[9px]">
                ‹ VERIFY ›
              </span>
            </button>
          ))}
        </div>

        {/* Certificate Modal — OUTSIDE the grid */}
        {selectedCertificate && (
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedCertificate(null)}
          >
            <div
              className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-xl border border-zinc-800 bg-[#111113] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-black/70 text-xl text-zinc-400 transition hover:bg-white hover:text-black"
                aria-label="Close certificate"
              >
                ×
              </button>

              {/* Certificate */}
              <img
                src={selectedCertificate.image}
                alt={`${selectedCertificate.title} certificate`}
                className="max-h-[80vh] max-w-full object-contain"
              />

              {/* Information */}
              <div className="border-t border-zinc-800 px-5 py-4">
                <h2 className="text-sm font-semibold text-zinc-200">
                  {selectedCertificate.title}
                </h2>

                <p className="mt-1 font-mono text-[10px] tracking-wider text-zinc-500">
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
