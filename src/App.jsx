import { useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Braces,
  Check,
  ChevronDown,
  CircleCheck,
  Code2,
  Database,
  Github,
  GitPullRequest,
  Globe2,
  Layers3,
  LockKeyhole,
  Menu,
  MonitorSmartphone,
  Palette,
  Play,
  Plus,
  Settings2,
  ShieldCheck,
  Sparkles,
  Terminal,
  WandSparkles,
  X,
} from 'lucide-react'

const IDE_REPO = 'https://github.com/sebashuesca/Unum.git'

const features = [
  {
    number: '01',
    icon: Bot,
    title: 'Agentes especialistas',
    description: 'Un router dinámico lleva cada tarea al agente adecuado. Menos contexto perdido, más trabajo resuelto.',
    tags: ['Code / Refactor', 'SQL / Schemas', 'Error Debugger'],
    color: 'mint',
  },
  {
    number: '02',
    icon: Database,
    title: 'Base de datos visual',
    description: 'Explora esquemas, consulta datos y trabaja con tus conexiones desde el mismo espacio de desarrollo.',
    tags: ['MySQL', 'PostgreSQL'],
    color: 'cyan',
  },
  {
    number: '03',
    icon: MonitorSmartphone,
    title: 'Android SDK Studio',
    description: 'Del código al dispositivo: emulador integrado y empaquetado de APK en un clic.',
    tags: ['Emulador', 'Build APK'],
    color: 'violet',
  },
  {
    number: '04',
    icon: Palette,
    title: 'Tu entorno, a tu manera',
    description: 'Ajusta la apariencia de la aplicación y la terminal para que tu espacio de trabajo se sienta propio.',
    tags: ['Temas de app', 'Temas de terminal'],
    color: 'amber',
  },
]

const workflow = [
  { icon: Braces, label: 'Código', detail: 'Code / Refactor' },
  { icon: Database, label: 'Datos', detail: 'SQL / Schemas' },
  { icon: Settings2, label: 'Errores', detail: 'Error Debugger' },
]

function Brand({ footer = false }) {
  return (
    <a className={`brand${footer ? ' brand-footer' : ''}`} href="#inicio" aria-label="Unum IDE — volver al inicio">
      <span className="brand-mark" aria-hidden="true"><span /></span>
      <span className="brand-word">unum<span className="brand-dot">.</span><small>IDE</small></span>
    </a>
  )
}

function GithubLink({ children, className = '', icon = true }) {
  return (
    <a className={className} href={IDE_REPO} target="_blank" rel="noopener noreferrer">
      {icon && <Github size={18} strokeWidth={2} aria-hidden="true" />}
      <span>{children}</span>
      <ArrowUpRight size={17} strokeWidth={2} aria-hidden="true" />
    </a>
  )
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Brand />
        <nav className={`site-nav${menuOpen ? ' is-open' : ''}`} aria-label="Navegación principal">
          <a href="#funcionalidades" onClick={close}>Funcionalidades</a>
          <a href="#open-source" onClick={close}>Open Source</a>
          <a href="#roadmap" onClick={close}>Roadmap</a>
          <GithubLink className="nav-github">Ver código</GithubLink>
        </nav>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
    </header>
  )
}

