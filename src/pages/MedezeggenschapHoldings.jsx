import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import PageSection from '../components/PageSection';
import CTABlock from '../components/CTABlock';

export default function MedezeggenschapHoldings() {
  return (
    <>
      <SEO 
        title="Medezeggenschap in Holdings"
        description="Medezeggenschap in holdings en concernstructuren vraagt om heldere rollen en mandaten. Taai-Consult helpt OR'en grip te krijgen op complexe structuren."
        canonical="/themas/medezeggenschap-holdings"
      />

      <Hero 
        title="Medezeggenschap in holdings: duidelijkheid in complexe structuren"
        subtitle="Grip op rollen, mandaten en besluitvorming, zodat medezeggenschap ook in concerns effectief blijft."
      />

      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">De uitdaging</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">
              Medezeggenschap in holdingstructuren is complex. Beslissingen worden op verschillende niveaus genomen, mandaten zijn onduidelijk en de invloed van de OR op strategische keuzes lijkt beperkt.
            </p>
            <p className="mb-4">
              Centrale OR, groeps-OR en decentrale OR'en moeten samenwerken, maar rollen en verantwoordelijkheden zijn niet altijd helder. Wie adviseert waarover? Wat is het mandaat van de centrale OR? En hoe voorkom je dat de OR achter de feiten aanloopt?
            </p>
            <p>
              Bij fusies, overnames en reorganisaties komt daar nog een extra laag bij: grensoverschrijdende structuren, internationale aandeelhouders en complexe besluitvormingsprocessen.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Onze aanpak</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">1. Heldere rollen en mandaten</h3>
              <p className="text-slate-600">
                We helpen OR'en hun juridische positie te begrijpen en heldere afspraken te maken over wie waarover adviseert. Van WOR-uitgangspunten tot praktische werkafspraken.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">2. Strategische positie versterken</h3>
              <p className="text-slate-600">
                We trainen OR'en om strategischer te opereren: van operationeel naar strategisch niveau, van reageren naar anticiperen, van volgen naar meedenken.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">3. Samenwerking tussen OR-niveaus</h3>
              <p className="text-slate-600">
                We begeleiden centrale OR'en, groeps-OR'en en decentrale OR'en bij het opzetten van een effectieve samenwerkingsstructuur. Met heldere communicatie en mandaten.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">4. Ondersteuning bij complexe dossiers</h3>
              <p className="text-slate-600">
                Bij fusies, overnames en reorganisaties ondersteunen we OR'en met advies, interim-ondersteuning en coaching. Zodat de OR rust en regie houdt.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Relevante diensten</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              to="/diensten/trainingen-voor-de-or"
              className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Trainingen OR</h3>
              <p className="text-slate-600 text-sm">OR in holding structuren, strategisch OR-werk, concern-OR vraagstukken</p>
            </Link>
            <Link 
              to="/diensten/masterclasses"
              className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Masterclasses</h3>
              <p className="text-slate-600 text-sm">Complexe juridische vraagstukken, strategisch OR-werk, OR en governance</p>
            </Link>
            <Link 
              to="/diensten/or-ondersteuning"
              className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-2">OR-ondersteuning</h3>
              <p className="text-slate-600 text-sm">Advies, interim en coaching bij complexe concernvraagstukken</p>
            </Link>
            <Link 
              to="/diensten/workshops"
              className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Workshops</h3>
              <p className="text-slate-600 text-sm">OR-strategie, samenwerking tussen OR-niveaus, reorganisatie-aanpak</p>
            </Link>
          </div>
        </div>
      </PageSection>

      <CTABlock 
        title="Grip op jullie concernstructuur?"
        subtitle="Plan een kennismaking om te bespreken hoe we jullie OR kunnen versterken"
      />
    </>
  );
}