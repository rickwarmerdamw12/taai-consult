import React from 'react';

export default function PageSection({ children, className = "", background = "white" }) {
  const bgStyle = background === "gray" ? { backgroundColor: '#DCE5E0' } : { backgroundColor: 'white' };
  
  return (
    <section className={`py-16 ${className}`} style={bgStyle}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}