import { useEffect, useState } from 'react';
import ArrowUpRight from './arrow';

function Header() {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
    return () => document.body.classList.remove('overflow-hidden');
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm">
      <nav className="container mx-auto max-w-7xl px-6 py-5 flex justify-between items-center">
        {/* User Name */}
        <a href="#" className="text-lg font-medium text-gray-100 hover:text-white transition-colors">
          Divyae Arya
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#skills" className="text-gray-300 hover:text-white transition-colors">
            Skills
          </a>
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

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation"
            className="p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            {/* Hamburger / Close Icon */}
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Panel (absolute so it doesn't affect layout when closed) */}
      <div
        id="mobile-nav"
        className={`md:hidden absolute left-0 right-0 top-full z-40 transform transition-all duration-200 ease-in-out ${open ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-2 opacity-0 pointer-events-none'}`}
      >
        <div className="bg-black/95 backdrop-blur-md px-6 py-4">
          <div className="flex flex-col space-y-4">
            <a onClick={() => setOpen(false)} href="#about" className="text-gray-200 hover:text-white text-lg">
              About
            </a>

            <a onClick={() => setOpen(false)} href="#work" className="text-gray-200 hover:text-white text-lg">
              Projects
            </a>

            <a onClick={() => setOpen(false)} href="#skills" className="text-gray-200 hover:text-white text-lg">
              Skills
            </a>
            
            <a
              onClick={() => setOpen(false)}
              href="mailto:divyae.arya@gmail.com"
              className="text-gray-200 hover:text-white text-lg flex items-center"
            >
              Contact
              <span className="ml-2">
                <ArrowUpRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;