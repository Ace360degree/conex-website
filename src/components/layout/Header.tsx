
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Navbar } from './Navbar';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#040A0A]">
      <nav className="bg-[#040A0A] shadow-md px-4 sm:px-6 lg:px-8 py-3">
     <div className="max-w-7xl mx-auto flex items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/assets/images/header/newlogo2_conex.png"
              alt="Conex Engineering Logo"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
        {/* Desktop Nav and USA Contact */}
<div className="hidden lg:flex items-center gap-3 ml-auto">
  <Navbar />

  <div className="flex items-center">


            <a
              href="tel:+197696987434"
              className="flex items-center space-x-2 cursor-pointer text-white hover:text-[var(--color-primary)] transition"
              title="Call USA Office"
            >
              <img
                src="/assets/images/header/us-flag.svg"
                className="w-5 h-4 object-contain shadow-xs"
                alt="USA"
              />
              <span className="text-sm font-medium whitespace-nowrap">
                +1 (976) 9698 7434
              </span>
            </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="menu-btn"
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden text-white hover:text-[var(--color-primary)] p-2 focus:outline-none cursor-pointer transition"
            aria-label="Toggle Mobile Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <MobileMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />
      </nav>
    </header>
  );
};
