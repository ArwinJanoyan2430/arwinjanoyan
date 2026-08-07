import Carousel from "@/animations/Carousel";
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
import p1 from "../assets/v2/p1.jpg";
import g1 from "../assets/v2/g1.jpg";
import g2 from "../assets/v2/g2.jpg";
import pfp2 from "../assets/v2/pfp2.png";

function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = [
    { image: g2, alt: "One" },
    { image: p1, alt: "Two" },
    { image: g1, alt: "Three" },
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
    <section className="mx-auto max-w-7xl px-12 py-10 md:py-50">
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
      <div className="mx-auto max-w-7xl -my-20 px-6 md:px-12 md:py-30">
        <div
          style={{
            height: isMobile ? "350px" : "500px",
            position: "relative",
          }}
        >
          <Carousel
            items={items}
            depth={isMobile ? 100 : 220}
            spread={isMobile ? 30 : 90}
            tilt={isMobile ? 10 : 22}
            tiltDirection="right"
            perspective={isMobile ? 700 : 1400}
            visibleCards={isMobile ? 1 : 4}
            falloff={0.2}
            blur={isMobile ? 2 : 6}
            autoplay={false}
            loop
            cardWidth={isMobile ? 280 : 500}
            cardHeight={isMobile ? 300 : 450}
            radius={18}
            tint="#05060a"
            duration={700}
            ease="power3.out"
            autoplayDelay={3200}
            showControls
            showIndicators
          />
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default About;
