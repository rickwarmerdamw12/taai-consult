import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Pencil, Trash2, X } from 'lucide-react';

const emptyForm = { naam: '', email: '', telefoon: '', rol: '', bedrijfNaam: '', notities: '' };

function ContactForm({ initial, onSave, onCancel, isPending }) {
  const [form, setForm] = useState(initial || emptyForm);
  const f = (key) => (e) => setForm(p => ({ ...p, [key]: e.target.value }));

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div><Label>Naam *</Label><Input value={form.naam} onChange={f('naam')} /></div>
        <div><Label>E-mail *</Label><Input type="email" value={form.email} onChange={f('email')} /></div>
        <div><Label>Telefoon</Label><Input value={form.telefoon} onChange={f('telefoon')} /></div>
        <div><Label>Rol / Functie</Label><Input value={form.rol} onChange={f('rol')} /></div>
        <div className="sm:col-span-2"><Label>Bedrijf</Label><Input value={form.bedrijfNaam} onChange={f('bedrijfNaam')} /></div>
        <div className="sm:col-span-2"><Label>Notities</Label><Textarea value={form.notities} onChange={f('notities')} rows={3} /></div>
      </div>
      <div className="flex gap-2">
        <Button disabled={isPending || !form.naam || !form.email} onClick={() => onSave(form)} style={{ backgroundColor: '#1F3F35', color: 'white' }}>
          {isPending ? 'Opslaan...' : 'Opslaan'}
        </Button>
        <Button variant="outline" onClick={onCancel}>Annuleren</Button>
      </div>
    </div>
  );
}

export default function ContactenTab() {
  const queryClient = useQueryClient();
  const [showNew, setShowNew] = useState(false);
  const [editId, setEditId] = useState(null);
  const [zoek, setZoek] = useState('');

  const { data: contacten = [], isLoading } = useQuery({
    queryKey: ['contacten'],
    queryFn: () => base44.entities.Contact.list('-created_date'),
  });

  const createMutation = useMutation({
    mutationFn: (data) => base44.entities.Contact.create(data),
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['contacten'] }); setShowNew(false); },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.Contact.update(id, data),
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['contacten'] }); setEditId(null); },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => base44.entities.Contact.delete(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['contacten'] }),
  });

  const gefilterd = contacten.filter(c =>
    `${c.naam} ${c.email} ${c.bedrijfNaam}`.toLowerCase().includes(zoek.toLowerCase())
  );

  if (isLoading) return <p className="text-gray-400">Laden...</p>;

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input placeholder="Zoeken..." value={zoek} onChange={e => setZoek(e.target.value)} className="sm:max-w-xs" />
        <Button onClick={() => setShowNew(true)} style={{ backgroundColor: '#1F3F35', color: 'white' }}>
          <Plus className="w-4 h-4 mr-1" /> Nieuw contact
        </Button>
      </div>

      {showNew && (
        <ContactForm onSave={(data) => createMutation.mutate(data)} onCancel={() => setShowNew(false)} isPending={createMutation.isPending} />
      )}

      {gefilterd.length === 0 && !showNew && <p className="text-gray-400 text-center py-12">Geen contacten gevonden</p>}

      <div className="space-y-2">
        {gefilterd.map(c => (
          <div key={c.id}>
            {editId === c.id ? (
              <ContactForm
                initial={c}
                onSave={(data) => updateMutation.mutate({ id: c.id, data })}
                onCancel={() => setEditId(null)}
                isPending={updateMutation.isPending}
              />
            ) : (
              <div className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-medium text-sm" style={{ color: '#1F3F35' }}>{c.naam}</p>
                  <p className="text-xs text-gray-500">{c.email}{c.bedrijfNaam ? ` · ${c.bedrijfNaam}` : ''}{c.rol ? ` · ${c.rol}` : ''}</p>
                </div>
                <div className="flex gap-1 flex-shrink-0">
                  <Button size="sm" variant="ghost" onClick={() => setEditId(c.id)}><Pencil className="w-4 h-4" /></Button>
                  <Button size="sm" variant="ghost" className="text-red-500" onClick={() => { if(confirm('Verwijderen?')) deleteMutation.mutate(c.id); }}><Trash2 className="w-4 h-4" /></Button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}