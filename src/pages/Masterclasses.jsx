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
    { title: "Voor wie zijn masterclasses bedoeld?", content: "Masterclasses zijn bedoeld voor ervaren OR-leden, voorzitters en commissievoorzitters die hun rol goed kennen en behoefte hebben aan verdieping in complexe juridische of strategische vraagstukken." },
    { title: "Wat is het verschil met een training?", content: "Trainingen richten zich op het aanleren van basiskennis en vaardigheden. Masterclasses veronderstellen ervaring en gaan dieper in op complexe materie, met meer ruimte voor uitwisseling en reflectie." },
    { title: "Kan ik als individueel OR-lid deelnemen?", content: "Ja. Sommige masterclasses bieden we open aan, zodat deelnemers met OR-leden van andere organisaties kunnen sparren. Voor incompany-masterclasses geldt dat we de sessie afstemmen op de specifieke context van de OR." }
  ];

  return (
    <>
      <SEO 
        title="Masterclasses"
        description="Verdiepende masterclasses voor ervaren OR-leden. Strategisch OR-werk, complexe juridische vraagstukken en bestuurlijke vaardigheden."
        canonical="/diensten/masterclasses"
      />

      <Hero 
        title="Masterclasses voor verdieping en scherpte"
        subtitle="Verdiepende sessies voor ervaren OR-leden en commissies die verder willen kijken dan de basis."
      >
        <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-3xl">
          Masterclasses zijn bedoeld voor situaties waarin kennis en ervaring al aanwezig zijn, maar verdieping nodig is. In kleine groepen werken we aan complexe juridische en strategische vraagstukken die spelen in de praktijk.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/Contact" 
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
            data-cta="plan_kennismaking"
          >
            Plan kennismaking
          </Link>
          <Link 
            to="/Contact" 
            className="px-8 py-3 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors font-medium text-center"
            data-cta="vraag_brochure"
          >
            Vraag brochure
          </Link>
        </div>
      </Hero>

      <PageSection>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Wanneer is een masterclass passend?</h2>
              <div className="prose prose-lg text-slate-600 space-y-4 leading-relaxed">
                <p>
                  Een masterclass is geen basistraining. Het is een verdiepende sessie voor OR-leden en commissies die hun rol al goed kennen en behoefte hebben aan meer context, scherpe afwegingen en inhoudelijke verdieping.
                </p>
                <p>
                  Masterclasses zijn geschikt wanneer onderwerpen juridisch of strategisch complexer worden, of wanneer de OR zich wil voorbereiden op gesprekken waarin meer van hem wordt verwacht.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69846ad3327fab0348385a7d/2d9b0ad42_DSCF0023.jpg" 
                alt="Masterclass in de praktijk" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600 rounded-lg opacity-10"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-slate-900 rounded-lg opacity-10"></div>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Wat een masterclass oplevert</h2>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span>Verdieping in juridische en strategische thema's</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span>Meer inzicht in afwegingen en handelingsruimte van de OR</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span>Sparren met andere ervaren OR-leden</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span>Van operationeel handelen naar strategisch denken</span>
            </li>
          </ul>
        </div>
      </PageSection>

      <PageSection>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Ons aanbod</h2>
        <p className="text-slate-600 mb-8 leading-relaxed max-w-3xl">
          Onderstaande masterclasses geven richting aan de onderwerpen waarin verdieping mogelijk is. De inhoud stemmen we altijd af op de ervaring en vragen van de deelnemers.
        </p>
        <CardGrid items={visibleMasterclasses} />
      </PageSection>

      <PageSection background="gray">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Meer masterclasses</h2>
        <Accordion items={meerModules} />
        
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
                <p className="text-slate-600">We bespreken de ervaring van de deelnemers, de leerdoelen en de specifieke vraagstukken die verdieping vragen.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">2</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Kleinschalige sessies</h3>
                <p className="text-slate-600">Masterclasses zijn bewust klein (maximaal 12 deelnemers) om verdieping, interactie en uitwisseling mogelijk te maken.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">3</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Sparren en reflectie</h3>
                <p className="text-slate-600">Ruimte om ervaringen te delen, perspectieven te vergelijken en samen scherper te worden in de rol van de OR.</p>
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
        title="Willen jullie verdiepen waar het complexer wordt?"
        subtitle="Een kennismaking is vrijblijvend en bedoeld om te verkennen of een masterclass past bij jullie ervaring en vraagstuk."
      />
    </>
  );
}