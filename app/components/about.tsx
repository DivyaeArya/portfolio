// Resume Icon Component
const ResumeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="inline-block h-5 w-5 ml-2 opacity-80 rotate-[10deg] transition-transform duration-150 ease-in-out group-hover:rotate-[-10deg]" // Rotates to -10deg on hover
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const LinkArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="inline-block h-5 w-5 ml-2 opacity-80 transition-transform duration-150 ease-in-out group-hover:rotate-[-90deg]" 
  >
    <path d="M7 17l9.2-9.2M17 17V7H7" />
  </svg>
);

function AboutSection() {
  return (
    <section id="about" className="container mx-auto max-w-7xl px-6 py-16">
      {/* Info Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-gray-700 pt-8 mb-16 gap-4">
        <div className="text-gray-400">Mumbai, India</div>
        <div className="text-gray-400">IST (UTC +05:30)</div>
        <div className="flex items-center space-x-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-green-400 font-medium">OPEN TO WORK</span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left Column (Text) */}
        <div className="md:sticky md:top-32">
        <h2 className="text-5xl font-bold text-white mb-12"> <span className="text-green-400">01</span> / About</h2>

          <p className="text-2xl text-gray-200 leading-relaxed">
            Second-year CS student at IIT Indore. Driven by a passion for understanding the world on a deeper level. This has drawn me to the elegance of mathematics and the challenge of foundational research. I love exploring complex concepts, asking "why," and connecting ideas across different fields, from theoretical computer science to the patterns that shape our world.
          </p>

          {/* --- LINKS RE-ADDED WITH FINAL ANIMATION --- */}
          <div className="mt-10 space-y-4">
            {/* Download Resume Link */}
            <a
              href="https://drive.google.com/file/d/1iac7zizr1OeD0j46Mkv3AR6F5ZlRa3Ct/view?usp=sharing" target="_blank"
              className="group relative inline-flex items-center text-xl font-medium text-gray-200 hover:text-white transition-colors duration-200 overflow-hidden"
              style={{ height: '1.5em' }} // Set fixed height to contain the flip
            >
              <span className="flex items-center transition-transform duration-150 ease-in-out group-hover:-translate-y-full">
                Download Resume <ResumeIcon />
              </span>
              <span className="absolute top-full left-0 flex items-center transition-transform duration-150 ease-in-out group-hover:-translate-y-full" aria-hidden="true">
                Download Resume <ResumeIcon />
              </span>
            </a>
            
            <br /> 

            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/divyae-arya-9788b3332/" target="_blank"
              className="group relative inline-flex items-center text-xl font-medium text-gray-200 hover:text-white transition-colors duration-200 overflow-hidden"
              style={{ height: '1.5em' }} // Set fixed height
            >
              <span className="flex items-center transition-transform duration-150 ease-in-out group-hover:-translate-y-full">
                Connect on Linkedin <LinkArrowIcon />
              </span>
              <span className="absolute top-full left-0 flex items-center transition-transform duration-150 ease-in-out group-hover:-translate-y-full" aria-hidden="true">
                Connect on Linkedin <LinkArrowIcon />
              </span>
            </a>
          </div>
          {/* --- END RE-ADDED LINKS --- */}

        </div>

        {/* Right Column (Image Collage) */}
        <div className="hidden md:block relative h-[600px] md:h-auto md:min-h-[800px]">
          {/* Using relative/absolute positioning to mimic the collage. */}
          <img
            src="maths.jpg"
            alt="Collage image 1"
            className="w-[300px] h-[250px] object-cover rounded-lg absolute top-0 left-0 rotate-[-8deg] border-4 border-black"
          />
          <img
            src="back.jpg"
            alt="Collage image 2"
            className="w-[350px] h-[280px] object-cover rounded-lg absolute top-40 left-20 rotate-[5deg] z-10 border-4 border-black"
          />
          <img
            src="kruta.jpg"
            alt="Collage image 3"
            className="w-[250px] h-[350px] object-cover rounded-lg absolute top-10 right-0 rotate-[10deg] border-4 border-black"
          />
          <img
            src="coffee.jpg"
            alt="Collage image 4"
            className="w-[280px] h-[300px] object-cover rounded-lg absolute top-[350px] right-5 rotate-[-5deg] z-20 border-4 border-black"
          />
           <img
            src="code3.jpg"
            alt="Collage image 5"
            className="w-[300px] h-[300px] object-cover rounded-lg absolute top-[450px] left-10 rotate-[3deg] z-10 border-4 border-black"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;