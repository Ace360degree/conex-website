import React from 'react';
import { Seo } from '../../components/common/Seo';

interface WorkflowStep {
  title: string;
  items: string[];
  img: string;
  darkBg: boolean;
}

const workflowSteps: WorkflowStep[] = [
  {
    title: 'Requirement Gathering & Scope Review',
    items: [
      'Receive RFQ, drawings, models, and project specs',
      'Understand scope, codes, file formats, and deadlines',
      'Clarify missing inputs and confirm deliverables',
    ],
    img: '/assets/images/service/flow/requirement-gathering.png',
    darkBg: true,
  },
  {
    title: 'Estimation & Timeline Proposal',
    items: [
      'Project man-hour estimation',
      'Submission of quote with timeline and milestone planning',
      'Project kick-off upon client approval',
    ],
    img: '/assets/images/service/flow/estimited-time.png',
    darkBg: false,
  },
  {
    title: 'Modeling & Drafting Initiation',
    items: [
      'Begin 3D modeling of main members (columns, beams, braces)',
      'Develop base layout and framing structure',
      'Incorporate anchor bolts, plates, and embedded elements',
    ],
    img: '/assets/images/service/flow/modeling.png',
    darkBg: true,
  },
  {
    title: 'Connection Design & Detailing',
    items: [
      'Create/verify connection details as per load inputs or standard library',
      'Draft shop drawings with field annotations and fabricator standards',
    ],
    img: '/assets/images/service/flow/connection-design.png',
    darkBg: false,
  },
  {
    title: 'Internal Checking & QC',
    items: [
      'Run internal checks on geometry, dimensions, BOM, and constructability',
      'Peer review by senior checker or lead engineer',
      'Corrections and iterations logged',
    ],
    img: '/assets/images/service/flow/qc.png',
    darkBg: true,
  },
  {
    title: 'Client Review & Feedback',
    items: [
      'Submit first lot for client review',
      'Receive mark-ups and suggestions',
      'Revisions incorporated promptly with change log',
    ],
    img: '/assets/images/service/flow/client-review.png',
    darkBg: false,
  },
  {
    title: 'Final Submission',
    items: [
      'Submit final shop and erection drawings, BOM, CNC files (NC1, KSS, DXF)',
      'Label all revisions clearly',
      'Upload via secure FTP or client’s shared drive',
    ],
    img: '/assets/images/service/flow/ftp.png',
    darkBg: true,
  },
  {
    title: 'Post-Delivery Support',
    items: [
      'Assist with RFI resolutions, consultant comments',
      'Provide record drawings and revision control documents',
      'Support fabrication or field teams as needed',
    ],
    img: '/assets/images/service/flow/requirement-gathering.png',
    darkBg: false,
  },
];

export const ServiceFlow: React.FC = () => {
  return (
    <>
      <Seo
        title="Detailing Process & Service Flow | Innosteelix"
        description="Our detailing process from RFQ to fabrication-ready drawings. A structured, quality-driven 8-step workflow ensuring smooth execution and timely delivery."
        canonicalUrl="https://innosteelix.com/service/service-flow"
      />

      {/* Top Section */}
      <section className="w-full">
        <div className="w-full h-80 md:h-[450px] overflow-hidden relative">
          <img
            src="/assets/images/service/flow/hero-flow.png"
            alt="Construction Workers"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
      </section>

      {/* Header Intro */}
      <section className="py-16 px-4 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl md:text-4xl font-bold text-[#1e1e1e] mb-4"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            Our Detailing Process – From RFQ to Fabrication-Ready Drawings
          </h2>
          <p
            className="text-base md:text-lg text-gray-700 leading-relaxed"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            At Innosteelix, we follow a structured, quality-driven process that
            ensures smooth execution, timely delivery, and accurate documentation
            for every project. Whether it’s a basic framing job or a complex
            industrial structure, our approach is designed to minimize delays,
            maintain control, and keep your projects on track.
          </p>
        </div>
      </section>

      {/* Standard Detailing Workflow */}
      <section className="py-6">
        <div className="bg-[var(--color-dark)] text-white py-6 mx-auto text-center">
          <h2
            className="text-[var(--color-primary)] text-center text-3xl font-bold mb-2"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            Our Standard Detailing Workflow
          </h2>
        </div>

        {workflowSteps.map((step, idx) => {
          const isDark = step.darkBg;
          return (
            <div
              key={idx}
              className={`${
                isDark
                  ? 'bg-[var(--color-dark)] text-white'
                  : 'bg-white text-gray-900'
              } py-10 mx-auto transition-colors`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto items-center px-6">
                {/* Image Column */}
                <div
                  className={`py-3 flex justify-center ${
                    isDark ? 'md:justify-start' : 'md:justify-end'
                  } px-5`}
                >
                  <img
                    src={step.img}
                    alt={step.title}
                    className="max-w-[260px] h-auto object-contain"
                    data-aos={isDark ? 'fade-right' : 'fade-up'}
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                  />
                </div>

                {/* Text Column */}
                <div
                  className="py-3 px-6 space-y-4 my-auto"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  <h3
                    className={`text-xl md:text-2xl font-bold ${
                      isDark ? 'text-yellow-400' : 'text-gray-900'
                    }`}
                  >
                    {idx + 1}. {step.title}
                  </h3>
                  <ul
                    className={`list-disc list-inside space-y-2 text-base md:text-lg ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    {step.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};
