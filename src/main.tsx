import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { projects, type Project } from './data/projects'
import './styles.css'

const sections = [
  'hero',
  'about',
  'education',
  'skills',
  'projects',
  'experience',
  'certs',
  'learning',
  'contact'
]

/*
 * Resume is inside:
 *
 * public/
 *   resume/
 *     F24IT043_RevaKale_Resume.pdf
 *
 * Files inside public/ are served from the root URL.
 */
const resume = '/resume/F24IT043_RevaKale_Resume.pdf'

const terminalLines = [
  {
    command: 'whoami',
    result: 'reva-kale@portfolio'
  },
  {
    command: 'scan --profile',
    result: 'B.Tech IT · PICT · Third Year'
  },
  {
    command: 'scan --focus',
    result: 'backend + full-stack + security'
  },
  {
    command: 'scan --status',
    result: 'building practical applications'
  },
  {
    command: 'status',
    result: 'SYSTEM READY'
  }
]

const skillGroups = [
  {
    number: '01',
    title: 'LANGUAGES',
    description: 'Core programming and problem solving',
    skills: [
      'Java',
      'Python',
      'C++',
      'JavaScript'
    ]
  },
  {
    number: '02',
    title: 'BACKEND',
    description: 'Server-side development and APIs',
    skills: [
      'Node.js',
      'Express.js',
      'Flask'
    ]
  },
  {
    number: '03',
    title: 'FRONTEND',
    description: 'Modern web interfaces and applications',
    skills: [
      'React',
      'TypeScript',
      'HTML5',
      'CSS3'
    ]
  },
  {
    number: '04',
    title: 'DATABASES',
    description: 'Data storage, querying and management',
    skills: [
      'MongoDB',
      'MySQL'
    ]
  },
  {
    number: '05',
    title: 'APIs & INTEGRATIONS',
    description: 'External services and platform integrations',
    skills: [
      'Gemini',
      'Groq',
      'Razorpay',
      'Gmail',
      'WhatsApp'
    ]
  },
  {
    number: '06',
    title: 'TOOLS & CONCEPTS',
    description: 'Engineering workflow and fundamentals',
    skills: [
      'Git',
      'GitHub',
      'Postman',
      'DSA',
      'Backend Engineering'
    ]
  }
]

