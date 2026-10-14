
import { motion, useReducedMotion } from "framer-motion";
import arwinPixel from "../assets/characters/arwin-pixel.png";

export default function PixelCharacter() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="inline-block"
      animate={
        prefersReducedMotion
          ? {}
          : {
              y: [0, 0, 0],
              rotate: [0, 0, 0, -0, 0],
            }
      }
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <img
        src={arwinPixel}
        alt="Pixel-art character waving hello"
        className="h-10 w-auto object-contain sm:h-15"
        style={{ imageRendering: "pixelated" }}
      />
    </motion.div>
  );
}
