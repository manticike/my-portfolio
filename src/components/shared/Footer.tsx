import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 w-full flex flex-col items-center">
        {/* Logo - Top */}
        <div className="mb-8">
          <img 
            src="/logo.svg" 
            alt="Company Logo" 
            className="h-12" 
          />
        </div>
        
        {/* Social Links - Middle */}
        <div className="flex flex-col items-center space-y-4 mb-8 md:flex-row md:space-y-0 md:space-x-6">
          <a 
            href="https://x.com/isaackantwi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            Twitter
          </a>
          <a 
            href="https://github.com/manticike" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/isaac-antwi/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>
        
        {/* Copyright - Bottom */}
        <div className="text-center text-gray-400 text-sm">
          &copy;{currentYear} Isaac Antwi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;