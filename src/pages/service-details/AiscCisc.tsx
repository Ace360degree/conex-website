import React from 'react';
import { Seo } from '../../components/common/Seo';

export const AiscCisc: React.FC = () => {
  return (
    <>
      <Seo
        title="AISC & CISC Code-Compliant Steel Detailing | Conex"
        description="Code-compliant steel detailing built on AISC (USA) and CISC (Canada) standards for industrial, commercial, and infrastructure structural projects."
        canonicalUrl="https://innosteelix.com/service/aisc-cisc"
      />

      {/* Top Section */}
      <section className="w-full">
        {/* Top Full-Width Image */}
        <div className="w-full h-[300px] md:h-[450px] overflow-hidden">
          <img
            src="/assets/images/service/aisc-cisc/aisc-cisc.png"
            alt="AISC and CISC steel detailing"
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
            Code-Compliant Steel Detailing – <br />
            Built on AISC &amp; CISC Standards
          </h2>
          <p
            className="text-gray-700 text-sm md:text-lg max-w-4xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            At Conex, code compliance isn’t optional — it’s a core
            principle. All our steel detailing, connection design, and drawing
            production processes are aligned with the latest standards from the
            American Institute of Steel Construction (AISC) and the Canadian
            Institute of Steel Construction (CISC). Whether your project is in
            the early design stage or nearing fabrication, we ensure that every
            drawing, calculation, and model meets the industry’s most trusted
            structural steel codes.
          </p>
        </div>
      </section>

      {/* What We Follow */}
      <section className="py-14 px-4 md:px-12 bg-[var(--color-dark)] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 order-2 md:order-1">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              What We Follow
            </h2>
            <div
              className="text-sm md:text-lg space-y-4"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div>
                <h3 className="font-semibold text-xl text-yellow-400 flex items-center mb-2">
                  <i className="fa-solid fa-diamond mr-2 text-xs text-[#0c5d9b]"></i>
                  AISC Compliance
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
                  <li>Conformance with the AISC Manual of Steel Construction</li>
                  <li>
                    Adherence to ASD/LRFD methods, tolerances, and fabrication
                    guidelines
                  </li>
                  <li>
                    Proper use of standard connections, plate sizing, bolt
                    spacing, and hole clearances
                  </li>
                  <li>
                    Alignment with erection procedures and safety factors
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-yellow-400 flex items-center mb-2">
                  <i className="fa-solid fa-diamond mr-2 text-xs text-[#0c5d9b]"></i>
                  CISC Compliance
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
                  <li>
                    CISC Handbook-based detailing for Canadian structural
                    projects
                  </li>
                  <li>Metric and imperial system adaptability</li>
                  <li>
                    Accurate beam/girder connections, welding specifications, and
                    bolt charts
                  </li>
                  <li>
                    National Building Code of Canada (NBCC) references as
                    required
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <img
              src="/assets/images/service/aisc-cisc/cisc.png"
              alt="CISC and AISC"
              className="w-full max-w-xl h-auto object-contain rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </section>

      {/* How It Reflects in Our Work */}
      <section className="py-14 px-4 md:px-12 bg-white text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src="/assets/images/service/aisc-cisc/reflects-in-work.png"
              alt="Reflects in work"
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
              How It Reflects in Our Work
            </h2>
            <div className="text-sm md:text-lg">
              <ul
                className="list-disc list-inside text-sm md:text-lg space-y-3 text-gray-800 leading-relaxed"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <li>
                  Shop drawings prepared with compliant dimensions and tolerances
                </li>
                <li>
                  Connection designs adhering to code-driven limit states
                </li>
                <li>Material listings structured for fabrication accuracy</li>
                <li>
                  Field welding and bolting marked as per standard erection
                  procedures
                </li>
                <li>
                  Documentation prepared for submittal and consultant review
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Code Compliance Matters */}
      <section className="py-14 px-4 md:px-12 bg-[var(--color-dark)] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 space-y-4">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Why Code Compliance Matters
            </h2>
            <ul
              className="list-disc list-inside text-sm md:text-lg space-y-3 text-gray-300 leading-relaxed"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <li>
                Ensures alignment with fabrication and erection practices
              </li>
              <li>
                Reduces approval cycle delays from engineers or consultants
              </li>
              <li>Enhances safety and performance of the steel structure</li>
              <li>Improves quality control and traceability for audits</li>
              <li>
                Avoids costly rework or RFI escalation due to spec mismatches
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src="/assets/images/service/aisc-cisc/why-code-compilence-matters.png"
              alt="why code compliance matters"
              className="w-full max-w-lg h-auto object-contain rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </section>

      {/* Supported Project Types */}
      <section className="py-14 px-4 md:px-12 bg-white text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src="/assets/images/service/aisc-cisc/supported-projects.png"
              alt="Supported projects"
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
              Supported Project Types
            </h2>
            <div className="text-sm md:text-lg">
              <ul
                className="list-disc list-inside text-sm md:text-lg space-y-3 text-gray-800 leading-relaxed"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <li>Industrial Warehouses</li>
                <li>High-Rise Commercial Projects</li>
                <li>Institutional and Infrastructure Facilities</li>
                <li>Oil &amp; Gas and Power Plant Structures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
