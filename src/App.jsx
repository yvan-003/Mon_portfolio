import './App.css'
import { useEffect, useState } from 'react'

const projects = [
  {
    title: 'Detection de fraude',
    type: 'Machine Learning',
    tag: 'Python • Classification • Feature engineering',
    link: 'https://github.com/yvan-003',
    description:
      "Analyse exploratoire de transactions financieres, nettoyage, gestion du desequilibre de classes et entrainement de modeles pour detecter les comportements suspects.",
  },
  {
    title: 'DeciChurn',
    type: 'Data App',
    tag: 'Streamlit • KPI • Prediction',
    link: 'https://github.com/yvan-003',
    description:
      "Application d'aide a la decision pour la retention client : EDA, preparation des donnees, modelisation et tableaux de bord pour suivre le churn.",
  },
  {
    title: 'Dashboard circulation',
    type: 'BI Dashboard',
    tag: 'Power BI • Tableau • Reporting',
    link: 'https://github.com/yvan-003',
    description:
      "Tableau de bord interactif a partir de donnees de circulation pour suivre les indicateurs et faciliter la prise de decision.",
  },
  {
    title: 'SIEM Wazuh (Syslog)',
    type: 'Cybersecurity / SIEM',
    tag: 'Wazuh • Syslog • Detection',
    link: 'https://github.com/yvan-003',
    description:
      "Implementation d'un SIEM avec Wazuh et Syslog, en collaboration avec Desjardins, pour centraliser les logs et ameliorer la detection d'incidents.",
  },
  
]

const skills = [
  'Power BI (DAX)',
  'Tableau',
  'RStudio (tidyverse)',
  'Jupyter Notebook',
  'Python (Pandas)',
  'SQL',
  'Streamlit',
  'Data Cleaning',
  'KPI & Reporting',
  'Data prep',
  'Data Storytelling',
  'Visualisation',
  'GitHub',
  'HTML / CSS / JS',
]

const softSkills = [
  'Travail d equipe',
  'Communication',
  'Organisation',
  'Autonomie',
  'Analyse et interpretation',
  'Aide a la decision',
]

const metrics = [
  { label: 'Projets data', value: '4+' },
  { label: 'Outils visualisaion / Data', value: '10+' },
  { label: 'Certif en cours', value: 'PL-300' },
]

