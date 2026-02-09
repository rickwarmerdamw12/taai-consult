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
    { title: "Basismodule", description: "Voor nieuwe OR-leden en startende OR'en. Kennismaking met rollen, rechten en het OR-werk in de dagelijkse praktijk." },
    { title: "Het fundament van de OR", description: "Voor OR'en die hun basis willen verstevigen en effectiever willen samenwerken en overleggen." },
    { title: "De OR als strategisch adviseur", description: "Voor ervaren OR'en die eerder en inhoudelijker betrokken willen zijn bij besluitvorming." },
    { title: "De OR en werken met commissies", description: "Voor OR'en die met commissies werken of dit beter willen organiseren en positioneren." },
    { title: "Effectief samenwerken binnen de OR", description: "Gericht op samenwerking, communicatie en rolverdeling binnen de OR." },
    { title: "OR als serieuze gesprekspartner", description: "Voor OR'en die hun positie en invloed in het overleg met de bestuurder willen versterken." }
  ];

  const meerTrainingen = [
    { title: "Professionalisering van de OR", description: "Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk." },
    { title: "Teambuilding", description: "Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk." },
    { title: "Teambuilding met Roos van Leary", description: "Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk." }
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
        
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Aanvullende trainingen en maatwerk</h3>
          <p className="text-slate-600 mb-6">
            Staat jullie onderwerp er niet tussen? Wij verzorgen ook maatwerk, afgestemd op jullie OR en organisatie.
          </p>
          <Accordion items={meerTrainingen} />
        </div>
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