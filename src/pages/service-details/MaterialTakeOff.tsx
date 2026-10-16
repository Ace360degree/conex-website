import React from 'react';
import { Seo } from '../../components/common/Seo';

export const MaterialTakeOff: React.FC = () => {
  return (
    <>
      <Seo
        title="Material Take-Off (MTO) Services | Conex"
        description="Accurate Material Take-Off (MTO) services providing precise steel quantity breakdowns directly from drawings or Tekla models for smarter procurement and cost planning."
        canonicalUrl="https://innosteelix.com/service/material-take-off"
      />

      {/* Top Section */}
      <section className="w-full">
        {/* Top Full-Width Image */}
        <div className="w-full h-[300px] md:h-[450px] overflow-hidden">
          <img
            src="/assets/images/service/mto/material-take-off.png"
            alt="Material Take-Off Services"
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
            Material Take-Off Services – Accurate <br />
            Quantities for Smarter Procurement
          </h2>
          <p
            className="text-gray-700 text-sm md:text-lg max-w-4xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            At Conex, our Material Take-Off (MTO) services provide precise
            steel quantity breakdowns to support fabrication, procurement, and
            cost planning. Whether extracted manually from drawings or directly
            from Tekla models, our take-offs help avoid overordering, reduce
            wastage, and align project budgets with actual material needs.
          </p>
        </div>
      </section>

      {/* What's Included in Our MTO Services */}
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
              MTO Services
            </h2>
            <div className="text-sm md:text-lg space-y-3">
              <div>
                <ul className="list-disc list-inside font-semibold text-yellow-400">
                  <li>Beam, Column, and Bracing Quantities</li>
                </ul>
                <p className="text-gray-300 ml-5 mt-1">
                  Profiles, lengths, weights, and cut dimensions for all primary
                  members.
                </p>
              </div>

              <div>
                <ul className="list-disc list-inside font-semibold text-yellow-400">
                  <li>Plates, Base Plates, and Gussets</li>
                </ul>
                <p className="text-gray-300 ml-5 mt-1">
                  Thickness, area, and count of all connection and support
                  plates.
                </p>
              </div>

              <div>
                <ul className="list-disc list-inside font-semibold text-yellow-400">
                  <li>Stairs, Handrails, Ladders &amp; Gratings</li>
                </ul>
                <p className="text-gray-300 ml-5 mt-1">
                  Member-by-member quantities for architectural miscellaneous
                  steel.
                </p>
              </div>

              <div>
                <ul className="list-disc list-inside font-semibold text-yellow-400">
                  <li>Bolt List / Fastener Take-Off</li>
                </ul>
                <p className="text-gray-300 ml-5 mt-1">
                  Shop &amp; field bolts with diameter, type, and quantities per
                  drawing.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <img
              src="/assets/images/service/mto/mto-services.png"
              alt="MTO services"
              className="w-full max-w-xl h-auto object-contain rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </section>

      {/* Data Formats We Provide */}
      <section className="py-14 px-4 md:px-12 bg-white text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src="/assets/images/service/mto/data-format.png"
              alt="Data formats"
              className="w-full h-auto object-contain rounded-lg shadow-md"
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
              Data Formats We Provide
            </h2>
            <div className="text-sm md:text-lg">
              <ul
                className="list-disc list-inside text-sm md:text-lg space-y-3 text-gray-800 leading-relaxed"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <li>Structured Excel file (sortable, filterable)</li>
                <li>MTO summary sheet by steel type or floor/zone</li>
                <li>PDF or CSV versions on request</li>
                <li>Color-coded BOM sheets for visual validation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Accurate MTOs Matter */}
      <section className="py-14 px-4 md:px-12 bg-[var(--color-dark)] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 space-y-4">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Why Accurate MTOs Matter
            </h2>
            <ul
              className="list-disc list-inside text-sm md:text-lg space-y-3 text-gray-300 leading-relaxed"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <li>Supports procurement with clarity</li>
              <li>Reduces excess inventory and steel scrap</li>
              <li>Aids cost control and vendor comparison</li>
              <li>Essential for project budgeting and material scheduling</li>
              <li>Aligns early planning with actual detailing outcomes</li>
            </ul>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src="/assets/images/service/mto/accurate-mto.png"
              alt="Accurate MTO"
              className="w-full max-w-lg h-auto object-contain rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Conex */}
      <section className="py-14 px-4 md:px-12 bg-white text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src="/assets/images/service/sm/benifits-of-stick-model.png"
              alt="Why choose Conex"
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
              Why Choose Conex
            </h2>
            <div className="text-sm md:text-lg">
              <ul
                className="list-disc list-inside text-sm md:text-lg space-y-3 text-gray-800 leading-relaxed"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <li>
                  Take-offs based on real detailing logic, not assumptions
                </li>
                <li>
                  Extracted from shop drawings or Tekla model — your choice
                </li>
                <li>
                  Multiple format outputs to suit ERP or procurement systems
                </li>
                <li>
                  Part of our integrated detailing + estimation workflow (if
                  needed)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
