import { flushSync } from 'react-dom'
import { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  CheckCircle,
  Code,
  Command,
  Coffee,
  CaretLeft,
  CaretRight,
  Database,
  DiscordLogo,
  EnvelopeSimple,
  GraduationCap,
  GithubLogo,
  House,
  InstagramLogo,
  List,
  LinkedinLogo,
  MapPinLine,
  Moon,
  PaperPlaneTilt,
  Pause,
  Play,
  Sun,
  User,
  X,
} from '@phosphor-icons/react'
import {
  siDart,
  siGmail,
  siKotlin,
  siNodedotjs,
  siPhp,
  siPython,
  siReact,
} from 'simple-icons'
import './App.css'

const navigation = [
  { label: 'Home', href: '#home', Icon: House },
  { label: 'About', href: '#about', Icon: User },
  { label: 'Education', href: '#education', Icon: GraduationCap },
  { label: 'Skills', href: '#skills', Icon: Code },
  { label: 'Projects', href: '#projects', Icon: Briefcase },
  { label: 'Contact', href: '#contact', Icon: EnvelopeSimple },
]

const profile = {
  name: 'Salvador Zyrill James T.',
  field: 'Computer Security',
  location: 'Dagupan City, Pangasinan, Philippines',
}

const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT

const projects = [
  {
    number: '01',
    title: 'Hardware Bazaar',
    category: '1ST SEMESTER · 1ST YEAR',
    description: 'A frontend-only e-commerce storefront for browsing PC components.',
    overview: 'A first-year project focused on presenting PC components in an e-commerce storefront. The experience is frontend-only, with a browsable catalog as its central feature.',
    role: 'Frontend Developer',
    technologies: ['Python', 'Tkinter'],
    repository: 'https://github.com/atreus28/Hardware-Bazaar',
    screenshot: '/projects/hardware-bazaar.png',
    Icon: PaperPlaneTilt,
    art: 'art-orbit',
    marks: ['E-COMMERCE', '01', '↗'],
  },
  {
    number: '02',
    title: 'Budget Planner',
    category: '2ND SEMESTER · 1ST YEAR',
    description: 'A budgeting web app for tracking monthly expenses and visualizing spending goals.',
    overview: 'A web app concept for keeping monthly spending organized. Users can track expenses and visualize their spending goals in one place.',
    role: 'Frontend Developer',
    technologies: ['HTML', 'CSS'],
    repository: 'https://github.com/atreus28/Budget-Planner',
    screenshot: '/projects/budget-planner.png',
    Icon: Command,
    art: 'art-grid',
    marks: ['BUDGETING', '02', '↗'],
  },
  {
    number: '03',
    title: 'Cinesphere',
    category: '1ST SEMESTER · 2ND YEAR',
    description: 'A mobile app for browsing movies and showtimes, selecting seats, and securely booking movie tickets.',
    overview: 'CineSphere is a mobile app designed for convenient movie ticket booking, allowing users to browse movies, view showtimes, select seats, and make secure payments. The app streamlines the booking process, delivering real-time updates and enhancing the movie-going experience.',
    role: 'UI/UX Designer',
    technologies: ['Figma', 'Dart', 'HTML', 'Supabase', 'Swift', 'C++'],
    repository: 'https://github.com/atreus28/CineSphere',
    screenshots: [
      { src: '/projects/cinesphere/01-splash.png', alt: 'CineSphere welcome screen with the app logo.' },
      { src: '/projects/cinesphere/02-movies.png', alt: 'CineSphere Now Showing movie carousel featuring Inside Out 2.' },
      { src: '/projects/cinesphere/03-menu.png', alt: 'CineSphere menu with About Us, Feedback, Contact Us, FAQs, and Terms of Service.' },
      { src: '/projects/cinesphere/04-about.png', alt: 'CineSphere About screen describing the app mission and story.' },
      { src: '/projects/cinesphere/05-movie-details.png', alt: 'Movie details screen for Armor with a booking button.' },
      { src: '/projects/cinesphere/06-seat-selection.png', alt: 'CineSphere seat selection screen with cinema and schedule options.' },
      { src: '/projects/cinesphere/07-payment-summary.png', alt: 'CineSphere payment summary showing ticket and seat details.' },
      { src: '/projects/cinesphere/08-payment.png', alt: 'CineSphere payment screen with payment method options.' },
      { src: '/projects/cinesphere/09-payment-summary.png', alt: 'CineSphere payment summary showing movie, schedule, ticket count, price, and seats.' },
      { src: '/projects/cinesphere/10-my-tickets.png', alt: 'CineSphere My Tickets screen with ticket details and a QR code.' },
    ],
    Icon: ArrowUpRight,
    art: 'art-window',
    marks: ['CINEMA RESERVATION APP', '03', '↗'],
  },
  {
    number: '04',
    title: 'Don Machiattos',
    category: '2ND SEMESTER · 2ND YEAR',
    description: 'A cozy coffee shop concept serving quality brews in a welcoming atmosphere.',
    overview: 'A coffee shop project centered around a cozy atmosphere and quality brews, bringing the shop concept and its customer experience to life.',
    role: 'UI/UX Designer & Frontend Developer',
    technologies: ['Kotlin', 'PHP', 'MySQL', 'Figma'],
    repository: 'https://github.com/atreus28/Don-Mac-Ordering-App',
    screenshots: [
      { src: '/projects/don-machiattos/01-overview.png', alt: 'Don Machiattos customer ordering app and administrator dashboard displayed side by side.' },
      { src: '/projects/don-machiattos/02-sign-in.png', alt: 'Don Machiattos sign-in screen with guest access and account options.' },
      { src: '/projects/don-machiattos/03-home.png', alt: 'Don Machiattos app home screen with promotions and order status.' },
      { src: '/projects/don-machiattos/04-drinks-menu.png', alt: 'Don Machiattos drinks menu with coffee and non-coffee selections.' },
      { src: '/projects/don-machiattos/05-admin-dashboard.png', alt: 'Don Machiattos administrator dashboard with sales, inventory, and order summaries.' },
    ],
    Icon: EnvelopeSimple,
    art: 'art-lines',
    marks: ['COFFEE SHOP', '04', '↗'],
  },
  {
    number: '05',
    title: 'UPANG Facility Report Management System',
    category: '1ST SEMESTER · 3RD YEAR',
    description: 'A campus reporting web platform for tracking facility issues from submission through resolution.',
    overview: 'A campus web platform for reporting and managing facility issues. It is designed to keep submitted reports trackable through the resolution process.',
    role: 'UI/UX Designer & Frontend Developer',
    technologies: ['MERN Stack', 'Figma'],
    repository: 'https://github.com/atreus28/Upang-Facility-Report-Management-System',
    screenshots: [
      { src: '/projects/upang-facility/01-landing.png', alt: 'UPANG Facility Management home page with report issue and track reports actions.' },
      { src: '/projects/upang-facility/02-admin-sign-in.png', alt: 'University of Pangasinan facility management administrator sign-in page.' },
    ],
    Icon: CheckCircle,
    art: 'art-circle',
    marks: ['WEB PLATFORM', '05', '↗'],
  },
  {
    number: '06',
    title: 'IoT Smart Inhaler Monitoring & Adherence System',
    category: 'CAPSTONE PROJECT · PRESENT',
    description: 'A real-time smart inhaler monitoring system designed to support medication adherence for asthma and COPD patients.',
    overview: 'A capstone project exploring real-time inhaler monitoring and medication adherence for people with asthma and COPD. The system is intended to provide monitoring that can support more consistent treatment adherence.',
    role: 'IoT Developer — hardware-to-application integration',
    technologies: ['Flutter', 'Firebase'],
    screenshots: [
      { src: '/projects/iot-smart-inhaler/01-mistify-splash.png', alt: 'Mistify smart inhaler app launch screen with its logo.' },
      { src: '/projects/iot-smart-inhaler/02-dashboard.png', alt: 'Mistify dashboard showing patient overview metrics, treatment actions, and navigation.' },
      { src: '/projects/iot-smart-inhaler/03-patients.png', alt: 'Mistify patient list with age groups, patient records, and search.' },
      { src: '/projects/iot-smart-inhaler/04-add-patient.png', alt: 'Mistify add patient form for personal, contact, and medical information.' },
      { src: '/projects/iot-smart-inhaler/05-schedules.png', alt: 'Mistify schedule list with appointment status, times, and patient details.' },
      { src: '/projects/iot-smart-inhaler/06-schedule-appointment.png', alt: 'Mistify appointment form for selecting a patient, date, time, duration, room, and nebulizer unit.' },
      { src: '/projects/iot-smart-inhaler/07-nebulizer-control.png', alt: 'Mistify nebulizer control screen showing unit status and manual start controls.' },
      { src: '/projects/iot-smart-inhaler/08-voice-assistant.png', alt: 'Mistify Voice AI Assistant with suggested voice queries.' },
      { src: '/projects/iot-smart-inhaler/09-audit-trail.png', alt: 'Mistify audit trail logs showing treatment and appointment activity.' },
      { src: '/projects/iot-smart-inhaler/10-session-details.png', alt: 'Mistify treatment session details with prescribed medication and nebulizer delivery metrics.' },
    ],
    Icon: Code,
    art: 'art-dashboard',
    marks: ['IOT · HEALTH', '06', '↗'],
  },
]

