import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Users, Building2, Target, CheckSquare, MessageSquare, FileText } from 'lucide-react';

export default function OverzichtTab() {
  const { data: contacten = [] } = useQuery({ queryKey: ['contacten'], queryFn: () => base44.entities.Contact.list() });
  const { data: bedrijven = [] } = useQuery({ queryKey: ['bedrijven'], queryFn: () => base44.entities.Bedrijf.list() });
  const { data: deals = [] } = useQuery({ queryKey: ['deals'], queryFn: () => base44.entities.Deal.list() });
  const { data: taken = [] } = useQuery({ queryKey: ['taken'], queryFn: () => base44.entities.Taak.list() });
  const { data: aanvragen = [] } = useQuery({ queryKey: ['contactaanvragen'], queryFn: () => base44.entities.ContactSubmission.list() });
  const { data: posts = [] } = useQuery({ queryKey: ['blogposts-beheer'], queryFn: () => base44.entities.BlogPost.list() });

  const stats = [
    { label: 'Contacten', value: contacten.length, icon: Users, color: '#1F3F35' },
    { label: 'Bedrijven', value: bedrijven.length, icon: Building2, color: '#2F5B4C' },
    { label: 'Deals', value: deals.filter(d => !['gewonnen','verloren'].includes(d.fase)).length, icon: Target, color: '#6F8F80' },
    { label: 'Open taken', value: taken.filter(t => t.status !== 'afgerond').length, icon: CheckSquare, color: '#AFC1B7' },
    { label: 'Nieuwe aanvragen', value: aanvragen.filter(a => a.status === 'nieuw').length, icon: MessageSquare, color: '#1F3F35' },
    { label: 'Blogposts', value: posts.filter(p => p.published).length, icon: FileText, color: '#2F5B4C' },
  ];

  const openTaken = taken.filter(t => t.status !== 'afgerond').slice(0, 5);
  const nieuweAanvragen = aanvragen.filter(a => a.status === 'nieuw').slice(0, 5);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-white rounded-xl p-4 shadow-sm text-center">
            <div className="flex justify-center mb-2">
              <Icon className="w-6 h-6" style={{ color }} />
            </div>
            <div className="text-2xl font-bold" style={{ color }}>{value}</div>
            <div className="text-xs text-gray-500 mt-1">{label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <h3 className="font-semibold mb-3" style={{ color: '#1F3F35' }}>Nieuwe contactaanvragen</h3>
          {nieuweAanvragen.length === 0 ? (
            <p className="text-sm text-gray-400">Geen nieuwe aanvragen</p>
          ) : (
            <div className="space-y-2">
              {nieuweAanvragen.map(a => (
                <div key={a.id} className="flex items-center justify-between text-sm border-b pb-2">
                  <div>
                    <span className="font-medium">{a.naam}</span>
                    <span className="text-gray-400 ml-2">{a.organisatie}</span>
                  </div>
                  <span className="text-xs text-gray-400">{a.created_date?.split('T')[0]}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm">
          <h3 className="font-semibold mb-3" style={{ color: '#1F3F35' }}>Open taken</h3>
          {openTaken.length === 0 ? (
            <p className="text-sm text-gray-400">Geen open taken</p>
          ) : (
            <div className="space-y-2">
              {openTaken.map(t => (
                <div key={t.id} className="flex items-center justify-between text-sm border-b pb-2">
                  <span className="font-medium">{t.titel}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${t.prioriteit === 'hoog' ? 'bg-red-100 text-red-700' : t.prioriteit === 'normaal' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-600'}`}>
                    {t.prioriteit}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}