import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Plus, Pencil, Trash2, Upload, X, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

function PasswordGate({ onUnlock }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const response = await base44.functions.invoke('checkBlogPassword', { password });
    if (response.data?.ok) {
      onUnlock();
    } else {
      setError('Onjuist wachtwoord. Probeer opnieuw.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4F4F4]">
      <div className="bg-white rounded-2xl shadow-md p-10 w-full max-w-sm text-center">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DCE5E0' }}>
            <Lock className="w-6 h-6" style={{ color: '#1F3F35' }} />
          </div>
        </div>
        <h1 className="text-xl font-bold mb-1" style={{ color: '#1F3F35' }}>Blog beheer</h1>
        <p className="text-sm text-gray-500 mb-6">Voer het wachtwoord in om verder te gaan.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="password"
            placeholder="Wachtwoord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" disabled={loading} className="w-full" style={{ backgroundColor: '#1F3F35', color: 'white' }}>
            {loading ? 'Controleren...' : 'Inloggen'}
          </Button>
        </form>
      </div>
    </div>
  );
}

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
};

export default function BlogBeheer() {
  const queryClient = useQueryClient();
  const [editing, setEditing] = useState(null); // null = lijst, object = formulier
  const [form, setForm] = useState(emptyForm);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['blogposts-beheer'],
    queryFn: () => base44.entities.BlogPost.list('-publishedDate'),
  });

  const saveMutation = useMutation({
    mutationFn: (data) => {
      const payload = {
        ...data,
        tags: data.tags ? data.tags.split(',').map((t) => t.trim()).filter(Boolean) : [],
      };
      if (editing === 'new') return base44.entities.BlogPost.create(payload);
      return base44.entities.BlogPost.update(editing.id, payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogposts-beheer'] });
      setEditing(null);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => base44.entities.BlogPost.delete(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['blogposts-beheer'] }),
  });

  const openNew = () => {
    setForm(emptyForm);
    setEditing('new');
    setUploadError('');
  };

  const openEdit = (post) => {
    setForm({
      ...post,
      tags: Array.isArray(post.tags) ? post.tags.join(', ') : '',
    });
    setEditing(post);
    setUploadError('');
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    setUploadError('');
    const fd = new FormData();
    fd.append('file', file);
    const response = await base44.functions.invoke('uploadBlogImage', fd);
    if (response.data?.file_url) {
      setForm((f) => ({ ...f, imageUrl: response.data.file_url }));
    } else {
      setUploadError('Upload mislukt. Probeer opnieuw.');
    }
    setUploading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveMutation.mutate(form);
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');
  };

  if (editing) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold" style={{ color: '#1F3F35' }}>
            {editing === 'new' ? 'Nieuwe blogpost' : 'Blogpost bewerken'}
          </h1>
          <Button variant="ghost" onClick={() => setEditing(null)}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Titel */}
          <div>
            <Label>Titel *</Label>
            <Input
              value={form.title}
              onChange={(e) => {
                const title = e.target.value;
                setForm((f) => ({ ...f, title, slug: f.slug || generateSlug(title) }));
              }}
              required
            />
          </div>

          {/* Slug */}
          <div>
            <Label>Slug (URL) *</Label>
            <Input
              value={form.slug}
              onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
              required
            />
          </div>

          {/* Samenvatting */}
          <div>
            <Label>Samenvatting *</Label>
            <Textarea
              value={form.summary}
              onChange={(e) => setForm((f) => ({ ...f, summary: e.target.value }))}
              rows={3}
              required
            />
          </div>

          {/* Inhoud */}
          <div>
            <Label>Inhoud (Markdown) *</Label>
            <Textarea
              value={form.content}
              onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
              rows={12}
              className="font-mono text-sm"
              required
            />
          </div>

          {/* Afbeelding upload */}
          <div>
            <Label>Omslagafbeelding</Label>
            <div className="mt-2 flex items-center gap-3">
              <label className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-lg border border-dashed border-gray-300 hover:border-gray-400 text-sm text-gray-600 transition-colors">
                <Upload className="w-4 h-4" />
                {uploading ? 'Uploaden...' : 'Afbeelding kiezen'}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                  disabled={uploading}
                />
              </label>
              {form.imageUrl && (
                <div className="flex items-center gap-2">
                  <img src={form.imageUrl} alt="preview" className="h-12 w-20 object-cover rounded" />
                  <button
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, imageUrl: '' }))}
                    className="text-red-500 hover:text-red-700 text-xs"
                  >
                    Verwijderen
                  </button>
                </div>
              )}
            </div>
            {uploadError && <p className="text-red-500 text-sm mt-1">{uploadError}</p>}
          </div>

          {/* Auteur en datum */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Auteur</Label>
              <Input
                value={form.author}
                onChange={(e) => setForm((f) => ({ ...f, author: e.target.value }))}
              />
            </div>
            <div>
              <Label>Publicatiedatum *</Label>
              <Input
                type="date"
                value={form.publishedDate}
                onChange={(e) => setForm((f) => ({ ...f, publishedDate: e.target.value }))}
                required
              />
            </div>
          </div>

          {/* Tags */}
          <div>
            <Label>Tags (komma-gescheiden)</Label>
            <Input
              value={form.tags}
              onChange={(e) => setForm((f) => ({ ...f, tags: e.target.value }))}
              placeholder="OR, medezeggenschap, training"
            />
          </div>

          {/* Gepubliceerd */}
          <div className="flex items-center gap-3">
            <Switch
              checked={form.published}
              onCheckedChange={(checked) => setForm((f) => ({ ...f, published: checked }))}
              id="published"
            />
            <Label htmlFor="published">Gepubliceerd</Label>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              disabled={saveMutation.isPending}
              style={{ backgroundColor: '#1F3F35', color: 'white' }}
            >
              {saveMutation.isPending ? 'Opslaan...' : 'Opslaan'}
            </Button>
            <Button type="button" variant="outline" onClick={() => setEditing(null)}>
              Annuleren
            </Button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold" style={{ color: '#1F3F35' }}>Blog beheer</h1>
        <Button onClick={openNew} style={{ backgroundColor: '#1F3F35', color: 'white' }}>
          <Plus className="w-4 h-4 mr-2" /> Nieuwe post
        </Button>
      </div>

      {isLoading ? (
        <p className="text-gray-500">Laden...</p>
      ) : posts.length === 0 ? (
        <p className="text-gray-500 text-center py-20">Nog geen blogposts. Maak er een aan!</p>
      ) : (
        <div className="space-y-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3 min-w-0">
                {post.imageUrl && (
                  <img src={post.imageUrl} alt="" className="w-12 h-12 rounded object-cover flex-shrink-0" />
                )}
                <div className="min-w-0">
                  <p className="font-medium truncate" style={{ color: '#1F3F35' }}>{post.title}</p>
                  <p className="text-xs text-gray-400">{post.publishedDate} · {post.published ? '✅ Gepubliceerd' : '⏸ Concept'}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <Button size="sm" variant="ghost" onClick={() => openEdit(post)}>
                  <Pencil className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-red-500 hover:text-red-700"
                  onClick={() => {
                    if (confirm('Weet je zeker dat je deze post wilt verwijderen?')) {
                      deleteMutation.mutate(post.id);
                    }
                  }}
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