import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { servicesNavItems } from '../../data/navigationData';

export const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isServicesActive = location.pathname.startsWith('/service');

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setDropdownOpen(false);
  }, [location.pathname]);

  const leftColumnServices = servicesNavItems.slice(0, 6);
  const rightColumnServices = servicesNavItems.slice(6);

  return (
    <nav className="hidden md:flex space-x-7 items-center">
      <NavLink
        to="/about-us"
        className={({ isActive }) =>
          `text-base font-medium transition ${
            isActive ? 'text-[var(--color-primary)]' : 'text-white hover:text-[var(--color-primary)]'
          }`
        }
      >
        About Us
      </NavLink>

      {/* Services Dropdown */}
      <div
        ref={dropdownRef}
        className="relative flex items-center gap-1 group"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <NavLink
          to="/service"
          className={`text-base font-medium transition ${
            isServicesActive ? 'text-[var(--color-primary)]' : 'text-white hover:text-[var(--color-primary)]'
          }`}
        >
          Services
        </NavLink>

        <button
          type="button"
          onClick={() => setDropdownOpen((prev) => !prev)}
          className="text-[var(--color-primary)] cursor-pointer px-1 py-1 focus:outline-none flex items-center"
          aria-label="Toggle Services Menu"
          aria-expanded={dropdownOpen}
        >
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              dropdownOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {/* Dropdown Menu (Two Columns) */}
        <div
          className={`absolute left-0 top-full w-[480px] bg-[#040A0A] border border-gray-800 shadow-2xl rounded-md z-30 pt-3 pb-2 transition-all duration-200 mt-2 ${
            dropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
        >
          <div className="grid grid-cols-2 divide-x divide-gray-800">
            <div className="py-1">
              {leftColumnServices.map((service) => (
                <NavLink
                  key={service.href}
                  to={service.href}
                  className={({ isActive }) =>
                    `block px-4 py-2 text-sm transition ${
                      isActive
                        ? 'bg-[var(--color-primary)] text-black font-semibold'
                        : 'text-gray-200 hover:bg-[var(--color-primary)] hover:text-black'
                    }`
                  }
                >
                  {service.label}
                </NavLink>
              ))}
            </div>
            <div className="py-1">
              {rightColumnServices.map((service) => (
                <NavLink
                  key={service.href}
                  to={service.href}
                  className={({ isActive }) =>
                    `block px-4 py-2 text-sm transition ${
                      isActive
                        ? 'bg-[var(--color-primary)] text-black font-semibold'
                        : 'text-gray-200 hover:bg-[var(--color-primary)] hover:text-black'
                    }`
                  }
                >
                  {service.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>

      <NavLink
        to="/career"
        className={({ isActive }) =>
          `text-base font-medium transition ${
            isActive ? 'text-[var(--color-primary)]' : 'text-white hover:text-[var(--color-primary)]'
          }`
        }
      >
        Career
      </NavLink>

      <NavLink
        to="/projects"
        className={({ isActive }) =>
          `text-base font-medium transition ${
            isActive ? 'text-[var(--color-primary)]' : 'text-white hover:text-[var(--color-primary)]'
          }`
        }
      >
        Projects
      </NavLink>

      <NavLink
        to="/blogs"
        className={({ isActive }) =>
          `text-base font-medium transition ${
            isActive ? 'text-[var(--color-primary)]' : 'text-white hover:text-[var(--color-primary)]'
          }`
        }
      >
        Blog
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `text-base font-medium transition ${
            isActive ? 'text-[var(--color-primary)]' : 'text-white hover:text-[var(--color-primary)]'
          }`
        }
      >
        Contact Us
      </NavLink>
    </nav>
  );
};
