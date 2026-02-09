import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import PageSection from '../components/PageSection';
import CTABlock from '../components/CTABlock';

export default function MedezeggenschapAmbtelijk() {
  return (
    <>
      <SEO 
        title="Medezeggenschap in Ambtelijke Organisaties"
        description="Effectieve medezeggenschap in publieke organisaties vraagt om inzicht in politiek-bestuurlijke verhoudingen. Taai-Consult ondersteunt PV, GMR en DMR."
        canonical="/themas/medezeggenschap-ambtelijk"
      />

      <Hero 
        title="Medezeggenschap in ambtelijke organisaties"
        subtitle="Scherpte met gevoel voor bestuurlijke context"
      >
        <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-3xl">
          Heldere medezeggenschap in een politiek-bestuurlijke omgeving vraagt om meer dan kennis van regels. Het vraagt inzicht in verhoudingen, timing en besluitvorming — en het vermogen om invloed uit te oefenen zonder de bestuurlijke realiteit te negeren.
        </p>
      </Hero>

      <PageSection>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Waarom medezeggenschap in ambtelijke organisaties anders is</h2>
              <div className="prose prose-lg text-slate-600 space-y-4 leading-relaxed">
                <p>
                  Medezeggenschap in de publieke sector speelt zich af in een politiek-bestuurlijke context. Besluitvorming wordt niet alleen bepaald door ambtelijke afwegingen, maar ook door politieke keuzes, maatschappelijke gevoeligheden en bestuurlijke verantwoordelijkheden.
                </p>
                <p>
                  Formele medezeggenschap (PV, GMR, DMR) staat daardoor regelmatig onder spanning: besluiten worden voorbereid buiten het formele overleg, belangen lopen niet gelijk tussen college, raad, directie en organisatie, en wet- en regelgeving wijkt af van de WOR en verschilt per sector.
                </p>
                <p>
                  Zeker bij reorganisaties, bezuinigingen of gemeentelijke herindelingen wordt die complexiteit voelbaar. Juist dan moet de medezeggenschap zorgvuldig opereren, terwijl de ruimte daarvoor onder druk staat.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-6">Typische knelpunten</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                    <p className="text-slate-700">Politiek gekleurde besluitvorming</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                    <p className="text-slate-700">Meerdere machts- en overleglijnen</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                    <p className="text-slate-700">Spanning tussen ambtelijke en politieke belangen</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                    <p className="text-slate-700">Beperkte invloed in gevoelige dossiers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection background="gray">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Wat dit betekent voor PV, GMR en DMR</h2>
          <p className="text-lg text-slate-600 mb-8 text-center max-w-3xl mx-auto">
            In deze context is de vraag niet of medezeggenschap bestaat, maar waar en hoe invloed daadwerkelijk kan worden uitgeoefend.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-slate-700 leading-relaxed">onduidelijkheid over het juiste moment van betrokkenheid</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-slate-700 leading-relaxed">spanning tussen formele rechten en feitelijke besluitvorming</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-slate-700 leading-relaxed">lastige positionering richting college, raad en directie</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <p className="text-slate-700 leading-relaxed">risico op te late of symbolische betrokkenheid</p>
            </div>
          </div>
          <p className="text-center text-slate-600 mt-8 italic">
            Effectieve medezeggenschap vraagt hier om strategie, timing en bestuurlijke sensitiviteit.
          </p>
        </div>
      </PageSection>

      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Onze benadering</h2>
          <div className="prose prose-lg text-slate-600 space-y-4 leading-relaxed mb-8">
            <p>
              Wij ondersteunen medezeggenschap in ambtelijke organisaties altijd vanuit de concrete bestuurlijke werkelijkheid. Geen standaardmodellen, maar maatwerk dat rekening houdt met politieke dynamiek, verhoudingen en wettelijke kaders.
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">We helpen PV's, GMR's en DMR's om:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">→</span>
                <span className="text-slate-700">inzicht te krijgen in bestuurlijke besluitvormingsprocessen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">→</span>
                <span className="text-slate-700">hun positie en rol scherp te bepalen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">→</span>
                <span className="text-slate-700">invloed uit te oefenen zonder escalatie</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">→</span>
                <span className="text-slate-700">werkbare afspraken te maken met bestuur en directie</span>
              </li>
            </ul>
            <p className="text-slate-600 mt-6 italic">
              Altijd met respect voor de context — en met oog voor wat haalbaar en effectief is.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Subthema's binnen ambtelijke medezeggenschap</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Politiek-bestuurlijke besluitvorming</h3>
              <p className="text-slate-600">
                Hoe beweeg je mee in een politiek veld zonder je rol te verliezen?
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Reorganisaties & bezuinigingen</h3>
              <p className="text-slate-600">
                Zorgvuldige medezeggenschap wanneer keuzes gevoelig liggen.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Gemeentelijke herindeling</h3>
              <p className="text-slate-600">
                Positie en invloed van GMR en DMR in veranderende structuren.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Formele vs. feitelijke zeggenschap</h3>
              <p className="text-slate-600">
                Waar worden besluiten écht genomen — en hoe sluit je daarop aan?
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Samenwerking met college en raad</h3>
              <p className="text-slate-600">
                Heldere rollen en werkbare verhoudingen.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      <CTABlock 
        title="Vragen over medezeggenschap in jullie organisatie?"
        subtitle="Een kennismaking is vrijblijvend en bedoeld om samen te verkennen hoe medezeggenschap effectiever kan."
      />
    </>
  );
}