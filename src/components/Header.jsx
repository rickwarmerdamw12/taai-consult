import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dienstenOpen, setDienstenOpen] = useState(false);
  const [themasOpen, setThemasOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm border-b shadow-sm" style={{ backgroundColor: '#6F8F80', borderColor: '#1F3F35' }}>
      {/* Tracking placeholder */}
      {/* TODO: Add GA4 / Facebook Pixel / LinkedIn Insight Tag 
      <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
      */}
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69846ad3327fab0348385a7d/dca8f0310_Ontwerpzondertitel2.png" 
              alt="Taai-Consult logo" 
              className="h-14"
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Diensten dropdown */}
            <div className="relative group">
              <button 
                className="px-4 py-2 text-white hover:text-[#DCE5E0] flex items-center gap-1"
                onMouseEnter={() => setDienstenOpen(true)}
                onMouseLeave={() => setDienstenOpen(false)}
              >
                Diensten <ChevronDown className="w-4 h-4" />
              </button>
              {dienstenOpen && (
                <div 
                  className="absolute left-0 mt-0 w-64 rounded-lg shadow-lg py-2" 
                  style={{ backgroundColor: '#DCE5E0', borderColor: '#AFC1B7' }}
                  onMouseEnter={() => setDienstenOpen(true)}
                  onMouseLeave={() => setDienstenOpen(false)}
                >
                  <Link to="/TrainingenVoorDeOr" className="block px-4 py-2 hover:bg-[#AFC1B7]" style={{ color: '#2E2E2E' }}>
                    Trainingen OR
                  </Link>
                  <Link to="/VaardighedenVoorDeOr" className="block px-4 py-2 hover:bg-[#AFC1B7]" style={{ color: '#2E2E2E' }}>
                    Vaardigheden OR
                  </Link>
                  <Link to="/TrainingenVoorCommissies" className="block px-4 py-2 hover:bg-[#AFC1B7]" style={{ color: '#2E2E2E' }}>
                    Commissies
                  </Link>
                  <Link to="/Workshops" className="block px-4 py-2 hover:bg-[#AFC1B7]" style={{ color: '#2E2E2E' }}>
                    Workshops
                  </Link>
                  <Link to="/Masterclasses" className="block px-4 py-2 hover:bg-[#AFC1B7]" style={{ color: '#2E2E2E' }}>
                    Masterclasses
                  </Link>
                  <Link to="/ORondersteuning" className="block px-4 py-2 hover:bg-[#AFC1B7]" style={{ color: '#2E2E2E' }}>
                    OR-ondersteuning
                  </Link>
                </div>
              )}
            </div>

            {/* Themas dropdown */}
            <div className="relative group">
              <button 
                className="px-4 py-2 text-white hover:text-[#DCE5E0] flex items-center gap-1"
                onMouseEnter={() => setThemasOpen(true)}
                onMouseLeave={() => setThemasOpen(false)}
              >
                Expertise <ChevronDown className="w-4 h-4" />
              </button>
              {themasOpen && (
                <div 
                  className="absolute left-0 mt-0 w-72 rounded-lg shadow-lg py-2"
                  style={{ backgroundColor: '#DCE5E0', borderColor: '#AFC1B7' }}
                  onMouseEnter={() => setThemasOpen(true)}
                  onMouseLeave={() => setThemasOpen(false)}
                >
                  <Link to="/MedezeggenschapHoldings" className="block px-4 py-2 hover:bg-[#AFC1B7]" style={{ color: '#2E2E2E' }}>
                    Medezeggenschap Holdings
                  </Link>
                  <Link to="/MedezeggenschapAmbtelijk" className="block px-4 py-2 hover:bg-[#AFC1B7]" style={{ color: '#2E2E2E' }}>
                    Ambtelijke Organisaties
                  </Link>
                  <Link to="/VernieuwendMedezeggenschap" className="block px-4 py-2 hover:bg-[#AFC1B7]" style={{ color: '#2E2E2E' }}>
                    Vernieuwend Medezeggenschap
                  </Link>
                  <Link to="/Vertrouwenspersoon" className="block px-4 py-2 hover:bg-[#AFC1B7]" style={{ color: '#2E2E2E' }}>
                    Vertrouwenspersoon
                  </Link>
                </div>
              )}
            </div>

            <Link to="/OverOns" className="px-4 py-2 text-white hover:text-[#DCE5E0]">
              Over ons
            </Link>

            <Link 
              to="/Contact" 
              className="ml-4 px-6 py-2 text-white rounded-lg transition-colors"
              style={{ background: 'linear-gradient(90deg, #2F5B4C 0%, #1C3A30 100%)' }}
              onMouseEnter={(e) => e.target.style.background = 'linear-gradient(90deg, #1F3F35 0%, #1C3A30 100%)'}
              onMouseLeave={(e) => e.target.style.background = 'linear-gradient(90deg, #2F5B4C 0%, #1C3A30 100%)'}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4" style={{ borderTop: '1px solid #1F3F35' }}>
            <div className="space-y-2">
              <div className="font-medium text-white px-4 py-2">Diensten</div>
              <Link to="/TrainingenVoorDeOr" className="block px-6 py-2 text-white hover:bg-[#1F3F35]">
                Trainingen OR
              </Link>
              <Link to="/VaardighedenVoorDeOr" className="block px-6 py-2 text-white hover:bg-[#1F3F35]">
                Vaardigheden OR
              </Link>
              <Link to="/TrainingenVoorCommissies" className="block px-6 py-2 text-white hover:bg-[#1F3F35]">
                Commissies
              </Link>
              <Link to="/Workshops" className="block px-6 py-2 text-white hover:bg-[#1F3F35]">
                Workshops
              </Link>
              <Link to="/Masterclasses" className="block px-6 py-2 text-white hover:bg-[#1F3F35]">
                Masterclasses
              </Link>
              <Link to="/ORondersteuning" className="block px-6 py-2 text-white hover:bg-[#1F3F35]">
                OR-ondersteuning
              </Link>
              
              <div className="font-medium text-white px-4 py-2 mt-4">Expertise</div>
              <Link to="/MedezeggenschapHoldings" className="block px-6 py-2 text-white hover:bg-[#1F3F35]">
                Medezeggenschap Holdings
              </Link>
              <Link to="/MedezeggenschapAmbtelijk" className="block px-6 py-2 text-white hover:bg-[#1F3F35]">
                Ambtelijke Organisaties
              </Link>
              <Link to="/VernieuwendMedezeggenschap" className="block px-6 py-2 text-white hover:bg-[#1F3F35]">
                Vernieuwend Medezeggenschap
              </Link>
              <Link to="/Vertrouwenspersoon" className="block px-6 py-2 text-white hover:bg-[#1F3F35]">
                Vertrouwenspersoon
              </Link>

              <Link to="/OverOns" className="block px-4 py-2 text-white hover:bg-[#1F3F35] mt-4">
                Over ons
              </Link>
              <Link to="/Contact" className="block px-4 py-2 text-[#DCE5E0] font-medium hover:bg-[#1F3F35] mt-2">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}