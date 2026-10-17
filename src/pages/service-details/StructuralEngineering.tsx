import React from 'react';
import { Seo } from '../../components/common/Seo';

export const StructuralEngineering: React.FC = () => {
  return (
    <>
      <Seo
        title="Structural Engineering Support | Conex Engineering"
        description="Practical, design-aligned, and detailing-ready structural engineering support services bridging the gap between design and detailing."
        canonicalUrl="https://conexengineering.com/service/structural-engineering"
      />

      {/* Top Section */}
      <section className="w-full">
        {/* Top Full-Width Image */}
        <div className="w-full h-[300px] md:h-[450px] overflow-hidden">
          <img
            src="/assets/images/service/se/structure-engineering-bridge.png"
            alt="structure engineering bridge"
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
            Structural Engineering Support – Practical, <br />
            Design-Aligned, and Detailing-Ready
          </h2>
          <p
            className="text-gray-700 text-sm md:text-lg max-w-4xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            At Conex Engineering, our structural engineering support services bridge
            the gap between design and detailing. Whether it's verifying member
            capacities, resolving connection loads, or optimizing framing
            strategies, our engineering team works in sync with designers and
            fabricators to deliver constructible, code-compliant outcomes that
            reduce ambiguity and enhance project coordination.
          </p>
        </div>
      </section>

      {/* What We Offer Under Structural Engineering */}
      <section className="py-14 px-4 md:px-12 bg-[var(--color-dark)] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div
            className="space-y-4 order-2 md:order-1"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What We Offer Under <br />
              Structural Engineering
            </h2>
            <div className="text-sm md:text-lg space-y-3">
              <div>
                <ul className="list-disc list-inside font-semibold text-yellow-400">
                  <li>Preliminary Structural Reviews</li>
                </ul>
                <p className="text-gray-300 ml-5 mt-1">
                  Validate structural framing schemes before detailing begins.
                </p>
              </div>

              <div>
                <ul className="list-disc list-inside font-semibold text-yellow-400">
                  <li>Load Calculation Support</li>
                </ul>
                <p className="text-gray-300 ml-5 mt-1">
                  Assist in identifying point loads, tributary zones, and
                  support reactions.
                </p>
              </div>

              <div>
                <ul className="list-disc list-inside font-semibold text-yellow-400">
                  <li>Connection Load Verification</li>
                </ul>
                <p className="text-gray-300 ml-5 mt-1">
                  Provide or validate forces for moment, shear, and axial
                  connections.
                </p>
              </div>

              <div>
                <ul className="list-disc list-inside font-semibold text-yellow-400">
                  <li>Constructibility Feedback</li>
                </ul>
                <p className="text-gray-300 ml-5 mt-1">
                  Practical design inputs to reduce complexity in steel
                  fabrication and erection.
                </p>
              </div>

              <div>
                <ul className="list-disc list-inside font-semibold text-yellow-400">
                  <li>Engineer Coordination</li>
                </ul>
                <p className="text-gray-300 ml-5 mt-1">
                  Assist in RFI documentation and design clarification with
                  consultants or owners.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <img
              src="/assets/images/service/se/engineering-working.png"
              alt="engineering working"
              className="w-full max-w-xl h-auto object-contain rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </section>

      {/* How We Add Value */}
      <section className="py-14 px-4 md:px-12 bg-white text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src="/assets/images/service/se/two-person-working.png"
              alt="engineers collaborating"
              className="w-full max-w-lg h-auto object-contain rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            />
          </div>
          <div className="space-y-4">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#1e1e1e]"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              How We Add Value
            </h2>
            <div className="text-sm md:text-lg">
              <ul
                className="list-disc list-inside text-sm md:text-lg space-y-3 text-gray-800 leading-relaxed"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <li>Streamline design-to-detailing workflows</li>
                <li>Identify cost-saving alternatives in early stages</li>
                <li>
                  Enhance the coordination between architectural and structural
                  teams
                </li>
                <li>
                  Ensure member sizes and bracing align with realistic
                  construction practices
                </li>
                <li>Reduce errors due to unclear or generic design notes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Tools & Capabilities */}
      <section className="py-14 px-4 md:px-12 bg-[var(--color-dark)] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 space-y-4">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Our Tools &amp; Capabilities
            </h2>
            <ul
              className="list-disc list-inside text-sm md:text-lg space-y-3 text-gray-300 leading-relaxed"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <li>AutoCAD for framing validation</li>
              <li>Excel/MathCAD for structural calculations</li>
              <li>Tekla Tedds or STAAD inputs (if required or provided)</li>
            </ul>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src="/assets/images/service/se/tool-capability.png"
              alt="tools and capabilities"
              className="w-full max-w-lg h-auto object-contain rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </section>

      {/* Typical Use Cases */}
      <section className="py-14 px-4 md:px-12 bg-white text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src="/assets/images/service/se/use-cases.png"
              alt="use cases"
              className="w-full max-w-lg h-auto object-contain rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            />
          </div>
          <div className="space-y-4">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#1e1e1e]"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Typical Use Cases
            </h2>
            <div className="text-sm md:text-lg">
              <ul
                className="list-disc list-inside text-sm md:text-lg space-y-3 text-gray-800 leading-relaxed"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <li>
                  EPC firms seeking engineering + detailing coordination
                </li>
                <li>
                  Projects where structural drawings lack connection forces
                </li>
                <li>
                  Fabricators needing basic engineering input for
                  constructibility
                </li>
                <li>Value engineering in cost-constrained designs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance and Best Practices */}
      <section className="py-14 px-4 md:px-12 bg-[var(--color-dark)] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 space-y-4">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Compliance and Best Practices
            </h2>
            <p
              className="text-gray-300 leading-relaxed text-base md:text-lg"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              All structural inputs are aligned with applicable building
              codes, and final design decisions rest with the licensed
              engineer of record. We act as an extension to improve clarity,
              not to replace licensed design engineers.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src="/assets/images/service/se/best-practices.png"
              alt="best practices"
              className="w-full max-w-lg h-auto object-contain rounded-lg shadow-md"
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
