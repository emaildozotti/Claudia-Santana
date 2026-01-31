import React from 'react';
import { NotificationBar } from './components/NotificationBar';
import { Hero } from './components/Hero';
import { Diagnostic } from './components/Diagnostic';
import { Methodology } from './components/Methodology';
import { About } from './components/About';
import { Steps } from './components/Steps';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans overflow-x-hidden">
      <NotificationBar />
      <main>
        <Hero />
        <Diagnostic />
        <Methodology />
        <About />
        <Steps />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;