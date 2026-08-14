import Navbar from "../modal/NavBar";
import { useState, useEffect } from "react";

// animations
import Loader from "../pages/loader";

// pages
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Experiences from "../pages/Experiences";
import Recommendations from "../pages/Recommendations";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Footer from "../pages/Footer";
import Certifications from '../pages/Certifications'

function PortfolioV2() {
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1900);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    );
  }

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

          <section id="about" className="">
            <About />
          </section>

          <section id="experiences" className="">
            <Experiences />
          </section>

          <section id="projects" className="">
            <Projects />
          </section>

          <section id="">
            <Certifications />
          </section>

          <section id="">
            <Recommendations />
          </section>

          <section id="contact" className="min-h-screen">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default PortfolioV2;
