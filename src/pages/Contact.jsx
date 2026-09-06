import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const email = "ajanoyan24@gmail.com";
const SERVICE_ID = "service_e2nmypf";
const TEMPLATE_ID = "template_eukgmuo";
const PUBLIC_KEY = "Bqgik_6mGtN5uL5ks";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/ArwinJanoyan2430",
    icon: <Github size={16} aria-hidden="true" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/arwin-ryan-janoyan-6b355a3a5/",
    icon: <Linkedin size={16} aria-hidden="true" />,
  },
];

function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function copyEmail() {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.currentTarget, PUBLIC_KEY);
      setForm({ name: "", email: "", message: "" });
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message || "Unable to send your message right now.");
    }
  }

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
    setStatus("idle");
    setErrorMessage("");
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:px-10">
      <header className="mb-12 grid gap-6 md:mb-16 md:grid-cols-[0.8fr_1.2fr] md:items-end">
        <div>
          <p className="ibm-mono text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-400">
            Contact / Let&apos;s talk
          </p>
          <h1 className="pixel-font mt-4 text-xl font-bold leading-tight sm:text-3xl">
            Have an idea in mind?
          </h1>
        </div>
        <p className="ibm-mono max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:text-base md:justify-self-end md:text-right">
          Whether it&apos;s a project, collaboration, or a quick question, send me a
          message and let&apos;s talk.
        </p>
      </header>

      <div className="grid border-y border-zinc-200 dark:border-zinc-800 lg:grid-cols-[0.68fr_1.32fr]">
        <aside className="flex flex-col justify-between border-b border-zinc-200 py-8 dark:border-zinc-800 sm:py-10 lg:border-b-0 lg:border-r lg:py-12 lg:pr-10">
          <div>
            <p className="ibm-mono text-[9px] uppercase tracking-[0.24em] text-zinc-400 dark:text-zinc-500">
              Direct contact
            </p>
            <a
              href={`mailto:${email}`}
              className="group mt-5 inline-flex max-w-full items-center gap-3 text-sm text-zinc-950 dark:text-white sm:text-base"
            >
              <Mail size={17} className="shrink-0 text-zinc-400" aria-hidden="true" />
              <span className="ibm-mono truncate border-b border-zinc-300 pb-1 transition mr-5 group-hover:border-zinc-950 dark:border-zinc-700 dark:group-hover:border-white">
                {email}
              </span>
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="ibm-mono mt-5 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-zinc-500 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
            >
              {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
              {copied ? "Email copied" : "Copy address"}
            </button>

            <div className="mt-10">
              <p className="ibm-mono text-[9px] uppercase tracking-[0.24em] text-zinc-400 dark:text-zinc-500">
                Find me online
              </p>
              <div className="mt-4 space-y-1">
                {socials.map(({ name, href, icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border-b border-zinc-100 py-3 text-sm text-zinc-700 transition hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-300 dark:hover:text-white"
                  >
                    <span className="flex items-center gap-3">
                      {icon}
                      <span className="ibm-mono text-xs">{name}</span>
                    </span>
                    <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </a>
                ))}
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-zinc-100 py-3 text-sm text-zinc-700 transition hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-300 dark:hover:text-white"
                >
                  <span className="flex items-center gap-3">
                    <FaFacebook size={16} aria-hidden="true" />
                    <span className="ibm-mono text-xs">Facebook</span>
                  </span>
                  <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.7)]" />
            <p className="ibm-mono text-[9px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
              Available for opportunities
            </p>
          </div>
        </aside>

        <form onSubmit={handleSubmit} className="py-8 sm:py-10 lg:py-12 lg:pl-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="ibm-mono text-[9px] uppercase tracking-[0.24em] text-zinc-400 dark:text-zinc-500">
                Message form / 01
              </p>
              <h2 className="pixel-font mt-3 text-xl sm:text-2xl">Tell me about it.</h2>
            </div>
            <p className="ibm-mono text-[9px] uppercase tracking-[0.14em] text-zinc-400">
              Usually replies within a few days
            </p>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <label className="block">
              <span className="ibm-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400">
                01 / Your name
              </span>
              <input
                required
                name="user_name"
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                placeholder="John Doe"
                className="ibm-mono mt-3 w-full border-b border-zinc-300 bg-transparent py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-950 dark:border-zinc-700 dark:focus:border-white"
              />
            </label>

            <label className="block">
              <span className="ibm-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400">
                02 / Your email
              </span>
              <input
                required
                type="email"
                name="user_email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                placeholder="john@example.com"
                className="ibm-mono mt-3 w-full border-b border-zinc-300 bg-transparent py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-950 dark:border-zinc-700 dark:focus:border-white"
              />
            </label>
          </div>

          <label className="mt-9 block">
            <span className="ibm-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400">
              03 / Your message
            </span>
            <textarea
              required
              rows={6}
              name="message"
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              placeholder="Tell me a little about your project or idea..."
              className="ibm-mono mt-3 w-full resize-none border border-zinc-200 bg-zinc-50 p-4 text-sm leading-7 outline-none transition placeholder:text-zinc-400 focus:border-zinc-950 focus:bg-white dark:border-zinc-800 dark:bg-zinc-900 dark:focus:border-white dark:focus:bg-zinc-950"
            />
          </label>

          <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="ibm-mono max-w-sm text-[10px] leading-5 text-zinc-400">
              Your information is kept private and used only for communication.
            </p>
            <button
              disabled={status === "sending"}
              className="ibm-mono inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-[10px] font-medium uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              {status === "sending" ? "Sending..." : "Send message"}
              <Send size={14} aria-hidden="true" />
            </button>
          </div>

          {status === "success" && (
            <p aria-live="polite" className="ibm-mono mt-6 border border-emerald-200 bg-emerald-50 px-4 py-3 text-center text-xs text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-400">
              Thanks — your message has been sent.
            </p>
          )}
          {status === "error" && (
            <p aria-live="assertive" className="ibm-mono mt-6 border border-red-200 bg-red-50 px-4 py-3 text-center text-xs text-red-800 dark:border-red-900 dark:bg-red-950/30 dark:text-red-400">
              {errorMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
