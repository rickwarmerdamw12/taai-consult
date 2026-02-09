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
        subtitle="Praktisch en juridisch scherp, met oog voor de menselijke kant — in het dagelijks overleg én wanneer de belangen groot zijn."
      />

      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Wie we zijn</h2>
          <div className="prose prose-lg text-slate-600 space-y-4">
            <p>
              Taai-Consult begeleidt ondernemingsraden en commissies bij complexe en gevoelige medezeggenschapsvraagstukken. Wij brengen overzicht, rust en richting — vooral wanneer het spannend wordt.
            </p>
            <p>
              Juridische kennis gebruiken we om werkbare oplossingen te vinden binnen het juridische kader, niet om te juridiseren. Dat vraagt om ervaring, scherpte en oog voor de verhoudingen binnen de organisatie.
            </p>
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Arjan Warmerdam</h3>
              <p className="mb-4">
                Oprichter en inhoudelijk eindverantwoordelijk. Arjan is een ervaren begeleider van OR'en bij reorganisaties, grote veranderingen en complexe besluitvorming. Hij staat bekend om rust, scherpte en gezag zonder escalatie.
              </p>
              
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Rick Warmerdam</h3>
              <p>
                Toegetreden tot het bureau en verantwoordelijk voor marketing, klantcontact en eerste aanspreekpunt. De inhoudelijke begeleiding ligt bij Arjan; Rick groeit de komende jaren verder in het bureau. Dit biedt continuïteit en versterking.
              </p>
            </div>
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
                Juridische kennis gecombineerd met organisatie- en menselijk inzicht, met aandacht voor verhoudingen en communicatie.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Rust en scherpte</h3>
              <p className="text-slate-600">
                Juist wanneer het spannend wordt, brengen wij overzicht, focus en kwaliteit in het proces.
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
                Van startende OR-leden tot ervaren voorzitters en VGW(M)-commissies.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Holdings en concerns</h3>
              <p className="text-slate-600">
                Centrale OR'en, groeps-OR'en en decentrale OR'en in complexe concernstructuren.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Publieke sector</h3>
              <p className="text-slate-600">
                Gemeenten, provincies, waterschappen en andere ambtelijke organisaties.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Bestuurders en HR</h3>
              <p className="text-slate-600">
                Voor advies, OR-ondersteuning en organisatievraagstukken rondom medezeggenschap.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      <CTABlock 
        title="Klaar om te starten?"
        subtitle="Plan een kennismaking of vraag onze brochure aan"
      />
    </>
  );
}