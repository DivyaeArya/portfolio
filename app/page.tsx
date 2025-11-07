"use client";
import React from 'react';  
import Header from './components/header';
import Hero from './components/hero';
import WorkSection from './components/work';
import AboutSection from './components/about';

// Main App Component
export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
      
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <WorkSection />

      </main>
    </div>
  );
}