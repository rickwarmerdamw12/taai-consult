import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import PageSection from '../components/PageSection';
import CardGrid from '../components/CardGrid';
import Accordion from '../components/Accordion';
import CTABlock from '../components/CTABlock';

export default function VaardighedenVoorDeOr() {
  const visibleVaardigheden = [
    { title: "Argumenteren", description: "Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk." },
    { title: "Conflicthantering", description: "Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk." },
    { title: "Maatwerk gesprekstechniek", description: "Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk." },
    { title: "Onderhandelen", description: "Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk." },
    { title: "Vergadertechniek", description: "Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk." }
  ];

  const faqs = [
    { title: "Kan ik meerdere vaardigheden combineren?", content: "Ja, we stellen vaak maatwerktrajecten samen van 3-5 dagdelen." },
    { title: "Zijn deze trainingen ook voor commissies?", content: "Absoluut. VGW(M)-commissies en andere commissies hebben vaak dezelfde vaardigheden nodig." },
    { title: "Krijg ik een certificaat?", content: "Ja, na afloop ontvang je een certificaat van deelname." }
  ];

  return (
    <>
      <SEO 
        title="Vaardigheden voor de OR"
        description="Vaardighedentrainingen voor OR-leden: vergadertechnieken, presenteren, lobbyen en meer."
        canonical="/vaardigheden-voor-de-or"
      />

      <Hero 
        title="Vaardigheden die het verschil maken aan tafel"
        subtitle="Vergaderen, onderhandelen en communicatie: ontwikkel praktische skills waarmee je als OR-lid effectiever en prettiger samenwerkt."
      >
        <p className="text-slate-300 mb-8">
          OR-leden die hun persoonlijke effectiviteit willen vergroten. Van vergadertechniek tot strategisch beïnvloeden.
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
        <CardGrid items={visibleVaardigheden} />
        
        <p className="text-slate-600 mt-8 text-center">
          Staat jullie onderwerp er niet tussen? We verzorgen ook maatwerk.
        </p>
      </PageSection>

      <PageSection background="gray">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Veelgestelde vragen</h2>
          <Accordion items={faqs} />
        </div>
      </PageSection>

      <CTABlock 
        title="Klaar om de volgende stap te zetten?"
        subtitle="Plan een kennismaking of vraag onze brochure aan."
      />
    </>
  );
}