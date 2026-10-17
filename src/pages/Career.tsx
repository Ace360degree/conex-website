import React, { useState, useRef } from 'react';
import { Seo } from '../components/common/Seo';

interface JobOpening {
  title: string;
  desc: string;
}

const jobOpenings: JobOpening[] = [
  {
    title: 'Tekla Modeler (2–5 Years Exp.)',
    desc: 'Experience in 3D modeling of steel structures, connection detailing, and CNC output generation.',
  },
  {
    title: 'Steel Detailer (Fresher or 1+ Year Exp.)',
    desc: 'Ability to read structural drawings, basic AutoCAD/Tekla knowledge, and enthusiasm to learn.',
  },
  {
    title: 'Checker – Steel Detailing (4+ Years Exp.)',
    desc: 'Hands-on experience in checking steel models, shop drawings, and erection plans per AISC/CISC standards.',
  },
  {
    title: 'Project Coordinator / Client Liaison',
    desc: 'Manage communication and documentation between detailing team, clients, fabricators, and engineers.',
  },
  {
    title: 'Tekla Modeler (2–5 Years Exp.)',
    desc: 'Experience in 3D modeling of complex commercial & industrial structures with high accuracy.',
  },
  {
    title: 'Steel Detailer (Fresher or 1+ Year Exp.)',
    desc: 'Strong foundation in structural drafting and eagerness to grow within a high-paced engineering environment.',
  },
];

