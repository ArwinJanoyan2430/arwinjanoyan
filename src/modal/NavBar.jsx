import { useEffect, useState } from "react";
import "../index.css";

function NavBar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Navbar entrance animation
    const timer = setTimeout(() => {
      setMounted(true);
    }, 200);

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
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
      className={`fixed top-4 left-1/2 z-50 flex w-[95%] max-w-7xl -translate-x-1/2 items-center justify-between px-4 py-3 sm:px-6 md:px-8 lg:px-10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        mounted
          ? showNav
            ? "translate-y-0 opacity-100"
            : "-translate-y-24 opacity-0"
          : "-translate-y-12 opacity-0"
      } ${
        scrolled
          ? "rounded-full bg-white/70 shadow-lg backdrop-blur-xl dark:bg-black/70"
          : "bg-transparent"
      }`}
    >
      <h1 className="pixel-font text-lg text-zinc-900 dark:text-white sm:text-xl">
        Arwin Janoyan
      </h1>

      <div className="flex items-center gap-3 sm:gap-5 md:gap-6">
        <ul className="hidden items-center gap-4 md:flex lg:gap-6">
          {navLinks.map(([name, link]) => (
            <li key={name}>
              <a
                href={link}
                className="ibm-mono text-sm font-bold text-zinc-500 transition-colors duration-300 hover:text-zinc-900 dark:hover:text-zinc-100 lg:text-base"
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