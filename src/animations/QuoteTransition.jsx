
import { useState, useEffect } from "react";
import "../index.css";

const quotes = [
  "Building modern web experiences through code and creativity.",
  "Creating responsive applications with clean and thoughtful design.",
  "Turning ideas into functional websites and digital solutions.",
  "Growing as a developer through projects and continuous learning.",
];

const keywords = [
  "modern",
  "web",
  "experiences",
  "code",
  "creativity",
  "responsive",
  "applications",
  "clean",
  "design",
  "ideas",
  "functional",
  "websites",
  "digital",
  "solutions",
  "developer",
  "projects",
  "learning",
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
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const renderQuote = (quote) =>
    quote.split(" ").map((word, i) => {
      const cleanWord = word.replace(/[.,!?]/g, "");

      const highlighted = keywords.includes(cleanWord.toLowerCase());

      return (
        <span
          key={`${index}-${i}`}
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
    <div className="relative w-full">
      <h2
        className={`
          ibm-mono
          w-full
          text-center
          text-2xl
          font-bold
          leading-snug
          tracking-tight
          transition-all
          duration-500
          ease-out
          sm:text-3xl
          lg:text-4xl
          md:text-left
          ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-2 opacity-0"
          }
        `}
      >
        {renderQuote(quotes[index])}
      </h2>
    </div>
  );
}

export default QuoteTransition;
