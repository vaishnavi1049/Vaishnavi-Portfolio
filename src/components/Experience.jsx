import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building, 
  Sparkles,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-xs font-mono text-indigo-300">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Professional Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Proven track record delivering scalable enterprise software, optimizing web application performance, and managing business operations.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 sm:before:left-8 before:w-0.5 before:bg-slate-800">
          {experiences.map((exp, idx) => (
            <div 
              key={exp.id}
              id={`experience-item-${exp.id}`}
              className="relative pl-12 sm:pl-20 group"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute left-3.5 sm:left-6.5 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center group-hover:scale-125 group-hover:bg-indigo-600 transition-all">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 transition-all duration-200 space-y-5">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-indigo-400 font-medium mt-1">
                      <span className="flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5" />
                        {exp.company}
                      </span>
                      <span className="text-slate-600">•</span>
                      <span className="flex items-center gap-1.5 text-slate-400 text-xs font-mono">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-300 self-start sm:self-center">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Chips */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {exp.technologies.map((tech, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800/80 text-[11px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
