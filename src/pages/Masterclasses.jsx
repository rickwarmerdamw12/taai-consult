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
    { title: "Strategisch OR-werk", description: "Van operationeel naar strategisch denken. Langetermijnvisie, lobby en invloed op organisatiestrategie.", duration: "2 dagen" },
    { title: "Complexe juridische vraagstukken", description: "Verdieping in ingewikkelde WOR-materie: concern-OR, buitenlandse moeder, internationale werknemers.", duration: "2 dagen" },
    { title: "Bestuurlijke vaardigheden", description: "Voor OR-voorzitters en bestuursleden. Leiderschap, regie en professionele gespreksvoering met top.", duration: "2 dagen" },
    { title: "OR en governance", description: "Verdieping in corporate governance: RvC, aandeelhouders, toezicht en checks & balances.", duration: "1 dag" },
    { title: "Change management voor OR", description: "OR als change agent. Hoe begeleid je grote verandering en neem je je achterban mee?", duration: "2 dagen" },
    { title: "Internationale medezeggenschap", description: "European Works Councils, SE Works Councils en grensoverschrijdende issues. Europese wetgeving en praktijk.", duration: "2 dagen" }
  ];

  const meerModules = [
    { title: "OR en financieel beleid", content: "Diepgaande verdieping in financiële sturing, risk management en investeringsbesluiten. Voor gevorderde OR'en." },
    { title: "Crisismanagement", content: "OR-rol bij acute crises: faillissement dreigt, grote incidenten, reputatieschade. Wat doe je als OR?" }
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
        title="Masterclasses"
        subtitle="Verdieping voor ervaren OR-leden"
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

      <CTABlock />
    </>
  );
}