import React from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, Github, Linkedin, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-[90vh] md:min-h-screen bg-slate-950 overflow-hidden">
      {/* Top subtle grid background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/10 via-slate-900 to-slate-950" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 text-slate-200">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300">
            <Shield className="h-4 w-4" />
            Offensive Security • AI in Cybersecurity
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-50">
            SURYANSH SRIVASTAVA
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-prose">
            My job is to break things before the bad guys do. I build and break with intent — from penetration testing to AI-driven defense systems.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/MatrixEncoder"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/suryansh-srivastava-746113292"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-800/60 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-600"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-emerald-600/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
            >
              <Phone className="h-4 w-4" /> Contact
            </a>
          </div>
        </div>

        {/* 3D Spline Scene */}
        <div className="relative w-full h-[380px] md:h-[520px] lg:h-[640px] rounded-xl overflow-hidden border border-slate-800 bg-slate-900/50">
          <Spline
            scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Soft gradient overlay that won't block interactions */}
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
