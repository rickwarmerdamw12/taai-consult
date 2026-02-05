import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dienstenOpen, setDienstenOpen] = useState(false);
  const [themasOpen, setThemasOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      {/* Tracking placeholder */}
      {/* TODO: Add GA4 / Facebook Pixel / LinkedIn Insight Tag 
      <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
      */}
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-slate-900">
            Taai-Consult
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Diensten dropdown */}
            <div className="relative group">
              <button 
                className="px-4 py-2 text-slate-700 hover:text-slate-900 flex items-center gap-1"
                onMouseEnter={() => setDienstenOpen(true)}
                onMouseLeave={() => setDienstenOpen(false)}
              >
                Diensten <ChevronDown className="w-4 h-4" />
              </button>
              {dienstenOpen && (
                <div 
                  className="absolute left-0 mt-0 w-64 bg-white border border-slate-200 rounded-lg shadow-lg py-2"
                  onMouseEnter={() => setDienstenOpen(true)}
                  onMouseLeave={() => setDienstenOpen(false)}
                >
                  <Link to="/trainingen-voor-de-or" className="block px-4 py-2 text-slate-700 hover:bg-slate-50">
                    Trainingen OR
                  </Link>
                  <Link to="/vaardigheden-voor-de-or" className="block px-4 py-2 text-slate-700 hover:bg-slate-50">
                    Vaardigheden OR
                  </Link>
                  <Link to="/trainingen-voor-commissies" className="block px-4 py-2 text-slate-700 hover:bg-slate-50">
                    Commissies
                  </Link>
                  <Link to="/workshops" className="block px-4 py-2 text-slate-700 hover:bg-slate-50">
                    Workshops
                  </Link>
                  <Link to="/masterclasses" className="block px-4 py-2 text-slate-700 hover:bg-slate-50">
                    Masterclasses
                  </Link>
                  <Link to="/orondersteuning" className="block px-4 py-2 text-slate-700 hover:bg-slate-50">
                    OR-ondersteuning
                  </Link>
                </div>
              )}
            </div>

            {/* Themas dropdown */}
            <div className="relative group">
              <button 
                className="px-4 py-2 text-slate-700 hover:text-slate-900 flex items-center gap-1"
                onMouseEnter={() => setThemasOpen(true)}
                onMouseLeave={() => setThemasOpen(false)}
              >
                Thema's <ChevronDown className="w-4 h-4" />
              </button>
              {themasOpen && (
                <div 
                  className="absolute left-0 mt-0 w-72 bg-white border border-slate-200 rounded-lg shadow-lg py-2"
                  onMouseEnter={() => setThemasOpen(true)}
                  onMouseLeave={() => setThemasOpen(false)}
                >
                  <Link to="/medezeggenschap-holdings" className="block px-4 py-2 text-slate-700 hover:bg-slate-50">
                    Medezeggenschap Holdings
                  </Link>
                  <Link to="/medezeggenschap-ambtelijk" className="block px-4 py-2 text-slate-700 hover:bg-slate-50">
                    Ambtelijke Organisaties
                  </Link>
                  <Link to="/vernieuwend-medezeggenschap" className="block px-4 py-2 text-slate-700 hover:bg-slate-50">
                    Vernieuwend Medezeggenschap
                  </Link>
                </div>
              )}
            </div>

            <Link to="/over-ons" className="px-4 py-2 text-slate-700 hover:text-slate-900">
              Over ons
            </Link>

            <Link 
              to="/contact" 
              className="ml-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-slate-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="space-y-2">
              <div className="font-medium text-slate-900 px-4 py-2">Diensten</div>
              <Link to="/trainingen-voor-de-or" className="block px-6 py-2 text-slate-700 hover:bg-slate-50">
                Trainingen OR
              </Link>
              <Link to="/vaardigheden-voor-de-or" className="block px-6 py-2 text-slate-700 hover:bg-slate-50">
                Vaardigheden OR
              </Link>
              <Link to="/trainingen-voor-commissies" className="block px-6 py-2 text-slate-700 hover:bg-slate-50">
                Commissies
              </Link>
              <Link to="/workshops" className="block px-6 py-2 text-slate-700 hover:bg-slate-50">
                Workshops
              </Link>
              <Link to="/masterclasses" className="block px-6 py-2 text-slate-700 hover:bg-slate-50">
                Masterclasses
              </Link>
              <Link to="/orondersteuning" className="block px-6 py-2 text-slate-700 hover:bg-slate-50">
                OR-ondersteuning
              </Link>
              
              <div className="font-medium text-slate-900 px-4 py-2 mt-4">Thema's</div>
              <Link to="/medezeggenschap-holdings" className="block px-6 py-2 text-slate-700 hover:bg-slate-50">
                Medezeggenschap Holdings
              </Link>
              <Link to="/medezeggenschap-ambtelijk" className="block px-6 py-2 text-slate-700 hover:bg-slate-50">
                Ambtelijke Organisaties
              </Link>
              <Link to="/vernieuwend-medezeggenschap" className="block px-6 py-2 text-slate-700 hover:bg-slate-50">
                Vernieuwend Medezeggenschap
              </Link>

              <Link to="/over-ons" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 mt-4">
                Over ons
              </Link>
              <Link to="/contact" className="block px-4 py-2 text-blue-600 font-medium hover:bg-slate-50 mt-2">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}