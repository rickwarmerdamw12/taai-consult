import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Pencil, Trash2, Euro } from 'lucide-react';

const FASES = [
  { key: 'prospect', label: 'Prospect', color: 'bg-gray-100' },
  { key: 'kennismaking', label: 'Kennismaking', color: 'bg-blue-50' },
  { key: 'offerte', label: 'Offerte', color: 'bg-yellow-50' },
  { key: 'onderhandeling', label: 'Onderhandeling', color: 'bg-orange-50' },
  { key: 'gewonnen', label: 'Gewonnen', color: 'bg-green-50' },
  { key: 'verloren', label: 'Verloren', color: 'bg-red-50' },
];

const emptyForm = { naam: '', bedrijfNaam: '', contactNaam: '', waarde: '', fase: 'prospect', verwachteDatum: '', notities: '' };

function DealForm({ initial, onSave, onCancel, isPending }) {
  const [form, setForm] = useState(initial ? { ...initial, waarde: initial.waarde || '' } : emptyForm);
  const f = (key) => (e) => setForm(p => ({ ...p, [key]: e.target.value }));

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm space-y-3 mb-4">
      <h3 className="font-semibold" style={{ color: '#1F3F35' }}>{initial ? 'Deal bewerken' : 'Nieuwe deal'}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div><Label>Naam *</Label><Input value={form.naam} onChange={f('naam')} /></div>
        <div>
          <Label>Fase</Label>
          <Select value={form.fase} onValueChange={v => setForm(p => ({ ...p, fase: v }))}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>{FASES.map(f => <SelectItem key={f.key} value={f.key}>{f.label}</SelectItem>)}</SelectContent>
          </Select>
        </div>
        <div><Label>Bedrijf</Label><Input value={form.bedrijfNaam} onChange={f('bedrijfNaam')} /></div>
        <div><Label>Contactpersoon</Label><Input value={form.contactNaam} onChange={f('contactNaam')} /></div>
        <div><Label>Waarde (€)</Label><Input type="number" value={form.waarde} onChange={f('waarde')} /></div>
        <div><Label>Verwachte datum</Label><Input type="date" value={form.verwachteDatum} onChange={f('verwachteDatum')} /></div>
        <div className="sm:col-span-2"><Label>Notities</Label><Textarea value={form.notities} onChange={f('notities')} rows={2} /></div>
      </div>
      <div className="flex gap-2">
        <Button disabled={isPending || !form.naam} onClick={() => onSave({ ...form, waarde: form.waarde ? Number(form.waarde) : null })} style={{ backgroundColor: '#1F3F35', color: 'white' }}>
          {isPending ? 'Opslaan...' : 'Opslaan'}
        </Button>
        <Button variant="outline" onClick={onCancel}>Annuleren</Button>
      </div>
    </div>
  );
}

export default function PijplijnTab() {
  const queryClient = useQueryClient();
  const [showNew, setShowNew] = useState(false);
  const [editId, setEditId] = useState(null);

  const { data: deals = [], isLoading } = useQuery({
    queryKey: ['deals'],
    queryFn: () => base44.entities.Deal.list('-created_date'),
  });

  const createMutation = useMutation({
    mutationFn: (data) => base44.entities.Deal.create(data),
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['deals'] }); setShowNew(false); },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.Deal.update(id, data),
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['deals'] }); setEditId(null); },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => base44.entities.Deal.delete(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['deals'] }),
  });

  if (isLoading) return <p className="text-gray-400">Laden...</p>;

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button onClick={() => setShowNew(true)} style={{ backgroundColor: '#1F3F35', color: 'white' }}>
          <Plus className="w-4 h-4 mr-1" /> Nieuwe deal
        </Button>
      </div>

      {showNew && (
        <DealForm onSave={(data) => createMutation.mutate(data)} onCancel={() => setShowNew(false)} isPending={createMutation.isPending} />
      )}

      {FASES.map(fase => {
        const fasDeals = deals.filter(d => d.fase === fase.key);
        if (fase.key === 'verloren' && fasDeals.length === 0) return null;
        return (
          <div key={fase.key} className={`rounded-xl p-4 ${fase.color}`}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-sm" style={{ color: '#1F3F35' }}>{fase.label} <span className="text-gray-400 font-normal">({fasDeals.length})</span></h3>
              {fasDeals.length > 0 && (
                <span className="text-xs text-gray-500">
                  €{fasDeals.reduce((sum, d) => sum + (d.waarde || 0), 0).toLocaleString('nl-NL')}
                </span>
              )}
            </div>
            {fasDeals.length === 0 && <p className="text-xs text-gray-400">Geen deals</p>}
            <div className="space-y-2">
              {fasDeals.map(deal => (
                <div key={deal.id}>
                  {editId === deal.id ? (
                    <DealForm
                      initial={deal}
                      onSave={(data) => updateMutation.mutate({ id: deal.id, data })}
                      onCancel={() => setEditId(null)}
                      isPending={updateMutation.isPending}
                    />
                  ) : (
                    <div className="bg-white rounded-lg p-3 shadow-sm flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <p className="font-medium text-sm truncate" style={{ color: '#1F3F35' }}>{deal.naam}</p>
                        <p className="text-xs text-gray-500">{deal.bedrijfNaam || '-'}{deal.waarde ? ` · €${deal.waarde.toLocaleString('nl-NL')}` : ''}</p>
                      </div>
                      <div className="flex gap-1 flex-shrink-0">
                        <Select value={deal.fase} onValueChange={v => updateMutation.mutate({ id: deal.id, data: { fase: v } })}>
                          <SelectTrigger className="h-7 text-xs w-36"><SelectValue /></SelectTrigger>
                          <SelectContent>{FASES.map(f => <SelectItem key={f.key} value={f.key}>{f.label}</SelectItem>)}</SelectContent>
                        </Select>
                        <Button size="sm" variant="ghost" onClick={() => setEditId(deal.id)}><Pencil className="w-3 h-3" /></Button>
                        <Button size="sm" variant="ghost" className="text-red-500" onClick={() => { if(confirm('Verwijderen?')) deleteMutation.mutate(deal.id); }}><Trash2 className="w-3 h-3" /></Button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}