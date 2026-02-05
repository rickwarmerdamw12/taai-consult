import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

export default function PageNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-6xl sm:text-8xl font-bold mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Pagina niet gevonden</h2>
        <p className="text-lg text-slate-300 mb-8">
          De pagina die je zoekt bestaat niet of is verplaatst.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <Home className="w-5 h-5" />
            Naar homepagina
          </Link>
          <Link 
            to="/diensten" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors font-medium"
          >
            <Search className="w-5 h-5" />
            Bekijk diensten
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700">
          <p className="text-slate-400 mb-4">Of neem direct contact met ons op:</p>
          <Link 
            to="/contact" 
            className="text-blue-400 hover:text-blue-300 font-medium"
          >
            Naar contactpagina →
          </Link>
        </div>
      </div>
    </div>
  );
}