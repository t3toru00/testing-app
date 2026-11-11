import React, { useState, useEffect } from 'react';
import { UtensilsCrossed, Menu, X, Phone, Calendar } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reservations', href: '#reservations' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-forest-950/95 backdrop-blur-md shadow-elegant py-3.5 border-b border-gold-400/15'
          : 'bg-gradient-to-b from-forest-950/90 via-forest-950/55 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex items-center justify-between"
          aria-label="Main Navigation"
        >
          {/* Brand Logo */}
          <a
            href="#home"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Bella Cucina Home"
          >
            <div className="w-10 h-10 rounded-full bg-gold-400/15 border border-gold-400/50 flex items-center justify-center text-gold-400 group-hover:bg-gold-400 group-hover:text-forest-950 transition-all duration-300">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-wide text-cream-50 leading-none">
                Bella Cucina
              </span>
              <span className="text-[10px] uppercase tracking-[0.28em] text-gold-300/90 mt-0.5">
                Milano • Est. 2014
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`relative text-sm font-medium tracking-wide transition-colors duration-200 py-2 ${
                      isActive
                        ? 'text-gold-400'
                        : 'text-cream-100/85 hover:text-gold-300'
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 h-[1.5px] bg-gold-400 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0'
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+390289427510"
              className="text-xs font-medium text-cream-200/80 hover:text-gold-300 flex items-center gap-1.5 transition-colors"
              aria-label="Call Bella Cucina"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>+39 02 8942 7510</span>
            </a>

            <a
              href="#reservations"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-400 hover:bg-gold-300 text-forest-950 font-semibold text-sm tracking-wide shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Table</span>
            </a>
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="#reservations"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gold-400 text-forest-950 font-semibold text-xs tracking-wide"
            >
              Book a Table
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-forest-900/90 border border-gold-400/30 text-cream-50 hover:text-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Dropdown Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-forest-950/98 border-t border-gold-400/15 px-6 pt-4 pb-7 mt-3 space-y-3 shadow-2xl">
          <ul className="space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className={`block py-2.5 px-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-forest-800 text-gold-400'
                        : 'text-cream-100 hover:bg-forest-900 hover:text-gold-300'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="pt-3 border-t border-forest-800 flex flex-col gap-3">
            <a
              href="#reservations"
              onClick={handleNavClick}
              className="w-full py-3 rounded-full bg-gold-400 hover:bg-gold-300 text-forest-950 font-semibold text-center text-sm tracking-wide flex items-center justify-center gap-2 shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Table</span>
            </a>
            <a
              href="tel:+390289427510"
              className="w-full py-2.5 rounded-full border border-gold-400/30 text-cream-100 text-center text-xs font-medium flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>Reservations: +39 02 8942 7510</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
