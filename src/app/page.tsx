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
      company: "JMJ Culture Transformation Consulting",
      role: "Senior Consultant",
      period: "2008 - Present",
      location: "Austin, TX",
      description:
        "Manage execution of high-performance and safety culture transformation programs with budgets up to $5M for global organizations in manufacturing, energy, construction, and pharmaceutical industries on $40B+ giga-projects. Pioneered an online Safety Leadership Assessment tool, which reduced analysis and administration times by 80% while enhancing the precision of executive coaching feedback. Build strong stakeholder relationships, lead culture change for up to 13,000 staff, and prototype custom training programs.",
    },
    {
      company: "Mastery of Learning®",
      role: "Lead Facilitator & Curriculum Developer",
      period: "1995 - 2007",
      location: "International",
      description:
        "Co-led, led, and managed logistics for over 200 transformational learning courses over a 12-year span. Expanded the leadership curriculum by developing specialized courses for new markets.",
    },
    {
      company: "Deep Change, LLC",
      role: "Executive Coach & SQ21 Assessor",
      period: "Consulting Projects",
      location: "Austin, TX",
      description:
        "Delivered leadership assessments and coaching utilizing the SQ21 (Spiritual Intelligence) framework. Coached leaders on building emotional and spiritual intelligence to sustain high performance.",
    },
    {
      company: "Equilibria",
      role: "E-Colors Workshop Facilitator",
      period: "Consulting Projects",
      location: "Austin, TX",
      description:
        "Facilitated team alignment and cognitive diversity workshops based on the E-Colors behavioral framework, helping teams enhance communication, safety, and collaboration.",
    },
    {
      company: "ExxonMobil",
      role: "HR Global Geoscience Training Leader & Geoscientist",
      period: "Previous Experience",
      location: "Houston, TX",
      description:
        "Began career as exploration geoscientist and progressed through various drilling and production geoscience leadership roles (including Drilling & Evaluation Geologist, Senior Production Geologist, and Major Fields Coordinator). Discovered a passion for organizational development, training, and talent development, transitioning into HR to design and implement global training and talent management programs for over 1,000 geoscientists globally. Coordinated major in-house events and operations geology programs.",
    },
  ];

  const education = [
    {
      institution: "Indiana University Bloomington",
      credential: "Bachelor of Science (BS)",
      subject: "Geological and Earth Sciences / Geosciences",
      details: "Gained B.S. degree with deep focus on structural geology, field studies, and rigorous physical earth sciences.",
    },
    {
      institution: "Université de Strasbourg, France",
      credential: "Year Abroad Program & French Language Degrees",
      subject: "Geology, Linguistics, and Cultural Immersion",
      details: "Conducted fully in French. Completed structural geology, field camp, and advanced linguistics courses during a year-long cultural immersion.",
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
      details: "Rigorous 4-year lama training program in traditional Tibetan meditation and yoga practices. Included four 108-day cloistered retreats. Core differentiator of 52+ years of formal meditation practice.",
    },
  ];

  const certifications = [
    {
      title: "AI Generalist Accelerator Program",
      issuer: "Outskill",
      date: "2026",
      category: "mindset",
    },
    {
      title: "Thrive Conference Speaking & Business Building",
      issuer: "Rory Varden",
      date: "Feb 2026",
      category: "speaking",
    },
    {
      title: "National Speakers Association (NSA) Member",
      issuer: "NSA Austin Chapter (16 years of chapter events & professional speaking skill development)",
      date: "2009 - Present",
      category: "speaking",
    },
    {
      title: "Vincent Phipps Pro Speaker Kit",
      issuer: "Vincent Phipps",
      date: "Nov 2025",
      category: "speaking",
    },
    {
      title: "Women Rocking Business Coaching Program & Intensive",
      issuer: "Women Rocking Business (56+ days of training)",
      date: "2024 - 2025",
      category: "speaking",
    },
    {
      title: "Performance Neuroscience Coaching Certification (PNCC)",
      issuer: "Flow Research Collective",
      date: "Aug 2025",
      category: "neuroscience",
    },
    {
      title: "Positive Intelligence® Pro Coach Program",
      issuer: "Positive Intelligence",
      date: "Mar 2026",
      category: "mindset",
    },
    {
      title: "Holistic Coach Certification Program",
      issuer: "Radiant Coaches Academy (In progress)",
      date: "2026",
      category: "coaching",
    },
    {
      title: "Inner MBA Program",
      issuer: "Sounds True (12 months)",
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
      date: "Oct 2010",
      category: "coaching",
    },
    {
      title: "Coach Master Toolkit Certification",
      issuer: "Global Team Coaching Institute / Coaching.com",
      date: "Jul 2019",
      category: "coaching",
    },
    {
      title: "Conversational Intelligence Certification",
      issuer: "Coaching.com (Judith Glaser)",
      date: "Dec 2017",
      category: "neuroscience",
    },
    {
      title: "Spiritual Intelligence SQ21 Assessment",
      issuer: "Deep Change, LLC",
      date: "Nov 2010",
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
      issuer: "Pfeifer / Informatica",
      date: "May 2005",
      category: "coaching",
    },
    {
      title: "Corporate Advanced Coaching Intensive",
      issuer: "Corporate Advanced Coaching (Sherry Lowry)",
      date: "May 2005",
      category: "coaching",
    },
    {
      title: "Marshall Goldsmith Behavioral Coaching Certification Program",
      issuer: "Marshall Goldsmith Stakeholder Centered Coaching",
      date: "Apr 2004",
      category: "coaching",
    },
    {
      title: "Halpin Leadership Strategist Executive Coaching Program",
      issuer: "Halpin Companies",
      date: "Jun 2004",
      category: "coaching",
    },
    {
      title: "Right Management Consultants Leadership Coaching Program",
      issuer: "Right Management Consultants",
      date: "Feb 2003",
      category: "coaching",
    },
    {
      title: "Legacy Learning Graduate Coach Certification",
      issuer: "Legacy Learning, LLC",
      date: "Aug 2005",
      category: "coaching",
    },
    {
      title: "An additional 300+ days of professional development in coaching, consulting, and training",
      issuer: "ExxonMobil, JMJ Culture Transformation Consulting, Sage Innovations, Cognitive Edge, WEA, Landmark",
      date: "Various",
      category: "coaching",
    },
  ];

  const categories = [
    { id: "all", label: "All Credentials" },
    { id: "speaking", label: "Speaking & Facilitation" },
    { id: "neuroscience", label: "Neuroscience & Flow" },
    { id: "mindset", label: "Mindset & Leadership" },
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
        <div className="flex h-full w-full max-w-5xl items-center justify-between px-6 sm:px-12">
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
              className="rounded-full bg-accent px-6 py-2.5 text-sm text-accent-foreground font-semibold transition-transform hover:scale-105 active:scale-[0.98] whitespace-nowrap block text-center min-w-[110px]"
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
      <main className="w-full max-w-5xl px-6 sm:px-12 pt-4 pb-24">
        
        {/* 2. Hero Section */}
        <section className="pb-8" style={{ paddingTop: 'clamp(5rem, 8vw, 6.5rem)' }}>
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
                <span className="text-accent">Thrive and change.</span>
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
        <section id="about" className="scroll-mt-24" style={{ paddingTop: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">About Synthia</h2>
              <div className="mt-4 h-0.5 w-12 bg-accent-secondary rounded-full"></div>
            </div>
            <div className="md:col-span-8 space-y-6">
              <h3 className="text-xl font-bold tracking-tight text-foreground">A Category of One for Executive Transformation</h3>
              <p className="text-lg font-light leading-relaxed text-foreground/90 max-w-[65ch]">
                True leadership doesn&apos;t break under pressure; it centers. Most executive coaches speak of performance, and most mainstream mindfulness teachers speak of peace. Very few bridge the two.
              </p>
              <p className="text-base text-muted leading-relaxed max-w-[65ch]">
                For three decades, I have stood at the intersection of rigorous science, industrial-scale execution, and deep inner mastery. My background is built on:
              </p>
              <ul className="space-y-3 text-sm text-muted max-w-[65ch] pl-1">
                <li className="flex gap-3">
                  <span className="text-accent-secondary font-bold select-none shrink-0">•</span>
                  <span><strong className="text-foreground font-semibold">Corporate Rigor & Giga-Scale Execution:</strong> Transitioning from a geoscientist to an HR Global Training Leader at ExxonMobil, then managing high-performance culture transformations for $40B+ projects at JMJ Culture Transformation Consulting.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-secondary font-bold select-none shrink-0">•</span>
                  <span><strong className="text-foreground font-semibold">Decades of Strategic Advisory:</strong> Advising over 1,200 executives, start-up founders, and Fortune 50 leaders through The Mitra Group to align operational success with human wellbeing.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-secondary font-bold select-none shrink-0">•</span>
                  <span><strong className="text-foreground font-semibold">Unparalleled Inner Depth:</strong> A 52+ year formal meditation practice, including four 108-day cloistered retreats—bringing a level of psychological capacity, focus, and clarity that cannot be replicated.</span>
                </li>
              </ul>
              <p className="text-base text-muted leading-relaxed max-w-[65ch]">
                Whether speaking to hundreds, facilitating high-stakes leadership retreats, or coaching high-performing decision-makers, I help leaders navigate disruption with pragmatic intuition and unwavering calm.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Philosophy & Approach */}
        <section id="philosophy" className="scroll-mt-24" style={{ paddingTop: 'clamp(4rem, 10vw, 7rem)' }}>
          <div className="space-y-16">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Philosophy & Approach</h2>
              <p className="mt-3 text-sm text-muted">
                Combining science, strategic experience, and deep leadership practices to drive measurable, lasting&nbsp;change.
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2">
              {/* Column 1: What makes my approach different */}
              <div className="space-y-6 pt-6 border-t border-card-border/40">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Sparkle size={20} weight="bold" />
                </div>
                <h3 className="text-xl font-bold tracking-tight">What makes my approach different</h3>
                <ul className="space-y-4 text-sm text-muted">
                  <li className="flex gap-3">
                    <CheckCircle size={18} className="text-accent-secondary shrink-0 mt-0.5" weight="fill" />
                    <span>
                      <strong className="text-foreground font-semibold">Transformational depth:</strong> Decades of coaching and consulting experience meet the inner work of authentic leadership and 52+ years of formal meditation practice.
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

              {/* Column 2: Clients experience */}
              <div className="space-y-6 pt-6 border-t border-card-border/40">
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
        <section id="featured" className="scroll-mt-24" style={{ paddingTop: 'clamp(4rem, 10vw, 7rem)' }}>
          <div className="space-y-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Featured Solutions</h2>
              <p className="mt-3 text-sm text-muted">
                Demonstrated impact across organizational systems, scale, and performance tracking.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col justify-between pt-6 border-t border-card-border/40">
                <div className="space-y-4">
                  <div className="text-xs uppercase tracking-wider text-accent-secondary font-bold font-mono">Culture Transformation</div>
                  <h3 className="text-xl font-bold tracking-tight">High-Performance Culture Transformation</h3>
                  <p className="text-xs text-muted leading-relaxed">
                    Directing alignment and behavioral culture change for global enterprises in manufacturing, energy, construction, and pharma on projects up to 13,000 staff.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-card-border/40 flex items-center justify-between">
                  <span className="text-3xl font-extrabold text-accent">$40B+</span>
                  <span className="text-[10px] text-muted max-w-[15ch] text-right font-medium">Giga-Projects Transformed</span>
                </div>
              </div>

              <div className="flex flex-col justify-between pt-6 border-t border-card-border/40">
                <div className="space-y-4">
                  <div className="text-xs uppercase tracking-wider text-accent font-bold font-mono">Executive Coaching</div>
                  <h3 className="text-xl font-bold tracking-tight">Inner Edge™ Executive Coaching</h3>
                  <p className="text-xs text-muted leading-relaxed">
                    Elite 1:1 advisory and cohorts for high-achieving leaders, integrating cognitive psychology, performance neuroscience, and 50+ years of meditative depth.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-card-border/40 flex items-center justify-between">
                  <span className="text-3xl font-extrabold text-accent-secondary">1,200+</span>
                  <span className="text-[10px] text-muted max-w-[15ch] text-right font-medium">Leaders Advised & Coached</span>
                </div>
              </div>

              <div className="flex flex-col justify-between pt-6 border-t border-card-border/40">
                <div className="space-y-4">
                  <div className="text-xs uppercase tracking-wider text-accent-secondary font-bold font-mono">Speaking & Events</div>
                  <h3 className="text-xl font-bold tracking-tight">Keynotes & Retreat Facilitation</h3>
                  <p className="text-xs text-muted leading-relaxed">
                    High-impact speaking and offsite leadership facilitation designed for events, retreats, and forums to help teams navigate change, complexity, and uncertainty.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-card-border/40 flex items-center justify-between">
                  <span className="text-3xl font-extrabold text-accent">52+ Yrs</span>
                  <span className="text-[10px] text-muted max-w-[15ch] text-right font-medium">Of Meditative Rigor & Depth</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Work Experience (Timeline) */}
        <section id="experience" className="scroll-mt-24" style={{ paddingTop: 'clamp(4rem, 10vw, 7rem)' }}>
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
        <section id="education" className="scroll-mt-24" style={{ paddingTop: 'clamp(4rem, 10vw, 7rem)' }}>
          <div className="space-y-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Academic & Personal Training</h2>
              <p className="mt-3 text-sm text-muted">
                A multidisciplinary background combining geoscience, human psychology, and rigorous contemplative training.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl">
              {education.map((edu, idx) => (
                <div key={idx} className="flex flex-col justify-between pt-6 border-t border-card-border/40">
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
        <section id="certifications" className="scroll-mt-24" style={{ paddingTop: 'clamp(4rem, 10vw, 7rem)' }}>
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
                      {cert.category === "neuroscience"
                        ? "Neuroscience"
                        : cert.category === "mindset"
                        ? "Mindset"
                        : cert.category === "speaking"
                        ? "Speaking & Facilitation"
                        : "Executive Coaching"}
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Contact Section */}
        <section id="contact" className="scroll-mt-24" style={{ paddingTop: 'clamp(4rem, 10vw, 7rem)' }}>
          <div className="border-t border-card-border/40 pt-12 max-w-4xl mx-auto">
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
