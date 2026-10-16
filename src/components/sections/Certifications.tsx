import React from 'react';

export const Certifications: React.FC = () => {
  return (
    <section className="bg-white text-[var(--color-dark)] px-6 py-16">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        {/* Heading */}
        <div>
          <h2
            className="text-2xl md:text-3xl font-bold"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            Certifications & Standards
          </h2>
          <p
            className="mt-2 text-sm text-gray-600"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            At Conex, every output is compliant with:
          </p>
        </div>

        {/* Logos Block */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center border border-gray-200 rounded-lg shadow-2xl py-10 px-4"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {/* AISC */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <img
              src="/assets/images/home/certification/aisc.png"
              alt="AISC Logo"
              className="w-40 h-auto object-contain"
            />
            <p className="text-sm font-medium text-center text-gray-800">
              American Institute of Steel<br />Construction (AISC)
            </p>
          </div>

          {/* CISC */}
          <div className="flex flex-col items-center justify-center space-y-4 border-t md:border-t-0 md:border-l border-gray-300 pt-6 md:pt-0 md:pl-6">
            <img
              src="/assets/images/home/certification/cisa.png"
              alt="CISC Logo"
              className="w-80 h-auto object-contain"
            />
            <p className="text-sm font-medium text-center text-gray-800">
              Canadian Institute of Steel<br />Construction (CISC)
            </p>
          </div>
        </div>

        {/* Bottom Note */}
        <p
          className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          We maintain consistency in detailing, structure, and standards
          output using software and practices aligned with global standards.
        </p>
      </div>
    </section>
  );
};
