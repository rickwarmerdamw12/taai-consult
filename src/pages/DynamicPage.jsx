import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import SEO from '../components/SEO';
import { ArrowLeft } from 'lucide-react';

export default function DynamicPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug') || window.location.pathname.split('/pagina/')[1]?.split('/')[0] || '';

  const { data: pages = [], isLoading } = useQuery({
    queryKey: ['dynamic-page', slug],
    queryFn: () => base44.entities.Page.filter({ slug }),
  });

  const page = pages[0] || null;

  // Structured data (JSON-LD)
  useEffect(() => {
    const existingScript = document.querySelector('script[data-type="structured-data"]');
    if (existingScript) existingScript.remove();

    if (!page || page.structuredDataType === 'none' || !page.structuredDataType) return;

    let schema = null;

    if (page.structuredDataType === 'FAQPage' && page.faqItems?.length > 0) {
      schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: page.faqItems.map(item => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      };
    } else if (page.structuredDataType === 'Article') {
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: page.seoTitle || page.title,
        description: page.metaDescription || page.summary,
        datePublished: page.publishedDate,
        publisher: {
          '@type': 'Organization',
          name: 'Taai-Consult',
          url: 'https://taai-consult.nl',
        },
      };
    } else if (page.structuredDataType === 'Service') {
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: page.seoTitle || page.title,
        description: page.metaDescription || page.summary,
        provider: {
          '@type': 'Organization',
          name: 'Taai-Consult',
          url: 'https://taai-consult.nl',
        },
      };
    }

    if (schema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-type', 'structured-data');
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      const s = document.querySelector('script[data-type="structured-data"]');
      if (s) s.remove();
    };
  }, [page]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Laden...</div>
      </div>
    );
  }

  if (!page || !page.published) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold mb-4" style={{ color: '#1F3F35' }}>Pagina niet gevonden</h1>
        <p className="text-gray-500 mb-8">De pagina die je zoekt bestaat niet of is niet beschikbaar.</p>
        <Link to="/" className="inline-flex items-center gap-2 font-medium" style={{ color: '#2F5B4C' }}>
          <ArrowLeft className="w-4 h-4" /> Terug naar home
        </Link>
      </div>
    );
  }

  const canonicalPath = page.canonicalUrl || `/pagina/${page.slug}`;

  return (
    <>
      <SEO
        title={page.seoTitle || page.title}
        description={page.metaDescription || page.summary}
        canonical={canonicalPath}
        noindex={page.noIndex}
      />

      {/* Hero */}
      {page.imageUrl ? (
        <div className="relative h-64 sm:h-80 overflow-hidden">
          <img
            src={page.imageUrl}
            alt={page.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-end" style={{ background: 'linear-gradient(to top, rgba(31,63,53,0.8) 0%, transparent 60%)' }}>
            <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-10">
              <h1 className="text-3xl sm:text-5xl font-bold text-white">{page.title}</h1>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-white py-16" style={{ background: 'linear-gradient(135deg, #1F3F35 0%, #2F5B4C 100%)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-5xl font-bold">{page.title}</h1>
            {page.summary && (
              <p className="mt-4 text-lg" style={{ color: '#DCE5E0' }}>{page.summary}</p>
            )}
          </div>
        </div>
      )}

      {/* Content */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {page.imageUrl && page.summary && (
            <p className="text-xl text-gray-600 mb-10 leading-relaxed border-l-4 pl-6" style={{ borderColor: '#6F8F80' }}>
              {page.summary}
            </p>
          )}
          <div
            className="prose prose-lg max-w-none"
            style={{ color: '#2E2E2E' }}
            dangerouslySetInnerHTML={{ __html: page.content }}
          />

          {/* FAQ sectie */}
          {page.structuredDataType === 'FAQPage' && page.faqItems?.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8" style={{ color: '#1F3F35' }}>Veelgestelde vragen</h2>
              <div className="space-y-4">
                {page.faqItems.map((item, idx) => (
                  <details key={idx} className="border rounded-lg overflow-hidden" style={{ borderColor: '#AFC1B7' }}>
                    <summary className="px-6 py-4 font-medium cursor-pointer" style={{ color: '#1F3F35', backgroundColor: '#F4F4F4' }}>
                      {item.question}
                    </summary>
                    <div className="px-6 py-4 text-gray-700 leading-relaxed">
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 pt-8 border-t flex items-center justify-between flex-wrap gap-4" style={{ borderColor: '#DCE5E0' }}>
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
              <ArrowLeft className="w-4 h-4" /> Terug naar home
            </Link>
            <Link
              to="/Contact"
              className="inline-block px-6 py-3 text-white rounded-lg text-sm font-medium"
              style={{ background: 'linear-gradient(90deg, #2F5B4C 0%, #1C3A30 100%)' }}
            >
              Neem contact op
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}