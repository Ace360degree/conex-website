import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRightCircle, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectSlide {
  img: string;
  title: string;
  desc: string;
}

const featuredSlides: ProjectSlide[] = [
  {
    img: '/assets/images/home/features/industrial-logical-hub.png',
    title: 'Industrial Logistics Hub',
    desc: 'Full-service drafting, full rendered layouts, connection drawings, BOM.',
  },
  {
    img: '/assets/images/home/features/person.png',
    title: 'Modern Retail Space',
    desc: 'Turnkey design, MEP integration, and 3D rendering for commercial use.',
  },
  {
    img: '/assets/images/home/features/team.png',
    title: 'High-Tech Manufacturing Facility',
    desc: 'Optimized layouts with precision detailing and compliance support.',
  },
];

export const FeaturedProjectsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const navigate = useNavigate();

  const startAutoPlay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredSlides.length);
    }, 6000);
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredSlides.length);
    startAutoPlay();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredSlides.length) % featuredSlides.length);
    startAutoPlay();
  };

  const currentSlide = featuredSlides[currentIndex];
  const progressPercent = ((currentIndex + 1) / featuredSlides.length) * 100;

  return (
    <section className="relative bg-[#1e1e1e] text-white py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 relative">
          {/* Left Image with Prev/Next subtle controls */}
          <div className="w-full md:w-1/2 relative overflow-hidden rounded-lg group">
            <img
              id="carousel-image"
              src={currentSlide.img}
              alt={currentSlide.title}
              className="w-full h-80 md:h-96 object-cover rounded-lg transition-all duration-500 ease-in-out"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            />
            {/* Nav Arrows */}
            <button
              onClick={prevSlide}
              aria-label="Previous Project"
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-yellow-400 hover:text-black transition opacity-0 group-hover:opacity-100 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Project"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-yellow-400 hover:text-black transition opacity-0 group-hover:opacity-100 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 space-y-3">
            <h2
              className="text-3xl font-semibold mb-2"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Featured Projects
            </h2>
            <h3
              id="carousel-title"
              className="text-yellow-400 font-medium text-xl mb-2 transition-all duration-300"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              {currentSlide.title}
            </h3>
            <p
              id="carousel-desc"
              className="text-gray-300 mb-4 text-base leading-relaxed transition-all duration-300"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              {currentSlide.desc}
            </p>
            <button
              onClick={() => navigate('/projects')}
              className="cursor-pointer focus:outline-none inline-block text-yellow-400 hover:text-yellow-300 transition hover:scale-110"
              title="View Projects"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <ArrowRightCircle className="w-8 h-8" />
            </button>
          </div>
        </div>

        {/* Explore All Button */}
        <div className="flex justify-center my-6">
          <Link
            to="/projects"
            className="bg-yellow-400 text-black text-sm px-6 py-2.5 rounded-full font-semibold hover:bg-yellow-300 transition cursor-pointer shadow"
          >
            Explore All Projects
          </Link>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 flex justify-center">
          <div className="w-80 h-1.5 bg-gray-600 rounded-full overflow-hidden">
            <div
              id="carousel-progress"
              className="h-full bg-yellow-400 transition-all duration-500 ease-in-out"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
