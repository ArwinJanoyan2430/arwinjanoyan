import { useState, useEffect } from "react";

import Navbar from "../modal/NavBar";
import Loader from "../pages/loader";
import DotGrid from "../component/DotGrid";

// Pages
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Experiences from "../pages/Experiences";
import Recommendations from "../pages/Recommendations";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Footer from "../pages/Footer";
import ScrollCharacter from "../component/ScrollCharacter";
import Certifications from "../pages/Certifications";

function PortfolioV2() {
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showResearch, setShowResearch] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1900);

    return () => clearTimeout(timer);
  }, []);

  // Apply dark mode to the HTML root
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1900);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-transparent text-zinc-950 dark:bg-zinc-950 dark:text-white">
        <Loader />
      </div>
    );
  }

  return (
    <div className={dark ? "dark" : ""}>
      {/* Animated background */}
      <DotGrid />
      <ScrollCharacter />

      {/* Pass theme state to Navbar */}
      {!showResearch && <Navbar dark={dark} setDark={setDark} />}

      {/* Main content */}
      <div
        className="relative z-10 min-h-screen bg-transparent px-6 py-4
          text-zinc-950 transition-colors duration-300 dark:text-white"
      >
        <main className="flex flex-col">
          <section
            id="home"
            className="flex min-h-screen items-center justify-center"
          >
            <Home />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="experiences">
            <Experiences />
          </section>

          <Projects
            showResearch={showResearch}
            setShowResearch={setShowResearch}
          />

          <section id="certifications">
            <Certifications />
          </section>

          <section id="recommendations">
            <Recommendations />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default PortfolioV2;
