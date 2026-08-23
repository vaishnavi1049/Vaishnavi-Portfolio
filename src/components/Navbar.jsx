import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Terminal, 
  FileText, 
  Code2, 
  Github, 
  Linkedin, 
  Mail,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Navbar = ({ onOpenResume, onOpenTerminal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['hero', 'projects', 'skills', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <a 
            id="brand-logo-link"
            href="#hero" 
            className="group flex items-center gap-2.5 text-slate-100 font-semibold text-lg tracking-tight"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-indigo-600 to-indigo-400 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <Code2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-xs text-indigo-400 font-mono tracking-wider font-normal flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Full Stack Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
            {navLinks.map((link) => {
              const sectionKey = link.href.replace('#', '');
              const isActive = activeSection === sectionKey;
              return (
                <a
                  key={link.name}
                  id={`nav-link-${sectionKey}`}
                  href={link.href}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive 
                      ? 'bg-indigo-600 text-white shadow-sm' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Quick Actions (Terminal, Resume, Socials) */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Terminal Trigger */}
            <button
              id="nav-terminal-btn"
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 rounded-md hover:text-indigo-300 hover:border-indigo-500/50 transition-all cursor-pointer"
              title="Open Interactive Terminal"
            >
              <Terminal className="w-3.5 h-3.5 text-indigo-400" />
              <span>CLI</span>
            </button>

            {/* Resume Button */}
            <button
              id="nav-resume-btn"
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 rounded-md shadow-sm shadow-indigo-600/30 transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </button>

            {/* Divider */}
            <div className="h-4 w-px bg-slate-800 mx-1"></div>

            {/* Social Icons */}
            <a 
              id="nav-github-link"
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-md transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              id="nav-linkedin-link"
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-md transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              id="mobile-resume-trigger"
              onClick={onOpenResume}
              className="p-2 text-xs font-semibold text-white bg-indigo-600 rounded-md shadow-sm"
              title="Resume"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-menu"
          className="md:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-3 pb-5 space-y-2 backdrop-blur-lg animate-in slide-in-from-top duration-200"
        >
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
            <button
              id="mobile-terminal-btn"
              onClick={() => {
                onOpenTerminal();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-indigo-300"
            >
              <Terminal className="w-4 h-4" />
              <span>Interactive CLI</span>
            </button>
            <button
              id="mobile-resume-full-btn"
              onClick={() => {
                onOpenResume();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 p-2.5 bg-indigo-600/20 border border-indigo-500/30 rounded-lg text-xs font-semibold text-indigo-200"
            >
              <FileText className="w-4 h-4" />
              <span>Full Resume</span>
            </button>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900 rounded-md transition-colors"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-3 flex items-center justify-around border-t border-slate-800/80">
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-white"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-white"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-white"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
