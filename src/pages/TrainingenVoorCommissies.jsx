import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import PageSection from '../components/PageSection';
import CardGrid from '../components/CardGrid';
import Accordion from '../components/Accordion';
import CTABlock from '../components/CTABlock';

export default function TrainingenVoorCommissies() {
  const visibleTrainingen = [
    { title: "VGW(M)-basistraining", description: "Taken, bevoegdheden en verantwoordelijkheden van de VGW(M)-commissie." },
    { title: "RI&E lezen en beoordelen", description: "Hoe beoordeel je een RI&E kritisch en waar moet je op letten?" },
    { title: "Arbocatalogus gebruiken", description: "Werken met de arbocatalogus en naleving bewaken." },
    { title: "PSA en verzuim aanpakken", description: "Psychosociale arbeidsbelasting herkennen en aanpakken." },
    { title: "PV-commissie training", description: "Training voor personeelsvertegenwoordigingen in de publieke sector." },
    { title: "Klachtencommissie", description: "Rol en werkwijze van de klachtencommissie." }
  ];

  const faqs = [
    { title: "Verschil met OR-training?", content: "Commissies hebben specifieke taken en bevoegdheden. Deze trainingen zijn daarop toegespitst." },
    { title: "Ook voor gecombineerde commissies?", content: "Ja, veel OR'en hebben een VGW(M)-taak. We stemmen de training af op jullie situatie." },
    { title: "Wat als we weinig tijd hebben?", content: "We bieden ook compacte varianten van 1 dag of modulaire trajecten." }
  ];

  return (
    <>
      <SEO 
        title="Trainingen voor Commissies"
        description="Gerichte trainingen voor VGW(M)-commissies, personeelsvertegenwoordigingen en klachtencommissies."
        canonical="/trainingen-voor-commissies"
      />

      <Hero 
        title="Trainingen voor Commissies"
        subtitle="VGW(M), PV en andere commissies"
      >
        <p className="text-slate-300 mb-8">
          Leden van VGW(M)-commissies, personeelsvertegenwoordigingen en andere commissies die hun kennis willen versterken.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/contact#plan" 
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
            data-cta="plan_kennismaking"
          >
            Plan kennismaking
          </Link>
          <Link 
            to="/contact#brochure" 
            className="px-8 py-3 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors font-medium text-center"
            data-cta="vraag_brochure"
          >
            Vraag brochure
          </Link>
        </div>
      </Hero>

      <PageSection>
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Ons aanbod</h2>
        <CardGrid items={visibleTrainingen} />
      </PageSection>

      <PageSection background="gray">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Veelgestelde vragen</h2>
          <Accordion items={faqs} />
        </div>
      </PageSection>

      <CTABlock />
    </>
  );
}