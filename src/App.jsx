import profile from "./assets/profile.png";
import profile2 from "./assets/profile2.png";
import "./index.css";
import resume from "./assets/ArwinResume.pdf";
import { useState, useEffect, useRef } from "react";
import badge from "./assets/badge.png";
import lightmode from "./assets/lightmode.png";
import nightmode from "./assets/nightmode.png";
import BestInWebManagement from "./assets/BestInWebManagement.png";
import harvard from "./assets/harvard.png";
import IntelliPatCert from "./assets/IntelliPatCert.png";
import sqlCert from "./assets/sqlCert.png";
import hourofcode from "./assets/hourofcode.png";
import webdesignCert from "./assets/webdesignCert.png";
import oracleCert from "./assets/oracleCert.png";

import { ChevronRight, Mail, Trophy, MapPin, FileText } from "lucide-react";
import TypewriterRole from "./animations/TypewriterRole";
import BotpressChat from "./modal/BotpressChat";
import EmailModal from "./modal/EmailModal";
import g1 from "./assets/g1.jpg";


function App() {
  const [hover, setHover] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [dark, setDark] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const scrollRef = useRef(null);

const toggleDarkMode = () => {
  if (typeof window !== 'undefined') {
    document.documentElement.classList.toggle("dark");
    setDark(prev => !prev);
  }
};

const viewResume = () => {
  if (typeof window !== 'undefined') {
    window.open(resume, "_blank");
  }
};

  useEffect(() => {
    setAnimate(true);
  }, []);
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 " >
      <section className={`profile-card ${animate ? 'animate-in' : ''} transition-colors duration-300`}>
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-4">
          <img
            src={hover ? profile2 : profile}
            alt="Profile"
            className="profile"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <h1 className="text-lg md:text-2xl font-stretch-expanded font-bold truncate dark:text-white">Arwin Janoyan</h1>
                <img src={badge} className="w-4 mt-1" />
              </div>
                <button
                  onClick={() => toggleDarkMode()}
                  className="cursor-pointer flex items-center mx-0 px-4.5 py-1.5 bg-gray-200 dark:bg-gray-700 rounded z-50 transition-colors duration-300"
                >
                  <img
                    key={dark ? 'night' : 'light'} // ensures React triggers re-render for animation
                    src={dark ? lightmode : nightmode}
                    className={`w-3.5 max-h-3.5 transform transition-transform duration-500 ease-in-out
                              ${dark ? 'animate-spinZoom' : 'animate-spinZoom'} `}
                  />
                </button>
            </div>
            <p className="text-xs md:text-[14px] font-normal text-foreground/70 mt-1 flex items-center gap-1 dark:text-white"> <MapPin size={14} className="w-3 h-3 md:w-3.5 md:h-3.5 flex-shrink-0 "/> Tagum City, Philippines</p>
            <div className="flex items-center justify-between gap-0 mt-1.5">
              <p className="text-[10px] md:text-base font-medium text-black dark:text-white">
                BSIT Student
                <span className="text-gray-400">{" \\ "}</span>
                Aspiring
                <span className="text-white dark:text-black">-</span>
                <TypewriterRole />
              </p>
              <div className="hidden md:block">
                <div className="relative" >
                    <button className="cursor-pointer text-[11px] md:text-xs flex items-center justify-center gap-1 bg-blue-600 text-white font-medium rounded-lg w-full md:w-auto md:scale-90 mx-[-15px]" onClick={() => window.open("https://www.facebook.com/photo.php?fbid=611827651697333&set=pb.100086103111194.-2207520000&type=3", "_blank")}>        
                    <span className="blue-bar inline-flex h-7 md:h-8 items-center rounded-l-lg px-2.5 md:px-2 md:text-xs font-bold transition-all duration-300 gap-1 md:gap-1.5 whitespace-nowrap relative overflow-hidden group flex-1 justify-center md:justify-start min-h-0">
                      <Trophy size={15} className="mx-2"/> MMCM Programming Competition - 2nd Place  <ChevronRight size={18} className="mx-1"/>
                    </span>
                    
                    </button>
                </div>
              </div>
            </div>
            <div className="space-y-2 mt-3 md:mt-3 gap-1 md:gap-2 flex ">
              <button className = "button text-[11px] md:text-xs inline-flex h-7 md:h-8 items-center rounded-lg bg-foreground px-2.5 md:px-6 text-[8px] md:text-xs font-medium text-background transition-all duration-200 hover:bg-foreground/90 hover:-translate-y-0.1 gap-1 md:gap-1.5 whitespace-nowrap min-h-0 bg-black dark:bg-white text-white dark:text-black" onClick={viewResume}> <FileText size={16} /> View Resume</button>
              <button className = "button-2 text-[11px] md:text-xs inline-flex h-7 md:h-8 items-center rounded-lg bg-foreground px-2.5 md:px-6 text-[8px] md:text-xs font-medium text-background transition-all duration-200 hover:bg-foreground/90 hover:-translate-y-0.1 gap-1 md:gap-1.5 whitespace-nowrap min-h-0 dark:bg-black dark:text-white" onClick={() => setShowModal(true)}> <Mail size={16} /> Send Email</button>
            </div>
            <div className="block md:hidden">
              <div className="relative">
                    <button className="cursor-pointer flex items-center justify-center gap-1.5 bg-blue-600 font-bold text-white text-xs rounded-lg w-full md:w-auto md:scale-80" onClick={() => window.open("https://www.facebook.com/photo.php?fbid=611827651697333&set=pb.100086103111194.-2207520000&type=3", "_blank")}>
                     <span className="blue-bar inline-flex h-7 md:h-8 items-center rounded-l-lg px-2.5 md:px-4 text-[7.5px] md:text-sm font-bold text-white transition-all duration-300 gap-1 md:gap-1.5 whitespace-nowrap relative overflow-hidden group flex-1 justify-center md:justify-start min-h-0">
                      <Trophy size={11} className="mx-2"/> MMCM CodeClash Programming Competition — 2nd Place <ChevronRight size={13} className="mx-0.5"/>
                      </span>
                    </button>
                </div>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
          <EmailModal onClose={() => setShowModal(false)} />
      )}

        <section className={`dark:text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-3 ${animate ? "animate-in delay-100" : ""}`}>
          <div className=" bento-card p-4 col-span-1 md:col-span-4 space-y-2">
            <h2 className="text-lg font-bold">About</h2>
            <p className="text-[14px] font-medium text-foreground/70 ">
              I'm an aspiring software developer and data analyst with a strong passion for technology and problem solving. 
              Currently, I am pursuing a Bachelor's degree in Information Technology at the University of Mindanao. 
              <br />
              <br />
              I have a solid foundation in programming languages such as Java, SQL, JavaScript and Python, and I'm eager to expand my skills in web development, and
              data analysis. 
              <br />
              With a keen eye for detail and a commitment to continuous learning, 
              I am excited to contribute my skills and enthusiasm to real-world projects and make a positive impact in the tech industry.
            </p>
          </div>

          <div className="col-span-1 md:col-span-2 md:row-span-3 space-y-2 animate-fade-in animation-delay-200">
            <div className="bento-card p-4 space-y-4 group flex-1"> 
              <h2 className="text-lg font-bold">Experience</h2>
              <div className="relative space-y-4 mt-4">
                <div className="absolute left-0 top-1.5 bottom-2 w-px bg-border"></div>
                
                <div className="relative pl-6 group/role">
                  <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 
                    border-accent bg-accent 
                    transition-colors">
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold 
                      text-accent 
                      transition-colors">Website Management Training</h3>
                      <div className="flex items-center justify-between"> 
                        <span className="text-xs text-foreground/70 ">SURGE FreeLancing Marketplace</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-foreground/5 shadow-[0_1px_1px_rgba(0,0,0,0.03)]
                        bg-accent/10">2026</span>
                      </div>
                  </div>
                </div>

                <div className="relative pl-6 group/role">
                  <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 
                    border-accent bg-accent 
                    transition-colors">
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold 
                      text-accent 
                      transition-colors">Programming Competition</h3>
                      <div className="flex items-center justify-between"> 
                        <span className="text-xs text-foreground/70 ">Mapua MCM Cup / 2nd placer</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-foreground/5 shadow-[0_1px_1px_rgba(0,0,0,0.03)]
                        bg-accent/10">2025</span>
                      </div>
                  </div>
                </div>

                <div className="relative pl-6 group/role">
                  <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-border bg-background group-hover/role:bg-accent transition-colors"></div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold group-hover/role:text-accent transition-colors">
                      Hello World!
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-foreground/70 ">Started learning programming</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-foreground/5 shadow-[0_1px_1px_rgba(0,0,0,0.03)]">2023</span>
                      </div>
                    </div>
                </div>
              </div>
            </div>


            <div className="col-span-1 md:col-span-2 md:row-span-3 space-y-2 animate-fade-in animation-delay-200">
            <div className="bento-card p-4 space-y-2 group flex-1"> 
              <h2 className="text-lg font-bold">Education</h2>
              <div className="relative space-y-4.5 mt-4">
                <div className="absolute left-1.5 top-1.5 bottom-2 w-px bg-border"></div>

                <div className="relative pl-6 group/role">
                  <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 
                    border-accent bg-accent 
                    transition-colors">
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold 
                      text-accent 
                      transition-colors">BS Information Technology</h3>
                      <div className="flex items-center justify-between"> 
                        <span className="text-xs text-foreground/70 ">University of Mindanao</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-foreground/5 shadow-[0_1px_1px_rgba(0,0,0,0.03)]
                        bg-accent/10">2026</span>
                      </div>
                  </div>
                </div>
              
                
                <div className="relative pl-6 group/role">
                  <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-border bg-background group-hover/role:bg-accent transition-colors"></div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold group-hover/role:text-accent transition-colors">
                      Science, Technology, Engineering, and Mathematics (STEM)
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-foreground/70 ">Tagum City National High School</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-foreground/5 shadow-[0_1px_1px_rgba(0,0,0,0.03)]">2023</span>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div> 


          <div className="col-span-1 md:col-span-2 md:row-span-3 space-y-2 animate-fade-in animation-delay-200">
            <div className="p-5 space-y-2.5 group flex-1 "> 
              <h2 className="text-lg font-medium">Social Links</h2>
              <div>
                <a href="https://www.linkedin.com/in/arwin-ryan-janoyan-6b355a3a5/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-1.5 rounded-lg bg-foreground/5 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_1px_1px_rgba(0,0,0,0.04)] hover:bg-foreground/10 hover:shadow-[0_3px_10px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-0.5 group">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" className="w-5 h-5 dark:invert"/>
                <p className="text-[10px] font-medium text-foreground group-hover:text-accent transition-colors">LinkedIn</p>
                </a>
              </div>

              <div>
                <a href="https://github.com/ArwinJanoyan2430" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-1.5 rounded-lg bg-foreground/5 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_1px_1px_rgba(0,0,0,0.04)] hover:bg-foreground/10 hover:shadow-[0_3px_10px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-0.5 group">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" className="w-5 h-5 dark:invert"/>
                <p className="text-[10px] font-medium text-foreground group-hover:text-accent transition-colors">GitHub</p>
                </a>
              </div>

              <div>
                <a href="https://www.instagram.com/arwinj.dev/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-1.5 rounded-lg bg-foreground/5 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_1px_1px_rgba(0,0,0,0.04)] hover:bg-foreground/10 hover:shadow-[0_3px_10px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-0.5 group">
                <img src="https://www.svgrepo.com/show/521711/instagram.svg" className="w-5 h-5 dark:invert"/>
                <p className="text-[10px] font-medium text-foreground group-hover:text-accent transition-colors">Instagram</p>
                </a>
              </div>
            </div>
          </div> 
          </div> 
        
          <div className="bento-card p-4 col-span-1 md:col-span-4 space-y-2 group animate-fade-in animation-delay-200">
            <div className="flex items-center justify-between"> 
              <h2 className="text-lg font-bold">Tech Stack</h2>
              <a className="text-xs text-foreground/70 hover:text-foreground flex items-center gap-1 transition-colors" href="#">View All
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold mb-2">Frontend</h3>
                <div className="flex flex-wrap gap-1.5">
                  <div className="flex bg-gray-100 dark:bg-[#2d2d2d] rounded-sm  px-3 py-1 items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-4 h-4" />
                    <span className="py-0.5 text-xs">JavaScript</span>
                  </div>

                  <div className="flex bg-gray-100 dark:bg-[#2d2d2d] rounded-sm  px-3 py-1 items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="w-4 h-4" />
                    <span className="py-0.5 text-xs">Tailwind CSS</span>
                  </div>

                  <div className="flex bg-gray-100 dark:bg-[#2d2d2d] rounded-sm  px-3 py-1 items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="w-4 h-4" />
                    <span className="py-0.5 text-xs">React</span>
                  </div>

                  <div className="flex bg-gray-100 dark:bg-[#2d2d2d] rounded-sm  px-3 py-1 items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" className="w-4 h-4" />
                    <span className="py-0.5 text-xs">Next.js</span>
                  </div>
                  
                </div>
              </div>
              

              <div>
                <h3 className="text-sm font-semibold mb-2">Backend</h3>
                <div className="flex flex-wrap gap-1.5">
                  <div className="flex bg-gray-100 dark:bg-[#2d2d2d] rounded-sm  px-3 py-1 items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" className="w-4 h-4" />
                    <span className="py-0.5 text-xs">MySQL</span>
                  </div>

                  <div className="flex bg-gray-100 dark:bg-[#2d2d2d] rounded-sm  px-3 py-1 items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" className="w-4 h-4" />
                    <span className="py-0.5 text-xs">MongoDB</span>
                  </div>

                  <div className="flex bg-gray-100 dark:bg-[#2d2d2d] rounded-sm  px-3 py-1 items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" className="w-4 h-4" />
                    <span className="py-0.5 text-xs">Java</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-2">Analytics Tools</h3>
                <div className="flex flex-wrap gap-1.5">
                  <div className="flex bg-gray-100 dark:bg-[#2d2d2d] rounded-sm  px-3 py-1 items-center gap-2">
                    <img src="https://www.svgrepo.com/show/354428/tableau-icon.svg" className="w-4 h-4" />
                    <span className="py-0.5 text-xs">Tableau</span>
                  </div>

                  <div className="flex bg-gray-100 dark:bg-[#2d2d2d] rounded-sm  px-3 py-1 items-center gap-2">
                    <img src="https://www.svgrepo.com/show/373589/excel.svg" className="w-4 h-4" />
                    <span className="py-0.5 text-xs">Excel</span>
                  </div>

                  <div className="flex bg-gray-100 dark:bg-[#2d2d2d] rounded-sm  px-3 py-1 items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="w-4 h-4" />
                    <span className="py-0.5 text-xs">Python</span>
                  </div>
                </div>
                
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-2">Developer Tools</h3>
                <div className="flex flex-wrap gap-1.5">
                  <div className="flex bg-gray-100 dark:bg-[#2d2d2d] rounded-sm  px-3 py-1 items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" className="w-4 h-4" />
                    <span className="py-0.5 text-xs">VS Code</span>
                  </div>
                  
                  <div className="flex bg-gray-100 dark:bg-[#2d2d2d] rounded-sm  px-3 py-1 items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" className="w-4 h-4" />
                    <span className="py-0.5 text-xs">GitHub</span>
                  </div>

                  <div className="flex bg-gray-100 dark:bg-[#2d2d2d] rounded-sm  px-3 py-1 items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" className="w-4 h-4" />
                    <span className="py-0.5 text-xs">Git</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in animation-delay-400 mt-3 md:mt-0">
          {/* Recent Projects */}
          <div className="bento-card p-4 space-y-2 group">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Recent Projects</h2>
              <a className="text-xs text-foreground/70 hover:text-foreground flex items-center gap-1 transition-colors" href="#">
                View All
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="bento-card p-3 space-y-1">
                In progress..
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="bento-card p-4 space-y-2 group overflow-hidden">
            <h2 className="text-lg font-bold">Recommendations</h2>
            <div className="relative h-[160px]">
              <div className="absolute inset-0 transition-all duration-1000">
                <p className="text-[13px] leading-relaxed text-foreground/80 font-serif line-clamp-4">
                  asdasd
                </p>
                <div className="mt-3 pt-3 border-t border-border">
                  <p className="text-xs font-semibold font-sans">John Doe</p>
                  <p className="text-xs text-foreground/50 font-sans">Software Engineer at Tech Company</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in animation-delay-600 mt-3 md:mt-4">
        <div className="bento-card p-1 col-span-1 md:col-span-6 space-y-2 animate-fade-in animation-delay-600 ">
            <h2 className="text-lg font-bold">Certifications</h2>

            <div
              ref={scrollRef}
              className="overflow-x-auto w-full snap-x snap-mandatory scrollbar-hover"
            >
              <div className="flex gap-4 my-1 w-max snap-x snap-mandatory ">
                <div
                className="bg-white dark:bg-zinc-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden group flex-shrink-0 w-[220px]"
                onClick={() => setSelectedImage(BestInWebManagement)}>
                <div className="overflow-hidden">
                  <img
                    src={BestInWebManagement}
                    alt="Best in Web Management"
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-semibold">
                    Best in Website Design
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Awarded for outstanding performance in website design during the SURGE Freelancing Marketplace training program.
                  </p>
                </div>
              </div>

              <div
                  className="bg-white dark:bg-zinc-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden group flex-shrink-0 w-[220px]"
                  onClick={() => setSelectedImage(harvard)}>
                  <div className="overflow-hidden">
                    <img
                      src={harvard}
                      alt="Best in Web Management"
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-semibold">
                      CS50's Web Programming with Python and JavaScript
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Web development course offered by Harvard University through edX.
                    </p>
                  </div>
                </div>     


                <div
                  className="bg-white dark:bg-zinc-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden group flex-shrink-0 w-[220px]"
                  onClick={() => setSelectedImage(IntelliPatCert)}>
                  <div className="overflow-hidden">
                    <img
                      src={IntelliPatCert}
                      alt="IntelliPat Certificate"
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-semibold">
                      Excel Certification Course Online
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Professional certification in Microsoft Excel offered by IntelliPaat Academy.
                    </p>
                  </div>
                </div>

                <div
                  className="bg-white dark:bg-zinc-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden group flex-shrink-0 w-[220px]"
                  onClick={() => setSelectedImage(sqlCert)}>
                  <div className="overflow-hidden">
                    <img
                      src={sqlCert}
                      alt="SQL Certificate"
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-semibold">
                      Introduction to SQL
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Professional online course offered by Simplilearn SkillUp to deepen technical skills and advance career capabilities.
                    </p>
                  </div>
                </div>

                <div
                  className="bg-white dark:bg-zinc-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden group flex-shrink-0 w-[220px]"
                  onClick={() => setSelectedImage(hourofcode)}>
                  <div className="overflow-hidden">
                    <img
                      src={hourofcode}
                      alt="Hour of Code Certificate"
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-semibold">
                      Hour of Code - AI Ready ASEAN Programme
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Certificate of participation in the global "Hour of Code" initiative, focused on foundational coding and AI awareness.
                    </p>
                  </div>
                </div>

                <div
                  className="bg-white dark:bg-zinc-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden group flex-shrink-0 w-[220px]"
                  onClick={() => setSelectedImage(webdesignCert)}>
                  <div className="overflow-hidden">
                    <img
                      src={webdesignCert}
                      alt="Website Design Certificate"
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-semibold">
                      Best in Graphic Design (Surge Freelancing Marketplace)
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Awarded for outstanding achievement during an intensive 5-day masterclass training.
                    </p>
                  </div>
                </div>

                <div
                  className="bg-white dark:bg-zinc-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden group flex-shrink-0 w-[220px]"
                  onClick={() => setSelectedImage(oracleCert)}>
                  <div className="overflow-hidden">
                    <img
                      src={oracleCert}
                      alt="Oracle Certificate"
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-semibold">
                      Oracle PL/SQL: Table Functions
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Advanced database programming certification from Oracle Dev Gym
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bento-card p-1 col-span-1 md:col-span-6 space-y-2 animate-fade-in animation-delay-600 ">
            <h2 className="text-lg font-bold">Gallery</h2>

            <div
              ref={scrollRef}
              className="overflow-x-auto w-full snap-x snap-mandatory scrollbar-hover"
            >
              <div className="flex gap-4 my-1 w-max snap-x snap-mandatory ">
                <div className="flex gap-4 my-1 w-max snap-x snap-mandatory">
                <img
                  src={g1}
                  alt="Gallery Image 1"
                  className="h-50 flex-shrink-0 cursor-pointer snap-start hover:scale-105 transition-transform duration-500 ease-out"
                  onClick={() => setSelectedImage(g1)}
                />
              </div>

              </div>
            </div>
          </div>
        </section>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-xl"
              alt="Certificate"
            />
          </div>
        )}


        <section>
          <div className="p-4 font-normal text-sm group animate-fade-in animation-delay-300">
            In progress...
          </div>
        </section>
          
        <section>
          <div className="text-center text-xs text-foreground/70 mt-8">
            <p>© 2024 Arwin Janoyan. All rights reserved.</p>
          </div>
        </section>

        <section>
          <div className="fixed bottom-4 right-4">
            <BotpressChat dark={dark} />
          </div>
        </section>
    </div>
  )
}

export default App
