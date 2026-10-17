import React from 'react';
import { Seo } from '../../components/common/Seo';

export const Disclaimer: React.FC = () => {
  return (
    <>
      <Seo
        title="Disclaimer | Conex Engineering"
        description="Read the website disclaimer for Conex Engineering regarding information accuracy, warranties, and limitation of liability."
        canonicalUrl="https://conexengineering.com/disclaimer"
      />

      {/* Hero Banner */}
      <section className="bg-[var(--color-dark)] text-white py-14 md:py-18 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-3xl md:text-5xl font-bold tracking-tight text-white"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            Disclaimer
          </h1>
          <div className="w-16 h-1 bg-[var(--color-primary)] mx-auto mt-4 rounded-full"></div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white text-[var(--color-dark)] py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-4xl mx-auto space-y-6"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            All information provided on this website is for general
            informational purposes only. While we aim to keep the content up to
            date and accurate, Conex Engineering makes no warranties of any kind
            regarding the completeness or reliability of the information.
          </p>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Conex Engineering shall not be held liable for any loss or damage
            resulting from reliance on this website’s content or linked
            third-party content.
          </p>
        </div>
      </section>
    </>
  );
};
