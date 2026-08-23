import React from 'react';
import { 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  CloudCheck, 
  Code2, 
  ShieldCheck,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { education, certifications } from '../data/portfolioData';

export const EducationCertifications = () => {
  return (
    <section id="education" className="py-20 md:py-28 bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-xs font-mono text-indigo-300">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Academics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education & Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Formal computer science academic foundation paired with industry cloud and programming credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Education Card (7 Cols) */}
          <div className="lg:col-span-7">
            <div 
              id="education-card"
              className="h-full p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 transition-all space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
                  <div className="flex items-start gap-3.5">
                    <div className="p-3 rounded-xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
                        Higher Education
                      </span>
                      <h3 className="text-xl font-bold text-white mt-0.5">
                        {education.degree}
                      </h3>
                      <p className="text-sm font-medium text-slate-300">
                        {education.institution}
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="inline-block px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
                      {education.grade}
                    </span>
                  </div>
                </div>

                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {education.period}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {education.location}
                  </span>
                </div>

                {/* Academic Highlights */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
                    Key Academic Highlights
                  </h4>
                  {education.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between">
                <span>Distinction Graduate in CS</span>
                <span className="text-indigo-400 font-semibold">8.87 / 10 CGPA</span>
              </div>

            </div>
          </div>

          {/* Certifications (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                id={`cert-card-${cert.id}`}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 transition-all space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                      {cert.id === 'aws-cloud' ? (
                        <ShieldCheck className="w-5 h-5 text-amber-400" />
                      ) : (
                        <Code2 className="w-5 h-5 text-indigo-400" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">
                        {cert.title}
                      </h4>
                      <p className="text-xs font-mono text-slate-400">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full bg-slate-950 border border-slate-800 text-[11px] font-mono text-indigo-300 shrink-0">
                    {cert.badgeText}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {cert.description}
                </p>

                <div className="pt-2 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified & Industry Recognized</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
