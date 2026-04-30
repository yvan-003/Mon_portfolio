import './App.css'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const personal = {
  name: 'Paul Yvan Seka',
  initials: 'PYS',
  title: 'Data Analyst Junior + Dev Full Stack',
  email: 'yvannseka@icloud.com',
  phone: '+1 (514) ***-3056',
  phoneLink: '+15147573056',
  github: 'https://github.com/yvan-003',
  linkedin: 'https://www.linkedin.com/in/paul-yvan-seka-543847322',
  location: 'Chicoutimi, QC',
}

const navItems = [
  { id: 'home', label: '// accueil', icon: 'home' },
  { id: 'about', label: '// a propos', icon: 'user' },
  { id: 'skills', label: '// competences', icon: 'chart' },
  { id: 'projects', label: '// projets', icon: 'code' },
  { id: 'path', label: '// parcours', icon: 'map' },
  { id: 'contact', label: '// contact', icon: 'mail' },
]

const metrics = [
  { id: 'projects', value: 6, suffix: '+', label: 'projets data & web' },
  { id: 'tools', value: 12, suffix: '+', label: 'outils pratiques' },
  { id: 'certification', value: 'PL-300', suffix: '', label: 'certif en preparation' },
]

const projects = [
  {
    id: 'stage2',
    title: 'Dashboard Power BI - Accidents routiers',
    stack: ['Power BI', 'Python', 'Geo'],
    categories: ['Power BI', 'Python'],
    image: 'project-stage2.svg',
    link: 'https://github.com/yvan-003/stage_projet2',
    description:
      'Projet termine : analyse spatio-temporelle des accidents proches des feux de circulation a Montreal, tables analytiques Python et dashboard Power BI en 3 pages.',
  },
  {
    id: 'sql-quebec',
    title: 'Analyse SQL - Entreprises du Quebec (en cours)',
    stack: ['PostgreSQL', 'CTE', 'Views'],
    categories: ['SQL'],
    image: 'project-sql.svg',
    link: 'https://github.com/yvan-003/analyse-entreprises-quebec-sql',
    description:
      'Projet SQL en cours sur les donnees ouvertes du Registre des entreprises du Quebec : ingestion, nettoyage, vues analytiques, index et requetes metier par region et secteur.',
  },
  {
    id: 'inf349',
    title: 'Web Application INF349',
    stack: ['Flask', 'REST API', 'SQLite'],
    categories: ['Full Stack', 'Python', 'SQL'],
    image: 'project-inf349.svg',
    link: 'https://github.com/yvan-003/Web_application',
    description:
      "Projet academique en equipe : application web de commandes, API REST, logique metier, paiement distant, ORM Peewee, SQLite et tests Pytest.",
  },
  {
    id: 'decichurn',
    title: 'DeciChurn',
    stack: ['Python', 'Streamlit', 'ML'],
    categories: ['Python'],
    image: 'project-decichurn.svg',
    link: 'https://github.com/yvan-003/DeciChurn',
    description:
      "Application Streamlit d'aide a la decision pour la retention client : KPI, segmentation, modele de churn, optimisation de seuil et simulation de budget.",
  },
  {
    id: 'fraudwatch',
    title: 'Fraudwatch',
    stack: ['Python', 'Flask', 'Bootstrap'],
    categories: ['Python', 'Full Stack'],
    image: 'project-fraudwatch.svg',
    link: 'https://github.com/yvan-003/FRAUDWATCH',
    description:
      'Application web Flask pour analyser des transactions, visualiser le risque de fraude et tester un modele de classification.',
  },
  {
    id: 'bank-marketing',
    title: 'Bank Marketing - Regles d association',
    stack: ['Python', 'Apriori', 'FP-Growth'],
    categories: ['Python'],
    image: 'project-bank.svg',
    link: 'https://github.com/yvan-003/tp2-bank-marketing',
    description:
      "Notebook de forage de donnees sur Bank Marketing : discretisation, format binaire, Apriori, FP-Growth et interpretation des profils de souscription.",
  },
]

