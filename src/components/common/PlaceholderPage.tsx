import React from 'react';
import { Seo } from './Seo';
import { PageBanner } from './PageBanner';

interface PlaceholderPageProps {
  title: string;
  routePath: string;
  bannerImage?: string;
  category?: string;
}

export const PlaceholderPage: React.FC<PlaceholderPageProps> = ({
  title,
  routePath,
  bannerImage = '/assets/images/projects/steel-rods.png',
  category = 'Page',
}) => {
  return (
    <div>
      <Seo title={title} />
      <PageBanner
        title={title}
        subtitle={`Conex Engineering ${category} — URL: ${routePath}`}
        imageSrc={bannerImage}
        showCtas={true}
      />

      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm">
          <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full uppercase tracking-wider mb-3">
            Phase 2: Foundation Verified
          </div>
          <h2 className="text-2xl font-bold text-[var(--color-dark)] mb-2">
            {title}
          </h2>
          <p className="text-gray-600 text-sm max-w-xl mx-auto mb-4">
            Route <code className="text-sm bg-gray-200 px-2 py-0.5 rounded text-gray-800">{routePath}</code> is registered and active in React Router.
          </p>
          <div className="text-xs text-gray-500">
            Full template migration will occur in Phase 3. Original source content is preserved in the Laravel application.
          </div>
        </div>
      </section>
    </div>
  );
};
