import React, { useState } from 'react';
import { 
  ExternalLink, 
  Layers, 
  ShieldCheck, 
  Building2, 
  ArrowUpRight, 
  CheckCircle2, 
  Database,
  Filter,
  Info
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Government', 'Enterprise', 'Web Development'];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-xs font-mono text-indigo-300">
              <Layers className="w-3.5 h-3.5" />
              <span>Production Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Projects & Systems
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              High-impact enterprise portals, government-grade transit applications, and scalable multi-tier architectures engineered for real-world reliability.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/80 border border-slate-800 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-btn-${cat.toLowerCase().replace(' ', '-')}`}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedFilter === cat
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group relative rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700/80 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-950/20 flex flex-col justify-between overflow-hidden"
            >
              {/* Card Top / Header */}
              <div className="p-6 sm:p-7 space-y-4">
                
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {project.isGovernment ? (
                      <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-mono font-medium flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                        Govt of Maharashtra
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-mono font-medium flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-indigo-400" />
                        {project.category}
                      </span>
                    )}
                  </div>

                  {project.liveUrl && (
                    <a
                      id={`project-card-live-icon-${project.id}`}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 text-slate-400 hover:text-indigo-300 hover:bg-slate-800/80 rounded-lg transition-colors flex items-center gap-1 text-xs font-mono"
                      title="Open Live Website"
                    >
                      <span>Live</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-indigo-400 mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Tagline / Summary */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.tagline}
                </p>

                {/* Bullet Highlights (First 2) */}
                <div className="space-y-2 pt-1">
                  {project.bullets.slice(0, 2).map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5"></div>
                      <span className="line-clamp-2">{bullet}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Card Footer: Tech Stack & Actions */}
              <div className="p-6 sm:p-7 pt-0 space-y-4">
                
                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                  {project.techStack.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-950/60 border border-slate-800 text-[11px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between gap-3 pt-1">
                  <button
                    id={`project-details-btn-${project.id}`}
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Deep Dive & Architecture</span>
                  </button>

                  {project.liveUrl ? (
                    <a
                      id={`project-action-live-${project.id}`}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <span>Visit Portal</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-400">
                      Govt Internal Portal
                    </span>
                  )}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Deep-Dive Architecture Modal */}
      <ProjectModal
        project={activeModalProject}
        isOpen={Boolean(activeModalProject)}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
