import { useState, useEffect } from 'react';
import {
  Github, Linkedin, Mail, Phone, MapPin, ExternalLink,
  Shield, Server, Cpu, Code2, Database, Globe, Award,
  GraduationCap, Briefcase, Trophy, ArrowUpRight, Hammer
} from 'lucide-react';
import './App.css';

const projects = [
  {
    name: 'Watchtower',
    tag: 'Network Security Operations Dashboard',
    desc: 'A real-time Security Operations Center (SOC) dashboard that monitors a fleet of enterprise network devices — routers, switches, servers, firewalls — tracking live traffic, CPU, and threat levels, classifying security events by severity, and computing a live security score. Full-stack, updating every 3 seconds.',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'Recharts'],
    icon: 'shield',
    github: 'https://github.com/yashchhabra57/watchtower',
    live: null,
    status: 'complete',
  },
  {
    name: 'JobTrackr',
    tag: 'Secured REST API',
    desc: 'A secured REST API to track job applications across four status stages with full CRUD, status filtering, and a live analytics endpoint. Protected with JWT authentication and documented with Swagger UI. Deployed live to the cloud with a hosted PostgreSQL database.',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'JWT', 'Swagger'],
    icon: 'server',
    github: 'https://github.com/yashchhabra57/jobtrackr',
    live: 'https://jobtrackr-production-0ed0.up.railway.app/swagger-ui/index.html',
    status: 'complete',
  },
  {
    name: 'Quantum-Resistant Cryptosystem',
    tag: 'SURF Research · Summer 2025',
    desc: 'Undergraduate research (Summer Undergraduate Research Fellowship, UW–Superior) implementing a post-quantum key encapsulation system using ML-KEM (Kyber768), aligned with the NIST FIPS 203 standard. Applied lattice-based cryptography with Keccak/SHAKE128 hashing and validated correctness through automated testing.',
    stack: ['Java', 'BouncyCastle', 'SHAKE128', 'ML-KEM'],
    icon: 'cpu',
    github: null,
    live: null,
    status: 'research',
  },
  {
    name: 'LifeNet',
    tag: 'Insurance Management System',
    desc: 'Led a team of 4 to design and ship a full-stack insurance platform from requirements to production. Architected a 3-tier system with role-based access control for admin, agent, and policyholder users, enforcing business logic and data isolation. Managed sprints in Jira with GitHub PR reviews.',
    stack: ['C#', 'SQL Server', 'WPF', 'Jira', 'Agile'],
    icon: 'database',
    github: null,
    live: null,
    status: 'complete',
  },
  {
    name: 'Alternative Routes in Road Networks',
    tag: 'Pathfinding & Visualization',
    desc: "Dijkstra's algorithm applied to compute optimal routes across a road network with dynamically generated real-time traffic data, including collision avoidance through dynamic speed adjustment and a full OpenGL visualization.",
    stack: ['C++', 'OpenGL', 'Dijkstra'],
    icon: 'globe',
    github: null,
    live: null,
    status: 'building',
  },
  {
    name: 'Word Lookup Dictionary',
    tag: 'Data Structures Application',
    desc: 'A fast English word-lookup desktop application built on a Trie data structure for efficient search, with spelling correction and auto-suggestions powered by the Levenshtein (edit distance) algorithm.',
    stack: ['Java', 'Trie', 'Levenshtein'],
    icon: 'code',
    github: null,
    live: null,
    status: 'building',
  },
];