const filters = ['Tout', 'Power BI', 'SQL', 'Python', 'Full Stack']
const FEATURED_PROJECT_COUNT = 3
const CONTROLLED_SCROLL_MIN_WIDTH = 981

const stackMatrixColumns = ['Power BI', 'SQL', 'Python', 'Flask', 'Streamlit', 'Tests']
const stackMatrixRows = [
  {
    project: 'Power BI accidents',
    tools: ['Power BI', 'SQL', 'Python'],
  },
  {
    project: 'SQL entreprises QC',
    tools: ['SQL'],
  },
  {
    project: 'Web App INF349',
    tools: ['SQL', 'Python', 'Flask', 'Tests'],
  },
  {
    project: 'DeciChurn',
    tools: ['Python', 'Streamlit'],
  },
  {
    project: 'Fraudwatch',
    tools: ['Python', 'Flask'],
  },
]

const skillUseCards = [
  {
    title: 'BI & Reporting',
    tools: 'Power BI, DAX bases, Tableau',
    usedFor: 'Structurer des KPI, construire des pages de dashboard et guider la lecture decisionnelle.',
  },
  {
    title: 'SQL & Modelisation',
    tools: 'PostgreSQL, CTE, views, indexes',
    usedFor: 'Nettoyer, joindre, agreger et preparer des tables reutilisables pour analyses metier.',
  },
  {
    title: 'Python Data',
    tools: 'Pandas, scikit-learn, notebooks',
    usedFor: 'Explorer des donnees, creer des variables, tester des modeles simples et exporter des livrables.',
  },
  {
    title: 'Applications Data',
    tools: 'Streamlit, Flask',
    usedFor: 'Transformer une analyse en interface utilisable : filtres, simulation, KPI et pages de consultation.',
  },
  {
    title: 'Full Stack',
    tools: 'REST API, SQLite, HTML/CSS, Bootstrap',
    usedFor: 'Developper des routes, formulaires, logique metier et persistance locale dans des projets web.',
  },
  {
    title: 'Hygiene logicielle',
    tools: 'Git/GitHub, README, requirements, tests',
    usedFor: 'Documenter, versionner, installer proprement et verifier les comportements critiques.',
  },
]

const terminalLines = [
  'cat profil.json',
  '{',
  '  "nom": "Paul Yvan Seka",',
  '  "roles": ["Data Analyst Junior", "Developpeur Web Full Stack"],',
  '  "parcours": "informatique, data, BI et developpement web",',
  '  "focus": ["dashboards", "applications web", "SQL analytics"],',
  '  "outils": ["Power BI", "Python", "SQL", "Flask", "Streamlit"],',
  '  "objectif": "Construire des outils utiles, lisibles et testables"',
  '}',
]

