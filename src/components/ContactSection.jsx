import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Linkedin, 
  Github, 
  MessageSquare,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 900);
  };

  const copyText = (text, type) => {
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
    <section id="contact" className="py-20 md:py-28 relative">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-indigo-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-xs font-mono text-indigo-300">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Let's Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Get in Touch & Work Together
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Currently open for Full Stack Developer, React.js Frontend, or Node.js Backend engineering positions. Reach out directly or leave a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Details & Quick Copy (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Cards */}
            <div className="space-y-3">
              
              {/* Email Card */}
              <div 
                id="contact-email-card"
                className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-indigo-600/10 text-indigo-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Email Address
                    </span>
                    <a 
                      href={`mailto:${personalInfo.email}`} 
                      className="text-sm font-semibold text-white hover:text-indigo-300 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  id="contact-copy-email-btn"
                  onClick={() => copyText(personalInfo.email, 'email')}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div 
                id="contact-phone-card"
                className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-emerald-600/10 text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Phone / Mobile
                    </span>
                    <a 
                      href={`tel:${personalInfo.phone}`} 
                      className="text-sm font-semibold text-white hover:text-emerald-300 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  id="contact-copy-phone-btn"
                  onClick={() => copyText(personalInfo.phone, 'phone')}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div 
                id="contact-location-card"
                className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center gap-3.5"
              >
                <div className="p-2.5 rounded-lg bg-cyan-600/10 text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

            </div>

            {/* Social & Professional Links */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono">
                Professional Profiles
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  id="contact-linkedin-link"
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-indigo-500/50 flex items-center justify-between text-xs font-medium text-slate-200 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-300" />
                </a>

                <a
                  id="contact-github-link"
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-indigo-500/50 flex items-center justify-between text-xs font-medium text-slate-200 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-slate-300" />
                    <span>GitHub</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-300" />
                </a>
              </div>
            </div>

            {/* Availability Callout */}
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/25 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></div>
              <p className="text-xs text-emerald-300 font-medium">
                Immediate availability for interviews & technical discussions.
              </p>
            </div>

          </div>

          {/* Right Column: Contact / Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div 
              id="contact-form-container"
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-sm relative"
            >
              <h3 className="text-xl font-bold text-white mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 font-mono mb-6">
                Fill in the details below to initiate an inquiry.
              </p>

              {isSent ? (
                <div 
                  id="contact-success-banner"
                  className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-2 animate-in fade-in zoom-in-95 duration-200"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Thank you for reaching out. Vaishnavi will review your message and reply promptly.
                  </p>
                </div>
              ) : (
                <form id="contact-message-form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-mono text-slate-300">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane Doe / Recruiter"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-mono text-slate-300">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-mono text-slate-300">
                      Subject / Role *
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Full Stack Developer Opportunity"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-mono text-slate-300">
                      Message / Project Details *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Vaishnavi, we loved your work on government transit CMS platforms and would like to discuss..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
