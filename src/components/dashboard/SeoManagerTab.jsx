import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Plus, Pencil, Trash2, X, Eye } from 'lucide-react';

const emptyForm = {
  path: '',
  title: '',
  metaDescription: '',
  canonical: '',
  noindex: false,
  ogTitle: '',
  ogDescription: '',
  ogImage: '',
};

function SnippetPreview({ title, description }) {
  const siteName = 'taai-consult.nl';
  const displayTitle = title ? `${title} | Taai-Consult` : '';
  const titleLen = displayTitle.length;
  const descLen = (description || '').length;

  return (
    <div className="rounded-xl border p-4 bg-gray-50 space-y-2">
      <div className="flex items-center gap-2 mb-1">
        <Eye className="w-4 h-4 text-gray-400" />
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Google Snippet Preview</span>
      </div>
      <div className="text-xs text-green-700 font-medium">{siteName}</div>
      <div
        className="text-lg font-medium leading-snug"
        style={{ color: titleLen > 60 ? '#c0392b' : '#1a0dab' }}
      >
        {displayTitle || <span className="text-gray-300 italic">Geen titel ingesteld</span>}
        <span className="text-xs text-gray-400 ml-2">({titleLen}/60)</span>
      </div>
      <div
        className="text-sm leading-relaxed"
        style={{ color: descLen > 160 ? '#c0392b' : '#4d5156' }}
      >
        {description || <span className="text-gray-300 italic">Geen beschrijving ingesteld</span>}
        <span className="text-xs text-gray-400 ml-2">({descLen}/160)</span>
      </div>
    </div>
  );
}

function SeoForm({ initial, onSave, onCancel, isPending }) {
  const [form, setForm] = useState(initial || emptyForm);
  const f = (key) => (e) => setForm(p => ({ ...p, [key]: e.target.value }));

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm space-y-4 max-w-2xl">
      <div>
        <Label>URL-pad * <span className="text-gray-400 font-normal">(exact, bijv. / of /TrainingenVoorDeOr)</span></Label>
        <Input
          value={form.path}
          onChange={f('path')}
          placeholder="/"
          disabled={!!initial?.id}
          className={initial?.id ? 'bg-gray-50 text-gray-500' : ''}
        />
      </div>

      <SnippetPreview title={form.title} description={form.metaDescription} />

      <div>
        <Label>SEO Titel <span className="text-gray-400 font-normal">(zonder " | Taai-Consult")</span></Label>
        <Input value={form.title} onChange={f('title')} placeholder="Laat leeg voor de pagina-default" />
      </div>

      <div>
        <Label>Meta Description</Label>
        <Textarea
          value={form.metaDescription}
          onChange={f('metaDescription')}
          rows={3}
          placeholder="Laat leeg voor de pagina-default"
        />
      </div>

      <div>
        <Label>Canonical URL <span className="text-gray-400 font-normal">(bijv. /trainingen-voor-de-or)</span></Label>
        <Input value={form.canonical} onChange={f('canonical')} placeholder="Laat leeg voor de pagina-default" />
      </div>

      <div className="flex items-center gap-3 p-3 rounded-lg bg-yellow-50 border border-yellow-200">
        <Switch
          id="noindex"
          checked={form.noindex}
          onCheckedChange={(checked) => setForm(p => ({ ...p, noindex: checked }))}
        />
        <Label htmlFor="noindex" className="cursor-pointer">
          <span className="font-semibold">Noindex</span>
          <span className="text-gray-500 font-normal ml-1">— verberg deze pagina voor zoekmachines</span>
        </Label>
        {form.noindex && (
          <span className="ml-auto text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded">⚠ NOINDEX</span>
        )}
      </div>

      <details className="border rounded-lg p-3">
        <summary className="cursor-pointer text-sm font-medium text-gray-600">Open Graph (optioneel)</summary>
        <div className="mt-3 space-y-3">
          <div><Label>OG Titel</Label><Input value={form.ogTitle} onChange={f('ogTitle')} /></div>
          <div><Label>OG Beschrijving</Label><Textarea value={form.ogDescription} onChange={f('ogDescription')} rows={2} /></div>
          <div><Label>OG Afbeelding URL</Label><Input value={form.ogImage} onChange={f('ogImage')} placeholder="https://..." /></div>
        </div>
      </details>

      <div className="flex gap-2 pt-2">
        <Button
          disabled={isPending || !form.path}
          onClick={() => onSave(form)}
          style={{ backgroundColor: '#1F3F35', color: 'white' }}
        >
          {isPending ? 'Opslaan...' : 'Opslaan'}
        </Button>
        <Button variant="outline" onClick={onCancel}>Annuleren</Button>
      </div>
    </div>
  );
}

export default function SeoManagerTab() {
  const queryClient = useQueryClient();
  const [showNew, setShowNew] = useState(false);
  const [editId, setEditId] = useState(null);

  const { data: overrides = [], isLoading } = useQuery({
    queryKey: ['seo-overrides'],
    queryFn: () => base44.entities.SeoOverride.list('-created_date'),
  });

  const createMutation = useMutation({
    mutationFn: (data) => base44.entities.SeoOverride.create(data),
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['seo-overrides'] }); setShowNew(false); },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.SeoOverride.update(id, data),
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['seo-overrides'] }); setEditId(null); },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => base44.entities.SeoOverride.delete(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['seo-overrides'] }),
  });

  if (isLoading) return <p className="text-gray-400">Laden...</p>;

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button onClick={() => { setShowNew(true); setEditId(null); }} style={{ backgroundColor: '#1F3F35', color: 'white' }}>
          <Plus className="w-4 h-4 mr-1" /> Nieuwe SEO override
        </Button>
      </div>

      {showNew && (
        <SeoForm
          onSave={(data) => createMutation.mutate(data)}
          onCancel={() => setShowNew(false)}
          isPending={createMutation.isPending}
        />
      )}

      {overrides.length === 0 && !showNew && (
        <p className="text-gray-400 text-center py-12">Nog geen SEO overrides ingesteld.</p>
      )}

      <div className="space-y-2">
        {overrides.map(override => (
          <div key={override.id}>
            {editId === override.id ? (
              <SeoForm
                initial={override}
                onSave={(data) => updateMutation.mutate({ id: override.id, data })}
                onCancel={() => setEditId(null)}
                isPending={updateMutation.isPending}
              />
            ) : (
              <div className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono font-semibold text-sm" style={{ color: '#1F3F35' }}>{override.path}</span>
                    {override.noindex && (
                      <span className="text-xs font-semibold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded">NOINDEX</span>
                    )}
                    {override.title && (
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">Titel ✓</span>
                    )}
                    {override.metaDescription && (
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">Description ✓</span>
                    )}
                    {override.canonical && (
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">Canonical ✓</span>
                    )}
                  </div>
                  {override.title && (
                    <p className="text-xs text-gray-400 mt-1 truncate">{override.title}</p>
                  )}
                </div>
                <div className="flex gap-1 flex-shrink-0">
                  <Button size="sm" variant="ghost" onClick={() => { setEditId(override.id); setShowNew(false); }}>
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm" variant="ghost" className="text-red-500"
                    onClick={() => { if (confirm(`Override voor "${override.path}" verwijderen?`)) deleteMutation.mutate(override.id); }}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}