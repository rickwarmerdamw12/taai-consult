import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import PageSection from '../components/PageSection';
import CardGrid from '../components/CardGrid';
import Accordion from '../components/Accordion';
import CTABlock from '../components/CTABlock';

export default function Masterclasses() {
  const visibleMasterclasses = [
    { title: "Basiskennis WOR", description: "Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk." },
    { title: "Masterclass adviesrecht", description: "Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk." },
    { title: "Masterclass artikel 24 vergadering", description: "Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk." },
    { title: "Masterclass informatierecht", description: "Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk." },
    { title: "Masterclass initiatiefrecht", description: "Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk." },
    { title: "Masterclass instemmingsrecht", description: "Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk." }
  ];

  const meerModules = [
    { title: "Masterclass OR versus Vakbond", content: "Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk." },
    { title: "Masterclass Reglement", content: "Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk." },
    { title: "Masterclass WOR", content: "Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk." }
  ];

  const faqs = [
    { title: "Voor wie zijn masterclasses bedoeld?", content: "Voor ervaren OR-leden, OR-voorzitters en commissievoorzitters die zich willen verdiepen in complexe materie." },
    { title: "Wat is het verschil met een training?", content: "Masterclasses zijn kleinschaliger, veronderstellen voorkennis en gaan dieper in op juridische, strategische of bestuurlijke vraagstukken." },
    { title: "Kan ik als individueel OR-lid meedoen?", content: "Ja, sommige masterclasses bieden we open in, zodat je met OR-leden van andere organisaties kunt sparren." }
  ];

  return (
    <>
      <SEO 
        title="Masterclasses"
        description="Verdiepende masterclasses voor ervaren OR-leden. Strategisch OR-werk, complexe juridische vraagstukken en bestuurlijke vaardigheden."
        canonical="/diensten/masterclasses"
      />

      <Hero 
        title="Masterclasses voor verdieping en strategische scherpte"
        subtitle="Voor ervaren OR-leden en commissies die verder willen kijken: meer context, betere afwegingen en sterker gesprek met de bestuurder."
      >
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Voor wie</h3>
          <p className="text-slate-300">
            Ervaren OR-leden, OR-voorzitters en commissievoorzitters die zich willen verdiepen in complexe strategische en juridische materie.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-3">Wat het oplevert</h3>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Diepgaande juridische en strategische verdieping</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Sparren met andere ervaren OR-leden</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Van operationeel naar strategisch niveau</span>
            </li>
          </ul>
        </div>

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
        <CardGrid items={visibleMasterclasses} />
      </PageSection>

      <PageSection background="gray">
        <Accordion items={meerModules} title="Meer masterclasses" />
        
        <p className="text-slate-600 mt-8 text-center">
          Staat jullie onderwerp er niet tussen? We verzorgen ook maatwerk.
        </p>
      </PageSection>

      <PageSection>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Werkwijze</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">1</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Intakegesprek</h3>
                <p className="text-slate-600">We bespreken jullie ervaring, leervragen en specifieke situaties die je wilt verdiepen.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">2</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Kleinschalige sessies</h3>
                <p className="text-slate-600">Masterclasses zijn bewust klein (max 12 deelnemers) om verdieping en interactie mogelijk te maken.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">3</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Netwerk & sparren</h3>
                <p className="text-slate-600">Veel ruimte om te leren van elkaar en netwerk op te bouwen met andere ervaren OR-leden.</p>
              </div>
            </div>
          </div>
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