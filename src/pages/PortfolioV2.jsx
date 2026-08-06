import Navbar from "../modal/NavBar";
import { useState } from "react";

// animations

// pages
import Home from "../pages/Home";
import Projects from "../pages/Projects";

function PortfolioV2() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="selection:bg-black mx-auto px-6 py-4 bg-white text-zinc-950 dark:bg-zinc-950 dark:text-white transition-colors duration-300">
        <Navbar dark={dark} setDark={setDark} />
        <main className="flex flex-col">
          <section
            id="home"
            className="min-h-screen flex items-center justify-center"
          >
            <Home />
          </section>

          <section id="projects" className="scroll-mt-0">
            <Projects />
          </section>
        </main>
      </div>
    </div>
  );
}

export default PortfolioV2;
