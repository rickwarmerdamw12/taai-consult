import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import PageSection from '../components/PageSection';
import CardGrid from '../components/CardGrid';
import Accordion from '../components/Accordion';
import CTABlock from '../components/CTABlock';

export default function Workshops() {
  const visibleWorkshops = [
    { title: "Hybride werken en medezeggenschap", description: "Nieuwe werkvormen vragen om nieuwe OR-afspraken. Wat zijn de thema's en hoe beïnvloed je het beleid?", duration: "Halve dag" },
    { title: "OR-strategie bepalen", description: "Interactieve sessie om jullie OR-strategie scherp te krijgen. Missie, doelen, prioriteiten en jaarplan.", duration: "1 dag" },
    { title: "Reorganisatie-aanpak", description: "Praktische workshop bij aankondiging van reorganisatie. Wat komt er op je af en hoe pak je het aan?", duration: "Halve dag" },
    { title: "Gesprek met achterban", description: "Hoe organiseer je effectief contact met je achterban? Van peilingen tot werkplekconsultatie.", duration: "Halve dag" },
    { title: "OR en duurzaamheid", description: "Rol van de OR bij duurzaam ondernemen. Van MVO-beleid tot medewerkersparticipatie.", duration: "Halve dag" },
    { title: "Diversiteit en inclusie", description: "OR-rol bij D&I-beleid. Hoe bewaak je een inclusieve cultuur en wat zijn de juridische kaders?", duration: "Halve dag" }
  ];

  const meerModules = [
    { title: "AI en automatisering", content: "Impact van AI op werk en werknemers. OR-rol bij invoering van nieuwe technologie en algoritmes." },
    { title: "Teambuilding OR", content: "Interactieve sessie om als OR-team beter samen te werken. Rollen, communicatie en onderlinge verhoudingen." }
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
        title="Workshops"
        subtitle="Interactieve sessies over actuele thema's"
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
        <CardGrid items={visibleWorkshops} />
      </PageSection>

      <PageSection background="gray">
        <Accordion items={meerModules} title="Meer workshops" />
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

      <CTABlock />
    </>
  );
}