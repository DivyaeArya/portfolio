// Hero Component
function Hero() {
  return (
    <section className="container mx-auto max-w-7xl px-6 pt-32 pb-16">
      {/* Intro Section */}
      <div className="flex items-center space-x-4 mb-12">
        <img
          src="\headshot.jpg"
          alt="Divyae Arya"
          className="w-20 h-20 rounded-full border-2 border-gray-700 object-cover"
        />
        <div>
          <h2 className="text-xl text-gray-200">
            Hi, I'm Divyae, student of CSE
            <br />
            at IIT Indore with a strong passion for
            <br />
            computer architecture and machine learning.
          </h2>
        </div>
      </div>
      
      {/* Banner Image */}
      <div className="w-full h-[200px] md:h-[280px] rounded-lg overflow-hidden mb-16 relative bg-gray-900">
        <img
          src="banner.webp"
          alt="Pixel art cityscape"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = 'https://placehold.co/1200x400/1A1A1A/555555?text=Image+Not+Found';
            e.currentTarget.alt = 'Image placeholder';
          }}
        />
        {/* <span className="absolute bottom-6 right-8 text-white text-4xl font-serif" style={{ fontSmooth: 'never', WebkitFontSmoothing: 'none' }}>
          curious.
        </span> */}
      </div>
      
      {/* Main Title */}
      <h1 className="text-6xl sm:text-6xl md:text-8xl font-bold text-white leading-tight">
        AI-ML <span className="text-gray-500">and</span>
        <br />
        Systems Thinker
      </h1>

    </section>
  );
}

export default Hero;