function DataBackground({ warpSpeed }) {
  const canvasRef = useRef(null)
  const warpRef = useRef(warpSpeed)

  useEffect(() => {
    warpRef.current = warpSpeed
  }, [warpSpeed])

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    const spacing = 28
    const particles = Array.from({ length: 25 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
    }))
    const stars = Array.from({ length: 70 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      z: Math.random() * 1 + 0.2,
    }))
    const litDots = new Map()
    let frameId
    let pulseId
    let width = 0
    let height = 0

    const resize = () => {
      const ratio = window.devicePixelRatio || 1
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * ratio
      canvas.height = height * ratio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const drawGrid = () => {
      const now = Date.now()
      for (let x = 0; x <= width; x += spacing) {
        for (let y = 0; y <= height; y += spacing) {
          const key = `${x}-${y}`
          const litUntil = litDots.get(key) || 0
          const opacity = litUntil > now ? 0.4 : 0.07
          context.fillStyle = `rgba(0, 212, 170, ${opacity})`
          context.beginPath()
          context.arc(x, y, 1.2, 0, Math.PI * 2)
          context.fill()
        }
      }
    }

    const drawParticles = () => {
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > width) particle.vx *= -1
        if (particle.y < 0 || particle.y > height) particle.vy *= -1

        context.fillStyle = 'rgba(0, 212, 170, 0.16)'
        context.beginPath()
        context.arc(particle.x, particle.y, 2, 0, Math.PI * 2)
        context.fill()
      })

      particles.forEach((particle, index) => {
        particles.slice(index + 1).forEach((other) => {
          const distance = Math.hypot(particle.x - other.x, particle.y - other.y)
          if (distance > 100) return
          context.strokeStyle = `rgba(0, 212, 170, ${(1 - distance / 100) * 0.12})`
          context.lineWidth = 1
          context.beginPath()
          context.moveTo(particle.x, particle.y)
          context.lineTo(other.x, other.y)
          context.stroke()
        })
      })
    }

    const drawWarp = () => {
      const speed = warpRef.current || 0
      if (speed <= 0.02) return

      const centerX = width / 2
      const centerY = height / 2
      stars.forEach((star) => {
        const dx = star.x - centerX
        const dy = star.y - centerY
        const distance = Math.max(Math.hypot(dx, dy), 1)
        const unitX = dx / distance
        const unitY = dy / distance
        const length = 10 + speed * 54 * star.z

        star.x += unitX * speed * 8 * star.z
        star.y += unitY * speed * 8 * star.z

        if (star.x < -80 || star.x > width + 80 || star.y < -80 || star.y > height + 80) {
          star.x = centerX + (Math.random() - 0.5) * 80
          star.y = centerY + (Math.random() - 0.5) * 80
        }

        context.strokeStyle = `rgba(0, 212, 170, ${0.05 + speed * 0.22})`
        context.lineWidth = 1
        context.beginPath()
        context.moveTo(star.x, star.y)
        context.lineTo(star.x - unitX * length, star.y - unitY * length)
        context.stroke()
      })
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)
      drawGrid()
      drawParticles()
      drawWarp()
      frameId = requestAnimationFrame(draw)
    }

    const pulseDots = () => {
      const columns = Math.floor(width / spacing)
      const rows = Math.floor(height / spacing)
      const now = Date.now()
      for (let i = 0; i < 8; i += 1) {
        const x = Math.floor(Math.random() * columns) * spacing
        const y = Math.floor(Math.random() * rows) * spacing
        litDots.set(`${x}-${y}`, now + 600)
      }
    }

    resize()
    draw()
    pulseId = window.setInterval(pulseDots, 180)
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(frameId)
      window.clearInterval(pulseId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="data-canvas" aria-hidden="true" />
}

