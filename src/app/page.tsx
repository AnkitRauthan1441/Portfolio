"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUp,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronRight,
  Database,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";

const navItems = ["Work", "Experience", "Toolkit", "About"];

const projects = [
  {
    number: "01",
    type: "Operations intelligence",
    title: "OLA ride performance",
    description:
      "A 71,000+ record analysis translating booking, payment, ratings, revenue, and cancellation data into a clearer view of customer experience and operational bottlenecks.",
    tools: ["SQL", "Excel", "Power BI"],
    className: "project-ola",
    stat: "71K+",
    statLabel: "ride records",
    image: "/ola-project.png",
    link: "https://github.com/AnkitRauthan1441/ola-performance-project-sql-excel-powerbi",
    problem: "Understand ride performance, customer experience, and cancellation patterns to identify operational areas requiring attention.",
    dataset: "71,000+ ride records",
    approach: "Cleaned and preprocessed raw data in Excel, queried the data in SQL, and modeled the analysis in Power BI.",
    kpis: ["Booking status", "Ride volume", "Customer ratings"],
    findings: "Ride cancellations should be analyzed by cancellation reason, customer or driver behavior, and ride characteristics.\n\nRide and vehicle performance varies across different vehicle categories.\n\nRide demand and booking behavior should be evaluated across available time, customer, and ride-level dimensions.",
    recommendations: "01 — Investigate and address the highest-impact cancellation reasons identified in the analysis to improve completed-ride rates.\n\n02 — Optimize vehicle and driver allocation according to verified differences in demand and vehicle performance.\n\n03 — Use identified demand patterns to improve driver availability and operational planning during high-demand periods.",
    insights: [
      { finding: "Ride cancellations should be analyzed by cancellation reason, customer or driver behavior, and ride characteristics.", why: "High cancellation activity can reduce completed rides, affect customer experience, and create inefficient utilization of available drivers and vehicles.", recommendation: "Investigate and address the highest-impact cancellation reasons identified in the analysis to improve completed-ride rates." },
      { finding: "Ride and vehicle performance varies across different vehicle categories.", why: "Understanding verified differences in booking activity and performance can inform fleet allocation, driver availability, and operational planning.", recommendation: "Optimize vehicle and driver allocation according to verified differences in demand and vehicle performance." },
      { finding: "Ride demand and booking behavior should be evaluated across available time, customer, and ride-level dimensions.", why: "Identifying demand patterns can help align driver availability and operational capacity with customer demand.", recommendation: "Use identified demand patterns to improve driver availability and operational planning during high-demand periods." },
    ],
  },
  {
    number: "02",
    type: "Commercial analytics",
    title: "E-commerce profitability",
    description:
      "A unified KPI dashboard for revenue, margin, customers, products, and regional performance — built to make recurring decisions faster and more confident.",
    tools: ["Power BI", "Excel", "Power Query"],
    className: "project-shop",
    stat: "360°",
    statLabel: "business view",
    image: "/ecommerce-project.png",
    link: "https://github.com/AnkitRauthan1441/E-Commerce-Performance-Dashboard-Excel-Power-Bi",
    problem: "Give stakeholders one view of revenue, profitability, customer behavior, and product performance for better sales and inventory decisions.",
    dataset: "Dataset size not specified",
    approach: "Prepared the data in Excel and Power Query, then built an interactive Power BI dashboard with drill-through reporting.",
    kpis: ["Revenue", "Profit", "Product performance"],
    findings: "Product and category performance varies across the business, with some segments contributing more strongly to overall sales than others.\n\nRevenue performance should be evaluated alongside profit because strong sales volume does not necessarily translate into strong profitability.\n\nCustomer and category-level performance provides opportunities to identify where the business is performing strongly and where additional attention may be required.",
    recommendations: "01 — Prioritize high-performing products and categories while investigating the causes of underperforming segments to improve the overall product mix.\n\n02 — Monitor revenue together with profit and profitability metrics so business decisions focus on profitable growth rather than sales volume alone.\n\n03 — Use customer and category performance analysis to focus marketing, inventory, and operational resources on segments with the strongest business contribution and clearest opportunity for improvement.",
    insights: [
      { finding: "Sales performance should be compared across products and categories to identify high- and low-performing segments.", why: "This comparison can guide inventory, marketing, and sales priorities without assuming why a segment performs differently.", recommendation: "Prioritize verified high-performing segments while investigating the reasons behind underperformance." },
      { finding: "Revenue and profitability should be evaluated together because sales volume alone does not establish profitable growth.", why: "Comparing revenue with profit and margin supports decisions focused on the bottom line.", recommendation: "Use revenue and profitability metrics together rather than relying on sales volume alone." },
      { finding: "Customer and market performance should be compared across the available business segments.", why: "Segment-level evidence can guide marketing, inventory, and operational resource allocation.", recommendation: "Focus resources on segments with the strongest verified contribution or growth opportunity." },
    ],
  },
];

