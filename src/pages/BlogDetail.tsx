import React from 'react';
import { Seo } from '../components/common/Seo';
import { BlogSidebar } from '../components/blog/BlogSidebar';

export const BlogDetail: React.FC = () => {
  return (
    <>
      <Seo
        title="Top 5 Steel Detailing Mistakes That Lead to Fabrication Delays | Conex Engineering Blog"
        description="Understand the common steel detailing mistakes that cost time and money in fabrication — and how early coordination, accurate dimensions, and quality checks prevent them."
        canonicalUrl="https://conexengineering.com/blog/steel-detailing-mistake"
      />

      {/* Top Banner */}
      <section className="w-full">
        <div className="w-full h-80 md:h-[450px] overflow-hidden relative">
          <img
            src="/assets/images/blogs/construction-worker.png"
            alt="Construction Workers"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
      </section>

      {/* Article Content + Sidebar */}
      <section className="bg-[var(--color-dark)] text-[var(--color-white)] py-10 px-4 md:px-10">
        <div className="max-w-screen-xl mx-auto relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cols 1–2: Blog Content */}
          <article className="md:col-span-2 space-y-6 md:pr-6">
            <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              Top 5 Steel Detailing Mistakes That Lead to Fabrication Delays
            </h1>
            <p className="text-gray-400 text-sm">Published on 12/05/2025</p>

            <div className="space-y-6 text-sm md:text-base text-gray-200 leading-relaxed pt-2">
              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-white">
                  What are the most common steel detailing mistakes that lead to fabrication delays?
                </h2>
                <p>
                  Some common mistakes include poor communication between the
                  design and fabrication teams, inaccurate dimensions, incomplete or
                  unclear details, failing to account for material constraints,
                  and missing or incorrect weld symbols. These errors can cause
                  confusion, rework, and delays during the fabrication process.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-white">
                  Why do these steel detailing mistakes lead to fabrication delays?
                </h2>
                <p>
                  These mistakes lead to delays because they create errors in the
                  fabrication process that require additional time to correct. For
                  example, inaccurate dimensions may result in parts that don't fit
                  together, requiring remeasurement or redesign. Similarly,
                  unclear details can cause misinterpretation and wasted effort,
                  further prolonging the project timeline.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-white">
                  Where do these steel detailing mistakes typically occur in the process?
                </h2>
                <p>
                  These mistakes often occur during the transition from design to
                  detailing, where communication gaps can happen. They can also
                  occur during the creation of shop drawings or when details are
                  overlooked during design review phases. Additionally,
                  fabrication delays can stem from the failure to review material
                  constraints and site-specific needs.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-white">
                  What impact do steel detailing mistakes have on the overall project timeline?
                </h2>
                <p>
                  Steel detailing mistakes can significantly extend the project
                  timeline as they often require rework, additional inspections,
                  or delays in the procurement of materials. These issues can
                  also affect downstream activities such as assembly, welding,
                  and delivery, causing a ripple effect that disrupts the entire
                  construction schedule.
                </p>
              </section>
            </div>
          </article>

          {/* Col 3: Recent Blogs (Dynamic Carousel) */}
          <div className="md:pl-6">
            <BlogSidebar headingClassName="text-2xl font-semibold text-white" />
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block absolute top-0 bottom-0 left-2/3 w-px bg-white/20"></div>
        </div>
      </section>
    </>
  );
};
