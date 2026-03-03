import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { createPageUrl } from '@/utils';
import SEO from '../components/SEO';

import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import WhitepaperDownloadForm from '../components/blog/WhitepaperDownloadForm';

export default function BlogPost() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['blogpost', slug],
    queryFn: () => base44.entities.BlogPost.filter({ slug, published: true }),
    enabled: !!slug,
  });

  const post = posts[0];

  if (isLoading) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
        <div className="h-64 bg-gray-200 rounded" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Blogpost niet gevonden</h1>
        <Link to={createPageUrl('Blog')} className="inline-flex items-center gap-2" style={{ color: '#2F5B4C' }}>
          <ArrowLeft className="w-4 h-4" /> Terug naar blog
        </Link>
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.seoDescription || post.summary,
    "image": post.imageUrl || undefined,
    "author": {
      "@type": "Person",
      "name": post.author || "Taai-Consult"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Taai-Consult",
      "url": "https://taai-consult.nl"
    },
    "datePublished": post.publishedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://taai-consult.nl/BlogPost?slug=${post.slug}`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SEO
        title={post.seoTitle || post.title}
        description={post.seoDescription || post.summary}
        canonical={`/BlogPost?slug=${post.slug}`}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Terug link */}
        <Link
          to={createPageUrl('Blog')}
          className="inline-flex items-center gap-2 text-sm mb-8 hover:underline"
          style={{ color: '#2F5B4C' }}
        >
          <ArrowLeft className="w-4 h-4" /> Terug naar blog
        </Link>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full"
                style={{ backgroundColor: '#DCE5E0', color: '#1F3F35' }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Titel */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight" style={{ color: '#1F3F35' }}>
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{post.author || 'Taai-Consult'}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>
              {new Date(post.publishedDate).toLocaleDateString('nl-NL', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
          </div>
        </div>

        {/* Afbeelding */}
        {post.imageUrl && (
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full rounded-xl mb-8 object-cover max-h-80"
          />
        )}

        {/* Inhoud */}
        <div
          className="prose prose-lg max-w-none prose-headings:text-[#1F3F35] prose-a:text-[#2F5B4C] prose-strong:text-[#2E2E2E]"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Whitepaper download */}
        {post.whitepaperUrl && <WhitepaperDownloadForm post={post} />}

        {/* CTA onderaan */}
        <div className="mt-16 p-8 rounded-xl text-white text-center" style={{ background: 'linear-gradient(135deg, #1F3F35, #2F5B4C)' }}>
          <h2 className="text-2xl font-bold mb-3">Meer weten of een gesprek plannen?</h2>
          <p className="mb-6 opacity-90">Neem vrijblijvend contact met ons op.</p>
          <Link
            to={createPageUrl('Contact')}
            className="inline-block px-8 py-3 rounded-lg font-medium"
            style={{ backgroundColor: '#DCE5E0', color: '#1F3F35' }}
          >
            Neem contact op
          </Link>
        </div>
      </div>
    </>
  );
}