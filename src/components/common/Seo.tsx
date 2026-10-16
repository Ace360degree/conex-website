import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description?: string;
  canonicalUrl?: string;
}

export const Seo: React.FC<SeoProps> = ({
  title,
  description = 'Specialized in structural steel detailing, connection design, and drafting solutions that support fabrication efficiency and construction integrity.',
  canonicalUrl,
}) => {
  const fullTitle = title.includes('Conex') ? title : `${title} | Conex`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  );
};
