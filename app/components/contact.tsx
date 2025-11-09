function ContactSection() {
  return (
    <section id="contact" className="container mx-auto max-w-7xl px-6 py-16">
      <div className="border-t border-gray-700 pt-16">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-5xl font-bold text-white mb-8">
              <span className="text-green-400">04</span> / Get in touch
            </h2>
            <p className="text-2xl text-gray-400 max-w-2xl">
              Have a project in mind, or just want to say hi? Feel free to reach
              out.
            </p>
            <div className="mt-10">
              <a
                href="mailto:divyae.arya@gmail.com"
                className="text-3xl md:text-5xl font-medium text-white transition-colors hover:text-green-400"
              >
                divyae.arya@gmail.com
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col gap-6">
            <a
              href="https://github.com/DivyaeArya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.85 10.94c.57.1.78-.25.78-.55v-1.9c-3.19.7-3.86-1.53-3.86-1.53-.52-1.32-1.28-1.67-1.28-1.67-1.05-.7.08-.68.08-.68 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.71 1.26 3.38.97.1-.75.4-1.26.72-1.55-2.55-.3-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.52.12-3.18 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.82 0c2.22-1.49 3.2-1.18 3.2-1.18.64 1.66.24 2.88.12 3.18.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.26 5.69.42.37.77 1.1.77 2.22v3.29c0 .3.21.67.79.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
              </svg>
            </a>

            <a
              href="www.instagram.com/divvarya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17" cy="7" r="1.2" fill="currentColor" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/divyae-arya-9788b3332/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors"
            > 
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 8.98h4v12H3v-12zm7 0h3.7v1.7h.05c.52-.98 1.8-2 3.7-2 3.96 0 4.7 2.6 4.7 6v6.3h-4v-5.6c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95v5.7h-4v-12z" />
              </svg>
              
            </a>
            
            <a
              href="https://x.com/DivyaeA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.2 2H21l-6.5 7L22 22h-5l-4.5-6-4.7 6H2l7.2-7.6L2.5 2H8l3.8 5.4L18.2 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
