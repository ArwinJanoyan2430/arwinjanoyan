import React from "react";
import {
  X,
  ExternalLink,
  Cpu,
  Eye,
  GraduationCap,
  Lightbulb,
  Target,
} from "lucide-react";

const ProjectsModal = ({ onClose }) => {
  const openResearch = () => {
    window.open(
      "https://docs.google.com/document/d/13rWnxwauvyl8jXIPXLyHGPPOG4YcXeMs/edit?usp=sharing&ouid=117251014395481625843&rtpof=true&sd=true",
      "_blank",
    );
  };

  return (
    <div
      onClick={onClose}
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/70
        p-3 sm:p-5
        overflow-y-auto
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          w-full max-w-3xl
          max-h-[92vh]
          overflow-y-auto
          rounded-2xl sm:rounded-3xl
          bg-white dark:bg-zinc-950
          border border-gray-200 dark:border-zinc-800
          shadow-2xl
          animate-in fade-in zoom-in duration-200
        "
      >
        {/* Header */}
        <div
          className="
            relative
            bg-gray-50
            dark:bg-zinc-900
            p-6 sm:p-8
            text-black
            dark:text-white
          "
        >
          <button
            onClick={onClose}
            className="
              absolute
              right-4 top-4
              rounded-full
              p-2
              text-gray-600
              dark:text-gray-300
              hover:bg-gray-200
              dark:hover:bg-zinc-800
              transition
            "
          >
            <X size={20} />
          </button>

          <div
            className="
              flex
              flex-col
              sm:flex-row
              items-center
              sm:items-start
              gap-4 sm:gap-5
            "
          >
            <div
              className="
                flex items-center justify-center
                w-16 h-16
                sm:w-20 sm:h-20
                rounded-3xl
                bg-gray-200
                dark:bg-zinc-800
                shrink-0
              "
            >
              <Eye size={36} className="sm:w-[42px] sm:h-[42px]" />
            </div>

            <div className="text-center sm:text-left">
              <p
                className="
                text-xs sm:text-sm
                text-gray-500
                dark:text-gray-400
              "
              >
                STEM Practical Research Project
              </p>

              <h1
                className="
                text-3xl sm:text-4xl
                font-bold
              "
              >
                SensCane
              </h1>

              <p
                className="
                mt-1
                text-sm
                text-gray-600
                dark:text-gray-400
              "
              >
                Smart Blind Stick for Visually Impaired Individuals
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          className="
            p-5 sm:p-8
            space-y-6 sm:space-y-8
          "
        >
          {/* Overview */}
          <section>
            <h3
              className="
              flex items-center gap-2
              text-lg
              font-bold
              text-gray-900
              dark:text-white
            "
            >
              <Lightbulb size={20} className="text-yellow-500" />
              Project Overview
            </h3>

            <p
              className="
              mt-3
              text-sm
              leading-relaxed
              text-gray-600
              dark:text-gray-400
            "
            >
              SensCane is my STEM practical research project that focused on
              developing a smart blind stick prototype to assist visually
              impaired individuals. The study explored sensor-based technology
              for obstacle detection to improve mobility, safety, and
              independence.
            </p>
          </section>

          {/* Objective */}
          <section>
            <h3
              className="
              flex items-center gap-2
              text-lg
              font-bold
              text-gray-900
              dark:text-white
            "
            >
              <Target size={20} className="text-red-500" />
              Research Objective
            </h3>

            <p
              className="
              mt-3
              text-sm
              leading-relaxed
              text-gray-600
              dark:text-gray-400
            "
            >
              To design and develop an affordable assistive device that helps
              visually impaired users navigate their surroundings through
              obstacle detection technology.
            </p>
          </section>

          {/* Information */}
          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-4
          "
          >
            <div
              className="
                rounded-2xl
                bg-gray-100
                dark:bg-zinc-900
                border
                border-gray-200
                dark:border-zinc-800
                p-5
              "
            >
              <Cpu size={25} className="text-cyan-500 mb-3" />

              <h4
                className="
                font-semibold
                text-gray-900
                dark:text-white
              "
              >
                Technologies Used
              </h4>

              <p
                className="
                mt-2
                text-sm
                text-gray-500
                dark:text-gray-400
              "
              >
                Arduino • Ultrasonic Sensor • Embedded System • Electronics
              </p>
            </div>

            <div
              className="
                rounded-2xl
                bg-gray-100
                dark:bg-zinc-900
                border
                border-gray-200
                dark:border-zinc-800
                p-5
              "
            >
              <GraduationCap size={25} className="text-blue-500 mb-3" />

              <h4
                className="
                font-semibold
                text-gray-900
                dark:text-white
              "
              >
                Research Background
              </h4>

              <p
                className="
                mt-2
                text-sm
                text-gray-500
                dark:text-gray-400
              "
              >
                Senior High School STEM Practical Research
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              gap-3
              pt-4
              border-t
              border-gray-200
              dark:border-zinc-800
            "
          >
            <button
              onClick={openResearch}
              className="
                flex-1
                flex items-center justify-center gap-2
                rounded-xl
                bg-black
                dark:bg-white
                text-white
                dark:text-black
                py-3
                font-semibold
                hover:bg-zinc-800
                dark:hover:bg-gray-200
                hover:scale-[1.02]
                transition
              "
            >
              View Research Paper
              <ExternalLink size={16} />
            </button>

            <button
              onClick={onClose}
              className="
                px-8
                py-3
                rounded-xl
                border
                border-gray-300
                dark:border-zinc-700
                text-gray-700
                dark:text-white
                hover:bg-gray-100
                dark:hover:bg-zinc-800
                transition
              "
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsModal;
