import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Simple sticky nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-slate-950/80 border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-slate-100">Suryansh Srivastava</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="text-slate-300 hover:text-slate-100">About</a>
            <a href="#projects" className="text-slate-300 hover:text-slate-100">Work</a>
            <a href="#contact" className="text-slate-300 hover:text-slate-100">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-slate-800 bg-slate-950/80">
        <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-slate-400 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Suryansh Srivastava. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/MatrixEncoder" target="_blank" rel="noreferrer" className="hover:text-slate-200">GitHub</a>
            <a href="https://www.linkedin.com/in/suryansh-srivastava-746113292" target="_blank" rel="noreferrer" className="hover:text-slate-200">LinkedIn</a>
            <a href="tel:+91-9125916986" className="hover:text-slate-200">+91-9125916986</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
