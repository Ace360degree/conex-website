import React from 'react';
import { Seo } from '../../components/common/Seo';

export const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Seo
        title="Privacy Policy | Conex Engineering"
        description="Read the Conex Engineering Privacy Policy to understand how we collect, use, and protect your personal data and project information."
        canonicalUrl="https://conexengineering.com/privacy-policy"
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
            Privacy Policy
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
            We are committed to protecting your privacy. This policy outlines
            how we collect, use, and protect your information.
          </p>

          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">
                Information We Collect
              </h2>
              <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 leading-relaxed pl-1 space-y-2">
                <li>
                  Name, email, phone number, and company (if submitted via forms)
                </li>
                <li>
                  IP address and browser data via cookies and analytics tools
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">
                How We Use Your Data
              </h2>
              <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 leading-relaxed pl-1 space-y-2">
                <li>To respond to your inquiries</li>
                <li>To send project-related communication</li>
                <li>To improve website performance and user experience</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">
                Data Sharing
              </h2>
              <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 leading-relaxed pl-1 space-y-2">
                <li>
                  We do not sell or rent your data. It may be shared with
                  trusted third parties (e.g., cloud hosting, analytics tools) for
                  operational purposes.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">
                Data Security
              </h2>
              <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 leading-relaxed pl-1 space-y-2">
                <li>
                  All data is stored securely, and access is limited to
                  authorized personnel only.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">
                Your Rights
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                You may request, edit, or delete your personal data by emailing us
                at:{' '}
                <a
                  href="mailto:privacy@conexengineering.com"
                  className="font-semibold text-gray-900 underline hover:text-[var(--color-primary)] transition"
                >
                  privacy@conexengineering.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
