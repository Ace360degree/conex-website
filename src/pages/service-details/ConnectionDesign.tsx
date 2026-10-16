import React from 'react';
import { Seo } from '../../components/common/Seo';

export const ConnectionDesign: React.FC = () => {
  return (
    <>
      <Seo
        title="Connection Design for Steel Structures | Conex"
        description="Safe, efficient, and code-compliant steel connection design services tailored to loading conditions, project constraints, AISC, and CISC standards."
        canonicalUrl="https://innosteelix.com/service/connection-design"
      />

      {/* Top Section */}
      <section className="w-full">
        {/* Top Full-Width Image */}
        <div className="w-full h-[300px] md:h-[450px] overflow-hidden">
          <img
            src="/assets/images/service/cd/connection-design.png"
            alt="Connection Design for Steel Structures"
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
            Connection Design for Steel Structures <br />
            – Safe, Efficient &amp; Code-Compliant
          </h2>
          <p
            className="text-gray-700 text-sm md:text-lg max-w-4xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            At Conex, we offer precise and reliable steel connection
            design services that ensure structural integrity, fabrication
            feasibility, and code compliance. Our designs are tailored to your
            specific loading conditions, project constraints, and applicable
            standards — helping reduce coordination delays and fabrication
            issues.
          </p>
        </div>
      </section>

      {/* What's Included in Our Connection Design Services */}
      <section className="py-14 px-4 md:px-12 bg-[var(--color-dark)] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div
            className="space-y-4 order-2 md:order-1"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What’s Included in Our <br />
              Connection Design Services
            </h2>
            <div className="text-sm md:text-lg space-y-3">
              <div>
                <ul className="list-disc list-inside font-semibold text-yellow-400">
                  <li>Moment, Shear &amp; Axial Connection Calculations</li>
                </ul>
                <p className="text-gray-300 ml-5 mt-1">
                  Design of bolted or welded connections as per load paths and
                  member types.
                </p>
              </div>

              <div>
                <ul className="list-disc list-inside font-semibold text-yellow-400">
                  <li>End Plate, Splice, Clip Angle &amp; Base Plate Designs</li>
                </ul>
                <p className="text-gray-300 ml-5 mt-1">
                  Engineering inputs with detailing-ready sketches and markups.
                </p>
              </div>

              <div>
                <ul className="list-disc list-inside font-semibold text-yellow-400">
                  <li>Design Calculations with Summary Reports</li>
                </ul>
                <p className="text-gray-300 ml-5 mt-1">
                  Structured output including formulas, codes used, and
                  assumptions.
                </p>
              </div>

              <div>
                <ul className="list-disc list-inside font-semibold text-yellow-400">
                  <li>Connection Optimization</li>
                </ul>
                <p className="text-gray-300 ml-5 mt-1">
                  Designs that minimize fabrication cost and field welding
                  wherever possible.
                </p>
              </div>

              <div>
                <ul className="list-disc list-inside font-semibold text-yellow-400">
                  <li>Design Integration with Detailing</li>
                </ul>
                <p className="text-gray-300 ml-5 mt-1">
                  Seamless integration into shop drawings and erection plans
                  for constructible outcomes.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <img
              src="/assets/images/service/cd/purple-steel-rod.png"
              alt="connection design"
              className="w-full max-w-xl h-auto object-contain rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </section>

      {/* Tools We Use */}
      <section className="py-14 px-4 md:px-12 bg-white text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src="/assets/images/service/cd/building-blue-print.png"
              alt="Tools"
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
              Tools We Use
            </h2>
            <div className="text-sm md:text-lg">
              <ul
                className="list-disc list-inside text-sm md:text-lg space-y-3 text-gray-800 leading-relaxed"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <li>Tekla Structures</li>
                <li>Revit (on request)</li>
                <li>Navisworks Manage</li>
                <li>AutoCAD Plant 3D (where applicable)</li>
              </ul>
              <div
                className="mt-6 bg-[var(--color-primary)] px-4 rounded-l-2xl font-semibold py-3 text-black text-sm md:text-base shadow"
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <p>
                  All models are shared through secure channels or CDEs
                  (Common Data Environments) as per client preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Connections We Handle */}
      <section className="py-14 px-4 md:px-12 bg-[var(--color-dark)] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 space-y-4">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Types of Connections <br />
              We Handle
            </h2>
            <ul
              className="list-disc list-inside text-sm md:text-lg space-y-3 text-gray-300 leading-relaxed"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <li>Beam-to-beam &amp; beam-to-column connections</li>
              <li>Column splices and base plate designs</li>
              <li>Bracing connections</li>
              <li>Moment-resisting frames</li>
              <li>Stair and handrail support connections</li>
              <li>Heavy industrial and custom node designs</li>
            </ul>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src="/assets/images/service/cd/steel-connection.png"
              alt="steel connection"
              className="w-full max-w-lg h-auto object-contain rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </section>

      {/* Design Standards */}
      <section className="py-14 px-4 md:px-12 bg-white text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src="/assets/images/service/cd/aisc.png"
              alt="AISC Standards"
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
              Design Standards
            </h2>
            <div className="text-sm md:text-lg">
              <ul
                className="list-disc list-inside text-sm md:text-lg space-y-3 text-gray-800 leading-relaxed"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <li>AISC Manual of Steel Construction</li>
                <li>CISC Handbook of Steel Construction</li>
                <li>
                  Client-specific or project-specific standards (on request)
                </li>
              </ul>
              <div
                className="mt-6 bg-[var(--color-primary)] px-4 rounded-l-2xl font-semibold py-3 text-black text-sm md:text-base shadow"
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <p>
                  Final approvals remain with the licensed Engineer of Record
                  (EOR). We support and accelerate the engineering + detailing
                  cycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Partnering with Conex */}
      <section className="py-14 px-4 md:px-12 bg-[var(--color-dark)] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 space-y-4">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Benefits of Partnering <br />
              with Conex
            </h2>
            <ul
              className="list-disc list-inside text-sm md:text-lg space-y-3 text-gray-300 leading-relaxed"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <li>Reduced RFI cycles due to clear connection logic</li>
              <li>Code-compliant, fabrication-friendly designs</li>
              <li>
                Collaboration with client’s structural engineer when needed
              </li>
              <li>Clear markups and design summaries for transparency</li>
            </ul>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src="/assets/images/service/cd/benifits.png"
              alt="benefits"
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
