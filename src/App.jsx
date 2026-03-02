import './App.css'
import { useEffect, useState } from 'react'

const projects = [
  {
    title: 'DeciChurn',
    type: 'Data App',
    tag: 'Streamlit • Logistic Regression • KPI',
    link: 'https://github.com/yvan-003/DeciChurn',
    description:
      "Application Streamlit d'aide a la decision pour la retention client avec suivi KPI, segmentation metier, prediction du churn et optimisation de seuil/couts.",
  },
  {
    title: 'Fraudwatch',
    type: 'ML Web App',
    tag: 'Flask • Bootstrap • Logistic Regression',
    link: 'https://github.com/yvan-003/FRAUDWATCH',
    description:
      "Application Flask pour explorer des transactions, suivre des indicateurs de fraude, filtrer les donnees et estimer le risque en simulation via un modele de classification.",
  },
  {
    title: 'Stage Projet 2 (en cours)',
    type: 'BI Dashboard',
    tag: 'Power BI • Python • Geospatial Join',
    link: 'https://github.com/yvan-003/stage_projet2',
    description:
      "Projet en cours: analyse de circulation et collisions routieres avec preparation de tables analytiques et exports Power BI pour identifier zones/periodes critiques et soutenir le storytelling data.",
  },
  {
    title: 'Web Application INF349',
    type: 'Full Stack / API',
    tag: 'Flask • REST API • SQLite',
    link: 'https://github.com/yvan-003/Web_application',
    description:
      "Projet academique en equipe: API de prise de commandes avec persistance locale, logique metier (taxes/livraison), paiement distant et tests automatises.",
  },
  {
    title: 'SIEM Wazuh (Collab Desjardins)',
    type: 'Cybersecurity / SIEM',
    tag: 'Wazuh • Syslog • Detection',
    link: '',
    privateRepo: true,
    description:
      "Implementation d'un SIEM avec Wazuh et Syslog pour centraliser les logs et renforcer la detection d'incidents. Projet de collaboration (depot non public).",
  },
  
]

const skills = [
  'Power BI (DAX)',
  'Python (Pandas, scikit-learn)',
  'SQL',
  'Streamlit',
  'Flask',
  'REST API',
  'SQLite',
  'Peewee ORM',
  'Pytest',
  'Bootstrap',
  'Jupyter Notebook',
  'RStudio',
  'Data Cleaning',
  'EDA',
  'KPI & Reporting',
  'Data Storytelling',
  'Git / GitHub',
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
  { label: 'Projets data', value: '5+' },
  { label: 'Outils visualisation / Data', value: '10+' },
  { label: 'Certif en cours', value: 'PL-300' },
]

const SKILLS_PREVIEW_COUNT = 8

const personal = {
  name: 'Paul Yvan Seka',
  email: 'yvannseka@icloud.com',
  phone: '+1 (514) 757-3056',
  github: 'https://github.com/yvan-003',
  linkedin: 'https://www.linkedin.com/in/paul-yvan-seka-543847322',
  location: 'Chicoutimi, QC, Canada',
}

