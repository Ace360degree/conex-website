import React from 'react';
import { Seo } from '../../components/common/Seo';

export const StickModeling: React.FC = () => {
  return (
    <>
      <Seo
        title="Stick Modeling for Steel Structures | Innosteelix"
        description="Fast, clear, early-stage 3D stick modeling services for steel structures allowing early-stage alignment on member positions, sizes, and connection logic."
        canonicalUrl="https://innosteelix.com/service/stick-modeling"
      />

      {/* Top Section */}
      <section className="w-full">
        {/* Top Full-Width Image */}
        <div className="w-full h-[300px] md:h-[450px] overflow-hidden">
          <img
            src="/assets/images/service/sm/stick-modeling.png"
            alt="Stick Modeling for Steel Structures"
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
            Stick Modeling for Steel Structures –
            <br />
            Fast, Clear, Early-Stage Visualization
          </h2>
          <p
            className="text-gray-700 text-sm md:text-lg max-w-4xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            At Innosteelix, we offer 3D stick modeling services to help
            engineers, contractors, and fabricators quickly visualize the
            structural layout of a steel project before full detailing begins.
            Stick models provide a fast and lightweight representation of
            framing systems, allowing early-stage alignment on member positions,
            sizes, and connection logic.
          </p>
        </div>
      </section>

      {/* What Is Stick Modeling? */}
      <section className="py-14 px-4 md:px-12 bg-[var(--color-dark)] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div
            className="space-y-4 order-2 md:order-1"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Is Stick Modeling?
            </h2>
            <p className="font-semibold text-sm md:text-lg text-yellow-400">
              Stick modeling represents structural members as centerline-based
              elements (without full profiles), allowing:
            </p>
            <ul className="list-disc list-inside space-y-3 text-sm md:text-lg text-gray-300 leading-relaxed">
              <li>Quick layout verification</li>
              <li>Identification of framing inconsistencies</li>
              <li>Early discussion of load paths and member interactions</li>
              <li>
                Connection pre-planning for coordination with engineers or
                clients
              </li>
            </ul>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <img
              src="/assets/images/service/sm/what-is-stick-modeling.png"
              alt="what is stick modeling"
              className="w-full max-w-xl h-auto object-contain rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-14 px-4 md:px-12 bg-white text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src="/assets/images/service/sm/use-case-stick-modeling.png"
              alt="Use cases of stick modeling"
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
              Use Cases
            </h2>
            <div className="text-sm md:text-lg">
              <ul
                className="list-disc list-inside text-sm md:text-lg space-y-3 text-gray-800 leading-relaxed"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <li>Pre-bid or conceptual project visualization</li>
                <li>Basis for connection engineering</li>
                <li>Input for RFI documentation or design clarification</li>
                <li>Supporting visual for BIM coordination sessions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Include */}
      <section className="py-14 px-4 md:px-12 bg-[var(--color-dark)] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 space-y-4">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Deliverables Include:
            </h2>
            <ul
              className="list-disc list-inside text-sm md:text-lg space-y-3 text-gray-300 leading-relaxed"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <li>Tekla or AutoCAD-based 3D stick model</li>
              <li>Member tags and sections (if required)</li>
              <li>Color-coded zone segmentation (optional)</li>
              <li>Basic layout plans extracted from the model</li>
            </ul>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src="/assets/images/service/sm/Deliverables-include.png"
              alt="deliverables include"
              className="w-full max-w-lg h-auto object-contain rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </section>

      {/* Benefits of Stick Modeling */}
      <section className="py-14 px-4 md:px-12 bg-white text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src="/assets/images/service/sm/benifits-of-stick-model.png"
              alt="benefits of stick model"
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
              Benefits of Stick Modeling
            </h2>
            <div className="text-sm md:text-lg">
              <ul
                className="list-disc list-inside text-sm md:text-lg space-y-3 text-gray-800 leading-relaxed"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <li>Saves time in early project phases</li>
                <li>Aligns stakeholders before detailing begins</li>
                <li>Prevents major redesign during full modeling</li>
                <li>
                  Lightweight files — ideal for reviews and remote sharing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
