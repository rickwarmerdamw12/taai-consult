import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import PageSection from '../components/PageSection';
import CTABlock from '../components/CTABlock';
import { Target, Users, Award } from 'lucide-react';

export default function OverOns() {
  return (
    <>
      <SEO 
        title="Over ons"
        description="Taai-Consult helpt OR-leden, commissies en bestuurders om effectiever te worden. Praktisch en juridisch scherp, met oog voor de menselijke kant."
        canonical="/OverOns"
      />

      <Hero 
        title="Over Taai-Consult"
        subtitle="Vertrouwen bij complexe situaties. Praktisch en juridisch scherp, met oog voor de menselijke kant."
      />

      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Wie we zijn</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">
              Taai-Consult begeleidt ondernemingsraden bij complexe en gevoelige medezeggenschapsvraagstukken. We combineren ervaring, rust en juridische scherpte om juist in spannende situaties overzicht en richting te bieden—zonder te juridiseren.
            </p>
            <p className="mb-4">
              Taai-Consult is opgericht en wordt geleid door Arjan Warmerdam, een ervaren begeleider van ondernemingsraden in situaties met hoge druk, grote belangen en complexe besluitvorming. Jarenlang begeleidde hij OR'en bij reorganisaties, majeure veranderingen en lastige onderhandelingen.
            </p>
            <p>
              De afgelopen periode is Rick Warmerdam toegetreden tot het bureau. Hij versterkt Taai-Consult voornamelijk achter de schermen: hij verzorgt marketing, klantcontact en is vaak het eerste aanspreekpunt. De inhoudelijke begeleiding ligt bij Arjan, terwijl Rick de komende jaren steeds meer betrokken raakt. Dit biedt continuïteit en versterking, zonder de basis te veranderen.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Wat ons kenmerkt</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Onafhankelijke positie</h3>
              <p className="text-slate-600">
                Wij werken los van interne belangen en bieden objectieve, zorgvuldige begeleiding.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Menselijke aanpak</h3>
              <p className="text-slate-600">
                Wij combineren juridische kennis met organisatorisch en menselijk inzicht, met aandacht voor verhoudingen en communicatie.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Rust en scherpte</h3>
              <p className="text-slate-600">
                Juist wanneer het spannend wordt, brengen wij rust, helderheid en focus, zonder concessies aan kwaliteit.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Voor wie we werken</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">OR-leden en commissies</h3>
              <p className="text-slate-600">
                Van startende OR-leden tot ervaren voorzitters. Van VGW(M)-commissies tot personeelsvertegenwoordigingen.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Holdings en concerns</h3>
              <p className="text-slate-600">
                Centrale OR'en, groeps-OR'en en decentrale OR'en in complexe concernstructuren. Grip op mandaten en besluitvorming.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Publieke sector</h3>
              <p className="text-slate-600">
                Gemeenten, provincies, waterschappen en andere publieke organisaties. We kennen de ambtelijke context en politiek-bestuurlijke verhoudingen.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Bestuurders en HR</h3>
              <p className="text-slate-600">
                Ook bestuurders en HR-adviseurs vinden hun weg naar ons: voor advies, OR-ondersteuning en organisatieverandering.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      <CTABlock 
        title="Klaar om helderheid te krijgen in een complex dossier?"
        subtitle="Plan een kennismaking of neem contact op"
      />
    </>
  );
}