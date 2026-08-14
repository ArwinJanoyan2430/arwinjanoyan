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
    href:"https://mail.google.com/mail/?view=cm&fs=1&to=ajanoyan24@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Arwin%2C",
    icon: Mail,
  },
];

function Footer() {
  const handleBackToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="mx-auto max-w-7xl px-5 pb-6 pt-8 sm:px-8 md:px-10">
      <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="grid gap-9 px-6 py-8 sm:px-8 md:grid-cols-[1.2fr_0.7fr_0.7fr] md:px-10 md:py-10">
          <div>
            <p className="pixel-font text-base">Arwin Janoyan</p>
            <p className="ibm-mono mt-3 max-w-xs text-sm leading-6 text-zinc-500 dark:text-zinc-400">
              IT student and developer creating useful digital experiences.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="ibm-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
              Explore
            </p>
            <ul className="ibm-mono mt-4 grid grid-cols-2 gap-x-5 gap-y-2.5 text-xs font-light text-zinc-600 dark:text-zinc-300">
              {navLinks.map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="transition hover:text-zinc-950 dark:hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="ibm-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
              Connect
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-600 transition hover:-translate-y-0.5 hover:bg-zinc-950 hover:text-white dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-white dark:hover:text-zinc-950"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-zinc-200 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8 md:px-10 dark:border-zinc-800">
          <p className="ibm-mono text-[10px] text-zinc-400 dark:text-zinc-500">
            © {new Date().getFullYear()} Arwin Janoyan. Built with care.
          </p>
          <button
            type="button"
            onClick={handleBackToTop}
            className="ibm-mono inline-flex w-fit items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-zinc-500 transition hover:text-zinc-950 dark:hover:text-white"
          >
            Back to top <ArrowUp size={14} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