const copy = {
  fr: {
    nav: ['Accueil', 'A propos', 'Competences', 'Parcours', 'Projets', 'Contact'],
    eyebrow: 'BI / Data / IA / Data visualization',
    heroTitle: 'Data Analyst Junior | BI & Data Science',
    heroTools: '// Power BI, Tableau, Python, R, Jupyter, Streamlit.',
    heroImpact: '// Je transforme des donnees brutes en insights actionnables.',
    heroExplore: 'Explorer les projets',
    heroCv: 'Telecharger mon CV',
    metrics: ['Projets data', 'Outils visualisaion / Data', 'Certif en cours'],
    about: {
      eyebrow: 'A propos',
      title: 'Profil oriente impact',
      lead:
        "Etudiant en informatique oriente science des donnees et intelligence d'affaires. Experience en analyse, traitement et visualisation avec Python, R et SQL. Objectif : produire des analyses fiables et des dashboards clairs pour aider a la decision.",
      cards: ['Methodes claires', "Esprit d'analyse", 'Projets concrets'],
      texts: [
        'De la collecte au nettoyage, puis visualisation et restitution.',
        'Structuration des donnees, detection de tendances, tests et interpretation.',
        'Chaque projet presente un objectif clair et des livrables utiles pour les equipes.',
      ],
    },
    skills: {
      eyebrow: 'Competences',
      title: 'Axes de travail et expertise analytique',
      lead:
        'Des competences structurees pour preparer la lecture des projets a venir et donner du contexte a la methode.',
      soft: 'Qualites et methodes',
    },
    parcours: {
      eyebrow: 'Parcours',
      title: 'Formation, experience, certification',
      lead:
        'Un parcours oriente data, avec des projets academiques concrets et une certification BI en cours.',
    },
    projects: {
      eyebrow: 'Projets',
      title: 'Projets selectionnes',
      lead:
        'Chaque projet decrit le contexte, la methode et le resultat. Le code complet est disponible sur GitHub.',
      hint: 'Scroll horizontal ou swipe pour explorer.',
      link: 'Voir sur GitHub',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Pret a collaborer',
      lead:
        "Discutons d'une mission data, d'un besoin BI ou d'un projet IA. Reponse rapide par email ou LinkedIn.",
      email: 'Adresse email',
      linkedin: 'LinkedIn',
    },
    profile: {
      title: 'Data Analyst (junior)',
      focus: 'BI / Data Science',
      status: 'Certif PL-300 en cours',
    },
  },
  en: {
    nav: ['Home', 'About', 'Skills', 'Background', 'Projects', 'Contact'],
    eyebrow: 'BI / Data / AI / Data visualization',
    heroTitle: 'Junior Data Analyst | BI & Data Science',
    heroTools: '// Power BI, Tableau, Python, R, Jupyter, Streamlit.',
    heroImpact: '// I turn raw data into actionable insights.',
    heroExplore: 'Explore projects',
    heroCv: 'Download my CV',
    metrics: ['Data projects', 'BI / Data tools', 'Certification'],
    about: {
      eyebrow: 'About',
      title: 'Impact-focused profile',
      lead:
        'Computer science student focused on data science and business intelligence. Experience in analysis, processing, and visualization with Python, R, and SQL. Goal: deliver reliable analyses and clear dashboards to support decisions.',
      cards: ['Clear methods', 'Analytical mindset', 'Concrete projects'],
      texts: [
        'From collection to cleaning, then visualization and delivery.',
        'Data structuring, trend detection, testing, and interpretation.',
        'Each project has a clear objective and useful deliverables.',
      ],
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Core skills and analytics expertise',
      lead:
        'Structured skills to prepare the projects section and provide methodological context.',
      soft: 'Qualities and methods',
    },
    parcours: {
      eyebrow: 'Background',
      title: 'Education, experience, certification',
      lead:
        'A data-focused path with academic projects and a BI certification in progress.',
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Selected projects',
      lead:
        'Each project outlines context, method, and outcome. Full code is available on GitHub.',
      hint: 'Horizontal scroll or swipe to explore.',
      link: 'View on GitHub',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Ready to collaborate',
      lead:
        'Let’s discuss a data mission, BI need, or AI project. Fast response by email or LinkedIn.',
      email: 'Email',
      linkedin: 'LinkedIn',
    },
    profile: {
      title: 'Data Analyst (junior)',
      focus: 'BI / Data Science',
      status: 'PL-300 certification in progress',
    },
  },
}

