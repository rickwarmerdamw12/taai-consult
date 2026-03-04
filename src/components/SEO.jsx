import { useEffect } from 'react';

export default function SEO({ 
  title, 
  description, 
  canonical, 
  noindex = false,
  override = null
}) {
  // Apply override values if present, fallback to props
  const resolvedTitle = (override?.title) || title;
  const resolvedDescription = (override?.metaDescription) || description;
  const resolvedCanonical = (override?.canonical) || canonical;
  const resolvedNoindex = override?.noindex != null ? override.noindex : noindex;
  const resolvedOgTitle = override?.ogTitle || null;
  const resolvedOgDescription = override?.ogDescription || null;
  const resolvedOgImage = override?.ogImage || null;

  const fullTitle = resolvedTitle
    ? `${resolvedTitle} | Taai-Consult`
    : 'Taai-Consult | Trainingen en ondersteuning voor OR en commissies';
  const siteUrl = 'https://taai-consult.nl';
  const canonicalUrl = resolvedCanonical
    ? (resolvedCanonical.startsWith('http') ? resolvedCanonical : `${siteUrl}${resolvedCanonical}`)
    : siteUrl;

  useEffect(() => {
    document.title = fullTitle;

    const setMetaTag = (name, content, isProperty = false) => {
      if (!content) return;
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    if (resolvedDescription) setMetaTag('description', resolvedDescription);

    // Always set robots to avoid SPA navigation leaving stale values
    setMetaTag('robots', resolvedNoindex ? 'noindex, follow' : 'index, follow');

    setMetaTag('og:title', resolvedOgTitle || fullTitle, true);
    setMetaTag('og:description', resolvedOgDescription || resolvedDescription, true);
    setMetaTag('og:url', canonicalUrl, true);
    setMetaTag('og:type', 'website', true);
    if (resolvedOgImage) setMetaTag('og:image', resolvedOgImage, true);

    // Twitter Card
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', resolvedOgTitle || fullTitle);
    setMetaTag('twitter:description', resolvedOgDescription || resolvedDescription);
    if (resolvedOgImage) setMetaTag('twitter:image', resolvedOgImage);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);
  }, [fullTitle, resolvedDescription, canonicalUrl, resolvedNoindex, resolvedOgTitle, resolvedOgDescription, resolvedOgImage]);

  return null;
}