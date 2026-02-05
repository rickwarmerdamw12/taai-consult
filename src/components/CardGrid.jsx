import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function CardGrid({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <div 
          key={index}
          className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              {item.duration && (
                <p className="text-xs text-slate-500 mt-2">Duur: {item.duration}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}