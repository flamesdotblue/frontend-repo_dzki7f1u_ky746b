import React, { useState } from 'react';
import { Phone, Mail, Github, Linkedin, Copy } from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const phone = '+91-9125916986';

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(phone);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (_) {
      // noop
    }
  };

  return (
    <section id="contact" className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50">Let’s talk security</h2>
          <p className="mt-2 text-slate-300 max-w-2xl">
            Need a penetration test, a specialized tool, or an AI-driven security solution? I’m available for impactful work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href={`tel:${phone}`}
            className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-slate-700 hover:bg-slate-900 transition"
          >
            <div className="flex items-center gap-3 text-emerald-300">
              <Phone className="h-5 w-5" />
              <h3 className="font-semibold">Call</h3>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <p className="text-slate-200">{phone}</p>
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); copyPhone(); }}
                className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-800/60 px-2.5 py-1.5 text-xs text-slate-200 hover:bg-slate-800"
              >
                <Copy className="h-3.5 w-3.5" /> {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
          </a>

          <a
            href="mailto:"
            className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-slate-700 hover:bg-slate-900 transition"
          >
            <div className="flex items-center gap-3 text-sky-300">
              <Mail className="h-5 w-5" />
              <h3 className="font-semibold">Email</h3>
            </div>
            <p className="mt-3 text-slate-300 text-sm">No email listed — reach out on LinkedIn and I’ll respond quickly.</p>
          </a>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex items-center gap-3 text-slate-300">
              <h3 className="font-semibold">Profiles</h3>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <a
                href="https://github.com/MatrixEncoder"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-700 bg-slate-800/60 px-3 py-2 text-sm text-slate-200 hover:bg-slate-800"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/suryansh-srivastava-746113292"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-700 bg-slate-800/60 px-3 py-2 text-sm text-slate-200 hover:bg-slate-800"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
