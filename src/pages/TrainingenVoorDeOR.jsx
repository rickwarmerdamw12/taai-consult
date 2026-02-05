import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import PageSection from '../components/PageSection';
import CardGrid from '../components/CardGrid';
import Accordion from '../components/Accordion';
import CTABlock from '../components/CTABlock';

export default function TrainingenVoorDeOR() {
  const visibleTrainingen = [
    { title: "OR-start", description: "Basiscursus voor nieuwe OR-leden: taken, bevoegdheden, spelregels en wetgeving (WOR). Praktisch en direct toepasbaar.", duration: "2 dagen" },
    { title: "Onderhandelen", description: "Effectief onderhandelen met bestuur en management. Voorbereiding, tactiek en gespreksvaardigheden in WOR-context.", duration: "2 dagen" },
    { title: "Sociaal plan opstellen", description: "Van nulsituatie tot gedragen sociaal plan. Juridische kaders, onderhandelingstactiek en stakeholder management.", duration: "2 dagen" },
    { title: "Reorganisatie begeleiden", description: "OR-rol bij fusies, overnames en reorganisaties. Adviesrechten, informatieplicht en invloed op besluitvorming.", duration: "2 dagen" },
    { title: "Arbeidsvoorwaarden", description: "CAO's, beloningssystemen en secundaire arbeidsvoorwaarden. Wat kan de OR beïnvloeden en hoe?", duration: "1 dag" },
    { title: "Financiën lezen voor OR", description: "Begrijpen van jaarrekeningen, begrotingen en businesscases. Kritische vragen stellen aan het bestuur.", duration: "1 dag" }
  ];

  const meerModules = [
    { title: "OR en de RvC", content: "Hoe bouw je een effectieve relatie met de Raad van Commissarissen? Spelregels, verwachtingen en best practices." },
    { title: "OR in holding structuren", content: "Centrale OR, groeps-OR en decentrale OR'en: taken, mandaten en samenwerking in complexe structuren." },
    { title: "Strategisch dossier opbouwen", content: "Van signaal tot adviesaanvraag: hoe bouw je een overtuigend dossier op en beïnvloed je besluitvorming?" }
  ];

  const faqs = [
    { title: "Voor wie zijn deze trainingen bedoeld?", content: "Voor zittende en nieuwe OR-leden in profit, non-profit en publieke sector. Geen voorkennis vereist voor basistrainingen; voor verdieping is OR-ervaring aan te raden." },
    { title: "Hoe lang duren de trainingen?", content: "Meeste trainingen duren 1 tot 2 dagen. We bieden ook maatwerktrajecten van 3-5 dagdelen verspreid over meerdere weken." },
    { title: "Kunnen trainingen op locatie?", content: "Ja, we verzorgen trainingen op jullie locatie of op een door ons geregelde externe locatie. Ook online/hybride is mogelijk." }
  ];

  return (
    <>
      <SEO 
        title="Trainingen voor de OR"
        description="OR-trainingen van basis tot gevorderd: OR-start, onderhandelen, sociaal plan, reorganisatie en meer. Praktisch en juridisch scherp."
        canonical="/diensten/trainingen-voor-de-or"
      />

      <Hero 
        title="Trainingen voor de OR"
        subtitle="Van OR-start tot onderhandelen over een sociaal plan"
      >
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Voor wie</h3>
          <p className="text-slate-300">
            Nieuwe en zittende OR-leden die hun kennis en vaardigheden willen versterken. Van basiscursus tot verdieping.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-3">Wat het oplevert</h3>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Praktisch en juridisch scherp (WOR-context)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Direct toepasbaar in jullie organisatie</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Rust en regie in complexe situaties</span>
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
        <CardGrid items={visibleTrainingen} />
      </PageSection>

      <PageSection background="gray">
        <Accordion items={meerModules} title="Meer trainingen" />
      </PageSection>

      <PageSection>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Werkwijze</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">1</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Intakegesprek</h3>
                <p className="text-slate-600">We bespreken jullie situatie, leervragen en doelen. Wat speelt er en wat heeft de OR nodig?</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">2</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Training op maat</h3>
                <p className="text-slate-600">Standaard programma of volledig maatwerk. Interactief, met praktijkcases en juridische verdieping waar nodig.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">3</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Nazorg & verdieping</h3>
                <p className="text-slate-600">Na de training blijven we beschikbaar voor vragen. Optioneel: verdiepingssessie of coaching on the job.</p>
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

      <CTABlock />
    </>
  );
}