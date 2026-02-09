import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import PageSection from '../components/PageSection';
import CTABlock from '../components/CTABlock';
import Accordion from '../components/Accordion';
import { Briefcase, Users, Target, BookOpen } from 'lucide-react';

export default function ORondersteuning() {
  const faqs = [
    { title: "Wanneer heeft een OR externe ondersteuning nodig?", content: "Een OR heeft externe ondersteuning nodig bij complexe dossiers (fusie, reorganisatie), conflict met bestuur, of als de OR tijdelijk versterking nodig heeft. Ook bij tijdgebrek of gebrek aan specifieke kennis kan externe expertise uitkomst bieden." },
    { title: "Wat doet een externe OR-adviseur concreet?", content: "Een externe OR-adviseur analyseert de situatie, biedt juridisch en strategisch advies, ondersteunt bij onderhandelingen, en coacht de OR in haar rol. Dit kan variëren van een eenmalig advies tot langdurige begeleiding of interim ondersteuning." },
    { title: "Hoe blijft ondersteuning onafhankelijk?", content: "Taai-Consult werkt volledig onafhankelijk van zowel werkgever als werknemersorganisaties. Onze loyaliteit ligt bij een effectieve en evenwichtige medezeggenschap. Heldere afspraken over rol en scope waarborgen de onafhankelijkheid." },
    { title: "Wat is het verschil tussen training en begeleiding?", content: "Training richt zich op het aanleren van kennis en vaardigheden in een gestructureerde setting. Begeleiding is een breder concept waarbij wij de OR ondersteunen in lopende processen, bij specifieke dossiers of in de dynamiek met de bestuurder. Het kan trainingselementen bevatten, maar is meer gericht op directe toepassing in de praktijk." },
    { title: "Wat kan een OR doen onder tijdsdruk?", content: "Onder tijdsdruk is het cruciaal om snel inzicht te krijgen in de essentie van het vraagstuk, de juiste vragen te stellen en efficiënt te werken. Een externe adviseur kan hierbij helpen door snel te schakelen, de belangrijkste punten te identificeren en de OR te ondersteunen bij het formuleren van een snel en effectief standpunt." }
  ];

  return (
    <>
      <SEO 
        title="OR-ondersteuning bij reorganisatie en complexe besluitvorming | Taai-Consult"
        description="Onafhankelijke begeleiding voor ondernemingsraden bij reorganisaties, adviesaanvragen en bestuurlijke druk. Discreet, zorgvuldig en ervaren."
        canonical="/ORondersteuning"
      />

      <Hero 
        title="OR-ondersteuning bij dossiers met hoge druk en grote belangen"
        subtitle="Als het spannend wordt brengen wij rust, regie en overzicht — en we worden ook vroeg aangehaakt om escalatie te voorkomen."
      >
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Voor wie</h3>
          <p className="text-slate-300">
            OR'en die extra ondersteuning nodig hebben bij complexe dossiers, conflict met bestuur, of tijdelijke versterking zoeken.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-3">Wat het oplevert</h3>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Rust en regie in complexe situaties</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Juridische en strategische verdieping</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Versterking van de OR (tijdelijk of permanent)</span>
            </li>
          </ul>
        </div>

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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">Wanneer het spannend wordt</h2>
          
          <div className="prose prose-lg text-slate-600 space-y-6 mb-12">
            <p className="leading-relaxed text-lg">
              Medezeggenschap is nooit vrijblijvend. Maar er zijn momenten waarop de druk aanzienlijk toeneemt en het werk van de OR extra zorgvuldig moet worden uitgevoerd. Complexiteit, tijdsdruk en gevoelige belangen kunnen de ruimte voor rust en reflectie beperken, terwijl juist dan scherpe oordeelsvorming nodig is.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-6">Herkenbare situaties</h3>
          
          <div className="space-y-8 mb-12">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-8">
              <h4 className="text-xl font-bold text-slate-900 mb-3">Reorganisatie en herstructurering</h4>
              <p className="text-slate-600 leading-relaxed">
                Een bekend voorbeeld is de situatie van reorganisatie of herstructurering. Besluiten volgen elkaar snel op, de impact op medewerkers is groot en de verwachtingen richting de OR nemen toe. In deze fases moet de OR in korte tijd overzicht creëren, voorstellen doorgronden en zijn positie bepalen, zonder de regie te verliezen.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-8">
              <h4 className="text-xl font-bold text-slate-900 mb-3">Adviesaanvragen onder tijdsdruk</h4>
              <p className="text-slate-600 leading-relaxed">
                Ook adviesaanvragen onder hoge tijdsdruk vragen om een doordachte aanpak. De druk om snel te reageren mag niet ten koste gaan van inhoudelijke kwaliteit. Het vraagt om structuur, prioritering en het vermogen om de juiste vragen op het juiste moment te stellen.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-8">
              <h4 className="text-xl font-bold text-slate-900 mb-3">Complexe governance en holdingstructuren</h4>
              <p className="text-slate-600 leading-relaxed">
                De complexiteit wordt groter in organisaties met uitgebreide governance- en holdingstructuren. Bevoegdheden zijn verdeeld over meerdere lagen en besluitvorming vindt niet altijd plaats waar de formele medezeggenschap is georganiseerd. In COR- en EOR-contexten komen daar vaak nog internationale verhoudingen, culturele verschillen en uiteenlopende belangen bij.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-8">
              <h4 className="text-xl font-bold text-slate-900 mb-3">Spanning en escalatierisico</h4>
              <p className="text-slate-600 leading-relaxed">
                Wanneer daarnaast de samenwerking tussen OR en bestuurder onder spanning komt te staan, ontstaat het risico op escalatie. Het gesprek verschuift van inhoud naar positie, vertrouwen neemt af en besluitvorming komt onder druk te staan. Dat is vaak niet het gevolg van onwil, maar van onduidelijkheid over rollen, verwachtingen en verantwoordelijkheden.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-lg mb-12">
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              In al deze situaties ondersteunen wij OR'en bij het behouden van overzicht en regie. Wij helpen bij het analyseren van complexe vraagstukken, het bepalen van een strategische koers en het zorgvuldig voeren van het gesprek met bestuurders.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Altijd met respect voor de verhoudingen, oog voor de juridische kaders en focus op werkbare oplossingen. Onze ondersteuning is erop gericht de OR sterker te maken in zijn rol – juist wanneer het spannend wordt.
            </p>
          </div>

          <div className="text-center">
            <Link 
              to="/ORondersteuningLongread"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-300 rounded-lg hover:border-blue-600 transition-colors font-medium text-slate-900"
            >
              <BookOpen className="w-5 h-5" />
              Lees het uitgebreide artikel
            </Link>
          </div>
        </div>
      </PageSection>

      <PageSection background="gray">
        <div className="space-y-12">
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
              <Briefcase className="w-8 h-8 text-blue-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Advies</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Juridisch advies bij complexe dossiers: sociaal plan, fusie, reorganisatie, concern-OR vraagstukken. We helpen je het juridisch kader te begrijpen en een strategie te bepalen.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mt-4">
                <h3 className="font-semibold text-slate-900 mb-2">Voorbeelden</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Beoordeling van adviesaanvraag en conceptsociaal plan</li>
                  <li>• Juridische analyse van reorganisatieplannen</li>
                  <li>• Advies over concern-OR structuur en mandaten</li>
                  <li>• Second opinion bij complexe juridische vragen</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Interim OR-ondersteuning</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Tijdelijke versterking van de OR bij ziekte, gebrek aan kennis of te veel werk. We nemen taken over of ondersteunen de OR in hun dagelijkse werk.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mt-4">
                <h3 className="font-semibold text-slate-900 mb-2">Voorbeelden</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Invallen als interim OR-lid of OR-secretaris</li>
                  <li>• Procesondersteuning bij grote reorganisatie</li>
                  <li>• Tijdelijke versterking bij fusie of overname</li>
                  <li>• Opzetten van OR-structuur in nieuwe organisatie</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Coaching</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Individuele of team-coaching voor OR-voorzitters, OR-leden of hele OR'en. Gericht op persoonlijke ontwikkeling, samenwerking of omgaan met lastige situaties.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mt-4">
                <h3 className="font-semibold text-slate-900 mb-2">Voorbeelden</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Coaching van OR-voorzitter bij lastig dossier</li>
                  <li>• Team-coaching bij conflict binnen OR</li>
                  <li>• Coaching on the job bij onderhandelingen</li>
                  <li>• Individuele coaching voor persoonlijke ontwikkeling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Werkwijze</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">1</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Intakegesprek</h3>
                <p className="text-slate-600">We luisteren naar jullie vraag en situatie. Wat speelt er, wat is de urgentie en wat heeft de OR nodig?</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">2</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Voorstel op maat</h3>
                <p className="text-slate-600">We stellen een aanpak voor: advies, interim of coaching. Met heldere afspraken over inzet, duur en kosten.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">3</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Ondersteuning & nazorg</h3>
                <p className="text-slate-600">We starten met de ondersteuning en evalueren regelmatig. Na afloop optioneel nazorg of verdieping.</p>
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