const experience = [
  {
    role: 'Website Development & Analytics Intern',
    org: 'Superior Effect Marketing',
    location: 'Superior, WI',
    dates: 'Sept 2025 – Present',
    points: [
      'Rebuilt and maintain company websites using HTML, CSS, JavaScript, and React, improving mobile responsiveness and brand consistency.',
      'Diagnose and resolve front-end performance issues, improving load times and organic search visibility through structured content and SEO.',
      'Apply systematic troubleshooting to resolve UI/UX inconsistencies across browsers and devices.',
    ],
  },
  {
    role: 'Lead Ambassador',
    org: 'UW–Superior · Educational Success Center',
    location: 'Superior, WI',
    dates: 'Apr 2026 – Present',
    points: [
      'Promoted to lead role; represent the Educational Success Center at all campus social and marketing events as the primary student-facing ambassador.',
      'Advise students on balancing academic schedules with work commitments, and support program leadership with logistics, communications, and event execution.',
    ],
  },
  {
    role: 'Embedded Tutor & Calculus Grader',
    org: 'UW–Superior · Educational Success Center',
    location: 'Superior, WI',
    dates: 'Jan 2024 – Present',
    points: [
      'Tutored 50+ students in Calculus and Computer Science through one-on-one and group sessions; won the Innovation Award (2025) for outstanding program contributions.',
      'Support in-class problem-solving alongside instructors during live lectures, adapting explanations in real time to student comprehension.',
      'Evaluate calculus assignments with consistent, constructive feedback in coordination with course instructors.',
    ],
  },
  {
    role: 'Tennis Data Analyst',
    org: 'Cizr Tennis · Australia (Remote)',
    location: 'Remote',
    dates: 'Feb 2023 – Jun 2023',
    points: [
      'Analyzed and tagged professional tennis match data for an Australian sports analytics company, tracking player performance metrics and uploading structured datasets.',
      'Delivered data analysis reports to clients, developing strong attention to detail and the ability to manage multiple datasets under time constraints.',
    ],
  },
];

const skills = {
  'Languages': ['Java', 'Python', 'JavaScript', 'C#', 'C++', 'SQL', 'HTML', 'CSS'],
  'Frameworks & Tools': ['Spring Boot', 'React', 'ASP.NET', 'Node.js', 'Git', 'GitHub', 'Jira', 'Vite'],
  'Databases & Cloud': ['PostgreSQL', 'MySQL', 'SQL Server', 'Railway', 'Vercel'],
  'Concepts': ['REST APIs', 'JWT Auth', 'Cybersecurity', 'Cryptography', 'Networking', 'Agile/Scrum', 'Data Structures'],
};

const iconFor = (name) => {
  const p = { size: 22 };
  switch (name) {
    case 'shield': return <Shield {...p} />;
    case 'server': return <Server {...p} />;
    case 'cpu': return <Cpu {...p} />;
    case 'database': return <Database {...p} />;
    case 'globe': return <Globe {...p} />;
    case 'code': return <Code2 {...p} />;
    default: return <Code2 {...p} />;
  }
};

