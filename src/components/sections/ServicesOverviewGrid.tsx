import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceItem {
  title: string;
  desc: string;
  img: string;
  route: string;
}

const services: ServiceItem[] = [
  {
    title: 'Structural Steel Detailing',
    desc: 'Shop drawings, erection plans, fabrication details. Collaborate faster.',
    img: '/assets/images/home/service-overview/structure-steel.png',
    route: '/service/structural-steel-detailing',
  },
  {
    title: 'Connection Design & Checking',
    desc: 'Model-led safety checks, connection review & fixing issues.',
    img: '/assets/images/home/service-overview/connection.png',
    route: '/service/connection-design',
  },
  {
    title: '3D Model-Based Detailing',
    desc: 'Accurate and efficient 3D modeling solutions.',
    img: '/assets/images/home/service-overview/stairs.png',
    route: '/service/building-Information-modeling',
  },
  {
    title: 'AISC & CISC Code Compliance',
    desc: 'Drawings that meet local regulations and global standards.',
    img: '/assets/images/home/service-overview/aisc.png',
    route: '/service/aisc-cisc',
  },
  {
    title: 'Bill of Material (Estimation)',
    desc: 'Accurate BOM extraction for cost planning and bidding.',
    img: '/assets/images/home/service-overview/engineer.png',
    route: '/service/estimation-services',
  },
  {
    title: 'Digital File Compatibility',
    desc: 'NC, DXF,KSS,IFC,EJE,ZEEMAN REPORTS and TRIMBLE CONNECT collaboration',
    img: '/assets/images/home/service-overview/digital-file.png',
    route: '/service/stick-modeling',
  },
];

export const ServicesOverviewGrid: React.FC = () => {
  return (
    <section
      className="bg-white px-6 py-12 md:py-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/images/home/service-overview/service-overview-bg.png')",
      }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Left Column Content */}
        <div className="md:col-span-1 flex flex-col justify-start space-y-6">
          <h2
            className="text-3xl font-bold text-[var(--color-dark)]"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            Services Overview
          </h2>
          <p
            className="text-sm text-gray-600"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            Our Core Capabilities Include
          </p>
          <Link
            to="/service"
            className="inline-block bg-[var(--color-primary)] text-black font-semibold px-6 py-2.5 rounded-2xl hover:bg-yellow-300 transition text-center w-48 shadow"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            View full services
          </Link>
        </div>

        {/* Right: 6 Services Grid */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.title}
                className="relative rounded-2xl overflow-hidden shadow-lg h-80 transition hover:shadow-2xl"
                data-aos="flip-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />

                <div
                  className={`absolute bottom-0 left-0 right-0 px-4 py-3 space-y-2 transition-all ${
                    isEven
                      ? 'bg-[var(--color-primary)] text-black'
                      : 'bg-[var(--color-dark)] text-white'
                  }`}
                >
                  <h3 className="font-bold text-base leading-snug">{service.title}</h3>
                  <p className="text-xs line-clamp-2">{service.desc}</p>
                  <Link
                    to={service.route}
                    className="inline-block text-xs font-semibold underline hover:opacity-80 transition pt-1"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
