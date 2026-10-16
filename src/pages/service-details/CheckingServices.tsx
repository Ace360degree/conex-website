import React from 'react';
import { Seo } from '../../components/common/Seo';
import { FeaturedProjectsCarousel } from '../../components/sections/FeaturedProjectsCarousel';

export const CheckingServices: React.FC = () => {
  return (
    <>
      <Seo
        title="Steel Detailing Checking Services | Conex"
        description="Our checking services ensure every steel shop drawing and erection plan meets the highest standards of accuracy, compliance, and buildability per AISC/CISC standards."
        canonicalUrl="https://innosteelix.com/service/checking-services"
      />

      {/* Top Section */}
      <section className="w-full">
        {/* Top Full-Width Image */}
        <div className="w-full h-[300px] md:h-[450px] overflow-hidden">
          <img
            src="/assets/images/service/cs/workers-working.png"
            alt="workers working"
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
            Steel Detailing Checking Services –<br />
            Accuracy You Can Build On
          </h2>
          <p
            className="text-gray-700 text-sm md:text-lg max-w-4xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            At Conex, our checking services ensure that every steel shop
            drawing and erection plan meets the highest standards of accuracy,
            compliance, and buildability. Whether created in-house or by third
            parties, we thoroughly review drawings for dimensional correctness,
            adherence to design intent, and compliance with AISC/CISC standards
            — minimizing field errors and fabrication issues.
          </p>
        </div>
      </section>

      {/* Featured Projects Carousel */}
      <div className="border-t border-b border-gray-800 bg-[#1e1e1e]">
        <FeaturedProjectsCarousel />
      </div>

      {/* Our Checking Approach */}
      <section className="py-12 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 text-[var(--color-dark)] gap-8 items-center">
          <div className="space-y-4 order-2 md:order-1">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#1e1e1e]"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Our Checking Approach
            </h2>
            <div
              className="text-sm md:text-lg space-y-4"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div>
                <ul className="list-disc list-inside font-semibold text-gray-900">
                  <li>Two-Level Review Process</li>
                </ul>
                <p className="text-gray-700 ml-5 mt-1">
                  Primary checker + senior reviewer before drawings are
                  approved for submission.
                </p>
              </div>

              <div>
                <ul className="list-disc list-inside font-semibold text-gray-900">
                  <li>Code &amp; Client Specification Alignment</li>
                </ul>
                <p className="text-gray-700 ml-5 mt-1">
                  Ensure every detail meets AISC/CISC or any provided
                  client-specific standards.
                </p>
              </div>

              <div>
                <ul className="list-disc list-inside font-semibold text-gray-900">
                  <li>Error Flagging + Suggestions</li>
                </ul>
                <p className="text-gray-700 ml-5 mt-1">
                  Highlight critical inconsistencies and offer corrective
                  recommendations
                </p>
              </div>

              <div>
                <ul className="list-disc list-inside font-semibold text-gray-900">
                  <li>Mark-Up Support</li>
                </ul>
                <p className="text-gray-700 ml-5 mt-1">
                  Checked drawings returned with clearly annotated markups for
                  quick resolution
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <img
              src="/assets/images/service/cs/checking-approch.png"
              alt="checking-approach"
              className="w-full max-w-lg h-auto object-contain rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </section>

      {/* Deliverables You Can Expect */}
      <section className="bg-[var(--color-dark)] py-14 px-4 md:px-12 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src="/assets/images/service/cs/student-studing.png"
              alt="student studying"
              className="w-full max-w-lg h-auto object-contain rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            />
          </div>
          <div className="text-start space-y-4">
            <h2
              className="text-3xl md:text-4xl font-bold"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Deliverables You Can Expect
            </h2>
            <div className="py-2 text-sm md:text-lg">
              <ul
                className="list-disc list-inside space-y-4 text-gray-300"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <li>Checked PDF or DWG with annotations</li>
                <li>Mark-up report summarizing key issues</li>
                <li>Sheet-by-sheet review log (if required)</li>
                <li>Coordination calls to walk through complex comments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="text-black py-12 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="lg:w-1/2 order-2 md:order-1">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1e1e1e] mb-6"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Why It Matters
            </h2>
            <ul
              className="space-y-4 text-[#1e1e1e] text-sm md:text-lg list-disc list-inside"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <li>Reduces RFIs and fabrication rework</li>
              <li>Speeds up approval processes</li>
              <li>Increases confidence in drawing accuracy</li>
              <li>
                Supports fabricators and EPCs in quality compliance audits
              </li>
              <li>
                Ensures clear CIV, CDC code and material processing alignment
              </li>
            </ul>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 flex justify-center order-1 md:order-2">
            <img
              src="/assets/images/service/cs/satisfaction.png"
              alt="Satisfaction Survey on Laptop"
              className="rounded-xl shadow-lg w-full max-w-xl object-contain"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </section>
    </>
  );
};
