
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import wave from "../assets/characters/arwin-pixel.png";
import code from "../assets/characters/arwin-code.png";

export default function ScrollCharacter() {
  const [position, setPosition] = useState(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let frameId;

    const updatePosition = () => {
      cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        const start = document.getElementById("about-greeting");
        const target = document.getElementById("stack-heading");

        if (!start || !target) return;

        const startRect = start.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();

        const isMobile = window.innerWidth < 640;
        const size = isMobile ? 30 : 64;
        const gap = isMobile ? 6 : 12;
        const padding = 8;

        // Calculate when the character starts and finishes moving.
        const startScroll =
          startRect.top + window.scrollY - window.innerHeight * 0.25;

        const endScroll =
          targetRect.top + window.scrollY - window.innerHeight * 0.25;

        const progress =
          endScroll > startScroll
            ? Math.max(
                0,
                Math.min(
                  1,
                  (window.scrollY - startScroll) /
                    (endScroll - startScroll)
                )
              )
            : 0;

        // Keep the character beside the heading and inside the screen.
        const getCharacterX = (rect) => {
          const rightX = rect.right + gap + size / 2;
          const leftX = rect.left - gap - size / 2;
          const minX = size / 2 + padding;
          const maxX = window.innerWidth - size / 2 - padding;

          if (rightX <= maxX) return rightX;
          if (leftX >= minX) return leftX;

          return Math.max(minX, Math.min(rightX, maxX));
        };

        const startX = getCharacterX(startRect);
        const targetX = getCharacterX(targetRect);

        const startCenterY =
          startRect.top + startRect.height / 2;

        const targetCenterY =
          targetRect.top + targetRect.height / 2;

        setPosition({
          x: startX + (targetX - startX) * progress,
          y:
            startCenterY +
            (targetCenterY - startCenterY) * progress,
          progress,
          size,
        });
      });
    };

    updatePosition();

    window.addEventListener("scroll", updatePosition, {
      passive: true,
    });
    window.addEventListener("resize", updatePosition);

    const observer = new ResizeObserver(updatePosition);
    observer.observe(document.body);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
      observer.disconnect();
    };
  }, []);

  if (!position) return null;

  const activeImage =
    position.progress >= 0.85 ? code : wave;

  return (
    <motion.img
      src={activeImage}
      alt=""
      aria-hidden="true"
      className="pointer-events-none fixed z-40 object-contain"
      style={{
        left: position.x,
        top: position.y,
        width: position.size,
        height: position.size,
        x: "-50%",
        y: "-50%",
        imageRendering: "pixelated",
      }}
      animate={
        reduceMotion
          ? {}
          : {
              y: ["-50%", "calc(-50% - 3px)", "-50%"],
              rotate: [0, -3, 3, 0],
            }
      }
      transition={{
        duration: 0.35,
        repeat: reduceMotion ? 0 : Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
