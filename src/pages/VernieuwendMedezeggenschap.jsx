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
        description="Moderne vormen van medezeggenschap en participatie. Van traditionele OR naar vernieuwende vormen van invloed en samenwerking."
        canonical="/themas/vernieuwend-medezeggenschap"
      />

      <Hero 
        title="Vernieuwend Medezeggenschap"
        subtitle="Moderne vormen van participatie en invloed"
      />

      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Nieuwe tijden, nieuwe vormen</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">
              De traditionele OR is niet altijd het beste antwoord op moderne vraagstukken. Jonge werknemers willen sneller en directer betrokken worden, hybride werken vraagt om nieuwe vormen van participatie, en de snelheid van verandering maakt het lastig om via de formele OR-structuur te opereren.
            </p>
            <p className="mb-4">
              Steeds meer organisaties zoeken naar vernieuwende vormen van medezeggenschap: werknemerspanels, werkgroepen, sparringsessies met MT, hackathons en andere manieren om werknemers te betrekken bij besluitvorming.
            </p>
            <p>
              Maar hoe verhoudt dat zich tot de formele OR? Wat is de juridische positie van deze nieuwe vormen? En hoe voorkom je dat de OR buiten spel komt te staan?
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Onze visie</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">1. OR blijft juridisch verankerd</h3>
              <p className="text-slate-600">
                Nieuwe vormen zijn mooi, maar de OR blijft de formele medezeggenschap met wettelijke bevoegdheden. Vernieuwing moet daarop aansluiten, niet concurreren.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">2. Combineer formeel en informeel</h3>
              <p className="text-slate-600">
                Succesvolle OR'en combineren formele besluitvorming met informele participatie: werkgroepen, panels en sparringsessies als input voor formele OR-standpunten.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">3. OR als regisseur</h3>
              <p className="text-slate-600">
                De OR kan nieuwe participatievormen organiseren en faciliteren. Zo blijft de OR relevant en vergroot je de betrokkenheid van de achterban.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">4. Experimenteer en leer</h3>
              <p className="text-slate-600">
                Vernieuwing vraagt om experimenteren. We helpen OR'en om nieuwe werkvormen uit te proberen, te evalueren en bij te stellen.
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
              to="/diensten/workshops"
              className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Workshops</h3>
              <p className="text-slate-600 text-sm">OR-strategie, nieuwe participatievormen, hybride werken</p>
            </Link>
            <Link 
              to="/diensten/masterclasses"
              className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Masterclasses</h3>
              <p className="text-slate-600 text-sm">Strategisch OR-werk, change management, OR als regisseur</p>
            </Link>
            <Link 
              to="/diensten/or-ondersteuning"
              className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-2">OR-ondersteuning</h3>
              <p className="text-slate-600 text-sm">Advies en coaching bij nieuwe participatievormen</p>
            </Link>
            <Link 
              to="/diensten/trainingen-voor-de-or"
              className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Trainingen</h3>
              <p className="text-slate-600 text-sm">Change management, gesprek met achterban, digitale tools</p>
            </Link>
          </div>
        </div>
      </PageSection>

      <CTABlock 
        title="Klaar voor vernieuwing?"
        subtitle="Plan een kennismaking om te bespreken hoe jullie OR kan vernieuwen"
      />
    </>
  );
}