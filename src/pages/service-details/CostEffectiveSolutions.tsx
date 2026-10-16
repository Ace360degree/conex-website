import React from 'react';
import { Seo } from '../../components/common/Seo';

export const CostEffectiveSolutions: React.FC = () => {
  return (
    <>
      <Seo
        title="Cost-Effective & Professional Steel Detailing Solutions | Conex"
        description="Smart, scalable, and value-driven steel detailing services designed to reduce waste, minimize revisions, and streamline fabrication without inflating project costs."
        canonicalUrl="https://innosteelix.com/service/cost-effective-and-professional-solutions"
      />

      {/* Top Section */}
      <section className="w-full">
        {/* Top Full-Width Image */}
        <div className="w-full h-[300px] md:h-[450px] overflow-hidden">
          <img
            src="/assets/images/service/ceps/steel-bridge-structure.png"
            alt="Steel Bridge Structure"
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
            Smart, Scalable &amp; Value-Driven Steel <br />
            Detailing Services
          </h2>
          <p
            className="text-gray-700 text-sm md:text-lg max-w-4xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            At Conex, we deliver more than just detailing — we provide
            cost-effective, professional solutions designed to reduce waste,
            minimize revisions, and streamline fabrication. Our deep industry
            experience, lean delivery model, and collaborative workflows help
            clients achieve high precision without inflating project costs.
          </p>
        </div>
      </section>

      {/* How We Deliver Cost-Effective Solutions */}
      <section className="py-14 px-4 md:px-12 bg-[var(--color-dark)] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div
            className="space-y-4 order-2 md:order-1"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How We Deliver Cost-<br />Effective Solutions
            </h2>
            <div className="text-sm md:text-lg space-y-3">
              <div>
                <ul className="list-disc list-inside font-semibold text-yellow-400">
                  <li>Man-Hour Based Project Estimation</li>
                </ul>
                <p className="text-gray-300 ml-5 mt-1">
                  We calculate exact resource requirements using proven
                  benchmarks, ensuring no cost guesswork.
                </p>
              </div>

              <div>
                <ul className="list-disc list-inside font-semibold text-yellow-400">
                  <li>Smart Detailing Techniques</li>
                </ul>
                <p className="text-gray-300 ml-5 mt-1">
                  Avoiding over-detailing, reducing unnecessary welds, and
                  selecting connection options optimized for fabrication speed.
                </p>
              </div>

              <div>
                <ul className="list-disc list-inside font-semibold text-yellow-400">
                  <li>Efficient Use of Materials</li>
                </ul>
                <p className="text-gray-300 ml-5 mt-1">
                  Accurate BOMs and cut lengths that reduce scrap, steel
                  wastage, and costly modifications.
                </p>
              </div>

              <div>
                <ul className="list-disc list-inside font-semibold text-yellow-400">
                  <li>Multi-Format Deliverables</li>
                </ul>
                <p className="text-gray-300 ml-5 mt-1">
                  CNC-compatible file formats (NC1, KSS, DXF) to reduce manual
                  entry and production time.
                </p>
              </div>

              <div>
                <ul className="list-disc list-inside font-semibold text-yellow-400">
                  <li>Reduced Field Conflicts</li>
                </ul>
                <p className="text-gray-300 ml-5 mt-1">
                  Drawings with real-world constructibility focus, lowering field
                  errors and rework.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <img
              src="/assets/images/service/ceps/touch-pad.png"
              alt="touch pad planning"
              className="w-full max-w-lg h-auto object-contain rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </section>

      {/* Why Our Approach Works */}
      <section className="py-14 px-4 md:px-12 bg-white text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src="/assets/images/service/ceps/engineer-structure.png"
              alt="engineer structure"
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
              Why Our Approach Works
            </h2>
            <div className="text-sm md:text-lg">
              <ul className="list-disc list-inside space-y-3 text-gray-800 leading-relaxed">
                <li>Experience-backed insights improve constructibility</li>
                <li>Faster turnaround with optimized resource allocation</li>
                <li>
                  Reduced coordination cost between fabricator, engineer, and
                  consultant
                </li>
                <li>Clear, concise drawings with practical annotations</li>
                <li>
                  Dedicated communication channels and responsive project
                  support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Professionalism at Every Stage */}
      <section className="py-14 px-4 md:px-12 bg-[var(--color-dark)] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div
            className="order-2 md:order-1 space-y-4"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Professionalism at <br />
              Every Stage
            </h2>
            <ul className="list-disc list-inside text-sm md:text-lg space-y-3 text-gray-300 leading-relaxed">
              <li>
                Dedicated project managers for single-point accountability
              </li>
              <li>Weekly updates, milestone tracking, and early warnings</li>
              <li>Secure FTP-based file sharing and revision logs</li>
              <li>
                Complete documentation support for submission and approvals
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src="/assets/images/service/ceps/discussing.png"
              alt="people discussing"
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
