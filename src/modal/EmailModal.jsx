import { Mail, User, MessageSquare, X, Send, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

function EmailModal({ onClose }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_e2nmypf",
        "template_eukgmuo",
        e.target,
        "Bqgik_6mGtN5uL5ks"
      );

      setSuccess(true);
      e.target.reset();

      setTimeout(() => {
        onClose();
      }, 1800);
    } catch (error) {
      alert("Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
      >
        {/* Header */}
        <div className="border-b border-zinc-200 bg-zinc-50 px-6 py-5 dark:border-zinc-800 dark:bg-zinc-900">
          <button
            onClick={onClose}
            className="absolute right-5 top-5 rounded-full dark:text-white p-2 transition hover:bg-zinc-200 dark:hover:bg-zinc-800"
          >
            <X size={18} />
          </button>

          <h2 className="text-2xl dark:text-white font-bold">
            Let's Connect 👋
          </h2>

          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Have a project, internship opportunity, or collaboration in mind?
            Feel free to send me a message.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={sendEmail} className="space-y-5 p-6">
          {/* Name */}
          <div className="relative">
            <User
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
            />

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full rounded-2xl border border-zinc-300 bg-zinc-50 py-3 pl-12 pr-4 text-zinc-900 placeholder:text-zinc-500 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder:text-zinc-400"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full rounded-2xl border border-zinc-300 bg-zinc-50 py-3 pl-12 pr-4 text-zinc-900 placeholder:text-zinc-500 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder:text-zinc-400"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <MessageSquare
              size={18}
              className="absolute left-4 top-4 text-zinc-400"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Tell me about your project..."
              required
              className="w-full resize-none rounded-2xl border border-zinc-300 bg-zinc-50 py-3 pl-12 pr-4 text-zinc-900 placeholder:text-zinc-500 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder:text-zinc-400"
            />
          </div>

          {/* Success */}
          {success && (
            <div className="rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-600 dark:text-green-400">
              ✅ Message sent successfully!
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              disabled={loading}
              onClick={onClose}
              className="rounded-xl border border-zinc-300 text-black dark:text-white bg-white px-5 py-2.5 font-medium transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex border border-zinc-300 dark:border-zinc-700 items-center justify-center gap-2 rounded-xl bg-accent px-5 py-2.5 font-medium text-black dark:text-white transition-all dark:hover:brightness-200 hover:shadow-xl active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmailModal;