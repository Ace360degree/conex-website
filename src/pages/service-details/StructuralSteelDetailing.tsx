import React from 'react';
import { Seo } from '../../components/common/Seo';
import { FeaturedProjectsCarousel } from '../../components/sections/FeaturedProjectsCarousel';

export const StructuralSteelDetailing: React.FC = () => {
  return (
    <>
      <Seo
        title="Structural Steel Detailing Services | Conex"
        description="Comprehensive structural steel detailing services transforming design intent into constructible, shop-ready deliverables. Over 15 years of industry experience."
        canonicalUrl="https://innosteelix.com/service/structural-steel-detailing"
      />

      {/* Top Section */}
      <section className="w-full">
        {/* Top Full-Width Image */}
        <div className="w-full h-[300px] md:h-[450px] overflow-hidden">
          <img
            src="/assets/images/service/ssd/steel-rod.png"
            alt="Steel Structure"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="bg-white text-center px-6 py-12">
          <h2
            className="text-2xl md:text-4xl font-bold mb-4 text-[#1e1e1e]"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            Structural Steel Detailing – Accurate, <br />
            Code-Compliant &amp; Fabrication-Ready
          </h2>
          <p
            className="text-gray-700 text-sm md:text-lg max-w-4xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            Conex provides comprehensive structural steel detailing
            services that transform design intent into constructible, shop-ready
            deliverables. With over 15 years of experience, our team produces
            precise drawings for fabrication, erection, and coordination —
            helping fabricators, contractors, and engineers build better with
            clarity and confidence.
          </p>
        </div>
      </section>

      {/* Featured Projects Carousel with Quality Banner */}
      <div className="border-t border-b border-gray-800 bg-[#1e1e1e]">
        <FeaturedProjectsCarousel />
        <div className="max-w-7xl mx-auto flex justify-end px-4 pb-6">
          <div
            className="bg-[var(--color-primary)] py-2 border rounded-l-2xl text-sm px-4 text-[var(--color-dark)] font-medium max-w-xl shadow"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <p>
              All outputs are reviewed through a quality control checklist to
              ensure dimensional accuracy, field-friendliness, and compliance
              with project specifications.
            </p>
          </div>
        </div>
      </div>

      {/* Software & File Formats We Support */}
      <section className="bg-white py-12 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Text Column */}
          <div>
            <h2
              className="text-3xl font-bold mb-4 text-[#1e1e1e]"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Software &amp; File<br />Formats We Support
            </h2>
            <p
              className="text-gray-700 mb-4 text-base"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              We work with industry-leading platforms and deliver outputs in
              multiple formats:
            </p>
            <ul
              className="list-disc list-inside space-y-2 text-gray-800 text-base"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <li>
                <strong>Software:</strong> Tekla Structures, AutoCAD, SDS/2
                (on request)
              </li>
              <li>
                <strong>Files:</strong> DWG, DXF, NC1, KSS, PDF, TIFF, DWF,
                DSTV (and all latest files)
              </li>
            </ul>
          </div>

          {/* Image Column */}
          <div
            className="flex justify-center"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <img
              src="/assets/images/service/ssd/mobile-docs.png"
              alt="Software and File Formats"
              className="w-full max-w-sm h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Benefits of Our Steel Detailing Approach */}
      <section className="bg-[#1e1e1e] text-white py-12 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Image */}
          <div>
            <img
              src="/assets/images/service/ssd/person-working.png"
              alt="Steel Detailing Benefits"
              className="w-full h-auto rounded-xl object-cover shadow-lg"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2
              className="text-3xl font-bold mb-4"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Benefits of Our Steel Detailing Approach
            </h2>
            <ul
              className="list-disc list-inside space-y-3 text-gray-300 text-base leading-relaxed"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <li>Reduced fabrication errors and rework</li>
              <li>
                Faster shop floor execution due to clear, constructible
                drawings
              </li>
              <li>Optimized use of materials through precise take-offs</li>
              <li>Compatibility with CNC and fabrication workflows</li>
              <li>Field-friendly markups for erection teams</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Standards We Follow */}
      <section className="bg-white text-[var(--color-dark)] px-6 py-16">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          {/* Heading */}
          <div className="space-y-4">
            <h2
              className="text-2xl md:text-3xl font-bold"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Standards We Follow
            </h2>
            <p
              className="mt-2 text-md text-gray-600"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              All detailing is done in strict alignment with:
            </p>
            <p
              className="text-gray-700"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              We maintain consistency in detail, structure, and drawing output
              using software and practices aligned with global standards.
            </p>
          </div>

          {/* Logos Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center border border-gray-200 rounded-lg shadow-2xl py-10 px-4">
            {/* AISC */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <img
                src="/assets/images/home/certification/aisc.png"
                alt="AISC Logo"
                className="w-40 h-auto"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              />
              <p
                className="text-sm font-medium text-center"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                American Institute of Steel<br />Construction (AISC)
              </p>
            </div>

            {/* CISC */}
            <div className="flex flex-col items-center justify-center space-y-4 border-t md:border-t-0 md:border-l border-gray-300 pt-6 md:pt-0 md:pl-6">
              <img
                src="/assets/images/home/certification/cisa.png"
                alt="CISC Logo"
                className="w-80 h-auto"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              />
              <p
                className="text-sm font-medium text-center"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                Canadian Institute of Steel<br />Construction (CISC)
              </p>
            </div>
          </div>

          {/* Bottom Note */}
          <p
            className="text-lg text-gray-500 font-semibold max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            We are dedicated to delivering zero-error detailing ready for CNC
            processing and site execution.
          </p>
        </div>
      </section>
    </>
  );
};
