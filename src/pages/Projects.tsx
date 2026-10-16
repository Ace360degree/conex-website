import React from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/common/Seo';
import { FeaturedProjectsCarousel } from '../components/sections/FeaturedProjectsCarousel';

export const Projects: React.FC = () => {
  return (
    <>
      <Seo
        title="Steel Detailing Projects & Case Studies | Conex"
        description="Every project at Conex is a reflection of our detailing expertise, engineering foresight, and commitment to quality. Explore our featured projects and real-world case studies."
        canonicalUrl="https://innosteelix.com/projects"
      />

      {/* Hero Banner */}
      <section className="relative w-full h-[600px] md:h-[500px]">
        {/* Background Image */}
        <img
          src="/assets/images/projects/steel-rods.png"
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
                Steel Detailing Projects &amp; Case Studies – Built with Precision
              </h2>

              <p
                className="mb-4 text-sm md:text-base text-gray-200 leading-relaxed shadow-2xl"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                Every project at Conex is a reflection of our detailing
                expertise, engineering foresight, and commitment to quality. Our
                portfolio spans commercial, industrial, and infrastructure
                developments — each delivered with precision and in compliance
                with global steel standards.
              </p>

              <p
                className="mb-6 text-sm md:text-base text-gray-200 leading-relaxed"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                Explore our featured projects and real-world case studies that
                showcase our impact across various structural challenges.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#projects"
                  className="bg-yellow-400 text-black px-6 py-2 text-sm font-semibold rounded-full hover:bg-yellow-300 transition text-center"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  View Our Projects
                </a>
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

      {/* Featured Projects Carousel */}
      <div id="projects">
        <FeaturedProjectsCarousel />
      </div>

      {/* Case Studies Header */}
      <section className="bg-white text-black pt-12 pb-6">
        <div className="text-center py-4 md:py-8 px-3 space-y-4 max-w-4xl mx-auto">
          <h2
            className="text-2xl md:text-4xl font-bold"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            Real Challenges. Smart Detailing Solutions.
          </h2>
          <p
            className="text-gray-700 text-base md:text-lg"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            Each case study highlights how our expertise directly impacted a
            project’s accuracy, cost efficiency, or schedule performance.
          </p>
        </div>
      </section>

      {/* Case Study 1 */}
      <section className="bg-white text-black pb-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/assets/images/projects/3d-sheet.png"
              alt="Workers welding steel in a factory"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2
              className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Case Study 1: Reducing Rework with Early Connection Input
            </h2>

            <p
              className="mb-4 text-base"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <span className="font-semibold">Client Type:</span> Steel Fabricator
            </p>
            <p
              className="mb-4 text-base"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <span className="font-semibold">Challenge:</span> Frequent
              back-and-forth with engineer during connection reviews
            </p>
            <p
              className="mb-4 text-base"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <span className="font-semibold">Our Role:</span> Provided
              specialized solution to coordinate with clear bolt layouts
            </p>
            <p
              className="mb-4 text-base"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <span className="font-semibold">Result:</span> Reduced RFI cycles by
              40%, saved 1+ weeks in fabrication delay
            </p>

            <Link
              to="/contact"
              className="inline-block mt-4 bg-[var(--color-primary)] text-black font-semibold px-6 py-3 rounded shadow hover:bg-yellow-300 transition"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study 2 */}
      <section className="bg-[var(--color-dark)] text-white py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2
              className="text-2xl md:text-3xl font-semibold mb-4"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Case Study 2: BOM Optimization for Cost-Sensitive Project
            </h2>

            <p
              className="mb-4 text-base text-gray-200"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <span className="font-semibold text-white">Client Type:</span> EPC Contractor
            </p>
            <p
              className="mb-4 text-base text-gray-200"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <span className="font-semibold text-white">Challenge:</span> Excess steel
              material due to overestimation
            </p>
            <p
              className="mb-4 text-base text-gray-200"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <span className="font-semibold text-white">Our Role:</span> Delivered precise
              quantity take-offs from 3D model
            </p>
            <p
              className="mb-4 text-base text-gray-200"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <span className="font-semibold text-white">Result:</span> 12% reduction in raw
              steel purchase, tighter production planning
            </p>

            <Link
              to="/contact"
              className="inline-block mt-4 bg-[var(--color-primary)] text-black font-semibold px-6 py-3 rounded shadow hover:bg-yellow-300 transition"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Learn More
            </Link>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <img
              src="/assets/images/projects/assembly-sheet.png"
              alt="Blueprints and BOM documents"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </section>

      {/* Case Study 3 */}
      <section className="bg-white text-black py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/assets/images/projects/erection-sheet.png"
              alt="Workers welding steel in a factory"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2
              className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Case Study 3: Field Issue Prevention via Detailed Erection Plans
            </h2>

            <p
              className="mb-4 text-base"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <span className="font-semibold">Client Type:</span> Commercial
              Builder
            </p>
            <p
              className="mb-4 text-base"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <span className="font-semibold">Challenge:</span> Misaligned columns
              due to poor framing clarity in initial design
            </p>
            <p
              className="mb-4 text-base"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <span className="font-semibold">Our Role:</span> Supplied detailed
              erection layouts with section markers
            </p>
            <p
              className="mb-4 text-base"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <span className="font-semibold">Result:</span> Zero field conflicts
              reported; smooth site execution
            </p>

            <Link
              to="/contact"
              className="inline-block mt-4 bg-[var(--color-primary)] text-black font-semibold px-6 py-3 rounded shadow hover:bg-yellow-300 transition"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
