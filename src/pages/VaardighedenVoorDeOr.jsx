import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import PageSection from '../components/PageSection';
import CardGrid from '../components/CardGrid';
import Accordion from '../components/Accordion';
import CTABlock from '../components/CTABlock';

export default function VaardighedenVoorDeOr() {
  const visibleVaardigheden = [
  { title: "Argumenteren", description: "Leren hoe je standpunten helder onderbouwt en overtuigend verwoordt, zodat bijdragen beter landen in overleg en besluitvorming." },
  { title: "Conflicthantering", description: "Inzicht in spanningen en conflicten binnen en rondom de OR, met handvatten om constructief om te gaan met verschillen en lastige gesprekken." },
  { title: "Maatwerk gesprekstechniek", description: "Gericht oefenen met gesprekken die voor jullie OR relevant zijn, zoals overleg met de bestuurder of interne afstemming binnen de OR." },
  { title: "Onderhandelen", description: "Praktische training in onderhandelen binnen de OR-context, met aandacht voor voorbereiding, belangen en het voeren van het gesprek." },
  { title: "Vergadertechniek", description: "Effectiever vergaderen door betere voorbereiding, structuur en rolverdeling, zodat overleg doelgerichter en prettiger verloopt." }];


  const faqs = [
  { title: "Kan ik meerdere vaardigheden combineren?", content: "Ja, we stellen vaak maatwerktrajecten samen van 3-5 dagdelen." },
  { title: "Zijn deze trainingen ook voor commissies?", content: "Absoluut. VGW(M)-commissies en andere commissies hebben vaak dezelfde vaardigheden nodig." },
  { title: "Krijg ik een certificaat?", content: "Ja, na afloop ontvang je een certificaat van deelname." }];


  return (
    <>
      <SEO
        title="Vaardigheden voor de OR"
        description="Vaardighedentrainingen voor OR-leden: vergadertechnieken, presenteren, lobbyen en meer."
        canonical="/vaardigheden-voor-de-or" />


      <Hero
        title="Vaardigheden die het verschil maken aan tafel"
        subtitle="Vergaderen, onderhandelen en communiceren zijn kernvaardigheden binnen het OR-werk. In deze trainingen ontwikkelen OR-leden praktische skills om effectiever en prettiger samen te werken en hun rol met meer vertrouwen te vervullen.">

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

      <PageSection>
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Ons aanbod</h2>
        <CardGrid items={visibleVaardigheden} />
        
        <p className="text-slate-600 mt-8 text-center">
          Staat jullie onderwerp er niet tussen? We verzorgen ook maatwerk, afgestemd op jullie OR en praktijk.
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