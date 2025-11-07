import ArrowUpRight  from './arrow';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-80 backdrop-blur-sm">
      <nav className="container mx-auto max-w-7xl px-6 py-5 flex justify-between items-center">
        {/* User Name */}
        <a href="#" className="text-lg font-medium text-gray-100 hover:text-white transition-colors">
          Divyae Arya
        </a>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#work" className="text-gray-300 hover:text-white transition-colors">
            Projects
          </a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">
            About
          </a>
          <a 
            href="mailto:divyae.arya@gmail.com" 
            className="text-gray-300 hover:text-white transition-colors flex items-center"
          >
            Contact
            <ArrowUpRight />
          </a>
        </div>
        
        {/* Mobile Menu Button (placeholder) */}
        <div className="md:hidden">
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;