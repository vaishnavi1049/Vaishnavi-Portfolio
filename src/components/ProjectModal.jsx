import React from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Database, 
  Layers, 
  Server, 
  ShieldAlert, 
  ShieldCheck, 
  Calendar,
  Sparkles
} from 'lucide-react';

export const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div 
      id="project-detail-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="project-detail-modal-content"
        className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-5 bg-slate-900/95 border-b border-slate-800 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            {project.isGovernment ? (
              <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                Government of Maharashtra Portal
              </span>
            ) : (
              <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-medium">
                {project.category}
              </span>
            )}
          </div>
          <button
            id="modal-close-btn"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Titles */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-indigo-400 font-medium mt-1">
              {project.subtitle}
            </p>
            <p className="text-sm text-slate-300 mt-3 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Metrics / Highlights Bar */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
              {project.metrics.map((m, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-xs font-mono text-slate-400">{m.label}</div>
                  <div className="text-sm font-semibold text-slate-200 mt-0.5">{m.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Detailed Engineering Deliverables */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider font-mono flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              Technical Contributions & Architecture
            </h4>
            <ul className="space-y-2.5">
              {project.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono mb-2.5">
              Technologies & Infrastructure
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs font-mono text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Highlights */}
          {project.highlights && (
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono mb-2.5">
                Core System Modules
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-950/40 border border-slate-800/60 text-xs font-medium text-slate-300 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Links */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            {project.liveUrl ? (
              <a
                id={`modal-live-link-${project.id}`}
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-md shadow-indigo-600/30 transition-colors"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <div className="text-xs text-slate-400 italic">
                * Government intranet / restricted deployment
              </div>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors ml-auto"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
