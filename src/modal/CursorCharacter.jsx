import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import front from "../assets/characters/front.png";
import up from "../assets/characters/up.png";
import down from "../assets/characters/down.png";
import left from "../assets/characters/left.png";
import right from "../assets/characters/right.png";

export default function CursorCharacter() {
  const containerRef = useRef(null);

  const [direction, setDirection] = useState("front");
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!containerRef.current) {
        setDirection("front");
        setRotation(0);
        return;
      }

      const rect = containerRef.current.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const x = event.clientX - centerX;
      const y = event.clientY - centerY;

      const distance = Math.sqrt(x * x + y * y);

      // Close to character = front
      if (distance < 120) {
        setDirection("front");
        setRotation(0);
        return;
      }

      const horizontal = Math.abs(x);
      const vertical = Math.abs(y);

      // DIAGONAL
      if (
        horizontal > vertical * 0.5 &&
        vertical > horizontal * 0.5
      ) {
        // NORTH-WEST ↖
        if (x < 0 && y < 0) {
          setDirection("left");
          setRotation(25);
        }

        // NORTH-EAST ↗
        else if (x > 0 && y < 0) {
          setDirection("right");
          setRotation(-25);
        }

        // SOUTH-WEST ↙
        else if (x < 0 && y > 0) {
          setDirection("left");
          setRotation(-25);
        }

        // SOUTH-EAST ↘
        else if (x > 0 && y > 0) {
          setDirection("right");
          setRotation(25);
        }

        return;
      }

      // VERTICAL
      if (vertical > horizontal) {
        if (y < 0) {
          setDirection("up");
        } else {
          setDirection("down");
        }

        setRotation(0);
        return;
      }

      // HORIZONTAL
      if (x < 0) {
        setDirection("left");
      } else {
        setDirection("right");
      }

      setRotation(0);
    };

    // Cursor leaves the browser/window
    const handleMouseLeave = () => {
      setDirection("front");
      setRotation(0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  const images = {
    front,
    up,
    down,
    left,
    right,
  };

  return (
    <div
      ref={containerRef}
      className="h-65 w-65"
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.92,
          y: 16,
        }}
        animate={{
          opacity: 1,
          y: [0, -10, 0],
          scale: [1, 1.015, 1],
        }}
        transition={{
          opacity: {
            duration: 0.45,
            ease: "easeOut",
          },
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
          scale: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="h-full w-full"
      >
        <motion.img
          src={images[direction]}
          alt="Arwin"
          draggable="false"
          animate={{
            rotate: rotation,
          }}
          transition={{
            rotate: {
              duration: 0,
              ease: "easeOut",
            },
          }}
          className="h-full w-full object-contain drop-shadow-[0_18px_18px_rgba(0,0,0,0.18)]"
        />
      </motion.div>
    </div>
  );
}