
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import wave from "../assets/characters/arwin-pixel.png";
import code from "../assets/characters/arwin-code.png";
import experience from "../assets/characters/arwin-experience.png";
import projects from "../assets/characters/arwin-projects.png";
import travelSprite from "../assets/characters/arwin-travel.png";
import jump from "../assets/characters/arwin-jump.png";

const clamp = (value, min, max) =>
  Math.max(min, Math.min(value, max));

const smoothStep = (value) =>
  value * value * (3 - 2 * value);

const getTextRect = (element) => {
  const range = document.createRange();
  range.selectNodeContents(element);
  return range.getBoundingClientRect();
};

export default function ScrollCharacter() {
  const [position, setPosition] = useState(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let frameId = null;

    const updatePosition = () => {
      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(() => {
        frameId = null;

        const start = document.getElementById("about-greeting");
        const toolkit = document.getElementById("stack-heading");
        const experienceHeading = document.getElementById(
          "experiences-heading",
        );
        const projectsHeading =
          document.getElementById("projects-heading");

        if (
          !start ||
          !toolkit ||
          !experienceHeading ||
          !projectsHeading
        ) {
          return;
        }

        const mobile = window.innerWidth < 640;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const scrollY = window.scrollY;

        const size = mobile ? 32 : 64;
        const gap = mobile ? 6 : 12;
        const padding = 8;

        const minX = size / 2 + padding;
        const maxX = Math.max(
          minX,
          viewportWidth - size / 2 - padding,
        );

        // Keep the character beside each heading.
        const getX = (rect) => {
          const rightX = rect.right + gap + size / 2;
          const leftX = rect.left - gap - size / 2;

          if (rightX <= maxX) return rightX;
          if (leftX >= minX) return leftX;

          return clamp(
            rect.right + size / 2,
            minX,
            maxX,
          );
        };

        // Convert heading positions to document coordinates.
        const getAnchor = (element) => {
          const rect = getTextRect(element);

          return {
            x: getX(rect),
            y: rect.top + rect.height / 2 + scrollY,
          };
        };

        const startAnchor = getAnchor(start);
        const toolkitAnchor = getAnchor(toolkit);
        const experienceAnchor = getAnchor(experienceHeading);
        const projectsAnchor = getAnchor(projectsHeading);

        // Shorter scroll distances on mobile.
        const triggerLine = viewportHeight * (
          mobile ? 1 : 0.8
        );

        const firstDistance = viewportHeight * (
          mobile ? 0.8 : 0.7
        );

        const secondDistance = viewportHeight * (
          mobile ? 0.9 : 0.7
        );

        const thirdDistance = viewportHeight * (
          mobile ? 2.5 : 1.5
        );

        // About -> Tools.
        const firstStart = toolkitAnchor.y - triggerLine;
        const firstEnd = firstStart + firstDistance;

        const firstProgress = clamp(
          (scrollY - firstStart) / firstDistance,
          0,
          1,
        );

        // Tools -> Experience.
        const secondStart = firstEnd;
        const secondEnd = secondStart + secondDistance;

        const secondProgress = clamp(
          (scrollY - secondStart) / secondDistance,
          0,
          1,
        );

        // Experience -> Projects.
        const thirdStart = secondEnd;

        const thirdProgress = clamp(
          (scrollY - thirdStart) / thirdDistance,
          0,
          1,
        );

        // Move smoothly between headings.
        const travel = (from, to, progress) => {
          const t = smoothStep(clamp(progress, 0, 1));

          // Keep the original desktop movement.
          if (!mobile) {
            return {
              x: from.x + (to.x - from.x) * t,
              y: from.y + (to.y - from.y) * t,
            };
          }

          // Gentler curve on mobile.
          const inverseT = 1 - t;
          const verticalDistance = Math.abs(to.y - from.y);
          const lift = Math.min(24, verticalDistance * 0.06);
          const controlY = (from.y + to.y) / 2 - lift;

          return {
            x: from.x + (to.x - from.x) * t,
            y:
              inverseT * inverseT * from.y +
              2 * inverseT * t * controlY +
              t * t * to.y,
          };
        };

        // Experience -> Projects.
        const travelViaLeft = (from, to, progress) => {
          const t = smoothStep(clamp(progress, 0, 1));
          const inverseT = 1 - t;

          // Use direct movement on mobile to prevent wide curves.
          if (mobile) {
            return {
              x: from.x + (to.x - from.x) * t,
              y: from.y + (to.y - from.y) * t,
            };
          }

          // Preserve the original desktop curve.
          const curveAmount = Math.min(
            180,
            viewportWidth * 0.25,
          );

          const controlX = clamp(
            Math.min(from.x, to.x) - curveAmount,
            minX,
            maxX,
          );

          const controlY = (from.y + to.y) / 2;

          return {
            x:
              inverseT * inverseT * from.x +
              2 * inverseT * t * controlX +
              t * t * to.x,
            y:
              inverseT * inverseT * from.y +
              2 * inverseT * t * controlY +
              t * t * to.y,
          };
        };

        let point;
        let progress;
        let traveling;

        if (scrollY < secondStart) {
          // About -> Tools.
          point = travel(
            startAnchor,
            toolkitAnchor,
            firstProgress,
          );

          progress = firstProgress;
          traveling =
            firstProgress > 0.02 && firstProgress < 0.98;
        } else if (scrollY < thirdStart) {
          // Tools -> Experience.
          point = travel(
            toolkitAnchor,
            experienceAnchor,
            secondProgress,
          );

          progress = 1 + secondProgress;
          traveling =
            secondProgress > 0.02 && secondProgress < 0.98;
        } else {
          // Experience -> Projects.
          point = travelViaLeft(
            experienceAnchor,
            projectsAnchor,
            thirdProgress,
          );

          progress = 3 + thirdProgress;
          traveling =
            thirdProgress > 0.02 && thirdProgress < 0.98;
        }

        setPosition({
          x: clamp(point.x, minX, maxX),
          y: point.y - scrollY,
          size,
          progress,
          traveling,
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
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);

      observer.disconnect();

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  if (!position) return null;

  // Keep your sprite sequence.
  const activeImage =
    position.progress >= 4
      ? projects
      : position.progress >= 3.1
        ? travelSprite
        : position.progress >= 1.8
          ? experience
          : position.progress >= 1.2 && position.progress < 3
            ? jump
            : position.progress >= 0.8
              ? code
              : position.progress >= 0.2
                ? jump
                : wave;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-40"
      style={{
        left: position.x,
        top: position.y,
        width: position.size,
        height: position.size,
        transform: "translate(-50%, -50%)",
      }}
    >
      <motion.img
        src={activeImage}
        alt=""
        draggable={false}
        className="h-full w-full select-none object-contain"
        style={{
          imageRendering: "pixelated",
          transformOrigin: "center",
        }}
        animate={
          reduceMotion
            ? {
                rotate: 0,
                scale: 1,
                y: 0,
              }
            : position.traveling
              ? {
                  rotate: [0, -4, 4, 0],
                  scale: [1, 1.08, 1],
                  y: [0, -4, 0],
                }
              : {
                  rotate: [0, -5, 5, 0],
                  scale: [1, 1.08, 1],
                  y: [0, -6, 0],
                }
        }
        transition={{
          duration: position.traveling ? 0.5 : 1.2,
          ease: "easeInOut",
          repeat: reduceMotion ? 0 : Infinity,
          repeatDelay: position.traveling ? 0 : 0.25,
        }}
      />
    </div>
  );
}

