import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Plus, Pencil, Trash2, Upload, X, Globe, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const emptyForm = {
  title: '',
  slug: '',
  summary: '',
  content: '',
  imageUrl: '',
  published: false,
  publishedDate: new Date().toISOString().split('T')[0],
  seoTitle: '',
  metaDescription: '',
  canonicalUrl: '',
  noIndex: false,
  structuredDataType: 'none',
  faqItems: [],
};

const generateSlug = (title) =>
  title.toLowerCase()
    .replace(/[àáâãäå]/g, 'a').replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i').replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u').replace(/[ñ]/g, 'n')
    .replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');

export default function PagesTab() {
  const queryClient = useQueryClient();
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [activeSection, setActiveSection] = useState('inhoud');

  const { data: pages = [], isLoading } = useQuery({
    queryKey: ['pages-beheer'],
    queryFn: () => base44.entities.Page.list('-updated_date'),
  });

  const saveMutation = useMutation({
    mutationFn: (data) => {
      if (editing === 'new') return base44.entities.Page.create(data);
      return base44.entities.Page.update(editing.id, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pages-beheer'] });
      setEditing(null);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => base44.entities.Page.delete(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['pages-beheer'] }),
  });

  const openNew = () => { setForm(emptyForm); setEditing('new'); setUploadError(''); setActiveSection('inhoud'); };
  const openEdit = (page) => { setForm({ ...emptyForm, ...page }); setEditing(page); setUploadError(''); setActiveSection('inhoud'); };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    setUploadError('');
    const result = await base44.integrations.Core.UploadFile({ file });
    if (result?.file_url) setForm(f => ({ ...f, imageUrl: result.file_url }));
    else setUploadError('Upload mislukt. Probeer opnieuw.');
    setUploading(false);
  };

  const addFaqItem = () => setForm(f => ({ ...f, faqItems: [...(f.faqItems || []), { question: '', answer: '' }] }));
  const updateFaqItem = (idx, field, value) => setForm(f => ({
    ...f,
    faqItems: f.faqItems.map((item, i) => i === idx ? { ...item, [field]: value } : item),
  }));
  const removeFaqItem = (idx) => setForm(f => ({ ...f, faqItems: f.faqItems.filter((_, i) => i !== idx) }));

  const sectionBtn = (key, label) => (
    <button
      type="button"
      onClick={() => setActiveSection(key)}
      className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${activeSection === key ? 'text-white' : 'text-gray-600 hover:bg-gray-100'}`}
      style={activeSection === key ? { backgroundColor: '#1F3F35' } : {}}
    >
      {label}
    </button>
  );

  if (editing) {
    return (
      <div className="max-w-3xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold" style={{ color: '#1F3F35' }}>
            {editing === 'new' ? 'Nieuwe pagina' : 'Pagina bewerken'}
          </h2>
          <Button variant="ghost" onClick={() => setEditing(null)}><X className="w-5 h-5" /></Button>
        </div>

        {/* Section tabs */}
        <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-lg">
          {sectionBtn('inhoud', 'Inhoud')}
          {sectionBtn('seo', 'SEO')}
          {sectionBtn('geavanceerd', 'Geavanceerd')}
        </div>

        <form onSubmit={(e) => { e.preventDefault(); saveMutation.mutate(form); }} className="space-y-5">

          {/* ===== INHOUD ===== */}
          {activeSection === 'inhoud' && (
            <>
              <div>
                <Label>Paginatitel *</Label>
                <Input
                  value={form.title}
                  onChange={e => {
                    const title = e.target.value;
                    setForm(f => ({ ...f, title, slug: f.slug || generateSlug(title) }));
                  }}
                  placeholder="Bijv. Over ons"
                  required
                />
              </div>
              <div>
                <Label>Slug (URL-pad) *</Label>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-gray-400">/pagina/</span>
                  <Input
                    value={form.slug}
                    onChange={e => setForm(f => ({ ...f, slug: e.target.value }))}
                    placeholder="over-ons"
                    required
                    className="flex-1"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1">Gebruik alleen kleine letters, cijfers en koppeltekens.</p>
              </div>
              <div>
                <Label>Samenvatting</Label>
                <Textarea
                  value={form.summary}
                  onChange={e => setForm(f => ({ ...f, summary: e.target.value }))}
                  rows={2}
                  placeholder="Korte beschrijving van de pagina (ook bruikbaar als meta description)"
                />
              </div>
              <div>
                <Label>Inhoud</Label>
                <div className="mt-1 rounded-lg border border-input overflow-hidden" style={{ minHeight: 300 }}>
                  <ReactQuill
                    theme="snow"
                    value={form.content}
                    onChange={value => setForm(f => ({ ...f, content: value }))}
                    style={{ minHeight: 260 }}
                    modules={{
                      toolbar: [
                        [{ header: [1, 2, 3, false] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        ['link'],
                        ['clean'],
                      ],
                    }}
                  />
                </div>
              </div>
              <div>
                <Label>Hero-afbeelding</Label>
                <div className="mt-2 flex items-center gap-3">
                  <label className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-lg border border-dashed border-gray-300 hover:border-gray-400 text-sm text-gray-600 transition-colors">
                    <Upload className="w-4 h-4" />
                    {uploading ? 'Uploaden...' : 'Afbeelding kiezen'}
                    <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} disabled={uploading} />
                  </label>
                  {form.imageUrl && (
                    <div className="flex items-center gap-2">
                      <img src={form.imageUrl} alt="preview" className="h-12 w-20 object-cover rounded" />
                      <button type="button" onClick={() => setForm(f => ({ ...f, imageUrl: '' }))} className="text-red-500 hover:text-red-700 text-xs">Verwijderen</button>
                    </div>
                  )}
                </div>
                {uploadError && <p className="text-red-500 text-sm mt-1">{uploadError}</p>}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Publicatiedatum</Label>
                  <Input type="date" value={form.publishedDate} onChange={e => setForm(f => ({ ...f, publishedDate: e.target.value }))} />
                </div>
                <div className="flex items-end pb-2">
                  <div className="flex items-center gap-3">
                    <Switch checked={form.published} onCheckedChange={checked => setForm(f => ({ ...f, published: checked }))} id="published" />
                    <Label htmlFor="published">Gepubliceerd</Label>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ===== SEO ===== */}
          {activeSection === 'seo' && (
            <>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
                <strong>Tip:</strong> Laat velden leeg om de standaard paginatitel en samenvatting te gebruiken. Vul alleen in als je een specifieke SEO-versie wilt.
              </div>
              <div>
                <Label>SEO-titel</Label>
                <Input
                  value={form.seoTitle}
                  onChange={e => setForm(f => ({ ...f, seoTitle: e.target.value }))}
                  placeholder={form.title || 'Paginatitel | Taai-Consult'}
                  maxLength={60}
                />
                <p className="text-xs text-gray-400 mt-1">{(form.seoTitle || '').length}/60 tekens (aanbevolen: max. 60)</p>
              </div>
              <div>
                <Label>Meta description</Label>
                <Textarea
                  value={form.metaDescription}
                  onChange={e => setForm(f => ({ ...f, metaDescription: e.target.value }))}
                  placeholder={form.summary || 'Korte beschrijving die in Google-resultaten wordt getoond...'}
                  rows={3}
                  maxLength={160}
                />
                <p className="text-xs text-gray-400 mt-1">{(form.metaDescription || '').length}/160 tekens (aanbevolen: 120–160)</p>
              </div>
              <div>
                <Label>Canonical URL</Label>
                <Input
                  value={form.canonicalUrl}
                  onChange={e => setForm(f => ({ ...f, canonicalUrl: e.target.value }))}
                  placeholder="/pagina/over-ons"
                />
                <p className="text-xs text-gray-400 mt-1">Laat leeg voor automatische canonical URL.</p>
              </div>
              <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                <Switch
                  checked={form.noIndex}
                  onCheckedChange={checked => setForm(f => ({ ...f, noIndex: checked }))}
                  id="noindex"
                />
                <div>
                  <Label htmlFor="noindex" className="text-red-700 font-medium">Noindex (verborgen voor zoekmachines)</Label>
                  <p className="text-xs text-red-500 mt-0.5">Gebruik dit alleen voor pagina's die niet geïndexeerd mogen worden.</p>
                </div>
              </div>

              {/* SEO preview */}
              <div className="border rounded-lg p-4 bg-white">
                <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">Google-voorvertoning</p>
                <div className="space-y-1">
                  <p className="text-xs text-green-700">taai-consult.nl › pagina › {form.slug || 'pagina-url'}</p>
                  <p className="text-blue-700 text-lg font-medium leading-tight hover:underline cursor-pointer">
                    {form.seoTitle || form.title || 'Paginatitel'} | Taai-Consult
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {form.metaDescription || form.summary || 'Voeg een samenvatting of meta description toe om hier een voorbeeld te zien...'}
                  </p>
                </div>
              </div>
            </>
          )}

          {/* ===== GEAVANCEERD ===== */}
          {activeSection === 'geavanceerd' && (
            <>
              <div>
                <Label>Structured Data type (Schema.org)</Label>
                <Select value={form.structuredDataType} onValueChange={v => setForm(f => ({ ...f, structuredDataType: v }))}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Geen</SelectItem>
                    <SelectItem value="Article">Article</SelectItem>
                    <SelectItem value="Service">Service</SelectItem>
                    <SelectItem value="FAQPage">FAQ-pagina</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-gray-400 mt-1">Structured data helpt Google de inhoud van je pagina beter te begrijpen.</p>
              </div>

              {form.structuredDataType === 'FAQPage' && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Label>FAQ-items</Label>
                    <Button type="button" size="sm" variant="outline" onClick={addFaqItem}>+ Vraag toevoegen</Button>
                  </div>
                  <div className="space-y-4">
                    {(form.faqItems || []).map((item, idx) => (
                      <div key={idx} className="border rounded-lg p-4 bg-gray-50 space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-600">Vraag {idx + 1}</span>
                          <button type="button" onClick={() => removeFaqItem(idx)} className="text-red-400 hover:text-red-600">
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <Input
                          placeholder="Vraag..."
                          value={item.question}
                          onChange={e => updateFaqItem(idx, 'question', e.target.value)}
                        />
                        <Textarea
                          placeholder="Antwoord..."
                          value={item.answer}
                          rows={2}
                          onChange={e => updateFaqItem(idx, 'answer', e.target.value)}
                        />
                      </div>
                    ))}
                    {(!form.faqItems || form.faqItems.length === 0) && (
                      <p className="text-sm text-gray-400 text-center py-4">Nog geen FAQ-items. Klik op "+ Vraag toevoegen".</p>
                    )}
                  </div>
                </div>
              )}
            </>
          )}

          <div className="flex gap-3 pt-4 border-t">
            <Button type="submit" disabled={saveMutation.isPending} style={{ backgroundColor: '#1F3F35', color: 'white' }}>
              {saveMutation.isPending ? 'Opslaan...' : 'Opslaan'}
            </Button>
            <Button type="button" variant="outline" onClick={() => setEditing(null)}>Annuleren</Button>
            {editing !== 'new' && (
              <a
                href={`/pagina/${form.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700"
              >
                <Globe className="w-4 h-4" /> Bekijk pagina
              </a>
            )}
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button onClick={openNew} style={{ backgroundColor: '#1F3F35', color: 'white' }}>
          <Plus className="w-4 h-4 mr-2" /> Nieuwe pagina
        </Button>
      </div>

      {isLoading ? (
        <p className="text-gray-400">Laden...</p>
      ) : pages.length === 0 ? (
        <p className="text-gray-400 text-center py-12">Nog geen pagina's aangemaakt.</p>
      ) : (
        <div className="space-y-2">
          {pages.map(page => (
            <div key={page.id} className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-medium truncate" style={{ color: '#1F3F35' }}>{page.title}</p>
                  {page.noIndex && (
                    <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">noindex</span>
                  )}
                </div>
                <p className="text-xs text-gray-400">/pagina/{page.slug} · {page.published ? '✅ Gepubliceerd' : '⏸ Concept'}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href={`/pagina/${page.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded hover:bg-gray-100 text-gray-400"
                  title="Bekijk pagina"
                >
                  {page.published ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </a>
                <Button size="sm" variant="ghost" onClick={() => openEdit(page)}><Pencil className="w-4 h-4" /></Button>
                <Button
                  size="sm" variant="ghost" className="text-red-500"
                  onClick={() => { if (confirm('Weet je zeker dat je deze pagina wilt verwijderen?')) deleteMutation.mutate(page.id); }}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}