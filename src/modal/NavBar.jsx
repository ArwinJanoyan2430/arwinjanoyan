
import { useEffect, useState } from "react";
import "../index.css";

function NavBar({ dark, setDark }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    ["home", "#home"],
    ["about", "#about"],
    ["experiences", "#experiences"],
    ["projects", "#projects"],
    ["contact", "#contact"],
  ];

  return (
    <nav
      className={`fixed left-1/2 top-3 z-50 flex w-[95%] max-w-7xl
        -translate-x-1/2 items-center justify-between rounded-full
        px-4 py-4 sm:px-6 md:px-8 lg:px-10
        transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          isScrolled
            ? dark
              ? "border border-white/10 bg-zinc-950/70 shadow-lg shadow-black/10 backdrop-blur-xl"
              : "border border-white/40 bg-white/75 shadow-lg shadow-black/5 backdrop-blur-xl"
            : "border border-transparent bg-transparent shadow-none backdrop-blur-none"
        }`}
    >
      {/* Logo / Name */}
      <a
        href="#home"
        className="pixel-font whitespace-nowrap text-sm text-zinc-900 dark:text-white sm:text-lg"
      >
        Arwin Janoyan
      </a>

      {/* Navigation and Theme Toggle */}
      <div className="flex items-center gap-3 sm:gap-5 md:gap-6">
        <ul className="hidden items-center gap-4 md:flex lg:gap-6">
          {navLinks.map(([name, link]) => (
            <li key={name}>
              <a
                href={link}
                className="ibm-mono text-sm font-bold text-zinc-500 transition-colors duration-300 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white lg:text-base"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <label
          className="button-glow flex shrink-0 cursor-pointer items-center transition-transform duration-300 hover:scale-105"
          aria-label="Toggle dark mode"
        >
          <input
            type="checkbox"
            checked={dark}
            onChange={() => setDark(!dark)}
            className="theme-checkbox"
            aria-label="Dark mode"
          />
        </label>
      </div>
    </nav>
  );
}

export default NavBar;
