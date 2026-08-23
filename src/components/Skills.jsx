import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Wrench, 
  CheckCircle2, 
  Search,
  Sparkles,
  Zap
} from 'lucide-react';
import { technicalSkills } from '../data/portfolioData';

const iconMap = {
  Layout: Code2,
  Server: Server,
  Database: Database,
  Cloud: Cloud,
  Wrench: Wrench
};

export const Skills = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSkill, setActiveSkill] = useState(null);

  const getCategoryIcon = (iconName) => {
    const IconComponent = iconMap[iconName] || Code2;
    return <IconComponent className="w-5 h-5 text-indigo-400" />;
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-950/50 relative">
      {/* Background glow */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-xs font-mono text-indigo-300">
              <Zap className="w-3.5 h-3.5" />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Skills & Tech Stack Matrix
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Production-tested toolkit covering full-stack web architecture, secure API systems, containerized cloud infrastructure, and database optimization.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="skills-search-input"
              type="text"
              placeholder="Search skills (e.g., React, SQL)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs font-mono text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalSkills.map((categoryGroup, idx) => {
            const filteredGroupSkills = categoryGroup.skills.filter(s => 
              s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              s.description.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (searchTerm && filteredGroupSkills.length === 0) return null;

            return (
              <div
                key={idx}
                id={`skill-category-card-${idx}`}
                className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700/80 transition-all duration-200"
              >
                <div>
                  {/* Category Title */}
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800/80">
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                      {getCategoryIcon(categoryGroup.iconName)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">
                        {categoryGroup.category}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">
                        {filteredGroupSkills.length} competencies
                      </span>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {filteredGroupSkills.map((skill, sIdx) => {
                      const isSelected = activeSkill?.name === skill.name;
                      return (
                        <button
                          key={sIdx}
                          id={`skill-chip-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                          onClick={() => setActiveSkill(isSelected ? null : skill)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all text-left flex items-center gap-1.5 ${
                            isSelected 
                              ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-400' 
                              : skill.isKey
                                ? 'bg-slate-950 border border-indigo-900/60 text-indigo-300 hover:border-indigo-600/60'
                                : 'bg-slate-950/70 border border-slate-800/80 text-slate-300 hover:border-slate-700'
                          }`}
                        >
                          {skill.isKey && <Sparkles className="w-2.5 h-2.5 text-indigo-400 shrink-0" />}
                          <span>{skill.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Sub-note */}
                <div className="mt-4 pt-3 border-t border-slate-800/50 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Click badge for context</span>
                  <span className="text-indigo-400">{categoryGroup.skills.filter(s => s.isKey).length} Core</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Interactive Selected Skill Context Box */}
        {activeSkill && (
          <div 
            id="skill-inspector-box"
            className="mt-8 p-5 rounded-xl bg-indigo-950/40 border border-indigo-500/40 backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold font-mono text-white">
                  {activeSkill.name}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-600/30 text-indigo-200 border border-indigo-400/30">
                  {activeSkill.level}
                </span>
                {activeSkill.isKey && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Key Production Competency
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                {activeSkill.description}
              </p>
            </div>
            <button
              onClick={() => setActiveSkill(null)}
              className="text-xs font-mono text-slate-400 hover:text-white px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 shrink-0"
            >
              Dismiss
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
