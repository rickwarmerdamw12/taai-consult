import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="text-slate-300" style={{ backgroundColor: '#1F3F35' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo + tagline */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Taai-Consult</h3>
            <p className="text-sm text-slate-400">
              Praktisch en juridisch scherp. Trainingen die gesprekken en besluiten beter maken.
            </p>
          </div>

          {/* Column 2: Diensten */}
          <div>
            <h4 className="font-semibold text-white mb-3">Diensten</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/TrainingenVoorDeOr" className="hover:text-white">Trainingen OR</Link></li>
              <li><Link to="/VaardighedenVoorDeOr" className="hover:text-white">Vaardigheden OR</Link></li>
              <li><Link to="/TrainingenVoorCommissies" className="hover:text-white">Commissies</Link></li>
              <li><Link to="/Workshops" className="hover:text-white">Workshops</Link></li>
              <li><Link to="/Masterclasses" className="hover:text-white">Masterclasses</Link></li>
              <li><Link to="/ORondersteuning" className="hover:text-white">OR-ondersteuning</Link></li>
            </ul>
          </div>

          {/* Column 3: Themas */}
          <div>
            <h4 className="font-semibold text-white mb-3">Governance en complexe besluitvorming</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/MedezeggenschapHoldings" className="hover:text-white">Medezeggenschap Holdings</Link></li>
              <li><Link to="/MedezeggenschapAmbtelijk" className="hover:text-white">Ambtelijke Organisaties</Link></li>
              <li><Link to="/VernieuwendMedezeggenschap" className="hover:text-white">Vernieuwend Medezeggenschap</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-semibold text-white mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>info@taai-consult.nl</li>
              <li>+31 6 50 74 26 73</li>
              <li className="pt-2">
                <Link to="/Contact" className="hover:text-white" style={{ color: '#AFC1B7' }}>
                  Neem contact op →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 text-sm text-slate-400 text-center" style={{ borderTop: '1px solid #2E2E2E' }}>
          <p>&copy; {new Date().getFullYear()} Taai-Consult. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>);

}