const skills: [string, string, string[]][] = [
  ["01", "DATA ANALYSIS", ["SQL", "Python", "Pandas", "NumPy"]],
  ["02", "BI & DATA VISUALIZATION", ["Power BI", "DAX", "Power Query", "Data Modeling"]],
  ["03", "ADVANCED EXCEL", ["Advanced Excel", "Pivot Tables", "XLOOKUP", "Dynamic Arrays"]],
  ["04", "ANALYTICAL METHODS", ["EDA", "Data Cleaning", "Data Validation", "KPI Analysis", "Trend Analysis", "Root Cause Analysis"]],
  ["05", "BUSINESS & REPORTING", ["Dashboard Development", "Reporting", "Business Intelligence", "Data Storytelling"]],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <nav className="nav-shell">
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-mark">AR</span>
          <span>Ankit Rauthan</span>
        </a>
        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let&apos;s talk <ArrowUpRight size={15} /></a>
        </div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> DATA ANALYST <b>|</b> SQL • POWER BI • ADVANCED EXCEL • PYTHON</div>
          <h1>I turn messy data into <em>clear business decisions.</em></h1>
          <p className="hero-lede">I analyze business data, uncover trends and performance drivers, and build dashboards and reports that turn raw data into actionable insights.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">View My Projects <ArrowDownRight size={17} /></a>
            <a className="button button-outline" href="mailto:ankitrth81945@gmail.com?subject=Resume%20request">Download Resume <Download size={16} /></a>
          </div>
          <div className="hero-socials"><span>Connect:</span><a href="https://linkedin.com/in/ankit-rauthan-1815a5415" target="_blank" rel="noreferrer"><Linkedin size={14} /> LinkedIn</a><a href="https://github.com/AnkitRauthan1441" target="_blank" rel="noreferrer"><Github size={14} /> GitHub</a></div>
        </div>
        <div className="hero-visual">
          <div className="hero-grid" />
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="profile-frame">
            <Image src="/ankit-rauthan.png" alt="Portrait of Ankit Rauthan" fill priority sizes="(max-width: 800px) 80vw, 38vw" />
          </div>
          <div className="floating-card floating-top"><span className="mini-label">CURRENT FOCUS</span><strong>Business intelligence</strong><span className="card-arrow"><ArrowUpRight size={14} /></span></div>
          <div className="floating-card floating-bottom"><span className="mini-label">ANALYTICS STACK</span><div className="stack-icons"><span>SQL</span><span>BI</span><span>PY</span></div></div>
          <div className="hero-index">01 <span>/</span> 04</div>
        </div>
      </section>

      <section className="recruiter-snapshot section-wrap" aria-labelledby="snapshot-title">
        <div className="snapshot-heading"><span className="section-label">/ Recruiter snapshot</span><h2 id="snapshot-title">The quick read.</h2><p>Focused on turning business data into measurable insights.</p></div>
        <div className="snapshot-grid">
          <div className="snapshot-card snapshot-primary"><span className="snapshot-index">01</span><strong>Data Analyst</strong><span>Role focus</span></div>
          <div className="snapshot-card"><span className="snapshot-index">02</span><strong>8 Months</strong><span>Analytics internship experience</span></div>
          <div className="snapshot-card"><span className="snapshot-index">03</span><strong>71K+</strong><span>Records analyzed</span></div>
          <div className="snapshot-card"><span className="snapshot-index">04</span><strong>SQL · Power BI</strong><span>Advanced Excel · Python</span></div>
          <div className="snapshot-card"><span className="snapshot-index">05</span><strong>2+</strong><span>End-to-end analytics projects</span></div>
        </div>
      </section>

      <section className="ticker" aria-label="Core analytics skills"><span>SQL</span><i>✦</i><span>POWER BI</span><i>✦</i><span>PYTHON</span><i>✦</i><span>ADVANCED EXCEL</span><i>✦</i><span>DATA STORYTELLING</span></section>

      <section className="numbers section-wrap" id="about">
        <div className="section-intro"><span className="section-label">/ At a glance</span><h2>The numbers behind the work.</h2></div>
        <div className="number-grid">
          <div className="number-item"><strong>71K<sup>+</sup></strong><span>Records analyzed<br />in one project</span></div>
          <div className="number-item"><strong>08</strong><span>Months of hands-on<br />analytics internship</span></div>
          <div className="number-item"><strong>04</strong><span>Core tools in my<br />everyday toolkit</span></div>
        </div>
      </section>

      <section className="work section-wrap" id="work">
        <div className="section-heading"><div><span className="section-label">/ Selected work</span><h2>Analysis that moves<br /><em>business forward.</em></h2></div><p>From raw rows to readable decisions. Here are two projects where I followed the data all the way to the insight.</p></div>
        <div className="project-grid">
          {projects.map((project) => <article className={`project-card ${project.className}`} key={project.number}>
            <a className="project-top" href={project.link} target="_blank" rel="noreferrer"><span className="project-number">{project.number}</span><span>{project.type}</span><ArrowUpRight size={20} /></a>
            <div className="project-chart"><Image src={project.image} alt={`${project.title} dashboard preview`} fill sizes="(max-width: 800px) 90vw, 42vw" /></div>
            <div className="project-body"><div><h3>{project.title}</h3><p>{project.problem}</p><div className="case-meta"><span><b>Dataset</b>{project.dataset}</span><span><b>KPIs</b>{project.kpis.join(" · ")}</span></div><div className="tool-list">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div><button className="project-link" onClick={() => setSelectedProject(project)}>View Case Study <ChevronRight size={14} /></button></div><div className="project-stat"><strong>{project.stat}</strong><span>{project.statLabel}</span></div></div>
          </article>)}
        </div>
      </section>

      {selectedProject && <div className="case-study-backdrop" role="presentation" onClick={() => setSelectedProject(null)}>
        <article className="case-study-modal" role="dialog" aria-modal="true" aria-labelledby="case-study-title" onClick={(event) => event.stopPropagation()}>
          <button className="case-study-close" onClick={() => setSelectedProject(null)} aria-label="Close case study"><X size={20} /></button>
          <div className="case-study-kicker">{selectedProject.number} / Data analyst case study</div>
          <h2 id="case-study-title">{selectedProject.title}</h2>
          <p className="case-study-intro">{selectedProject.description}</p>
          <div className="case-study-sections">
            <div><span>01 / Business Problem</span><p>{selectedProject.problem}</p></div>
            <div><span>02 / Dataset</span><p>{selectedProject.dataset}</p></div>
            <div><span>03 / Analytical Approach</span><p>{selectedProject.approach}</p></div>
            <div><span>04 / Tools Used</span><p>{selectedProject.tools.join(" · ")}</p></div>
            <div><span>05 / Key KPIs</span><p>{selectedProject.kpis.join(" · ")}</p></div>
             <div><span>06 / Key Findings</span><p className="case-content">{selectedProject.findings}</p></div>
             <div><span>07 / Business Recommendations</span><p className="case-content">{selectedProject.recommendations}</p></div>
            <div><span>08 / Dashboard / Visualizations</span><Image src={selectedProject.image} alt={`${selectedProject.title} dashboard`} width={900} height={500} /></div>
          </div>
          <section className="case-insights" aria-labelledby="insights-title">
            <div className="case-section-heading"><span>Interpretation layer</span><h3 id="insights-title">Key Insights</h3><p>Finding → business meaning → action. Validate each interpretation against the underlying project data before presenting it as a verified result.</p></div>
            <div className="insight-list">{selectedProject.insights?.map((insight, index) => <article className="insight-item" key={insight.finding}><div className="insight-number">{String(index + 1).padStart(2, "0")}</div><div><span>Finding</span><p>{insight.finding}</p></div><div><span>Why it matters</span><p>{insight.why}</p></div><div><span>Recommendation</span><p>{insight.recommendation}</p></div></article>)}</div>
          </section>
          <a className="button button-dark case-github" href={selectedProject.link} target="_blank" rel="noreferrer">09 / GitHub Repository <Github size={16} /></a>
        </article>
      </div>}

      <section className="experience dark-section" id="experience">
        <div className="section-wrap experience-inner"><div className="experience-title"><span className="section-label light">/ Experience</span><h2>Learning by<br /><em>doing.</em></h2><p>Eight months of hands-on Data Analytics internship experience, from data collection through reporting and business support.</p></div><div className="timeline"><div className="timeline-item current"><span className="timeline-date">19 DEC 2025 — 20 JUL 2026<br /><b>8 MONTHS</b></span><div><h3>Data Analyst Intern</h3><h4>GRAS Education & Training Services Pvt. Ltd. · GRAStech.in</h4><div className="experience-categories"><div><span>Reporting</span><p>Created reports and summaries to support decision-making. Documented analysis findings and communicated insights clearly.</p></div><div><span>Data Cleaning & Validation</span><p>Collected, cleaned, and organized data from multiple sources. Supported data validation and quality checks to maintain accuracy.</p></div><div><span>KPI / Performance Analysis</span><p>Analyzed trends, patterns, and KPIs to identify business insights using Excel and analytical techniques.</p></div><div><span>Dashboards / Reporting</span><p>Created dashboards, reports, and summaries, and presented analytical findings in a clear, structured manner.</p></div><div><span>Business Support</span><p>Assisted with real-time analytics projects under senior analyst guidance and completed assigned analytical tasks accurately and on time.</p></div></div></div></div></div></div>
      </section>

      <section className="education section-wrap" id="education"><div className="education-heading"><span className="section-label">/ Education</span><h2>Business foundation,<br /><em>analytical direction.</em></h2></div><div className="education-item"><span className="timeline-date">AUG 2018 — SEP 2021</span><div><h3>Bachelor of Commerce (B.Com), General</h3><p>Hemvati Nandan Bahuguna Garhwal University (HNBGU), Srinagar</p></div></div></section>

      <section className="toolkit section-wrap" id="toolkit" aria-labelledby="toolkit-title"><div className="section-heading"><div><span className="section-label">/ The toolkit</span><h2 id="toolkit-title">What I can<br /><em>do with data.</em></h2></div><p>Tools are only useful when they lead to clearer analysis, stronger reporting, and better business decisions.</p></div><div className="skill-list">{skills.map((skill) => <article className="skill-row" key={skill[0]} tabIndex={0}><span className="skill-hover-orb" aria-hidden="true" /><span className="skill-number">{skill[0]}</span><div className="skill-content"><h3>{skill[1]}</h3><div className="skill-chips">{skill[2].map((item) => <span key={item}>{item}</span>)}</div></div><ChevronRight size={18} aria-hidden="true" /></article>)}</div></section>

      <section className="credentials section-wrap"><div className="credential-box"><span className="section-label">/ Credentials</span><h2>Curious by nature.<br /><em>Certified by practice.</em></h2><div className="cert-list"><div><Check size={17} /><span>Data Analytics Diploma</span><small>GRAStech · 2025–2026</small></div><div><Check size={17} /><span>SQL (Advanced) Certificate</span><small>Technical proficiency</small></div><div><Check size={17} /><span>Deloitte · Tata · PNC Simulations</span><small>Job simulation programs</small></div><div><Check size={17} /><span>Diploma in Office Automation</span><small>2023–2024</small></div></div></div><div className="credential-note"><Database size={29} /><span>Always learning</span><p>Exploring the space where data, business, and better questions meet.</p><div className="note-line" /></div></section>

      <section className="contact dark-section" id="contact"><div className="section-wrap contact-inner"><span className="section-label light">/ Start a conversation</span><h2>Have a question<br />worth <em>answering?</em></h2><p>Whether you&apos;re looking for an analyst, want to talk dashboards, or just have a good data problem — I&apos;d love to hear from you.</p><a className="button button-lime" href="mailto:ankitrth81945@gmail.com">Get in touch <ArrowUpRight size={17} /></a><div className="contact-links"><a href="mailto:ankitrth81945@gmail.com"><Mail size={17} /> ankitrth81945@gmail.com</a><a href="tel:+919634136551"><Phone size={17} /> +91 96341 36551</a><a href="https://linkedin.com/in/ankit-rauthan-1815a5415" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a><a href="https://github.com/AnkitRauthan1441" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a></div></div></section>

      <footer className="footer section-wrap"><span>© 2026 Ankit Rauthan</span><span>Data Analyst · SQL · Power BI · Python</span><a href="#top">Back to top ↑</a></footer>
      <a className="go-up" href="#top" aria-label="Back to top"><ArrowUp size={18} /></a>
    </main>
  );
}
