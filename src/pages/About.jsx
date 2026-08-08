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

//icons
import { FcGoogle } from "react-icons/fc";
import { Database } from "lucide-react";
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
    { node: <SiPostman />, title: "Postman" },
    { node: <SiVercel />, title: "Vercel" },
    { node: <SiPython />, title: "Python" },
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

        {/* About */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="pixel-font text-2xl font-semibold">Hi, I'm Arwin</h2>

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

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
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
    p-0
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
              onClick={() => setSelectedCertificate(cert)}
              className={`
  group relative z-0 -mx-1
  rounded-lg
  border border-zinc-200
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
 dark:border-zinc-900
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
                    ( VERIFY )
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

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
