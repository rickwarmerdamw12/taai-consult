import React from 'react';

export default function PageSection({ children, className = "", background = "white" }) {
  const bgClass = background === "gray" ? "bg-slate-50" : "bg-white";
  
  return (
    <section className={`${bgClass} py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}