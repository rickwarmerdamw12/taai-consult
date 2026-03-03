import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Download, CheckCircle2 } from 'lucide-react';

export default function WhitepaperDownloadForm({ post }) {
  const [form, setForm] = useState({ naam: '', email: '', organisatie: '', telefoon: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await base44.entities.WhitepaperDownload.create({
      ...form,
      blogPostId: post.id,
      blogPostTitle: post.title,
      whitepaperUrl: post.whitepaperUrl,
    });
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="mt-12 p-8 rounded-xl border-2 text-center" style={{ borderColor: '#AFC1B7', backgroundColor: '#F4F4F4' }}>
        <CheckCircle2 className="w-10 h-10 mx-auto mb-3" style={{ color: '#1F3F35' }} />
        <h3 className="text-xl font-bold mb-2" style={{ color: '#1F3F35' }}>Bedankt!</h3>
        <p className="text-gray-600 mb-5">Klik op de knop hieronder om de whitepaper te downloaden.</p>
        <a
          href={post.whitepaperUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white"
          style={{ backgroundColor: '#1F3F35' }}
        >
          <Download className="w-4 h-4" />
          Download whitepaper
        </a>
      </div>
    );
  }

  return (
    <div className="mt-12 p-8 rounded-xl border-2" style={{ borderColor: '#AFC1B7', backgroundColor: '#F4F4F4' }}>
      <div className="flex items-center gap-3 mb-2">
        <Download className="w-6 h-6" style={{ color: '#1F3F35' }} />
        <h3 className="text-xl font-bold" style={{ color: '#1F3F35' }}>
          {post.whitepaperFormTitle || 'Download de whitepaper'}
        </h3>
      </div>
      {post.whitepaperFormDescription && (
        <p className="text-gray-600 mb-5">{post.whitepaperFormDescription}</p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label>Naam *</Label>
            <Input
              value={form.naam}
              onChange={(e) => setForm((f) => ({ ...f, naam: e.target.value }))}
              required
              placeholder="Uw naam"
            />
          </div>
          <div>
            <Label>E-mailadres *</Label>
            <Input
              type="email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              required
              placeholder="uw@email.nl"
            />
          </div>
          <div>
            <Label>Organisatie *</Label>
            <Input
              value={form.organisatie}
              onChange={(e) => setForm((f) => ({ ...f, organisatie: e.target.value }))}
              required
              placeholder="Naam van uw organisatie"
            />
          </div>
          <div>
            <Label>Telefoonnummer</Label>
            <Input
              value={form.telefoon}
              onChange={(e) => setForm((f) => ({ ...f, telefoon: e.target.value }))}
              placeholder="Optioneel"
            />
          </div>
        </div>
        <Button
          type="submit"
          disabled={loading}
          className="mt-2"
          style={{ backgroundColor: '#1F3F35', color: 'white' }}
        >
          <Download className="w-4 h-4 mr-2" />
          {loading ? 'Bezig...' : 'Whitepaper downloaden'}
        </Button>
      </form>
    </div>
  );
}