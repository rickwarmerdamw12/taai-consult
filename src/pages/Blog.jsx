import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { createPageUrl } from '@/utils';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import PageSection from '../components/PageSection';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';

export default function Blog() {
  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['blogposts'],
    queryFn: () => base44.entities.BlogPost.filter({ published: true }, '-publishedDate'),
  });

  return (
    <>
      <SEO
        title="Blog"
        description="Lees de laatste artikelen van Taai-Consult over medezeggenschap, ondernemingsraden, en OR-trainingen."
        canonical="/Blog"
      />

      <Hero
        title="Blog"
        subtitle="Inzichten, tips en nieuws over medezeggenschap en ondernemingsraden."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm" style={{ border: '1px solid #AFC1B7' }}>
          <Link to="/TrainingenVoorDeOr" className="font-semibold" style={{ color: '#2F5B4C' }}>Bekijk OR trainingen →</Link>
        </div>
      </div>

      <PageSection>
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200" />
                <div className="p-6 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <p className="text-xl">Binnenkort verschijnen hier onze eerste blogposts.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                {post.imageUrl && (
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6 flex flex-col flex-grow">
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full"
                          style={{ backgroundColor: '#DCE5E0', color: '#1F3F35' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <h2 className="text-xl font-bold mb-3 leading-snug" style={{ color: '#1F3F35' }}>
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 flex-grow leading-relaxed">
                    {post.summary}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400 mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author || 'Taai-Consult'}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>
                        {new Date(post.publishedDate).toLocaleDateString('nl-NL', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                  </div>
                  <Link
                    to={createPageUrl(`BlogPost?slug=${post.slug}`)}
                    className="mt-4 inline-flex items-center gap-2 font-medium hover:gap-3 transition-all"
                    style={{ color: '#2F5B4C' }}
                  >
                    Lees meer <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </PageSection>
    </>
  );
}