import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import PageSection from '../components/PageSection';
import CTABlock from '../components/CTABlock';
import Accordion from '../components/Accordion';
import { Briefcase, Users, Target } from 'lucide-react';

export default function ORondersteuning() {
  const faqs = [
    { title: "Wanneer heb je ondersteuning nodig?", content: "Bij complexe dossiers (fusie, reorganisatie), conflict met bestuur, of als de OR tijdelijk versterking nodig heeft." },
    { title: "Hoe lang duurt ondersteuning?", content: "Advies kan eenmalig zijn, interim en coaching lopen meestal enkele maanden tot een jaar. We stemmen af op jullie behoefte." },
    { title: "Wat kost OR-ondersteuning?", content: "Dat hangt af van de vraag en omvang. We maken altijd eerst een offerte op maat na het intakegesprek." }
  ];

  return (
    <>
      <SEO 
        title="OR-ondersteuning"
        description="Advies, interim en coaching voor OR'en die extra ondersteuning nodig hebben bij complexe dossiers, conflict of organisatieverandering."
        canonical="/diensten/or-ondersteuning"
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

      <PageSection background="gray">
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

      <PageSection>
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