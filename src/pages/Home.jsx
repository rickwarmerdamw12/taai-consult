import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Users, Target, GraduationCap, Briefcase, Building2, Lightbulb, BookOpen, CheckCircle, Award, Eye, Shield } from 'lucide-react';

export default function Home() {
  return (
    <>
      <SEO
        title="OR ondersteuning bij besluitvorming | Taai-Consult"
        description="Taai-Consult biedt trainingen en ondersteuning voor OR-leden, commissies en bestuurders. Onafhankelijk, zorgvuldig en ervaren adviseur voor medezeggenschap."
        canonical="/" />


      {/* Hero */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-4xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight"><span className="font-normal">Training en ondersteuning</span> voor ondernemingsraden

            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 mb-12 leading-relaxed">Praktisch, zorgvuldig en onafhankelijk — voor OR'en die hun rol goed willen vervullen, in gewone én complexere situaties.

            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/Contact"
                className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-center text-lg">

                Plan een vrijblijvend gesprek
              </Link>
              <Link
                to="/Diensten"
                className="inline-block px-8 py-4 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors font-medium text-center text-lg">

                Bekijk onze diensten
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Verhaalblok */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-slate-500 tracking-wider uppercase mb-4">Taai-Consult</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-8">Onze aanpak in de praktijk</h2>
          
          <div className="prose prose-xl text-slate-600 space-y-6">
            <p className="leading-relaxed">
              Taai-Consult helpt OR'en en commissies om hun rol goed en met vertrouwen te vervullen. Dat doen we door training en ondersteuning te bieden die aansluit bij de praktijk van het OR-werk.
            </p>
            
            <p className="leading-relaxed">
              Training vormt vaak de basis. Gericht op herkenbare situaties, praktische kennis en vaardigheden die direct toepasbaar zijn in het overleg en de samenwerking binnen de organisatie.
            </p>
            
            <p className="leading-relaxed">
              Daarnaast ondersteunen wij OR'en en commissies bij vraagstukken die meer verdieping vragen. We helpen bij het creëren van overzicht en het kiezen van een zorgvuldige aanpak, altijd afgestemd op de specifieke context.
            </p>
            
            <p className="leading-relaxed">
              In alle gevallen werken wij praktisch en onafhankelijk, met oog voor samenwerking en de verhoudingen binnen de organisatie.
            </p>
          </div>
        </div>
      </section>

      {/* Twee smaken */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-12 border border-slate-200">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Training & professionalisering</h3>
              <div className="space-y-3">
                <Link to="/TrainingenVoorDeOr" className="block text-blue-600 hover:text-blue-700 font-medium text-lg">
                  Trainingen voor de OR →
                </Link>
                <Link to="/VaardighedenVoorDeOr" className="block text-blue-600 hover:text-blue-700 font-medium text-lg">
                  Vaardigheden OR →
                </Link>
                <Link to="/TrainingenVoorCommissies" className="block text-blue-600 hover:text-blue-700 font-medium text-lg">
                  Trainingen voor commissies →
                </Link>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-xl p-12">
              <h3 className="text-3xl font-bold mb-6">Hoge belangen & begeleiding</h3>
              <Link to="/ORondersteuning" className="block text-blue-400 hover:text-blue-300 font-medium text-lg mb-6">
                OR-ondersteuning →
              </Link>
              <p className="text-slate-300 leading-relaxed">
                Rust en regie in spannende dossiers — en ook vroeg aangehaakt om escalatie te voorkomen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wanneer het spannend wordt */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">Wanneer het spannend wordt</h2>
          
          <div className="prose prose-lg text-slate-600 space-y-6">
            <p className="leading-relaxed">
              Er zijn situaties waarin medezeggenschap onder druk komt te staan. Niet omdat de OR zijn rol niet serieus neemt, maar omdat de omstandigheden complex zijn, de belangen groot en de tijd beperkt.
            </p>
            
            <p className="leading-relaxed">
              Dat zien we bij reorganisaties en herstructureringen, bij adviesaanvragen onder hoge tijdsdruk en in organisaties met complexe governance- of holdingstructuren. Ook in COR- en EOR-verband, waar nationale en internationale belangen samenkomen, neemt de complexiteit snel toe.
            </p>
            
            <p className="leading-relaxed">
              Wanneer daarbij de relatie tussen OR en bestuurder onder spanning komt te staan, ontstaat het risico dat zorgvuldigheid plaatsmaakt voor haast of escalatie. Juist dan maakt ervaring, overzicht en een doordachte aanpak het verschil.
            </p>
          </div>

          <div className="mt-10">
            <Link 
              to="/ORondersteuning"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-lg"
            >
              Lees meer over OR-ondersteuning wanneer het spannend wordt →
            </Link>
          </div>
        </div>
      </section>

      {/* Werkwijze */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">Van analyse tot resultaat.</h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-16 left-0 right-0 h-px bg-slate-300" style={{ width: 'calc(100% - 8rem)', left: '4rem' }}></div>
              
              <div className="relative bg-white rounded-lg p-10 border border-slate-200">
                <div className="w-20 h-20 bg-white border-2 border-slate-900 rounded-lg flex items-center justify-center mb-8 text-2xl font-bold relative z-10">
                  01
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Analyse</h3>
                <p className="text-slate-600 leading-relaxed">
                  We brengen de situatie zorgvuldig in kaart en stellen de juiste vragen.
                </p>
              </div>

              <div className="relative bg-white rounded-lg p-10 border border-slate-200">
                <div className="w-20 h-20 bg-white border-2 border-slate-900 rounded-lg flex items-center justify-center mb-8 text-2xl font-bold relative z-10">
                  02
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Maatwerk</h3>
                <p className="text-slate-600 leading-relaxed">
                  Geen standaardoplossingen, maar begeleiding die aansluit bij jullie vraagstuk, context en ambities.
                </p>
              </div>

              <div className="relative bg-white rounded-lg p-10 border border-slate-200">
                <div className="w-20 h-20 bg-white border-2 border-slate-900 rounded-lg flex items-center justify-center mb-8 text-2xl font-bold relative z-10">
                  03
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Impact</h3>
                <p className="text-slate-600 leading-relaxed">
                  Een versterkte rol van de OR en medezeggenschap die merkbaar bijdraagt aan besluitvorming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wat ons onderscheidt */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">Wat ons onderscheidt</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-white border border-slate-300 rounded-lg flex items-center justify-center">
                <Award className="w-7 h-7 text-slate-700" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Ervaring & kennis</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Jarenlange ervaring met medezeggenschap in holdings, ambtelijke organisaties en complexe verandertrajecten.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-white border border-slate-300 rounded-lg flex items-center justify-center">
                <Eye className="w-7 h-7 text-slate-700" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Breed perspectief</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We begrijpen zowel de OR-kant als de bestuurlijke dynamiek, en weten wat er nodig is voor goede samenwerking.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-white border border-slate-300 rounded-lg flex items-center justify-center">
                <Shield className="w-7 h-7 text-slate-700" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Onafhankelijk & betrouwbaar</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We zijn niet verbonden aan vakbonden of werkgeversorganisaties, en werken altijd in het belang van zorgvuldige medezeggenschap met gezag.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Final CTA */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Klaar om de volgende stap te zetten?</h2>
          <p className="text-xl text-slate-600 mb-10">
            Plan een kennismaking of vraag onze brochure aan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/Contact" className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg">

              Plan kennismaking
            </Link>
            <Link to="/Contact" className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-300 rounded-lg hover:border-slate-400 transition-colors font-medium text-lg">

              Vraag brochure
            </Link>
          </div>
        </div>
      </section>
    </>);

}