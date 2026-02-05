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
        title="Alles om jullie medezeggenschap sterker te maken"
        subtitle="Van praktische trainingen en workshops tot begeleiding als het spannend wordt. Altijd toepasbaar, altijd met oog voor mensen en verhoudingen."
      />

      <PageSection>
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            Taai-Consult helpt OR's en commissies om invloed te vergroten — in het dagelijks overleg én wanneer de belangen groot zijn.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            Soms is een praktische training precies wat nodig is. Soms vraagt een dossier om rust en regie. We combineren ervaring, helderheid en juridische scherpte, zonder te juridiseren.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link to="/Contact" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-center">
              Plan kennismaking
            </Link>
            <Link to="/Contact" className="px-8 py-3 bg-white text-slate-900 border-2 border-slate-300 rounded-lg hover:border-slate-400 transition-colors font-medium text-center">
              Vraag brochure
            </Link>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Productlijnen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/TrainingenVoorDeOr" className="bg-white border border-slate-200 rounded-lg p-6 hover:border-blue-600 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Trainingen voor de OR</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk.
              </p>
            </Link>

            <Link to="/VaardighedenVoorDeOr" className="bg-white border border-slate-200 rounded-lg p-6 hover:border-blue-600 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Vaardigheden OR</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk.
              </p>
            </Link>

            <Link to="/TrainingenVoorCommissies" className="bg-white border border-slate-200 rounded-lg p-6 hover:border-blue-600 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Trainingen voor commissies</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk.
              </p>
            </Link>

            <Link to="/Masterclasses" className="bg-white border border-slate-200 rounded-lg p-6 hover:border-blue-600 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Masterclasses</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk.
              </p>
            </Link>

            <Link to="/Workshops" className="bg-white border border-slate-200 rounded-lg p-6 hover:border-blue-600 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Workshops</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk.
              </p>
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Contexten</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/MedezeggenschapHoldings" className="bg-white border border-slate-200 rounded-lg p-6 hover:border-blue-600 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Medezeggenschap in een holding</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Inzicht en structuur in rollen, mandaten en besluitvorming binnen concerns.
              </p>
            </Link>

            <Link to="/MedezeggenschapAmbtelijk" className="bg-white border border-slate-200 rounded-lg p-6 hover:border-blue-600 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Medezeggenschap in ambtelijke organisaties</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Scherpte met gevoel voor bestuurlijke dynamiek en context.
              </p>
            </Link>

            <Link to="/VernieuwendMedezeggenschap" className="bg-white border border-slate-200 rounded-lg p-6 hover:border-blue-600 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Vernieuwend medezeggenschap</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Moderne vormen van medezeggenschap, met heldere spelregels en focus.
              </p>
            </Link>
          </div>
        </div>
      </PageSection>

      <CTABlock />
    </>
  );
}