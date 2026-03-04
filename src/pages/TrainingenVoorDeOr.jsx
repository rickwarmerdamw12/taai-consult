import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { useSeoOverride } from '../components/useSeoOverride';
import Hero from '../components/Hero';
import PageSection from '../components/PageSection';

export default function TrainingenVoorDeOr() {
  return (
    <>
      <SEO
        title="Trainingen voor de OR"
        description="Trainingen voor OR'en die echt willen functioneren. Van startende OR tot strategisch sparringpartner."
        canonical="/trainingen-voor-de-or" />

      {/* 1. HERO */}
      <Hero
        title="Trainingen voor OR'en die echt willen functioneren"
        subtitle="Van startende OR tot strategisch sparringpartner van de bestuurder. Wij verzorgen trainingen die direct aansluiten op jullie praktijk – met ruimte voor maatwerk en echte vraagstukken.">
        
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
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1F3F35' }}>
                Geen standaard lesdagen. Wel trainingen die werken in jullie praktijk.
              </h2>
              
              <div className="space-y-4 text-lg leading-relaxed" style={{ color: '#2E2E2E' }}>
                <p>
                  Elke OR is anders. Samenstelling, dynamiek, relatie met de bestuurder en de fase waarin jullie zitten bepalen wat nodig is.
                </p>
                
                <p>
                  Daarom werken wij niet met een vaste catalogus. We kijken eerst naar jullie situatie en stellen vervolgens een programma samen dat past.
                </p>
                
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#6F8F80' }} />
                    <span>Soms vanuit een bestaand trainingsconcept.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#6F8F80' }} />
                    <span>Soms volledig op maat.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#6F8F80' }} />
                    <span>Altijd praktisch, interactief en toepasbaar.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69846ad3327fab0348385a7d/f99489151_ortrainingortraining.jpg" 
                alt="OR training in de praktijk" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-lg opacity-10" style={{ backgroundColor: '#6F8F80' }}></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-lg opacity-10" style={{ backgroundColor: '#1F3F35' }}></div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* 3. HERKENNING */}
      <PageSection background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: '#1F3F35' }}>
            Veel OR'en kloppen bij ons aan met vragen als:
          </h2>
          
          <div className="space-y-4">
            {[
              'We zijn net gestart en missen basis en structuur.',
              'We willen strategischer opereren in plaats van alleen reageren.',
              'De samenwerking binnen de OR kan beter.',
              'Commissies draaien niet zoals ze zouden moeten.',
              'We willen steviger het overleg met de bestuurder voeren.',
              'We voelen dat er meer invloed mogelijk is, maar weten niet hoe.'
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg" style={{ border: '1px solid #AFC1B7' }}>
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#6F8F80' }} />
                <p className="text-lg" style={{ color: '#2E2E2E' }}>{item}</p>
              </div>
            ))}
          </div>
          
          <p className="text-lg font-medium mt-8" style={{ color: '#1F3F35' }}>
            Herkenbaar? Dan is het tijd om gericht te investeren in ontwikkeling.
          </p>
        </div>
      </PageSection>

      {/* 4. VOORBEELDEN */}
      <PageSection>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center" style={{ color: '#1F3F35' }}>
            Voorbeelden van veelgevraagde trainingen
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Basis & fundament */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#DCE5E0' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1F3F35' }}>Basis & fundament</h3>
              <ul className="space-y-3" style={{ color: '#2E2E2E' }}>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Starttraining OR</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Rollen, rechten en verantwoordelijkheden</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Structuur en werkwijze binnen de OR</span>
                </li>
              </ul>
            </div>

            {/* Verdieping & strategie */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#DCE5E0' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1F3F35' }}>Verdieping & strategie</h3>
              <ul className="space-y-3" style={{ color: '#2E2E2E' }}>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>De OR als strategisch adviseur</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Invloed uitoefenen op beleid</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Werken met advies- en instemmingsrechten</span>
                </li>
              </ul>
            </div>

            {/* Samenwerking & dynamiek */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#DCE5E0' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1F3F35' }}>Samenwerking & dynamiek</h3>
              <ul className="space-y-3" style={{ color: '#2E2E2E' }}>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Effectief samenwerken binnen de OR</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Werken met commissies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>OR als serieuze gesprekspartner</span>
                </li>
              </ul>
            </div>

            {/* Professionalisering */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#DCE5E0' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1F3F35' }}>Professionalisering</h3>
              <ul className="space-y-3" style={{ color: '#2E2E2E' }}>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Jaarplan en positionering van de OR</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Relatie OR – bestuurder versterken</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Voorbereiden op complexe dossiers</span>
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
            Staat jullie specifieke vraag hier niet tussen?
          </h2>
          
          <div className="space-y-4 text-lg leading-relaxed" style={{ color: '#2E2E2E' }}>
            <p className="font-medium">Dat is geen probleem.</p>
            
            <p>
              Taai-Consult verzorgt trainingen op alle onderwerpen die in de OR-praktijk relevant zijn. Van basiskennis tot complexe strategische vraagstukken.
            </p>
            
            <p>Een training kan worden verzorgd:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#6F8F80' }} />
                <span>Als zelfstandig programma</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#6F8F80' }} />
                <span>Als onderdeel van een breder begeleidingstraject</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#6F8F80' }} />
                <span>Of geïntegreerd in lopende dossiers</span>
              </li>
            </ul>
            
            <p>
              We werken altijd vanuit jullie context. Geen standaard draaiboek, maar een programma dat klopt voor jullie situatie.
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
              { num: '01', text: 'Vrijblijvende verkenning van jullie situatie' },
              { num: '02', text: 'Analyse van vraag, fase en dynamiek' },
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
            Doel: meer vertrouwen, meer duidelijkheid en meer invloed aan tafel.
          </p>
        </div>
      </PageSection>

      {/* 7. AFSLUITENDE CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(90deg, #2F5B4C 0%, #1C3A30 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Verkennen wat passend is?
          </h2>
          <p className="text-xl mb-10" style={{ color: '#DCE5E0' }}>
            Een programma of voorstel wordt altijd in overleg en geheel vrijblijvend opgesteld.
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