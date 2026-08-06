import { useState, useEffect } from "react";
import "../index.css";

const quotes = [
  "Crafting clean interfaces with powerful code.",
  "Turning ideas into scalable software solutions.",
  "Building modern solutions through design and code.",
  "Writing code that feels as good as it looks.",
];

const keywords = [
  "interfaces",
  "code",
  "concepts",
  "digital",
  "modern",
  "solutions",
  "design",
];

function QuoteTransition() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      const timeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % quotes.length);
        setVisible(true);
      }, 350);

      return () => clearTimeout(timeout);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const renderQuote = (quote) =>
    quote.split(" ").map((word, i) => {
      const cleanWord = word.replace(/[.,!?]/g, "");

      const highlighted = keywords.some(
        (keyword) => keyword.toLowerCase() === cleanWord.toLowerCase()
      );

      return (
        <span
          key={i}
          className={
            highlighted
              ? "font-semibold text-zinc-500 dark:text-white"
              : "text-zinc-900 dark:text-zinc-400"
          }
        >
          {word}{" "}
        </span>
      );
    });

  return (
    <div className="relative flex min-h-[170px] w-full items-start">
      <h2
        className={`
          ibm-mono
          text-center
          md:text-left
          text-4xl
          sm:text-5xl
          lg:text-6xl
          font-bold
          leading-tight
          tracking-tight
          transition-all
          duration-500
          ease-out
          ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }
        `}
      >
        {renderQuote(quotes[index])}
      </h2>
    </div>
  );
}

export default QuoteTransition;