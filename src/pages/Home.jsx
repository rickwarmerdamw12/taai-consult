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
      <div className="relative text-white" style={{ background: 'linear-gradient(135deg, #1F3F35 0%, #2F5B4C 50%, #1F3F35 100%)' }}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-4xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight"><span className="font-normal">Training en ondersteuning</span> voor ondernemingsraden

            </h1>
            <p className="text-xl sm:text-2xl mb-12 leading-relaxed" style={{ color: '#DCE5E0' }}>Praktisch, zorgvuldig en onafhankelijk — voor OR'en die hun rol goed willen vervullen, in gewone én complexere situaties.

            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/Contact"
                className="inline-block px-8 py-4 text-white rounded-lg transition-colors font-medium text-center text-lg"
                style={{ background: 'linear-gradient(90deg, #2F5B4C 0%, #1C3A30 100%)' }}>

                Plan een vrijblijvend gesprek
              </Link>
              <Link
                to="/Diensten"
                className="inline-block px-8 py-4 rounded-lg transition-colors font-medium text-center text-lg"
                style={{ backgroundColor: 'white', color: '#2E2E2E' }}>

                Bekijk onze diensten
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient transition */}
      <div className="h-32" style={{ background: 'linear-gradient(to bottom, #1F3F35, white)' }}></div>

      {/* Verhaalblok */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold tracking-wider uppercase mb-4" style={{ color: '#6F8F80' }}>Taai-Consult</p>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8" style={{ color: '#1F3F35' }}>Onze aanpak in de praktijk</h2>
              
              <div className="prose prose-xl space-y-6" style={{ color: '#2E2E2E' }}>
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
            
            <div className="relative">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69846ad3327fab0348385a7d/4b7797aed_DSCF0500.jpg" 
                alt="Training in de praktijk" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-lg opacity-10" style={{ backgroundColor: '#6F8F80' }}></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-lg opacity-10" style={{ backgroundColor: '#1F3F35' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Twee smaken */}
      <section className="py-24" style={{ backgroundColor: '#DCE5E0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-12" style={{ border: '1px solid #AFC1B7' }}>
              <h3 className="text-3xl font-bold mb-6" style={{ color: '#1F3F35' }}>Training & professionalisering</h3>
              <div className="space-y-3">
                <Link to="/TrainingenVoorDeOr" className="block font-medium text-lg" style={{ color: '#2F5B4C' }}>
                  Trainingen voor de OR →
                </Link>
                <Link to="/VaardighedenVoorDeOr" className="block font-medium text-lg" style={{ color: '#2F5B4C' }}>
                  Vaardigheden OR →
                </Link>
                <Link to="/TrainingenVoorCommissies" className="block font-medium text-lg" style={{ color: '#2F5B4C' }}>
                  Trainingen voor commissies →
                </Link>
              </div>
            </div>

            <div className="text-white rounded-xl p-12" style={{ backgroundColor: '#1F3F35' }}>
              <h3 className="text-3xl font-bold mb-6">Hoge belangen & begeleiding</h3>
              <Link to="/ORondersteuning" className="block font-medium text-lg mb-6" style={{ color: '#AFC1B7' }}>
                OR-ondersteuning →
              </Link>
              <p className="leading-relaxed" style={{ color: '#DCE5E0' }}>
                Rust en regie in spannende dossiers — en ook vroeg aangehaakt om escalatie te voorkomen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wanneer het spannend wordt */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8" style={{ color: '#1F3F35' }}>Wanneer het spannend wordt</h2>
          
          <div className="prose prose-lg space-y-6" style={{ color: '#2E2E2E' }}>
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
              className="inline-flex items-center gap-2 font-medium text-lg"
              style={{ color: '#2F5B4C' }}
            >
              Lees meer over OR-ondersteuning wanneer het spannend wordt →
            </Link>
          </div>
        </div>
      </section>

      {/* Werkwijze */}
      <section className="py-24" style={{ backgroundColor: '#DCE5E0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold" style={{ color: '#1F3F35' }}>Van analyse tot resultaat.</h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-16 left-0 right-0 h-px" style={{ backgroundColor: '#6F8F80', width: 'calc(100% - 8rem)', left: '4rem' }}></div>
              
              <div className="relative bg-white rounded-lg p-10" style={{ border: '1px solid #AFC1B7' }}>
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mb-8 text-2xl font-bold relative z-10" style={{ border: '2px solid #1F3F35', color: '#1F3F35' }}>
                  01
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#1F3F35' }}>Analyse</h3>
                <p className="leading-relaxed" style={{ color: '#2E2E2E' }}>
                  We brengen de situatie zorgvuldig in kaart en stellen de juiste vragen.
                </p>
              </div>

              <div className="relative bg-white rounded-lg p-10" style={{ border: '1px solid #AFC1B7' }}>
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mb-8 text-2xl font-bold relative z-10" style={{ border: '2px solid #1F3F35', color: '#1F3F35' }}>
                  02
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#1F3F35' }}>Maatwerk</h3>
                <p className="leading-relaxed" style={{ color: '#2E2E2E' }}>
                  Geen standaardoplossingen, maar begeleiding die aansluit bij jullie vraagstuk, context en ambities.
                </p>
              </div>

              <div className="relative bg-white rounded-lg p-10" style={{ border: '1px solid #AFC1B7' }}>
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mb-8 text-2xl font-bold relative z-10" style={{ border: '2px solid #1F3F35', color: '#1F3F35' }}>
                  03
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#1F3F35' }}>Impact</h3>
                <p className="leading-relaxed" style={{ color: '#2E2E2E' }}>
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
            <h2 className="text-4xl sm:text-5xl font-bold" style={{ color: '#1F3F35' }}>Wat ons onderscheidt</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-white rounded-lg flex items-center justify-center" style={{ border: '1px solid #AFC1B7' }}>
                <Award className="w-7 h-7" style={{ color: '#6F8F80' }} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#1F3F35' }}>Ervaring & kennis</h3>
                <p className="text-lg leading-relaxed" style={{ color: '#2E2E2E' }}>
                  Jarenlange ervaring met medezeggenschap in holdings, ambtelijke organisaties en complexe verandertrajecten.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-white rounded-lg flex items-center justify-center" style={{ border: '1px solid #AFC1B7' }}>
                <Eye className="w-7 h-7" style={{ color: '#6F8F80' }} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#1F3F35' }}>Breed perspectief</h3>
                <p className="text-lg leading-relaxed" style={{ color: '#2E2E2E' }}>
                  We begrijpen zowel de OR-kant als de bestuurlijke dynamiek, en weten wat er nodig is voor goede samenwerking.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-white rounded-lg flex items-center justify-center" style={{ border: '1px solid #AFC1B7' }}>
                <Shield className="w-7 h-7" style={{ color: '#6F8F80' }} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#1F3F35' }}>Onafhankelijk & betrouwbaar</h3>
                <p className="text-lg leading-relaxed" style={{ color: '#2E2E2E' }}>
                  We zijn niet verbonden aan vakbonden of werkgeversorganisaties, en werken altijd in het belang van zorgvuldige medezeggenschap met gezag.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Final CTA */}
      <section className="py-24" style={{ backgroundColor: '#DCE5E0' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#1F3F35' }}>Klaar om de volgende stap te zetten?</h2>
          <p className="text-xl mb-10" style={{ color: '#2E2E2E' }}>
            Plan een kennismaking of vraag onze brochure aan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/Contact" className="px-8 py-4 text-white rounded-lg transition-colors font-medium text-lg" style={{ background: 'linear-gradient(90deg, #2F5B4C 0%, #1C3A30 100%)' }}>

              Plan kennismaking
            </Link>
            <Link to="/Contact" className="px-8 py-4 bg-white rounded-lg transition-colors font-medium text-lg" style={{ color: '#2E2E2E', border: '2px solid #6F8F80' }}>

              Vraag brochure
            </Link>
          </div>
        </div>
      </section>
    </>);

}