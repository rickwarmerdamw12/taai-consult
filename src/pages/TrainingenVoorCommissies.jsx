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
  { title: "Arbo-commissie", description: "Training gericht op arbeidsomstandigheden, risico's en preventie. Met aandacht voor rolverdeling, overleg met de bestuurder en samenwerking met andere partijen." },
  { title: "CCA – Commissie Communicatie Achterban", description: "Gericht op het organiseren van communicatie met de achterban, het ophalen van signalen en het helder terugkoppelen van standpunten en besluiten." },
  { title: "CDB", description: "Ondersteuning bij dossiers die vragen om analyse, structuur en zorgvuldige afweging, passend bij de rol en verantwoordelijkheid van de commissie." },
  { title: "CF – Commissie Financiën", description: "Training gericht op het lezen en bespreken van financiële informatie, en het vertalen daarvan naar begrijpelijke en onderbouwde adviezen." },
  { title: "CHR", description: "Focus op HR-thema's zoals beleid, procedures en personele ontwikkelingen, met aandacht voor samenwerking en advisering binnen de organisatie." },
  { title: "COB", description: "Gericht op het voorbereiden, volgen en bespreken van organisatiebrede ontwikkelingen, met oog voor samenhang en impact." },
  { title: "VC – Verkiezingscommissie", description: "Training rondom het organiseren van OR-verkiezingen, rollen en verantwoordelijkheden, en het zorgvuldig uitvoeren van het proces." }];


  const faqs = [
  { title: "Wat is het verschil met een OR-training?", content: "Commissies hebben specifieke taken en bevoegdheden. Deze trainingen zijn daarop toegespitst." },
  { title: "Zijn deze trainingen ook geschikt voor gecombineerde commissies?", content: "Ja, veel OR'en hebben een VGW(M)-taak. We stemmen de training af op jullie situatie." },
  { title: "Wat als we weinig tijd hebben?", content: "We bieden ook compacte varianten van 1 dag of modulaire trajecten." }];


  return (
    <>
      <SEO
        title="Trainingen voor Commissies"
        description="Gerichte trainingen voor VGW(M)-commissies, personeelsvertegenwoordigingen en klachtencommissies."
        canonical="/trainingen-voor-commissies" />


      <Hero
        title="Trainingen voor commissies: scherp op taak én praktijk"
        subtitle="Voor VGW(M)-, PV- en andere commissies. Trainingen die zorgen voor duidelijkheid over rol en taak, en die helpen om sterker te adviseren en effectief samen te werken binnen de organisatie.">

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
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-lg font-semibold text-slate-700 mb-4">Trainingen afgestemd op de rol van commissies</h3>
              
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Commissies vervullen binnen de medezeggenschap een specifieke taak. Dat vraagt om duidelijke afbakening van rollen, goede afstemming met de OR en effectieve samenwerking met de bestuurder en andere betrokkenen.
                </p>
                
                <p>
                  Onze trainingen sluiten aan op die praktijk. We helpen commissieleden om hun rol scherp te krijgen, inhoudelijk sterker te worden en met meer vertrouwen te adviseren.
                </p>
                
                <p>
                  De focus ligt altijd op toepasbaarheid: wat betekent dit voor jullie commissie, binnen jullie organisatie en in het dagelijks werk?
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69846ad3327fab0348385a7d/8d9c9ae4a_DSCF0592.jpg" 
                alt="Commissie training in de praktijk" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600 rounded-lg opacity-10"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-slate-900 rounded-lg opacity-10"></div>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Ons aanbod</h2>
        <CardGrid items={visibleTrainingen} />
        
        <p className="text-slate-600 mt-8 text-center">
          Staat jullie onderwerp er niet tussen? We verzorgen ook maatwerk, afgestemd op de commissie en organisatie.
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