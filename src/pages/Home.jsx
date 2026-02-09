import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <>
      <SEO 
        title="OR ondersteuning bij besluitvorming | Taai-Consult"
        description="Taai-Consult biedt trainingen en ondersteuning voor OR-leden, commissies en bestuurders. Onafhankelijk, zorgvuldig en ervaren adviseur voor medezeggenschap."
        canonical="/"
      />

      {/* 1. HERO */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Rust en regie in medezeggenschap wanneer belangen hoog zijn.
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 mb-10 leading-relaxed">
              Onafhankelijke begeleiding met ervaring in de bestuurlijke context — zorgvuldig en met gezag. Wij helpen ondernemingsraden en commissies invloed te vergroten: in het dagelijks overleg én wanneer besluitvorming spannend wordt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
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
            <Link to="/Contact" className="text-slate-300 hover:text-white underline">
              Vraag brochure aan →
            </Link>
            
            {/* Proof bullets */}
            <div className="mt-12 pt-8 border-t border-slate-700 space-y-3">
              <div className="flex items-start gap-3 text-slate-300">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Ervaring in holdings, ambtelijke organisaties en reorganisaties</span>
              </div>
              <div className="flex items-start gap-3 text-slate-300">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Onafhankelijk van vakbonden en werkgeversorganisaties</span>
              </div>
              <div className="flex items-start gap-3 text-slate-300">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Bestuurlijke scherpte, zonder te juridiseren</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. KORTE POSITIONERING */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-slate-700 leading-relaxed">
            Taai-Consult is een onafhankelijke adviespraktijk voor ondernemingsraden. We geloven dat goede medezeggenschap ontstaat wanneer inhoud, proces en verhoudingen kloppen — juist wanneer de druk toeneemt. De meeste OR's willen twee dingen tegelijk: goed overleg in het dagelijks werk én rust wanneer een dossier bestuurlijk spannend wordt. In die combinatie helpen wij: met trainingen die gesprekken beter maken, en met begeleiding die rust en regie brengt.
          </p>
        </div>
      </section>

      {/* 3. VOOR WIE WE ER ZIJN */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Voor wie we er zijn</h2>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            Wij werken voor organisaties en gremia die medezeggenschap serieus nemen — en waar besluiten ertoe doen. Onze expertise past vooral bij situaties waarin tempo, belangen en complexiteit om een doordachte aanpak vragen.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Ondernemingsraden</h3>
              <p className="text-slate-600 leading-relaxed">
                Versterk je rol en draag met gezag bij aan veranderingen. Voor OR's die invloed willen vergroten — in het dagelijks overleg én bij hoge druk.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Ambtelijk secretarissen</h3>
              <p className="text-slate-600 leading-relaxed">
                Faciliteer de OR professioneel en zorg voor zorgvuldige besluitvorming, ook onder tijdsdruk. Wij ondersteunen met inhoud, proces en positionering.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Publieke organisaties (gemeenten, provincies, overheid)</h3>
              <p className="text-slate-600 leading-relaxed">
                Medezeggenschap in de publieke sector vraagt om scherpte met gevoel voor bestuurlijke context. Wij kennen de dynamiek en helpen de medezeggenschap effectief opereren.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Non-profit & stichtingen</h3>
              <p className="text-slate-600 leading-relaxed">
                Maatschappelijke missie en verantwoordelijkheid vragen om medezeggenschap die waarden, mensen en continuïteit zorgvuldig afweegt. Wij denken mee in die complexiteit.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Private organisaties (groei, verandering, reorganisatie)</h3>
              <p className="text-slate-600 leading-relaxed">
                Een goede relatie tussen OR en directie helpt bij weloverwogen besluiten — zeker bij groei, verandering of herstructurering. Wij ondersteunen om het gesprek zuiver te houden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WANNEER HET SPANNEND WORDT */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Wanneer het spannend wordt</h2>
          <p className="text-lg text-slate-600 mb-8">
            Herkenbare situaties waarin een doordachte aanpak en rust essentieel zijn:
          </p>

          <div className="space-y-4 text-slate-700">
            <div className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <p><strong>Reorganisatie of herstructurering</strong> — begeleiding bij grote veranderingen met impact</p>
            </div>
            <div className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <p><strong>Adviesaanvraag onder tijdsdruk</strong> — gedegen advies onder strakke deadlines</p>
            </div>
            <div className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <p><strong>Complexe governance of holding-structuur</strong> — inzicht en strategie in concerns</p>
            </div>
            <div className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <p><strong>Spanning tussen OR en bestuurder</strong> — de-escalatie en herstel van samenwerking</p>
            </div>
            <div className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <p><strong>COR/EOR-omgeving</strong> — nationale/internationale structuren met meerdere gremia</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOE WE HELPEN */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Hoe we helpen</h2>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            Niet elk vraagstuk vraagt om dezelfde aanpak. Soms is het doel: als OR steviger staan in het dagelijks overleg, met betere gesprekken en heldere keuzes. Dan past een training of workshop. Soms is de context zwaarder — met tijdsdruk, bestuurlijke gevoeligheid of een complex besluitvormingsproces. Dan is begeleiding vaak het meest effectief.
          </p>

          <div className="space-y-10">
            {/* Route A */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Begeleiding bij hoge belangen & dossiers</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Rust en regie in spannende dossiers — en ook vroeg aangehaakt om escalatie te voorkomen.
              </p>
              <p className="font-semibold text-slate-900 mb-3">Wat je krijgt:</p>
              <ul className="space-y-2 text-slate-600 mb-4">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Juridische en strategische verdieping bij reorganisaties, adviesaanvragen en complexe besluiten</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Begeleiding in het proces: timing, positionering en gesprekken die ook onder druk constructief blijven</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Onafhankelijk perspectief met oog voor bestuurlijke context</span>
                </li>
              </ul>
              <Link to="/ORondersteuning" className="text-blue-600 hover:text-blue-700 font-medium">
                Lees meer over OR-ondersteuning →
              </Link>
            </div>

            {/* Route B */}
            <div className="border-l-4 border-slate-300 pl-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Training & professionalisering</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Praktische trainingen die gesprekken en besluitvorming beter maken — met oog voor jullie context.
              </p>
              <p className="font-semibold text-slate-900 mb-3">Wat je krijgt:</p>
              <ul className="space-y-2 text-slate-600 mb-4">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Trainingen voor OR-leden: WOR, vaardigheden en toepassing in de praktijk</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Workshops en masterclasses: maatwerk voor specifieke vraagstukken of thema's</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Trainingen voor commissies (bijv. Arbo, verkiezingen, etc.)</span>
                </li>
              </ul>
              <Link to="/Diensten" className="text-blue-600 hover:text-blue-700 font-medium">
                Bekijk alle trainingen en workshops →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. AANPAK: VAN ANALYSE TOT RESULTAAT */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Hoe we werken</h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Goede medezeggenschap vraagt om meer dan kennis van de Wet op de ondernemingsraden. Het vraagt om scherpe analyse, een doordachte aanpak en gesprekken die ook onder druk constructief blijven. Wij werken rustig en gestructureerd.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">01 — Analyse</h3>
              <p className="text-slate-600 leading-relaxed">
                We brengen situatie, belangen en speelveld zorgvuldig in kaart. Wat speelt er écht, en wat heeft de OR nodig om goed te kunnen opereren?
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">02 — Maatwerk</h3>
              <p className="text-slate-600 leading-relaxed">
                Geen standaardoplossingen, maar begeleiding die aansluit bij jullie vraagstuk, context en ambities. We vertalen complexiteit naar heldere keuzes en vervolgstappen.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">03 — Impact</h3>
              <p className="text-slate-600 leading-relaxed">
                Een versterkte rol van de OR, medezeggenschap die merkbaar bijdraagt aan besluitvorming — en een OR die met gezag invloed uitoefent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WAT ONS ONDERSCHEIDT */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-10">Wat ons onderscheidt</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Ervaring & kennis</h3>
              <p className="text-slate-600 leading-relaxed">
                Arjan Warmerdam begeleidt ondernemingsraden bij reorganisaties en complexe besluitvorming sinds 2010. Hij kent de dynamiek van holdings, ambtelijke organisaties en grootschalige verandertrajecten — en weet wat er nodig is om invloed te behouden wanneer de belangen groot zijn.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Breed perspectief</h3>
              <p className="text-slate-600 leading-relaxed">
                We begrijpen zowel de OR-kant als de bestuurlijke dynamiek. Dat helpt om het gesprek zuiver te houden, ook wanneer de verhoudingen onder druk staan. Het doel is altijd: medezeggenschap die bijdraagt aan weloverwogen besluiten.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Onafhankelijk & betrouwbaar</h3>
              <p className="text-slate-600 leading-relaxed">
                We zijn niet verbonden aan vakbonden of werkgeversorganisaties. We kennen het juridische speelveld, maar houden het gesprek werkbaar en oplossingsgericht — zonder te juridiseren, met de scherpte die nodig is.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WAT JE KUNT VERWACHTEN */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Wat je van ons kunt verwachten</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Zorgvuldige analyse voordat we tempo maken</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Begeleiding die aansluit bij jullie context, samenstelling en ambitie</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Praktische toepasbaarheid: alles moet bruikbaar zijn in de praktijk</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Discrete werkwijze — wat in vertrouwen wordt gedeeld, blijft vertrouwelijk</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Aandacht voor proces én verhoudingen, niet alleen voor inhoud</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Wat we niet doen</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex gap-3">
                <span className="text-slate-400 text-xl">✗</span>
                <span>Geen standaardtrainingen uit de catalogus — alles is maatwerk</span>
              </li>
              <li className="flex gap-3">
                <span className="text-slate-400 text-xl">✗</span>
                <span>Geen juridisch strijdmodel — we helpen het gesprek constructief houden</span>
              </li>
              <li className="flex gap-3">
                <span className="text-slate-400 text-xl">✗</span>
                <span>Geen vinkjeswerk — we geloven in medezeggenschap met echte invloed</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 9. BEWIJS */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Wat klanten zeggen</h2>

          <div className="space-y-8">
            {/* Quote 1 */}
            <div className="bg-slate-800 rounded-lg p-8 border-l-4 border-blue-600">
              <p className="text-lg text-slate-200 mb-4 leading-relaxed italic">
                "De begeleiding van Taai-Consult gaf ons de rust om goed na te denken, en de scherpte om op het juiste moment het gesprek aan te gaan. Zonder die ondersteuning hadden we onder tijdsdruk waarschijnlijk te snel toegegeven."
              </p>
              <p className="text-sm text-slate-400">
                — OR-voorzitter, holding met 8 werkmaatschappijen
              </p>
            </div>

            {/* Quote 2 */}
            <div className="bg-slate-800 rounded-lg p-8 border-l-4 border-blue-600">
              <p className="text-lg text-slate-200 mb-4 leading-relaxed italic">
                "De training was praktisch en realistisch. We oefenden met situaties die we écht herkennen, en kregen handvatten die we meteen konden gebruiken."
              </p>
              <p className="text-sm text-slate-400">
                — OR-lid, gemeente
              </p>
            </div>

            {/* Mini-case */}
            <div className="bg-slate-800 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Reorganisatie met kort tijdsbestek</h3>
              <div className="space-y-3 text-slate-300">
                <p><strong className="text-white">Situatie:</strong> OR bij reorganisatie met kort tijdsbestek en veel onduidelijkheid over sociale gevolgen.</p>
                <p><strong className="text-white">Aanpak:</strong> Taai-Consult hielp de OR snel inzicht te krijgen in de juridische spelregels, formuleerde samen een heldere positie en bereidde de OR voor op het overleg met de bestuurder.</p>
                <p><strong className="text-white">Resultaat:</strong> Adviesaanvraag op tijd, met onderbouwing die ook de OR-achterban kon uitleggen. Relatie met bestuurder bleef constructief.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. EIND-CTA */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Klaar om de volgende stap te zetten?</h2>
          <p className="text-lg text-slate-600 mb-10">
            Plan een kennismaking of vraag onze brochure aan. We denken graag mee over wat bij jullie situatie past — zonder verplichtingen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/Contact" 
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
            >
              Plan een vrijblijvend gesprek
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