export const Career: React.FC = () => {
  const [scrollX, setScrollX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardWidth = 270; // 250px card + 20px gap

  const handlePrev = () => {
    setScrollX((prev) => Math.max(prev - cardWidth, 0));
  };

  const handleNext = () => {
    if (carouselRef.current) {
      const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      setScrollX((prev) => Math.min(prev + cardWidth, Math.max(maxScroll, 0)));
    }
  };

  const scrollToOpenings = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('openings-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Seo
        title="Careers at Conex Engineering | Build with Us. Grow with Us."
        description="Careers at Conex Engineering. We believe our people are the foundation of our precision. Explore current openings for Tekla modelers, steel detailers, and checkers."
        canonicalUrl="https://conexengineering.com/career"
      />

      {/* Hero Section */}
      <section className="bg-white text-gray-900">
        <div className="mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="md:w-1/2 order-1 md:order-2">
            <img
              src="/assets/images/career/team-cheer.png"
              alt="Conex Engineering Team"
              className="w-full h-auto shadow-md object-cover"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            />
          </div>
          {/* Text Content */}
          <div
            className="md:w-1/2 md:pl-16 pl-5 py-6 md:py-14 order-2 md:order-1"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <h2 className="text-2xl md:text-5xl font-bold text-gray-900">
              Careers at{' '}
              <span className="text-[var(--color-primary)]">Conex Engineering</span>{' '}
              –<br />
              <span className="text-[var(--color-dark)]">
                Build with Us. Grow with Us.
              </span>
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed text-base">
              At Conex Engineering, we believe our people are the foundation of our
              precision. If you're passionate about structural steel, value
              detailing accuracy, and want to work in a quality-first,
              globally focused company — you're in the right place.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed text-base">
              We’re always looking for motivated professionals who are ready
              to push boundaries and help shape structures the world can rely
              on.
            </p>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="bg-[var(--color-dark)] text-white px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Image */}
          <div className="md:w-1/2">
            <img
              src="/assets/images/career/join-our-team.png"
              alt="Interview Scene"
              className="w-full h-auto rounded-xl shadow-md object-cover"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            />
          </div>

          {/* Right Text Content */}
          <div className="md:w-1/2">
            <h2
              className="text-3xl md:text-5xl font-semibold mb-4"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Join Our Team
            </h2>
            <p
              className="text-gray-300 leading-relaxed mb-6 text-base"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              We’re always on the lookout for curious, passionate, and driven
              people who want to make an impact in the world and transform
              industry. Whether you are an innovative graduate or a proven
              technical leader ready to lead a strong team, we welcome
              individuals who value integrity, collaboration, and continuous
              learning.
            </p>
            <button
              onClick={scrollToOpenings}
              className="inline-block bg-[var(--color-primary)] text-black font-semibold px-6 py-3 rounded-md shadow hover:bg-yellow-300 transition cursor-pointer"
            >
              View All
            </button>
          </div>
        </div>
      </section>

      {/* Why Conex Engineering? */}
      <section className="bg-white px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left: Text Content */}
          <div className="md:w-1/2">
            <h2
              className="text-2xl md:text-5xl font-bold mb-6 text-gray-900"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Why{' '}
              <span className="text-[var(--color-primary)]">Conex Engineering</span>?
            </h2>
            <ul
              className="list-disc pl-5 space-y-3 text-gray-700 text-base"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <li>Work on global projects following AISC &amp; CISC standards</li>
              <li>
                Exposure to advanced detailing software like Tekla
                Structures
              </li>
              <li>Clear growth paths and skill-building support</li>
              <li>
                Flexible work culture and secure FTP/cloud-based
                collaboration
              </li>
              <li>Competitive compensation and performance-based rewards</li>
            </ul>
          </div>

          {/* Right: Image */}
          <div className="md:w-1/2">
            <img
              src="/assets/images/career/why-inosteelx.png"
              alt="Conex Engineering Office"
              className="w-full h-auto rounded-md shadow-md object-cover"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section
        id="openings-section"
        className="bg-[var(--color-dark)] text-white px-6 py-12"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Left Side: Static Content */}
          <div className="md:w-1/3">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Our Current Openings
            </h2>
            <p
              className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <i className="fa-solid fa-envelope text-[var(--color-primary)] mr-2"></i>
              Don’t see a role that fits? Send us your resume at{' '}
              <a
                href="mailto:careers@conexengineering.com"
                className="text-[var(--color-primary)] underline hover:text-yellow-300"
              >
                careers@conexengineering.com
              </a>{' '}
              – we’re always open to talent.
            </p>
          </div>

          {/* Right Side: Carousel */}
          <div className="md:w-2/3 relative overflow-hidden">
            {/* Cards Container */}
            <div className="overflow-hidden" ref={carouselRef}>
              <div
                className="flex space-x-4 transition-all duration-500 min-h-[320px]"
                id="career-carousel"
                style={{ transform: `translateX(-${scrollX}px)` }}
              >
                {jobOpenings.map((job, index) => {
                  const isYellow = index % 2 === 0;
                  return (
                    <div
                      key={index}
                      className={`min-w-[250px] max-w-[250px] flex-shrink-0 p-5 rounded-lg shadow flex flex-col justify-between items-center text-center ${
                        isYellow
                          ? 'bg-[var(--color-primary)] text-black'
                          : 'bg-white text-black'
                      }`}
                    >
                      <div>
                        <h3 className="font-bold text-xl mb-3 leading-snug">
                          {job.title}
                        </h3>
                        <p className="text-sm text-gray-700 leading-normal">
                          {job.desc}
                        </p>
                      </div>
                      <a
                        href={`mailto:careers@conexengineering.com?subject=Application%20for%20${encodeURIComponent(
                          job.title
                        )}`}
                        className="text-sm font-semibold text-[var(--color-dark)] underline hover:text-black mt-4 block"
                      >
                        Apply Now!
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Controls */}
            <div className="flex justify-between mt-4">
              <button
                onClick={handlePrev}
                className="text-black bg-[var(--color-primary)] px-4 py-2 rounded shadow cursor-pointer hover:bg-yellow-300 transition font-medium"
                id="career-carousel-prev"
                aria-label="Previous Openings"
              >
                ‹ Prev
              </button>
              <button
                onClick={handleNext}
                className="text-black bg-[var(--color-primary)] px-4 py-2 rounded shadow cursor-pointer hover:bg-yellow-300 transition font-medium"
                id="career-carousel-next"
                aria-label="Next Openings"
              >
                Next ›
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Life at Conex Engineering */}
      <section className="bg-white pl-3 pr-3 md:pr-8 py-12 text-gray-900">
        <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-8 max-w-7xl mx-auto">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/assets/images/career/life-at-innosteelix.png"
              alt="Life at Conex Engineering"
              className="w-full h-auto rounded-xl shadow object-cover mx-auto"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            />
          </div>

          {/* Right Text */}
          <div className="w-full md:w-1/2 my-auto">
            <h2
              className="text-2xl md:text-4xl font-bold mb-4 text-gray-900"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Life at{' '}
              <span className="text-[var(--color-primary)]">Conex Engineering</span>
            </h2>

            <p
              className="text-gray-700 mb-4 text-base"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              We blend structure and flexibility — much like the steel frames
              we help bring to life.
            </p>

            <ul
              className="list-disc pl-5 space-y-2 text-gray-800 mb-6 text-base"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <li>
                <strong>Supportive</strong> team culture with a focus on
                mentoring
              </li>
              <li>
                Work-from-office and hybrid models available
                (project-dependent)
              </li>
              <li>
                Clear communication channels and organized delivery process
              </li>
              <li>Celebrate wins, share knowledge, and grow together</li>
            </ul>

            {/* Right-aligned Quote Block */}
            <div
              className="w-full ml-auto bg-[var(--color-primary)] text-[var(--color-dark)] font-semibold text-sm p-4 rounded-l-lg shadow"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              “You’re not just another resource here. At{' '}
              <span className="font-bold">Conex Engineering</span>, you’re part of every
              structure we help shape.”
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
