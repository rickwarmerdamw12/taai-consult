import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import PageSection from '../components/PageSection';

export default function TrainingenVoorDeOr() {

  const faqItems = [
    {
      question: 'Hoeveel kost een OR-training?',
      answer: 'Dat hangt af van de duur, het aantal deelnemers en de inhoud. Neem contact op voor een vrijblijvende offerte.',
    },
    {
      question: 'Mogen OR-leden scholing volgen onder werktijd?',
      answer: 'Ja. Artikel 18 van de WOR geeft OR-leden recht op scholing. De kosten komen voor rekening van de werkgever.',
    },
    {
      question: 'Kan de training ook online?',
      answer: 'Zeker. We bieden zowel fysieke als online trainingen aan, en hybride vormen zijn ook mogelijk.',
    },
    {
      question: 'Voor hoeveel deelnemers is een training geschikt?',
      answer: 'Onze incompany-trainingen zijn geschikt voor groepen van 3 tot circa 25 personen.',
    },
    {
      question: 'Is TAAI-consult CRKBO-geregistreerd?',
      answer: 'Ja. Dat betekent dat onze trainingen voldoen aan de kwaliteitsnormen voor beroepsonderwijs en dat de kosten btw-vrijgesteld kunnen zijn.',
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer,
      },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "OR-training op maat (incompany)",
    "provider": {
      "@type": "Organization",
      "name": "TAAI-consult",
      "url": "https://taai-consult.nl",
    },
    "serviceType": "OR-training / training ondernemingsraad",
    "areaServed": "NL",
    "url": "https://taai-consult.nl/or-training",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <SEO
        title="OR-training op maat | Incompany & maatwerk"
        description="Praktijkgerichte OR-training door ervaren trainers. Van WOR-basiskennis tot onderhandelen en teambuilding. Maatwerk voor jouw ondernemingsraad. Vraag vrijblijvend een programma aan."
        canonical="/or-training"
      />

      <Hero
        title="OR-training op maat — van basiskennis tot strategisch meedenken"
        subtitle="Een goede ondernemingsraad begint bij goed opgeleide leden. Maar een standaard WOR-cursus uit een boekje? Dat werkt niet. Bij TAAI-consult ontwikkelen we trainingen die passen bij jullie fase, jullie organisatie en jullie ambities. Of je OR nu net is gestart of al jaren draait: wij maken een programma dat aansluit op wat jullie écht nodig hebben."
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/Contact"
            className="px-8 py-3 text-white rounded-lg transition-colors font-medium text-center"
            style={{ background: 'linear-gradient(90deg, #2F5B4C 0%, #1C3A30 100%)' }}
          >
            Neem contact op
          </Link>
        </div>
      </Hero>

      <PageSection>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1F3F35' }}>
            Waarom kiezen OR's voor TAAI-consult?
          </h2>
          <div className="space-y-5 text-lg leading-relaxed" style={{ color: '#2E2E2E' }}>
            <p>
              Arjan, oprichter van TAAI-consult, traint en adviseert ondernemingsraden sinds 1998. Geen theoretisch verhaal, maar iemand die weet hoe het er in de praktijk aan toe gaat — bij reorganisaties, fusies, lastige bestuurders en alles daartussenin.
            </p>
            <p className="font-semibold" style={{ color: '#1F3F35' }}>Wat ons anders maakt:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Alles op maat.</strong> Geen standaardprogramma. We stemmen inhoud, tempo en werkvormen af op jullie situatie.</li>
              <li><strong>Breed trainingsaanbod.</strong> Van WOR-basiskennis en adviesrecht tot onderhandelen, financiën lezen en teambuilding.</li>
              <li><strong>Praktijk centraal.</strong> Jullie eigen casuïstiek staat tijdens de training op tafel. Geen abstracte theorie.</li>
              <li><strong>CRKBO-geregistreerd.</strong> Onze trainingen voldoen aan de kwaliteitseisen voor beroepsonderwijs.</li>
            </ul>
          </div>
        </div>
      </PageSection>

      <PageSection background="gray">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1F3F35' }}>
            Ons trainingsaanbod voor de ondernemingsraad
          </h2>
          <p className="text-lg mb-8" style={{ color: '#2E2E2E' }}>
            We bieden trainingen aan in drie categorieën. Elk onderwerp kan als losse workshop of als onderdeel van een meerdaags programma.
          </p>

          <div className="space-y-10">
            <div className="bg-white rounded-xl p-8" style={{ border: '1px solid #AFC1B7' }}>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#1F3F35' }}>Wet- en regelgeving</h3>
              <p className="text-lg mb-4" style={{ color: '#2E2E2E' }}>
                De basis voor elke OR. Hier leren jullie werken met de WOR, het adviesrecht, instemmingsrecht en initiatiefrecht. Geschikt voor zowel startende als ervaren OR-leden die hun juridische kennis willen opfrissen.
              </p>
              <p className="font-semibold mb-2" style={{ color: '#1F3F35' }}>Populaire trainingen:</p>
              <ul className="list-disc ml-6 space-y-1" style={{ color: '#2E2E2E' }}>
                <li>Basiscursus Wet op de Ondernemingsraden (WOR)</li>
                <li>Adviesrecht in de praktijk</li>
                <li>Instemmingsrecht — wanneer en hoe</li>
                <li>Rechten en plichten bij reorganisatie en fusie</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8" style={{ border: '1px solid #AFC1B7' }}>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#1F3F35' }}>Vaardigheden & persoonlijke ontwikkeling</h3>
              <p className="text-lg mb-4" style={{ color: '#2E2E2E' }}>
                Een OR die invloed wil hebben, moet meer dan de wet kennen. We trainen jullie in de vaardigheden die het verschil maken aan de overlegtafel.
              </p>
              <p className="font-semibold mb-2" style={{ color: '#1F3F35' }}>Populaire trainingen:</p>
              <ul className="list-disc ml-6 space-y-1" style={{ color: '#2E2E2E' }}>
                <li>Onderhandelen met de bestuurder</li>
                <li>Effectief vergaderen als OR</li>
                <li>Financiële stukken lezen en beoordelen</li>
                <li>Communicatie met de achterban</li>
                <li>Overtuigend adviseren</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8" style={{ border: '1px solid #AFC1B7' }}>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#1F3F35' }}>Teambuilding & samenwerking</h3>
              <p className="text-lg mb-4" style={{ color: '#2E2E2E' }}>
                Een OR is een team. En een team dat goed samenwerkt, bereikt meer. We combineren inhoudelijke training met teambuilding, zodat jullie niet alleen slimmer maar ook hechter de vergaderzaal uitlopen.
              </p>
              <p className="font-semibold mb-2" style={{ color: '#1F3F35' }}>Populaire trainingen:</p>
              <ul className="list-disc ml-6 space-y-1" style={{ color: '#2E2E2E' }}>
                <li>Teambuilding voor de OR</li>
                <li>Rolbewustzijn en samenwerking</li>
                <li>Van groep naar team: de OR als eenheid</li>
              </ul>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1F3F35' }}>
            Hoe werkt het?
          </h2>
          <ol className="space-y-3 text-lg" style={{ color: '#2E2E2E' }}>
            <li><strong>Kennismaking.</strong> We bespreken waar jullie OR staat, wat de uitdagingen zijn en waar jullie naartoe willen.</li>
            <li><strong>Programma op maat.</strong> Op basis van dat gesprek stellen we een trainingsplan samen — van een dagdeel tot een meerdaags traject.</li>
            <li><strong>Training op locatie of online.</strong> Wij komen naar jullie toe, of we organiseren het op een externe locatie. Online is ook mogelijk.</li>
            <li><strong>Nazorg.</strong> Na de training blijven we bereikbaar voor vragen. Jullie staan er niet alleen voor.</li>
          </ol>
        </div>
      </PageSection>

      <PageSection background="gray">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1F3F35' }}>
            Naast training: coaching en advies
          </h2>
          <div className="space-y-4 text-lg" style={{ color: '#2E2E2E' }}>
            <p>
              Soms is een training niet genoeg. Bij complexe trajecten — denk aan een reorganisatie, een overname, of een vastgelopen overleg met de bestuurder — bieden we ook coaching en advies. We kunnen de OR begeleiden als sparringpartner, procesbegeleider of als extern deskundige op basis van artikel 22 WOR.
            </p>
            <p>
              <Link to="/ORondersteuning" className="font-semibold" style={{ color: '#2F5B4C' }}>
                → Bekijk onze advies- en coachingdiensten
              </Link>
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1F3F35' }}>
            Veelgestelde vragen over OR-trainingen
          </h2>
          <div className="space-y-6 text-lg" style={{ color: '#2E2E2E' }}>
            <div>
              <p className="font-semibold" style={{ color: '#1F3F35' }}>Hoeveel kost een OR-training?</p>
              <p>Dat hangt af van de duur, het aantal deelnemers en de inhoud. Neem contact op voor een vrijblijvende offerte.</p>
            </div>
            <div>
              <p className="font-semibold" style={{ color: '#1F3F35' }}>Mogen OR-leden scholing volgen onder werktijd?</p>
              <p>Ja. Artikel 18 van de WOR geeft OR-leden recht op scholing. De kosten komen voor rekening van de werkgever.</p>
            </div>
            <div>
              <p className="font-semibold" style={{ color: '#1F3F35' }}>Kan de training ook online?</p>
              <p>Zeker. We bieden zowel fysieke als online trainingen aan, en hybride vormen zijn ook mogelijk.</p>
            </div>
            <div>
              <p className="font-semibold" style={{ color: '#1F3F35' }}>Voor hoeveel deelnemers is een training geschikt?</p>
              <p>Onze incompany-trainingen zijn geschikt voor groepen van 3 tot circa 25 personen.</p>
            </div>
            <div>
              <p className="font-semibold" style={{ color: '#1F3F35' }}>Is TAAI-consult CRKBO-geregistreerd?</p>
              <p>Ja. Dat betekent dat onze trainingen voldoen aan de kwaliteitsnormen voor beroepsonderwijs en dat de kosten btw-vrijgesteld kunnen zijn.</p>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection background="gray">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1F3F35' }}>
            Klaar om jullie OR sterker te maken?
          </h2>
          <p className="text-lg mb-8" style={{ color: '#2E2E2E' }}>
            Neem vrijblijvend contact op. We denken graag mee over een trainingsaanbod dat past bij jullie ondernemingsraad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/Contact"
              className="px-8 py-3 text-white rounded-lg transition-colors font-medium text-center"
              style={{ background: 'linear-gradient(90deg, #2F5B4C 0%, #1C3A30 100%)' }}
            >
              Neem contact op
            </Link>
          </div>
          <p className="mt-6 text-sm" style={{ color: '#6F8F80' }}>
            Bel direct: (telefoonnummer) — Mail ons: (e-mailadres)
          </p>
        </div>
      </PageSection>
    </>
  );
}
