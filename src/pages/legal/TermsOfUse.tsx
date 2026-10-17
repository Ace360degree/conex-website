import React from 'react';
import { Seo } from '../../components/common/Seo';

export const TermsOfUse: React.FC = () => {
  return (
    <>
      <Seo
        title="Terms of Use | Conex Engineering"
        description="Review the Terms of Use for accessing and using the Conex Engineering website and structural steel detailing services."
        canonicalUrl="https://conexengineering.com/terms-of-use"
      />

      {/* Hero Banner */}
      <section className="bg-[var(--color-dark)] text-white py-14 md:py-18 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-3xl md:text-5xl font-bold tracking-tight text-white"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            Terms of Use
          </h1>
          <div className="w-16 h-1 bg-[var(--color-primary)] mx-auto mt-4 rounded-full"></div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white text-[var(--color-dark)] py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-4xl mx-auto space-y-8"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            By accessing and using this website (www.conexengineering.com), you agree
            to comply with and be bound by the following Terms of Use. If you do
            not agree with these terms, please do not use this website.
          </p>

          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">
                Use of Website
              </h2>
              <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 leading-relaxed pl-1 space-y-2">
                <li>
                  The content of this website is for general information
                  purposes only. It is subject to change without notice.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">
                Intellectual Property
              </h2>
              <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 leading-relaxed pl-1 space-y-2">
                <li>
                  All content, images, and materials on this site are the
                  property of Conex Engineering or its licensors. Reproduction
                  is prohibited unless authorized in writing.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">
                Limitation of Liability
              </h2>
              <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 leading-relaxed pl-1 space-y-2">
                <li>
                  We make every effort to ensure the accuracy of
                  information; however, Conex Engineering is not liable for any
                  loss or damage arising from the use of this site or the
                  reliance on information provided.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">
                External Links
              </h2>
              <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 leading-relaxed pl-1 space-y-2">
                <li>
                  Our website may contain links to third-party sites. We
                  do not endorse or take responsibility for the content or
                  practices of these sites.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
