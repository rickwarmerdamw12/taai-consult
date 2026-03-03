import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Pencil, Trash2, CheckCircle2, Circle } from 'lucide-react';

const emptyForm = { titel: '', notities: '', deadline: '', status: 'open', prioriteit: 'normaal', bedrijfNaam: '', contactNaam: '' };

const prioriteitKleur = {
  hoog: 'bg-red-100 text-red-700',
  normaal: 'bg-yellow-100 text-yellow-700',
  laag: 'bg-gray-100 text-gray-500',
};

function TaakForm({ initial, onSave, onCancel, isPending }) {
  const [form, setForm] = useState(initial || emptyForm);
  const f = (key) => (e) => setForm(p => ({ ...p, [key]: e.target.value }));

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm space-y-3 mb-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="sm:col-span-2"><Label>Taak *</Label><Input value={form.titel} onChange={f('titel')} /></div>
        <div>
          <Label>Prioriteit</Label>
          <Select value={form.prioriteit} onValueChange={v => setForm(p => ({ ...p, prioriteit: v }))}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="hoog">Hoog</SelectItem>
              <SelectItem value="normaal">Normaal</SelectItem>
              <SelectItem value="laag">Laag</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div><Label>Deadline</Label><Input type="date" value={form.deadline} onChange={f('deadline')} /></div>
        <div><Label>Bedrijf</Label><Input value={form.bedrijfNaam} onChange={f('bedrijfNaam')} /></div>
        <div><Label>Contactpersoon</Label><Input value={form.contactNaam} onChange={f('contactNaam')} /></div>
        <div className="sm:col-span-2"><Label>Notities</Label><Textarea value={form.notities} onChange={f('notities')} rows={2} /></div>
      </div>
      <div className="flex gap-2">
        <Button disabled={isPending || !form.titel} onClick={() => onSave(form)} style={{ backgroundColor: '#1F3F35', color: 'white' }}>
          {isPending ? 'Opslaan...' : 'Opslaan'}
        </Button>
        <Button variant="outline" onClick={onCancel}>Annuleren</Button>
      </div>
    </div>
  );
}

export default function TakenTab() {
  const queryClient = useQueryClient();
  const [showNew, setShowNew] = useState(false);
  const [editId, setEditId] = useState(null);
  const [filter, setFilter] = useState('open');

  const { data: taken = [], isLoading } = useQuery({
    queryKey: ['taken'],
    queryFn: () => base44.entities.Taak.list('-created_date'),
  });

  const createMutation = useMutation({
    mutationFn: (data) => base44.entities.Taak.create(data),
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['taken'] }); setShowNew(false); },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.Taak.update(id, data),
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['taken'] }); setEditId(null); },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => base44.entities.Taak.delete(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['taken'] }),
  });

  const gefilterd = taken.filter(t => filter === 'alles' ? true : filter === 'open' ? t.status !== 'afgerond' : t.status === 'afgerond');

  if (isLoading) return <p className="text-gray-400">Laden...</p>;

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex gap-1">
          {['open', 'afgerond', 'alles'].map(f => (
            <Button key={f} size="sm" variant={filter === f ? 'default' : 'outline'} onClick={() => setFilter(f)}
              style={filter === f ? { backgroundColor: '#1F3F35', color: 'white' } : {}}>
              {f === 'open' ? 'Open' : f === 'afgerond' ? 'Afgerond' : 'Alles'}
            </Button>
          ))}
        </div>
        <Button onClick={() => setShowNew(true)} style={{ backgroundColor: '#1F3F35', color: 'white' }}>
          <Plus className="w-4 h-4 mr-1" /> Nieuwe taak
        </Button>
      </div>

      {showNew && (
        <TaakForm onSave={(data) => createMutation.mutate(data)} onCancel={() => setShowNew(false)} isPending={createMutation.isPending} />
      )}

      {gefilterd.length === 0 && !showNew && <p className="text-gray-400 text-center py-12">Geen taken</p>}

      <div className="space-y-2">
        {gefilterd.map(t => (
          <div key={t.id}>
            {editId === t.id ? (
              <TaakForm
                initial={t}
                onSave={(data) => updateMutation.mutate({ id: t.id, data })}
                onCancel={() => setEditId(null)}
                isPending={updateMutation.isPending}
              />
            ) : (
              <div className={`bg-white rounded-xl p-4 shadow-sm flex items-center gap-3 ${t.status === 'afgerond' ? 'opacity-60' : ''}`}>
                <button onClick={() => updateMutation.mutate({ id: t.id, data: { status: t.status === 'afgerond' ? 'open' : 'afgerond' } })}>
                  {t.status === 'afgerond'
                    ? <CheckCircle2 className="w-5 h-5 text-green-500" />
                    : <Circle className="w-5 h-5 text-gray-300 hover:text-green-400" />
                  }
                </button>
                <div className="flex-1 min-w-0">
                  <p className={`font-medium text-sm ${t.status === 'afgerond' ? 'line-through text-gray-400' : ''}`} style={{ color: t.status === 'afgerond' ? undefined : '#1F3F35' }}>{t.titel}</p>
                  <p className="text-xs text-gray-400">
                    {t.bedrijfNaam || t.contactNaam ? `${[t.bedrijfNaam, t.contactNaam].filter(Boolean).join(' · ')} · ` : ''}
                    {t.deadline ? `Deadline: ${t.deadline}` : ''}
                  </p>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full flex-shrink-0 ${prioriteitKleur[t.prioriteit]}`}>{t.prioriteit}</span>
                <div className="flex gap-1 flex-shrink-0">
                  <Button size="sm" variant="ghost" onClick={() => setEditId(t.id)}><Pencil className="w-4 h-4" /></Button>
                  <Button size="sm" variant="ghost" className="text-red-500" onClick={() => { if(confirm('Verwijderen?')) deleteMutation.mutate(t.id); }}><Trash2 className="w-4 h-4" /></Button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}