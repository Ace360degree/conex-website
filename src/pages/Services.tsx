import React from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/common/Seo';

interface ServiceCard {
  title: string;
  desc: string;
  img: string;
  route: string;
}

const serviceOfferings: ServiceCard[] = [
  {
    title: 'Structural Steel Detailing',
    desc: 'Complete detailing of columns, beams, braces, anchor bolts, embed plates, stairs, ladders, handrails, and more — aligned with fabrication workflows and constructability.',
    img: 'structure-detailing.png',
    route: '/service/structural-steel-detailing',
  },
  {
    title: 'Structural Engineering',
    desc: 'Technical support and basic structural engineering services for ensuring feasibility, design review, and optimization of member connections.',
    img: 'structure-engineering.png',
    route: '/service/structural-engineering',
  },
  {
    title: 'Building Information Modeling (BIM)',
    desc: 'Integrated 3D modeling and coordination using BIM tools for clash detection, material take-off, and collaborative design across trades.',
    img: 'bim.png',
    route: '/service/building-Information-modeling',
  },
  {
    title: 'Connection Design',
    desc: 'Design and calculation of moment, shear, splice, and bolted/welded connections in full compliance with steel design codes and fabrication guidelines.',
    img: 'connection-design.png',
    route: '/service/connection-design',
  },
  {
    title: 'Checking Services',
    desc: 'Independent checking of shop drawings and erection plans for accuracy, completeness, and compliance with contract documents.',
    img: 'checking-services.png',
    route: '/service/checking-services',
  },
  {
    title: 'AISC & CISC Code Compliance',
    desc: 'Detailing practices strictly follow AISC (USA) and CISC (Canada) standards for both commercial and industrial structural projects.',
    img: 'aisc.png',
    route: '/service/aisc-cisc',
  },
  {
    title: 'Cost-Effective & Professional Solutions',
    desc: 'A lean approach to detailing ensures optimal use of steel, efficient fabrication, and reduced field errors — saving cost without compromising quality.',
    img: 'professional-solution.png',
    route: '/service/cost-effective-and-professional-solutions',
  },
  {
    title: 'Process Flow (Coming Soon)',
    desc: 'A step-by-step visual flow of how we execute each project — from RFQ to final file handover.',
    img: 'process-flow.png',
    route: '/service/service-flow',
  },
  {
    title: 'Stick Modeling',
    desc: '3D stick models for early-phase visualization, structural clarity, and connection planning.',
    img: 'stick-modeling.png',
    route: '/service/stick-modeling',
  },
  {
    title: 'Estimation Services',
    desc: 'Accurate scope-based man-hour estimation, structural coverage planning, and quantity forecasting for bidding support.',
    img: 'estimited-services.png',
    route: '/service/estimation-services',
  },
  {
    title: 'Material Take-Offs',
    desc: 'Automated or manual extraction of steel quantities directly from models or drawings, delivered in fabrication-ready formats.',
    img: 'material-take-off.png',
    route: '/service/material-take-off',
  },
];

export const Services: React.FC = () => {
  return (
    <>
      <Seo
        title="Steel Detailing Services | Conex"
        description="End-to-end structural steel detailing and engineering services designed for precision, performance, and fabrication-readiness. Accurate, code-compliant, and cost-effective outputs."
        canonicalUrl="https://innosteelix.com/service"
      />

      {/* Top Banner & Introduction */}
      <section className="w-full">
        {/* Top Full-Width Image */}
        <div className="w-full h-[300px] md:h-[450px] overflow-hidden">
          <img
            src="/assets/images/service/steel-structure.png"
            alt="Steel Structure"
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
            Steel Detailing Services Backed by<br />
            Experience, Accuracy & Compliance
          </h2>
          <p
            className="text-gray-700 text-sm md:text-base max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            At Conex, we deliver end-to-end structural steel detailing and engineering
            services designed for precision, performance, and fabrication-readiness. From
            estimation and material take-offs to stick modeling and 3D BIM collaboration, our
            team ensures your project receives accurate, code-compliant, and cost-effective
            outputs — with fast turnaround and international standards always at the core.
          </p>
        </div>
      </section>

      {/* Service Offerings Grid */}
      <section className="bg-[var(--color-dark)] text-white px-6 py-12">
        <h2
          className="text-2xl md:text-3xl font-bold text-center mb-10"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          Our Service Offerings
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceOfferings.map((item, i) => {
            const isYellow = i % 2 === 1;
            return (
              <div
                key={item.title}
                className={`${
                  isYellow
                    ? 'bg-[var(--color-primary)] text-black'
                    : 'bg-white text-black'
                } rounded-xl overflow-hidden shadow flex flex-col min-h-[480px] h-full transition duration-300 hover:shadow-xl hover:-translate-y-1`}
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                {/* Image */}
                <div className="h-60 w-full overflow-hidden">
                  <img
                    src={`/assets/images/service/${item.img}`}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-bold text-2xl mb-2 leading-tight">
                      {i + 1}. {item.title}
                    </h3>
                    <p className="text-md text-gray-700 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                  <Link
                    to={item.route}
                    className="text-sm font-semibold text-[var(--color-dark)] underline mt-4 flex items-center gap-1 hover:text-black transition"
                  >
                    Know More <i className="fa-solid fa-arrow-right text-xs"></i>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
