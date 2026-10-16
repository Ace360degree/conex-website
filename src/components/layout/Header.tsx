import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Navbar } from './Navbar';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white">
      <nav className="bg-white shadow-md px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/assets/images/header/conexlogo.png"
              alt="Conex Logo"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <Navbar />

          {/* Contact Info (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+919833379941"
              className="flex items-center space-x-1.5 cursor-pointer text-gray-800 hover:text-[var(--color-primary)] transition"
              title="Call India Office"
            >
              <img
                src="/assets/images/header/india-flag.svg"
                className="w-5 h-4 object-contain shadow-xs"
                alt="India"
              />
              <span className="text-sm font-medium whitespace-nowrap">+91 9833379941 / +91 9916001366</span>
            </a>
            <a
              href="tel:+197696987434"
              className="flex items-center space-x-1.5 cursor-pointer text-gray-800 hover:text-[var(--color-primary)] transition"
              title="Call USA Office"
            >
              <img
                src="/assets/images/header/us-flag.svg"
                className="w-5 h-4 object-contain shadow-xs"
                alt="USA"
              />
              <span className="text-sm font-medium whitespace-nowrap">+1 (976) 9698 7434</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="menu-btn"
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden text-gray-800 p-2 focus:outline-none cursor-pointer"
            aria-label="Toggle Mobile Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      </nav>
    </header>
  );
};
