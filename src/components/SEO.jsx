import { useEffect } from 'react';

export default function SEO({ 
  title, 
  description, 
  canonical, 
  noindex = false 
}) {
  const fullTitle = title ? `${title} | Taai-Consult` : 'Taai-Consult | Trainingen en ondersteuning voor OR en commissies';
  const siteUrl = 'https://taai-consult.nl';
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  useEffect(() => {
    // Set title
    document.title = fullTitle;

    // Set or update meta tags
    const setMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Set description
    setMetaTag('description', description);

    // Set robots if noindex
    if (noindex) {
      setMetaTag('robots', 'noindex, follow');
    }

    // Set Open Graph tags
    setMetaTag('og:title', fullTitle, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:url', canonicalUrl, true);
    setMetaTag('og:type', 'website', true);

    // Set canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);
  }, [fullTitle, description, canonicalUrl, noindex]);

  return null;
}