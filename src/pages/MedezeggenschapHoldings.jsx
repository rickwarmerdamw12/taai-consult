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
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Subthema's</h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">De EOR</h3>
              <p className="text-slate-600">
                Heldere afspraken en rolverdeling in internationale medezeggenschap.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Feitelijke zeggenschap</h3>
              <p className="text-slate-600">
                Inzicht in waar besluiten écht genomen worden.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fusies en Overnames en COR</h3>
              <p className="text-slate-600">
                Medezeggenschap goed organiseren in verandering.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">OR en complexe bedrijfsstructuur</h3>
              <p className="text-slate-600">
                Grip op structuur, mandaten en overleglijnen.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Reorganiseren</h3>
              <p className="text-slate-600">
                Rust en regie in een zorgvuldig traject.
              </p>
            </div>
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