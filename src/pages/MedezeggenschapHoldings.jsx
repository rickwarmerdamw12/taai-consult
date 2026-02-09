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
        title="Medezeggenschap in holdings en concerns"
        subtitle="Duidelijkheid over rollen, mandaten en besluitvorming in complexe organisatiestructuren."
      >
        <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-3xl">
          In holdings en concerns is medezeggenschap zelden eenvoudig georganiseerd. Besluitvorming vindt plaats op meerdere niveaus, terwijl invloed, verantwoordelijkheid en overlegstructuren niet altijd samenvallen.
        </p>
      </Hero>

      <PageSection>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Waarom medezeggenschap in holdings complex is</h2>
              <div className="prose prose-lg text-slate-600 space-y-4 leading-relaxed">
                <p>
                  In organisaties met meerdere entiteiten, holdings of internationale structuren ontstaat al snel onduidelijkheid over waar besluiten worden genomen en wie daar invloed op heeft. Formele medezeggenschap is vaak georganiseerd op één niveau, terwijl feitelijke zeggenschap elders ligt.
                </p>
                <p>
                  Dat roept vragen op over mandaten, rolverdeling en de positie van de OR, COR of EOR. Zonder heldere afspraken ontstaat het risiko dat medezeggenschap te laat wordt betrokken of onvoldoende impact heeft.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 border border-slate-200">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center text-white font-bold">1</div>
                    <div className="flex-1 text-sm text-slate-700">Besluitvorming op meerdere niveaus</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-700 flex items-center justify-center text-white font-bold">2</div>
                    <div className="flex-1 text-sm text-slate-700">Onduidelijke mandaten en bevoegdheden</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-500 flex items-center justify-center text-white font-bold">3</div>
                    <div className="flex-1 text-sm text-slate-700">Versnipperde overlegstructuren</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-300 flex items-center justify-center text-slate-900 font-bold">4</div>
                    <div className="flex-1 text-sm text-slate-700">Risico op late betrokkenheid</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection background="gray">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Wat dit betekent voor de OR</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <p className="text-slate-700 leading-relaxed">onduidelijkheid over waar invloed effectief kan worden uitgeoefend</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <p className="text-slate-700 leading-relaxed">spanning tussen formele bevoegdheden en feitelijke besluitvorming</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-slate-700 leading-relaxed">afstemming tussen lokale OR'en, COR en EOR</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <p className="text-slate-700 leading-relaxed">complexiteit bij reorganisaties, fusies en overnames</p>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Onze benadering</h2>
          <p className="text-slate-600 leading-relaxed">
            Wij benaderen medezeggenschap in holdings vanuit de concrete organisatiecontext. We helpen OR'en en commissies inzicht te krijgen in besluitvormingslijnen, verantwoordelijkheden en juridische kaders, met als doel medezeggenschap werkbaar en effectief te houden.
          </p>
        </div>
      </PageSection>

      <PageSection background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Subthema's binnen medezeggenschap in holdings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Europese ondernemingsraad (EOR)</h3>
              <p className="text-slate-600">
                Wanneer is een EOR verplicht en hoe werkt die in de praktijk?
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Feitelijke zeggenschap</h3>
              <p className="text-slate-600">
                Hoe pas je de WOR toe als het besluit niet formeel in Nederland valt?
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Fusie & overname (M&A)</h3>
              <p className="text-slate-600">
                Wat zijn de spelregels bij fusies, overnames en herstructureringen?
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">COR / concern-OR</h3>
              <p className="text-slate-600">
                Hoe richt je een COR in en hoe verhoudt die zich tot lokale OR'en?
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Complexe reorganisaties</h3>
              <p className="text-slate-600">
                Hoe bewaak je medezeggenschap bij grote structuurwijzigingen?
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      <CTABlock 
        title="Vragen over medezeggenschap in jullie organisatie?"
        subtitle="Een kennismaking is vrijblijvend en bedoeld om samen te verkennen welke vragen spelen binnen jullie structuur."
      />
    </>
  );
}