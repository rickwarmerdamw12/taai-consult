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
        subtitle="Nieuwe vormen van participatie vragen om duidelijke spelregels en een OR die regie houdt."
      />

      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Waarom vernieuwing nodig is</h2>
          <div className="prose prose-lg text-slate-600 space-y-4 leading-relaxed">
            <p>
              Organisaties veranderen sneller dan ooit. Medewerkers willen eerder betrokken worden, besluitvorming verschuift en informele participatie neemt toe. Denk aan medewerkerspanels, werkgroepen, dialoogsessies of tijdelijke projectstructuren.
            </p>
            <p>
              Deze ontwikkelingen bieden kansen voor betrokkenheid en draagvlak, maar roepen ook vragen op. Hoe verhouden deze vormen zich tot de formele OR? Wat betekent dit voor wettelijke bevoegdheden? En hoe voorkom je dat de OR buitenspel raakt of invloed verliest?
            </p>
            <p>
              Vernieuwing vraagt daarom niet alleen om creativiteit, maar vooral om duidelijke keuzes en heldere kaders.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Onze visie op vernieuwende medezeggenschap</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">De OR blijft juridisch verankerd</h3>
                  <p className="text-slate-600">
                    Vernieuwing mag de formele positie van de OR niet ondermijnen. De OR blijft het wettelijk verankerde orgaan met rechten en verantwoordelijkheden.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-700 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Combineer formeel en informeel</h3>
                  <p className="text-slate-600">
                    Succesvolle medezeggenschap combineert formele besluitvorming met informele participatie. Nieuwe vormen leveren input, de OR vertaalt dit naar standpunten en besluitvorming.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-500 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">De OR als regisseur</h3>
                  <p className="text-slate-600">
                    De OR kan nieuwe participatievormen organiseren, begeleiden en structureren. Zo blijft de OR zichtbaar, relevant en verbonden met de achterban.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-400 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Experimenteren met reflectie</h3>
                  <p className="text-slate-600">
                    Vernieuwing vraagt ruimte om te experimenteren, maar ook om te evalueren en bij te sturen. Niet alles hoeft vast, maar niets mag vrijblijvend zijn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Wat dit betekent voor de OR</h2>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span>Meer betrokkenheid van medewerkers zonder verlies van formele invloed</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span>Heldere spelregels tussen OR, bestuurder en informele participatievormen</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span>Duidelijkheid over rollen, mandaten en verantwoordelijkheden</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span>Behoud van juridische stevigheid in een veranderende organisatie</span>
            </li>
          </ul>
        </div>
      </PageSection>

      <PageSection background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Onze benadering</h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            Wij helpen OR'en vernieuwende vormen van medezeggenschap zorgvuldig vorm te geven binnen de bestaande juridische kaders. Dat doen we altijd vanuit de concrete organisatiecontext, met oog voor cultuur, bestuurlijke verhoudingen en wat praktisch werkt.
          </p>
          <p className="text-slate-600 leading-relaxed text-lg mt-4">
            Onze ondersteuning is gericht op het versterken van de OR-positie, niet op het vervangen ervan.
          </p>
        </div>
      </PageSection>

      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Relevante diensten</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/workshops" className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Workshops</h3>
              <p className="text-sm text-slate-600">OR-strategie, participatievormen, hybride werken</p>
            </Link>
            <Link to="/masterclasses" className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Masterclasses</h3>
              <p className="text-sm text-slate-600">OR als regisseur, strategisch OR-werk</p>
            </Link>
            <Link to="/or-ondersteuning" className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">OR-ondersteuning</h3>
              <p className="text-sm text-slate-600">Advies en coaching bij vernieuwing</p>
            </Link>
            <Link to="/trainingen-voor-de-or" className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Trainingen</h3>
              <p className="text-sm text-slate-600">Change management, gesprek met achterban, digitale tools</p>
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