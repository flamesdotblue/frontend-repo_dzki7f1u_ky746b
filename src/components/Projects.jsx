import React from 'react';
import { Shield, Cpu, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'SHASTRA',
    desc:
      'A hands-on cybersecurity toolkit built to streamline reconnaissance, scanning, and exploitation workflows.',
    icon: Shield,
    link: 'https://github.com/MatrixEncoder',
    tags: ['Recon', 'Automation', 'Toolkit'],
  },
  {
    title: 'AI-Powered Defense Systems',
    desc:
      'Exploring ML-driven anomaly detection, threat intel enrichment, and autonomous response strategies.',
    icon: Cpu,
    link: 'https://github.com/MatrixEncoder',
    tags: ['Machine Learning', 'Detection', 'Defense'],
  },
];

const ProjectCard = ({ title, desc, icon: Icon, link, tags }) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-slate-700 hover:bg-slate-900"
  >
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-3">
        <span className="rounded-lg bg-sky-500/10 p-2 text-sky-300">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
      </div>
      <ExternalLink className="h-4 w-4 text-slate-400 transition group-hover:text-slate-200" />
    </div>
    <p className="mt-3 text-sm text-slate-300">{desc}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((t) => (
        <span
          key={t}
          className="rounded-full border border-slate-700 bg-slate-800/60 px-2.5 py-1 text-xs text-slate-300"
        >
          {t}
        </span>
      ))}
    </div>
  </a>
);

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-50">Selected Work</h2>
            <p className="mt-2 text-slate-300">A glimpse into the things I break and build.</p>
          </div>
          <a
            href="https://github.com/MatrixEncoder"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-800/60 px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800"
          >
            View all on GitHub <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <a
            href="https://github.com/MatrixEncoder"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-800/60 px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800"
          >
            View all on GitHub <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
