import React from 'react';
import { FileDown } from 'lucide-react';

interface CaseStudy {
  img: string;
  title: string;
}

const caseStudies: CaseStudy[] = [
  {
    img: '/assets/images/home/case-study/hand-shake.png',
    title: 'Reducing field conflicts through proactive connection design',
  },
  {
    img: '/assets/images/home/case-study/boult.png',
    title: 'Optimizing anchor bolt layouts in tight commercial cores',
  },
  {
    img: '/assets/images/home/case-study/streamline-animation.png',
    title: 'Streamlining revisions through modular detailing techniques',
  },
];

export const CaseStudiesSection: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 space-y-4 md:space-y-0">
        <div>
          <h2
            className="text-2xl md:text-3xl font-bold"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            Case Studies (PPT-ready Section)
          </h2>
          <p
            className="text-gray-300 mt-2 max-w-2xl text-base"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            We document outcomes where our input directly impacted time savings,
            steel optimization, or error reduction.
          </p>
        </div>
        <a
          href="#download-case-studies"
          onClick={(e) => {
            e.preventDefault();
            alert('Case Studies PDF will be made available upon request. Please contact info@conexengineering.com.');
          }}
          className="inline-flex items-center bg-yellow-400 text-black font-semibold px-5 py-2.5 rounded-full hover:bg-yellow-300 transition text-sm cursor-pointer shadow"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <FileDown className="w-4 h-4 mr-2" />
          Download Case Studies PDF
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {caseStudies.map((study, idx) => (
          <div
            key={idx}
            className="bg-black rounded-lg overflow-hidden shadow-lg transition hover:scale-[1.02]"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <img
              src={study.img}
              alt={`Case Study ${idx + 1}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-sm text-white leading-relaxed">
              {study.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