const skillGroups = [
  { name: 'Technical focus', items: ['Networking', 'Cybersecurity', 'Frontend development', 'IoT development'] },
  { name: 'Programming & tools', items: ['Dart', 'Python', 'Java', 'PHP', 'Kotlin', 'SQL', 'React.js', 'Node.js'] },
  { name: 'Professional skills', items: ['Teamwork & collaboration', 'Problem solving', 'Time management & prioritization', 'Adaptability & flexibility'] },
]

const technologyLogos = [
  { name: 'Dart', icon: siDart },
  { name: 'Python', icon: siPython },
  { name: 'Java', Icon: Coffee },
  { name: 'PHP', icon: siPhp },
  { name: 'Kotlin', icon: siKotlin },
  { name: 'SQL', Icon: Database },
  { name: 'React', icon: siReact },
  { name: 'Node.js', icon: siNodedotjs },
]

const education = [
  {
    period: '2023 — PRESENT',
    qualification: 'Bachelor of Science in Information Technology',
    institution: 'PHINMA University of Pangasinan',
  },
  {
    period: '2021 — 2023',
    qualification: 'Senior High School',
    institution: "Saint John's Cathedral School Inc.",
  },
]

function SkillGroups() {
  return (
    <div className="skill-groups">
      {skillGroups.map(({ name, items }) => (
        <section className="skill-group" key={name} aria-label={name}>
          <h3>{name}</h3>
          <ul>
            {items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
      ))}
    </div>
  )
}

function TechnologyLogos() {
  return (
    <div className="technology-logos" aria-label="Programming languages and technologies">
      {technologyLogos.map(({ name, icon, Icon }) => (
        <div className="technology-logo" key={name}>
          {icon ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d={icon.path} />
            </svg>
          ) : (
            <Icon size={26} weight="regular" aria-hidden="true" />
          )}
          <span>{name}</span>
        </div>
      ))}
    </div>
  )
}

