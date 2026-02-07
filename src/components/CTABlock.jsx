import React from 'react';
import { Link } from 'react-router-dom';

export default function CTABlock({ 
  title = "Klaar om te starten?", 
  subtitle = "Plan een kennismaking of vraag onze brochure aan",
  variant = "default" 
}) {
  const bgClass = variant === "dark" 
    ? "bg-slate-900 text-white" 
    : "bg-blue-50 text-slate-900";

  return (
    <div className={`${bgClass} py-16`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
        {subtitle && (
          <p className={`text-lg mb-8 ${variant === "dark" ? "text-slate-300" : "text-slate-600"}`}>
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/Contact" 
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            data-cta="plan_kennismaking"
          >
            Plan kennismaking
          </Link>
          <Link 
            to="/Contact" 
            className={`px-8 py-3 rounded-lg font-medium transition-colors ${
              variant === "dark" 
                ? "bg-white text-slate-900 hover:bg-slate-100" 
                : "bg-white text-slate-900 border-2 border-slate-300 hover:border-slate-400"
            }`}
            data-cta="vraag_brochure"
          >
            Vraag brochure
          </Link>
        </div>
      </div>
    </div>
  );
}