import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description?: string;
  canonicalUrl?: string;
}

export const Seo: React.FC<SeoProps> = ({
  title,
  description = 'Conex Engineering specializes in structural steel detailing, connection design, and drafting solutions that support fabrication efficiency and construction integrity.',
  canonicalUrl,
}) => {
  const formattedTitle = title.includes('Conex Engineering')
    ? title
    : title.includes('Conex')
    ? title.replace(/\bConex\b/g, 'Conex Engineering')
    : `${title} | Conex Engineering`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Conex Engineering',
    url: 'https://conexengineering.com',
    logo: 'https://conexengineering.com/assets/images/header/newlogo2_conex.png',
    description: description,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-9833379941',
        contactType: 'customer service',
        areaServed: 'IN',
      },
      {
        '@type': 'ContactPoint',
        telephone: '+1-976-9698-7434',
        contactType: 'customer service',
        areaServed: 'US',
      },
    ],
  };

  return (
    <Helmet>
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:site_name" content="Conex Engineering" />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
