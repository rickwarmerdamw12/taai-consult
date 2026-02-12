import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import PageSection from '../components/PageSection';
import Accordion from '../components/Accordion';

export default function Masterclasses() {
  const faqs = [
    { title: "Voor wie zijn masterclasses bedoeld?", content: "Masterclasses zijn bedoeld voor ervaren OR-leden, voorzitters en commissievoorzitters die hun rol goed kennen en behoefte hebben aan verdieping in complexe juridische of strategische vraagstukken." },
    { title: "Wat is het verschil met een training?", content: "Trainingen richten zich op het aanleren van basiskennis en vaardigheden. Masterclasses veronderstellen ervaring en gaan dieper in op complexe materie, met meer ruimte voor uitwisseling en reflectie." },
    { title: "Kan ik als individueel OR-lid deelnemen?", content: "Ja. Sommige masterclasses bieden we open aan, zodat deelnemers met OR-leden van andere organisaties kunnen sparren. Voor incompany-masterclasses geldt dat we de sessie afstemmen op de specifieke context van de OR." }
  ];

  return (
    <>
      <SEO 
        title="Masterclasses"
        description="Masterclasses voor verdieping en scherpte. Verdiepende sessies voor ervaren OR-leden en commissies."
        canonical="/diensten/masterclasses"
      />

      {/* 1. HERO */}
      <Hero 
        title="Masterclasses voor verdieping en scherpte"
        subtitle="Verdiepende sessies voor ervaren OR-leden en commissies die verder willen kijken dan de basis. Masterclasses zijn bedoeld voor situaties waarin kennis en ervaring al aanwezig zijn, maar verdieping nodig is rond complexe juridische of strategische vraagstukken."
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/Contact" 
            className="px-8 py-3 text-white rounded-lg transition-colors font-medium text-center"
            style={{ background: 'linear-gradient(90deg, #2F5B4C 0%, #1C3A30 100%)' }}
            data-cta="plan_kennismaking"
          >
            Plan een vrijblijvend gesprek
          </Link>
          <Link 
            to="/Contact" 
            className="px-8 py-3 bg-white rounded-lg transition-colors font-medium text-center"
            style={{ color: '#2E2E2E' }}
            data-cta="vraag_voorstel"
          >
            Vraag een voorstel aan
          </Link>
        </div>
      </Hero>

      {/* 2. POSITIONERING */}
      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1F3F35' }}>
            Geen basistraining. Wel verdieping.
          </h2>
          
          <div className="space-y-4 text-lg leading-relaxed" style={{ color: '#2E2E2E' }}>
            <p>
              Een masterclass is geen introductie of herhaling van de basis. Het is een verdiepende sessie voor OR-leden die hun rol al goed kennen en behoefte hebben aan scherpere afwegingen en meer context.
            </p>
            
            <p>
              In kleine groepen werken we aan complexe vraagstukken die in de praktijk spelen.
            </p>
            
            <p className="font-medium">
              De nadruk ligt op analyse, reflectie en strategische positionering.
            </p>
          </div>
        </div>
      </PageSection>

      {/* 3. WANNEER IS EEN MASTERCLASS PASSEND? */}
      <PageSection background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: '#1F3F35' }}>
            Wanneer kies je voor een masterclass?
          </h2>
          
          <div className="space-y-4">
            {[
              'Wanneer onderwerpen juridisch complexer worden.',
              'Wanneer strategische keuzes om zorgvuldige afweging vragen.',
              'Wanneer de OR zich wil voorbereiden op gesprekken waarin meer van hem wordt verwacht.',
              'Wanneer er behoefte is aan verdieping voorbij de standaardtraining.',
              'Wanneer ervaren OR-leden willen sparren op niveau.'
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg" style={{ border: '1px solid #AFC1B7' }}>
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#6F8F80' }} />
                <p className="text-lg" style={{ color: '#2E2E2E' }}>{item}</p>
              </div>
            ))}
          </div>
          
          <p className="text-lg font-medium mt-8" style={{ color: '#1F3F35' }}>
            Een masterclass is bedoeld voor verdieping, niet voor herhaling.
          </p>
        </div>
      </PageSection>

      {/* 4. WAT EEN MASTERCLASS OPLEVERT */}
      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: '#1F3F35' }}>
            Wat een masterclass oplevert
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Verdieping in juridische en strategische thema's',
              'Meer inzicht in handelingsruimte en afwegingen',
              'Reflectie op rol en positionering',
              'Sparren met andere ervaren OR-leden',
              'Van operationeel handelen naar strategisch denken'
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg" style={{ backgroundColor: '#DCE5E0' }}>
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#1F3F35' }} />
                <p className="text-lg" style={{ color: '#2E2E2E' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* 5. VOORBEELDEN VAN MASTERCLASSES */}
      <PageSection background="gray">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center" style={{ color: '#1F3F35' }}>
            Voorbeelden van masterclasses
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Juridische verdieping */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#DCE5E0' }}>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#1F3F35' }}>Juridische verdieping</h3>
              <ul className="space-y-3" style={{ color: '#2E2E2E' }}>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Verdieping WOR</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Adviesrecht in complexe dossiers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Instemmingsrecht en grijze gebieden</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Informatieverplichtingen en grenzen</span>
                </li>
              </ul>
            </div>

            {/* Strategische positionering */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#DCE5E0' }}>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#1F3F35' }}>Strategische positionering</h3>
              <ul className="space-y-3" style={{ color: '#2E2E2E' }}>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>OR versus vakbond</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Reglement en mandaat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Strategisch overleg met de bestuurder</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Artikel 24-vergadering</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#F4F4F4', border: '2px solid #AFC1B7' }}>
            <p className="text-lg font-medium" style={{ color: '#1F3F35' }}>
              Staat jullie specifieke vraag hier niet tussen?<br />
              De inhoud wordt altijd afgestemd op de ervaring en actuele vraagstukken van de deelnemers.
            </p>
          </div>
        </div>
      </PageSection>

      {/* 6. WERKWIJZE */}
      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center" style={{ color: '#1F3F35' }}>
            Zo werken wij
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Intakegesprek', text: 'Ervaring, leerdoelen en vraagstukken in kaart brengen' },
              { num: '02', title: 'Kleinschalige sessies', text: 'Maximaal 12 deelnemers' },
              { num: '03', title: 'Sparren en reflectie', text: 'Ruimte voor casuïstiek en verdieping' }
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold" style={{ backgroundColor: '#1F3F35', color: 'white' }}>
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1F3F35' }}>{step.title}</h3>
                <p className="text-lg" style={{ color: '#2E2E2E' }}>{step.text}</p>
              </div>
            ))}
          </div>
          
          <p className="text-lg font-medium text-center mt-12" style={{ color: '#1F3F35' }}>
            De nadruk ligt op uitwisseling, analyse en toepasbaarheid in de eigen praktijk.
          </p>
        </div>
      </PageSection>

      {/* 7. MAATWERK */}
      <PageSection background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1F3F35' }}>
            Altijd afgestemd op niveau en context
          </h2>
          
          <div className="space-y-4 text-lg leading-relaxed" style={{ color: '#2E2E2E' }}>
            <p>
              Masterclasses kunnen worden verzorgd voor een volledige OR, een commissie of als open inschrijving voor ervaren OR-leden.
            </p>
            
            <p>
              We stemmen de inhoud altijd af op het niveau, de ervaring en de actuele dossiers van de deelnemers.
            </p>
            
            <p className="font-medium">
              Geen standaardprogramma, maar verdieping die past bij de praktijk.
            </p>
          </div>
        </div>
      </PageSection>

      {/* FAQ */}
      <PageSection>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#1F3F35' }}>Veelgestelde vragen</h2>
          <Accordion items={faqs} />
        </div>
      </PageSection>

      {/* 8. AFSLUITENDE CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(90deg, #2F5B4C 0%, #1C3A30 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Willen jullie verdiepen waar het complexer wordt?
          </h2>
          <p className="text-xl mb-10" style={{ color: '#DCE5E0' }}>
            In een vrijblijvend gesprek verkennen we of een masterclass past bij jullie ervaring en vraagstuk.
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