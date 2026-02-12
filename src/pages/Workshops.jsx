import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import PageSection from '../components/PageSection';
import Accordion from '../components/Accordion';

export default function Workshops() {
  const faqs = [
    { title: "Verschil met trainingen?", content: "Een workshop is korter en gericht op één actueel thema. Trainingen zijn breder en bedoeld voor structurele ontwikkeling van kennis en vaardigheden." },
    { title: "Kunnen we zelf een thema voorstellen?", content: "Ja. Workshops worden altijd afgestemd op jullie vraagstuk en organisatie." },
    { title: "Ook online mogelijk?", content: "Ja, workshops kunnen zowel op locatie als online worden verzorgd." }
  ];

  return (
    <>
      <SEO 
        title="Workshops"
        description="Workshops voor actuele OR-vraagstukken. Korte, gerichte sessies die direct toepasbaar zijn."
        canonical="/workshops"
      />

      {/* 1. HERO */}
      <Hero 
        title="Workshops voor actuele OR-vraagstukken"
        subtitle="Korte, gerichte sessies waarin jullie werken aan een concreet thema dat nú speelt. Praktisch, interactief en direct toepasbaar."
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
            Wanneer kies je voor een workshop?
          </h2>
          
          <div className="space-y-4 text-lg leading-relaxed" style={{ color: '#2E2E2E' }}>
            <p>
              Een workshop is geen volledige training, maar een gerichte interventie rond één actueel thema.
            </p>
            
            <p>
              Ideaal wanneer er iets speelt dat om aandacht vraagt.<br />
              Of wanneer jullie als OR of commissie snel tot gezamenlijke inzichten, afspraken of richting willen komen.
            </p>
            
            <p className="font-medium">
              De inhoud wordt vooraf afgestemd op jullie vraagstuk, zodat de sessie direct aansluit bij wat in de praktijk nodig is.
            </p>
          </div>
        </div>
      </PageSection>

      {/* 3. HERKENNING */}
      <PageSection background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: '#1F3F35' }}>
            Veel OR'en kiezen voor een workshop wanneer:
          </h2>
          
          <div className="space-y-4">
            {[
              'Er spanning is rond een actueel dossier.',
              'Er onduidelijkheid bestaat over rollen of mandaten.',
              'Het overleg met de bestuurder stroef verloopt.',
              'Er snel gezamenlijk richting nodig is.',
              'Er behoefte is aan reflectie op samenwerking.',
              'Een specifiek thema verdieping vraagt, zonder een volledige training te volgen.'
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg" style={{ border: '1px solid #AFC1B7' }}>
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#6F8F80' }} />
                <p className="text-lg" style={{ color: '#2E2E2E' }}>{item}</p>
              </div>
            ))}
          </div>
          
          <p className="text-lg font-medium mt-8" style={{ color: '#1F3F35' }}>
            Herkenbaar? Dan kan een gerichte workshop precies de juiste stap zijn.
          </p>
        </div>
      </PageSection>

      {/* 4. VOORBEELDTHEMA'S */}
      <PageSection>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center" style={{ color: '#1F3F35' }}>
            Voorbeelden van workshopthema's
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Samenwerking binnen de OR',
              'Onderhandelen met de bestuurder',
              'Communicatie met de achterban',
              'Vergader- en besluitvorming',
              'Rollen en mandaten',
              'Gesprek voeren in spanningsvolle situaties'
            ].map((thema, index) => (
              <div key={index} className="p-6 rounded-xl flex items-start gap-4" style={{ backgroundColor: '#DCE5E0' }}>
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#1F3F35' }} />
                <h3 className="text-lg font-semibold" style={{ color: '#1F3F35' }}>{thema}</h3>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-lg text-center" style={{ backgroundColor: '#F4F4F4', border: '2px solid #AFC1B7' }}>
            <p className="text-lg font-medium" style={{ color: '#1F3F35' }}>
              Staat jullie actuele vraag hier niet tussen?<br />
              De inhoud wordt altijd afgestemd op jullie specifieke situatie.
            </p>
          </div>
        </div>
      </PageSection>

      {/* 5. WERKWIJZE */}
      <PageSection background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center" style={{ color: '#1F3F35' }}>
            Zo ziet een workshop eruit
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Intakegesprek', text: 'Verkennen van vraagstuk en doel' },
              { num: '02', title: 'Interactieve sessie', text: 'Gerichte input, oefeningen en reflectie' },
              { num: '03', title: 'Concrete opbrengst', text: 'Heldere inzichten, afspraken of handvatten' }
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
            De focus ligt altijd op toepasbaarheid in jullie eigen praktijk.
          </p>
        </div>
      </PageSection>

      {/* 6. MAATWERK */}
      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1F3F35' }}>
            Altijd afgestemd op wat nú speelt
          </h2>
          
          <div className="space-y-4 text-lg leading-relaxed" style={{ color: '#2E2E2E' }}>
            <p>
              Workshops worden volledig afgestemd op jullie actuele situatie. Dat kan voor de volledige OR, een commissie of een gecombineerde groep.
            </p>
            
            <p className="font-medium">
              We werken met bestaande concepten en maatwerk.<br />
              Geen standaardprogramma, maar een sessie die aansluit bij jullie vraag.
            </p>
          </div>
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
            Willen jullie gericht aan de slag met een actueel thema?
          </h2>
          <p className="text-xl mb-10" style={{ color: '#DCE5E0' }}>
            In een vrijblijvend gesprek verkennen we wat passend is en hoe een workshop kan bijdragen aan jullie vraagstuk.
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