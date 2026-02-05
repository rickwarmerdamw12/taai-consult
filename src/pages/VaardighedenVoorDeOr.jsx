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
    { title: "Vergadertechnieken", description: "Effectief vergaderen: agenda opstellen, discussie leiden, besluiten nemen en notulen die ertoe doen.", duration: "1 dag" },
    { title: "Presenteren & overtuigen", description: "Je standpunt helder overbrengen aan bestuur, achterban en externe stakeholders. Van structuur tot impact.", duration: "1 dag" },
    { title: "Lobbyen & beïnvloeden", description: "Strategisch beïnvloeden binnen en buiten de organisatie. Wie heeft welke belangen en hoe beweeg je ze?", duration: "1 dag" },
    { title: "Netwerken voor OR", description: "Interne en externe netwerken opbouwen en onderhouden. Van collega-OR'en tot brancheverenigingen en vakbonden.", duration: "1 dag" },
    { title: "Gespreksvaardigheden", description: "Lastige gesprekken voeren met bestuur, management en achterban. Assertief en constructief communiceren.", duration: "1 dag" },
    { title: "Conflicthantering", description: "Omgaan met tegenstellingen en spanningen in OR en tussen OR en bestuur. Van-naar-met aanpak.", duration: "1 dag" }
  ];

  const meerModules = [
    { title: "Stakeholder management", content: "Wie zijn de spelers, wat zijn hun belangen en hoe breng je ze in beweging? Analyse en strategie." },
    { title: "Timemanagement voor OR", content: "OR-werk en reguliere baan combineren. Prioriteiten stellen, planning en grip houden op je agenda." }
  ];

  const faqs = [
    { title: "Kan ik meerdere vaardigheden combineren?", content: "Ja, we stellen vaak maatwerktrajecten samen van 3-5 dagdelen waarin verschillende vaardigheden aan bod komen." },
    { title: "Zijn deze trainingen ook voor commissies?", content: "Absoluut. VGW(M)-commissies en andere commissies hebben vaak dezelfde vaardigheden nodig als OR'en." },
    { title: "Krijg ik een certificaat?", content: "Ja, na afloop ontvang je een certificaat van deelname. Voor sommige trainingen geldt PE-punten voor leden van beroepsverenigingen." }
  ];

  return (
    <>
      <SEO 
        title="Vaardigheden voor de OR"
        description="Vaardighedentrainingen voor OR-leden: vergadertechnieken, presenteren, lobbyen, netwerken en gespreksvaardigheden. Direct toepasbaar."
        canonical="/vaardigheden-voor-de-or"
      />

      <Hero 
        title="Vaardigheden voor de OR"
        subtitle="Vergadertechnieken, lobbyen, presenteren en meer"
      >
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Voor wie</h3>
          <p className="text-slate-300">
            OR-leden die hun persoonlijke effectiviteit willen vergroten. Van vergadertechniek tot strategisch beïnvloeden.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-3">Wat het oplevert</h3>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Trainingen die gesprekken en besluiten beter maken</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Meer invloed en impact als OR-lid</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Vertrouwen in complexe situaties</span>
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
        <CardGrid items={visibleVaardigheden} />
      </PageSection>

      <PageSection background="gray">
        <Accordion items={meerModules} title="Meer vaardigheden" />
      </PageSection>

      <PageSection>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Werkwijze</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">1</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Intakegesprek</h3>
                <p className="text-slate-600">We bespreken welke vaardigheden de OR wil versterken en wat de concrete leervragen zijn.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">2</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Interactieve training</h3>
                <p className="text-slate-600">Theorie, oefeningen en praktijkcases uit jullie eigen organisatie. Veel ruimte voor feedback en reflectie.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">3</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Toepassen in praktijk</h3>
                <p className="text-slate-600">Direct na de training toepassen in jullie OR-werk. Optioneel: terugkomdag voor evaluatie en verdieping.</p>
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