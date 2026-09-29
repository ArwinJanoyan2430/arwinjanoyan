import PaddleHub from "../assets/v2/paddlehub/PaddleHub.jpg";
import PaddleQs from "../assets/v2/paddleq/PaddleQ.jpg";


function OngoingProjects() {
  const projects = [
    {
      name: "PaddleHub",
      image: PaddleHub,
      description:
        "A full-stack platform for managing pickleball club operations, including court bookings, open play sessions, tournaments, player leaderboards, and admin workflows.",
      progress: 75,
      status: "In Progress",
      category: "Web Design",
      timeline: "Active Development",
    },
    {
      name: "PaddleQ",
      image: PaddleQs,
      description:
        "PaddleQ streamlines pickleball club management, court bookings, and session tracking by automating player queuing, smart rotation, matchmaking, and live scores. ",
      progress: 50,
      status: "In Progress",
      category: "Development",
      timeline: "Active Development",
    },
  ];

  return (
    <section className="w-full">
      {/* Section Header */}
      <div className="mb-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Current Work
            </span>

            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
              Ongoing Projects
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              A look at the projects currently being designed, developed, and
              brought to life.
            </p>
          </div>

          <div className="hidden rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-medium text-zinc-600 shadow-sm sm:block dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
            {projects.length} Active Projects
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="grid gap-7 lg:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={index}
            className="
              group relative overflow-hidden rounded-[30px]
              border border-zinc-200/80
              bg-white
              shadow-[0_20px_70px_-35px_rgba(24,24,27,0.35)]
              transition-all duration-500
              hover:-translate-y-2
              hover:border-zinc-300
              hover:shadow-[0_30px_90px_-35px_rgba(24,24,27,0.5)]

              dark:border-zinc-800
              dark:bg-zinc-950
              dark:hover:border-zinc-700
              dark:hover:shadow-black/40
            "
          >
            {/* Image */}
            <div className="relative h-72 overflow-hidden sm:h-80">
              <img
                src={project.image}
                alt={project.name}
                className="
                  h-full w-full object-cover
                  transition-transform duration-700 ease-out
                  group-hover:scale-[1.06]
                "
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5" />

              {/* Top badges */}
              <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                <span
                  className="
                    rounded-full
                    border border-white/20
                    bg-black/30
                    px-3.5 py-2
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-white
                    backdrop-blur-md
                  "
                >
                  {project.category}
                </span>

                <span
                  className="
                    flex items-center gap-2
                    rounded-full
                    border border-white/20
                    bg-black/30
                    px-3.5 py-2
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-white
                    backdrop-blur-md
                  "
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                  </span>

                  {project.status}
                </span>
              </div>

              {/* Image bottom content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="mb-2 text-xs font-medium text-white/60">
                  {project.timeline}
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {project.name}
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-7">
              {/* Description */}
              <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>

              {/* Divider */}
              <div className="my-6 h-px bg-zinc-200 dark:bg-zinc-800" />

              {/* Progress Header */}
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-500">
                    Project Progress
                  </span>
                </div>

                <span className="text-lg font-bold tracking-tight text-zinc-950 dark:text-white">
                  {project.progress}%
                </span>
              </div>

              {/* Progress */}
              <div className="relative h-2.5 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                <div
                  className="
                    absolute left-0 top-0 h-full
                    rounded-full
                    bg-zinc-950
                    transition-all duration-1000 ease-out
                    dark:bg-white
                  "
                  style={{
                    width: `${project.progress}%`,
                  }}
                />
              </div>

              {/* Footer */}
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs text-zinc-500 dark:text-zinc-500">
                  Development status
                </span>

                <span className="flex items-center gap-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  Currently active
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default OngoingProjects;