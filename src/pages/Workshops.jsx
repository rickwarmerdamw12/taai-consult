import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import PageSection from '../components/PageSection';
import CardGrid from '../components/CardGrid';
import Accordion from '../components/Accordion';
import CTABlock from '../components/CTABlock';

export default function Workshops() {
  const voorbeeldThemas = [
    "Samenwerken binnen de OR",
    "Onderhandelen met de bestuurder",
    "Communicatie met de achterban",
    "Vergader- en besluitvorming",
    "Rollen en mandaten",
    "Gesprek voeren in spanningsvolle situaties"
  ];

  const faqs = [
    { title: "Verschil met trainingen?", content: "Een workshop is korter en gericht op één actueel thema. Trainingen zijn breder en bedoeld voor structurele ontwikkeling van kennis en vaardigheden." },
    { title: "Kunnen we zelf een thema voorstellen?", content: "Ja. Workshops worden altijd afgestemd op jullie vraagstuk en organisatie." },
    { title: "Ook online mogelijk?", content: "Ja, workshops kunnen zowel op locatie als online worden verzorgd." }
  ];

  return (
    <>
      <SEO 
        title="Workshops"
        description="Op maat gemaakte workshops voor OR en commissies. Van hybride werken tot reorganisatie-aanpak. Interactief en direct toepasbaar."
        canonical="/workshops"
      />

      <Hero 
        title="Workshops voor actuele OR-vraagstukken"
        subtitle="Korte, interactieve sessies waarin jullie gericht werken aan een thema dat speelt — praktisch, concreet en direct toepasbaar."
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/contact#plan" 
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
            data-cta="plan_kennismaking"
          >
            Plan kennismaking
          </Link>

        </div>
      </Hero>

      <PageSection background="gray">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold text-slate-700 mb-4">Wanneer kies je voor een workshop?</h3>
          
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Een workshop is geen volledige training, maar een gerichte sessie rond één thema. Ideaal wanneer er iets speelt dat om aandacht vraagt, of wanneer jullie als OR of commissie snel tot gezamenlijke inzichten of afspraken willen komen.
            </p>
            
            <p>
              We stemmen de workshop vooraf af op jullie vraagstuk, zodat de inhoud aansluit bij wat er nodig is in de praktijk.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Voorbeeldthema's</h2>
        <p className="text-slate-600 mb-6 max-w-3xl">
          Onderstaande thema's geven een beeld van wat mogelijk is. De inhoud stemmen we altijd af op jullie situatie.
        </p>
        <ul className="space-y-3 max-w-3xl">
          {voorbeeldThemas.map((thema, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span className="text-lg text-slate-700">{thema}</span>
            </li>
          ))}
        </ul>
        
        <p className="text-slate-600 mt-8">
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
                <p className="text-slate-600">We bespreken het vraagstuk, de context en wat jullie met de workshop willen bereiken.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">2</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Interactieve workshop</h3>
                <p className="text-slate-600">Gerichte inhoudelijke input, gecombineerd met oefeningen, discussie en toepassing op jullie eigen situatie.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">3</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Concrete opbrengst</h3>
                <p className="text-slate-600">Jullie gaan naar huis met duidelijke inzichten, afspraken of handvatten die direct toepasbaar zijn.</p>
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
        title="Willen jullie gericht aan de slag met een actueel thema?"
        subtitle="Plan een kennismaking of vraag onze brochure aan."
      />
    </>
  );
}