function SocialLinks() {
  return (
    <nav className="simple-socials" aria-label="Social profiles">
      <a href="https://github.com/atreus28" target="_blank" rel="noreferrer" aria-label="GitHub profile">
        <GithubLogo size={21} weight="fill" />
        <span className="social-tooltip">GitHub</span>
      </a>
      <a href="#contact" aria-label="Go to the contact form">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d={siGmail.path} /></svg>
        <span className="social-tooltip">Contact form</span>
      </a>
      <a href="https://www.linkedin.com/in/zyrill-james-salvador-44a6572a1/?isSelfProfile=true" target="_blank" rel="noreferrer" aria-label="LinkedIn profile (opens in a new tab)">
        <LinkedinLogo size={21} weight="fill" />
        <span className="social-tooltip">LinkedIn</span>
      </a>
      <a href="https://www.instagram.com/l1yriz/" target="_blank" rel="noreferrer" aria-label="Instagram profile (opens in a new tab)">
        <InstagramLogo size={21} weight="fill" />
        <span className="social-tooltip">Instagram</span>
      </a>
      <a href="https://discord.com/users/1082186973025935390" target="_blank" rel="noreferrer" aria-label="Discord profile (opens in a new tab)">
        <DiscordLogo size={21} weight="fill" />
        <span className="social-tooltip">Discord</span>
      </a>
    </nav>
  )
}

function ContactForm() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget

    if (!formspreeEndpoint) {
      setStatus({
        type: 'error',
        message: 'The contact form is not connected yet. The site owner needs to add a Formspree endpoint.',
      })
      return
    }

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) {
        setStatus({
          type: 'error',
          message: 'Your message could not be sent. Please try again in a moment.',
        })
        return
      }

      form.reset()
      setStatus({ type: 'success', message: 'Thanks for reaching out. Your message has been sent.' })
    } catch {
      setStatus({
        type: 'error',
        message: 'A network error prevented your message from being sent. Please try again.',
      })
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-row">
        <label>
          Your name
          <input name="name" type="text" autoComplete="name" required maxLength={100} />
        </label>
        <label>
          Your email
          <input name="email" type="email" autoComplete="email" required maxLength={254} />
        </label>
      </div>
      <label>
        Message
        <textarea name="message" rows="4" required maxLength={5000} />
      </label>
      <label className="contact-form-honeypot" aria-hidden="true">
        Leave this field empty
        <input name="_gotcha" tabIndex="-1" autoComplete="off" />
      </label>
      <button className="button button-primary" type="submit">
        Send message <ArrowUpRight size={18} />
      </button>
      <p className="contact-form-privacy">Sent securely through Formspree. Please don&apos;t include sensitive information.</p>
      {status && (
        <p className={`contact-form-status contact-form-status-${status.type}`} role={status.type === 'error' ? 'alert' : 'status'}>
          {status.message}
        </p>
      )}
    </form>
  )
}

function readPreference(key, fallback) {
  const saved = window.localStorage.getItem(key)
  return saved ?? fallback
}

function SplashScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [isLeaving, setIsLeaving] = useState(false)

  useEffect(() => {
    const startedAt = Date.now()
    const duration = 3000
    let leaveTimer
    let completionTimer
    const timer = window.setInterval(() => {
      const nextProgress = Math.min(100, Math.round(((Date.now() - startedAt) / duration) * 100))
      setProgress(nextProgress)
      if (nextProgress === 100) {
        window.clearInterval(timer)
        leaveTimer = window.setTimeout(() => {
          setIsLeaving(true)
          completionTimer = window.setTimeout(onComplete, 260)
        }, 150)
      }
    }, 20)

    return () => {
      window.clearInterval(timer)
      window.clearTimeout(leaveTimer)
      window.clearTimeout(completionTimer)
    }
  }, [onComplete])

  return (
    <div className={`splash-screen${isLeaving ? ' splash-leaving' : ''}`} role="status" aria-live="polite">
      <div className="splash-content">
        <div className="splash-emblem">
          <span className="splash-orbit splash-orbit-outer" aria-hidden="true" />
          <span className="splash-orbit splash-orbit-inner" aria-hidden="true" />
          <img className="splash-mark" src="/brand-mark.png" alt="" aria-hidden="true" />
        </div>
        <p className="splash-kicker"><span /> PERSONAL PORTFOLIO</p>
        <p className="eyebrow">Welcome to my portfolio</p>
        <p className="splash-name">Llyriz</p>
        <p className="splash-caption">Preparing a space for technology, security, and ideas.</p>
        <div className="splash-progress-row">
          <span>{progress === 100 ? 'Ready to explore' : 'Loading portfolio'}</span>
          <span className="progress-label">{progress}%</span>
        </div>
        <div
          className="progress-track"
          role="progressbar"
          aria-label="Loading portfolio"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={progress}
        >
          <span style={{ width: `${progress}%` }} />
        </div>
        <div className="splash-footer"><span>DESIGNED WITH PURPOSE</span><span>2026</span></div>
      </div>
    </div>
  )
}

function Sidebar({ activeSection, isMenuOpen, onNavigate, onToggleMenu }) {
  return (
    <>
      <button
        type="button"
        className="mobile-menu-toggle"
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen}
        aria-controls="site-navigation"
        onClick={onToggleMenu}
      >
        {isMenuOpen ? <X size={22} /> : <List size={22} />}
        <span>Menu</span>
      </button>
      {isMenuOpen && <button className="mobile-scrim" aria-label="Close navigation menu" onClick={onToggleMenu} />}
      <aside className={`sidebar${isMenuOpen ? ' sidebar-open' : ''}`} id="site-navigation">
        <button type="button" className="sidebar-close" aria-label="Close navigation menu" onClick={onToggleMenu}>
          <X size={20} />
        </button>
        <a className="brand-lockup" href="#home" onClick={() => onNavigate('home')} aria-label={`${profile.name}, home`}>
          <img className="brand-avatar" src="/brand-mark.png" alt="" aria-hidden="true" />
          <span className="brand-name">{profile.name}</span>
          <span className="brand-handle">{profile.field} student</span>
        </a>

        <nav className="social-links" aria-label="Contact and social profiles">
          <a href="#contact" aria-label="Go to the contact form">
            <EnvelopeSimple size={18} />
          </a>
          <a href="https://github.com/atreus28" target="_blank" rel="noreferrer" aria-label="GitHub profile (opens in a new tab)">
            <GithubLogo size={18} weight="fill" />
          </a>
          <a href="https://www.linkedin.com/in/zyrill-james-salvador-44a6572a1/?isSelfProfile=true" target="_blank" rel="noreferrer" aria-label="LinkedIn profile (opens in a new tab)">
            <LinkedinLogo size={18} weight="fill" />
          </a>
          <a href="https://www.instagram.com/l1yriz/" target="_blank" rel="noreferrer" aria-label="Instagram profile (opens in a new tab)">
            <InstagramLogo size={18} weight="fill" />
          </a>
          <a href="https://discord.com/users/1082186973025935390" target="_blank" rel="noreferrer" aria-label="Discord profile (opens in a new tab)">
            <DiscordLogo size={18} weight="fill" />
          </a>
        </nav>

        <nav className="side-nav" aria-label="Main navigation">
          {navigation.map(({ label, href, Icon }) => (
            <a
              className={`nav-link${activeSection === href.slice(1) ? ' nav-link-active' : ''}`}
              href={href}
              key={label}
              onClick={() => onNavigate(href.slice(1))}
              aria-current={activeSection === href.slice(1) ? 'location' : undefined}
            >
              <Icon size={19} weight={activeSection === href.slice(1) ? 'fill' : 'regular'} />
              <span>{label}</span>
            </a>
          ))}
        </nav>

        <div className="sidebar-footer">
          <span className="availability-dot" />
          <span>Open to relevant opportunities</span>
          <span className="copyright">© 2026 {profile.name}</span>
        </div>
      </aside>
    </>
  )
}

function ProjectCard({ project, onSelect }) {
  const { number, title, category, description, Icon, art, marks } = project
  const previewImage = project.screenshots?.[0].src ?? project.screenshot

  return (
    <article className="project-card">
      <button
        type="button"
        className="project-card-trigger"
        aria-label={`Open project overview: ${title}`}
        onClick={() => onSelect(project)}
      />
      <div className={`project-art ${art}${previewImage ? ' project-art-has-image' : ''}`} aria-hidden="true">
        {previewImage ? (
          <img src={previewImage} alt="" loading="lazy" />
        ) : (
          <>
            <div className="art-orbit-ring" />
            <div className="art-symbol"><Icon size={32} weight="light" /></div>
            <div className="art-labels">
              {marks.map((mark) => <span key={mark}>{mark}</span>)}
            </div>
            <span className="art-number">{number}</span>
          </>
        )}
      </div>
      <div className="project-copy">
        <div className="project-category">{category}</div>
        <h3>{title}</h3>
        <p>{description}</p>
        <ProjectMetadata project={project} compact />
        <span className="text-link">View project overview <ArrowUpRight size={16} /></span>
      </div>
    </article>
  )
}

