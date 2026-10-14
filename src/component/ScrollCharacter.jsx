
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
    let frameId = null;

    const updatePosition = () => {
      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(() => {
        frameId = null;

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
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const scrollY = window.scrollY;

        // Responsive character size and spacing.
        const size = mobile ? 32 : 64;
        const gap = mobile ? 6 : 12;
        const padding = 8;

        const minX = size / 2 + padding;
        const maxX = Math.max(
          minX,
          viewportWidth - size / 2 - padding
        );

        // Position the character beside each heading.
        const getX = (rect) => {
          const rightX = rect.right + gap + size / 2;
          const leftX = rect.left - gap - size / 2;

          if (rightX <= maxX) return rightX;
          if (leftX >= minX) return leftX;

          return clamp(
            rect.right + size / 2,
            minX,
            maxX
          );
        };

        // Keep all anchor coordinates in document space.
        const getAnchor = (rect) => ({
          x: getX(rect),
          y: rect.top + rect.height / 2 + scrollY,
        });

        const startAnchor = getAnchor(startRect);
        const middleAnchor = getAnchor(targetRect);
        const endAnchor = getAnchor(nextTargetRect);

        // Trigger when the destination heading approaches
        // the lower part of the viewport.
        const triggerLine = viewportHeight * 0.90;

        // Each journey has its own scroll distance.
        const firstTravelDistance = viewportHeight * 0.7;
        const secondTravelDistance = viewportHeight * 0.6;

        const firstTrigger =
          middleAnchor.y - triggerLine;

        // Phase 1: About -> My toolkit.
        const firstProgress = clamp(
          (scrollY - firstTrigger) /
            firstTravelDistance,
          0,
          1
        );

        // Phase 2 starts exactly when phase 1 finishes.
        // This avoids jumping ahead because of a separate
        // destination trigger.
        const secondStartScroll =
          firstTrigger + firstTravelDistance;

        const secondProgress =
          scrollY < secondStartScroll
            ? 0
            : clamp(
                (scrollY - secondStartScroll) /
                  secondTravelDistance,
                0,
                1
              );

        // Calculate the path in document coordinates.
        const travel = (from, to, progress) => {
          const t = smoothStep(progress);

          if (!mobile) {
            return {
              x: from.x + (to.x - from.x) * t,
              y: from.y + (to.y - from.y) * t,
            };
          }

          // A gentle curve on mobile instead of a straight,
          // potentially awkward horizontal movement.
          const inverseT = 1 - t;
          const direction = to.x >= from.x ? -1 : 1;

          const curveAmount = Math.min(
            45,
            Math.abs(to.x - from.x) * 0.3
          );

          const controlX = clamp(
            (from.x + to.x) / 2 +
              direction * curveAmount,
            minX,
            maxX
          );

          const verticalDistance = Math.abs(
            to.y - from.y
          );

          const lift = Math.min(
            80,
            verticalDistance * 0.2
          );

          const controlY =
            (from.y + to.y) / 2 - lift;

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

        if (scrollY < secondStartScroll) {
          point = travel(
            startAnchor,
            middleAnchor,
            firstProgress
          );

          progress = firstProgress;

          traveling =
            firstProgress > 0.02 &&
            firstProgress < 0.98;
        } else {
          point = travel(
            middleAnchor,
            endAnchor,
            secondProgress
          );

          progress = 1 + secondProgress;

          traveling =
            secondProgress > 0.02 &&
            secondProgress < 0.98;
        }

        // Convert document coordinates into viewport coordinates.
        setPosition({
          x: clamp(point.x, minX, maxX),
          y: point.y - scrollY,
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
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
      observer.disconnect();

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  if (!position) return null;

  // Switch character images as the journey progresses.
  const activeImage =
    position.progress >= 1.7
      ? experience
      : position.progress >= 0.7
        ? code
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
