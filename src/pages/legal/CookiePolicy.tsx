import React from 'react';
import { Seo } from '../../components/common/Seo';

export const CookiePolicy: React.FC = () => {
  return (
    <>
      <Seo
        title="Cookie Policy | Conex Engineering"
        description="Learn about the cookie policy of Conex Engineering, how we use cookies, and how you can manage your cookie preferences."
        canonicalUrl="https://conexengineering.com/cookie-policy"
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
            Cookie Policy
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
            This site uses cookies to enhance your experience and analyze site
            traffic.
          </p>

          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">
                What Are Cookies?
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Cookies are small files stored on your device that help us
                improve your browsing experience.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">
                Types of Cookies We Use
              </h2>
              <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 leading-relaxed pl-1 space-y-2">
                <li>
                  <strong className="font-semibold text-gray-900">Essential cookies – </strong>
                  Enable core site functionality
                </li>
                <li>
                  <strong className="font-semibold text-gray-900">Analytics cookies – </strong>
                  Enable core site functionality
                </li>
                <li>
                  <strong className="font-semibold text-gray-900">Preference cookies – </strong>
                  Enable core site functionality
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">
                Managing Cookies
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                You can control or disable cookies via your browser settings. By
                continuing to use the site, you consent to our cookie usage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
