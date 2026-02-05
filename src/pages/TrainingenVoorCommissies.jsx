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
    { title: "VGW(M)-basistraining", description: "Taken, bevoegdheden en verantwoordelijkheden van de VGW(M)-commissie. Wetgeving, RI&E en praktijkcases.", duration: "2 dagen" },
    { title: "RI&E lezen en beoordelen", description: "Hoe beoordeel je een RI&E kritisch? Wat zijn de verplichte onderdelen en waar moet je op letten?", duration: "1 dag" },
    { title: "Arbocatalogus gebruiken", description: "Werken met de arbocatalogus: wat staat erin, hoe pas je het toe en hoe bewaak je naleving?", duration: "1 dag" },
    { title: "PSA en verzuim aanpakken", description: "Psychosociale arbeidsbelasting herkennen en aanpakken. Rol van de commissie en samenwerking met preventiemedewerker.", duration: "1 dag" },
    { title: "PV-commissie training", description: "Specifieke training voor personeelsvertegenwoordigingen in de publieke sector. Taken, bevoegdheden en praktijk.", duration: "2 dagen" },
    { title: "Klachtencommissie", description: "Rol en werkwijze van de klachtencommissie. Procedures, juridische kaders en gespreksvaardigheden.", duration: "1 dag" }
  ];

  const meerModules = [
    { title: "Werkoverleg voeren als commissie", content: "Effectief overleggen met werkgever en preventiemedewerker. Agenda, notulen en dossieropbouw." },
    { title: "Incident onderzoek", content: "Hoe onderzoek je een arbeidsongeval of incident? Methodiek, getuigenverhoor en rapportage." }
  ];

  const faqs = [
    { title: "Verschil met OR-training?", content: "Commissies hebben specifieke taken en bevoegdheden (bijv. VGW(M) richt zich op veiligheid en gezondheid). Deze trainingen zijn daarop toegespitst." },
    { title: "Ook voor gecombineerde commissies?", content: "Ja, veel OR'en hebben een VGW(M)-taak. We stemmen de training af op jullie specifieke situatie." },
    { title: "Wat als we weinig tijd hebben?", content: "We bieden ook compacte varianten van 1 dag of modulair opgebouwde trajecten van 3-4 dagdelen." }
  ];

  return (
    <>
      <SEO 
        title="Trainingen voor Commissies"
        description="Gerichte trainingen voor VGW(M)-commissies, personeelsvertegenwoordigingen en klachtencommissies. Praktisch en direct toepasbaar."
        canonical="/diensten/trainingen-voor-commissies"
      />

      <Hero 
        title="Trainingen voor Commissies"
        subtitle="VGW(M), PV en andere commissies"
      >
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Voor wie</h3>
          <p className="text-slate-300">
            Leden van VGW(M)-commissies, personeelsvertegenwoordigingen en andere commissies die hun kennis willen versterken.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-3">Wat het oplevert</h3>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Praktisch en juridisch scherp (Arbowet, WOR)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Direct toepasbaar in jullie organisatie</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Meer grip op veiligheid en gezondheid</span>
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
                <p className="text-slate-600">We bespreken jullie situatie, taken van de commissie en wat jullie willen leren.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">2</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Training op maat</h3>
                <p className="text-slate-600">Standaard programma of volledig maatwerk. Juridische verdieping, praktijkcases en interactieve oefeningen.</p>
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