import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import PageSection from '../components/PageSection';
import CTABlock from '../components/CTABlock';
import { Users, Target, Lightbulb, GraduationCap, Briefcase } from 'lucide-react';

export default function Diensten() {
  return (
    <>
      <SEO 
        title="Diensten"
        description="Trainingen, workshops en ondersteuning voor OR-leden, commissies en bestuurders. Van starttraining tot masterclass en advies op maat."
        canonical="/diensten"
      />

      <Hero 
        title="Onze diensten"
        subtitle="Van starttraining tot masterclass en strategisch advies"
      />

      <PageSection>
        <div className="space-y-12">
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Trainingen voor de OR</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Alles wat je nodig hebt om als OR effectief te functioneren: van OR-start tot onderhandelen over reorganisaties en sociale plannen. Praktisch en juridisch scherp.
              </p>
              <Link to="/diensten/trainingen-voor-de-or" className="text-blue-600 hover:text-blue-700 font-medium">
                Bekijk trainingen →
              </Link>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Vaardigheden voor de OR</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Vergadertechnieken, presenteren, lobbyen, netwerken. Vaardigheden die het verschil maken in complexe gesprekken en besluitvorming.
              </p>
              <Link to="/diensten/vaardigheden-voor-de-or" className="text-blue-600 hover:text-blue-700 font-medium">
                Bekijk vaardigheden →
              </Link>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-blue-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Trainingen voor Commissies</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                VGW(M)-commissies, personeelsvertegenwoordigingen en andere commissies krijgen gerichte trainingen voor hun specifieke taken en bevoegdheden.
              </p>
              <Link to="/diensten/trainingen-voor-commissies" className="text-blue-600 hover:text-blue-700 font-medium">
                Bekijk commissietrainingen →
              </Link>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
              <Lightbulb className="w-8 h-8 text-blue-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Workshops</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Op maat gemaakte interactieve sessies over actuele thema's: van hybride werken tot reorganisatie-aanpak. Direct toepasbaar in jullie situatie.
              </p>
              <Link to="/diensten/workshops" className="text-blue-600 hover:text-blue-700 font-medium">
                Bekijk workshops →
              </Link>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-blue-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Masterclasses</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Verdiepende sessies voor ervaren OR-leden en commissies. Focus op strategisch denken, complexe juridische vraagstukken en bestuurlijke vaardigheden.
              </p>
              <Link to="/diensten/masterclasses" className="text-blue-600 hover:text-blue-700 font-medium">
                Bekijk masterclasses →
              </Link>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
              <Briefcase className="w-8 h-8 text-blue-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">OR-ondersteuning</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Advies, interim en coaching voor OR'en die extra ondersteuning nodig hebben bij complexe dossiers, conflict of organisatieverandering.
              </p>
              <Link to="/diensten/or-ondersteuning" className="text-blue-600 hover:text-blue-700 font-medium">
                Bekijk ondersteuning →
              </Link>
            </div>
          </div>
        </div>
      </PageSection>

      <CTABlock />
    </>
  );
}