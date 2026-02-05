import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Users, Target, GraduationCap, Briefcase, Building2, Lightbulb, BookOpen, CheckCircle, Award, Eye, Shield } from 'lucide-react';

export default function Home() {
  return (
    <>
      <SEO 
        title="Home"
        description="Taai-Consult biedt trainingen en ondersteuning voor OR-leden, commissies en bestuurders. Praktisch, juridisch scherp en gericht op betere gesprekken en besluiten."
        canonical="/"
      />

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-4xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Sterke medezeggenschap wanneer het ertoe doet.
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 mb-12 leading-relaxed">
              Voor OR-leden, commissies en bestuurders die sterker willen worden in het dagelijks overleg — en rust zoeken wanneer de belangen groot zijn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/Contact" 
                className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-center text-lg"
              >
                Plan een vrijblijvend gesprek
              </Link>
              <Link 
                to="/Diensten" 
                className="inline-block px-8 py-4 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors font-medium text-center text-lg"
              >
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
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-8">Rust, scherpte en impact.</h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Taai-Consult helpt OR's en commissies om invloed te vergroten — in het dagelijks overleg én wanneer de belangen groot zijn. Soms is een praktische training precies wat nodig is. Soms vraagt een dossier om rust en regie. We combineren ervaring, helderheid en juridische scherpte, zonder te juridiseren.
          </p>
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

      {/* Productlijnen */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/TrainingenVoorDeOr" className="group bg-white border border-slate-200 rounded-lg p-8 hover:border-blue-600 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Trainingen voor de OR</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk.
              </p>
            </Link>

            <Link to="/VaardighedenVoorDeOr" className="group bg-white border border-slate-200 rounded-lg p-8 hover:border-blue-600 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Vaardigheden OR</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk.
              </p>
            </Link>

            <Link to="/TrainingenVoorCommissies" className="group bg-white border border-slate-200 rounded-lg p-8 hover:border-blue-600 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Trainingen voor commissies</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk.
              </p>
            </Link>

            <Link to="/Masterclasses" className="group bg-white border border-slate-200 rounded-lg p-8 hover:border-blue-600 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Masterclasses</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk.
              </p>
            </Link>

            <Link to="/Workshops" className="group bg-white border border-slate-200 rounded-lg p-8 hover:border-blue-600 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Workshops</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Praktisch, interactief en direct toepasbaar in jullie eigen OR-praktijk.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Contexten */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">Contexten</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Link to="/MedezeggenschapHoldings" className="group bg-white border border-slate-200 rounded-lg p-8 hover:border-blue-600 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Medezeggenschap in een holding</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Inzicht en structuur in rollen, mandaten en besluitvorming binnen concerns.
              </p>
            </Link>

            <Link to="/MedezeggenschapAmbtelijk" className="group bg-white border border-slate-200 rounded-lg p-8 hover:border-blue-600 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Medezeggenschap in ambtelijke organisaties</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Scherpte met gevoel voor bestuurlijke dynamiek en context.
              </p>
            </Link>

            <Link to="/VernieuwendMedezeggenschap" className="group bg-white border border-slate-200 rounded-lg p-8 hover:border-blue-600 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Vernieuwend medezeggenschap</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Moderne vormen van medezeggenschap, met heldere spelregels en focus.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Werkwijze */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">Van analyse tot resultaat.</h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-16 left-0 right-0 h-px bg-slate-300" style={{width: 'calc(100% - 8rem)', left: '4rem'}}></div>
              
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
      <section className="bg-slate-50 py-24">
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
                  We zijn niet verbonden aan vakbonden of werkgeversorganisaties, en werken altijd in het belang van stevige medezeggenschap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voor wie we er zijn */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-slate-500 tracking-wider uppercase mb-4">Voor wie we er zijn</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Grip houden waar<br />
              <span className="font-bold">belangen groot zijn.</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Voor ondernemingsraden, ambtelijk secretarissen en organisaties die grip willen houden op besluitvorming, ook wanneer belangen hoog liggen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Ondernemingsraden</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Voor OR'en die het nu willen verstaan en het gesprek willen blijven voeren, oprecht nieuwsgierig naar het bedrijf.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Ambtelijk secretarissen</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Ondersteuning voor secretarissen die OR-processen willen professionaliseren, ondanks complexe besluiten.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Publieke organisaties</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Begeleiding bij medezeggenschap in gemeenten, provincies en waterschappen met transparante en zorgvuldige besluitvorming.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Non-profit & stichtingen</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Voor organisaties met een maatschappelijke missie, waar medezeggenschap vraagt om zorgvuldige afwegingen tussen waarden, mensen en continuïteit.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Private organisaties</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Voor bedrijven waar ondernemingsraad en directie samen werkvormen bouwen die passen bij groei, verandering of reorganisatie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Onze toegevoegde waarde */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-slate-400 tracking-wider uppercase mb-4">Onze toegevoegde waarde</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Van vraagstuk naar<br />
              <span className="font-bold">doordachte besluitvorming.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Zorgvuldige besluitvorming</h3>
              <div className="w-16 h-1 bg-blue-600 mb-4"></div>
              <p className="text-slate-300 leading-relaxed">
                Wij brengen structuur en helderheid in besluitvorming die vraagt om overzicht, afweging en timing.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Wetgeving en organisatie</h3>
              <div className="w-16 h-1 bg-blue-600 mb-4"></div>
              <p className="text-slate-300 leading-relaxed">
                Grondige WOR-kennis gecombineerd met praktische begeleiding, afgestemd op de context van de organisatie.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Verschillende perspectieven</h3>
              <div className="w-16 h-1 bg-blue-600 mb-4"></div>
              <p className="text-slate-300 leading-relaxed">
                Een onafhankelijke positie en menselijk inzicht om perspectieven te verbinden en het gesprek op niveau te voeren.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Versterking waar nodig</h3>
              <div className="w-16 h-1 bg-blue-600 mb-4"></div>
              <p className="text-slate-300 leading-relaxed">
                Direct inzetbare expertise en ondersteuning om rust, tempo en richting te behouden wanneer dit nodig is.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialisaties */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Specialisaties</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We kennen de uitdagingen in specifieke sectoren en organisaties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <Link to="/MedezeggenschapHoldings" className="group">
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-blue-600 hover:shadow-xl transition-all duration-300 h-full">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Medezeggenschap in holdings</h3>
                <p className="text-slate-600 leading-relaxed">
                  Complexe structuren vragen om heldere rollen en mandaten tussen verschillende medezeggenschapsniveaus.
                </p>
              </div>
            </Link>

            <Link to="/MedezeggenschapAmbtelijk" className="group">
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-blue-600 hover:shadow-xl transition-all duration-300 h-full">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ambtelijke organisaties</h3>
                <p className="text-slate-600 leading-relaxed">
                  Publieke sector met eigen dynamiek en spelregels vraagt om specifieke kennis en aanpak.
                </p>
              </div>
            </Link>

            <Link to="/VernieuwendMedezeggenschap" className="group">
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-blue-600 hover:shadow-xl transition-all duration-300 h-full">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Vernieuwend medezeggenschap</h3>
                <p className="text-slate-600 leading-relaxed">
                  Moderne vormen van participatie en invloed die aansluiten bij de hedendaagse organisatie.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Klaar om de volgende stap te zetten?</h2>
          <p className="text-xl text-slate-600 mb-10">
            Plan een kennismaking of vraag onze brochure aan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/Contact" 
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
            >
              Plan kennismaking
            </Link>
            <Link 
              to="/Contact" 
              className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-300 rounded-lg hover:border-slate-400 transition-colors font-medium text-lg"
            >
              Vraag brochure
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}