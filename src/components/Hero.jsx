import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Terminal, 
  MapPin, 
  Mail, 
  Phone, 
  Check, 
  Copy, 
  ShieldCheck, 
  ExternalLink,
  Cpu,
  Layers,
  Sparkles,
  Database,
  Server,
  Zap
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero = ({ onOpenResume, onOpenTerminal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section 
      id="hero" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute -bottom-10 left-10 w-[400px] h-[200px] bg-emerald-600/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Core Info */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-emerald-400 font-semibold">Available for Hire</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-400">Pune, Maharashtra</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-indigo-400 via-indigo-200 to-blue-300 bg-clip-text text-transparent">{personalInfo.name}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-medium text-indigo-400 flex items-center gap-2 font-mono">
                <span>&gt;</span> {personalInfo.role}
              </h2>
            </div>

            {/* Summary Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {personalInfo.bio}
            </p>

            {/* Key Skill Highlights Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono">
              <span className="px-2.5 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/60 text-indigo-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                React.js & Node.js
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <Database className="w-3 h-3 text-cyan-400" />
                PostgreSQL & MySQL
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                AWS Certified
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <Zap className="w-3 h-3 text-amber-400" />
                REST APIs & RBAC
              </span>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                id="hero-explore-projects-btn"
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-lg shadow-indigo-600/25 transition-all hover:translate-y-[-1px] cursor-pointer"
              >
                <span>View Enterprise Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                id="hero-open-resume-btn"
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-all hover:text-white cursor-pointer"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Resume & PDF</span>
              </button>

              <button
                id="hero-open-terminal-btn"
                onClick={onOpenTerminal}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-mono text-slate-300 hover:text-indigo-300 bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 rounded-lg transition-all"
                title="Launch Terminal Interface"
              >
                <Terminal className="w-4 h-4 text-indigo-400" />
                <span>Terminal</span>
              </button>
            </div>

            {/* Quick Contact & Copy Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 border-t border-slate-900">
              <button
                id="hero-copy-email-btn"
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 hover:text-slate-200 transition-colors"
                title="Click to copy email"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>{personalInfo.email}</span>
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              </button>

              <button
                id="hero-copy-phone-btn"
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 hover:text-slate-200 transition-colors"
                title="Click to copy phone number"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personalInfo.phone}</span>
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Code Profile Card */}
          <div className="lg:col-span-5">
            <div 
              id="hero-developer-card"
              className="relative rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl shadow-indigo-950/40 backdrop-blur-md overflow-hidden"
            >
              {/* Window Titlebar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-slate-300 font-medium">vaishnavi.config.js</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <span className="inline-block w-2 h-2 rounded-full bg-indigo-400"></span>
                  <span>ES6+</span>
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto space-y-2 text-slate-300">
                <div>
                  <span className="text-pink-400">const</span> <span className="text-indigo-300">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span> <span className="text-emerald-300">'{personalInfo.name}'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">role:</span> <span className="text-emerald-300">'{personalInfo.role}'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">experience:</span> <span className="text-amber-300">'1+ Year (Production)'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">specialty:</span> [
                  <div className="pl-4 text-cyan-300">
                    'React.js', 'Node.js', 'PostgreSQL',<br />
                    'REST APIs', 'RBAC Security', 'Docker'
                  </div>
                  <span className="text-slate-300">],</span>
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">certifications:</span> [
                  <div className="pl-4 text-amber-300">
                    'AWS Cloud Practitioner',<br />
                    'Python Certified'
                  </div>
                  <span className="text-slate-300">],</span>
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">academics:</span> &#123; <span className="text-slate-400">degree:</span> <span className="text-emerald-300">'B.Sc. CS'</span>, <span className="text-slate-400">cgpa:</span> <span className="text-purple-300">8.87</span> &#125;,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">status:</span> <span className="text-emerald-300">'Actively Interviewing'</span>
                </div>
                <div>&#125;;</div>

                {/* Simulated Function execution */}
                <div className="pt-2 text-slate-500">
                  <span className="text-pink-400">export async function</span> <span className="text-blue-400">hire</span>() &#123;<br />
                  &nbsp;&nbsp;<span className="text-pink-400">return</span> developer.<span className="text-yellow-300">deployImpact</span>(&#123; boost: <span className="text-purple-300">'35%'</span> &#125;);<br />
                  &#125;
                </div>
              </div>

              {/* Bottom Card Metric Strip */}
              <div className="grid grid-cols-2 gap-px bg-slate-800 border-t border-slate-800">
                <div className="p-3.5 bg-slate-950/80">
                  <div className="text-xs text-slate-400 font-mono">Total Apps Built</div>
                  <div className="text-lg font-bold text-white mt-0.5">6+ Production</div>
                </div>
                <div className="p-3.5 bg-slate-950/80">
                  <div className="text-xs text-slate-400 font-mono">Performance Boost</div>
                  <div className="text-lg font-bold text-emerald-400 mt-0.5">+35% Query Speed</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Highlight Metrics Bento Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {personalInfo.stats.map((stat, idx) => (
            <div 
              key={idx}
              id={`hero-stat-card-${idx}`}
              className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:border-slate-700 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-bold font-mono text-indigo-300">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-1 line-clamp-2">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