const statusLabel = {
  complete: null,
  research: 'Research',
  building: 'Currently Building',
};

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="site">
      {/* NAV */}
      <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-inner">
          <button className="nav-logo" onClick={() => scrollTo('top')}>YC</button>
          <div className="nav-links">
            <button onClick={() => scrollTo('about')}>About</button>
            <button onClick={() => scrollTo('projects')}>Projects</button>
            <button onClick={() => scrollTo('experience')}>Experience</button>
            <button onClick={() => scrollTo('skills')}>Skills</button>
            <button className="nav-cta" onClick={() => scrollTo('contact')}>Contact</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero" id="top">
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="hero-eyebrow">Computer Science · UW–Superior</div>
          <h1 className="hero-name">Yash Chhabra</h1>
          <p className="hero-tagline">
            Software Engineering · Information Technology · Cybersecurity · Web Development
          </p>
          <p className="hero-sub">
            Junior CS student building secure, full-stack systems — from real-time
            security dashboards to post-quantum cryptography research. Based in
            Superior, WI, and seeking internship opportunities in IT infrastructure and security.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="https://github.com/yashchhabra57" target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub
            </a>
            <a className="btn btn-ghost" href="https://www.linkedin.com/in/yash-chhabra-796829333/" target="_blank" rel="noreferrer">
              <Linkedin size={18} /> LinkedIn
            </a>
            <button className="btn btn-ghost" onClick={() => scrollTo('projects')}>
              View Projects <ArrowUpRight size={18} />
            </button>
          </div>
          <div className="hero-meta">
            <span><MapPin size={15} /> Superior, WI</span>
            <span><GraduationCap size={15} /> B.S. Computer Science · May 2027</span>
            <span><Award size={15} /> GPA 3.51 · Dean's List</span>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="section-head">
          <span className="section-num">01</span>
          <h2>About</h2>
        </div>
        <div className="about-grid">
          <p className="about-lead">
            I'm a junior Computer Science student at the University of Wisconsin–Superior
            with a minor in Mathematics, graduating May 2027. I care about building things
            that are secure, reliable, and actually work in the real world.
          </p>
          <p className="about-body">
            My focus is infrastructure, networking, and cybersecurity. I've conducted
            undergraduate research in post-quantum cryptography, built and deployed
            full-stack systems, and I spend my time turning ideas into working software.
            Alongside my technical work, I'm a Lead Ambassador and tutor, a UMAC Conference
            Champion in tennis, and someone who genuinely enjoys explaining hard things clearly.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <div className="section-head">
          <span className="section-num">02</span>
          <h2>Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.name} className={`project-card ${p.status}`}>
              <div className="project-top">
                <div className="project-icon">{iconFor(p.icon)}</div>
                <div className="project-links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" aria-label="Live demo"><ExternalLink size={18} /></a>
                  )}
                </div>
              </div>
              <h3 className="project-name">
                {p.name}
                {statusLabel[p.status] && (
                  <span className={`badge badge-${p.status}`}>
                    {p.status === 'building' && <Hammer size={11} />} {statusLabel[p.status]}
                  </span>
                )}
              </h3>
              <div className="project-tag">{p.tag}</div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-stack">
                {p.stack.map((s) => <span key={s} className="chip">{s}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <div className="section-head">
          <span className="section-num">03</span>
          <h2>Experience</h2>
        </div>
        <div className="timeline">
          {experience.map((e) => (
            <div key={e.role} className="exp-item">
              <div className="exp-marker"><Briefcase size={16} /></div>
              <div className="exp-body">
                <div className="exp-header">
                  <h3>{e.role}</h3>
                  <span className="exp-dates">{e.dates}</span>
                </div>
                <div className="exp-org">{e.org} · {e.location}</div>
                <ul className="exp-points">
                  {e.points.map((pt, i) => <li key={i}>{pt}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="section" id="skills">
        <div className="section-head">
          <span className="section-num">04</span>
          <h2>Skills</h2>
        </div>
        <div className="skills-grid">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="skill-group">
              <h4>{group}</h4>
              <div className="skill-chips">
                {items.map((s) => <span key={s} className="chip">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AWARDS */}
      <section className="section" id="awards">
        <div className="section-head">
          <span className="section-num">05</span>
          <h2>Awards & Leadership</h2>
        </div>
        <div className="awards-row">
          <div className="award"><Trophy size={20} /><div><strong>UMAC Conference Champion</strong><span>2024 · 2025 · 2026</span></div></div>
          <div className="award"><Award size={20} /><div><strong>Innovation Award</strong><span>UW–Superior ESC · 2025</span></div></div>
          <div className="award"><GraduationCap size={20} /><div><strong>Dean's List</strong><span>2023 – 2026</span></div></div>
          <div className="award"><Trophy size={20} /><div><strong>UMAC Player of the Week</strong><span>Multiple times</span></div></div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="contact-inner">
          <span className="section-num">06</span>
          <h2>Let's connect</h2>
          <p>Open to internship and full-time opportunities in IT infrastructure, security, and software engineering.</p>
          <div className="contact-links">
            <a href="mailto:ychhabra@uwsuper.edu"><Mail size={18} /> ychhabra@uwsuper.edu</a>
            <a href="tel:+17153199764"><Phone size={18} /> 715-319-9764</a>
            <a href="https://github.com/yashchhabra57" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
            <a href="https://www.linkedin.com/in/yash-chhabra-796829333/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
          </div>
        </div>
        <footer className="footer">
          © {new Date().getFullYear()} Yash Chhabra · Built with React
        </footer>
      </section>
    </div>
  );
}

export default App;
