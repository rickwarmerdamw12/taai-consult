import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({ 
  title, 
  description, 
  canonical, 
  noindex = false 
}) {
  const fullTitle = title ? `${title} | Taai-Consult` : 'Taai-Consult | Trainingen en ondersteuning voor OR en commissies';
  const siteUrl = 'https://taai-consult.nl';
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}