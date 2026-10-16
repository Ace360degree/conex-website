import React from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/common/Seo';

export const About: React.FC = () => {
  return (
    <>
      <Seo
        title="About Conex | Structural Steel Detailing & Connection Design"
        description="Founded in 2010, Conex has evolved into a trusted name in structural steel detailing and connection design, with 15+ years of industry experience across commercial and industrial construction projects."
        canonicalUrl="https://innosteelix.com/about-us"
      />

      {/* Hero Banner */}
      <section className="relative w-full h-[600px] md:h-[500px]">
        {/* Background Image */}
        <img
          src="/assets/images/about/team-discussing.png"
          alt="Our Journey"
          className="w-full h-full object-cover"
        />

        {/* Content Positioned Left */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto px-4 md:px-12 w-full">
            <div className="w-full md:w-1/2 text-white">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                Our Journey
              </h2>

              <p
                className="mb-4 text-sm md:text-base text-gray-200 leading-relaxed"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                Founded in 2010, Conex has evolved into a trusted name
                in structural steel detailing and connection design. What
                started as a compact, passionate detailing unit has grown
                into a structured team delivering to global standards, with
                15+ years of industry experience across commercial and
                industrial construction projects.
              </p>

              <p
                className="mb-6 text-sm md:text-base text-gray-200 leading-relaxed"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                We’ve successfully supported fabricators, EPC contractors,
                and consultants with precise shop drawings, intelligent
                connection designs, and end-to-end detailing support —
                always committed to cost efficiency and timely delivery.
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

      {/* Mission & Vision */}
      <section className="bg-[#1e1e1e] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch">
          {/* Mission */}
          <div className="flex flex-col items-center text-center">
            <div
              className="mb-6"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <img
                src="/assets/images/about/mission.svg"
                alt="Mission Icon"
                className="w-16 h-16"
              />
            </div>
            <h3
              className="text-2xl font-semibold mb-4"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Our Mission
            </h3>
            <p
              className="text-gray-300 text-sm leading-relaxed max-w-md"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              To provide precise, value-optimized, and constructible steel
              detailing services that enhance our clients' fabrication
              efficiency and project outcomes.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:flex justify-center">
            <div
              className="w-px bg-white"
              style={{ height: '100%', minHeight: '100%' }}
            ></div>
          </div>

          {/* Vision */}
          <div className="flex flex-col items-center text-center">
            <div
              className="mb-6"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <img
                src="/assets/images/about/vission.svg"
                alt="Vision Icon"
                className="w-16 h-16"
              />
            </div>
            <h3
              className="text-2xl font-semibold mb-4"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Our Vision
            </h3>
            <p
              className="text-gray-300 text-sm leading-relaxed max-w-md"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              To be recognized globally as a leading detailing solutions
              partner known for innovation, quality, and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-16 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl font-bold mb-12 text-[#1e1e1e]"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            Our Core Values
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Value 1 */}
            <div
              className="flex flex-col items-center"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <img
                src="/assets/images/about/integrity.svg"
                alt="Integrity Icon"
                className="w-14 h-14 mb-4"
              />
              <p className="font-semibold text-black">Integrity:</p>
              <p className="text-sm text-gray-700 mt-1">
                We deliver what we promise
              </p>
            </div>

            {/* Value 2 */}
            <div
              className="flex flex-col items-center"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <img
                src="/assets/images/about/precision.svg"
                alt="Precision Icon"
                className="w-14 h-14 mb-4"
              />
              <p className="font-semibold text-black">Precision:</p>
              <p className="text-sm text-gray-700 mt-1">Every detail matters</p>
            </div>

            {/* Value 3 */}
            <div
              className="flex flex-col items-center"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <img
                src="/assets/images/about/accountability.svg"
                alt="Accountability Icon"
                className="w-14 h-14 mb-4"
              />
              <p className="font-semibold text-black">Accountability:</p>
              <p className="text-sm text-gray-700 mt-1">
                We take full ownership of our deliverables
              </p>
            </div>

            {/* Value 4 */}
            <div
              className="flex flex-col items-center"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <img
                src="/assets/images/about/Collaboration.svg"
                alt="Collaboration Icon"
                className="w-14 h-14 mb-4"
              />
              <p className="font-semibold text-black">Collaboration:</p>
              <p className="text-sm text-gray-700 mt-1">
                We work closely with clients as an extension of their team
              </p>
            </div>

            {/* Value 5 */}
            <div
              className="flex flex-col items-center"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <img
                src="/assets/images/about/improvement.svg"
                alt="Improvement Icon"
                className="w-14 h-14 mb-4"
              />
              <p className="font-semibold text-black">Continuous Improvement:</p>
              <p className="text-sm text-gray-700 mt-1">
                We evolve with technology and industry needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="bg-[#1e1e1e] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Message Text */}
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Founder’s Message
            </h2>

            <p
              className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              “At Conex, we believe detailing is not just about drawing
              lines — it’s about understanding structures, solving problems,
              and delivering clarity for the shop floor.
              <br /><br />
              With years of hands-on experience, I’ve seen how the smallest
              detailing decisions can significantly impact fabrication time,
              safety, and cost. Our goal is to bring precision,
              responsibility, and foresight into every drawing we produce.”
            </p>

            <p
              className="font-semibold text-sm text-white"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              — Founder, Conex
            </p>
          </div>

          {/* Image */}
          <div
            className="rounded-xl overflow-hidden shadow-lg"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <img
              src="/assets/images/about/founder.png"
              alt="Founder Image"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
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
              Our Commitment to Quality
            </h2>
            <p
              className="mt-2 text-md text-gray-600"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Quality is embedded in our workflow. Every drawing goes through
              a thorough review process that ensures <br className="hidden md:inline" />
              alignment with project specifications and fabrication feasibility.
            </p>
            <p
              className="mt-2 text-md text-gray-600"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              We maintain structured QA/QC checklists, support multistage
              checking, and are equipped to handle <br className="hidden md:inline" />
              feedback cycles with agility.
            </p>
          </div>

          {/* Logos Block */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center border border-gray-200 rounded-lg shadow-2xl py-10 px-4"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            {/* AISC */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <img
                src="/assets/images/home/certification/aisc.png"
                alt="AISC Logo"
                className="w-40 h-auto"
              />
              <p className="text-sm font-medium text-center">
                American Institute of Steel<br />Construction (AISC)
              </p>
            </div>

            {/* CISC */}
            <div className="flex flex-col items-center justify-center space-y-4 border-t md:border-t-0 md:border-l border-gray-300 pt-6 md:pt-0 md:pl-6">
              <img
                src="/assets/images/home/certification/cisa.png"
                alt="CISC Logo"
                className="w-80 h-auto"
              />
              <p className="text-sm font-medium text-center">
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

      {/* Why Conex? */}
      <section className="bg-[var(--color-dark)] py-16 px-4 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div
            className="rounded-lg overflow-hidden shadow-md"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <img
              src="/assets/images/about/team-clap.png"
              alt="Team Celebrating"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Content */}
          <div data-aos="fade-up">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Why Conex?
            </h2>
            <ul
              className="space-y-3 text-sm md:text-base list-disc list-inside text-gray-200"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <li>
                <span className="font-medium">
                  15+ Years of Field-Aligned Experience
                </span>
              </li>
              <li>
                <span className="font-medium">
                  AISC & IS:800 Code Compliance
                </span>
              </li>
              <li>
                <span className="font-medium">
                  Collaborative Detailing Process
                </span>
              </li>
              <li>
                <span className="font-medium">
                  Capability Across Commercial & Industrial Projects
                </span>
              </li>
              <li>
                <span className="font-medium">
                  Secure FTP-Based Delivery and Communication Channels
                </span>
              </li>
              <li>
                <span className="font-medium">
                  Multi-format Output: DWG, DWF, DXF, IFC, PDF, and more
                </span>
              </li>
              <li>
                <span className="font-medium">
                  Flexible Scaling & Modern Project Values
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
