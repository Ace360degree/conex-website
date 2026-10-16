import React from 'react';
import { Seo } from '../../components/common/Seo';

export const EstimationServices: React.FC = () => {
  return (
    <>
      <Seo
        title="Structural Steel Estimation Services | Conex"
        description="Reliable structural steel estimation services supporting early project planning, tender submissions, and man-hour budgeting with transparent, scope-driven projections."
        canonicalUrl="https://innosteelix.com/service/estimation-services"
      />

      {/* Top Section */}
      <section className="w-full">
        {/* Top Full-Width Image */}
        <div className="w-full h-[300px] md:h-[450px] overflow-hidden">
          <img
            src="/assets/images/service/es/bridge-structure.png"
            alt="Structural Steel Estimation"
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
            Structural Steel Estimation – <br />
            Accurate, Transparent &amp; Scope-Driven
          </h2>
          <p
            className="text-gray-700 text-sm md:text-lg max-w-4xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            At Conex, we provide reliable structural steel estimation
            services to support early project planning, tender submissions, and
            man-hour budgeting. Our estimates are driven by real-world
            experience in detailing and fabrication — ensuring our clients
            receive accurate, transparent, and scope-specific projections that
            reduce surprises down the line.
          </p>
        </div>
      </section>

      {/* What We Cover in Our Estimation Services */}
      <section className="py-14 px-4 md:px-12 bg-[var(--color-dark)] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div
            className="space-y-4 order-2 md:order-1"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What We Cover in Our <br />
              Estimation Services
            </h2>
            <div className="text-sm md:text-lg space-y-3">
              <div>
                <ul className="list-disc list-inside font-semibold text-yellow-400">
                  <li>Man-Hour Based Estimation</li>
                </ul>
                <p className="text-gray-300 ml-5 mt-1">
                  Project effort estimated based on member types, tonnage,
                  complexity, and standard detailing benchmarks.
                </p>
              </div>

              <div>
                <ul className="list-disc list-inside font-semibold text-yellow-400">
                  <li>Coverage Planning</li>
                </ul>
                <p className="text-gray-300 ml-5 mt-1">
                  Assist in identifying point loads, tributary zones, and support
                  reactions.
                </p>
              </div>

              <div>
                <ul className="list-disc list-inside font-semibold text-yellow-400">
                  <li>RFQ Review &amp; Scope Clarification</li>
                </ul>
                <p className="text-gray-300 ml-5 mt-1">
                  Itemized understanding of what is included and what may be
                  missing or ambiguous.
                </p>
              </div>

              <div>
                <ul className="list-disc list-inside font-semibold text-yellow-400">
                  <li>Steel Tonnage &amp; Drawing Quantity Forecasting</li>
                </ul>
                <p className="text-gray-300 ml-5 mt-1">
                  Approximate count of sheets, members, and drawings needed
                  based on inputs.
                </p>
              </div>

              <div>
                <ul className="list-disc list-inside font-semibold text-yellow-400">
                  <li>Risk Buffer &amp; Assumption Documentation</li>
                </ul>
                <p className="text-gray-300 ml-5 mt-1">
                  Clear notes on estimations and revision impact (if design
                  changes occur).
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <img
              src="/assets/images/service/es/paper-work.png"
              alt="paper work"
              className="w-full max-w-xl h-auto object-contain rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </section>

      {/* Deliverables May Include */}
      <section className="py-14 px-4 md:px-12 bg-white text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src="/assets/images/service/es/deliverables.png"
              alt="Deliverables"
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
              Deliverables May Include:
            </h2>
            <div className="text-sm md:text-lg">
              <ul
                className="list-disc list-inside text-sm md:text-lg space-y-3 text-gray-800 leading-relaxed"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <li>PDF or Excel-based estimation sheet</li>
                <li>Man-hour charts with drawing/task-wise breakdown</li>
                <li>Scope coverage map or checklist</li>
                <li>Optional pricing (if agreed upon in NDA/contract)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-14 px-4 md:px-12 bg-[var(--color-dark)] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 space-y-4">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Ideal For:
            </h2>
            <ul
              className="list-disc list-inside text-sm md:text-lg space-y-3 text-gray-300 leading-relaxed"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <li>Fabricators bidding for steel projects</li>
              <li>EPC firms outsourcing detailing</li>
              <li>Structural consultants planning workload</li>
              <li>Developers seeking budget alignment</li>
            </ul>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src="/assets/images/service/es/ideal-for.png"
              alt="ideal for"
              className="w-full max-w-lg h-auto object-contain rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </section>

      {/* Why Conex for Estimation? */}
      <section className="py-14 px-4 md:px-12 bg-white text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src="/assets/images/service/es/why-innosteelx.png"
              alt="Why Conex"
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
              Why Conex for Estimation?
            </h2>
            <div className="text-sm md:text-lg">
              <ul
                className="list-disc list-inside text-sm md:text-lg space-y-3 text-gray-800 leading-relaxed"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <li>15+ years of detailing insight</li>
                <li>Detailing-specific logic — not just rough take-offs</li>
                <li>Transparent, item-wise assumptions</li>
                <li>Quick turnaround for bid deadlines</li>
                <li>Trusted by contractors and fabricators alike</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
