import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface HeroSlide {
  image: string;
  title: React.ReactNode;
  description: string;
}

const slides: HeroSlide[] = [
  {
    image: '/assets/images/home/hero-caraosal-1.png',
    title: (
      <>
        Detailing Steel.<br />
        Delivering Precision.
      </>
    ),
    description:
      'Specialized in structural steel detailing, connection design, and drafting solutions that support fabrication efficiency and construction integrity.',
  },
  {
    image: '/assets/images/blogs/construction-worker.png',
    title: 'Innovative Detailing',
    description:
      'Innovative Detailing brings cutting-edge solutions that transform ordinary concepts into extraordinary results, offering unmatched precision, creativity, and quality. Our commitment to excellence ensures every detail is meticulously crafted to exceed expectations and set new standards in the industry.',
  },
  {
    image: '/assets/images/about/team-discussing.png',
    title: 'Connection design',
    description:
      'Connection Design focuses on creating seamless, efficient, and user-centric solutions that bridge gaps between technology, people, and systems. We prioritize functionality, innovation, and intuitive experiences, ensuring that every connection enhances interaction and drives success across all platforms.',
  },
];

export const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoScroll = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    startAutoScroll();
  };

  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="carousel w-full relative h-[600px]" id="carousel">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={index}
              className={`carousel-item absolute inset-0 w-full h-[600px] flex flex-col md:flex-row items-center md:items-start px-6 py-16 md:py-32 bg-cover bg-center transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
              style={{
                backgroundImage: `url('${slide.image}')`,
              }}
            >
              {/* Subtle dark gradient overlay for optimal readability */}
              <div className="absolute inset-0 bg-black/40 z-0"></div>

              <div className="md:w-1/2 space-y-6 md:space-y-12 z-10 max-w-2xl">
                <h1
                  className="text-3xl md:text-5xl font-bold leading-tight"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  {slide.title}
                </h1>
                <p
                  className="text-base md:text-lg text-gray-200 leading-relaxed"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  {slide.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link
                    to="/projects"
                    className="bg-[var(--color-primary)] text-black px-6 py-3 rounded-2xl hover:bg-yellow-300 transition font-semibold text-center"
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                  >
                    View Our Projects
                  </Link>
                  <Link
                    to="/contact"
                    className="border border-white px-6 py-3 rounded-2xl hover:bg-[var(--color-primary)] hover:text-black hover:border-[var(--color-primary)] transition font-semibold text-center"
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                  >
                    Request A Quote
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Slide Indicators */}
      <div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20"
        id="carousel-indicators"
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentIndex
                ? 'bg-yellow-400 scale-110'
                : 'bg-white opacity-50 hover:opacity-80'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};
