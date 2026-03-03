import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronDown, ChevronUp, UserPlus } from 'lucide-react';

const statusKleur = {
  nieuw: 'bg-blue-100 text-blue-700',
  in_behandeling: 'bg-yellow-100 text-yellow-700',
  afgehandeld: 'bg-green-100 text-green-700',
};

const rolLabel = {
  'or-lid': 'OR-lid',
  commissie: 'Commissielid',
  bestuur: 'Bestuurder',
  hr: 'HR-medewerker',
  anders: 'Anders',
};

export default function ContactAanvragenTab() {
  const queryClient = useQueryClient();
  const [openId, setOpenId] = useState(null);

  const { data: aanvragen = [], isLoading } = useQuery({
    queryKey: ['contactaanvragen'],
    queryFn: () => base44.entities.ContactSubmission.list('-created_date'),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.ContactSubmission.update(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['contactaanvragen'] }),
  });

  const omzettenNaarContact = async (aanvraag) => {
    await base44.entities.Contact.create({
      naam: aanvraag.naam,
      email: aanvraag.email,
      telefoon: aanvraag.telefoon || '',
      rol: aanvraag.rol,
      bedrijfNaam: aanvraag.organisatie,
      notities: `Bron: contactformulier\nOnderwerp: ${aanvraag.onderwerp}\n\n${aanvraag.bericht}`,
    });
    updateMutation.mutate({ id: aanvraag.id, data: { status: 'afgehandeld' } });
    alert(`${aanvraag.naam} is toegevoegd als contact!`);
  };

  if (isLoading) return <p className="text-gray-400">Laden...</p>;

  return (
    <div className="space-y-3">
      {aanvragen.length === 0 && <p className="text-gray-400 text-center py-12">Geen contactaanvragen</p>}
      {aanvragen.map((a) => (
        <div key={a.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div
            className="flex items-center justify-between p-4 cursor-pointer"
            onClick={() => setOpenId(openId === a.id ? null : a.id)}
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className={`text-xs px-2 py-1 rounded-full font-medium flex-shrink-0 ${statusKleur[a.status] || 'bg-gray-100 text-gray-600'}`}>
                {a.status === 'nieuw' ? 'Nieuw' : a.status === 'in_behandeling' ? 'In behandeling' : 'Afgehandeld'}
              </span>
              <div className="min-w-0">
                <span className="font-medium text-sm" style={{ color: '#1F3F35' }}>{a.naam}</span>
                <span className="text-gray-400 text-sm ml-2">{a.organisatie}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-xs text-gray-400 hidden sm:block">{a.created_date?.split('T')[0]}</span>
              {openId === a.id ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
            </div>
          </div>

          {openId === a.id && (
            <div className="px-4 pb-4 border-t pt-4 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div><span className="text-gray-500">E-mail:</span> <a href={`mailto:${a.email}`} className="text-blue-600">{a.email}</a></div>
                <div><span className="text-gray-500">Telefoon:</span> {a.telefoon || '-'}</div>
                <div><span className="text-gray-500">Rol:</span> {rolLabel[a.rol] || a.rol}</div>
                <div><span className="text-gray-500">Onderwerp:</span> {a.onderwerp}</div>
              </div>
              <div className="text-sm">
                <span className="text-gray-500">Bericht:</span>
                <p className="mt-1 bg-gray-50 rounded-lg p-3 whitespace-pre-wrap">{a.bericht}</p>
              </div>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <Select
                  value={a.status}
                  onValueChange={(value) => updateMutation.mutate({ id: a.id, data: { status: value } })}
                >
                  <SelectTrigger className="w-44">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nieuw">Nieuw</SelectItem>
                    <SelectItem value="in_behandeling">In behandeling</SelectItem>
                    <SelectItem value="afgehandeld">Afgehandeld</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => omzettenNaarContact(a)}
                >
                  <UserPlus className="w-4 h-4 mr-1" /> Omzetten naar contact
                </Button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}