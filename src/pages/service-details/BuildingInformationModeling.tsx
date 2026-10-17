import React from 'react';
import { Seo } from '../../components/common/Seo';

export const BuildingInformationModeling: React.FC = () => {
  return (
    <>
      <Seo
        title="Building Information Modeling (BIM) for Structural Steel | Conex Engineering"
        description="Integrated 3D BIM services for structural steel enabling smarter collaboration, early clash detection, and optimized steel construction workflows."
        canonicalUrl="https://conexengineering.com/service/building-Information-modeling"
      />

      {/* Top Section */}
      <section className="w-full">
        {/* Top Full-Width Image */}
        <div className="w-full h-[300px] md:h-[450px] overflow-hidden">
          <img
            src="/assets/images/service/bim/building-information-modeling.png"
            alt="BIM for Structural Steel"
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
            BIM for Structural Steel – Smarter <br />
            Coordination. Seamless Execution.
          </h2>
          <p
            className="text-gray-700 text-sm md:text-lg max-w-4xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            At Conex Engineering, we offer integrated Building Information Modeling
            (BIM) services to enable smarter collaboration, reduce conflicts,
            and optimize steel construction workflows. Our BIM-ready models are
            created to ensure every connection, member, and detail aligns with
            fabrication and erection goals, while supporting multi-disciplinary
            coordination across trades.
          </p>
        </div>
      </section>

      {/* What We Offer Under BIM Services */}
      <section className="py-14 px-4 md:px-12 bg-[var(--color-dark)] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 order-2 md:order-1">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              What We Offer Under <br />
              BIM Services
            </h2>
            <div
              className="text-sm md:text-lg space-y-3"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div>
                <ul className="list-disc list-inside font-semibold text-yellow-400">
                  <li>3D Structural Steel Modeling</li>
                </ul>
                <p className="text-gray-300 ml-5 mt-1">
                  Comprehensive modeling of structural steel elements
                  (columns, beams, braces, embeds, stairs, rails, joists,
                  decks).
                </p>
              </div>

              <div>
                <ul className="list-disc list-inside font-semibold text-yellow-400">
                  <li>Clash Detection Support</li>
                </ul>
                <p className="text-gray-300 ml-5 mt-1">
                  Coordinate with MEP, concrete, and architectural models to
                  identify and resolve interface conflicts.
                </p>
              </div>

              <div>
                <ul className="list-disc list-inside font-semibold text-yellow-400">
                  <li>BIM Coordination Services</li>
                </ul>
                <p className="text-gray-300 ml-5 mt-1">
                  Participate in federated model reviews and respond to
                  coordination issues in Navisworks or equivalent platforms.
                </p>
              </div>

              <div>
                <ul className="list-disc list-inside font-semibold text-yellow-400">
                  <li>LOD 300 / 350 / 400 Models</li>
                </ul>
                <p className="text-gray-300 ml-5 mt-1">
                  Produce models with precise levels of detail as required by
                  project phase or contract.
                </p>
              </div>

              <div>
                <ul className="list-disc list-inside font-semibold text-yellow-400">
                  <li>Model-Based Quantity Take-Offs (QTO)</li>
                </ul>
                <p className="text-gray-300 ml-5 mt-1">
                  Extract accurate material quantities directly from the BIM
                  model for estimation or procurement.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <img
              src="/assets/images/service/bim/bim-services.png"
              alt="bim services"
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
              src="/assets/images/service/bim/tools.png"
              alt="Tools"
              className="w-full max-w-lg h-auto object-contain rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            />
          </div>
          <div
            className="space-y-4"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1e1e1e]">
              Tools We Use
            </h2>
            <div className="text-sm md:text-lg">
              <ul className="list-disc list-inside space-y-3 text-gray-800 leading-relaxed">
                <li>Tekla Structures</li>
                <li>Revit (on request)</li>
                <li>Navisworks Manage</li>
                <li>AutoCAD Plant 3D (where applicable)</li>
              </ul>
              <p className="mt-8 text-gray-600 text-base">
                All models are shared through secure channels or CDEs
                (Common Data Environments) as per client preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why BIM with Conex Engineering? */}
      <section className="py-14 px-4 md:px-12 bg-[var(--color-dark)] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 space-y-4">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Why BIM with <br />
              Conex Engineering?
            </h2>
            <ul
              className="list-disc list-inside text-sm md:text-lg space-y-3 text-gray-300 leading-relaxed"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <li>Early clash detection avoids costly on-site changes</li>
              <li>Supports fabrication from a single source of truth</li>
              <li>Improves coordination with other trades and contractors</li>
              <li>
                Enhances scheduling and material management through accurate
                quantities
              </li>
              <li>Supports digital workflows from model to machine (M2M)</li>
            </ul>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src="/assets/images/service/bim/person-working.png"
              alt="person working on BIM"
              className="w-full max-w-lg h-auto object-contain rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </section>

      {/* Project Suitability */}
      <section className="py-14 px-4 md:px-12 bg-white text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src="/assets/images/service/bim/project-sustainability.png"
              alt="Project Sustainability"
              className="w-full max-w-lg h-auto object-contain rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            />
          </div>
          <div
            className="space-y-4 my-auto"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1e1e1e]">
              Project Suitability
            </h2>
            <div className="text-sm md:text-lg space-y-3">
              <p className="font-semibold text-gray-900">Ideal for:</p>
              <ul className="list-disc list-inside text-sm md:text-lg space-y-3 text-gray-800 leading-relaxed">
                <li>Complex commercial or industrial steel structures</li>
                <li>
                  Projects with multiple stakeholders needing BIM coordination
                </li>
                <li>
                  Pre-construction planning and design-assist delivery models
                </li>
                <li>EPC projects with phased steel detailing requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
