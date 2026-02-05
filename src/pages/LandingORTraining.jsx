import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import PageSection from '../components/PageSection';
import Accordion from '../components/Accordion';
import { CheckCircle } from 'lucide-react';

export default function LandingORTraining() {
  const faqs = [
    { title: "Voor wie is deze training?", content: "Voor nieuwe en zittende OR-leden die hun kennis willen versterken. Geen voorkennis vereist." },
    { title: "Wat levert het op?", content: "Praktische vaardigheden en juridische kennis om effectief te opereren als OR. Direct toepasbaar in jullie organisatie." },
    { title: "Hoe lang duurt de training?", content: "De basistraining duurt 2 dagen. We bieden ook maatwerktrajecten van 3-5 dagdelen verspreid over meerdere weken." }
  ];

  return (
    <>
      <SEO 
        title="OR-training | Start effectief als OR-lid"
        description="Word een effectief OR-lid. Praktische training met juridische basis (WOR), onderhandelingstechnieken en directe toepassing. Plan je kennismaking."
        canonical="/lp/or-training"
        noindex={true}
      />

      <Hero 
        title="Word een effectief OR-lid"
        subtitle="Praktisch en juridisch scherp. Start met vertrouwen."
      >
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Voor wie</h3>
          <p className="text-slate-300">
            Nieuwe OR-leden die snel en praktisch willen leren hoe ze invloed kunnen hebben op besluitvorming in hun organisatie.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-3">Wat je leert</h3>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
              <span>Praktisch en juridisch scherp (WOR-context)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
              <span>Onderhandelen en gesprekken voeren die ertoe doen</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
              <span>Rust en regie in complexe situaties</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/contact#plan" 
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
            data-cta="lp_or_training_plan"
          >
            Plan kennismaking
          </Link>
          <Link 
            to="/contact#brochure" 
            className="px-8 py-3 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors font-medium text-center"
            data-cta="lp_or_training_brochure"
          >
            Vraag brochure
          </Link>
        </div>
      </Hero>

      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Het probleem</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">
              Je bent gekozen in de OR. Gefeliciteerd! Maar nu? Wat zijn je taken, wat mag je wel en niet, en hoe voer je effectief gesprekken met bestuur en management?
            </p>
            <p className="mb-4">
              Veel nieuwe OR-leden worstelen met de juridische kaders (WOR), onderhandelingstechnieken en de balans tussen formele bevoegdheden en informele invloed.
            </p>
            <p>
              Het gevolg: je loopt achter de feiten aan, voelt je onzeker in gesprekken, en hebt het gevoel dat je te weinig impact maakt.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">De oplossing</h2>
          <p className="text-lg text-slate-600 mb-8">
            Onze OR-training geeft je in 2 dagen de juridische basis én praktische vaardigheden om effectief te opereren als OR-lid.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Dag 1: Juridische basis</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• WOR-kaders en bevoegdheden OR</li>
                <li>• Adviesrecht en instemmingsrecht</li>
                <li>• Dossieropbouw en informatierecht</li>
                <li>• Praktijkcases uit jullie sector</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Dag 2: Praktische vaardigheden</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Onderhandelen met bestuur</li>
                <li>• Gespreksvaardigheden en tactiek</li>
                <li>• Contact met achterban</li>
                <li>• Oefenen met echte situaties</li>
              </ul>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Waarom Taai-Consult?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Ervaring</h3>
              <p className="text-slate-600 text-sm">
                Jarenlange ervaring in medezeggenschap, profit, non-profit en publieke sector.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Maatwerk</h3>
              <p className="text-slate-600 text-sm">
                Training op maat, afgestemd op jullie organisatie en concrete leervragen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Direct toepasbaar</h3>
              <p className="text-slate-600 text-sm">
                Praktische handvatten die je direct kunt gebruiken in jullie OR-werk.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection background="gray">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Veelgestelde vragen</h2>
          <Accordion items={faqs} />
        </div>
      </PageSection>

      <PageSection>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Klaar om te starten?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Plan een vrijblijvende kennismaking of vraag onze brochure aan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact#plan" 
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              data-cta="lp_or_training_plan_bottom"
            >
              Plan kennismaking
            </Link>
            <Link 
              to="/contact#brochure" 
              className="px-8 py-3 bg-white text-slate-900 border-2 border-slate-300 rounded-lg hover:border-slate-400 transition-colors font-medium"
              data-cta="lp_or_training_brochure_bottom"
            >
              Vraag brochure
            </Link>
          </div>
        </div>
      </PageSection>
    </>
  );
}