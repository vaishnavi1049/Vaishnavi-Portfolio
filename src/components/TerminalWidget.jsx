import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Terminal as TerminalIcon, 
  Maximize2, 
  Minimize2, 
  CornerDownLeft, 
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { personalInfo, technicalSkills, projects, experiences, education, certifications } from '../data/portfolioData';

export const TerminalWidget = ({ isOpen, onClose }) => {
  const [history, setHistory] = useState([
    { type: 'system', content: 'Vaishnavi Gajbar Interactive CLI [Version 1.2.0-js]' },
    { type: 'system', content: 'Type "help" to see available commands or "projects" to view work.' }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'user', content: `$ ${input}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          content: `
Available commands:
  about        - View professional biography & core summary
  skills       - List technical skill stacks and key competencies
  projects     - List government & enterprise projects with tech stacks
  experience   - Display career timeline and work history
  education    - Display degrees and academic marks
  certs        - List AWS and Python certifications
  contact      - Display direct phone, email, and social coordinates
  clear        - Clear the terminal screen
  sudo hire    - Execute the instant candidate recruitment sequence
  exit         - Close the terminal window
          `.trim()
        });
        break;

      case 'about':
        newHistory.push({
          type: 'output',
          content: `${personalInfo.name} - ${personalInfo.role}\n${personalInfo.bio}\nLocation: ${personalInfo.location}`
        });
        break;

      case 'skills':
        const skillStr = technicalSkills.map(c => 
          `[${c.category}]\n${c.skills.map(s => `  • ${s.name} (${s.level})`).join('\n')}`
        ).join('\n\n');
        newHistory.push({ type: 'output', content: skillStr });
        break;

      case 'projects':
        const projStr = projects.map(p => 
          `* ${p.title} (${p.category})\n  Stack: ${p.techStack.join(', ')}\n  Summary: ${p.tagline}${p.liveUrl ? `\n  Live URL: ${p.liveUrl}` : ''}`
        ).join('\n\n');
        newHistory.push({ type: 'output', content: projStr });
        break;

      case 'experience':
        const expStr = experiences.map(e => 
          `* ${e.role} @ ${e.company} [${e.period}]\n  ${e.bullets.slice(0, 2).join('\n  ')}`
        ).join('\n\n');
        newHistory.push({ type: 'output', content: expStr });
        break;

      case 'education':
        newHistory.push({
          type: 'output',
          content: `${education.degree}\n${education.institution}, Pune\nPeriod: ${education.period} | Grade: ${education.grade}`
        });
        break;

      case 'certs':
      case 'certifications':
        const certStr = certifications.map(c => `• ${c.title} - ${c.issuer}`).join('\n');
        newHistory.push({ type: 'output', content: certStr });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          content: `Email:    ${personalInfo.email}\nPhone:    ${personalInfo.phone}\nGitHub:   ${personalInfo.github}\nLinkedIn: ${personalInfo.linkedin}`
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      case 'sudo hire':
      case 'sudo hire vaishnavi':
      case 'hire':
        newHistory.push({
          type: 'success',
          content: `
[SUCCESS 200 OK] Candidate Vaishnavi Gajbar is primed for onboarding!
• React.js & Node.js Full Stack Proficiency: 100%
• Production Database & Query Optimization: +35% Boost
• AWS Cloud Practitioner Certification: Verified
• Next Step: Email vaishnavigajbar104@gmail.com or Call +91-8788379686.
          `.trim()
        });
        break;

      default:
        newHistory.push({
          type: 'error',
          content: `zsh: command not found: ${cmd}. Type "help" for a list of commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div 
      id="terminal-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="terminal-window"
        className="w-full max-w-3xl h-[520px] bg-slate-950 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col font-mono text-xs sm:text-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 select-none">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <button onClick={onClose} className="w-3 h-3 rounded-full bg-rose-500 hover:opacity-80" />
              <div className="w-3 h-3 rounded-full bg-amber-500 opacity-80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500 opacity-80" />
            </div>
            <span className="ml-3 text-xs text-slate-300 font-medium flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-indigo-400" />
              vaishnavi@portfolio: ~ (javascript)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setHistory([{ type: 'system', content: 'Terminal screen reset.' }])}
              className="p-1 text-slate-400 hover:text-white"
              title="Reset Terminal"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-white"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Output Area */}
        <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-2.5 text-slate-300 leading-relaxed">
          {history.map((item, idx) => (
            <div key={idx} className="whitespace-pre-wrap">
              {item.type === 'system' && (
                <div className="text-slate-500 italic">{item.content}</div>
              )}
              {item.type === 'user' && (
                <div className="text-indigo-300 font-semibold">{item.content}</div>
              )}
              {item.type === 'output' && (
                <div className="text-slate-300 pl-2 border-l border-slate-800">{item.content}</div>
              )}
              {item.type === 'error' && (
                <div className="text-rose-400">{item.content}</div>
              )}
              {item.type === 'success' && (
                <div className="text-emerald-400 bg-emerald-950/30 p-2.5 rounded border border-emerald-500/30">{item.content}</div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Bar */}
        <form onSubmit={handleCommand} className="p-3 bg-slate-900/90 border-t border-slate-800 flex items-center gap-2">
          <span className="text-emerald-400 font-bold">$</span>
          <input
            id="terminal-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help', 'projects', 'skills'..."
            autoFocus
            className="flex-1 bg-transparent text-slate-100 placeholder:text-slate-600 focus:outline-none text-xs sm:text-sm"
          />
          <button
            type="submit"
            className="px-2.5 py-1 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 rounded"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
