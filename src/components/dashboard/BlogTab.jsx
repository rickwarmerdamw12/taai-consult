import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Plus, Pencil, Trash2, Upload, X, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const emptyForm = {
  title: '',
  slug: '',
  summary: '',
  content: '',
  author: 'Arjan Warmerdam',
  publishedDate: new Date().toISOString().split('T')[0],
  imageUrl: '',
  tags: '',
  seoTitle: '',
  seoDescription: '',
  published: false,
  whitepaperUrl: '',
  whitepaperFormTitle: 'Download de whitepaper',
  whitepaperFormDescription: '',
};

const generateSlug = (title) =>
  title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');

export default function BlogTab() {
  const queryClient = useQueryClient();
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['blogposts-beheer'],
    queryFn: () => base44.entities.BlogPost.list('-publishedDate'),
  });

  const saveMutation = useMutation({
    mutationFn: (data) => {
      const payload = { ...data, tags: data.tags ? data.tags.split(',').map(t => t.trim()).filter(Boolean) : [] };
      if (editing === 'new') return base44.entities.BlogPost.create(payload);
      return base44.entities.BlogPost.update(editing.id, payload);
    },
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['blogposts-beheer'] }); setEditing(null); },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => base44.entities.BlogPost.delete(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['blogposts-beheer'] }),
  });

  const openNew = () => { setForm(emptyForm); setEditing('new'); setUploadError(''); };
  const openEdit = (post) => { setForm({ ...post, tags: Array.isArray(post.tags) ? post.tags.join(', ') : '' }); setEditing(post); setUploadError(''); };

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

  const handlePdfUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    setUploadError('');
    const result = await base44.integrations.Core.UploadFile({ file });
    if (result?.file_url) setForm(f => ({ ...f, whitepaperUrl: result.file_url }));
    else setUploadError('Upload mislukt. Probeer opnieuw.');
    setUploading(false);
  };

  if (editing) {
    return (
      <div className="max-w-3xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold" style={{ color: '#1F3F35' }}>
            {editing === 'new' ? 'Nieuwe blogpost' : 'Blogpost bewerken'}
          </h2>
          <Button variant="ghost" onClick={() => setEditing(null)}><X className="w-5 h-5" /></Button>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); saveMutation.mutate(form); }} className="space-y-5">
          <div><Label>Titel *</Label>
            <Input value={form.title} onChange={e => { const title = e.target.value; setForm(f => ({ ...f, title, slug: f.slug || generateSlug(title) })); }} required />
          </div>
          <div><Label>Slug (URL) *</Label>
            <Input value={form.slug} onChange={e => setForm(f => ({ ...f, slug: e.target.value }))} required />
          </div>
          <div><Label>Samenvatting *</Label>
            <Textarea value={form.summary} onChange={e => setForm(f => ({ ...f, summary: e.target.value }))} rows={3} required />
          </div>
          <div><Label>Inhoud *</Label>
            <div className="mt-1 rounded-lg border border-input overflow-hidden" style={{ minHeight: 300 }}>
              <ReactQuill theme="snow" value={form.content} onChange={value => setForm(f => ({ ...f, content: value }))} style={{ minHeight: 260 }}
                modules={{ toolbar: [[{ header: [2, 3, false] }], ['bold', 'italic', 'underline', 'strike'], [{ list: 'ordered' }, { list: 'bullet' }], ['link'], ['clean']] }} />
            </div>
          </div>

          <div><Label>Omslagafbeelding</Label>
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
            <div><Label>Auteur</Label><Input value={form.author} onChange={e => setForm(f => ({ ...f, author: e.target.value }))} /></div>
            <div><Label>Publicatiedatum *</Label><Input type="date" value={form.publishedDate} onChange={e => setForm(f => ({ ...f, publishedDate: e.target.value }))} required /></div>
          </div>

          <div><Label>Tags (komma-gescheiden)</Label>
            <Input value={form.tags} onChange={e => setForm(f => ({ ...f, tags: e.target.value }))} placeholder="OR, medezeggenschap, training" />
          </div>

          <div className="border rounded-xl p-5 space-y-4" style={{ borderColor: '#AFC1B7', backgroundColor: '#F4F4F4' }}>
            <div className="flex items-center gap-2 mb-1">
              <FileText className="w-4 h-4" style={{ color: '#1F3F35' }} />
              <span className="font-semibold text-sm" style={{ color: '#1F3F35' }}>Whitepaper (optioneel)</span>
            </div>
            <div><Label>Whitepaper uploaden (PDF)</Label>
              <div className="mt-2 flex items-center gap-3">
                <label className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-lg border border-dashed border-gray-300 hover:border-gray-400 text-sm text-gray-600 transition-colors">
                  <Upload className="w-4 h-4" />
                  {uploading ? 'Uploaden...' : 'PDF kiezen'}
                  <input type="file" accept="application/pdf" className="hidden" onChange={handlePdfUpload} disabled={uploading} />
                </label>
                {form.whitepaperUrl && (
                  <div className="flex items-center gap-2 text-sm text-green-700">
                    <FileText className="w-4 h-4" /><span>PDF gekoppeld</span>
                    <button type="button" onClick={() => setForm(f => ({ ...f, whitepaperUrl: '' }))} className="text-red-500 hover:text-red-700 ml-2">Verwijderen</button>
                  </div>
                )}
              </div>
            </div>
            {form.whitepaperUrl && (
              <>
                <div><Label>Formulier titel</Label><Input value={form.whitepaperFormTitle} onChange={e => setForm(f => ({ ...f, whitepaperFormTitle: e.target.value }))} /></div>
                <div><Label>Formulier beschrijving</Label><Textarea value={form.whitepaperFormDescription} onChange={e => setForm(f => ({ ...f, whitepaperFormDescription: e.target.value }))} rows={2} /></div>
              </>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Switch checked={form.published} onCheckedChange={checked => setForm(f => ({ ...f, published: checked }))} id="published" />
            <Label htmlFor="published">Gepubliceerd</Label>
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="submit" disabled={saveMutation.isPending} style={{ backgroundColor: '#1F3F35', color: 'white' }}>
              {saveMutation.isPending ? 'Opslaan...' : 'Opslaan'}
            </Button>
            <Button type="button" variant="outline" onClick={() => setEditing(null)}>Annuleren</Button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button onClick={openNew} style={{ backgroundColor: '#1F3F35', color: 'white' }}>
          <Plus className="w-4 h-4 mr-2" /> Nieuwe post
        </Button>
      </div>

      {isLoading ? (
        <p className="text-gray-400">Laden...</p>
      ) : posts.length === 0 ? (
        <p className="text-gray-400 text-center py-12">Nog geen blogposts.</p>
      ) : (
        <div className="space-y-2">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                {post.imageUrl && <img src={post.imageUrl} alt="" className="w-12 h-12 rounded object-cover flex-shrink-0" />}
                <div className="min-w-0">
                  <p className="font-medium truncate" style={{ color: '#1F3F35' }}>{post.title}</p>
                  <p className="text-xs text-gray-400">{post.publishedDate} · {post.published ? '✅ Gepubliceerd' : '⏸ Concept'}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <Button size="sm" variant="ghost" onClick={() => openEdit(post)}><Pencil className="w-4 h-4" /></Button>
                <Button size="sm" variant="ghost" className="text-red-500" onClick={() => { if(confirm('Weet je zeker dat je deze post wilt verwijderen?')) deleteMutation.mutate(post.id); }}><Trash2 className="w-4 h-4" /></Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}