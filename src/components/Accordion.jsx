import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ items, title }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-3">
      {title && <h3 className="text-xl font-semibold text-slate-900 mb-4">{title}</h3>}
      {items.map((item, index) => (
        <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
          <button
            className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors text-left"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="font-medium text-slate-900">{item.title}</span>
            <ChevronDown 
              className={`w-5 h-5 text-slate-500 transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`} 
            />
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
              <p className="text-slate-700 leading-relaxed">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}