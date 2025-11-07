"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-50 text-stone-50 transition-all duration-300
        ${scrolled ? 'bg-gray-900/90 backdrop-blur-sm py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center">


            {/* Desktop; Left Navigation Links - hidden on mobile */}
            <div className="hidden md:flex space-x-3 md:space-x-6">
              <NavLink href="/">Home</NavLink>
              <NavLink href="#portfolio">Portfolio</NavLink>
              <NavLink href="#about">About Me</NavLink>
              <NavLink href="#services">Services</NavLink>
            </div>

            {/* Logo - centered on mobile, normal position on desktop */}
            <div className="flex-1 flex justify-center md:justify-start md:flex-none">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="my logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            {/* Mobile menu button - only shows on small screens */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-stone-50 hover:text-gray-300 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>


            {/* Right side links - hidden on mobile */}
            <div className="hidden md:flex space-x-2 md:space-x-4">
              <NavLink href="#testimonials">Testimonials</NavLink>
              <NavLink href="/blog/page">Blog</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - appears when hamburger is clicked */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-95 fixed inset-0 z-40 pt-20 px-4">
          <div className="flex flex-col space-y-6 text-center text-stone-50 text-xl">
            <MobileNavLink href="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</MobileNavLink>
            <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>About Me</MobileNavLink>
            <MobileNavLink href="#services" onClick={() => setIsOpen(false)}>Services</MobileNavLink>
            <MobileNavLink href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</MobileNavLink>
            <MobileNavLink href="#blog" onClick={() => setIsOpen(false)}>Blog</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
          </div>
        </div>
      )}
    </>
  );
}

// Desktop NavLink component
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      href={href}
      className="relative text-stone-50 cursor-pointer px-2 py-1:"
    >
      <span className="relative inline-block">
        {children}
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-stone-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-right duration-300 -mb-1"></span>
      </span>
    </Link>
  );
};

// Mobile NavLink component
const MobileNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-stone-50 hover:text-gray-300 py-3 block"
    >
      {children}
    </Link>
  );
};

export default Navbar;