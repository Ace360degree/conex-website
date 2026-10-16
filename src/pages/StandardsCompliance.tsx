import React from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/common/Seo';

export const StandardsCompliance: React.FC = () => {
  return (
    <>
      <Seo
        title="Committed to AISC & CISC Compliance | Conex"
        description="Built to global steel standards. Specialized in structural steel detailing, connection design, and drafting solutions supporting AISC and CISC standards."
        canonicalUrl="https://innosteelix.com/standards-compliance"
      />

      {/* Hero Banner */}
      <section className="relative w-full h-[600px] md:h-[500px]">
        {/* Background Image */}
        <img
          src="/assets/images/standards/steel-rods.png"
          alt="Steel rod"
          className="w-full h-full object-cover"
        />

        {/* Content Positioned Left */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto px-4 md:px-12 w-full">
            <div className="w-full md:w-1/2 text-white">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 shadow-2xl"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                Committed to AISC &amp; CISC Compliance – Built to Global Steel
                Standards
              </h2>

              <p
                className="mb-4 text-sm md:text-base text-gray-200 leading-relaxed shadow-2xl"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                Specialized in structural steel detailing, connection
                design, and drafting solutions that support fabrication
                efficiency and construction integrity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/projects"
                  className="bg-yellow-400 text-black px-6 py-2 text-sm font-semibold rounded-full hover:bg-yellow-300 transition text-center"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  View Our Projects
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-black px-6 py-2 text-sm font-semibold rounded-full hover:bg-gray-100 transition text-center"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  Request A Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AISC Compliance (USA Standards) */}
      <section className="flex flex-col md:flex-row items-start md:items-center py-8 bg-white text-black">
        {/* Left: AISC Logo */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start px-6">
          <img
            src="/assets/images/standards/aisc.png"
            alt="AISC Logo"
            className="h-auto max-h-72 object-contain"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 pl-6 pr-4">
          <h2
            className="text-2xl md:text-4xl font-bold mb-4"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            AISC Compliance<br />
            <span className="font-normal">(USA Standards)</span>
          </h2>

          <p
            className="mb-4 text-xl font-semibold"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            We follow the AISC Manual of Steel Construction and related
            specifications for:
          </p>

          <ul
            className="list-disc pl-5 space-y-2 mb-6 text-lg"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <li>
              Load and resistance factor design (LRFD) &amp; allowable strength
              design (ASD)
            </li>
            <li>Standard connection detailing and tolerances</li>
            <li>Shop and field welding guidelines</li>
            <li>Bolt spacing, hole clearances, and base plate geometry</li>
            <li>
              Fabrication and erection notes structured as per AISC guidelines
            </li>
          </ul>

          <div
            className="bg-[var(--color-primary)] text-[var(--color-black)] p-4 rounded-l-xl"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <p className="text-lg font-semibold">
              All shop drawings, erection plans, and connection calculations
              meet AISC formatting and documentation practices for seamless
              consultant approval and on-site application.
            </p>
          </div>
        </div>
      </section>

      {/* CISC Compliance (Canada Standards) */}
      <section className="flex flex-col-reverse md:flex-row items-start md:items-center py-8 bg-[var(--color-dark)] text-[var(--color-white)]">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2">
          <div className="pl-6 pr-4">
            <h2
              className="text-2xl md:text-4xl font-bold mb-4"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              CISC Compliance<br />
              <span className="font-normal">(Canada Standards)</span>
            </h2>

            <p
              className="text-xl font-semibold mb-4"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              For projects in Canada or governed by Canadian regulations, our
              team ensures:
            </p>

            <ul
              className="list-disc pl-5 space-y-2 mb-6 text-lg"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <li>Alignment with the CISC Handbook of Steel Construction</li>
              <li>
                Conformance with National Building Code of Canada (NBCC)
              </li>
              <li>Use of metric or imperial detailing units as required</li>
              <li>
                Accurate structural component design for seismic and wind
                conditions
              </li>
              <li>
                Proper interpretation of detailing notes and code symbols as
                per CISC guidelines
              </li>
            </ul>
          </div>

          <div
            className="bg-[var(--color-primary)] text-[var(--color-black)] p-4 rounded-r-lg mr-4 mt-6"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <p className="text-lg font-semibold">
              CISC compliance is integrated into our detailing workflows to
              maintain project approval timelines and local regulatory
              adherence.
            </p>
          </div>
        </div>

        {/* Right: CISC Logo */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-center px-6">
          <img
            src="/assets/images/standards/cisca.png"
            alt="CISC Logo"
            className="h-auto max-h-72 object-contain"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          />
        </div>
      </section>

      {/* Detailing & Checking Best Practice */}
      <section className="flex flex-col md:flex-row items-start md:items-center py-8 bg-white text-black">
        {/* Left: Best Practice Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-center px-6">
          <img
            src="/assets/images/standards/best-practice.png"
            alt="Detailing Best Practice"
            className="h-auto max-h-80 w-auto rounded shadow-md object-contain"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 pl-6 pr-4">
          <h2
            className="text-2xl md:text-4xl font-bold mb-4"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            Detailing &amp; Checking <br />
            <span className="font-normal">Best Practice</span>
          </h2>

          <p
            className="mb-4 text-xl font-semibold"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            We maintain a robust internal QA/QC system that ensures:
          </p>

          <ul
            className="list-disc pl-5 space-y-2 mb-6 text-lg"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <li>Double-layer checking of all drawings</li>
            <li>Use of pre-approved connection libraries</li>
            <li>Clear bolt markings, edge distances, and weld types</li>
            <li>Fabricator-specific standards incorporated (if provided)</li>
            <li>
              Constructibility review for field logic and bolt accessibility
            </li>
            <li>All revisions tracked with change logs and approval notes</li>
          </ul>

          <div
            className="bg-[var(--color-primary)] text-[var(--color-black)] p-4 rounded-l-xl"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <p className="text-lg font-semibold">
              All shop drawings, erection plans, and connection calculations
              meet AISC formatting and documentation practices for seamless
              consultant approval and on-site application
            </p>
          </div>
        </div>
      </section>

      {/* Software & Tools */}
      <section className="bg-[var(--color-dark)] text-[var(--color-white)] p-6 md:p-12">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2
            className="text-2xl md:text-4xl font-bold mb-2"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            Use of Industry-Leading<br />Software &amp; Tools
          </h2>
          <p
            className="text-sm md:text-xl text-gray-300"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            To maintain consistency, speed, and compatibility with fabrication
            systems, we use:
          </p>
        </div>

        {/* Software Icons Card */}
        <div className="bg-white text-black rounded-lg p-6 md:p-8 max-w-6xl mx-auto shadow-xl">
          <div className="flex flex-col md:flex-row justify-around items-center gap-6">
            {/* Tekla */}
            <div className="flex items-center justify-center px-4 py-2 w-full md:w-1/4">
              <img
                src="/assets/images/standards/tekla.png"
                alt="Tekla Structures"
                className="max-h-16 w-auto object-contain"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              />
            </div>

            {/* Divider */}
            <div className="hidden md:block h-28 w-px bg-gray-300"></div>

            {/* AutoCAD */}
            <div className="flex items-center justify-center px-4 py-2 w-full md:w-1/4">
              <img
                src="/assets/images/standards/auto-card.png"
                alt="AutoCAD"
                className="max-h-16 w-auto object-contain"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              />
            </div>

            {/* Divider */}
            <div className="hidden md:block h-28 w-px bg-gray-300"></div>

            {/* Navisworks / Revit */}
            <div className="flex items-center justify-center px-4 py-2 w-full md:w-1/4">
              <img
                src="/assets/images/standards/navisworks-autodesk.png"
                alt="Navisworks and Revit"
                className="max-h-16 w-auto object-contain"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              />
            </div>

            {/* Divider */}
            <div className="hidden md:block h-28 w-px bg-gray-300"></div>

            {/* Excel / MathCAD */}
            <div className="flex items-center justify-center px-4 py-2 w-full md:w-1/4">
              <img
                src="/assets/images/standards/math-card.png"
                alt="Excel / MathCAD"
                className="max-h-16 w-auto object-contain"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              />
            </div>
          </div>
        </div>

        {/* Description Rows */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center text-sm my-8">
          <div className="py-2">
            <p
              className="font-semibold mb-1 text-xl text-yellow-400"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Tekla Structures
            </p>
            <p
              className="text-gray-300 text-base"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              for accurate 3D modeling, GA drawings, and CNC outputs
            </p>
          </div>
          <div className="py-2">
            <p
              className="font-semibold mb-1 text-xl text-yellow-400"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              AutoCAD
            </p>
            <p
              className="text-gray-300 text-base"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              for clean DWG-based detailing when required
            </p>
          </div>
          <div className="py-2">
            <p
              className="font-semibold mb-1 text-xl text-yellow-400"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Navisworks
            </p>
            <p
              className="text-gray-300 text-base"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              for BIM coordination and model integration
            </p>
          </div>
          <div className="py-2">
            <p
              className="font-semibold mb-1 text-xl text-yellow-400"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Excel
            </p>
            <p
              className="text-gray-300 text-base"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              for custom connection calculations
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <p
          className="text-center text-lg text-gray-400 max-w-4xl mx-auto"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          Our outputs include: DWG, DXF, NC1, KSS, PDF, DSTV, and more, making us
          fully compatible with global shop floors and CNC environments.
        </p>
      </section>
    </>
  );
};
