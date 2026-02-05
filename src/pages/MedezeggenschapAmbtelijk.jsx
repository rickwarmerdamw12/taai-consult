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
        description="Medezeggenschap in de publieke sector heeft eigen dynamiek en spelregels. Taai-Consult kent de ambtelijke context en helpt OR'en effectief opereren."
        canonical="/themas/medezeggenschap-ambtelijke-organisaties"
      />

      <Hero 
        title="Medezeggenschap in ambtelijke organisaties: scherpte mét gevoel voor context"
        subtitle="We kennen de bestuurlijke dynamiek en helpen OR'en en commissies met invloed, helderheid en werkbare afspraken."
      />

      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">De context</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">
              Medezeggenschap in ambtelijke organisaties kent een eigen dynamiek. Personeelsvertegenwoordigingen (PV), gemeenschappelijke medezeggenschapsraden (GMR) en decentrale medezeggenschapsraden (DMR) opereren in een politiek-bestuurlijke context.
            </p>
            <p className="mb-4">
              Besluitvorming is vaak politiek gekleurd, er zijn meerdere belanghebbenden (college, raad, directie), en er is spanning tussen ambtelijke belangen en politieke wensen. Bovendien speelt de Wet op de ondernemingsraden niet altijd, maar de Wet op de medezeggenschap (publieke sector) of lokale verordeningen.
            </p>
            <p>
              Bij reorganisaties, bezuinigingen en fusies (gemeentelijke herindelingen) komt daar nog een extra laag bij: hoe beïnvloed je als PV of GMR besluitvorming als het politiek gevoelig ligt?
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Onze aanpak</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">1. Kennis van de publieke sector</h3>
              <p className="text-slate-600">
                We kennen de ambtelijke context, politiek-bestuurlijke verhoudingen en de specifieke wet- en regelgeving (Wms, Wmog, lokale verordeningen).
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">2. Effectief opereren in politiek veld</h3>
              <p className="text-slate-600">
                We trainen PV'en en GMR'en om effectief te opereren in een politiek gevoelig veld: hoe beïnvloed je college en raad, hoe lobby je, en hoe houd je de ambtelijke regie?
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">3. Reorganisaties en bezuinigingen</h3>
              <p className="text-slate-600">
                We begeleiden PV'en bij reorganisaties, bezuinigingen en gemeentelijke herindelingen. Van sociaal plan tot communicatie met de achterban.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">4. Ondersteuning op maat</h3>
              <p className="text-slate-600">
                Advies, interim-ondersteuning en coaching specifiek gericht op de publieke sector. We weten hoe het werkt en wat er speelt.
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
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Trainingen PV/GMR</h3>
              <p className="text-slate-600 text-sm">Basistraining, reorganisatie, lobbyen in politiek veld</p>
            </Link>
            <Link 
              to="/diensten/vaardigheden-voor-de-or"
              className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Vaardigheden</h3>
              <p className="text-slate-600 text-sm">Lobbyen, netwerken, presenteren aan college en raad</p>
            </Link>
            <Link 
              to="/diensten/or-ondersteuning"
              className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-2">PV-ondersteuning</h3>
              <p className="text-slate-600 text-sm">Advies, interim en coaching bij complexe dossiers</p>
            </Link>
            <Link 
              to="/diensten/workshops"
              className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Workshops</h3>
              <p className="text-slate-600 text-sm">Reorganisatie-aanpak, stakeholder management, PV-strategie</p>
            </Link>
          </div>
        </div>
      </PageSection>

      <CTABlock 
        title="Klaar om de volgende stap te zetten?"
        subtitle="Plan een kennismaking of vraag onze brochure aan."
      />
    </>
  );
}