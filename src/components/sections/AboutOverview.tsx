import React from 'react';
import { Link } from 'react-router-dom';

export const AboutOverview: React.FC = () => {
  return (
    <section className="bg-[var(--color-dark)] text-white px-6 py-12 md:py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <img
            src="/assets/images/home/about.png"
            alt="About Conex Engineering"
            className="w-full rounded-lg shadow-lg object-cover"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 w-full space-y-6">
          <h2
            className="text-3xl md:text-4xl font-bold"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            About{' '}
            <span className="text-[var(--color-primary)]">Conex Engineering</span>
          </h2>

          <p
            className="text-gray-300 text-sm md:text-base leading-relaxed"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            Since 2010, Conex Engineering has provided high-precision steel
            detailing services for commercial and industrial structures. We
            blend technical accuracy with proactive collaboration, offering
            not just drawings, but design insights, connection reviews, and
            cost-saving detailing inputs.
          </p>

          <p
            className="text-gray-300 text-sm md:text-base leading-relaxed"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            With years of industry experience and a strong process-driven
            approach, we've become a reliable partner for steel fabricators,
            consultants, and contractors globally.
          </p>

          <Link
            to="/about-us"
            className="inline-block bg-[var(--color-primary)] text-black font-semibold px-6 py-3 rounded-2xl hover:bg-yellow-300 transition"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};
