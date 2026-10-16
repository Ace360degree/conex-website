import React from 'react';

interface Pillar {
  title: string;
  desc: string;
  icon: string;
  iconClass?: string;
  extraContainerClass?: string;
  descClass?: string;
}

const pillars: Pillar[] = [
  {
    title: 'Precision Delivered',
    desc: 'Every drawing undergoes expert checking for buildability.',
    icon: '/assets/images/home/why-choose-us/presision.svg',
    iconClass: 'w-12 h-24 object-contain',
    descClass: 'text-md text-gray-300',
  },
  {
    title: 'Code Compliance',
    desc: 'AISC & CISC-aligned detailing ensures production-ready outputs.',
    icon: '/assets/images/home/why-choose-us/code-compilence.svg',
    iconClass: 'w-12 h-24 object-contain',
    descClass: 'text-md text-gray-300',
  },
  {
    title: 'Time & Cost Efficiency',
    desc: 'Smart detailing choices minimize material & turnaround waste.',
    icon: '/assets/images/home/why-choose-us/clock.svg',
    iconClass: 'w-12 h-24 object-contain',
    descClass: 'text-md text-gray-300',
  },
  {
    title: 'Team Strength',
    desc: 'Trained professionals with multi-project execution experience.',
    icon: '/assets/images/home/why-choose-us/ftp.svg',
    iconClass: 'w-24 h-24 object-contain',
    descClass: 'text-md text-gray-300',
  },
  {
    title: 'Global Delivery Model',
    desc: 'Secure cloud collaboration and FTP/IT-enabled handoffs.',
    icon: '/assets/images/home/why-choose-us/presision.svg',
    iconClass: 'w-12 h-24 object-contain',
    extraContainerClass: 'col-span-2 mx-auto md:col-span-1',
    descClass: 'text-xs text-gray-300',
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="relative bg-[var(--color-dark)] text-white overflow-hidden py-14">
      {/* Top Curve: up > down > up */}
      <div className="absolute top-0 left-0 w-full z-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 150"
          className="w-full h-[100px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,0 C360,120 1080,120 1440,0 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-12"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          Why Choose Us
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className={`flex flex-col items-center text-center space-y-3 ${
                pillar.extraContainerClass || ''
              }`}
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <img
                src={pillar.icon}
                alt={pillar.title}
                className={pillar.iconClass || 'w-12 h-24 object-contain'}
              />
              <h3 className="font-semibold text-xl">{pillar.title}</h3>
              <p className={pillar.descClass || 'text-sm text-gray-300'}>
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Curve: down > up > down */}
      <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 150"
          className="w-full h-[100px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,150 C360,30 1080,30 1440,150 L1440,150 L0,150 Z"
          />
        </svg>
      </div>
    </section>
  );
};
