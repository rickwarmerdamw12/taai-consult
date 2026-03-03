import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Pencil, Trash2 } from 'lucide-react';

const emptyForm = { naam: '', sector: '', website: '', adres: '', notities: '' };

function BedrijfForm({ initial, onSave, onCancel, isPending }) {
  const [form, setForm] = useState(initial || emptyForm);
  const f = (key) => (e) => setForm(p => ({ ...p, [key]: e.target.value }));

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div><Label>Naam *</Label><Input value={form.naam} onChange={f('naam')} /></div>
        <div><Label>Sector</Label><Input value={form.sector} onChange={f('sector')} /></div>
        <div><Label>Website</Label><Input value={form.website} onChange={f('website')} placeholder="https://" /></div>
        <div><Label>Adres</Label><Input value={form.adres} onChange={f('adres')} /></div>
        <div className="sm:col-span-2"><Label>Notities</Label><Textarea value={form.notities} onChange={f('notities')} rows={2} /></div>
      </div>
      <div className="flex gap-2">
        <Button disabled={isPending || !form.naam} onClick={() => onSave(form)} style={{ backgroundColor: '#1F3F35', color: 'white' }}>
          {isPending ? 'Opslaan...' : 'Opslaan'}
        </Button>
        <Button variant="outline" onClick={onCancel}>Annuleren</Button>
      </div>
    </div>
  );
}

export default function BedrijvenTab() {
  const queryClient = useQueryClient();
  const [showNew, setShowNew] = useState(false);
  const [editId, setEditId] = useState(null);
  const [zoek, setZoek] = useState('');

  const { data: bedrijven = [], isLoading } = useQuery({
    queryKey: ['bedrijven'],
    queryFn: () => base44.entities.Bedrijf.list('-created_date'),
  });

  const createMutation = useMutation({
    mutationFn: (data) => base44.entities.Bedrijf.create(data),
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['bedrijven'] }); setShowNew(false); },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.Bedrijf.update(id, data),
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['bedrijven'] }); setEditId(null); },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => base44.entities.Bedrijf.delete(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['bedrijven'] }),
  });

  const gefilterd = bedrijven.filter(b =>
    `${b.naam} ${b.sector}`.toLowerCase().includes(zoek.toLowerCase())
  );

  if (isLoading) return <p className="text-gray-400">Laden...</p>;

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input placeholder="Zoeken..." value={zoek} onChange={e => setZoek(e.target.value)} className="sm:max-w-xs" />
        <Button onClick={() => setShowNew(true)} style={{ backgroundColor: '#1F3F35', color: 'white' }}>
          <Plus className="w-4 h-4 mr-1" /> Nieuw bedrijf
        </Button>
      </div>

      {showNew && (
        <BedrijfForm onSave={(data) => createMutation.mutate(data)} onCancel={() => setShowNew(false)} isPending={createMutation.isPending} />
      )}

      {gefilterd.length === 0 && !showNew && <p className="text-gray-400 text-center py-12">Geen bedrijven gevonden</p>}

      <div className="space-y-2">
        {gefilterd.map(b => (
          <div key={b.id}>
            {editId === b.id ? (
              <BedrijfForm
                initial={b}
                onSave={(data) => updateMutation.mutate({ id: b.id, data })}
                onCancel={() => setEditId(null)}
                isPending={updateMutation.isPending}
              />
            ) : (
              <div className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-medium text-sm" style={{ color: '#1F3F35' }}>{b.naam}</p>
                  <p className="text-xs text-gray-500">
                    {[b.sector, b.website, b.adres].filter(Boolean).join(' · ')}
                  </p>
                </div>
                <div className="flex gap-1 flex-shrink-0">
                  <Button size="sm" variant="ghost" onClick={() => setEditId(b.id)}><Pencil className="w-4 h-4" /></Button>
                  <Button size="sm" variant="ghost" className="text-red-500" onClick={() => { if(confirm('Verwijderen?')) deleteMutation.mutate(b.id); }}><Trash2 className="w-4 h-4" /></Button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}