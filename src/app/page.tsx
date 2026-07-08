"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Envelope,
  LinkedinLogo,
  GithubLogo,
  Globe,
  Sun,
  Moon,
  ArrowRight,
  CheckCircle,
  GraduationCap,
  Briefcase,
  Certificate,
  Sparkle,
  List,
  X,
  CaretRight
} from "@phosphor-icons/react";

export default function Home() {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCertTab, setActiveCertTab] = useState("all");

  // Synchronize dark/light mode class
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  // Read saved theme from system/local storage on load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  const experience = [
    {
      company: "The Mitra Group",
      role: "Founder & CEO",
      period: "1995 - Present",
      location: "Austin, TX",
      description:
        "Established a boutique leadership development consultancy. Delivered executive coaching, organizational alignment, and talent development solutions for over 1,200 clients, ranging from start-ups to Fortune 50 companies. Focused on driving culture change and sustainable high performance.",
    },
    {
      company: "JMJ Associates",
      role: "Senior Consultant",
      period: "2008 - Present",
      location: "Austin, TX",
      description:
        "Manage execution of safety culture transformation programs with budgets up to $5M. Lead major organizational changes for global organizations in manufacturing, energy, construction, and pharmaceutical industries on $40B+ giga-projects. Build stakeholder relationships and prototype training programs.",
    },
    {
      company: "JMJ Associates",
      role: "Global Knowledge & Training Development Leader",
      period: "2013 - 2014",
      location: "Austin, TX",
      description:
        "Led the High-Performance Projects and Assessments practice areas globally. Developed tools and programs to accelerate team alignment. Pioneered an online Safety Leadership Assessment tool, which reduced test analysis times by 80% while enhancing the precision of coaching feedback.",
    },
    {
      company: "ExxonMobil",
      role: "HR Global Geoscience Training Leader & Geoscientist Roles",
      period: "Previous experience",
      location: "Houston, TX",
      description:
        "Began career as Associate Exploration Geologist and progressed through various drilling and production geologist roles. Discovered a passion for training and talent development and transitioned into HR, designing and implementing global training and talent management programs for over 1,000 geoscientists.",
    },
  ];

  const education = [
    {
      institution: "Indiana University Bloomington",
      credential: "Bachelor of Science (BS)",
      subject: "Geological and Earth Sciences / Geosciences",
      details: "Indiana University Year Abroad Program in France.",
    },
    {
      institution: "University of Houston",
      credential: "Bachelor of Science (BS)",
      subject: "Psychology",
      details: "Focused on human behavior, cognitive frameworks, and alignment.",
    },
    {
      institution: "Dzogchen Osel Ling",
      credential: "Certificate of Completion",
      subject: "Tibetan Buddhism Meditation, Yoga, and Dzogchen",
      details: "Rigorous 4-year lama training program in traditional Tibetan meditation and yoga practices. Included four 100-day cloistered, silent retreats.",
    },
    {
      institution: "Université de Strasbourg, France",
      credential: "1st & 2nd Degrees",
      subject: "French Language Studies",
      details: "Conducted fully in French as part of year-abroad language mastery program.",
    },
  ];

  const certifications = [
    {
      title: "Performance Neuroscience Coaching Certification (PNCC)",
      issuer: "Flow Research Collective",
      date: "Jul 2025",
      category: "neuroscience",
    },
    {
      title: "Positive Intelligence® Coach",
      issuer: "Positive Intelligence",
      date: "Oct 2024",
      category: "mindset",
    },
    {
      title: "Holistic Coach Certification Program",
      issuer: "Radiant Health Institute (In process)",
      date: "Jan 2025",
      category: "coaching",
    },
    {
      title: "Inner MBA Program",
      issuer: "Sounds True",
      date: "Aug 2023",
      category: "coaching",
    },
    {
      title: "Certified Business & Mindset Facilitator",
      issuer: "David Bayer Businesses",
      date: "Aug 2025",
      category: "mindset",
    },
    {
      title: "Team Coaching Foundations Certified Coach",
      issuer: "Global Team Coaching Institute (GTCI)",
      date: "Oct 2020",
      category: "coaching",
    },
    {
      title: "Coach Master Toolkit Certification",
      issuer: "Coaching.com",
      date: "Jul 2019",
      category: "coaching",
    },
    {
      title: "Conversational Intelligence Certification",
      issuer: "Coaching.com (Judith Glasier)",
      date: "Dec 2017",
      category: "neuroscience",
    },
    {
      title: "Spiritual Intelligence SQ21 Assessment",
      issuer: "Deep Change, LLC",
      date: "Nov 2011",
      category: "mindset",
    },
    {
      title: "The Shift Method® Subconscious Transformation Facilitator Training",
      issuer: "The Shift Method®",
      date: "Dec 2022",
      category: "mindset",
    },
    {
      title: "SDMS (Self-Directed Motivation System) Management Development Coaching",
      issuer: "Informatica",
      date: "May 2005",
      category: "coaching",
    },
    {
      title: "Corporate Advanced Coaching Intensive",
      issuer: "The Sherry Lowry Group",
      date: "May 2005",
      category: "coaching",
    },
    {
      title: "Primary Certification, Marshall Goldsmith Executive Coaching",
      issuer: "Marshall Goldsmith Stakeholder Centered Coaching",
      date: "Apr 2004",
      category: "coaching",
    },
    {
      title: "Halpin Leadership Strategist",
      issuer: "Halpin Lenard & Partners",
      date: "Jun 2004",
      category: "mindset",
    },
    {
      title: "Leadership Coaching Program",
      issuer: "Right Management Consultants",
      date: "Feb 2003",
      category: "coaching",
    },
    {
      title: "ICF Member Badge",
      issuer: "International Coaching Federation",
      date: "Feb 2006",
      category: "coaching",
    },
    {
      title: "Coach Graduate Certification",
      issuer: "Legacy Learning, LLC",
      date: "Aug 2005",
      category: "coaching",
    },
    {
      title: "Over 300 Days of Professional Development in Coaching, Consulting & Training",
      issuer: "ExxonMobil, JMJ Associates, Sage Innovations, Cognitive Edge",
      date: "Various",
      category: "coaching",
    },
  ];

  const categories = [
    { id: "all", label: "All Credentials" },
    { id: "neuroscience", label: "Neuroscience & Flow" },
    { id: "mindset", label: "Mindset & Facilitation" },
    { id: "coaching", label: "Executive Coaching" },
  ];

  const filteredCerts =
    activeCertTab === "all"
      ? certifications
      : certifications.filter((c) => c.category === activeCertTab);

  return (
    <div className="w-full min-h-screen bg-background text-foreground flex flex-col items-center transition-colors duration-300">
      {/* 1. Header Navigation */}
      <header className="sticky top-0 z-50 h-[72px] w-full border-b border-card-border/80 bg-background/80 backdrop-blur-md flex justify-center">
        <div className="mx-auto flex h-full max-w-5xl items-center justify-between px-6 sm:px-12">
          <a href="#" className="text-lg font-bold tracking-tight text-foreground">
            Synthia Smith
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex text-sm font-medium">
            <a href="#about" className="text-muted hover:text-foreground transition-colors">
              About
            </a>
            <a href="#philosophy" className="text-muted hover:text-foreground transition-colors">
              Philosophy
            </a>
            <a href="#featured" className="text-muted hover:text-foreground transition-colors">
              Featured Work
            </a>
            <a href="#experience" className="text-muted hover:text-foreground transition-colors">
              Experience
            </a>
            <a href="#education" className="text-muted hover:text-foreground transition-colors">
              Education
            </a>
            <a href="#certifications" className="text-muted hover:text-foreground transition-colors">
              Certifications
            </a>
            <a
              href="#contact"
              className="rounded-full bg-accent px-4 py-2 text-sm text-accent-foreground font-semibold transition-transform hover:scale-105 active:scale-[0.98]"
            >
              Let&apos;s Talk
            </a>
            <button
              onClick={toggleTheme}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-card-border hover:bg-card-border/30 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          {/* Mobile nav button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-card-border"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1 text-foreground"
              aria-label="Menu"
            >
              {menuOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[72px] z-40 border-b border-card-border bg-background px-6 py-8 md:hidden shadow-lg"
          >
            <nav className="flex flex-col gap-5 text-base font-medium">
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="text-muted hover:text-foreground"
              >
                About
              </a>
              <a
                href="#philosophy"
                onClick={() => setMenuOpen(false)}
                className="text-muted hover:text-foreground"
              >
                Philosophy
              </a>
              <a
                href="#featured"
                onClick={() => setMenuOpen(false)}
                className="text-muted hover:text-foreground"
              >
                Featured Work
              </a>
              <a
                href="#experience"
                onClick={() => setMenuOpen(false)}
                className="text-muted hover:text-foreground"
              >
                Experience
              </a>
              <a
                href="#education"
                onClick={() => setMenuOpen(false)}
                className="text-muted hover:text-foreground"
              >
                Education
              </a>
              <a
                href="#certifications"
                onClick={() => setMenuOpen(false)}
                className="text-muted hover:text-foreground"
              >
                Certifications
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="inline-block rounded-full bg-accent py-2 text-center text-accent-foreground font-semibold"
              >
                Let&apos;s Talk
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Container */}
      <main className="w-full max-w-5xl px-6 sm:px-12 py-12 space-y-36 md:space-y-48">
        
        {/* 2. Hero Section */}
        <section className="flex min-h-[calc(85vh-72px)] flex-col justify-center py-12">
          <div className="grid gap-12 md:grid-cols-12 md:items-center">
            {/* Left Content */}
            <div className="space-y-8 md:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-secondary shadow-sm">
                <Sparkle size={12} weight="fill" />
                Executive Coaching
              </div>
              <h1 className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl lg:text-6xl">
                Lead with calm. <br />
                Perform with clarity. <br />
                <span className="text-accent">Thrive in change.</span>
              </h1>
              <p className="max-w-[45ch] text-base text-muted md:text-lg leading-relaxed">
                Helping high-achieving leaders realign success with what matters most, so they can lead powerfully without losing themselves.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm text-accent-foreground font-semibold transition-transform hover:scale-105 active:scale-[0.98] shadow-sm"
                >
                  Start a Conversation
                  <ArrowRight size={14} weight="bold" />
                </a>
                <a
                  href="https://www.linkedin.com/in/synthia-smith/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:bg-card-border/30"
                >
                  <LinkedinLogo size={18} />
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            {/* Right Headshot Image */}
            <div className="flex justify-center md:col-span-5 md:justify-end">
              <div className="relative">
                {/* Decorative background blur */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-accent to-accent-secondary opacity-30 blur-lg"></div>
                <Image
                  src="/synthia_headshot.jpg"
                  alt="Synthia Smith"
                  width={340}
                  height={340}
                  priority
                  className="relative rounded-2xl border border-card-border object-cover shadow-xl transition-transform hover:scale-[1.02] duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. About Section */}
        <section id="about" className="scroll-mt-24">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">About Synthia</h2>
              <div className="mt-4 h-0.5 w-12 bg-accent-secondary rounded-full"></div>
            </div>
            <div className="md:col-span-8 space-y-6">
              <p className="text-lg font-light leading-relaxed text-foreground/90 max-w-[65ch]">
                Is the cost of your success starting to feel too high?
              </p>
              <p className="text-base text-muted leading-relaxed max-w-[65ch]">
                You’ve built success the hard way, with grit, intelligence, and a deep drive to make a difference. Yet something’s off. The pace, the pressure, and the compromises are catching up.
              </p>
              <p className="text-base text-muted leading-relaxed max-w-[65ch]">
                I help high-achieving leaders realign success with what matters most, so they can lead powerfully without losing themselves.
              </p>
              <p className="text-base text-muted leading-relaxed max-w-[65ch]">
                For nearly three decades, I’ve partnered with leaders and teams to build cultures where wellbeing fuels performance because when leaders are clear, centered, and connected, they do their best work and live their best lives.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Philosophy & Approach */}
        <section id="philosophy" className="scroll-mt-24">
          <div className="space-y-16">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Philosophy & Approach</h2>
              <p className="mt-3 text-sm text-muted">
                Combining science, strategic experience, and deep leadership practices to drive measurable, lasting change.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Card 1: What makes my approach different */}
              <div className="rounded-2xl border border-card-border bg-card/60 p-8 shadow-sm space-y-6 hover:shadow-md transition-shadow">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Sparkle size={20} weight="bold" />
                </div>
                <h3 className="text-xl font-bold tracking-tight">What makes my approach different</h3>
                <ul className="space-y-4 text-sm text-muted">
                  <li className="flex gap-3">
                    <CheckCircle size={18} className="text-accent-secondary shrink-0 mt-0.5" weight="fill" />
                    <span>
                      <strong className="text-foreground font-semibold">Transformational depth:</strong> Decades of coaching and consulting experience meet the inner work of authentic leadership.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle size={18} className="text-accent-secondary shrink-0 mt-0.5" weight="fill" />
                    <span>
                      <strong className="text-foreground font-semibold">Science-based mental fitness:</strong> Mindset frameworks driven by neuroscience to strengthen resilience and accelerate team results.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle size={18} className="text-accent-secondary shrink-0 mt-0.5" weight="fill" />
                    <span>
                      <strong className="text-foreground font-semibold">Natural, grounded growth:</strong> Coaching that blends intuition, humor, and grounded insight so development feels natural, never forced.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Card 2: Clients experience */}
              <div className="rounded-2xl border border-card-border bg-card/60 p-8 shadow-sm space-y-6 hover:shadow-md transition-shadow">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-secondary/10 text-accent-secondary">
                  <Certificate size={20} weight="bold" />
                </div>
                <h3 className="text-xl font-bold tracking-tight">Clients experience</h3>
                <ul className="space-y-4 text-sm text-muted">
                  <li className="flex gap-3">
                    <CheckCircle size={18} className="text-accent-secondary shrink-0 mt-0.5" weight="fill" />
                    <span>
                      <strong className="text-foreground font-semibold">Calm confidence under pressure:</strong> Develop the neurological capacity for sharper, grounded decisions in high-stress environments.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle size={18} className="text-accent-secondary shrink-0 mt-0.5" weight="fill" />
                    <span>
                      <strong className="text-foreground font-semibold">Increased collaboration:</strong> Strengthen organizational connections, building safety cultures that fuel collaboration and innovation.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle size={18} className="text-accent-secondary shrink-0 mt-0.5" weight="fill" />
                    <span>
                      <strong className="text-foreground font-semibold">Sustainable performance:</strong> Redefine productivity around wellbeing, ensuring leaders execute on goals without burning out.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Featured Work Section */}
        <section id="featured" className="scroll-mt-24">
          <div className="space-y-16">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Featured Solutions</h2>
              <p className="mt-3 text-sm text-muted">
                Demonstrated impact across organizational systems, scale, and performance tracking.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-between rounded-2xl border border-card-border bg-card/60 p-8 shadow-sm">
                <div className="space-y-4">
                  <div className="text-xs uppercase tracking-wider text-accent-secondary font-bold font-mono">Tools & Innovation</div>
                  <h3 className="text-xl font-bold tracking-tight">Online Safety Leadership Assessment Tool</h3>
                  <p className="text-xs text-muted leading-relaxed">
                    Designed and pioneered a digital diagnostic assessment tool for global organizations. This system consolidated data gathering, cutting analysis and administration turnaround times by 80% while enhancing custom feedback.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-card-border/40 flex items-center justify-between">
                  <span className="text-3xl font-extrabold text-accent">80%</span>
                  <span className="text-[10px] text-muted max-w-[15ch] text-right font-medium">Reduction in Admin & Analysis Time</span>
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-2xl border border-card-border bg-card/60 p-8 shadow-sm">
                <div className="space-y-4">
                  <div className="text-xs uppercase tracking-wider text-accent font-bold font-mono">Program Management</div>
                  <h3 className="text-xl font-bold tracking-tight">Safety Culture Transformation</h3>
                  <p className="text-xs text-muted leading-relaxed">
                    Managed culture change programs with budgets up to $5M in global energy, manufacturing, and pharmaceutical organizations. Successfully integrated behavioral change across large-scale projects up to 13,000 staff.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-card-border/40 flex items-center justify-between">
                  <span className="text-3xl font-extrabold text-accent-secondary">$40B+</span>
                  <span className="text-[10px] text-muted max-w-[15ch] text-right font-medium">Giga-Projects Supported Globally</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Work Experience (Timeline) */}
        <section id="experience" className="scroll-mt-24">
          <div className="space-y-16">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Executive Journey</h2>
              <p className="mt-3 text-sm text-muted">
                Nearly three decades of leadership, organizational development, and consulting experience.
              </p>
            </div>

            <div className="relative pl-6 md:pl-8 border-l border-timeline-line space-y-12 max-w-3xl">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline point */}
                  <div className="absolute -left-[30px] md:-left-[38px] top-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-accent-secondary ring-4 ring-background"></div>
                  
                  <div className="space-y-2">
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                      <h3 className="text-lg font-bold tracking-tight text-foreground">{exp.company}</h3>
                      {exp.period && (
                        <span className="inline-block text-[10px] uppercase tracking-wider text-accent font-bold font-mono">{exp.period}</span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs text-muted">
                      <span className="font-semibold text-foreground/80">{exp.role}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed pt-1 max-w-[70ch]">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Education Section */}
        <section id="education" className="scroll-mt-24">
          <div className="space-y-16">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Academic & Personal Training</h2>
              <p className="mt-3 text-sm text-muted">
                A multidisciplinary background combining geology, human psychology, language study, and mindfulness.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl">
              {education.map((edu, idx) => (
                <div key={idx} className="flex flex-col justify-between rounded-2xl border border-card-border bg-card/40 p-6 shadow-sm">
                  <div className="space-y-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <GraduationCap size={18} weight="bold" />
                    </div>
                    <h3 className="text-base font-bold tracking-tight leading-tight">{edu.institution}</h3>
                    <p className="text-[10px] text-accent-secondary uppercase font-bold tracking-wider font-mono">
                      {edu.credential} in {edu.subject}
                    </p>
                    <p className="text-xs text-muted leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Certifications Section */}
        <section id="certifications" className="scroll-mt-24">
          <div className="space-y-16">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Professional Credentials</h2>
              <p className="mt-3 text-sm text-muted">
                Extensive postgraduate development and licenses spanning international coaching, neuroscience, and mental fitness.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 border-b border-card-border/40 pb-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCertTab(cat.id)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition-all hover:bg-card-border/50 ${
                    activeCertTab === cat.id
                      ? "bg-accent text-accent-foreground shadow-sm"
                      : "bg-card border border-card-border text-muted"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Spaced List of Certifications (No Box Borders, Elegant list rows) */}
            <div className="divide-y divide-card-border/40 max-w-4xl">
              {filteredCerts.map((cert, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-6 gap-2 hover:bg-card/20 px-4 rounded-lg transition-colors">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-foreground leading-tight">{cert.title}</h4>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <div className="flex items-center gap-4 justify-between sm:justify-end">
                    <span className="text-[9px] uppercase font-bold tracking-wider text-accent-secondary font-mono bg-accent-secondary/15 px-2 py-0.5 rounded-full">
                      {cert.category === "neuroscience" ? "Neuroscience" : cert.category === "mindset" ? "Mindset" : "Executive"}
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Contact Section */}
        <section id="contact" className="scroll-mt-24">
          <div className="rounded-3xl border border-card-border bg-card/60 p-8 md:p-12 shadow-sm max-w-4xl mx-auto">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-card-border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-secondary">
                  <Sparkle size={12} weight="fill" />
                  Connect
                </div>
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Let&apos;s talk about leadership</h2>
                <p className="text-xs text-muted leading-relaxed max-w-[40ch]">
                  If it&apos;s time to redefine what success means for you or for your organization, let&apos;s schedule a discussion. Reach out directly or browse my professional links.
                </p>
                <div className="space-y-4 text-xs font-medium">
                  <a
                    href="mailto:synthia@themitragroup.com"
                    className="flex items-center gap-3 text-muted hover:text-foreground transition-colors"
                  >
                    <Envelope size={18} className="text-accent" />
                    synthia@themitragroup.com
                  </a>
                  <a
                    href="http://www.themitragroup.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted hover:text-foreground transition-colors"
                  >
                    <Globe size={18} className="text-accent" />
                    www.themitragroup.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-4">
                <a
                  href="mailto:synthia@themitragroup.com"
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-accent px-6 py-4 text-sm text-accent-foreground font-semibold transition-transform hover:scale-105 active:scale-[0.98] shadow-sm"
                >
                  <Envelope size={18} weight="bold" />
                  Email Synthia Direct
                </a>
                <a
                  href="https://www.linkedin.com/in/synthia-smith/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded-xl border border-card-border bg-card px-6 py-4 text-sm font-semibold transition-colors hover:bg-card-border/30"
                >
                  <LinkedinLogo size={18} />
                  Connect on LinkedIn
                </a>
                <a
                  href="https://github.com/synthiasmith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded-xl border border-card-border bg-card px-6 py-4 text-sm font-semibold transition-colors hover:bg-card-border/30"
                >
                  <GithubLogo size={18} />
                  Explore GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-card-border/40 py-8 bg-card/10 w-full flex justify-center">
        <div className="mx-auto max-w-5xl px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} Synthia Smith. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/synthia-smith/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              LinkedIn
            </a>
            <a href="http://www.themitragroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              The Mitra Group
            </a>
            <a href="https://github.com/synthiasmith" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
