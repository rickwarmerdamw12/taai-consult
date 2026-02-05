import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import PageSection from '../components/PageSection';
import CardGrid from '../components/CardGrid';
import Accordion from '../components/Accordion';
import CTABlock from '../components/CTABlock';

export default function TrainingenVoorDeOr() {
  const visibleTrainingen = [
    { title: "OR-start", description: "Basiscursus voor nieuwe OR-leden: taken, bevoegdheden en wetgeving (WOR)." },
    { title: "Onderhandelen", description: "Effectief onderhandelen met bestuur en management in WOR-context." },
    { title: "Sociaal plan opstellen", description: "Van nulsituatie tot gedragen sociaal plan met juridische kaders." },
    { title: "Reorganisatie begeleiden", description: "OR-rol bij fusies, overnames en reorganisaties." },
    { title: "Arbeidsvoorwaarden", description: "CAO's, beloningssystemen en wat de OR kan beïnvloeden." },
    { title: "Financiën lezen voor OR", description: "Begrijpen van jaarrekeningen en businesscases." }
  ];

  const faqs = [
    { title: "Voor wie zijn deze trainingen?", content: "Voor nieuwe en zittende OR-leden in profit, non-profit en publieke sector." },
    { title: "Hoe lang duren de trainingen?", content: "Meeste trainingen duren 1 tot 2 dagen, ook maatwerktrajecten mogelijk." },
    { title: "Kunnen trainingen op locatie?", content: "Ja, op jullie locatie, externe locatie of online/hybride." }
  ];

  return (
    <>
      <SEO 
        title="Trainingen voor de OR"
        description="OR-trainingen van basis tot gevorderd: OR-start, onderhandelen, sociaal plan, reorganisatie en meer."
        canonical="/trainingen-voor-de-or"
      />

      <Hero 
        title="Trainingen voor de OR die werken in de praktijk"
        subtitle="Van OR-start tot strategisch overleg: heldere training met veel oefening, zodat jullie met meer vertrouwen en invloed aan tafel zitten."
      >
        <p className="text-slate-300 mb-8">
          Nieuwe en zittende OR-leden die hun kennis en vaardigheden willen versterken. Van basiscursus tot verdieping.
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