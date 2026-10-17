import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { servicesNavItems } from '../../data/navigationData';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [servicesExpanded, setServicesExpanded] = useState(false);

  if (!isOpen) return null;

  return (
    <div id="mobile-menu" className="md:hidden mt-4 pb-4 space-y-2 border-t border-gray-800 pt-3 bg-[#040A0A]">
      <NavLink
        to="/about-us"
        onClick={onClose}
        className={({ isActive }) =>
          `block text-base px-2 py-1 font-medium transition ${
            isActive ? 'text-[var(--color-primary)]' : 'text-white hover:text-[var(--color-primary)]'
          }`
        }
      >
        About Us
      </NavLink>

      {/* Mobile Services Accordion */}
      <div className="px-2">
        <div className="flex items-center justify-between">
          <NavLink
            to="/service"
            onClick={onClose}
            className="text-base font-medium text-white hover:text-[var(--color-primary)] transition"
          >
            Services
          </NavLink>
          <button
            type="button"
            onClick={() => setServicesExpanded((prev) => !prev)}
            className="text-[var(--color-primary)] p-1.5 focus:outline-none cursor-pointer"
            aria-label="Expand Services"
          >
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                servicesExpanded ? 'rotate-180' : ''
              }`}
            />
          </button>
        </div>

        {servicesExpanded && (
          <div id="mobile-services-dropdown" className="ml-4 mt-2 space-y-2 border-l-2 border-[var(--color-primary)] pl-3 py-1">
            {servicesNavItems.map((service) => (
              <NavLink
                key={service.href}
                to={service.href}
                onClick={onClose}
                className={({ isActive }) =>
                  `block text-sm py-1 transition ${
                    isActive ? 'text-[var(--color-primary)] font-semibold' : 'text-gray-300 hover:text-[var(--color-primary)]'
                  }`
                }
              >
                {service.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>

      <NavLink
        to="/career"
        onClick={onClose}
        className={({ isActive }) =>
          `block text-base px-2 py-1 font-medium transition ${
            isActive ? 'text-[var(--color-primary)]' : 'text-white hover:text-[var(--color-primary)]'
          }`
        }
      >
        Career
      </NavLink>

      <NavLink
        to="/projects"
        onClick={onClose}
        className={({ isActive }) =>
          `block text-base px-2 py-1 font-medium transition ${
            isActive ? 'text-[var(--color-primary)]' : 'text-white hover:text-[var(--color-primary)]'
          }`
        }
      >
        Projects
      </NavLink>

      <NavLink
        to="/blogs"
        onClick={onClose}
        className={({ isActive }) =>
          `block text-base px-2 py-1 font-medium transition ${
            isActive ? 'text-[var(--color-primary)]' : 'text-white hover:text-[var(--color-primary)]'
          }`
        }
      >
        Blog
      </NavLink>

      <NavLink
        to="/contact"
        onClick={onClose}
        className={({ isActive }) =>
          `block text-base px-2 py-1 font-medium transition ${
            isActive ? 'text-[var(--color-primary)]' : 'text-white hover:text-[var(--color-primary)]'
          }`
        }
      >
        Contact Us
      </NavLink>

      {/* Mobile Contact Information */}
      <div className="px-2 pt-3 mt-3 border-t border-gray-800 space-y-2">
        <a
          href="tel:+919833379941"
          className="flex items-center space-x-2 text-white hover:text-[var(--color-primary)] transition"
        >
          <img
            src="/assets/images/header/india-flag.svg"
            className="w-5 h-4 object-contain"
            alt="India"
          />
          <span className="text-sm font-medium">+91 9833379941 / +91 9916001366</span>
        </a>
        <a
          href="tel:+197696987434"
          className="flex items-center space-x-2 text-white hover:text-[var(--color-primary)] transition"
        >
          <img
            src="/assets/images/header/us-flag.svg"
            className="w-5 h-4 object-contain"
            alt="USA"
          />
          <span className="text-sm font-medium">+1 (976) 9698 7434</span>
        </a>
      </div>
    </div>
  );
};
