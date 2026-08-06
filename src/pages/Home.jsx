import pfp from "../assets/v2/pfp.png";
import QuoteTransition from "../animations/QuoteTransition";
import { Github, Linkedin } from "lucide-react";

function Home() {
  return (
    <div className="selection:bg-black grid max-w-5xl w-full items-center gap-10 -mt-20 md:grid-cols-[auto_1fr]">
      <div className="flex justify-center md:justify-start">
        <img
          src={pfp}
          alt="Arwin profile picture"
          className="hidden md:flex h-40 w-40 rounded-full object-cover transition-transform duration-300 hover:rotate-[-20deg] hover:scale-110 sm:h-60 sm:w-60 md:h-76 md:w-76"
        />
      </div>

      <div className="text-left md:text-left">
        <h1 className="pixel-font text-md font-bold text-zinc-500 dark:text-zinc-100 md:text-xl">
          Hey, I'm Arwin
        </h1>

        <div className="relative mt-4 h-60 md:h-60 w-full">
          <QuoteTransition />
        </div>

        <div className="mt-6 flex justify-start gap-4 md:justify-start">
          <button
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="btn-glitch-fill ibm-mono rounded-full border px-4 py-0 text-zinc-950 dark:border-zinc-800"
          >
            <span className="text text-xs md:text-base">projects</span>
            <span className="text-decoration text-xs md:text-base"> _ </span>
            <span className="decoration text-xs md:text-base">⇒</span>
          </button>

          <div className="flex gap-3 mx-5">
            <button className="bg-zinc-600 rounded-full transition-all duration-300 hover:scale-110">
              <Github
                size={18}
                className="text-zinc-100 dark:text-zinc-100 m-4"
              />
            </button>
            <button className="bg-zinc-600 rounded-full px-2 py-0 transition-all duration-300 hover:scale-110">
              <Linkedin
                size={18}
                className="text-zinc-100 dark:text-zinc-100 m-2"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