const copy = {
  fr: {
    nav: ['Accueil', 'A propos', 'Competences', 'Parcours', 'Projets', 'Contact'],
    eyebrow: 'Data • BI • IA',
    heroTitle: 'Etudiant en informatique (IA) | Data Analyst Junior',
    heroTools: '// Python, R, SQL, Power BI, Streamlit, Tableau.',
    heroImpact: '// Analyse, visualisation et aide a la decision.',
    heroExplore: 'Explorer les projets',
    heroCv: 'Telecharger mon CV',
    metrics: ['Projets data', 'Outils visualisation / Data', 'Certif en cours'],
    brandRole: 'Data Analyst Junior - BI & Data Science',
    openTo: 'Stage • Projet • Contrat junior',
    about: {
      eyebrow: 'A propos',
      title: 'Profil data & BI',
      lead:
        "Etudiant en informatique specialise en science des donnees et intelligence d'affaires. J'interviens sur l'analyse, la visualisation et la restitution de resultats pour soutenir la prise de decision.",
      cards: ['Methodes claires', "Esprit d'analyse", 'Projets concrets'],
      texts: [
        'De la collecte au nettoyage, puis visualisation et restitution.',
        'Structuration des donnees, detection de tendances, tests et interpretation.',
        'Chaque projet presente un objectif clair et des livrables utiles pour les equipes.',
      ],
    },
    skills: {
      eyebrow: 'Competences',
      title: 'Technologies deja mises en pratique',
      lead:
        "Outils et methodes deja utilises en cours et en projet. Je continue de progresser sur chaque stack.",
      soft: 'Qualites et methodes',
      showMore: 'Voir plus',
      showLess: 'Voir moins',
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
      link: 'Voir sur GitHub',
      privateLink: 'Depot prive (sur demande)',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Pret a collaborer',
      lead:
        "Discutons d'une mission data, d'un besoin BI ou d'un projet IA. Reponse rapide par email, telephone ou LinkedIn.",
      email: 'Adresse email',
      phone: 'Telephone',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      location: 'Localisation',
    },
    profile: {
      title: 'Data Analyst (junior)',
      focus: 'BI / Data Science',
      status: 'Certif PL-300 en cours',
    },
  },
  en: {
    nav: ['Home', 'About', 'Skills', 'Background', 'Projects', 'Contact'],
    eyebrow: 'Data • BI • AI',
    heroTitle: 'Computer Science Student (AI) | Junior Data Analyst',
    heroTools: '// Python, R, SQL, Power BI, Streamlit, Tableau.',
    heroImpact: '// Analysis, visualization, and decision support.',
    heroExplore: 'Explore projects',
    heroCv: 'Download my CV',
    metrics: ['Data projects', 'BI / Data tools', 'Certification'],
    brandRole: 'Junior Data Analyst - BI & Data Science',
    openTo: 'Internship • Project • Junior role',
    about: {
      eyebrow: 'About',
      title: 'Data & BI profile',
      lead:
        'Computer science student specialized in data science and business intelligence. I work on analysis, visualization, and clear reporting to support decision-making.',
      cards: ['Clear methods', 'Analytical mindset', 'Concrete projects'],
      texts: [
        'From collection to cleaning, then visualization and delivery.',
        'Data structuring, trend detection, testing, and interpretation.',
        'Each project has a clear objective and useful deliverables.',
      ],
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Technologies already practiced',
      lead:
        'Tools and methods already used in coursework and projects. I am still improving across each stack.',
      soft: 'Qualities and methods',
      showMore: 'Show more',
      showLess: 'Show less',
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
      privateLink: 'Private repository (on request)',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Ready to collaborate',
      lead:
        'Let’s discuss a data mission, BI need, or AI project. Fast response by email, phone, or LinkedIn.',
      email: 'Email',
      phone: 'Phone',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      location: 'Location',
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
  const [skillsExpanded, setSkillsExpanded] = useState(false)
  const t = copy[lang]
  const currentYear = new Date().getFullYear()
  const assetBase = import.meta.env.BASE_URL
  const visibleSkills = skillsExpanded ? skills : skills.slice(0, SKILLS_PREVIEW_COUNT)
  const hiddenSkillsCount = Math.max(skills.length - SKILLS_PREVIEW_COUNT, 0)
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
            <p className="brand-name">{personal.name}</p>
            <p className="brand-role">{t.brandRole}</p>
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
            {lang === 'fr' ? 'EN' : 'FR'}
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
              <a className="cta ghost" href={`${assetBase}cv.pdf`}>
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
                      : metric.label === 'Outils visualisation / Data'
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
                <img src={`${assetBase}IMG_0141.jpg`} alt="Photo de profil" />
              </div>
              <div className="profile-info-box code-card">
                <p className="code-line">
                  <span className="tok-keyword">const</span>{' '}
                  <span className="tok-var">profil</span> = {'{'}
                </p>
                <p className="code-line">
                  <span className="tok-prop">nom</span>:{' '}
                  <span className="tok-string">'{personal.name}'</span>,
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
                  <span className="tok-string">'{t.openTo}'</span>,
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
            {visibleSkills.map((skill) => (
              <span className="skill-pill" key={skill}>
                {skill}
              </span>
            ))}
          </div>
          {hiddenSkillsCount > 0 ? (
            <button
              className="skill-toggle"
              type="button"
              onClick={() => setSkillsExpanded((prev) => !prev)}
            >
              {skillsExpanded ? t.skills.showLess : `${t.skills.showMore} (+${hiddenSkillsCount})`}
            </button>
          ) : null}
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
                {project.privateRepo ? (
                  <span className="project-link project-link-disabled">{t.projects.privateLink}</span>
                ) : (
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
                )}
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
                <a href={`mailto:${personal.email}`}>{personal.email}</a>
              </p>
            </div>
            <div className="contact-box">
              <p className="contact-title">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M5 4h4l2 5-2 2a12 12 0 0 0 4 4l2-2 5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {t.contact.phone}
              </p>
              <p className="contact-value">
                <a href="tel:+15147573056">{personal.phone}</a>
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
                <a href={personal.linkedin} target="_blank" rel="noreferrer">
                  www.linkedin.com/in/paul-yvan-seka-543847322
                </a>
              </p>
            </div>
            <div className="contact-box">
              <p className="contact-title">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M12 2C8 2 5 5 5 9c0 5 7 12 7 12s7-7 7-12c0-4-3-7-7-7z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle cx="12" cy="9" r="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
                {t.contact.location}
              </p>
              <p className="contact-value">{personal.location}</p>
            </div>
            <div className="contact-box">
              <p className="contact-title">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.9 9.6.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-5.1 0-1.1.4-2 1.1-2.8-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.9 1.1a9.8 9.8 0 0 1 5.2 0c2-1.4 2.9-1.1 2.9-1.1.6 1.4.2 2.4.1 2.7.7.8 1.1 1.7 1.1 2.8 0 4-2.4 4.9-4.7 5.1.4.3.7 1 .7 2v2.9c0 .3.2.6.7.5 4-1.4 6.8-5.1 6.8-9.6C22 6.6 17.5 2 12 2z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                {t.contact.github}
              </p>
              <p className="contact-value">
                <a href={personal.github} target="_blank" rel="noreferrer">
                  github.com/yvan-003
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>
          © {currentYear} {personal.name} — Portfolio GitHub Pages.{' '}
          {lang === 'fr' ? 'Tous droits reserves.' : 'All rights reserved.'}
        </p>
      </footer>
    </div>
  )
}

export default App
