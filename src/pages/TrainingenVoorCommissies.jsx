import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import PageSection from '../components/PageSection';
import Accordion from '../components/Accordion';

export default function TrainingenVoorCommissies() {
  const faqs = [
    { title: "Wat is het verschil met een OR-training?", content: "Commissies hebben specifieke taken en bevoegdheden. Deze trainingen zijn daarop toegespitst." },
    { title: "Zijn deze trainingen ook geschikt voor gecombineerde commissies?", content: "Ja, veel OR'en hebben een VGW(M)-taak. We stemmen de training af op jullie situatie." },
    { title: "Wat als we weinig tijd hebben?", content: "We bieden ook compacte varianten van 1 dag of modulaire trajecten." }
  ];

  return (
    <>
      <SEO
        title="Trainingen voor Commissies"
        description="Commissietrainingen: scherp op taak én praktijk. Voor VGW(M)-, HR-, financiële en andere commissies."
        canonical="/trainingen-voor-commissies" />

      {/* 1. HERO */}
      <Hero
        title="Trainingen voor commissies: scherp op taak én praktijk"
        subtitle="Voor VGW(M)-, HR-, financiële en andere commissies. Trainingen die zorgen voor duidelijke rolafbakening, inhoudelijke stevigheid en effectiever samenwerken binnen de organisatie.">
        
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
                Een commissie heeft een eigen verantwoordelijkheid
              </h2>
              
              <div className="space-y-4 text-lg leading-relaxed" style={{ color: '#2E2E2E' }}>
                <p>
                  Commissies vervullen binnen de medezeggenschap een specifieke taak. Dat vraagt om duidelijke rolafbakening, goede afstemming met de OR en zorgvuldige samenwerking met de bestuurder en andere betrokkenen.
                </p>
                
                <p>
                  Onze trainingen sluiten aan op die praktijk. We helpen commissieleden om hun rol scherper te krijgen, inhoudelijk sterker te worden en met meer vertrouwen te adviseren.
                </p>
                
                <p className="font-medium">
                  De focus ligt altijd op toepasbaarheid: wat betekent dit concreet voor jullie commissie en organisatie?
                </p>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69846ad3327fab0348385a7d/44c828713_ChatGPTImage14feb202614_45_41.png" 
                alt="Commissie training in de praktijk" 
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
            Veel commissies lopen tegen dit soort vragen aan:
          </h2>
          
          <div className="space-y-4">
            {[
              'Wat is precies onze rol ten opzichte van de OR?',
              'Hoe verdelen we taken en verantwoordelijkheden helder?',
              'Hoe zorgen we voor goede terugkoppeling naar de OR?',
              'Hoe bereiden we dossiers inhoudelijk goed voor?',
              'Hoe gaan we zorgvuldig om met gevoelige informatie?',
              'Hoe versterken we onze positie richting bestuurder of management?'
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg" style={{ border: '1px solid #AFC1B7' }}>
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#6F8F80' }} />
                <p className="text-lg" style={{ color: '#2E2E2E' }}>{item}</p>
              </div>
            ))}
          </div>
          
          <p className="text-lg font-medium mt-8" style={{ color: '#1F3F35' }}>
            Herkenbaar? Dan is gerichte ontwikkeling van de commissie geen luxe, maar noodzaak.
          </p>
        </div>
      </PageSection>

      {/* 4. VOORBEELDEN */}
      <PageSection>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center" style={{ color: '#1F3F35' }}>
            Voorbeelden van veelgevraagde commissietrainingen
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* VGW(M) / Arbo-commissie */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#DCE5E0' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1F3F35' }}>VGW(M) / Arbo-commissie</h3>
              <ul className="space-y-3" style={{ color: '#2E2E2E' }}>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Rol en positie binnen de medezeggenschap</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Samenwerking met preventiemedewerker en bestuurder</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Signaleren, analyseren en adviseren op arbeidsomstandigheden</span>
                </li>
              </ul>
            </div>

            {/* Commissie Communicatie Achterban (CCA) */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#DCE5E0' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1F3F35' }}>Commissie Communicatie Achterban (CCA)</h3>
              <ul className="space-y-3" style={{ color: '#2E2E2E' }}>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Structuur in communicatie met de achterban</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Signalen ophalen en vertalen naar standpunten</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Duidelijke terugkoppeling van besluiten</span>
                </li>
              </ul>
            </div>

            {/* Commissie Financiën (CF) */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#DCE5E0' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1F3F35' }}>Commissie Financiën (CF)</h3>
              <ul className="space-y-3" style={{ color: '#2E2E2E' }}>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Lezen en interpreteren van financiële informatie</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Kritisch doorvragen op cijfers en aannames</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Vertalen naar onderbouwde adviezen</span>
                </li>
              </ul>
            </div>

            {/* HR / Organisatiecommissies */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#DCE5E0' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1F3F35' }}>HR / Organisatiecommissies</h3>
              <ul className="space-y-3" style={{ color: '#2E2E2E' }}>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Werken met beleid, procedures en personele ontwikkelingen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Inhoudelijk voorbereiden van dossiers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Samenhang en impact beoordelen</span>
                </li>
              </ul>
            </div>

            {/* Verkiezingscommissie */}
            <div className="p-8 rounded-xl md:col-span-2" style={{ backgroundColor: '#DCE5E0' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1F3F35' }}>Verkiezingscommissie</h3>
              <ul className="space-y-3" style={{ color: '#2E2E2E' }}>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Organiseren van OR-verkiezingen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Rollen en verantwoordelijkheden</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>Zorgvuldige uitvoering van het proces</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 p-6 rounded-lg text-center" style={{ backgroundColor: '#F4F4F4', border: '2px solid #AFC1B7' }}>
            <p className="text-lg font-medium" style={{ color: '#1F3F35' }}>
              Staat jullie commissie hier niet tussen?<br />
              Wij verzorgen ook maatwerk, afgestemd op de specifieke taak en context van jullie commissie.
            </p>
          </div>
        </div>
      </PageSection>

      {/* 5. MAATWERK */}
      <PageSection background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1F3F35' }}>
            Altijd afgestemd op jullie praktijk
          </h2>
          
          <div className="space-y-4 text-lg leading-relaxed" style={{ color: '#2E2E2E' }}>
            <p>Een commissietraining kan worden verzorgd:</p>
            
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#6F8F80' }} />
                <span>Als zelfstandige training</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#6F8F80' }} />
                <span>Als onderdeel van een breder OR-traject</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#6F8F80' }} />
                <span>Of gekoppeld aan een concreet dossier</span>
              </li>
            </ul>
            
            <p className="font-medium">
              We werken vanuit bestaande concepten én volledig maatwerk. Geen standaardprogramma, maar een aanpak die past bij jullie rol, organisatie en actuele vraagstukken.
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
              { num: '01', text: 'Verkenning van rol, taak en dynamiek van de commissie' },
              { num: '02', text: 'Analyse van ontwikkelpunten en inhoudelijke vraagstukken' },
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
            Doel: een commissie die helder gepositioneerd is, inhoudelijk stevig staat en effectief bijdraagt aan de medezeggenschap.
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
            Verkennen wat passend is voor jullie commissie?
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