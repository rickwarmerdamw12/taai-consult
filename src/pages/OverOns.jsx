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
        canonical="/over-ons"
      />

      <Hero 
        title="Over Taai-Consult"
        subtitle="Praktisch en juridisch scherp, met oog voor de menselijke kant"
      />

      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Wie we zijn</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">
              Taai-Consult is gespecialiseerd in trainingen en ondersteuning voor OR-leden, commissies en bestuurders. We kennen de praktijk van medezeggenschap van binnenuit: complexe dossiers, politiek gevoelige situaties en de spanning tussen formele bevoegdheden en informele invloed.
            </p>
            <p className="mb-4">
              Onze trainers en adviseurs hebben jarenlange ervaring in medezeggenschap, arbeidsrecht en organisatieverandering. We combineren juridische kennis met praktische ervaring en oog voor de menselijke kant van verandering.
            </p>
            <p>
              We geloven in medezeggenschap die ertoe doet: OR'en die niet alleen formeel correct opereren, maar ook daadwerkelijk invloed hebben op besluitvorming en de organisatie verbeteren.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Onze werkwijze</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Praktisch en scherp</h3>
              <p className="text-slate-600">
                Juridisch correct én toepasbaar in de praktijk. Geen theorie voor de theorie, maar handvatten die werken.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Maatwerk</h3>
              <p className="text-slate-600">
                Geen standaard programma's, maar trainingen en advies op maat. Afgestemd op jullie situatie en leervragen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Ervaring</h3>
              <p className="text-slate-600">
                Jarenlange ervaring in medezeggenschap, profit, non-profit en publieke sector. We weten hoe het werkt.
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
                Van startende OR-leden tot ervaren voorzitters. Van VGW(M)-commissies tot personeelsvertegenwoordigingen. Iedereen die medezeggenschap serieus neemt.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Holdings en concerns</h3>
              <p className="text-slate-600">
                Centrale OR'en, groeps-OR'en en decentrale OR'en in complexe concernstructuren. We helpen grip krijgen op mandaten en besluitvormingsprocessen.
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
                Ook bestuurders en HR-adviseurs vinden hun weg naar ons. Voor advies over medezeggenschap, OR-ondersteuning en organisatieverandering.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      <CTABlock 
        title="Kennismaken?"
        subtitle="Plan een vrijblijvend gesprek om te bespreken hoe we jullie kunnen helpen"
      />
    </>
  );
}