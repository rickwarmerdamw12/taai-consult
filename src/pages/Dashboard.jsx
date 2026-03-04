import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Lock, LayoutDashboard, MessageSquare, Users, Building2, Target, CheckSquare, FileText, Globe } from 'lucide-react';

import OverzichtTab from '../components/dashboard/OverzichtTab';
import ContactAanvragenTab from '../components/dashboard/ContactAanvragenTab';
import ContactenTab from '../components/dashboard/ContactenTab';
import BedrijvenTab from '../components/dashboard/BedrijvenTab';
import PijplijnTab from '../components/dashboard/PijplijnTab';
import TakenTab from '../components/dashboard/TakenTab';
import BlogTab from '../components/dashboard/BlogTab';
import PagesTab from '../components/dashboard/PagesTab';

const TABS = [
  { key: 'overzicht', label: 'Overzicht', icon: LayoutDashboard },
  { key: 'aanvragen', label: 'Contactaanvragen', icon: MessageSquare },
  { key: 'contacten', label: 'Contacten', icon: Users },
  { key: 'bedrijven', label: 'Bedrijven', icon: Building2 },
  { key: 'pijplijn', label: 'Pijplijn', icon: Target },
  { key: 'taken', label: 'Taken', icon: CheckSquare },
  { key: 'blog', label: 'Blog', icon: FileText },
  { key: 'paginas', label: "Pagina's", icon: Globe },
];

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
        <h1 className="text-xl font-bold mb-1" style={{ color: '#1F3F35' }}>Dashboard</h1>
        <p className="text-sm text-gray-500 mb-6">Voer het wachtwoord in om verder te gaan.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            placeholder="Wachtwoord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3F35]"
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

export default function Dashboard() {
  const [unlocked, setUnlocked] = useState(false);
  const [activeTab, setActiveTab] = useState('overzicht');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!unlocked) return <PasswordGate onUnlock={() => setUnlocked(true)} />;

  const ActiveComponent = {
    overzicht: OverzichtTab,
    aanvragen: ContactAanvragenTab,
    contacten: ContactenTab,
    bedrijven: BedrijvenTab,
    pijplijn: PijplijnTab,
    taken: TakenTab,
    blog: BlogTab,
    paginas: PagesTab,
  }[activeTab];

  const currentTab = TABS.find(t => t.key === activeTab);

  return (
    <div className="min-h-screen bg-[#F4F4F4] flex">
      {/* Sidebar desktop */}
      <aside className="hidden md:flex flex-col w-56 bg-white shadow-sm border-r min-h-screen">
        <div className="px-5 py-6 border-b">
          <span className="font-bold text-lg" style={{ color: '#1F3F35' }}>Dashboard</span>
          <p className="text-xs text-gray-400 mt-0.5">Taai-Consult</p>
        </div>
        <nav className="flex-1 py-4 space-y-1 px-2">
          {TABS.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === key ? 'text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              style={activeTab === key ? { backgroundColor: '#1F3F35' } : {}}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile header */}
        <header className="md:hidden bg-white border-b px-4 py-3 flex items-center justify-between">
          <span className="font-bold" style={{ color: '#1F3F35' }}>Dashboard</span>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-500 text-sm border rounded-lg px-3 py-1.5">
            {currentTab?.label}
          </button>
        </header>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b shadow-sm">
            {TABS.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => { setActiveTab(key); setMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-2.5 px-4 py-3 text-sm font-medium border-b last:border-0 ${activeTab === key ? 'text-white' : 'text-gray-700'}`}
                style={activeTab === key ? { backgroundColor: '#1F3F35' } : {}}
              >
                <Icon className="w-4 h-4" />{label}
              </button>
            ))}
          </div>
        )}

        <main className="flex-1 p-6 max-w-6xl w-full">
          <h1 className="text-xl font-bold mb-6" style={{ color: '#1F3F35' }}>{currentTab?.label}</h1>
          <ActiveComponent />
        </main>
      </div>
    </div>
  );
}