function EditorPreview() {
  const [activeTab, setActiveTab] = useState('App.jsx')

  return (
    <div className="preview-stage" aria-label="Vista conceptual del espacio de trabajo de Unum IDE">
      <div className="preview-orbit preview-orbit-one" />
      <div className="preview-orbit preview-orbit-two" />
      <div className="preview-note preview-note-top"><span className="note-pulse" /> LOCAL FIRST <span className="note-separator">/</span> AI-NATIVE</div>
      <div className="editor-window">
        <div className="editor-topbar">
          <div className="window-controls"><i /><i /><i /></div>
          <div className="editor-title"><span className="tiny-mark">◇</span> unum <span className="editor-title-muted">/ workspace</span></div>
          <div className="editor-top-icons"><Settings2 size={13} /><span className="top-avatar">u</span></div>
        </div>
        <div className="editor-body">
          <div className="editor-rail">
            <Layers3 size={17} className="rail-active" />
            <Braces size={17} />
            <Database size={17} />
            <Bot size={17} />
            <div className="rail-bottom"><Settings2 size={17} /></div>
          </div>
          <div className="editor-files">
            <div className="files-heading">EXPLORADOR <ChevronDown size={12} /></div>
            <div className="project-name"><ChevronDown size={12} /> my-project</div>
            <div className="file-row folder"><ChevronDown size={11} /> src</div>
            <div className="file-row selected"><span className="file-symbol jsx">◇</span> App.jsx</div>
            <div className="file-row"><span className="file-symbol css">#</span> styles.css</div>
            <div className="file-row"><span className="file-symbol js">JS</span> utils.js</div>
            <div className="file-row root-file"><span className="file-symbol json">{`{}`}</span> package.json</div>
            <div className="files-bottom"><CircleCheck size={12} /> Todo listo</div>
          </div>
          <div className="editor-main">
            <div className="editor-tabs">
              {['App.jsx', 'styles.css'].map((tab) => (
                <button type="button" className={activeTab === tab ? 'editor-tab active' : 'editor-tab'} onClick={() => setActiveTab(tab)} key={tab}>
                  <span className={tab === 'App.jsx' ? 'tab-symbol jsx' : 'tab-symbol css'}>{tab === 'App.jsx' ? '◇' : '#'}</span>{tab}<span className="tab-close">×</span>
                </button>
              ))}
              <Plus size={12} className="add-tab" />
            </div>
            <div className="code-area">
              {activeTab === 'App.jsx' ? <>
                <div><span className="line-no">01</span><span className="syntax-purple">import</span> <span className="syntax-blue">{'{'} useState {'}'}</span> <span className="syntax-purple">from</span> <span className="syntax-green">'react'</span></div>
                <div><span className="line-no">02</span></div>
                <div><span className="line-no">03</span><span className="syntax-purple">export default function</span> <span className="syntax-yellow">App</span>() {'{'}</div>
                <div><span className="line-no">04</span><span className="indent">  </span><span className="syntax-purple">const</span> [idea, setIdea] = <span className="syntax-yellow">useState</span>(<span className="syntax-green">'next'</span>)</div>
                <div><span className="line-no">05</span></div>
                <div><span className="line-no">06</span><span className="indent">  </span><span className="syntax-purple">return</span> (</div>
                <div><span className="line-no">07</span><span className="indent">    </span>&lt;<span className="syntax-red">Workspace</span> <span className="syntax-blue">mode</span>=<span className="syntax-green">"flow"</span>&gt;</div>
                <div><span className="line-no">08</span><span className="indent">      </span>&lt;<span className="syntax-red">Build</span> <span className="syntax-blue">something</span>=<span className="syntax-green">"amazing"</span> /&gt;</div>
                <div><span className="line-no">09</span><span className="indent">    </span>&lt;/<span className="syntax-red">Workspace</span>&gt;</div>
                <div><span className="line-no">10</span><span className="indent">  </span>)</div>
                <div><span className="line-no">11</span>{'}'}</div>
              </> : <>
                <div><span className="line-no">01</span><span className="syntax-purple">:root</span> {'{'}</div>
                <div><span className="line-no">02</span><span className="indent">  </span><span className="syntax-blue">--canvas</span>: <span className="syntax-green">#0b0f17</span>;</div>
                <div><span className="line-no">03</span><span className="indent">  </span><span className="syntax-blue">--accent</span>: <span className="syntax-green">#14b8a6</span>;</div>
                <div><span className="line-no">04</span>{'}'}</div>
                <div><span className="line-no">05</span></div>
                <div><span className="line-no">06</span><span className="syntax-yellow">.workspace</span> {'{'}</div>
                <div><span className="line-no">07</span><span className="indent">  </span><span className="syntax-blue">display</span>: <span className="syntax-green">grid</span>;</div>
                <div><span className="line-no">08</span><span className="indent">  </span><span className="syntax-blue">gap</span>: <span className="syntax-green">1rem</span>;</div>
                <div><span className="line-no">09</span>{'}'}</div>
              </>}
            </div>
            <div className="editor-terminal">
              <div className="terminal-heading"><Terminal size={12} /> TERMINAL <span>+</span></div>
              <div><span className="terminal-prompt">➜</span> <span className="terminal-path">my-project</span> npm run dev</div>
              <div className="terminal-success">✓ Server ready on localhost:3000</div>
            </div>
          </div>
        </div>
        <div className="editor-status"><span><GitPullRequest size={12} /> main*</span><span><CircleCheck size={12} /> 0 errores</span><span className="status-right">React · UTF-8 <span className="status-online">●</span> Ollama conectado</span></div>
      </div>
      <div className="agent-float">
        <div className="agent-float-head"><span className="agent-avatar"><Sparkles size={17} /></span><div><strong>Unum Agent</strong><small>Especialista en código</small></div><span className="agent-online" /></div>
        <p>He analizado tu proyecto. ¿Listo para construir algo increíble?</p>
        <div className="agent-action"><span><WandSparkles size={13} /> Generar solución</span><ArrowRight size={14} /></div>
      </div>
      <div className="preview-note preview-note-bottom"><span className="note-bars"><i /><i /><i /><i /></span> CONSTRUYE SIN LÍMITES</div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="eyebrow-pill"><span className="eyebrow-light" /> OPEN SOURCE RELEASE <span className="pill-divider" /> Descarga y modifica libremente</div>
          <p className="hero-kicker"><span>01 /</span> EL FUTURO DEL DESARROLLO</p>
          <h1>Unum IDE <span className="title-dash">—</span><br />El Entorno de Desarrollo <span className="gradient-text">AI-Native</span> Local y Autónomo</h1>
          <p className="hero-subtitle">Agentes especialistas locales (Ollama), conexión multi-proveedor cloud, gestor de BD y herramientas Android SDK en un solo IDE.</p>
          <div className="hero-actions">
            <GithubLink className="button button-primary">Ver en GitHub / Descargar IDE</GithubLink>
            <a className="button button-secondary" href="#funcionalidades">Explorar funcionalidades <ArrowDown size={16} /></a>
          </div>
          <div className="hero-meta"><span><CircleCheck size={15} /> Código abierto</span><i /><span><LockKeyhole size={15} /> IA local y privada</span><i /><span><Globe2 size={15} /> Multi-proveedor</span></div>
        </div>
        <EditorPreview />
      </div>
      <div className="container hero-bottom"><span>UN ESPACIO PARA TODO TU FLUJO DE TRABAJO</span><span className="hero-scroll">SCROLL PARA EXPLORAR <ArrowDown size={13} /></span></div>
    </section>
  )
}

