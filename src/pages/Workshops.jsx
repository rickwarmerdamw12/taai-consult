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
    "Samenwerken in de OR",
    "Onderhandelen met de bestuurder",
    "Communicatie met de achterban",
    "Vergader- en besluitvorming",
    "Rollen en mandaten",
    "Mediation/gesprek in gespannen situaties"
  ];

  const faqs = [
    { title: "Verschil met trainingen?", content: "Workshops zijn korter (halve dag tot 1 dag) en meer gericht op een specifiek actueel thema of vraagstuk." },
    { title: "Kunnen we zelf een thema voorstellen?", content: "Absoluut. We maken vaak maatwerk workshops op basis van jullie concrete vraagstuk of organisatieverandering." },
    { title: "Ook online mogelijk?", content: "Ja, workshops kunnen zowel fysiek als online worden gegeven. Hybride is ook mogelijk." }
  ];

  return (
    <>
      <SEO 
        title="Workshops"
        description="Op maat gemaakte workshops voor OR en commissies. Van hybride werken tot reorganisatie-aanpak. Interactief en direct toepasbaar."
        canonical="/workshops"
      />

      <Hero 
        title="Workshops voor actuele thema's — interactief en toepasbaar"
        subtitle="Korte, energieke sessies waarin jullie concrete stappen zetten. Handig als je snel vooruit wilt op een specifiek onderwerp."
      >
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Voor wie</h3>
          <p className="text-slate-300">
            OR'en en commissies die snel en gericht willen verdiepen op een actueel thema of vraagstuk in hun organisatie.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-3">Wat het oplevert</h3>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Direct toepasbaar in jullie situatie</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Interactief en praktijkgericht</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Concrete handvatten en tools</span>
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
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Voorbeeldthema's</h2>
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
                <p className="text-slate-600">We bespreken jullie vraagstuk, context en wat jullie willen bereiken met de workshop.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">2</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Interactieve workshop</h3>
                <p className="text-slate-600">Korte inhoudelijke input, gevolgd door oefeningen, discussie en concrete uitwerking voor jullie situatie.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">3</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Concrete output</h3>
                <p className="text-slate-600">Jullie gaan weg met concrete handvatten, tools of een plan van aanpak dat direct toepasbaar is.</p>
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