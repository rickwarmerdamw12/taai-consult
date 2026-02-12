import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F4F4]">
      <style>{`
        :root {
          --color-primary: #1F3F35;
          --color-secondary: #6F8F80;
          --color-light-accent: #AFC1B7;
          --color-bg-light: #DCE5E0;
          --color-bg-neutral: #F4F4F4;
          --color-text: #2E2E2E;
          --color-cta-from: #2F5B4C;
          --color-cta-to: #1C3A30;
        }
        
        body {
          color: var(--color-text);
          background-color: var(--color-bg-neutral);
        }
      `}</style>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}