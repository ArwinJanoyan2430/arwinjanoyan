
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import wave from "../assets/characters/arwin-pixel.png";
import code from "../assets/characters/arwin-code.png";
import experience from "../assets/characters/arwin-experience.png";

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
    let frameId;

    const updatePosition = () => {
      cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        const start = document.getElementById("about-greeting");
        const target = document.getElementById("stack-heading");
        const nextTarget = document.getElementById(
          "experiences-heading"
        );

        if (!start || !target || !nextTarget) return;

        const startRect = getTextRect(start);
        const targetRect = getTextRect(target);
        const nextTargetRect = getTextRect(nextTarget);

        const mobile = window.innerWidth < 640;
        const size = mobile ? 28 : 64;
        const gap = mobile ? 8 : 12;
        const padding = 8;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const minX = size / 2 + padding;
        const maxX = viewportWidth - size / 2 - padding;

        // Place the character beside a heading.
        const getX = (rect) => {
          const rightX = rect.right + gap + size / 2;
          const leftX = rect.left - gap - size / 2;

          if (rightX <= maxX) return rightX;
          if (leftX >= minX) return leftX;

          return clamp(rect.right - size / 2, minX, maxX);
        };

        // Convert heading positions into document coordinates.
        const getAnchor = (rect) => ({
          x: getX(rect),
          y: rect.top + rect.height / 2 + window.scrollY,
        });

        const startAnchor = getAnchor(startRect);
        const middleAnchor = getAnchor(targetRect);
        const endAnchor = getAnchor(nextTargetRect);

        // The character begins traveling when the destination
        // reaches 95% of the viewport height.
        const triggerLine = viewportHeight * 0.95;
        const travelDistance = viewportHeight * 0.8;

        const getTriggerScroll = (anchor) =>
          anchor.y - triggerLine;

        const firstTrigger = getTriggerScroll(middleAnchor);
        const secondTrigger = getTriggerScroll(endAnchor);

        const firstProgress = clamp(
          (window.scrollY - firstTrigger) / travelDistance,
          0,
          1
        );

        // The second journey cannot start until the first finishes.
        const secondProgress =
          window.scrollY < firstTrigger + travelDistance
            ? 0
            : clamp(
                (window.scrollY - secondTrigger) /
                  travelDistance,
                0,
                1
              );

        // Use document coordinates so the path doesn't drift
        // just because the headings move with the viewport.
        const travel = (from, to, t) => {
          const eased = smoothStep(t);

          if (!mobile) {
            return {
              x: from.x + (to.x - from.x) * eased,
              y: from.y + (to.y - from.y) * eased,
            };
          }

          const inverseT = 1 - eased;
          const direction = to.x >= from.x ? -1 : 1;
          const curveAmount = Math.min(
            70,
            Math.abs(to.x - from.x) * 0.35
          );

          const controlX = clamp(
            (from.x + to.x) / 2 +
              direction * curveAmount,
            minX,
            maxX
          );

          const verticalDistance = Math.abs(to.y - from.y);
          const lift = Math.min(140, verticalDistance * 0.35);
          const controlY = (from.y + to.y) / 2 - lift;

          return {
            x:
              inverseT * inverseT * from.x +
              2 * inverseT * eased * controlX +
              eased * eased * to.x,
            y:
              inverseT * inverseT * from.y +
              2 * inverseT * eased * controlY +
              eased * eased * to.y,
          };
        };

        let point;
        let progress;
        let traveling;

        if (firstProgress < 1) {
          // Phase 1: Hi, I'm Arwin -> My toolkit.
          point = travel(
            startAnchor,
            middleAnchor,
            firstProgress
          );

          progress = firstProgress;
          traveling =
            firstProgress > 0.02 && firstProgress < 0.98;
        } else {
          // Phase 2: My toolkit -> Experiences.
          point = travel(
            middleAnchor,
            endAnchor,
            secondProgress
          );

          progress = 1 + secondProgress;
          traveling =
            secondProgress > 0.02 && secondProgress < 0.98;
        }

        // Convert the document position back to viewport position.
        setPosition({
          x: clamp(point.x, minX, maxX),
          y: point.y - window.scrollY,
          progress,
          traveling,
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
    position.progress >= 1.7
      ? experience
      : position.progress >= 0.7
        ? code
        : wave;

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
        transformOrigin: "center",
      }}
      animate={
        reduceMotion
          ? { rotate: 0, scale: 1, y: "-50%" }
          : position.traveling
            ? {
                rotate: [0, -1, 1, 0],
                scale: [1, 1.12, 1],
                y: ["-50%", "-58%", "-50%"],
              }
            : {
                rotate: [0, -5, 5, 0],
                scale: [1, 1.12, 1],
                y: ["-50%", "-60%", "-50%"],
              }
      }
      transition={{
        duration: position.traveling ? 0.45 : 1.1,
        ease: "easeInOut",
        repeat: reduceMotion ? 0 : Infinity,
        repeatDelay: position.traveling ? 0 : 0.3,
      }}
    />
  );
}
