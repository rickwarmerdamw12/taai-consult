import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import PageSection from '../components/PageSection';

export default function Vertrouwenspersoon() {
  return (
    <>
      <SEO 
        title="Vertrouwenspersoon"
        description="Zorgvuldige rolvervulling bij sociale veiligheid, met oog voor mens, organisatie en juridische context."
        canonical="/vertrouwenspersoon"
      />

      <Hero 
        title="Vertrouwenspersoon: tussen vertrouwen en verantwoordelijkheid"
        subtitle="Zorgvuldige rolvervulling bij sociale veiligheid, met oog voor mens, organisatie en juridische context."
      />

      <PageSection>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="prose prose-lg text-slate-600 space-y-4 leading-relaxed">
                <p>
                  De vertrouwenspersoon vervult een bijzondere rol binnen organisaties. Als laagdrempelig aanspreekpunt biedt hij of zij ruimte aan ervaringen die vaak niet direct een oplossing vragen, maar wel zorgvuldige aandacht en duiding.
                </p>
                <p>
                  Die rol vraagt meer dan betrokkenheid of goede bedoelingen. Zij vraagt kennis van grenzen, inzicht in organisatiecontext en het vermogen om professioneel nabij te zijn zonder verantwoordelijkheden over te nemen. Juist door die zorgvuldige positionering kan de vertrouwenspersoon bijdragen aan sociale veiligheid en vertrouwen binnen de organisatie.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69846ad3327fab0348385a7d/36c726a61_DSCF1019.jpg" 
                alt="Vertrouwenspersoon training" 
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
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Visie op de rol van de vertrouwenspersoon</h2>
          <div className="prose prose-lg text-slate-600 space-y-4 leading-relaxed">
            <p>
              De rol van de vertrouwenspersoon is ondersteunend en verkennend, niet oplossend of beslissend. De regie ligt altijd bij de melder. De vertrouwenspersoon luistert, verduidelijkt en helpt om ervaringen te ordenen, zonder te sturen op uitkomst of richting.
            </p>
            <p>
              Vertrouwelijkheid vormt het fundament van het werk, binnen de grenzen van wet- en regelgeving. Tegelijk vraagt de rol om duidelijke begrenzing. De vertrouwenspersoon is geen onderzoeker, geen mediator en geen besluitvormer. Juist door deze rolzuiverheid kan de functie duurzaam bijdragen aan preventie, zorgvuldigheid en vertrouwen binnen organisaties.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Wettelijk en organisatorisch kader</h2>
          <div className="prose prose-lg text-slate-600 space-y-4 leading-relaxed">
            <p>
              Sociale veiligheid is geen vrijblijvende ambitie, maar onderdeel van goed werkgeverschap. Organisaties hebben een zorgplicht voor een veilige werkomgeving, waaronder het voorkomen en beperken van psychosociale arbeidsbelasting.
            </p>
            <p>
              De vertrouwenspersoon opereert binnen dit kader, met oog voor wetgeving, interne regelingen en governance. Daarbij speelt ook de rol van medezeggenschap een belangrijke positie. De vertrouwenspersoon staat nooit los van de organisatiecontext, maar functioneert daarbinnen zorgvuldig en onafhankelijk.
            </p>
            <p>
              Deze samenhang vraagt om professionals die hun rol kennen, begrijpen en kunnen afbakenen.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Scholing en professionaliteit</h2>
          <div className="prose prose-lg text-slate-600 space-y-4 leading-relaxed">
            <p>
              Scholing is geen doel op zich, maar een middel om professioneel te kunnen handelen. De rol van vertrouwenspersoon vraagt om reflectie, kennis en vaardigheid, afgestemd op de context waarin iemand werkt.
            </p>
            <p>
              Taai-Consult benadert opleidingen vanuit dit perspectief. Geen standaardoplossingen, maar scholing die ondersteunt bij zorgvuldige rolvervulling en professioneel handelen in de praktijk.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Gecertificeerde opleiding vertrouwenspersoon – basis</h2>
          
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <div className="p-8">
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Deze gecertificeerde basisopleiding is bedoeld voor professionals die de rol van vertrouwenspersoon (gaan) vervullen en een stevige, zorgvuldige basis willen leggen.
              </p>
              
              <h3 className="text-lg font-semibold text-slate-900 mb-4">De opleiding behandelt onder andere:</h3>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                  <span>de positie en rol van de vertrouwenspersoon</span>
                </div>
                <div className="flex items-start gap-3 text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                  <span>het voeren van gesprekken en het omgaan met vertrouwelijkheid</span>
                </div>
                <div className="flex items-start gap-3 text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                  <span>begrenzing van verantwoordelijkheden</span>
                </div>
                <div className="flex items-start gap-3 text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                  <span>wet- en regelgeving rondom sociale veiligheid</span>
                </div>
                <div className="flex items-start gap-3 text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                  <span>doorverwijzen en samenwerken binnen de organisatiecontext</span>
                </div>
              </div>
              
              <p className="text-slate-600 leading-relaxed">
                Deze opleiding biedt voldoende basis om de rol van vertrouwenspersoon zorgvuldig en zelfstandig te kunnen vervullen.
              </p>
            </div>
            
            <div className="bg-slate-50 border-t border-slate-200 p-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Praktisch</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></div>
                  <span className="text-slate-700">Duur: 2 dagen</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></div>
                  <span className="text-slate-700">Op locatie</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></div>
                  <span className="text-slate-700">Kleine groepen</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></div>
                  <span className="text-slate-700">Certificaat van deelname</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Verdieping en bijscholing</h2>
          
          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Naast de basisopleiding zijn verdiepende trajecten en bijscholing mogelijk. Deze sluiten aan bij ervaring, werkomgeving en specifieke vraagstukken.
            </p>
            
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Denk aan:</h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                <span className="text-slate-700">verdiepende opleidingsniveaus</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                <span className="text-slate-700">workshops rond actuele thema's</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                <span className="text-slate-700">intervisie en reflectie</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                <span className="text-slate-700">werken met casuïstiek</span>
              </div>
            </div>
            
            <p className="text-slate-600 leading-relaxed">
              Verdieping is altijd contextafhankelijk en niet voor iedere vertrouwenspersoon noodzakelijk.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Achtergrond en ervaring</h2>
          
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-8 shadow-sm">
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p className="text-lg">
                De opleidingen en visie van Taai-Consult zijn ontwikkeld en worden inhoudelijk gedragen door Arjan Warmerdam.
              </p>
              <p>
                Arjan is trainer en begeleider met meer dan 25 jaar ervaring op het gebied van medezeggenschap, organisatievraagstukken en sociale veiligheid. In die jaren heeft hij gewerkt met uiteenlopende organisaties, waaronder publieke instellingen en complexe organisatiestructuren.
              </p>
              <p>
                Hij staat bekend om zijn rustige benadering, inhoudelijke scherpte en aandacht voor rolzuiverheid. Altijd met oog voor de menselijke kant én de bestuurlijke en juridische context waarin professionals opereren.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Afstemming en vragen</h2>
          <p className="text-lg text-slate-600 text-center mb-8 leading-relaxed">
            Deze pagina is bedoeld om inzicht te geven in visie en opleidingen rondom de rol van vertrouwenspersoon. Voor vragen of afstemming over scholing of context kan altijd contact worden opgenomen.
          </p>
          <div className="flex justify-center">
            <Link 
              to="/Contact" 
              className="px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
            >
              Neem contact op
            </Link>
          </div>
        </div>
      </PageSection>
    </>
  );
}