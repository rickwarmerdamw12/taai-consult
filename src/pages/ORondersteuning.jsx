import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import PageSection from '../components/PageSection';
import CTABlock from '../components/CTABlock';
import Accordion from '../components/Accordion';


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
        title="OR-ondersteuning wanneer het spannend wordt"
        subtitle="Onafhankelijke begeleiding voor ondernemingsraden in situaties waarin druk, complexiteit en belangen samenkomen."
      >
        <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-3xl">
          Soms vraagt medezeggenschap om meer dan training of regulier overleg. Wanneer omstandigheden complex worden en de ruimte voor reflectie kleiner, helpt het om tijdelijk extra overzicht en expertise naast de OR te organiseren.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/Contact" 
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
            data-cta="plan_kennismaking"
          >
            Plan een kennismaking
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
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Wat maakt medezeggenschap spannend?</h2>
          <div className="prose prose-lg text-slate-600 space-y-4 leading-relaxed">
            <p>
              Medezeggenschap staat zelden op zichzelf. Besluiten volgen elkaar op, belangen lopen uiteen en de gevolgen voor medewerkers kunnen groot zijn. In zulke situaties neemt de druk op de OR toe, terwijl zorgvuldigheid juist belangrijker wordt.
            </p>
            <p>
              Spanning ontstaat niet omdat de OR tekortschiet, maar omdat omstandigheden complex zijn. Tijd is beperkt, informatie onvolledig en de verwachtingen vanuit de organisatie hoog. Dat vraagt om een aanpak die helpt om overzicht te behouden en keuzes goed te onderbouwen.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Herkenbare situaties waarin extra ondersteuning helpend is</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Reorganisaties en herstructureringen</h3>
              <p className="text-slate-600 leading-relaxed">
                Wanneer besluiten snel volgen en de impact op medewerkers groot is, moet de OR in korte tijd voorstellen doorgronden en zijn positie bepalen.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Adviesaanvragen onder hoge tijdsdruk</h3>
              <p className="text-slate-600 leading-relaxed">
                Deadlines mogen niet ten koste gaan van inhoudelijke kwaliteit. Structuur en prioritering zijn dan essentieel.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Complexe governance- en holdingstructuren</h3>
              <p className="text-slate-600 leading-relaxed">
                Wanneer besluitvorming zich over meerdere lagen verspreidt, wordt het lastiger om invloed effectief te organiseren.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">COR- en EOR-context</h3>
              <p className="text-slate-600 leading-relaxed">
                Internationale verhoudingen en uiteenlopende belangen maken zorgvuldige afstemming extra belangrijk.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Spanning in de relatie met de bestuurder</h3>
              <p className="text-slate-600 leading-relaxed">
                Wanneer vertrouwen onder druk staat, verschuift het gesprek al snel van inhoud naar positie.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Wat OR-ondersteuning oplevert</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            OR-ondersteuning is bedoeld om de OR te helpen zijn rol goed te blijven vervullen, juist wanneer het spannend wordt. Dat betekent onder andere:
          </p>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span>overzicht aanbrengen in complexe dossiers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span>helpen bij het analyseren en wegen van voorstellen</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span>ondersteunen bij het bepalen van een strategische koers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span>voorbereiding en begeleiding van het gesprek met de bestuurder</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span>bewaken van zorgvuldigheid binnen juridische kaders</span>
            </li>
          </ul>
          <p className="text-slate-600 mt-6 leading-relaxed">
            Altijd met respect voor de verhoudingen en zonder het werk van de OR over te nemen.
          </p>
        </div>
      </PageSection>

      <PageSection background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Vormen van OR-ondersteuning</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Advies</h3>
              <p className="text-slate-600 leading-relaxed">
                Juridische en inhoudelijke ondersteuning bij complexe dossiers, zoals reorganisaties, adviesaanvragen of concernstructuren.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Interim OR-ondersteuning</h3>
              <p className="text-slate-600 leading-relaxed">
                Tijdelijke versterking van de OR bij piekbelasting, uitval of capaciteitsproblemen.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Coaching</h3>
              <p className="text-slate-600 leading-relaxed">
                Individuele of teamcoaching voor OR-leden of voorzitters, gericht op rol, samenwerking en omgaan met lastige situaties.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Onze werkwijze</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">1</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Kennismaking en verheldering</h3>
                <p className="text-slate-600">We bespreken wat er speelt, wat de urgentie is en waar de OR behoefte aan heeft.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">2</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Voorstel op maat</h3>
                <p className="text-slate-600">We doen een voorstel dat past bij de situatie: advies, interim of coaching, met duidelijke afspraken over inzet en duur.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">3</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Ondersteuning en afronding</h3>
                <p className="text-slate-600">We ondersteunen zolang nodig en evalueren samen. Nazorg of verdieping is mogelijk.</p>
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
        title="Willen jullie verkennen of OR-ondersteuning past bij jullie situatie?"
        subtitle="Een kennismaking is vrijblijvend en bedoeld om samen te kijken wat in jullie situatie helpend is."
      />
    </>
  );
}