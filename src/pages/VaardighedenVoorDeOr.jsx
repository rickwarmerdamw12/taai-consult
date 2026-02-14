import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import PageSection from '../components/PageSection';
import Accordion from '../components/Accordion';

export default function VaardighedenVoorDeOr() {
  const faqs = [
    { title: "Kan ik meerdere vaardigheden combineren?", content: "Ja, we stellen vaak maatwerktrajecten samen van 3-5 dagdelen." },
    { title: "Zijn deze trainingen ook voor commissies?", content: "Absoluut. VGW(M)-commissies en andere commissies hebben vaak dezelfde vaardigheden nodig." },
    { title: "Krijg ik een certificaat?", content: "Ja, na afloop ontvang je een certificaat van deelname." }
  ];

  return (
    <>
      <SEO
        title="Vaardigheden voor de OR"
        description="Vaardighedentrainingen die het verschil maken aan tafel. Van vergadertechniek tot onderhandelen."
        canonical="/vaardigheden-voor-de-or" />

      {/* 1. HERO */}
      <Hero
        title="Vaardigheden die het verschil maken aan tafel"
        subtitle="Vergaderen, onderhandelen en communiceren zijn kernvaardigheden binnen het OR-werk. Wij helpen OR-leden om effectiever samen te werken en steviger hun rol te vervullen.">
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/Contact"
            className="px-8 py-3 text-white rounded-lg transition-colors font-medium text-center"
            style={{ background: 'linear-gradient(90deg, #2F5B4C 0%, #1C3A30 100%)' }}
            data-cta="plan_kennismaking">
            Plan een vrijblijvend gesprek
          </Link>
          <Link
            to="/Contact"
            className="px-8 py-3 bg-white rounded-lg transition-colors font-medium text-center"
            style={{ color: '#2E2E2E' }}
            data-cta="vraag_voorstel">
            Vraag een voorstel aan
          </Link>
        </div>
      </Hero>

      {/* 2. POSITIONERING */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1F3F35' }}>
                Niet alleen kennis. Ook gedrag en vaardigheden.
              </h2>
              
              <div className="space-y-4 text-lg leading-relaxed" style={{ color: '#2E2E2E' }}>
                <p>
                  Effectief OR-werk vraagt meer dan inhoudelijke kennis. Hoe je vergadert, communiceert en omgaat met verschillen bepaalt vaak de kwaliteit van het overleg.
                </p>
                
                <p>
                  Daarom richten deze trainingen zich op praktische vaardigheden die direct toepasbaar zijn in jullie eigen OR-praktijk.
                </p>
                
                <p className="font-medium">
                  Met veel oefening, herkenbare situaties en concrete feedback.
                </p>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69846ad3327fab0348385a7d/809306010_procesbegeleiding.jpg" 
                alt="Procesbegeleiding in de praktijk" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </PageSection>

      {/* 3. HERKENNING */}
      <PageSection background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: '#1F3F35' }}>
            Veel OR'en lopen in de praktijk tegen dit soort situaties aan:
          </h2>
          
          <div className="space-y-4">
            {[
              'Discussies blijven hangen zonder duidelijke besluiten.',
              'Standpunten worden niet helder of overtuigend verwoord.',
              'Overleg met de bestuurder voelt stroef of ongelijkwaardig.',
              'Vergaderingen kosten veel energie en leveren weinig op.',
              'Spanningen binnen de OR beïnvloeden de samenwerking.',
              'Leden vinden het lastig om stevig en constructief het gesprek te voeren.'
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg" style={{ border: '1px solid #AFC1B7' }}>
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#6F8F80' }} />
                <p className="text-lg" style={{ color: '#2E2E2E' }}>{item}</p>
              </div>
            ))}
          </div>
          
          <p className="text-lg font-medium mt-8" style={{ color: '#1F3F35' }}>
            Herkenbaar? Dan is het tijd om gericht te werken aan vaardigheden.
          </p>
        </div>
      </PageSection>

      {/* 4. VOORBEELDEN */}
      <PageSection>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center" style={{ color: '#1F3F35' }}>
            Voorbeelden van veelgevraagde vaardigheidstrainingen
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Communicatie & gesprek */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#DCE5E0' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1F3F35' }}>Communicatie & gesprek</h3>
              <ul className="space-y-3" style={{ color: '#2E2E2E' }}>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Argumenteren en standpunten helder formuleren</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Maatwerk gesprekstechniek binnen de OR-context</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Omgaan met weerstand en lastige gesprekken</span>
                </li>
              </ul>
            </div>

            {/* Onderhandelen & invloed */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#DCE5E0' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1F3F35' }}>Onderhandelen & invloed</h3>
              <ul className="space-y-3" style={{ color: '#2E2E2E' }}>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Onderhandelen binnen de OR-context</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Belangen scherp krijgen en benoemen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Effectiever invloed uitoefenen in overleg</span>
                </li>
              </ul>
            </div>

            {/* Vergaderen & structuur */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#DCE5E0' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1F3F35' }}>Vergaderen & structuur</h3>
              <ul className="space-y-3" style={{ color: '#2E2E2E' }}>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Vergadertechniek</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Rol- en taakverdeling binnen de OR</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Besluitvorming verbeteren</span>
                </li>
              </ul>
            </div>

            {/* Samenwerking & spanningen */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#DCE5E0' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1F3F35' }}>Samenwerking & spanningen</h3>
              <ul className="space-y-3" style={{ color: '#2E2E2E' }}>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Conflicthantering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Omgaan met verschillen binnen de OR</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Constructieve samenwerking versterken</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </PageSection>

      {/* 5. MAATWERK */}
      <PageSection background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1F3F35' }}>
            Staat jullie vraag hier niet tussen?
          </h2>
          
          <div className="space-y-4 text-lg leading-relaxed" style={{ color: '#2E2E2E' }}>
            <p>
              Vaardigheidstrainingen worden altijd afgestemd op jullie praktijk. Dat kan als zelfstandige training, maar ook geïntegreerd in een breder traject of gekoppeld aan een lopend dossier.
            </p>
            
            <p>
              We werken met bestaande concepten én met maatwerk.
            </p>
            
            <p className="font-medium">
              Geen standaard trainingsdag, maar oefenen met situaties die voor jullie OR daadwerkelijk relevant zijn.
            </p>
          </div>
        </div>
      </PageSection>

      {/* 6. AANPAK */}
      <PageSection>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center" style={{ color: '#1F3F35' }}>
            Zo werken wij
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: '01', text: 'Verkenning van jullie praktijk en dynamiek' },
              { num: '02', text: 'Analyse van specifieke ontwikkelpunten' },
              { num: '03', text: 'Voorstel op maat (inhoud, vorm en duur)' },
              { num: '04', text: 'Praktische training met directe toepasbaarheid' }
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold" style={{ backgroundColor: '#1F3F35', color: 'white' }}>
                  {step.num}
                </div>
                <p className="text-lg" style={{ color: '#2E2E2E' }}>{step.text}</p>
              </div>
            ))}
          </div>
          
          <p className="text-lg font-medium text-center mt-12" style={{ color: '#1F3F35' }}>
            Doel: effectiever overleg, duidelijkere besluitvorming en steviger optreden aan tafel.
          </p>
        </div>
      </PageSection>

      {/* FAQ */}
      <PageSection background="gray">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#1F3F35' }}>Veelgestelde vragen</h2>
          <Accordion items={faqs} />
        </div>
      </PageSection>

      {/* 7. AFSLUITENDE CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(90deg, #2F5B4C 0%, #1C3A30 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Klaar om het verschil te maken in jullie overleg?
          </h2>
          <p className="text-xl mb-10" style={{ color: '#DCE5E0' }}>
            Een voorstel of programma wordt altijd in overleg en geheel vrijblijvend opgesteld.
          </p>
          <Link 
            to="/Contact" 
            className="inline-block px-10 py-4 bg-white rounded-lg transition-colors font-medium text-lg hover:bg-gray-50"
            style={{ color: '#1F3F35' }}
            data-cta="plan_kennismaking_bottom"
          >
            Plan een kennismaking
          </Link>
        </div>
      </section>
    </>
  );
}