
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Experience", "#experiences"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/ArwinJanoyan2430",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arwin-ryan-janoyan-6b355a3a5/",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:ajanoyan24@gmail.com",
    icon: Mail,
  },
];

function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mx-auto max-w-7xl px-0 pb-6 pt-0 sm:px-8 md:px-10">
      <div className="border-t border-zinc-200 py-6 dark:border-zinc-800">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="pixel-font text-sm font-bold">Arwin Janoyan</p>
            <p className="ibm-mono mt-2 text-xs text-zinc-500 dark:text-zinc-400">
              Building useful digital experiences.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="ibm-mono flex flex-wrap gap-x-5 gap-y-3 text-xs text-zinc-500 dark:text-zinc-400">
              {navLinks.map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="transition-colors hover:text-zinc-950 dark:hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
              >
                <Icon size={17} aria-hidden="true" />
              </a>
            ))}

            <button
              type="button"
              onClick={handleBackToTop}
              aria-label="Back to top"
              className="ml-2 border-l border-zinc-200 pl-4 text-zinc-500 transition-colors hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-white"
            >
              <ArrowUp size={17} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="ibm-mono mt-7 flex flex-col gap-2 text-[10px] text-zinc-400 dark:text-zinc-500 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Arwin Janoyan</p>
          <p>Designed & built with care.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
