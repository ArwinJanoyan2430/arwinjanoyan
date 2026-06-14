import React from "react";
import { X, FileText } from "lucide-react";

const ResumeModal = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-[90%] max-w-md rounded-2xl bg-white dark:bg-zinc-900 p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="flex flex-col items-center text-center">
          <div className="p-4 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
            <FileText size={32} className="text-black dark:text-white" />
          </div>

          <h2 className="text-2xl font-bold dark:text-white">
            Resume Coming Soon
          </h2>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            I'm currently updating my resume with my latest projects,
            certifications, and experience. Please check back soon!
          </p>

          <button
            onClick={onClose}
            className="mt-6 px-5 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;