function App() {
  const [lang, setLang] = useState('fr')
  const t = copy[lang]
  useEffect(() => {
    const cards = document.querySelectorAll('.project-card')
    if (!cards.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          } else {
            entry.target.classList.remove('in-view')
          }
        })
      },
      { threshold: 0.4 }
    )

    cards.forEach((card) => {
      observer.observe(card)
      card.addEventListener('mouseenter', () => card.classList.add('in-view'))
      card.addEventListener('mouseleave', () => card.classList.remove('in-view'))
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="page">
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-streams" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <header className="sidebar">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true" />
          <div>
            <p className="brand-name">Portfolio </p>
            <p className="brand-role">Analyste de donnees / Data Analyst</p>
          </div>
        </div>
        <nav className="nav">
          <a href="#home">{t.nav[0]}</a>
          <a href="#about">{t.nav[1]}</a>
          <a href="#skills">{t.nav[2]}</a>
          <a href="#parcours">{t.nav[3]}</a>
          <a href="#projects">{t.nav[4]}</a>
          <a href="#contact">{t.nav[5]}</a>
        </nav>
        <div className="sidebar-actions">
          <button
            className="lang-toggle"
            type="button"
            onClick={() => setLang((prev) => (prev === 'fr' ? 'en' : 'fr'))}
          >
            {lang === 'fr' ? 'FR' : 'EN'}
          </button>
          <a className="cta ghost" href="#contact">
            {t.nav[5]}
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy reveal" style={{ '--delay': '0.05s' }}>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1 className="code-title">
              <span className="tok-keyword">const</span>{' '}
              <span className="tok-var">profil</span> ={' '}
              <span className="tok-string">'{t.heroTitle}'</span>;
            </h1>
            <p className="lead code-comment">{t.heroTools}</p>
            <p className="lead code-comment">{t.heroImpact}</p>
            <div className="hero-actions">
              <a className="cta" href="#projects">
                {t.heroExplore}
              </a>
              <a className="cta ghost" href="/cv.pdf">
                {t.heroCv}
              </a>
              <a
                className="cta ghost"
                href="https://github.com/yvan-003"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
            <div className="hero-metrics">
              {metrics.map((metric) => (
                <div className="metric-card" key={metric.label}>
                  <p className="metric-value">{metric.value}</p>
                  <p className="metric-label">
                    {metric.label === 'Projets data'
                      ? t.metrics[0]
                      : metric.label === 'Outils visualisaion / Data'
                      ? t.metrics[1]
                      : t.metrics[2]}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-visual reveal" style={{ '--delay': '0.2s' }}>
            <div className="profile-card stacked">
              <div className="profile-photo xl">
                <img src="/IMG_0141.jpg" alt="Photo de profil" />
              </div>
              <div className="profile-info-box code-card">
                <p className="code-line">
                  <span className="tok-keyword">const</span>{' '}
                  <span className="tok-var">profil</span> = {'{'}
                </p>
                <p className="code-line">
                  <span className="tok-prop">nom</span>:{' '}
                  <span className="tok-string">'Paul Yvan Seka'</span>,
                </p>
                <p className="code-line">
                  <span className="tok-prop">titre</span>:{' '}
                  <span className="tok-string">'{t.profile.title}'</span>,
                </p>
                <p className="code-line">
                  <span className="tok-prop">focus</span>:{' '}
                  <span className="tok-string">'{t.profile.focus}'</span>,
                </p>
                <p className="code-line">
                  <span className="tok-prop">statut</span>:{' '}
                  <span className="tok-string">'{t.profile.status}'</span>,
                </p>
                <p className="code-line">
                  <span className="tok-prop">ouvert</span>:{' '}
                  <span className="tok-string">'Stage|travail|projet'</span>,
                </p>
                <p className="code-line">{'}'}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section reveal" id="about" style={{ '--delay': '0.1s' }}>
          <div className="section-heading">
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2>{t.about.title}</h2>
            <p className="section-lead">{t.about.lead}</p>
          </div>
          <div className="about-grid">
            <div className="about-card">
              <span className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M4 16l4-4 3 3 5-6 4 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h3>{t.about.cards[0]}</h3>
              <p>{t.about.texts[0]}</p>
            </div>
            <div className="about-card">
              <span className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M4 12h6l2-3 3 6 2-3h3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h3>{t.about.cards[1]}</h3>
              <p>{t.about.texts[1]}</p>
            </div>
            <div className="about-card">
              <span className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M6 5h12v14H6z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 9h6M9 13h6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <h3>{t.about.cards[2]}</h3>
              <p>{t.about.texts[2]}</p>
            </div>
          </div>
        </section>

        <section className="section reveal" id="skills" style={{ '--delay': '0.15s' }}>
          <div className="section-heading">
            <p className="eyebrow">{t.skills.eyebrow}</p>
            <h2>{t.skills.title}</h2>
            <p className="section-lead">{t.skills.lead}</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <span className="skill-pill" key={skill}>
                {skill}
              </span>
            ))}
          </div>
          <p className="section-subtitle">{t.skills.soft}</p>
          <div className="skills-grid">
            {softSkills.map((skill) => (
              <span className="skill-pill" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="section reveal" id="parcours" style={{ '--delay': '0.18s' }}>
          <div className="section-heading">
            <p className="eyebrow">{t.parcours.eyebrow}</p>
            <h2>{t.parcours.title}</h2>
            <p className="section-lead">{t.parcours.lead}</p>
          </div>
          <div className="about-grid">
            <div className="about-card">
              <h3>Education</h3>
              <p>
                Licence informatique option genie logiciel — Universite des
                technologies d&apos;Abidjan (2020-2023).
              </p>
              <p>
                Baccalaureate en informatique — Universite du Quebec a
                Chicoutimi (2023-2026).
              </p>
            </div>
            <div className="about-card">
              <h3>Experience</h3>
              <p>
                Projets integrateurs (2023-2026) : base de donnees SQL pour un
                parking, traitement R/Python, dashboards interactifs.
              </p>
              <p>
                Aide-livreur (2024-2026) : organisation, suivi des livraisons et
                relation client.
              </p>
            </div>
            <div className="about-card">
              <h3>Certification</h3>
              <p>Microsoft Power BI PL-300 (en cours).</p>
              <p>Modelisation des donnees, DAX (bases).</p>
            </div>
          </div>
        </section>

        <section className="section projects reveal" id="projects" style={{ '--delay': '0.2s' }}>
          <div className="section-heading">
            <p className="eyebrow">{t.projects.eyebrow}</p>
            <h2>{t.projects.title}</h2>
            <p className="section-lead">{t.projects.lead}</p>
          </div>
          <div className="project-track" role="list">
            {projects.map((project) => (
              <article
                className="project-card"
                key={project.title}
                tabIndex="0"
                role="listitem"
              >
                <div className="project-header">
                  <div className="project-icon" aria-hidden="true">
                    <svg viewBox="0 0 32 32" role="img" focusable="false">
                      <path
                        d="M5 22c4-6 9-9 15-10l7-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <circle cx="9" cy="19" r="2" />
                      <circle cx="18" cy="14" r="2" />
                      <circle cx="26" cy="11" r="2" />
                    </svg>
                  </div>
                  <div>
                    <p className="project-title">{project.title}</p>
                    <p className="project-type">{project.type}</p>
                  </div>
                </div>
                <p className="project-tag">{project.tag}</p>
                <div className="project-details">
                  <p>{project.description}</p>
                </div>
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                  <span>{t.projects.link}</span>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M7 17l10-10M10 7h7v7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </article>
            ))}
          </div>
          <p className="scroll-hint">{t.projects.hint}</p>
        </section>

        <section className="section contact reveal" id="contact" style={{ '--delay': '0.25s' }}>
          <div className="section-heading">
            <p className="eyebrow">{t.contact.eyebrow}</p>
            <h2>{t.contact.title}</h2>
            <p className="section-lead">{t.contact.lead}</p>
          </div>
          <div className="contact-card">
            <div className="contact-box">
              <p className="contact-title">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M4 6h16v12H4z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M4 7l8 6 8-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {t.contact.email}
              </p>
              <p className="contact-value">
                <a href="mailto:yvannseka@icloud.com">yvannseka@icloud.com</a>
              </p>
            </div>
            <div className="contact-box">
              <p className="contact-title">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M4 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM4 10v10M9 10v10M9 14c0-2 1.5-4 4-4s4 2 4 4v6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {t.contact.linkedin}
              </p>
              <p className="contact-value">
                <a
                  href="https://www.linkedin.com/in/paul-yvan-seka-543847322"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.linkedin.com/in/paul-yvan-seka-543847322
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>Portfolio —  GitHub Pages.</p>
      </footer>
    </div>
  )
}

export default App
