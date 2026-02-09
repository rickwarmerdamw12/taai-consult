import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import PageSection from '../components/PageSection';
import CTABlock from '../components/CTABlock';

export default function MedezeggenschapHoldings() {
  return (
    <>
      <SEO 
        title="Medezeggenschap in Holdings"
        description="Medezeggenschap in holdings en concernstructuren vraagt om heldere rollen en mandaten. Taai-Consult helpt OR'en grip te krijgen op complexe structuren."
        canonical="/themas/medezeggenschap-holdings"
      />

      <Hero 
        title="Medezeggenschap in holdings en concerns"
        subtitle="Duidelijkheid over rollen, mandaten en besluitvorming in complexe organisatiestructuren."
      >
        <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-3xl">
          In holdings en concerns is medezeggenschap zelden eenvoudig georganiseerd. Besluitvorming vindt plaats op meerdere niveaus, terwijl invloed, verantwoordelijkheid en overlegstructuren niet altijd samenvallen.
        </p>
      </Hero>

      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Waarom medezeggenschap in holdings complex is</h2>
          <div className="prose prose-lg text-slate-600 space-y-4 leading-relaxed">
            <p>
              In organisaties met meerdere entiteiten, holdings of internationale structuren ontstaat al snel onduidelijkheid over waar besluiten worden genomen en wie daar invloed op heeft. Formele medezeggenschap is vaak georganiseerd op één niveau, terwijl feitelijke zeggenschap elders ligt.
            </p>
            <p>
              Dat roept vragen op over mandaten, rolverdeling en de positie van de OR, COR of EOR. Zonder heldere afspraken ontstaat het risico dat medezeggenschap te laat wordt betrokken of onvoldoende impact heeft.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Wat dit betekent voor de OR</h2>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span>onduidelijkheid over waar invloed effectief kan worden uitgeoefend</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span>spanning tussen formele bevoegdheden en feitelijke besluitvorming</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span>afstemming tussen lokale OR'en, COR en EOR</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span>complexiteit bij reorganisaties, fusies en overnames</span>
            </li>
          </ul>
        </div>
      </PageSection>

      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Onze benadering</h2>
          <p className="text-slate-600 leading-relaxed">
            Wij benaderen medezeggenschap in holdings vanuit de concrete organisatiecontext. We helpen OR'en en commissies inzicht te krijgen in besluitvormingslijnen, verantwoordelijkheden en juridische kaders, met als doel medezeggenschap werkbaar en effectief te houden.
          </p>
        </div>
      </PageSection>

      <PageSection background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Subthema's binnen medezeggenschap in holdings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Europese ondernemingsraad (EOR)</h3>
              <p className="text-slate-600">
                Wanneer is een EOR verplicht en hoe werkt die in de praktijk?
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Feitelijke zeggenschap</h3>
              <p className="text-slate-600">
                Hoe pas je de WOR toe als het besluit niet formeel in Nederland valt?
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Fusie & overname (M&A)</h3>
              <p className="text-slate-600">
                Wat zijn de spelregels bij fusies, overnames en herstructureringen?
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">COR / concern-OR</h3>
              <p className="text-slate-600">
                Hoe richt je een COR in en hoe verhoudt die zich tot lokale OR'en?
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Complexe reorganisaties</h3>
              <p className="text-slate-600">
                Hoe bewaak je medezeggenschap bij grote structuurwijzigingen?
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      <CTABlock 
        title="Vragen over medezeggenschap in jullie organisatie?"
        subtitle="Een kennismaking is vrijblijvend en bedoeld om samen te verkennen welke vragen spelen binnen jullie structuur."
      />
    </>
  );
}