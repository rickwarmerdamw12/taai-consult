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
        subtitle="Zorgvuldig en juridisch onderbouwd, met oog voor bestuurlijke verhoudingen én de menselijke kant van medezeggenschap."
      />

      <PageSection>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Wie we zijn</h2>
              <div className="prose prose-lg text-slate-600 space-y-4 leading-relaxed">
                <p>
                  TAAI-Consult ondersteunt ondernemingsraden en commissies bij medezeggenschapsvraagstukken die ertoe doen. Dat kan gaan om het dagelijkse overleg en reguliere adviestrajecten, maar ook om situaties waarin belangen groot zijn, de druk toeneemt en zorgvuldigheid bepalend is. Wij brengen overzicht, rust en richting wanneer het proces daarom vraagt.
                </p>

                <p className="leading-relaxed">
                  Op zoek naar een <Link to="/or-training" style={{ color: '#2F5B4C', fontWeight: 600 }}>OR-training op maat</Link>? Bekijk onze aanpak en mogelijkheden.
                </p>
                <p>
                  Onze kracht ligt in de combinatie van inhoudelijke scherpte en gevoel voor de organisatorische en bestuurlijke context. Juridische kennis is daarbij geen doel op zich, maar een middel om tot werkbare oplossingen te komen die recht doen aan wet- en regelgeving én aan de verhoudingen binnen de organisatie.
                </p>
                <p>
                  Wij helpen ondernemingsraden hun rol zorgvuldig en met gezag te vervullen, met oog voor de menselijke kant van besluitvorming en samenwerking.
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
              TAAI-Consult is opgericht en wordt inhoudelijk geleid door Arjan Warmerdam. Met meer dan 25 jaar ervaring in de medezeggenschap begeleidt hij ondernemingsraden en commissies binnen een breed scala aan organisaties: van kleinere instellingen tot grote (internationale) ondernemingen en publieke organisaties.
            </p>
            <p>
              Hij werkte aan reorganisaties, fusies, complexe adviestrajecten en samenwerkingsvraagstukken, vaak onder hoge druk en met uiteenlopende belangen.
            </p>
            <p>
              Arjan staat bekend om zijn vermogen om snel tot de kern te komen, overzicht te creëren en het gesprek terug te brengen naar inhoud en proces. Met gezag, zonder machtsvertoon. Met scherpte, en altijd met oog voor de menselijke en bestuurlijke context.
            </p>
            <p>
              Dat maakt hem voor ondernemingsraden een stevige sparringpartner en voor bestuurders een betrouwbare gesprekspartner.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Versterking van het bureau</h2>
          <div className="prose prose-lg text-slate-600 space-y-4 leading-relaxed">
            <p>
              Rick Warmerdam is toegetreden tot TAAI-Consult en vormt samen met Arjan de volgende generatie binnen het bureau. Hij is voor veel klanten het eerste aanspreekpunt en verzorgt de afstemming rondom trainingen en ondersteuningstrajecten.
            </p>
            <p>
              Rick denkt inhoudelijk mee over opzet, programma's en leerdoelen en bouwt zich stap voor stap op in het vak van medezeggenschapsbegeleiding. De komende jaren zal hij naast zijn rol in organisatie en klantcontact ook steeds actiever betrokken zijn bij trainingen en trajecten.
            </p>
            <p>
              Zo combineert TAAI-Consult ervaring en continuïteit met ontwikkeling en vernieuwing. De inhoudelijke kwaliteit blijft stevig verankerd, terwijl er bewust wordt gebouwd aan de toekomst van het bureau.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
            <p className="text-lg text-slate-700 leading-relaxed text-center">
              TAAI-Consult brengt rust waar nodig, scherpte waar het moet en werkt altijd vanuit zorgvuldigheid en vertrouwen.
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
                Wij adviseren vanuit professionele autonomie en zorg voor de kwaliteit van medezeggenschap.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Menselijke benadering</h3>
              <p className="text-slate-600">
                Wij combineren juridische en strategische kennis met oog voor mensen, organisatie en verhoudingen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Rust en scherpte</h3>
              <p className="text-slate-600">
                Wanneer het complex wordt, brengen wij overzicht, focus en zorgvuldigheid in het proces.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Waar wij actief zijn</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Medezeggenschapsorganen</h3>
              <p className="text-slate-600">
                OR, GOR, COR en EOR binnen het bedrijfsleven en de publieke sector.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Commissies van ondernemingsraden</h3>
              <p className="text-slate-600">
                VGW(M), financieel-economisch, reorganisatiecommissies en andere thematische werkgroepen.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Individuele OR-leden en het dagelijks bestuur</h3>
              <p className="text-slate-600">
                Voor persoonlijke begeleiding, positionering en reflectie.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Bestuurlijke en HR-context</h3>
              <p className="text-slate-600">
                Bij vraagstukken rond governance, besluitvorming en de inrichting van medezeggenschap.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      <CTABlock 
        title="Klaar om te starten?"
        subtitle="In gesprek over wat passend is? Wij verkennen graag welke ondersteuning aansluit bij jullie organisatie."
      />
    </>
  );
}