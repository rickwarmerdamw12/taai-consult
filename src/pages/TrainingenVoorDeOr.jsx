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
  { title: "Basismodule", description: "Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk." },
  { title: "Het fundament van de OR", description: "Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk." },
  { title: "De OR als strategisch adviseur", description: "Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk." },
  { title: "De OR en Werken met Commissies", description: "Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk." },
  { title: "Effectief samenwerken binnen de OR", description: "Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk." },
  { title: "OR als Serieuze Gesprekspartner", description: "Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk." }];


  const meerTrainingen = [
  { title: "Professionalisering van de OR", description: "Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk." },
  { title: "Teambuilding", description: "Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk." },
  { title: "Teambuilding met Roos van Leary", description: "Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk." }];


  const faqs = [
  { title: "Voor wie zijn deze trainingen?", content: "Voor nieuwe en zittende OR-leden in profit, non-profit en publieke sector." },
  { title: "Hoe lang duren de trainingen?", content: "Meeste trainingen duren 1 tot 2 dagen, ook maatwerktrajecten mogelijk." },
  { title: "Kunnen trainingen op locatie?", content: "Ja, op jullie locatie, externe locatie of online/hybride." }];


  return (
    <>
      <SEO
        title="Trainingen voor de OR"
        description="OR-trainingen van basis tot gevorderd: OR-start, onderhandelen, sociaal plan, reorganisatie en meer."
        canonical="/trainingen-voor-de-or" />


      <Hero
        title="Trainingen voor de OR die werken in de praktijk"
        subtitle="Van OR-start tot strategisch overleg: heldere training met veel oefening, zodat jullie met meer vertrouwen en invloed aan tafel zitten.">

        <p className="text-slate-300 mb-8">

        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/contact#plan"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
            data-cta="plan_kennismaking">

            Plan kennismaking
          </Link>
          <Link
            to="/contact#brochure"
            className="px-8 py-3 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors font-medium text-center"
            data-cta="vraag_brochure">

            Vraag brochure
          </Link>
        </div>
      </Hero>

      <PageSection background="gray">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold text-slate-700 mb-4">Trainingen afgestemd op het OR-werk</h3>
          
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Het werk van een ondernemingsraad vraagt om kennis, inzicht en goede samenwerking. Of je nu net start of al langer meedraait: trainingen helpen om rollen te verduidelijken, vaardigheden te versterken en met meer vertrouwen aan tafel te zitten.
            </p>
            
            <p>
              Onze trainingen sluiten aan op de dagelijkse OR-praktijk. We werken met herkenbare situaties, veel interactie en ruimte om te oefenen, zodat wat je leert direct toepasbaar is in jullie overleg en samenwerking.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Ons aanbod</h2>
        <CardGrid items={visibleTrainingen} />
        
        <div className="mt-12">
          <Accordion items={meerTrainingen} title="Meer trainingen" />
        </div>

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
        subtitle="Plan een kennismaking of vraag onze brochure aan." />

    </>);

}