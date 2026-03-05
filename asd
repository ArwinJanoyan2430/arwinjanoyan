<div className={`profile-card ${animate ? 'animate-in' : ''}   min-h-screen transition-colors duration-300`} >
      <section className="bg-amber-50 h-1/2"></section>

      <div className="header">
        <div className="flex items-left gap-2 bg-white dark:bg-black text-black dark:text-white">
          <img src={profile} className="profile" />
          <div className="flex flex-col my-3">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold">Arwin Ryan Janoyan</h2>
              <img src={badge} className="w-4 mt-1" />
            </div>
            <p className="flex text-sm items-center gap-1"> <MapPin size={14} /> Tagum City, Philippines</p>
            <p className="text-{10px} font-semibold my-4">BSIT Student | Aspiring Web Developer & Data Analyst</p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-start gap-2 mt-2">
              <button className = "button flex items-center gap-2 text-xs font-bold bg-black dark:bg-white text-white dark:text-black" onClick={viewResume}> <FileText size={16} /> View Resume</button>
              <button className = "button-2 flex items-center gap-2 text-xs font-bold dark:bg-black dark:text-white" onClick={() => setShowModal(true)}> <Mail size={16} /> Send Email</button>
            </div>
          </div>
          <div className="ml-auto">
            <button
              onClick={() => document.documentElement.classList.toggle("dark")}
              className="darkmode flex mx-8.5 top-4 right-95 px-4 py-2 bg-gray-200 dark:bg-gray-400 rounded z-50">
              <img src={nightmode} />
            </button>
            <button className="flex items-center justify-center gap-1.5 bg-blue-600 font-bold px-5 py-2 text-white rounded text-xs w-full sm:w-auto" onClick={() => window.open("https://www.facebook.com/photo.php?fbid=611827651697333&set=pb.100086103111194.-2207520000&type=3", "_blank")}>
              <Trophy size={15} /> 
              <span className="hidden sm:inline"> MMCM CodeClash Programming Competition — 2nd Place </span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <div className="bg-amber-50">

        </div>

        {showModal && (
          <EmailModal onClose={() => setShowModal(false)} />
        )}
      </div>
      
    </div>