import React from 'react';
import { Link } from 'react-router-dom';
import { FooterContactForm } from './FooterContactForm';
import { quickLinks, footerServiceLinks, legalLinks } from '../../data/navigationData';

export const Footer: React.FC = () => {
  return (
    <>
      {/* Section One: Contact Card CTA Section */}
      <section className="bg-[var(--color-white)] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-[var(--color-primary)] rounded-2xl shadow-2xl p-6 sm:p-8 flex flex-col-reverse md:flex-row gap-8">
          {/* Left Text Block */}
          <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-3 text-[var(--color-dark)] leading-tight">
              Let’s Discuss Your <br className="hidden sm:block" />
              Next Project
            </h2>
            <p className="text-base mb-6 text-[var(--color-dark)]/90">
              Whether you’re a fabricator, engineer, or project manager — we’re ready to collaborate.
            </p>
          </div>

          {/* Right Form Section */}
          <div className="md:w-1/2 bg-white p-5 sm:p-6 rounded-lg shadow text-[var(--color-dark)]">
            <FooterContactForm />
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-[var(--color-dark)] text-[var(--color-white)] py-12 pl-6 pr-0 overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Logo */}
          <div className="lg:w-1/5 flex justify-center lg:justify-center items-start">
            <Link to="/">
              <img
                src="/assets/images/footer/new_conexlogo.png"
                alt="Conex Logo"
                className="h-40 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Links Section: 3-column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 flex-1 px-4 lg:px-0">
            {/* Quick Links */}
            <div className="md:border-r border-gray-700 md:pr-6">
              <h3 className="font-semibold mb-3 text-xl text-white">Quick Links</h3>
              <ul className="space-y-1.5 text-md text-gray-300">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="hover:underline hover:text-[var(--color-primary)] transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div className="md:border-r border-gray-700 md:pr-6">
              <h3 className="font-semibold mb-3 text-xl text-white">Services</h3>
              <ul className="space-y-1.5 text-md text-gray-300">
                {footerServiceLinks.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="hover:underline hover:text-[var(--color-primary)] transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Terms & Condition */}
            <div className="sm:pr-6">
              <h3 className="font-semibold mb-3 text-xl text-white">Terms & Condition</h3>
              <ul className="space-y-1.5 text-md text-gray-300">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="hover:underline hover:text-[var(--color-primary)] transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info (Right Sidebar Card) */}
          <div className="bg-[var(--color-primary)] text-[var(--color-dark)] p-6 rounded-l-3xl w-full lg:w-1/4 space-y-3 text-md mt-10 lg:mt-0 shadow-lg">
            <h3 className="font-semibold mb-2 text-xl">Contact Info</h3>

            <p className="flex items-start gap-2 text-sm leading-snug">
              <img
                src="/assets/images/footer/india-location.svg"
                alt="India Office Location"
                className="w-4 h-4 mt-0.5 flex-shrink-0"
              />
              <span>India: Goregaon East, Mumbai</span>
            </p>

            <p className="flex items-start gap-2 text-sm leading-snug">
              <img
                src="/assets/images/footer/us-location.svg"
                alt="USA Representative Office Location"
                className="w-4 h-4 mt-0.5 flex-shrink-0"
              />
              <span>USA: Chicago, IL</span>
            </p>

            <p className="flex items-start gap-2 text-sm leading-snug">
              <img
                src="/assets/images/footer/phone-svg.svg"
                alt="Telephone"
                className="w-4 h-4 mt-0.5 flex-shrink-0"
              />
              <span>+91 9916001366 / +91 9833379941</span>
            </p>

            <p className="flex items-start gap-2 text-sm leading-snug">
              <img
                src="/assets/images/footer/email-svg.svg"
                alt="Email"
                className="w-4 h-4 mt-0.5 flex-shrink-0"
              />
              <a href="mailto:suurabhii.sinha@innosteelix.com" className="underline hover:text-black">
                suurabhii.sinha@innosteelix.com
              </a>
            </p>

            <p className="flex items-start gap-2 text-sm leading-snug">
              <img
                src="/assets/images/footer/email-svg.svg"
                alt="Email"
                className="w-4 h-4 mt-0.5 flex-shrink-0"
              />
              <a href="mailto:mak@innosteelix.com" className="underline hover:text-black">
                mak@innosteelix.com
              </a>
            </p>

            <p className="flex items-start gap-2 text-sm leading-snug">
              <img
                src="/assets/images/footer/email-svg.svg"
                alt="Email"
                className="w-4 h-4 mt-0.5 flex-shrink-0"
              />
              <a href="mailto:Info@innosteelix.com" className="underline hover:text-black">
                Info@innosteelix.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
