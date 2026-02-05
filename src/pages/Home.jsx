import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import PageSection from '../components/PageSection';
import CTABlock from '../components/CTABlock';
import { Users, Target, BookOpen } from 'lucide-react';

export default function Home() {
  return (
    <>
      <SEO 
        title="Home"
        description="Taai-Consult biedt trainingen en ondersteuning voor OR-leden, commissies en bestuurders. Praktisch, juridisch scherp en gericht op betere gesprekken en besluiten."
        canonical="/"
      />

      <Hero 
        title="Trainingen en ondersteuning die ertoe doen"
        subtitle="Voor OR-leden, commissies en bestuurders die grip willen op complexe situaties"
      >
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Voor wie</h3>
          <p className="text-slate-300">
            OR-leden, VGW(M)-commissies, personeelsvertegenwoordigingen en bestuurders in holdings en ambtelijke organisaties.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Wat het oplevert</h3>
          <p className="text-slate-300">
            Rust en regie in complexe reorganisaties, fusies en verandertrajecten. Gesprekken die leiden tot betere besluiten.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-3">Hoe we werken</h3>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Praktisch en juridisch scherp (WOR-context)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Trainingen die gesprekken en besluiten beter maken</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Rust en regie in complexe situaties</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/Contact#plan" 
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
            data-cta="plan_kennismaking"
          >
            Plan kennismaking
          </Link>
          <Link 
            to="/Contact#brochure" 
            className="px-8 py-3 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors font-medium text-center"
            data-cta="vraag_brochure"
          >
            Vraag brochure
          </Link>
        </div>
      </Hero>

      <PageSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Onze diensten</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Van startende OR-leden tot ervaren commissieleden: wij bieden trainingen, workshops en ondersteuning op maat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <Users className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Trainingen OR</h3>
            <p className="text-slate-600 mb-4">
              Van OR-start tot onderhandelen over een sociaal plan. Alles wat je nodig hebt om effectief mede te beslissen.
            </p>
            <Link to="/TrainingenVoorDeOr" className="text-blue-600 hover:text-blue-700 font-medium">
              Bekijk trainingen →
            </Link>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <Target className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Vaardigheden & Commissies</h3>
            <p className="text-slate-600 mb-4">
              Vergadertechnieken, lobbyen, VGW(M)-training. Vaardigheden die het verschil maken in complexe gesprekken.
            </p>
            <Link to="/VaardighedenVoorDeOr" className="text-blue-600 hover:text-blue-700 font-medium">
              Bekijk vaardigheden →
            </Link>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Workshops & Masterclasses</h3>
            <p className="text-slate-600 mb-4">
              Op maat gemaakte workshops en verdiepende masterclasses voor ervaren OR-leden en commissies.
            </p>
            <Link to="/Workshops" className="text-blue-600 hover:text-blue-700 font-medium">
              Bekijk workshops →
            </Link>
          </div>
        </div>
      </PageSection>

      <PageSection background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Specialisaties</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We kennen de uitdagingen in specifieke sectoren en organisaties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Link 
            to="/MedezeggenschapHoldings"
            className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Medezeggenschap in Holdings</h3>
            <p className="text-slate-600 text-sm">Complexe structuren vragen om heldere rollen en mandaten</p>
          </Link>

          <Link 
            to="/MedezeggenschapAmbtelijk"
            className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Ambtelijke Organisaties</h3>
            <p className="text-slate-600 text-sm">Publieke sector met eigen dynamiek en spelregels</p>
          </Link>

          <Link 
            to="/VernieuwendMedezeggenschap"
            className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Vernieuwend Medezeggenschap</h3>
            <p className="text-slate-600 text-sm">Moderne vormen van participatie en invloed</p>
          </Link>
        </div>
      </PageSection>

      <CTABlock 
        title="Klaar voor verdieping?"
        subtitle="Plan een vrijblijvende kennismaking of vraag onze brochure aan"
      />
    </>
  );
}