import { useEffect, useState } from "react";
import "../index.css";

function NavBar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add blur/background after scrolling
      setScrolled(currentScrollY > 50);

      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    ["home", "#home"],
    ["projects", "#projects"],
    ["experiences", "#experiences"],
    ["about", "#about"],
    ["contact", "#contact"],
  ];

  return (
    <nav
      className={`fixed top-5 left-1/2 z-50 flex w-full md:w-[1200px]
      -translate-x-1/2 items-center justify-between px-10 py-3
      transition-all duration-300
      ${showNav ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"}
      ${
        scrolled
          ? "rounded-full bg-white/70 shadow-lg backdrop-blur-xl dark:bg-black/70"
          : "bg-transparent"
      }`}
    >
      <h1 className="pixel-font text-sm text-black dark:text-white sm:text-base">
        Arwin Janoyan
      </h1>

      <div className="flex items-center gap-6">
        <ul className="hidden gap-6 md:flex">
          {navLinks.map(([name, link]) => (
            <li key={name}>
              <a
                href={link}
                className="ibm-mono text-base font-bold text-zinc-500 transition-colors duration-300 hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>

        <label className="button-glow flex cursor-pointer items-center transition-transform duration-300 hover:scale-105">
          <input
            type="checkbox"
            checked={dark}
            onChange={() => setDark(!dark)}
            className="theme-checkbox"
          />
        </label>
      </div>
    </nav>
  );
}

export default NavBar;