function ProjectMetadata({ project, compact = false }) {
  return (
    <div className={`project-metadata${compact ? ' project-metadata-compact' : ''}`}>
      <div className="project-metadata-role">
        <span>Role</span>
        <p>{project.role}</p>
      </div>
      <div className="project-metadata-technologies">
        <span>Technologies</span>
        <ul>
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
      </div>
    </div>
  )
}

function ProjectSlideshow({ screenshots, title }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const activeScreenshot = screenshots[activeIndex]
  const moveSlide = (direction) => {
    setActiveIndex((index) => (index + direction + screenshots.length) % screenshots.length)
  }

  useEffect(() => {
    if (!isPlaying || screenshots.length < 2) return undefined

    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % screenshots.length)
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [isPlaying, screenshots.length])

  return (
    <div className="project-slideshow" aria-label={`${title} screenshots`}>
      <div className="project-slideshow-frame">
        <img key={activeScreenshot.src} src={activeScreenshot.src} alt={activeScreenshot.alt} />
        <button
          type="button"
          className="project-slide-arrow project-slide-previous"
          onClick={() => moveSlide(-1)}
          aria-label="Show previous screenshot"
        >
          <CaretLeft size={21} weight="bold" />
        </button>
        <button
          type="button"
          className="project-slide-arrow project-slide-next"
          onClick={() => moveSlide(1)}
          aria-label="Show next screenshot"
        >
          <CaretRight size={21} weight="bold" />
        </button>
      </div>
      <div className="project-slideshow-footer">
        <span aria-live={isPlaying ? 'off' : 'polite'}>{activeIndex + 1} / {screenshots.length} · {activeScreenshot.alt}</span>
        <div className="project-slide-dots" aria-label="Choose screenshot">
          {screenshots.map((screenshot, index) => (
            <button
              key={screenshot.src}
              type="button"
              className={index === activeIndex ? 'project-slide-dot project-slide-dot-active' : 'project-slide-dot'}
              aria-label={`Show screenshot ${index + 1}`}
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <button
          type="button"
          className="project-slideshow-toggle"
          onClick={() => setIsPlaying((playing) => !playing)}
          aria-label={isPlaying ? 'Pause automatic slideshow' : 'Play automatic slideshow'}
          aria-pressed={isPlaying}
          title={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isPlaying ? <Pause size={15} weight="fill" /> : <Play size={15} weight="fill" />}
        </button>
      </div>
    </div>
  )
}

function ProjectOverviewDialog({ project, onClose }) {
  const dialogRef = useCallback((element) => {
    if (element && !element.open) element.showModal()
  }, [])

  if (!project) return null

  return (
    <dialog
      className="project-dialog"
      ref={dialogRef}
      aria-labelledby="project-dialog-title"
      onClose={onClose}
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          event.preventDefault()
          onClose()
        }
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="project-dialog-content">
        {project.screenshots ? (
          <ProjectSlideshow screenshots={project.screenshots} title={project.title} />
        ) : (
          <div className={`project-dialog-art project-art ${project.art}${project.screenshot ? ' project-art-has-image' : ''}`} aria-hidden="true">
            {project.screenshot ? (
            <img src={project.screenshot} alt="" />
            ) : (
              <>
                <div className="art-symbol"><project.Icon size={36} weight="light" /></div>
                <span className="art-number">{project.number}</span>
              </>
            )}
          </div>
        )}
        <div className="project-dialog-heading">
          <p className="eyebrow">{project.category}</p>
          <h2 id="project-dialog-title">{project.title}</h2>
          <p className="project-dialog-summary">{project.description}</p>
        </div>
        <div className="project-dialog-overview">
          <h3>Project overview</h3>
          <p>{project.overview}</p>
        </div>
        <ProjectMetadata project={project} />
        <div className="project-dialog-actions">
          {project.repository && (
            <a
              className="button button-outline project-repository-link"
              href={project.repository}
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo size={19} weight="fill" />
              View GitHub repository
              <ArrowUpRight size={17} />
            </a>
          )}
          <button type="button" className="button button-outline project-dialog-close" onClick={onClose}>
            Close overview <X size={17} />
          </button>
        </div>
      </div>
    </dialog>
  )
}

function SimplePortfolio({ theme, onThemeChange, activeSection, onSelectProject, onSectionNavigate, onViewChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  return (
    <>
      <a className="skip-link" href="#simple-main">Skip to content</a>
      <header className={`simple-header${isMenuOpen ? ' simple-header-open' : ''}`}>
        <a className="simple-brand" href="#home" aria-label="Llyriz home" onClick={() => setIsMenuOpen(false)}>
          <img className="simple-brand-mark" src="/brand-mark.png" alt="" aria-hidden="true" />
          <span>Llyriz</span>
        </a>
        <nav className="simple-nav" id="simple-navigation" aria-label="Page navigation">
          {[
            ['About', '#about'],
            ['Education', '#education'],
            ['Skills', '#skills'],
            ['Projects', '#projects'],
            ['Contact', '#contact'],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => {
                setIsMenuOpen(false)
                onSectionNavigate(href.slice(1))
              }}
              aria-current={activeSection === href.slice(1) ? 'location' : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="simple-menu-toggle"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="simple-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={18} /> : <List size={18} />}
          <span>Menu</span>
        </button>
        <div className="simple-header-actions">
          <div className="view-switch" role="group" aria-label="Choose portfolio layout">
            <button type="button" aria-pressed="false" onClick={() => onViewChange('dashboard')}>
              Dashboard
            </button>
            <button type="button" className="switch-active" aria-pressed="true">
              Simple
            </button>
          </div>
          <button type="button" className="theme-toggle" onClick={onThemeChange} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </header>
      <main className="simple-page" id="simple-main">
        <section className="simple-hero" id="home" aria-labelledby="simple-hero-title">
          <div className="simple-hero-copy">
            <p className="eyebrow"><span className="availability-dot" /> COMPUTER SECURITY · IT STUDENT</p>
            <h1 id="simple-hero-title">Curious about technology <span>Focused on security</span></h1>
            <p className="simple-hero-description">I&apos;m an Information Technology student at PHINMA University of Pangasinan with hands-on experience in networking and IoT development. As a developer and vibe coder, I leverage AI-driven tools alongside core tech skills to build fast, adapt continuously, and solve complex problems. I&apos;m actively seeking opportunities in cybersecurity, data analytics, or networking.</p>
            <div className="simple-hero-actions">
              <a className="button button-primary" href="#projects">View my work <ArrowDown size={17} /></a>
              <a className="button button-outline" href="#contact">Contact me <ArrowUpRight size={16} /></a>
            </div>
            <SocialLinks />
          </div>
          <div className="simple-hero-visual" role="img" aria-label="Illustration of a developer workspace with monitors displaying code">
            <div className="workspace-glow" />
            <div className="workspace-wall" />
            <div className="workspace-monitor monitor-left"><div className="monitor-code"><i /><i /><i /><i /><i /><i /></div></div>
            <div className="workspace-monitor monitor-main"><div className="monitor-code"><i /><i /><i /><i /><i /><i /><i /><i /></div></div>
            <div className="workspace-monitor monitor-right"><div className="monitor-code"><i /><i /><i /><i /><i /></div></div>
            <div className="workspace-stand" />
            <div className="workspace-desk" />
            <div className="workspace-keyboard" />
            <div className="workspace-badge badge-projects"><Code size={16} /><strong>IT</strong><span>Projects & learning</span></div>
            <div className="workspace-badge badge-rating"><CheckCircle size={16} /><strong>Focused</strong><span>Security & networks</span></div>
          </div>
        </section>

        <section className="simple-about simple-section" id="about" aria-labelledby="simple-about-title">
          <div className="about-portrait">
            <img src="/profile-portrait.png" alt="Portrait of Salvador Zyrill James T." />
          </div>
          <div className="simple-about-copy">
            <p className="eyebrow">PROFILE</p>
            <h2 id="simple-about-title">I&apos;m {profile.name}<br /><span>{profile.field} student</span></h2>
            <p>As a BSIT student at PHINMA University of Pangasinan with hands-on experience in networking and IoT, I am actively seeking opportunities in cybersecurity, data analytics, or network engineering. As a forward-thinking <strong>vibe coder</strong>, I leverage modern AI development tools alongside core tech skills to build, adapt, and learn rapidly across network management, data processing, and security practices.</p>
            <a className="text-link" href="#education">View my education <ArrowDown size={16} /></a>
          </div>
        </section>

        <section className="simple-section simple-experience" id="education" aria-labelledby="simple-experience-title">
          <div className="simple-section-heading">
            <div><p className="eyebrow">ACADEMIC BACKGROUND</p><h2 id="simple-experience-title">Education</h2></div>
            <p>Building a foundation in information technology and computer security.</p>
          </div>
          <div className="experience-grid">
            {education.map(({ period, qualification, institution }) => (
              <article className="experience-card education-card" key={qualification}>
                <span>{period}</span><h3>{qualification}</h3><p>{institution}</p><ArrowUpRight size={18} aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="simple-section simple-skills" id="skills" aria-labelledby="simple-skills-title">
          <div className="simple-section-heading">
            <div>
              <p className="eyebrow">TECHNICAL & PROFESSIONAL</p>
              <h2 id="simple-skills-title">Skills</h2>
            </div>
            <p>Technical interests, languages, and transferable skills.</p>
          </div>
          <SkillGroups />
          <TechnologyLogos />
        </section>

        <section className="simple-section simple-projects" id="projects" aria-labelledby="simple-projects-title">
          <div className="simple-section-heading">
            <div><p className="eyebrow">COURSEWORK & CAPSTONE</p><h2 id="simple-projects-title">Projects</h2></div>
            <p>Academic projects in web development, software, and IoT.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => <ProjectCard key={project.number} project={project} onSelect={onSelectProject} />)}
          </div>
        </section>

        <section className="simple-contact" id="contact" aria-labelledby="simple-contact-title">
          <div><p className="eyebrow">CONTACT</p><h2 id="simple-contact-title">Open to new <span>opportunities</span></h2><p>I&apos;m looking to apply my skills in cybersecurity, data, or networking.</p><p className="contact-location"><MapPinLine size={16} /> {profile.location}</p></div>
          <ContactForm />
        </section>
        <footer className="simple-footer"><span>© 2026 {profile.name}</span><a href="#home">Back to top ↑</a></footer>
      </main>
    </>
  )
}

function App() {
  const [theme, setTheme] = useState(() => readPreference('portfolio-theme', 'dark'))
  const [view, setView] = useState('simple')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isLoading, setIsLoading] = useState(true)
  const [selectedProject, setSelectedProject] = useState(null)
  const finishLoading = useCallback(() => setIsLoading(false), [])

  useLayoutEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'

    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }

    return () => {
      window.history.scrollRestoration = previousScrollRestoration
    }
  }, [])

  const changeView = useCallback((nextView) => {
    if (nextView === view) return

    if (window.location.hash) {
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
    setActiveSection('home')

    if (typeof document.startViewTransition === 'function') {
      document.startViewTransition(() => {
        flushSync(() => setView(nextView))
      })
      return
    }

    setView(nextView)
  }, [view])

  const changeTheme = useCallback(() => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (typeof document.startViewTransition === 'function' && !reduceMotion) {
      document.startViewTransition(() => {
        flushSync(() => setTheme(nextTheme))
      })
      return
    }

    setTheme(nextTheme)
  }, [theme])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    if (!isMenuOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  useEffect(() => {
    const sections = navigation
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean)

    let frame = 0
    const updateActiveSection = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const activationLine = Math.min(window.innerHeight * 0.2, 160)
        const orderedSections = sections
          .map((section) => ({ section, top: section.getBoundingClientRect().top }))
          .sort((a, b) => a.top - b.top)
        const atPageBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2
        const current = atPageBottom
          ? orderedSections.at(-1)?.section
          : orderedSections
            .filter(({ top }) => top <= activationLine)
            .at(-1)?.section ?? orderedSections[0]?.section

        if (current) setActiveSection((active) => active === current.id ? active : current.id)
      })
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [view])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    if (typeof IntersectionObserver === 'undefined') return undefined

    const revealTargets = document.querySelectorAll([
      '.simple-page > section',
      '.simple-page .experience-card',
      '.simple-page .project-card',
      '.simple-page .skill-group',
      '.simple-page .about-portrait img',
      '.main-content .hero-section',
      '.main-content .tools-strip',
      '.main-content .dashboard-grid > .projects-panel',
      '.main-content .dashboard-about .mini-avatar',
      '.main-content .right-column > .panel',
      '.main-content .skills-panel',
      '.main-content .dashboard-education',
      '.main-content .contact-panel',
      '.main-content .project-card',
      '.main-content .skill-group',
    ].join(', '))

    let previousScrollY = window.scrollY
    let scrollDirection = 'down'
    const trackScrollDirection = () => {
      const currentScrollY = window.scrollY
      if (Math.abs(currentScrollY - previousScrollY) > 2) {
        scrollDirection = currentScrollY < previousScrollY ? 'up' : 'down'
        previousScrollY = currentScrollY
      }
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-reveal-direction', scrollDirection)
          entry.target.setAttribute('data-revealed', 'true')
        } else {
          entry.target.removeAttribute('data-revealed')
          entry.target.setAttribute('data-reveal-direction', scrollDirection === 'up' ? 'down' : 'up')
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })

    window.addEventListener('scroll', trackScrollDirection, { passive: true })
    revealTargets.forEach((target) => {
      target.setAttribute('data-reveal', '')
      observer.observe(target)
    })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', trackScrollDirection)
    }
  }, [view])

  const closeMenu = (section) => {
    setIsMenuOpen(false)
    if (section) setActiveSection(section)
  }

  return (
    <>
      {isLoading && <SplashScreen onComplete={finishLoading} />}
      <div className={`app-shell${view === 'simple' ? ' simple-view' : ''}${isLoading ? ' app-loading' : ''}`}>
        <div className="view-stage" key={view}>
        {view === 'simple' ? (
          <SimplePortfolio
            theme={theme}
            onThemeChange={changeTheme}
            activeSection={activeSection}
            onSelectProject={setSelectedProject}
            onSectionNavigate={setActiveSection}
            onViewChange={changeView}
          />
        ) : (
          <>
            <a className="skip-link" href="#main-content">Skip to content</a>
            <Sidebar
              activeSection={activeSection}
              isMenuOpen={isMenuOpen}
              onNavigate={closeMenu}
              onToggleMenu={() => setIsMenuOpen((open) => !open)}
            />
        <main className="main-content" id="main-content">
          <header className="topbar">
            <div className="breadcrumb"><span>PORTFOLIO</span><span className="breadcrumb-divider">/</span><span>{activeSection}</span></div>
            <div className="topbar-actions">
              <div className="view-switch" role="group" aria-label="Choose portfolio layout">
                <button
                  type="button"
                  className={view === 'dashboard' ? 'switch-active' : ''}
                  aria-pressed={view === 'dashboard'}
                  onClick={() => changeView('dashboard')}
                >
                  Dashboard
                </button>
                <button
                  type="button"
                  className={view === 'simple' ? 'switch-active' : ''}
                  aria-pressed={view === 'simple'}
                  onClick={() => changeView('simple')}
                >
                  Simple
                </button>
              </div>
              <button
                type="button"
                className="theme-toggle"
                onClick={changeTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
              </button>
            </div>
          </header>

          <div className="page-content">
            <section className="hero-section" id="home" aria-labelledby="hero-title">
              <div className="hero-copy">
                <p className="eyebrow"><span className="availability-dot" /> COMPUTER SECURITY · IT STUDENT</p>
                <h1 id="hero-title">Building knowledge in <span>security & technology</span></h1>
                <p className="hero-description">I&apos;m an Information Technology student at PHINMA University of Pangasinan with hands-on experience in networking and IoT development. As a developer and vibe coder, I leverage AI-driven tools alongside core tech skills to build fast, adapt continuously, and solve complex problems. I&apos;m actively seeking opportunities in cybersecurity, data analytics, or networking.</p>
                <a className="button button-primary" href="#contact">Get in touch <ArrowUpRight size={18} /></a>
              </div>
              <div className="hero-note">
                <span className="hero-note-icon"><ArrowDownRight size={21} /></span>
                <span>Computer Security<br />PHINMA University of Pangasinan</span>
              </div>
            </section>

            <section className="panel dashboard-about" id="about" aria-labelledby="about-title">
              <div className="mini-profile">
                <img className="mini-avatar" src="/profile-portrait.png" alt="Portrait of Salvador Zyrill James T." />
              </div>
              <div className="dashboard-about-copy">
                <p className="eyebrow">PROFILE</p>
                <h2 id="about-title">{profile.name}</h2>
                <p>As a BSIT student at PHINMA University of Pangasinan with hands-on experience in networking and IoT, I am actively seeking opportunities in cybersecurity, data analytics, or network engineering. As a forward-thinking <strong>vibe coder</strong>, I leverage modern AI development tools alongside core tech skills to build, adapt, and learn rapidly across network management, data processing, and security practices.</p>
                <a className="text-link" href="#contact">Contact me <ArrowUpRight size={16} /></a>
              </div>
            </section>

            <section className="panel dashboard-education" id="education" aria-labelledby="dashboard-education-title">
              <p className="eyebrow">ACADEMIC BACKGROUND</p>
              <h2 id="dashboard-education-title">Education</h2>
              <div className="dashboard-education-list">
                {education.map(({ period, qualification, institution }) => (
                  <article key={qualification}>
                    <span>{period}</span>
                    <div><h3>{qualification}</h3><p>{institution}</p></div>
                  </article>
                ))}
              </div>
            </section>

            <section className="panel skills-panel" id="skills" aria-labelledby="skills-title">
              <div className="section-heading skills-heading">
                <div>
                  <p className="eyebrow">TECHNICAL & PROFESSIONAL</p>
                  <h2 id="skills-title">Skills</h2>
                </div>
                <span className="skills-aside">Languages, technologies,<br />and transferable skills.</span>
              </div>
              <SkillGroups />
              <TechnologyLogos />
            </section>

            <div className="dashboard-grid">
              <section className="panel projects-panel" id="projects" aria-labelledby="projects-title">
                <div className="section-heading">
                  <div>
                    <p className="eyebrow">COURSEWORK & CAPSTONE</p>
                    <h2 id="projects-title">Projects</h2>
                    <p className="section-intro">Academic projects in web development, software, and IoT.</p>
                  </div>
                  <a className="round-link" href="#contact" aria-label="Get in touch about a project"><ArrowUpRight size={20} /></a>
                </div>
                <div className="projects-grid">
                  {projects.map((project) => <ProjectCard key={project.number} project={project} onSelect={setSelectedProject} />)}
                </div>
                <a href="#contact" className="button button-outline all-projects-link">Have a project in mind? <ArrowRight size={17} /></a>
              </section>
            </div>

            <section className="contact-panel" id="contact" aria-labelledby="contact-title">
              <div>
                <p className="eyebrow">CONTACT</p>
                <h2 id="contact-title">Open to new <span>opportunities</span></h2>
                <p>Interested in cybersecurity, data, and network-related opportunities.</p>
                <p className="contact-location"><MapPinLine size={16} /> {profile.location}</p>
              </div>
              <ContactForm />
            </section>

            <footer className="page-footer">
              <span>© 2026 {profile.name}</span>
              <a href="#home">Back to top <ArrowDown size={14} className="back-to-top-icon" /></a>
            </footer>
          </div>
        </main>
          </>
        )}
        </div>
        <ProjectOverviewDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </>
  )
}

export default App