function App() {
  const [selected, setSelected] = useState<Project | null>(null)
  const [resumeOpen, setResumeOpen] = useState(false)
  const [visibleLines, setVisibleLines] = useState(0)

  /*
   * Terminal animation
   */
  useEffect(() => {
    if (visibleLines >= terminalLines.length) {
      return
    }

    const timer = window.setTimeout(() => {
      setVisibleLines(previous => previous + 1)
    }, 450)

    return () => window.clearTimeout(timer)
  }, [visibleLines])

  /*
   * Section navigation indicator
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            return
          }

          document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle(
              'active',
              sections[index] === entry.target.id
            )
          })
        })
      },
      {
        threshold: 0.4
      }
    )

    sections.forEach(id => {
      const element = document.getElementById(id)

      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  /*
   * Prevent background scrolling when modal is open
   */
  useEffect(() => {
    document.body.style.overflow =
      selected || resumeOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [selected, resumeOpen])

  const openProject = (project: Project) => {
    setSelected(project)
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <>
      <div className="wrap">

        {/* ================= SIDE RAIL ================= */}

        <aside className="rail">

          <div className="brand">
            RK / PORTFOLIO
          </div>

          <div className="dots">
            {sections.map((section, index) => (
              <button
                key={section}
                type="button"
                aria-label={`Go to ${section}`}
                className={`dot ${index === 0 ? 'active' : ''}`}
                onClick={() => scrollToSection(section)}
              />
            ))}
          </div>

          <div className="coord">
            PUNE · INDIA
          </div>

        </aside>


        <main>

          {/* ================= HERO ================= */}

          <section
            className="hero"
            id="hero"
          >

            <div className="terminal">

              <div className="terminal-bar">

                <span />
                <span />
                <span />

                <span className="tag">
                  reva-kale@portfolio
                </span>

              </div>

              <div className="terminal-body">

                {terminalLines
                  .slice(0, visibleLines)
                  .map(line => (
                    <div
                      className="terminal-line"
                      key={line.command}
                    >

                      <div className="terminal-command">

                        <span className="prompt">
                          $
                        </span>{' '}

                        {line.command}

                      </div>

                      <div className="terminal-result">

                        <span className="ok">
                          ✓
                        </span>{' '}

                        <span className="dim">
                          {line.result}
                        </span>

                      </div>

                    </div>
                  ))}

                {visibleLines < terminalLines.length && (
                  <div className="terminal-command scanning">

                    <span className="prompt">
                      $
                    </span>{' '}

                    <span className="cursor">
                      ▋
                    </span>

                  </div>
                )}

                {visibleLines === terminalLines.length && (
                  <div className="terminal-ready">

                    <span className="ok">
                      ✓
                    </span>{' '}

                    <span className="dim">
                      profile scan complete
                    </span>

                  </div>
                )}

              </div>

            </div>


            <h1>
              Reva Kale
            </h1>

            <p className="title-line">
              Third-year B.Tech Information Technology student
              at PICT, interested in{' '}
              <b>full-stack and backend development</b>{' '}
              and building practical applications with Java,
              Python, JavaScript, Node.js and React.
            </p>


            <div className="hero-actions">

              <button
                type="button"
                className="btn primary"
                onClick={() => scrollToSection('projects')}
              >
                View Projects ↓
              </button>

              <button
                type="button"
                className="btn"
                onClick={() => setResumeOpen(true)}
              >
                View Resume ↗
              </button>

              <a
                className="btn"
                href="https://github.com/reva-32"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                className="btn"
                href="https://linkedin.com/in/reva-kale-24505032a"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

            </div>

          </section>


          {/* ================= ABOUT ================= */}

          <section id="about">

            <div className="label">
              ABOUT
            </div>

            <div className="about">

              <p>
                I’m a third-year B.Tech Information Technology
                student at Pune Institute of Computer Technology.
                I enjoy taking practical problems and turning
                them into working systems — from a published
                Python security tool to scheduling,
                payment-recovery and business-automation
                projects. I’m strengthening my backend
                engineering and DSA fundamentals while
                continuing to build full-stack applications.
              </p>

            </div>

          </section>


          {/* ================= EDUCATION ================= */}

          <section id="education">

            <div className="label">
              EDUCATION
            </div>

            <div className="edu-card">

              <h3>
                Pune Institute of Computer Technology (PICT)
              </h3>

              <div className="edu-sub">
                B.Tech, Information Technology · 2024 – 2028
              </div>

              <div className="sgpa-row">

                {[
                  ['SEM 1', '8.9'],
                  ['SEM 2', '8.5'],
                  ['SEM 3', '9.09'],
                  ['SEM 4', '9.36']
                ].map(([semester, value]) => (
                  <div
                    className="sgpa-chip"
                    key={semester}
                  >
                    <span className="s">
                      {semester}
                    </span>

                    <span className="v">
                      {value}
                    </span>
                  </div>
                ))}

              </div>

              <div className="edu-extra">

                <span>
                  <b>CGPA [till now]:</b> 8.96
                </span>

                <span>
                  <b>HSC:</b> 82.50%
                </span>

                <span>
                  <b>SSC:</b> 95%
                </span>

              </div>

            </div>

          </section>


          {/* ================= TECHNICAL SKILLS ================= */}

<section id="skills">

  <div className="label">
    TECHNICAL SKILLS
  </div>

  <div className="skill-groups">

    {skillGroups.map(group => (

      <div
        className="skill-group"
        key={group.number}
      >

        <h4>
          {group.number} · {group.title}
        </h4>

        <ul>

          {group.skills.map(skill => (

            <li key={skill}>
              {skill}
            </li>

          ))}

        </ul>

      </div>

    ))}

  </div>

</section>

          {/* ================= PROJECTS ================= */}

          <section id="projects">

            <div className="label">
              FEATURED PROJECTS
            </div>

            {projects.map(project => (
              <div
                className="project-card"
                key={project.key}
                onClick={() => openProject(project)}
              >

                <div className="pc-left">

                  <a
                    className="project-title"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    onClick={event => event.stopPropagation()}
                  >
                    <h3>
                      {project.name}
                    </h3>
                  </a>

                </div>

                <div className="pc-right">

                  <span className="status">
                    {project.status}
                  </span>

                  {project.link && (
                    <a
                      className="project-link"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={event => event.stopPropagation()}
                    >
                      GitHub ↗
                    </a>
                  )}

                  {project.pypiLink && (
                    <a
                      className="project-link"
                      href={project.pypiLink}
                      target="_blank"
                      rel="noreferrer"
                      onClick={event => event.stopPropagation()}
                    >
                      PyPI ↗
                    </a>
                  )}

                  <span className="pc-arrow">
                    →
                  </span>

                </div>

              </div>
            ))}

          </section>


          {/* ================= EXPERIENCE ================= */}

          <section id="experience">

            <div className="label">
              HACKATHON EXPERIENCE
            </div>

            <div className="timeline">

              <div className="tl-item">

                <div className="tl-dot" />

                <div className="tl-content">

                  <h4>
                    Digitalization of Orphanages
                  </h4>

                  <div className="org">
                    Code The Cause — Finalist
                  </div>

                  <p>
                    Contributed to the development and
                    presentation of a digital platform focused
                    on improving learning and management
                    workflows for orphanages.
                  </p>

                </div>

              </div>


              <div className="tl-item">

                <div className="tl-dot" />

                <div className="tl-content">

                  <h4>
                    Smart Contract Fund Management
                  </h4>

                  <div className="org">
                    PVG Ignition 24-Hour Hackathon — Finalist
                  </div>

                  <p>
                    Contributed to product understanding and
                    presentation for a blockchain-based
                    transparent fund allocation system using
                    a smart-lock approach, where approved
                    work releases the associated funds.
                  </p>

                </div>

              </div>

            </div>

          </section>


          {/* ================= CERTIFICATIONS ================= */}

          <section id="certs">

            <div className="label">
              CERTIFICATIONS & ACHIEVEMENTS
            </div>

            <div className="certs">

              <div className="cert-row">

                <span className="cert-name">
                  Fundamentals of Digital Marketing
                </span>

                <span className="cert-meta">
                  NPTEL · Elite Topper · 95%
                </span>

              </div>

              <div className="cert-row">

                <span className="cert-name">
                  Python for Data Science
                </span>

                <span className="cert-meta">
                  NPTEL · Certified
                </span>

              </div>

              <div className="cert-row">

                <span className="cert-name">
                  Java Backend Development — Spring Boot
                </span>

                <span className="cert-meta">
                  40-hour hands-on program
                </span>

              </div>

            </div>

          </section>


          {/* ================= LEARNING ================= */}

          <section id="learning">

            <div className="label">
              CURRENTLY LEARNING
            </div>

            <div className="learning-grid">

              {[
                'Backend Engineering',
                'Docker & Deployment',
                'Operating Systems',
                'Computer Networks',
                'DBMS',
                'Data Structures & Algorithms'
              ].map(item => (
                <div
                  className="learning-card"
                  key={item}
                >
                  <span>
                    ↗
                  </span>

                  {item}
                </div>
              ))}

            </div>

          </section>


          {/* ================= CONTACT ================= */}

          <section
            className="contact"
            id="contact"
          >

            <div className="label">
              CONTACT
            </div>

            <h2>
              Open to software engineering and backend
              internship opportunities.
            </h2>

            <div className="contact-links">

              <a href="mailto:reva.kale2005@gmail.com">
                reva.kale2005@gmail.com
              </a>

              <a
                href="https://github.com/reva-32"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://linkedin.com/in/reva-kale-24505032a"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

            </div>

          </section>


          {/* ================= FOOTER ================= */}

          <footer>

            <span>
              © 2026 REVA KALE
            </span>

            <span>
              PORTFOLIO · ENGINEERING · BUILDING
            </span>

          </footer>

        </main>
      </div>


      {/* ================= PROJECT MODAL ================= */}

      {selected && (
        <div className="overlay open">

          <div className="detail">

            <button
              type="button"
              className="back"
              onClick={() => setSelected(null)}
            >
              ← Back to portfolio
            </button>

            <span className="status">
              {selected.status}
            </span>

            <h2>
              {selected.name}
            </h2>

            <p>
              {selected.body}
            </p>

            <h4>
              DETAILS
            </h4>

            <ul>
              {selected.bullets.map(bullet => (
                <li key={bullet}>
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="detail-actions">

              {selected.link && (
                <a
                  className="btn primary"
                  href={selected.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub ↗
                </a>
              )}

              {selected.pypiLink && (
                <a
                  className="btn"
                  href={selected.pypiLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  View PyPI ↗
                </a>
              )}

              <button
                type="button"
                className="btn"
                onClick={() => setSelected(null)}
              >
                Close
              </button>

            </div>

          </div>

        </div>
      )}


      {/* ================= RESUME MODAL ================= */}

      {resumeOpen && (
        <div className="overlay resume-overlay open">

          <div className="resume-wrap">

            <div className="resume-top">

              <div className="resume-title">
                Reva Kale — Resume
              </div>

              <div className="resume-buttons">

                <a
                  className="btn primary"
                  href={resume}
                  download="F24IT043_RevaKale_Resume.pdf"
                >
                  Download Resume ↓
                </a>

                <button
                  type="button"
                  className="btn"
                  onClick={() => setResumeOpen(false)}
                >
                  Close ×
                </button>

              </div>

            </div>


            <iframe
              className="resume-frame"
              title="Reva Kale resume"
              src={`${resume}#toolbar=1&navpanes=0`}
            />


            <div className="small-note">

              Resume:
              {' '}

              <code>
                /public/resume/F24IT043_RevaKale_Resume.pdf
              </code>

            </div>

          </div>

        </div>
      )}

    </>
  )
}

createRoot(
  document.getElementById('root')!
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)