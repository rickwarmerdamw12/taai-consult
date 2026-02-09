import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import PageSection from '../components/PageSection';
import CTABlock from '../components/CTABlock';

export default function VernieuwendMedezeggenschap() {
  return (
    <>
      <SEO 
        title="Vernieuwend Medezeggenschap"
        description="Nieuwe vormen van participatie vragen om duidelijke spelregels. Wij helpen OR'en vernieuwing te benutten zonder hun wettelijke rol te ondergraven."
        canonical="/themas/vernieuwend-medezeggenschap"
      />

      <Hero 
        title="Vernieuwende medezeggenschap: meebewegen zonder positie te verliezen"
        subtitle="Nieuwe vormen van participatie vragen om duidelijke spelregels. Wij helpen OR'en vernieuwing te benutten, zonder hun wettelijke rol en invloed te ondergraven."
      >
        <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-3xl">
          Organisaties veranderen sneller dan ooit. Medewerkers willen eerder betrokken worden, besluitvorming verschuift en informele participatie neemt toe. Dat biedt kansen, maar roept ook vragen op: hoe blijft de OR relevant, juridisch stevig én verbonden met de organisatie?
        </p>
      </Hero>

      <PageSection>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Waarom traditionele medezeggenschap onder druk staat</h2>
              <div className="prose prose-lg text-slate-600 space-y-4 leading-relaxed">
                <p>
                  De klassieke OR-structuur sluit niet altijd aan bij hedendaagse organisatievormen. Hybride werken, snelle verandertrajecten en nieuwe generaties medewerkers vragen om andere manieren van betrokkenheid.
                </p>
                <p>
                  Steeds vaker ontstaan parallelle vormen van participatie: medewerkerspanels, werkgroepen, hackathons en informele sparmomenten met het MT. Zonder duidelijke inbedding kan dit de positie van de OR verzwakken in plaats van versterken.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 border border-slate-200">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center text-white font-bold">1</div>
                    <div className="flex-1 text-sm text-slate-700">Snellere besluitvorming buiten formele OR-cycli</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-700 flex items-center justify-center text-white font-bold">2</div>
                    <div className="flex-1 text-sm text-slate-700">Informele participatie zonder duidelijke rolverdeling</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-500 flex items-center justify-center text-white font-bold">3</div>
                    <div className="flex-1 text-sm text-slate-700">Risico dat OR te laat of alleen formeel wordt betrokken</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-300 flex items-center justify-center text-slate-900 font-bold">4</div>
                    <div className="flex-1 text-sm text-slate-700">Onduidelijkheid over juridische status en invloed</div>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <p className="text-slate-700 leading-relaxed">spanning tussen formele bevoegdheden en informele invloed</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <p className="text-slate-700 leading-relaxed">risico op uitholling van de OR-rol</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-slate-700 leading-relaxed">behoefte aan nieuwe vaardigheden en werkvormen</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-slate-700 leading-relaxed">noodzaak om regie te houden over participatie</p>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Onze visie</h2>
          <div className="space-y-6">
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">De OR blijft juridisch verankerd</h3>
                  <p className="text-slate-600">
                    Vernieuwing mag nooit betekenen dat wettelijke bevoegdheden vervagen. De OR blijft het formele anker.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-700 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Combineer formeel en informeel</h3>
                  <p className="text-slate-600">
                    Informele participatie kan waardevolle input leveren, mits deze wordt verbonden aan formele OR-besluitvorming.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-500 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">De OR als regisseur</h3>
                  <p className="text-slate-600">
                    De OR kan zelf nieuwe participatievormen initiëren en begeleiden, in plaats van deze te ondergaan.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-400 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Experimenteren met structuur</h3>
                  <p className="text-slate-600">
                    Vernieuwing vraagt ruimte om te testen, evalueren en bij te sturen — met duidelijke afspraken.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Onze benadering</h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            Wij helpen OR'en vernieuwende vormen van medezeggenschap zo in te richten dat ze bijdragen aan invloed, betrokkenheid en kwaliteit van besluitvorming. We brengen structuur aan, bewaken de juridische positie en zorgen dat vernieuwing werkbaar blijft in de praktijk.
          </p>
        </div>
      </PageSection>

      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Subthema's binnen vernieuwende medezeggenschap</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Informele participatie & OR-positie</h3>
              <p className="text-slate-600">
                Hoe verbind je panels, werkgroepen en sparsessies aan formele medezeggenschap?
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">OR als regisseur van participatie</h3>
              <p className="text-slate-600">
                Van reageren naar organiseren en sturen.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Digitale en hybride medezeggenschap</h3>
              <p className="text-slate-600">
                Wat werkt wel, wat niet en hoe borg je betrokkenheid?
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Vernieuwing zonder verlies van gezag</h3>
              <p className="text-slate-600">
                Hoe blijft de OR serieus genomen in een veranderende context?
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Relevante diensten</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/workshops" className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Workshops</h3>
              <p className="text-sm text-slate-600">OR-strategie, participatievormen, OR als regisseur</p>
            </Link>
            <Link to="/masterclasses" className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Masterclasses</h3>
              <p className="text-sm text-slate-600">Strategisch OR-werk, change management, vernieuwende medezeggenschap</p>
            </Link>
            <Link to="/or-ondersteuning" className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">OR-ondersteuning</h3>
              <p className="text-sm text-slate-600">Advies en coaching bij verandertrajecten en nieuwe participatievormen</p>
            </Link>
            <Link to="/trainingen-voor-de-or" className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Trainingen</h3>
              <p className="text-sm text-slate-600">Gesprek met achterban, verandering begeleiden, digitale tools</p>
            </Link>
          </div>
        </div>
      </PageSection>

      <CTABlock 
        title="Klaar om vernieuwing werkbaar te maken?"
        subtitle="Plan een kennismaking of vraag onze brochure aan."
      />
    </>
  );
}