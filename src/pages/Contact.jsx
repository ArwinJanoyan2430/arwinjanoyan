import { Check, Copy, Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";

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
        const localApiUnavailable =
          import.meta.env.DEV && response.status === 404;
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
      setErrorMessage(
        error.message || "Unable to send your message right now.",
      );
    }
  }

  function updateField(field, value) {
    setForm({ ...form, [field]: value });
    setStatus("idle");
    setErrorMessage("");
  }

  return (
    <section className="mx-auto max-w-5xl px-5 py-20 sm:px-10 md:py-20">
      <header className="mx-auto max-w-2xl text-center">
        <p className="ibm-mono text-[11px] uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-400">
          Contact
        </p>
        <h1 className="pixel-font mt-4 text-3xl leading-tight sm:text-4xl md:text-5xl">
          Have an idea in mind?
        </h1>
        <p className="ibm-mono mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:text-base">
          Whether it&apos;s a project, collaboration, or a quick question, send
          me a message and let&apos;s talk.
        </p>
      </header>

      <div className="mt-12 grid gap-3 sm:grid-cols-3">
        <a
          href={`mailto:${email}`}
          className="group rounded-2xl border border-zinc-200 p-5 transition hover:-translate-y-1 hover:border-zinc-400 hover:shadow-lg hover:shadow-zinc-950/5 dark:border-zinc-800 dark:hover:border-zinc-600 dark:hover:shadow-black/20"
        >
          <Mail
            size={19}
            className="text-zinc-500 transition group-hover:text-zinc-950 dark:group-hover:text-white"
          />
          <p className="ibm-mono mt-5 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            Email me
          </p>
          <p className="ibm-mono mt-2 break-all text-xs text-zinc-800 dark:text-zinc-200">
            {email}
          </p>
        </a>

        <button
          type="button"
          onClick={copyEmail}
          className="group rounded-2xl border border-zinc-200 p-5 text-left transition hover:-translate-y-1 hover:border-zinc-400 hover:shadow-lg hover:shadow-zinc-950/5 dark:border-zinc-800 dark:hover:border-zinc-600 dark:hover:shadow-black/20"
        >
          {copied ? (
            <Check
              size={19}
              className="text-emerald-600 dark:text-emerald-400"
            />
          ) : (
            <Copy
              size={19}
              className="text-zinc-500 transition group-hover:text-zinc-950 dark:group-hover:text-white"
            />
          )}
          <p className="ibm-mono mt-5 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            Quick action
          </p>
          <p className="ibm-mono mt-2 text-xs text-zinc-800 dark:text-zinc-200">
            {copied ? "Email copied" : "Copy email address"}
          </p>
        </button>

        <div className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
          <div className="flex gap-2">
            <a
              href="https://github.com/ArwinJanoyan2430"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700 transition hover:bg-zinc-900 hover:text-white dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-white dark:hover:text-zinc-950"
            >
              <Github size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/arwin-ryan-janoyan-6b355a3a5/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700 transition hover:bg-zinc-900 hover:text-white dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-white dark:hover:text-zinc-950"
            >
              <Linkedin size={17} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700 transition hover:bg-zinc-900 hover:text-white dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-white dark:hover:text-zinc-950"
            >
              <FaFacebook size={17} />
            </a>
          </div>
          <p className="ibm-mono mt-5 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            Socials
          </p>
          <p className="ibm-mono mt-2 text-xs text-zinc-800 dark:text-zinc-200">
            Find me online
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-5 rounded-3xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900 sm:p-8 md:p-10"
      >
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-zinc-200 pb-6 dark:border-zinc-800">
          <div>
            <p className="ibm-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
              Message form
            </p>
            <h2 className="pixel-font mt-2 text-xl">Tell me about it.</h2>
          </div>
          <p className="ibm-mono text-xs text-zinc-500">
            Usually replies within a few days
          </p>
        </div>

        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="ibm-mono text-xs text-zinc-600 dark:text-zinc-300">
              Your name
            </span>
            <input
              required
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              placeholder="John Doe"
              className="ibm-mono mt-2 w-full border-b border-zinc-300 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-950 dark:border-zinc-700 dark:focus:border-white"
            />
          </label>

          <label className="block">
            <span className="ibm-mono text-xs text-zinc-600 dark:text-zinc-300">
              Your email
            </span>
            <input
              required
              type="email"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              placeholder="john@example.com"
              className="ibm-mono mt-2 w-full border-b border-zinc-300 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-950 dark:border-zinc-700 dark:focus:border-white"
            />
          </label>
        </div>

        <label className="mt-7 block">
          <span className="ibm-mono text-xs text-zinc-600 dark:text-zinc-300">
            What would you like to discuss?
          </span>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            placeholder="Tell me a little about your project or idea..."
            className="ibm-mono mt-2 w-full resize-none rounded-2xl border border-zinc-200 bg-white p-4 text-sm leading-6 outline-none transition placeholder:text-zinc-400 focus:border-zinc-950 focus:ring-4 focus:ring-zinc-950/5 dark:border-zinc-700 dark:bg-zinc-950 dark:focus:border-white dark:focus:ring-white/10"
          />
        </label>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="ibm-mono text-[11px] leading-5 text-zinc-500">
            Your information is kept private and used only for communication.
          </p>
          <button
            disabled={status === "sending"}
            className="ibm-mono inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            {status === "sending" ? "Sending..." : "Send message"}{" "}
            <Send size={16} />
          </button>
        </div>

        {status === "success" && (
          <p
            aria-live="polite"
            className="ibm-mono mt-5 rounded-xl bg-emerald-100 px-4 py-3 text-center text-xs text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-400"
          >
            Thanks — your message has been sent.
          </p>
        )}
        {status === "error" && (
          <p
            aria-live="assertive"
            className="ibm-mono mt-5 rounded-xl bg-red-100 px-4 py-3 text-center text-xs text-red-800 dark:bg-red-500/10 dark:text-red-400"
          >
            {errorMessage}
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;
