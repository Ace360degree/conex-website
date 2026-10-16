import React from 'react';
import { Link } from 'react-router-dom';

interface PageBannerProps {
  title: React.ReactNode;
  subtitle?: string;
  secondaryText?: string;
  imageSrc: string;
  imageAlt?: string;
  showCtas?: boolean;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
  secondaryText,
  imageSrc,
  imageAlt = 'Banner',
  showCtas = true,
}) => {
  return (
    <section className="relative w-full h-[600px] md:h-[500px] overflow-hidden">
      {/* Background Image */}
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay with Content Positioned Left */}
      <div className="absolute inset-0 bg-black/40 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">
          <div className="w-full md:w-1/2 text-white space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold shadow-2xl leading-tight">
              {title}
            </h1>

            {subtitle && (
              <p className="text-sm md:text-base text-gray-200 leading-relaxed shadow-2xl">
                {subtitle}
              </p>
            )}

            {secondaryText && (
              <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                {secondaryText}
              </p>
            )}

            {showCtas && (
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  to="/projects"
                  className="bg-yellow-400 text-black px-6 py-2.5 text-sm font-semibold rounded-full hover:bg-yellow-300 transition text-center shadow"
                >
                  View Our Projects
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-black px-6 py-2.5 text-sm font-semibold rounded-full hover:bg-gray-100 transition text-center shadow"
                >
                  Request A Quote
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
