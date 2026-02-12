import React from 'react';
import { Link } from 'react-router-dom';

export default function CTABlock({ 
  title = "Klaar om te starten?", 
  subtitle = "Plan een kennismaking of vraag onze brochure aan",
  variant = "default" 
}) {
  const bgStyle = variant === "dark" 
    ? { background: 'linear-gradient(90deg, #2F5B4C 0%, #1C3A30 100%)', color: 'white' }
    : { backgroundColor: '#DCE5E0', color: '#2E2E2E' };

  return (
    <div className="py-16" style={bgStyle}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
        {subtitle && (
          <p className="text-lg mb-8" style={{ color: variant === "dark" ? '#DCE5E0' : '#2E2E2E' }}>
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/Contact" 
            className="px-8 py-3 text-white rounded-lg transition-colors font-medium"
            style={{ background: 'linear-gradient(90deg, #2F5B4C 0%, #1C3A30 100%)' }}
            data-cta="plan_kennismaking"
          >
            Plan kennismaking
          </Link>
          <Link 
            to="/Contact" 
            className="px-8 py-3 rounded-lg font-medium transition-colors"
            style={variant === "dark" 
              ? { backgroundColor: 'white', color: '#2E2E2E' }
              : { backgroundColor: 'white', color: '#2E2E2E', border: '2px solid #6F8F80' }
            }
            data-cta="vraag_brochure"
          >
            Vraag brochure
          </Link>
        </div>
      </div>
    </div>
  );
}