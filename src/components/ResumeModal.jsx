import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Copy, 
  Check, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { personalInfo, technicalSkills, projects, experiences, education, certifications } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const plainTextResume = `
${personalInfo.name} - ${personalInfo.role}
Email: ${personalInfo.email} | Phone: ${personalInfo.phone} | Location: ${personalInfo.location}
GitHub: ${personalInfo.github} | LinkedIn: ${personalInfo.linkedin}

PROFESSIONAL SUMMARY
${personalInfo.bio}

TECHNICAL SKILLS
${technicalSkills.map(c => `${c.category}: ${c.skills.map(s => s.name).join(', ')}`).join('\n')}

PROFESSIONAL EXPERIENCE
${experiences.map(e => `
${e.role} | ${e.company} (${e.period})
Location: ${e.location}
${e.bullets.map(b => `- ${b}`).join('\n')}
Technologies: ${e.technologies.join(', ')}
`).join('\n')}

FEATURED PROJECTS
${projects.map(p => `
${p.title} (${p.category})
${p.bullets.map(b => `- ${b}`).join('\n')}
Tech Stack: ${p.techStack.join(', ')}
`).join('\n')}

EDUCATION
${education.degree} | ${education.institution} (${education.period})
Grade: ${education.grade}

CERTIFICATIONS
${certifications.map(c => `- ${c.title} (${c.issuer})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(plainTextResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="resume-modal-container"
        className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950/90 border-b border-slate-800 text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
            <span className="font-semibold text-sm text-white">Curriculum Vitae</span>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">({personalInfo.name})</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="resume-modal-copy-text-btn"
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              title="Copy plain text resume"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              id="resume-modal-print-btn"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              id="resume-modal-close-btn"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-lg transition-colors ml-2"
              aria-label="Close Resume Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Paper Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-950/40">
          
          <div 
            id="printable-resume"
            className="max-w-3xl mx-auto bg-white text-slate-900 p-8 sm:p-12 rounded-xl shadow-lg font-sans space-y-6 text-sm leading-relaxed"
          >
            {/* Resume Header */}
            <div className="border-b-2 border-slate-900 pb-5 text-center sm:text-left flex flex-col sm:flex-row justify-between items-start gap-4">
              <div>
                <h1 className="text-3xl font-black text-slate-950 tracking-tight">
                  {personalInfo.name}
                </h1>
                <h2 className="text-base font-bold text-indigo-700 tracking-wide mt-0.5">
                  {personalInfo.role}
                </h2>
                <p className="text-xs text-slate-600 mt-1">
                  {personalInfo.location}
                </p>
              </div>

              <div className="text-xs space-y-1 text-slate-700 font-mono sm:text-right">
                <div>Email: <a href={`mailto:${personalInfo.email}`} className="text-indigo-700 hover:underline">{personalInfo.email}</a></div>
                <div>Phone: <span className="font-semibold">{personalInfo.phone}</span></div>
                <div>GitHub: <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-indigo-700 hover:underline">github.com/{personalInfo.githubUsername}</a></div>
                <div>LinkedIn: <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-indigo-700 hover:underline">linkedin.com/in/vaishnavi-gajbar</a></div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-1.5">
              <h3 className="text-xs font-black tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-1">
                Professional Summary
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed text-justify">
                {personalInfo.bio}
              </p>
            </div>

            {/* Technical Skills */}
            <div className="space-y-1.5">
              <h3 className="text-xs font-black tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-1">
                Technical Skills
              </h3>
              <div className="text-xs space-y-1">
                {technicalSkills.map((c, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-1">
                    <span className="font-bold text-slate-900 sm:w-44 shrink-0">{c.category}:</span>
                    <span className="text-slate-700">{c.skills.map(s => s.name).join(', ')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Experience */}
            <div className="space-y-3">
              <h3 className="text-xs font-black tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-1">
                Work Experience
              </h3>
              {experiences.map((exp, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-xs text-slate-900">
                    <div>
                      <span>{exp.role}</span> — <span className="text-indigo-700">{exp.company}</span>
                    </div>
                    <span className="text-slate-600 font-normal">{exp.period} | {exp.location}</span>
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Featured Projects */}
            <div className="space-y-3">
              <h3 className="text-xs font-black tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-1">
                Key Projects & Government Portals
              </h3>
              {projects.map((proj, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-bold text-slate-900">
                    <span>{proj.title}</span>
                    <span className="text-slate-500 font-mono font-normal">[{proj.techStack.slice(0, 4).join(', ')}]</span>
                  </div>
                  <p className="text-xs text-slate-600 italic">
                    {proj.tagline}
                  </p>
                  <ul className="list-disc list-outside pl-4 space-y-0.5 text-xs text-slate-700">
                    {proj.bullets.slice(0, 3).map((b, bi) => (
                      <li key={bi}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education & Certifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="space-y-1.5">
                <h3 className="text-xs font-black tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-1">
                  Education
                </h3>
                <div className="text-xs">
                  <div className="font-bold text-slate-900">{education.degree}</div>
                  <div className="text-slate-700">{education.institution}</div>
                  <div className="text-slate-500">{education.period} | <span className="font-semibold text-slate-800">{education.grade}</span></div>
                </div>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xs font-black tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-1">
                  Certifications
                </h3>
                <div className="text-xs space-y-1 text-slate-700">
                  {certifications.map((c, ci) => (
                    <div key={ci}>
                      • <span className="font-semibold text-slate-900">{c.title}</span> ({c.issuer})
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
