import { useState } from "react";
import { ArrowUpRight, Database, Trophy } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import ScrollReveal from "../animations/ScrollReveal";

// Certificate logos
import surge from "../assets/v2/surge-logo.png";
import simplilearn from "../assets/v2/simplilearn.png";
import IntelliPaat from "../assets/v2/IntelliPaat.png";
import harvardLogo from "../assets/v2/harvard-logo.png";

// Certificates
import BestInWebManagement from "../assets/v2/BestInWebManagement.png";
import sqlCert from "../assets/v2/sqlCert.png";
import HourOfCode from "../assets/v2/hourofcode.png";
import webdesignCert from "../assets/v2/webdesignCert.png";
import oracleCert from "../assets/v2/oracleCert.png";
import IntelliPatCert from "../assets/v2/IntelliPatCert.png";
import harvard from "../assets/v2/harvard.png";

const certifications = [
  {
    title: "CS50, Web Programming",
    issuer: "HARVARD",
    icon: <img src={harvardLogo} alt="Harvard" className="h-6 w-6 object-contain" />,
    image: harvard,
  },
  {
    title: "Best in Website Design",
    issuer: "SURGE",
    icon: <img src={surge} alt="SURGE" className="h-6 w-6 object-contain" />,
    image: BestInWebManagement,
  },
  {
    title: "Introduction to SQL",
    issuer: "SIMPLILEARN",
    icon: <img src={simplilearn} alt="Simplilearn" className="h-6 w-6 object-contain" />,
    image: sqlCert,
  },
  {
    title: "AI Ready - Hour of Code",
    issuer: "Google",
    icon: <FcGoogle size={20} aria-hidden="true" />,
    image: HourOfCode,
  },
  {
    title: "Graphics Design",
    issuer: "SURGE",
    icon: <img src={surge} alt="SURGE" className="h-6 w-6 object-contain" />,
    image: webdesignCert,
  },
  {
    title: "SQL Table Functions",
    issuer: "ORACLE",
    icon: <Database size={20} aria-hidden="true" />,
    image: oracleCert,
  },
  {
    title: "Excel Course",
    issuer: "INTELLIPAAT",
    icon: <img src={IntelliPaat} alt="Intellipaat" className="h-6 w-6 object-contain" />,
    image: IntelliPatCert,
  },
];

function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:px-10 md:py-20">
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
  );
}

export default Certifications;
