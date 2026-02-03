import { useState, useEffect } from 'react';
import { ArrowRight, BookOpen, Code, Users, Zap, ExternalLink, Github, MessageCircle, Rocket, Layers, Shield, ChevronDown, Star, Terminal, FileCode, Sparkles, CheckCircle, Circle, GraduationCap, Hammer, Send, Building, HelpCircle, ChevronRight, Menu, X } from 'lucide-react';

export default function CantonLanding() {
  const [scrollY, setScrollY] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const roadmapSteps = [
    {
      step: 1,
      title: 'Learn',
      subtitle: 'Master the fundamentals',
      icon: GraduationCap,
      color: 'from-orange-500 to-orange-600',
      items: [
        { label: 'StackUp Canton & Daml Fundamentals', link: 'https://earn.stackup.dev/learn/pathways/canton-and-daml-fundamentals-328a', type: 'recommended' },
        { label: 'Official Daml Documentation', link: 'https://docs.daml.com/', type: 'link' },
        { label: 'Canton Network Documentation', link: 'https://docs.canton.network/', type: 'link' },
        { label: 'Daml Language Primer', link: 'https://docs.daml.com/daml/intro/0_Intro.html', type: 'link' },
      ]
    },
    {
      step: 2,
      title: 'Build',
      subtitle: 'Zero-to-one development',
      icon: Hammer,
      color: 'from-red-500 to-red-600',
      checklist: [
        { task: 'Learn how to build applications on Canton Network', link: 'https://docs.digitalasset.com/build/3.4/index.html' },
        { task: 'Set up local development environment', link: 'https://docs.daml.com/getting-started/installation.html' },
        { task: 'Join Discord Community', link: 'https://discord.gg/canton' },
        { task: 'Join Telegram Community', link: 'https://t.me/cantonnetwork1' },
      ],
      resources: [
        { label: 'Fungible Token CIP Template', link: '#' },
        { label: 'Tokenization Examples', link: '#' },
      ]
    },
    {
      step: 3,
      title: 'Go Live',
      subtitle: 'Launch & get support',
      icon: Send,
      color: 'from-red-600 to-red-700',
      description: 'Ready to deploy? Request validator sponsorship or get dedicated integration support from our team.',
      cta: { label: 'Request Sponsorship', link: 'mailto:canton@angelhack.com?subject=Validator%20Sponsorship%20Request' }
    }
  ];

  const evmDifferences = [
    { concept: 'State', evm: 'Global, accessible by all', canton: 'Validator-scoped (isolated)' },
    { concept: 'Contracts', evm: 'Solidity / Vyper', canton: 'Daml' },
    { concept: 'Privacy', evm: 'Public by default', canton: 'Private by default' },
    { concept: 'Finality', evm: 'Probabilistic', canton: 'Atomic' }
  ];

  const faqs = [
    { q: 'What is Canton Network?', a: 'Canton is a privacy-enabled, interoperable blockchain network designed for institutional use cases. It uses Daml smart contracts and provides atomic settlement with sub-second finality.', link: 'https://www.canton.network/' },
    { q: 'How is Canton different from Ethereum?', a: 'Unlike Ethereum\'s global state, Canton uses validator-scoped state where DARs on one validator aren\'t accessible by another. Canton is private by default with atomic finality.', link: null },
    { q: 'What is Daml?', a: 'Daml is a purpose-built smart contract language designed for privacy, composability, and interoperability. It\'s used across Canton Network applications.', link: 'https://docs.daml.com/' },
    { q: 'How do I get testnet tokens?', a: 'Visit the Canton Network documentation for faucet information and testnet access instructions.', link: 'https://docs.canton.network/' },
  ];

  const partners = [
    { name: 'QCP', role: 'Market Maker' },
    { name: 'Chainlink', role: 'Price Feeds' },
    { name: 'Thethenauts', role: 'Options' },
    { name: 'Tenzro', role: 'AI Daml Expert & Knowledge Building' },
    { name: 'Letsexchange', role: 'Cross-Chain Bridging' },
    { name: 'Nuxaris', role: 'Cross-Chain Bridging' },
    { name: 'Block Mosaic', role: 'Compliance Solutions' },
  ];

  const services = [
    { title: 'Validator Sponsorship', desc: 'Get sponsored access to Canton Network validators for your project.' },
    { title: 'Integration Support', desc: 'Technical guidance for integrating with Kairo and Canton ecosystem.' },
    { title: 'Developer Operations', desc: 'Ongoing operational support for Canton-based applications.' },
  ];

  const KairoLogo = ({ className = "w-8 h-8" }) => (
    <svg viewBox="0 0 40 40" className={className} fill="currentColor">
      <circle cx="8" cy="20" r="4" />
      <circle cx="20" cy="8" r="3" />
      <circle cx="20" cy="20" r="5" />
      <circle cx="32" cy="14" r="3" />
      <circle cx="32" cy="26" r="3" />
      <line x1="11" y1="18" x2="16" y2="12" stroke="currentColor" strokeWidth="2.5" />
      <line x1="12" y1="20" x2="15" y2="20" stroke="currentColor" strokeWidth="2.5" />
      <line x1="25" y1="18" x2="29" y2="15" stroke="currentColor" strokeWidth="2.5" />
      <line x1="25" y1="22" x2="29" y2="25" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );

  return (
    <div className="h-screen bg-black text-white overflow-y-auto snap-y snap-mandatory">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-64 md:w-96 h-64 md:h-96 rounded-full blur-3xl opacity-40" style={{ top: '5%', left: '5%', background: 'radial-gradient(circle, #FF8E02 0%, transparent 70%)', transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.02}px)` }} />
        <div className="absolute w-56 md:w-80 h-56 md:h-80 rounded-full blur-3xl opacity-40" style={{ top: '40%', right: '5%', background: 'radial-gradient(circle, #FA2E04 0%, transparent 70%)', transform: `translate(${-scrollY * 0.03}px, ${scrollY * 0.04}px)` }} />
        <div className="absolute w-48 md:w-72 h-48 md:h-72 rounded-full blur-3xl opacity-30" style={{ bottom: '10%', left: '25%', background: 'radial-gradient(circle, #B70001 0%, transparent 70%)', transform: `translate(${scrollY * 0.02}px, ${-scrollY * 0.03}px)` }} />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(rgba(255, 142, 2, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 142, 2, 0.2) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/70 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-black">
              <KairoLogo className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="font-bold text-lg sm:text-xl">Canton<span className="text-orange-500">Hub</span></span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#roadmap" className="text-sm text-gray-400 hover:text-white transition-colors">Roadmap</a>
            <a href="#partners" className="text-sm text-gray-400 hover:text-white transition-colors">Partners</a>
            <a href="#contact" className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 text-sm font-medium hover:opacity-90 transition-opacity text-black">Get Support</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/5">
            <div className="px-4 py-4 flex flex-col gap-4">
              <a href="#roadmap" onClick={handleNavClick} className="text-gray-400 hover:text-white transition-colors py-2">Roadmap</a>
              <a href="#partners" onClick={handleNavClick} className="text-gray-400 hover:text-white transition-colors py-2">Partners</a>
              <a href="#contact" onClick={handleNavClick} className="px-4 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 text-sm font-medium text-black text-center">Get Support</a>
            </div>
          </div>
        )}
      </nav>

      {/* Page 1: Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16 sm:pt-20 snap-start snap-always">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6 sm:mb-8">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
            <span className="text-xs sm:text-sm text-orange-300">Your Gateway to Canton Network</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Build on{' '}
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-red-700 bg-clip-text text-transparent">
              Canton Network
            </span>
          </h1>

          <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
            Everything you need to start building privacy-first, interoperable applications.
            From learning to launch—your one-stop onboarding hub.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <a href="https://earn.stackup.dev/learn/pathways/canton-and-daml-fundamentals-328a" target="_blank" rel="noopener noreferrer" className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 font-medium text-base sm:text-lg flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-orange-500/25 transition-all text-black">
              Learn About Canton Network
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#roadmap" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white/5 border border-white/10 font-medium text-base sm:text-lg flex items-center justify-center gap-3 hover:bg-white/10 hover:border-orange-500/30 transition-all">
              <Code className="w-4 h-4 sm:w-5 sm:h-5" />
              Start Building
            </a>
          </div>

          <div className="mt-10 sm:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-500 px-4">
            <div className="flex items-center gap-2"><Shield className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500/70" /><span>Privacy-First</span></div>
            <div className="flex items-center gap-2"><Zap className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500/70" /><span>Atomic Finality</span></div>
            <div className="flex items-center gap-2"><Layers className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500/70" /><span>Interoperable</span></div>
          </div>
        </div>
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500/50" />
        </div>
      </section>

      {/* Page 2: Roadmap to Building */}
      <section id="roadmap" className="relative min-h-screen flex items-center py-16 sm:py-32 px-4 sm:px-6 snap-start snap-always">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">Roadmap to Building on Canton</h2>
            <p className="text-gray-400 text-sm sm:text-lg">Your three-step journey from learning to launch</p>
          </div>

          {/* 3-Step Roadmap */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-20">
            {roadmapSteps.map((step, i) => (
              <div key={step.step} className="relative">
                {i < 2 && <div className="hidden lg:block absolute top-16 -right-3 w-6 h-0.5 bg-gradient-to-r from-orange-500/50 to-transparent z-10" />}
                <div className="h-full p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center text-black font-bold text-base sm:text-lg`}>
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold">{step.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-400">{step.subtitle}</p>
                    </div>
                  </div>

                  {step.items && (
                    <div className="space-y-2">
                      {step.items.map((item, j) => (
                        <a key={j} href={item.link} target="_blank" rel="noopener noreferrer" className={`flex items-start gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors ${item.type === 'recommended' ? 'bg-orange-500/10 border border-orange-500/20' : ''}`}>
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-gray-300 leading-tight">{item.label}</span>
                          {item.type === 'recommended' && <span className="ml-auto text-[10px] sm:text-xs bg-orange-500 text-black px-1.5 sm:px-2 py-0.5 rounded-full whitespace-nowrap">Recommended</span>}
                        </a>
                      ))}
                    </div>
                  )}

                  {step.checklist && (
                    <div className="space-y-2 sm:space-y-3 mb-4">
                      <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wide">Development Checklist</p>
                      {step.checklist.map((item, j) => (
                        <a key={j} href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-xs sm:text-sm text-gray-300 hover:text-white transition-colors">
                          <Circle className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500/50 flex-shrink-0 mt-0.5" />
                          <span className="leading-tight">{item.task}</span>
                        </a>
                      ))}
                    </div>
                  )}

                  {step.resources && (
                    <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                      <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wide">Resources</p>
                      {step.resources.map((res, j) => (
                        <a key={j} href={res.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs sm:text-sm text-orange-400 hover:text-orange-300 transition-colors">
                          <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                          {res.label}
                        </a>
                      ))}
                    </div>
                  )}

                  {step.description && (
                    <div>
                      <p className="text-gray-400 text-xs sm:text-sm mb-4">{step.description}</p>
                      <a href={step.cta.link} className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-gradient-to-r ${step.color} text-black font-medium text-xs sm:text-sm hover:shadow-lg transition-all`}>
                        {step.cta.label}
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Canton vs EVM Comparison */}
          <div className="mb-10 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Canton vs EVM at a Glance</h3>
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-x-auto max-w-3xl mx-auto">
              <div className="min-w-[320px]">
                <div className="grid grid-cols-3 gap-2 sm:gap-4 p-2 sm:p-3 bg-white/5 text-xs sm:text-sm font-medium">
                  <div className="text-gray-400">Concept</div>
                  <div className="text-gray-500">EVM</div>
                  <div className="text-orange-500">Canton</div>
                </div>
                {evmDifferences.map((diff, i) => (
                  <div key={i} className="grid grid-cols-3 gap-2 sm:gap-4 p-2 sm:p-3 border-t border-white/5 text-xs sm:text-sm">
                    <div className="text-white">{diff.concept}</div>
                    <div className="text-gray-500">{diff.evm}</div>
                    <div className="text-gray-300">{diff.canton}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Frequently Asked Questions</h3>
            <div className="space-y-2 sm:space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-white/5 transition-colors">
                    <span className="font-medium text-sm sm:text-base pr-4">{faq.q}</span>
                    <ChevronRight className={`w-4 h-4 sm:w-5 sm:h-5 text-orange-500 transition-transform flex-shrink-0 ${openFaq === i ? 'rotate-90' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-3 sm:px-4 pb-3 sm:pb-4">
                      <p className="text-gray-400 text-xs sm:text-sm">{faq.a}</p>
                      {faq.link && <a href={faq.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-500 text-xs sm:text-sm mt-2 hover:underline">Learn more <ExternalLink className="w-3 h-3" /></a>}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Page 3: Partners */}
      <section id="partners" className="relative min-h-screen flex items-center py-16 sm:py-32 px-4 sm:px-6 snap-start snap-always">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-950/10 to-transparent" />
        <div className="max-w-6xl mx-auto relative w-full">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4 sm:mb-6">
              <Building className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
              <span className="text-xs sm:text-sm text-orange-300">Ecosystem Partners</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">Featured Partners</h2>
            <p className="text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto">Building the Canton Network ecosystem together</p>
          </div>

          {/* Partner Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-16">
            {partners.map((partner, i) => (
              <div key={i} className="group p-4 sm:p-6 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl bg-white/10 flex items-center justify-center text-gray-400 group-hover:bg-orange-500/20 group-hover:text-orange-500 transition-all">
                  <Building className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h4 className="font-bold text-sm sm:text-lg mb-0.5 sm:mb-1">{partner.name}</h4>
                <p className="text-[10px] sm:text-sm text-gray-500 leading-tight">{partner.role}</p>
              </div>
            ))}
          </div>

          {/* Services */}
          <div className="mb-10 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">How We Can Help</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {services.map((service, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20">
                  <h4 className="font-bold text-base sm:text-lg mb-2 text-orange-400">{service.title}</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Page 4: CTA Section */}
      <section id="contact" className="relative min-h-screen flex items-center py-16 sm:py-32 px-4 sm:px-6 snap-start snap-always">
        <div className="max-w-4xl mx-auto w-full">
          <div className="relative p-6 sm:p-12 rounded-2xl sm:rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600" />
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0,0,0,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0,0,0,0.2) 0%, transparent 50%)` }} />

            <div className="relative text-center">
              <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 text-black">Ready to Build on Canton?</h2>
              <p className="text-base sm:text-xl text-black/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Whether you need validator sponsorship, integration support, or guidance getting started,
                AngelHack is your partner in the Canton ecosystem.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <a href="mailto:canton@angelhack.com" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-black text-white font-semibold text-base sm:text-lg hover:bg-gray-900 transition-colors flex items-center justify-center gap-3">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  Talk to Our Team
                </a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeOigsGa_RLwLoGNZivrv1vZQkulVjueRyPYNStGVDRMUp-4A/viewform?pli=1" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white/20 border border-black/20 text-black font-semibold text-base sm:text-lg hover:bg-white/30 transition-colors flex items-center justify-center gap-3">
                  Integrate with Kairo
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 sm:py-12 px-4 sm:px-6 border-t border-white/5 snap-start">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 sm:gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-black">
              <KairoLogo className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <span className="font-semibold text-sm sm:text-base">CantonHub by <span className="text-orange-500">AngelHack</span></span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-400">
            <a href="https://earn.stackup.dev/learn/pathways/canton-and-daml-fundamentals-328a" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors text-center">Learn about Canton Network</a>
            <a href="https://x.com/AngelHack" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Connect with us on Twitter</a>
          </div>

          <div className="text-xs sm:text-sm text-gray-500">
            © 2026 AngelHack. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
