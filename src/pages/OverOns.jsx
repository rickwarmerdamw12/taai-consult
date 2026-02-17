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
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Wie we zijn</h2>
              <div className="prose prose-lg text-slate-600 space-y-4 leading-relaxed">
                <p>
                  Taai-Consult ondersteunt ondernemingsraden en commissies bij medezeggenschapsvraagstukken die ertoe doen. Situaties waarin belangen groot zijn, de druk hoog is en zorgvuldigheid cruciaal blijft. We brengen overzicht, rust en richting — juist wanneer het spannend wordt.
                </p>
                <p>
                  Onze kracht zit in de combinatie van inhoudelijke scherpte en gevoel voor de organisatiecontext. Juridische kennis is daarbij geen doel op zich, maar een middel om tot werkbare oplossingen te komen. Oplossingen die recht doen aan wet- en regelgeving én aan de verhoudingen binnen de organisatie. We helpen OR'en om hun positie zorgvuldig én effectief in te nemen, zonder onnodige escalatie of juridisering.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69846ad3327fab0348385a7d/08e6693ff_DSCF1042.jpg" 
                alt="Taai-Consult team" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600 rounded-lg opacity-10"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-slate-900 rounded-lg opacity-10"></div>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Arjan Warmerdam</h2>
          <div className="prose prose-lg text-slate-600 space-y-4 leading-relaxed">
            <p>
              Taai-Consult is opgericht en wordt inhoudelijk geleid door Arjan Warmerdam. Arjan is trainer en begeleider met meer dan 25 jaar ervaring in de medezeggenschap. In die jaren heeft hij OR'en en commissies begeleid bij een breed scala aan organisaties — van kleine instellingen tot grote (internationale) ondernemingen en publieke organisaties. Hij werkte aan reorganisaties, fusies, complexe adviestrajecten en samenwerkingsvraagstukken, vaak onder hoge druk en met grote belangen.
            </p>
            <p>
              Arjan staat bekend om zijn vermogen om snel tot de kern te komen, overzicht te creëren en het gesprek weer terug te brengen naar de inhoud. Met gezag, maar zonder machtsvertoon. Met scherpte, maar altijd met oog voor de menselijke en bestuurlijke context. Dat maakt hem een stevige sparringpartner voor OR'en én een betrouwbare gesprekspartner richting bestuurders.
            </p>
            
            <div className="mt-8 pt-6 border-t border-slate-300">
              <h2 className="text-lg font-semibold text-slate-700 mb-3">Versterking van het bureau</h2>
              <p>
                De afgelopen periode is Rick Warmerdam toegetreden tot Taai-Consult. Rick is voor klanten doorgaans het eerste aanspreekpunt. Hij verzorgt het klantcontact en denkt mee over vragen rondom trainingen, masterclasses en ondersteuningstrajecten, maar ook over inhoudelijke situaties waar OR'en tegenaan lopen. Klanten kunnen bij Rick altijd terecht om te sparren, vragen te stellen of hun situatie te verkennen. De inhoudelijke begeleiding ligt bij Arjan, terwijl Rick het bureau organisatorisch en in het contact versterkt. Zo blijft de inhoud stevig verankerd en is er tegelijkertijd ruimte voor continuïteit en doorontwikkeling.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
            <p className="text-lg text-slate-700 leading-relaxed text-center">
              Taai-Consult is daarmee een bureau dat rust brengt waar het nodig is, scherpte toevoegt waar het moet, en altijd werkt vanuit zorgvuldigheid en vertrouwen.
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