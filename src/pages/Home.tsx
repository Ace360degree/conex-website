import React from 'react';
import { Seo } from '../components/common/Seo';
import { HeroCarousel } from '../components/sections/HeroCarousel';
import { AboutOverview } from '../components/sections/AboutOverview';
import { ServicesOverviewGrid } from '../components/sections/ServicesOverviewGrid';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { Certifications } from '../components/sections/Certifications';
import { FeaturedProjectsCarousel } from '../components/sections/FeaturedProjectsCarousel';
import { CaseStudiesSection } from '../components/sections/CaseStudiesSection';
import { LatestBlogsSection } from '../components/sections/LatestBlogsSection';

export const Home: React.FC = () => {
  return (
    <>
      <Seo
        title="Home"
        description="Specialized in structural steel detailing, connection design, and drafting solutions that support fabrication efficiency and construction integrity."
        canonicalUrl="https://innosteelix.com/"
      />

      {/* Section 1: Hero Carousel */}
      <HeroCarousel />

      {/* Section 2: About Conex */}
      <AboutOverview />

      {/* Section 3: Services Overview Grid */}
      <ServicesOverviewGrid />

      {/* Section 4: Why Choose Us with Curved SVG Dividers */}
      <WhyChooseUs />

      {/* Section 5: Certifications and Standards (AISC & CISC) */}
      <Certifications />

      {/* Section 6: Featured Projects Carousel with Progress Bar */}
      <FeaturedProjectsCarousel />

      {/* Section 7 & 8: Case Studies & Latest Blogs */}
      <section className="bg-[#1e1e1e] text-white py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto space-y-16">
          <CaseStudiesSection />
          <LatestBlogsSection />
        </div>
      </section>
    </>
  );
};