function Features() {
  return (
    <section className="section features-section" id="funcionalidades">
      <div className="container">
        <div className="section-topline"><span>01 / FUNCIONALIDADES</span><span>DISEÑADO PARA CREAR</span></div>
        <div className="section-heading-row">
          <div><p className="section-kicker">TODO CONECTADO, TODO EN UN SOLO LUGAR</p><h2>Tu flujo de trabajo,<br /><span>sin fricción.</span></h2></div>
          <p className="section-intro">Desde la primera línea de código hasta el build final. Las herramientas que necesitas, trabajando juntas en un mismo entorno.</p>
        </div>
        <div className="feature-grid">
          {features.map(({ number, icon: Icon, title, description, tags, color }) => (
            <article className={`feature-card feature-${color}`} key={number}>
              <div className="feature-card-top"><span className="feature-icon"><Icon size={25} strokeWidth={1.7} /></span><span className="feature-number">{number} / 04</span></div>
              <div><h3>{title}</h3><p>{description}</p></div>
              <div className="feature-tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
        <div className="feature-flow"><span className="flow-label"><Sparkles size={15} /> UN ROUTER, MÚLTIPLES ESPECIALISTAS</span><div className="flow-items">{workflow.map(({ icon: Icon, label, detail }, index) => <div className="flow-item" key={label}><span className="flow-icon"><Icon size={17} /></span><div><strong>{label}</strong><small>{detail}</small></div>{index < workflow.length - 1 && <ArrowRight className="flow-arrow" size={18} />}</div>)}</div></div>
      </div>
    </section>
  )
}

function OpenSource() {
  return (
    <section className="section open-section" id="open-source">
      <div className="container open-grid">
        <div className="open-visual">
          <div className="open-visual-grid" />
          <div className="open-central-mark"><span className="brand-mark large" aria-hidden="true"><span /></span><span className="open-ring ring-one" /><span className="open-ring ring-two" /></div>
          <span className="open-visual-chip chip-top"><LockKeyhole size={16} /> Tus datos, en tu equipo</span>
          <span className="open-visual-chip chip-bottom"><Code2 size={16} /> Código abierto</span>
          <span className="open-cross cross-one">+</span><span className="open-cross cross-two">+</span>
        </div>
        <div className="open-copy">
          <p className="section-kicker">02 / OPEN SOURCE & LIBERTAD</p>
          <h2>El control vuelve<br />a tus <span>manos.</span></h2>
          <p className="open-lead">Unum IDE nace abierto. Puedes explorar su código, adaptarlo a tu forma de trabajar y construir junto a la comunidad.</p>
          <div className="open-benefits">
            <div><span className="benefit-icon"><ShieldCheck size={20} /></span><div><h3>Privacidad por diseño</h3><p>Ejecuta modelos locales con Ollama en tu propio equipo, sin enviar ese trabajo a terceros.</p></div></div>
            <div><span className="benefit-icon"><GitPullRequest size={20} /></span><div><h3>Abierto a tus ideas</h3><p>Descarga, inspecciona, modifica y contribuye al repositorio oficial del IDE.</p></div></div>
          </div>
          <GithubLink className="text-link">Explorar el código en GitHub</GithubLink>
        </div>
      </div>
    </section>
  )
}

function Roadmap() {
  return (
    <section className="section roadmap-section" id="roadmap">
      <div className="container">
        <div className="section-topline"><span>03 / LO QUE SIGUE</span><span>CONSTRUYAMOS EL FUTURO</span></div>
        <div className="roadmap-grid">
          <div className="roadmap-copy"><p className="section-kicker">UNA VISIÓN EN EVOLUCIÓN</p><h2>Abierto hoy.<br /><span>Más lejos mañana.</span></h2><p>Estamos construyendo Unum IDE junto a quienes creen en un entorno de desarrollo más inteligente, flexible y bajo su control.</p><GithubLink className="button button-outline">Contribuir al proyecto</GithubLink></div>
          <div className="timeline">
            <div className="timeline-item current"><div className="timeline-indicator"><span /></div><div className="timeline-content"><div className="timeline-header"><span className="timeline-stage">AHORA / OPEN SOURCE</span><span className="status-pill"><span /> EN CURSO</span></div><h3>Crear con la comunidad</h3><p>Unum IDE está en fase Open Source para colaborar con la comunidad. Descarga el código, explora el proyecto y aporta tus ideas.</p></div></div>
            <div className="timeline-item future"><div className="timeline-indicator"><span /></div><div className="timeline-content"><span className="timeline-stage">PRÓXIMAMENTE / VERSIONES ESTABLES</span><h3>Licencias de desarrollo comercial</h3><p>Las futuras versiones estables contarán con licencias de desarrollo para uso comercial. Comunicaremos los detalles con transparencia conforme avance el proyecto.</p></div></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div className="cta-pattern" aria-hidden="true" />
        <div className="cta-content"><div className="cta-eyebrow"><span /> TU PRÓXIMA GRAN IDEA EMPIEZA AQUÍ</div><h2>Haz espacio para<br /><em>lo que sigue.</em></h2><p>Explora Unum IDE, hazlo tuyo y forma parte de lo que estamos construyendo.</p><GithubLink className="button button-cta">Ver en GitHub / Descargar IDE</GithubLink></div>
        <div className="cta-symbol" aria-hidden="true"><span className="brand-mark cta-mark"><span /></span></div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer"><div className="container footer-main"><div><Brand footer /><p>Un entorno para crear con libertad.<br />Desarrollo AI-Native, en tus manos.</p></div><div className="footer-links"><div><span>EXPLORAR</span><a href="#funcionalidades">Funcionalidades</a><a href="#open-source">Open Source</a><a href="#roadmap">Roadmap</a></div><div><span>PROYECTO</span><a href={IDE_REPO} target="_blank" rel="noopener noreferrer">Código del IDE <ArrowUpRight size={13} /></a><a href={IDE_REPO} target="_blank" rel="noopener noreferrer">Contribuir <ArrowUpRight size={13} /></a></div></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Unum IDE. Hecho para quienes construyen.</span><span>OPEN SOURCE · LOCAL FIRST · AI-NATIVE</span></div></footer>
  )
}

export default function App() {
  return <><Navbar /><main><Hero /><Features /><OpenSource /><Roadmap /><FinalCta /></main><Footer /></>
}