function SocialLinks({ className = '' }) {
  return (
    <div className={`social-links ${className}`}>
      <a href={personal.github} aria-label="GitHub" target="_blank" rel="noreferrer">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.9 9.6.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.4-1.1-1-1.5-1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.5 2.3 1.1 2.9.8.1-.6.4-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-5.1 0-1.1.4-2 1.1-2.8-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.9 1.1a9.8 9.8 0 0 1 5.2 0c2-1.4 2.9-1.1 2.9-1.1.6 1.4.2 2.4.1 2.7.7.8 1.1 1.7 1.1 2.8 0 4-2.4 4.9-4.7 5.1.4.3.7 1 .7 2v2.9c0 .3.2.6.7.5 4-1.4 6.8-5.1 6.8-9.6C22 6.6 17.5 2 12 2z" />
        </svg>
      </a>
      <a href={personal.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4.8 8.9h3.4v10.6H4.8V8.9zm1.7-5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm4.1 5h3.2v1.4h.1c.4-.8 1.5-1.7 3.2-1.7 3.4 0 4 2.2 4 5.1v5.8h-3.4v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7v5.3h-3.4V8.9z" />
        </svg>
      </a>
      <a href={`mailto:${personal.email}`} aria-label="Email">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 6h16v12H4V6zm2.2 2 5.8 4.4L17.8 8H6.2zm11.8 8v-5.6l-6 4.6-6-4.6V16h12z" />
        </svg>
      </a>
    </div>
  )
}

function NavIcon({ name }) {
  const paths = {
    home: 'M4 11.5 12 5l8 6.5V20h-5v-5H9v5H4v-8.5z',
    user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-7 8c1.2-4 4-6 7-6s5.8 2 7 6H5z',
    chart: 'M5 19V9h3v10H5zm5 0V5h3v14h-3zm5 0v-7h3v7h-3z',
    code: 'M9 7 4 12l5 5 1.4-1.4L6.8 12l3.6-3.6L9 7zm6 0-1.4 1.4 3.6 3.6-3.6 3.6L15 17l5-5-5-5z',
    map: 'M4 6l5-2 6 2 5-2v14l-5 2-6-2-5 2V6zm5 .2v9.7l6 1.9V8.1L9 6.2z',
    mail: 'M4 6h16v12H4V6zm2.3 2 5.7 4.3L17.7 8H6.3z',
  }

  return (
    <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  )
}

function ProjectCard({ project, assetBase, isFilteredOut = false }) {
  return (
    <article className={`project-card ${isFilteredOut ? 'is-filtered-out' : ''}`}>
      <div className="project-image">
        <img src={`${assetBase}${project.image}`} alt="" loading="lazy" />
      </div>
      <h3>{project.title}</h3>
      <div className="stack-list">
        {project.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <p>{project.description}</p>
      <a className="project-button" href={project.link} target="_blank" rel="noreferrer">
        GitHub
      </a>
    </article>
  )
}

function App() {
  const [route, setRoute] = useState(() => (window.location.hash === '#/projects' ? 'projects' : 'home'))
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [warpSpeed, setWarpSpeed] = useState(0)
  const [typedTitle, setTypedTitle] = useState('')
  const [metricsVisible, setMetricsVisible] = useState(false)
  const [countedMetrics, setCountedMetrics] = useState({ projects: 0, tools: 0 })
  const [selectedFilter, setSelectedFilter] = useState('Tout')
  const [terminalOutput, setTerminalOutput] = useState([])
  const [visibleSections, setVisibleSections] = useState(() => new Set(['home']))
  const metricsRef = useRef(null)
  const activeSectionRef = useRef('home')
  const transitionLockRef = useRef(false)
  const transitionFrameRef = useRef(null)
  const transitionTimeoutRef = useRef(null)
  const touchStartRef = useRef(null)
  const wheelAccumulatorRef = useRef(0)
  const warpTimeoutRef = useRef(null)
  const assetBase = import.meta.env.BASE_URL
  const currentYear = new Date().getFullYear()
  const featuredProjects = projects.slice(0, FEATURED_PROJECT_COUNT)

  const visibleProjects = useMemo(
    () =>
      projects.map((project) => ({
        ...project,
        isFilteredOut:
          selectedFilter !== 'Tout' && !project.categories.includes(selectedFilter),
      })),
    [selectedFilter]
  )

  const sectionClass = (id, extra = '') =>
    `section-shell ${extra} ${activeSection === id ? 'is-active-section' : ''} ${
      visibleSections.has(id) ? 'is-visible-section' : ''
    }`

  const scrollToSection = useCallback((sectionId, duration = 950) => {
    const target = document.getElementById(sectionId)
    if (!target) return

    transitionLockRef.current = true
    activeSectionRef.current = sectionId
    setActiveSection(sectionId)
    setVisibleSections((previous) => new Set(previous).add(sectionId))
    setWarpSpeed(1)

    const startY = window.scrollY
    const endY = target.offsetTop
    const distance = endY - startY
    const startedAt = performance.now()

    const animate = (now) => {
      const elapsed = now - startedAt
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      window.scrollTo(0, startY + distance * eased)

      if (progress < 1) {
        transitionFrameRef.current = requestAnimationFrame(animate)
        return
      }

      window.scrollTo(0, endY)
    }

    cancelAnimationFrame(transitionFrameRef.current)
    transitionFrameRef.current = requestAnimationFrame(animate)
    window.clearTimeout(transitionTimeoutRef.current)
    window.clearTimeout(warpTimeoutRef.current)
    warpTimeoutRef.current = window.setTimeout(() => {
      setWarpSpeed(0)
    }, duration + 80)
    transitionTimeoutRef.current = window.setTimeout(() => {
      transitionLockRef.current = false
    }, duration + 450)
  }, [])

  useEffect(() => {
    const onHashChange = () => {
      const nextRoute = window.location.hash === '#/projects' ? 'projects' : 'home'
      setRoute(nextRoute)

      if (nextRoute === 'projects') {
        window.scrollTo(0, 0)
        return
      }

      if (window.location.hash === '#home' || window.location.hash === '') {
        activeSectionRef.current = 'home'
        setActiveSection('home')
        setVisibleSections((previous) => new Set(previous).add('home'))
        window.scrollTo(0, 0)
      }
    }

    window.addEventListener('hashchange', onHashChange)
    onHashChange()

    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    activeSectionRef.current = activeSection
  }, [activeSection])

  useEffect(() => {
    const title = 'Data Analyst Junior | Developpeur Web Full Stack'
    let index = 0
    const intervalId = window.setInterval(() => {
      index += 1
      setTypedTitle(title.slice(0, index))
      if (index >= title.length) window.clearInterval(intervalId)
    }, 50)

    return () => window.clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0
      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSectionRef.current = entry.target.id
            setActiveSection(entry.target.id)
            setVisibleSections((previous) => new Set(previous).add(entry.target.id))
          }
        })
      },
      { rootMargin: '-28% 0px -55% 0px', threshold: 0.12 }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMetricsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    if (metricsRef.current) observer.observe(metricsRef.current)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (route !== 'home') return undefined

    const getCurrentIndex = () => {
      const index = navItems.findIndex((item) => item.id === activeSectionRef.current)
      return index >= 0 ? index : 0
    }

    const goByDirection = (direction) => {
      const currentIndex = getCurrentIndex()
      const nextIndex = Math.max(0, Math.min(navItems.length - 1, currentIndex + direction))
      if (nextIndex === currentIndex) return
      scrollToSection(navItems[nextIndex].id)
    }

    const onWheel = (event) => {
      if (window.innerWidth < CONTROLLED_SCROLL_MIN_WIDTH) return
      event.preventDefault()
      if (transitionLockRef.current) return
      wheelAccumulatorRef.current += event.deltaY
      if (Math.abs(wheelAccumulatorRef.current) < 45) return
      const direction = wheelAccumulatorRef.current > 0 ? 1 : -1
      wheelAccumulatorRef.current = 0
      goByDirection(direction)
    }

    const onKeyDown = (event) => {
      const nextKeys = ['ArrowDown', 'PageDown', ' ']
      const previousKeys = ['ArrowUp', 'PageUp']

      if (![...nextKeys, ...previousKeys].includes(event.key)) return
      event.preventDefault()
      if (transitionLockRef.current) return
      goByDirection(nextKeys.includes(event.key) ? 1 : -1)
    }

    const onTouchStart = (event) => {
      if (window.innerWidth < CONTROLLED_SCROLL_MIN_WIDTH) return
      touchStartRef.current = event.touches[0]?.clientY ?? null
    }

    const onTouchEnd = (event) => {
      if (window.innerWidth < CONTROLLED_SCROLL_MIN_WIDTH) return
      if (touchStartRef.current === null || transitionLockRef.current) return
      const endY = event.changedTouches[0]?.clientY ?? touchStartRef.current
      const delta = touchStartRef.current - endY
      touchStartRef.current = null
      if (Math.abs(delta) < 55) return
      goByDirection(delta > 0 ? 1 : -1)
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })

    return () => {
      window.clearTimeout(transitionTimeoutRef.current)
      window.clearTimeout(warpTimeoutRef.current)
      cancelAnimationFrame(transitionFrameRef.current)
      wheelAccumulatorRef.current = 0
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [route, scrollToSection])

  useEffect(() => {
    if (!metricsVisible) return undefined

    const duration = 800
    const startedAt = performance.now()
    const intervalId = window.setInterval(() => {
      const progress = Math.min((performance.now() - startedAt) / duration, 1)
      setCountedMetrics({
        projects: Math.round(6 * progress),
        tools: Math.round(12 * progress),
      })
      if (progress === 1) window.clearInterval(intervalId)
    }, 24)

    return () => window.clearInterval(intervalId)
  }, [metricsVisible])

  useEffect(() => {
    let lineIndex = 0
    let charIndex = 0
    let currentLine = ''

    const intervalId = window.setInterval(() => {
      if (lineIndex >= terminalLines.length) {
        window.clearInterval(intervalId)
        return
      }

      currentLine += terminalLines[lineIndex][charIndex] || ''
      setTerminalOutput((previous) => {
        const next = [...previous]
        next[lineIndex] = currentLine
        return next
      })

      charIndex += 1

      if (charIndex > terminalLines[lineIndex].length) {
        lineIndex += 1
        charIndex = 0
        currentLine = ''
      }
    }, 28)

    return () => window.clearInterval(intervalId)
  }, [])

  const formatMetricValue = (metric) => {
    if (metric.id === 'projects') return `${countedMetrics.projects}${metric.suffix}`
    if (metric.id === 'tools') return `${countedMetrics.tools}${metric.suffix}`
    return metric.value
  }

  if (route === 'projects') {
    return (
      <div className="page all-projects-page">
        <DataBackground warpSpeed={0.18} />
        <main className="projects-page-content">
          <header className="projects-page-header">
            <a className="back-link" href="#home">
              ← retour au portfolio
            </a>
            <p className="eyebrow">projets complets</p>
            <h1>Tous les projets</h1>
            <p>
              Page directe pour regrouper les projets publics et garder l'accueil plus lisible.
              Les cartes pourront accueillir plus tard des captures detaillees, demos live et
              nouveaux depots.
            </p>
          </header>

          <div className="project-filters" aria-label="Filtres projets">
            {filters.map((filter) => (
              <button
                className={selectedFilter === filter ? 'is-active' : ''}
                key={filter}
                type="button"
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="project-grid all-projects-grid">
            {visibleProjects.map((project) => (
              <ProjectCard
                assetBase={assetBase}
                isFilteredOut={project.isFilteredOut}
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className={`page ${warpSpeed > 0.15 ? 'is-warping' : ''}`}>
      <DataBackground warpSpeed={warpSpeed} />
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <aside className={`sidebar ${menuOpen ? 'is-open' : ''} ${sidebarCollapsed ? 'is-collapsed' : ''}`}>
        <button
          className="sidebar-toggle"
          type="button"
          aria-label={sidebarCollapsed ? 'Ouvrir la navigation' : 'Masquer la navigation'}
          onClick={() => setSidebarCollapsed((value) => !value)}
        >
          {sidebarCollapsed ? '>' : '<'}
        </button>
        <div className="sidebar-profile">
          <div className="sidebar-avatar">{personal.initials}</div>
          <div>
            <p className="sidebar-name">{personal.name}</p>
            <p className="sidebar-title">{personal.title}</p>
            <p className="availability">
              <span /> Disponible aux offres
            </p>
          </div>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? 'fermer' : 'menu'}
          </button>
        </div>

        <nav className="nav" aria-label="Navigation principale">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'is-active' : ''}
              onClick={(event) => {
                event.preventDefault()
                setMenuOpen(false)
                scrollToSection(item.id, 850)
              }}
            >
              <NavIcon name={item.icon} />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="sidebar-footer">
          <SocialLinks />
        </div>
      </aside>

      <main className={`content ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        <section className={sectionClass('home', 'hero')} id="home">
          <svg className="hero-lines" viewBox="0 0 900 420" aria-hidden="true">
            <path d="M20 330 C 150 240, 240 370, 360 250 S 600 160, 880 230" />
            <path d="M40 160 C 180 110, 290 220, 430 130 S 650 60, 860 140" />
            <path d="M80 390 C 240 360, 330 310, 450 340 S 680 420, 860 300" />
          </svg>

          <div className="hero-copy">
            <p className="eyebrow">data analyst junior / developpeur web full stack</p>
            <h1>
              <span>{typedTitle}</span>
              <span className="cursor">|</span>
            </h1>
            <p className="hero-lead">
              Je construis des analyses, dashboards et applications web qui rendent les donnees
              plus utiles. Mon profil combine BI, SQL, Python, Flask et une base full stack.
            </p>

            <div className="hero-actions">
              <a
                className="button primary"
                href="#projects"
                onClick={(event) => {
                  event.preventDefault()
                  scrollToSection('projects', 900)
                }}
              >
                Voir les projets
              </a>
              <a className="button" href={`${assetBase}Paul_Yvan_Seka_CV_2026.pdf`}>
                Telecharger mon CV
              </a>
            </div>

            <div className="metrics" ref={metricsRef}>
              {metrics.map((metric) => (
                <div className="metric" key={metric.id}>
                  <p>{metricsVisible ? formatMetricValue(metric) : metric.id === 'certification' ? metric.value : '0'}</p>
                  <span>{metric.label}</span>
                </div>
              ))}
              <svg className="sparkline" viewBox="0 0 80 30" aria-hidden="true">
                <path d="M2 24 L14 20 L25 22 L37 13 L48 16 L62 8 L78 10" />
              </svg>
            </div>
          </div>

          <div className="hero-media">
            <div className="profile-ring">
              <img src={`${assetBase}IMG_0141.jpg`} alt="Paul Yvan Seka" />
            </div>
            <div className="profile-meta">
              <span>paul@portfolio:~$</span>
              <p>open profil.json</p>
            </div>
          </div>
        </section>

        <section className={sectionClass('about', 'about')} id="about">
          <div className="section-heading">
            <p className="eyebrow">a propos</p>
            <h2>Data analyst avec reflexe developpeur</h2>
            <p>
              Mon parcours est d'abord informatique : bases de donnees, developpement web,
              logique backend et projets d'equipe. La data vient s'ajouter a cette base avec
              une approche pratique : nettoyer, comprendre, visualiser, puis livrer un outil
              que quelqu'un peut vraiment utiliser.
            </p>
          </div>

          <div className="about-focus-grid">
            <article>
              <span>01</span>
              <h3>Analyse & BI</h3>
              <p>Power BI, SQL, Python et notebooks pour passer de donnees brutes a des tableaux de bord lisibles.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Full Stack</h3>
              <p>Flask, API REST, SQLite, HTML/CSS et tests pour transformer une idee en application web utilisable.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Positionnement</h3>
              <p>Je cherche des roles junior ou stages ou la data et le developpement se croisent.</p>
            </article>
          </div>

          <div className="terminal-card">
            <div className="terminal-top">
              <span />
              <span />
              <span />
            </div>
            <div className="terminal-body">
              {terminalOutput.map((line, index) => (
                <p key={`${line}-${index}`}>
                  {index === 0 ? <span className="prompt">paul@portfolio:~$ </span> : null}
                  {line}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className={sectionClass('skills', 'skills')} id="skills">
          <div className="section-heading">
            <p className="eyebrow">competences</p>
            <h2>Stacks deja mises en pratique</h2>
            <p>
              Pas de pourcentage arbitraire : je montre plutot les contextes ou chaque outil a
              ete utilise, puis ce que j'ai concretement fait avec ces technologies.
            </p>
          </div>

          <div className="skills-evidence-layout">
            <div className="stack-matrix" aria-label="Matrice stack par projet">
              <div className="matrix-row matrix-head">
                <span>Projet</span>
                {stackMatrixColumns.map((column) => (
                  <span key={column}>{column}</span>
                ))}
              </div>

              {stackMatrixRows.map((row) => (
                <div className="matrix-row" key={row.project}>
                  <span>{row.project}</span>
                  {stackMatrixColumns.map((column) => (
                    <span
                      className={row.tools.includes(column) ? 'matrix-dot is-used' : 'matrix-dot'}
                      key={column}
                      title={`${row.project} / ${column}`}
                    />
                  ))}
                </div>
              ))}
            </div>

            <div className="skill-use-grid">
              {skillUseCards.map((card) => (
                <article className="skill-use-card" key={card.title}>
                  <span>{card.title}</span>
                  <h3>{card.tools}</h3>
                  <p>{card.usedFor}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={sectionClass('projects', 'projects')} id="projects">
          <div className="section-heading">
            <p className="eyebrow">projets</p>
            <h2>Projets selectionnes</h2>
            <p>
              Un apercu court de mes projets principaux. La liste complete reste separee pour
              garder l'accueil lisible quand le portfolio grandira.
            </p>
          </div>

          <div className="project-section-actions">
            <a className="button primary" href="#/projects">
              Voir tous les projets
            </a>
          </div>

          <div className="project-grid">
            {featuredProjects.map((project) => (
              <ProjectCard assetBase={assetBase} key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className={sectionClass('path', 'path')} id="path">
          <div className="section-heading">
            <p className="eyebrow">parcours</p>
            <h2>Formation et experience</h2>
          </div>

          <div className="timeline">
            <div>
              <span>2023 - 2026</span>
              <h3>Baccalaureat en informatique</h3>
              <p>Universite du Quebec a Chicoutimi, axe science des donnees, BI et developpement logiciel.</p>
            </div>
            <div>
              <span>2025 - 2026</span>
              <h3>Certification PL-300</h3>
              <p>Preparation Microsoft Power BI : modelisation, DAX, publication et visualisation.</p>
            </div>
            <div>
              <span>2026</span>
              <h3>Projet Power BI termine</h3>
              <p>Analyse accidents/feux de circulation : preparation Python, modele analytique et dashboard Power BI finalise.</p>
            </div>
            <div>
              <span>2024 - 2026</span>
              <h3>Gestion logistique et relation client</h3>
              <p>Experience terrain en parallele des etudes : organisation, coordination et fiabilite operationnelle.</p>
            </div>
          </div>
        </section>

        <section className={sectionClass('contact', 'contact')} id="contact">
          <div className="section-heading">
            <p className="eyebrow">contact</p>
            <h2>Discutons data, BI ou stage</h2>
            <p>
              Disponible pour opportunites junior, stages, projets academiques ou collaborations
              autour de la data, de la BI et du developpement web.
            </p>
          </div>

          <div className="contact-grid">
            <a href={`mailto:${personal.email}`}>
              <span>Email</span>
              {personal.email}
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer">
              <span>LinkedIn</span>
              paul-yvan-seka
            </a>
            <a href={personal.github} target="_blank" rel="noreferrer">
              <span>GitHub</span>
              github.com/yvan-003
            </a>
            <a href={`tel:${personal.phoneLink}`}>
              <span>Telephone</span>
              {personal.phone}
            </a>
          </div>

          <footer className="contact-footer">
            <a
              href="#home"
              className="back-link"
              onClick={(event) => {
                event.preventDefault()
                scrollToSection('home', 900)
              }}
            >
              ↑ retour en haut
            </a>
            <SocialLinks />
            <p>© {currentYear} {personal.name}. Tous droits reserves.</p>
          </footer>
        </section>
      </main>
    </div>
  )
}

export default App
