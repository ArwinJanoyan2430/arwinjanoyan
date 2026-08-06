import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../index.css";

gsap.registerPlugin(ScrollTrigger);

function ScrollReveal({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0,
  blurStrength = 8,
  containerClassName = "",
  textClassName = "",
  start = "top 85%",
  end = "bottom center",
}) {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    if (typeof children !== "string") return children;

    return children.split(/(\s+)/).map((word, index) =>
      /^\s+$/.test(word) ? (
        word
      ) : (
        <span key={index} className="word">
          {word}
        </span>
      ),
    );
  }, [children]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scroller = scrollContainerRef?.current || window;
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray(".word", container);

      if (!words.length) return;

      gsap.set(words, {
        opacity: baseOpacity,
        y: isMobile ? 6 : 12,
        filter:
          enableBlur && !isMobile ? `blur(${blurStrength}px)` : "blur(0px)",
        WebkitFilter:
          enableBlur && !isMobile ? `blur(${blurStrength}px)` : "blur(0px)",
      });

      gsap.to(words, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        WebkitFilter: "blur(0px)",
        stagger: isMobile ? 0.02 : 0.05,
        ease: "power2.out",
        overwrite: "auto",
        scrollTrigger: {
          trigger: container,
          scroller,
          start,
          end,
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [scrollContainerRef, enableBlur, baseOpacity, blurStrength, start, end]);

  return (
    <div
      ref={containerRef}
      className={`w-full px-0 sm:px-0 md:px-0 ${containerClassName}`}
    >
      <p
        className={`
          text-left
          mx-auto
          text-sm
          sm:text-base
          md:text-lg
          leading-7
          break-words
          ibm-mono
          ${textClassName}
        `}
      >
        {splitText}
      </p>
    </div>
  );
}

export default ScrollReveal;
