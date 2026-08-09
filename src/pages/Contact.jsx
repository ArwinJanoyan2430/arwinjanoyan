import { Check, Copy, Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";

const email = "ajanoyan24@gmail.com";

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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const contentType = response.headers.get("content-type") || "";
      const data = contentType.includes("application/json")
        ? await response.json()
        : {};
      if (!response.ok) {
        const localApiUnavailable = import.meta.env.DEV && response.status === 404;
        throw new Error(
          data.message ||
            (localApiUnavailable
              ? "Contact API is unavailable locally. Run `vercel dev` to test the form."
              : "Unable to send message"),
        );
      }

      setForm({ name: "", email: "", message: "" });
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message || "Unable to send your message right now.");
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:px-10 md:py-20">
      <div className="grid overflow-hidden rounded-3xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-between bg-zinc-950 p-7 text-white sm:p-10">
          <div>
            <p className="ibm-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400">
              Get in touch
            </p>
            <h1 className="pixel-font mt-4 max-w-md text-3xl leading-tight sm:text-4xl">
              Let&apos;s build something useful.
            </h1>
            <p className="ibm-mono mt-5 max-w-md text-sm leading-7 text-zinc-300 sm:text-base">
              Have a project, collaboration, or opportunity in mind? I&apos;d love to hear about it.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <p className="ibm-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400">
                Email
              </p>
              <div className="mt-2 flex items-center justify-between gap-3">
                <a href={`mailto:${email}`} className="ibm-mono break-all text-sm text-white hover:text-zinc-300">
                  {email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-white/15 px-2.5 py-2 text-xs text-zinc-200 transition hover:bg-white hover:text-zinc-950"
                  aria-label="Copy email address"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://github.com/ArwinJanoyan2430"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-zinc-200 transition hover:-translate-y-0.5 hover:bg-white hover:text-zinc-950"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/arwin-ryan-janoyan-6b355a3a5/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-zinc-200 transition hover:-translate-y-0.5 hover:bg-white hover:text-zinc-950"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-7 sm:p-10">
          <div className="mb-7">
            <h2 className="pixel-font text-xl">Send a message</h2>
            <p className="ibm-mono mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              I&apos;ll get back to you as soon as I can.
            </p>
          </div>

          <div className="space-y-5">
            <label className="block">
              <span className="ibm-mono text-xs text-zinc-600 dark:text-zinc-300">Name</span>
              <input
                required
                value={form.name}
                onChange={(event) => {
                  setForm({ ...form, name: event.target.value });
                  setStatus("idle");
                  setErrorMessage("");
                }}
                className="ibm-mono mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:bg-white dark:border-zinc-700 dark:bg-zinc-800 dark:focus:border-white dark:focus:bg-zinc-900"
                placeholder="Your name"
              />
            </label>

            <label className="block">
              <span className="ibm-mono text-xs text-zinc-600 dark:text-zinc-300">Email</span>
              <input
                required
                type="email"
                value={form.email}
                onChange={(event) => {
                  setForm({ ...form, email: event.target.value });
                  setStatus("idle");
                  setErrorMessage("");
                }}
                className="ibm-mono mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:bg-white dark:border-zinc-700 dark:bg-zinc-800 dark:focus:border-white dark:focus:bg-zinc-900"
                placeholder="you@example.com"
              />
            </label>

            <label className="block">
              <span className="ibm-mono text-xs text-zinc-600 dark:text-zinc-300">Message</span>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(event) => {
                  setForm({ ...form, message: event.target.value });
                  setStatus("idle");
                  setErrorMessage("");
                }}
                className="ibm-mono mt-2 w-full resize-none rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:bg-white dark:border-zinc-700 dark:bg-zinc-800 dark:focus:border-white dark:focus:bg-zinc-900"
                placeholder="Tell me a little about your project..."
              />
            </label>

            <button
              disabled={status === "sending"}
              className="ibm-mono inline-flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              <Mail size={17} />
              {status === "sending" ? "Sending..." : "Send message"} <Send size={15} />
            </button>

            {status === "success" && (
              <p className="ibm-mono text-center text-xs text-emerald-600 dark:text-emerald-400">
                Thanks — your message has been sent.
              </p>
            )}
            {status === "error" && (
              <p className="ibm-mono text-center text-xs text-red-600 dark:text-red-400">
                {errorMessage}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
