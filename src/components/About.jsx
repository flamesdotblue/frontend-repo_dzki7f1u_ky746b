import React from 'react';
import { Terminal, Brain, Shield, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50">About</h2>
          <p className="mt-3 text-slate-300 max-w-2xl">
            I'm the guy who can do it for you: penetration testing, building cybersecurity tools (think SHASTRA), and AI-driven security solutions — damn near anything within reason.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex items-center gap-3 text-sky-300">
              <Shield className="h-5 w-5" />
              <h3 className="font-semibold">Offensive Security</h3>
            </div>
            <p className="mt-3 text-slate-300 text-sm">
              Currently diving deep into red teaming and advanced web exploitation while keeping defense top-of-mind.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex items-center gap-3 text-emerald-300">
              <Brain className="h-5 w-5" />
              <h3 className="font-semibold">AI x Cybersecurity</h3>
            </div>
            <p className="mt-3 text-slate-300 text-sm">
              Building AI-powered defense systems to keep the internet safer — because security should be smarter, not just stronger.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex items-center gap-3 text-amber-300">
              <Trophy className="h-5 w-5" />
              <h3 className="font-semibold">Track Record</h3>
            </div>
            <p className="mt-3 text-slate-300 text-sm">
              Ethical Hacking training, first vulnerability reported, Web Security Academy labs cracked, hackathon finalist, and a home-brew Kali lab.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <div className="flex items-start gap-3">
            <Terminal className="mt-1 h-5 w-5 text-slate-400" />
            <p className="text-slate-300">
              When I'm not breaking into systems (ethically), you'll find me gaming or watching thrillers. The mission: fuse machine learning and AI into cybersecurity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
