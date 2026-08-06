import { useState, useEffect } from "react";
import "../index.css";

function QuoteTransition() {
  const quotes = [
    "Crafting clean interfaces with powerful code.",
    "Turning concepts into seamless digital experiences.",
    "Building modern solutions through design and code.",
    "Writing code that feels as good as it looks.",
  ];

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % quotes.length);
        setVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="selection:bg-black relative w-full max-w-3xl">
      <p
        className={`ibm-mono text-4xl font-bold leading-tight text-zinc-500 transition-all duration-300 dark:text-zinc-300 sm:text-4xl md:text-6xl ${
          visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        {quotes[index]}
      </p>
    </div>
  );
}

export default QuoteTransition;
