
import PaddleHub from "../assets/v2/PaddleHub.jpg";
import PaddleQ from "../assets/v2/PaddleQ.png";
import { ArrowUpRight, CircleDot } from "lucide-react";

function OngoingProjects() {
  const projects = [
    {
      name: "PaddleHub",
      image: PaddleHub,
      description:
        "A full-stack platform for managing pickleball club operations, court bookings, open play sessions, tournaments, player leaderboards, and admin workflows.",
      progress: 75,
      status: "In Progress",
      category: "Full-stack development",
      number: "01",
    },
    {
      name: "PaddleQ",
      image: PaddleQ,
      description:
        "A pocket-friendly pickleball queue system designed for easy access during group meetups, family gatherings, and friendly matches, with simple player queuing and rotation.",
      progress: 100,
      status: "In Progress",
      category: "Web application",
      number: "02",
    },
  ];

  return (
    <section className="w-full">

      {/* Project cards */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group min-w-0 overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-900/70 dark:hover:border-zinc-700 dark:hover:shadow-black/20"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden bg-zinc-100 sm:h-56">
              <img
                src={project.image}
                alt={`${project.name} project preview`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

              {/* Project number */}
              <span className="ibm-mono absolute left-4 top-4 rounded-md border border-white/20 bg-black/30 px-2.5 py-1.5 text-[9px] tracking-widest text-white backdrop-blur-md">
                PROJECT / {project.number}
              </span>

              {/* Status */}
              <span className="ibm-mono absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[9px] uppercase tracking-wider text-white backdrop-blur-md">
                <CircleDot size={11} className="text-green-400" />
                {project.status}
              </span>

              {/* Image title */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="ibm-mono mb-1.5 text-[9px] uppercase tracking-[0.18em] text-white/70">
                  {project.category}
                </p>

                <h3 className="pixel-font text-xl font-bold tracking-tight text-white sm:text-2xl">
                  {project.name}
                </h3>
              </div>
            </div>

            {/* Dashboard details */}
            <div className="p-4 sm:p-5">
              <p className="min-h-0 text-sm leading-6 text-zinc-600 dark:text-zinc-400 sm:min-h-[72px]">
                {project.description}
              </p>

              {/* Progress section */}
              <div className="mt-5 border-t border-zinc-200 pt-4 dark:border-zinc-800">
                <div className="mb-3 flex items-end justify-between gap-3">
                  <div>
                    <p className="ibm-mono text-[9px] uppercase tracking-[0.16em] text-zinc-400 dark:text-zinc-500">
                      Completion
                    </p>

                    <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                      Overall project progress
                    </p>
                  </div>

                  <p className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
                    {project.progress}
                    <span className="ml-0.5 text-sm font-normal text-zinc-400">
                      %
                    </span>
                  </p>
                </div>

                {/* Progress bar */}
                <div
                  className="h-1.5 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800"
                  role="progressbar"
                  aria-label={`${project.name} completion`}
                  aria-valuenow={project.progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="h-full rounded-full bg-zinc-950 transition-[width] duration-700 ease-out dark:bg-white"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>

                {/* Footer */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                  <span className="ibm-mono text-[9px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    {project.status}
                  </span>

                  <span className="inline-flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-300">
                    Active development
                    <ArrowUpRight
                      size={14}
                      className="text-zinc-400"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default OngoingProjects;
