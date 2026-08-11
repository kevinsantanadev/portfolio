import Image from "next/image";
import {
  copyByLanguage,
  languageOptions,
  type PortfolioLanguage,
} from "./portfolio-copy";
import { ScrollMotion } from "./components/scroll-motion";
import { TechTerminalLoader } from "./components/tech-terminal-loader";
import { ThemeToggle } from "./components/theme-toggle";

const technologies = [
  { name: "HTML5", mark: "H5", tone: "orange" },
  { name: "CSS3", mark: "C3", tone: "blue" },
  { name: "JavaScript", mark: "JS", tone: "yellow" },
  { name: "PHP", mark: "PHP", tone: "violet" },
  { name: "Python", mark: "PY", tone: "cyan" },
  { name: "MySQL", mark: "SQL", tone: "teal" },
];

export function PortfolioPage({
  language,
}: {
  language: PortfolioLanguage;
}) {
  const copy = copyByLanguage[language];
  const navigation = copy.navigation;
  const skillGroups = copy.skills.groups;
  const learningResources = copy.knowledge.resources;
  const currentLanguage = languageOptions.find(
    (option) => option.key === language,
  );

  return (
    <main id="inicio" lang={copy.locale}>
      <a className="skip-link" href="#conteudo">
        {copy.skip}
      </a>
      <ScrollMotion />

      <div className="space-atmosphere" aria-hidden="true">
        <span className="star-field star-field-far" />
        <span className="star-field star-field-near" />
        <span className="space-orbit space-orbit-top" />
        <span className="space-orbit space-orbit-bottom" />
        <span className="comet comet-one" />
        <span className="comet comet-two" />
      </div>

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label={copy.brandHome}>
          Kevin Santana <span aria-hidden="true" />
        </a>

        <nav className="desktop-nav" aria-label={copy.navigationLabel}>
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-controls">
          <ThemeToggle
            darkLabel={copy.themeToDark}
            lightLabel={copy.themeToLight}
          />
          <details className="language-selector">
            <summary aria-label={copy.languageMenu}>
              {currentLanguage?.short ?? language.toUpperCase()}
            </summary>
            <div className="language-options">
              {languageOptions.map((option) => (
                <a
                  aria-current={language === option.key ? "page" : undefined}
                  className={language === option.key ? "active" : undefined}
                  href={option.href}
                  key={option.key}
                  lang={
                    option.key === "pt"
                      ? "pt-BR"
                      : option.key === "en"
                        ? "en"
                        : "es"
                  }
                >
                  <span>{option.short}</span>
                  {option.label}
                </a>
              ))}
            </div>
          </details>

          <details className="mobile-nav">
            <summary aria-label={copy.mobileMenu}>
              <span />
              <span />
            </summary>
            <nav aria-label={copy.mobileNavigation}>
              {navigation.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </header>

      <div id="conteudo">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy" data-reveal="left">
            <p className="eyebrow">
              <span>{copy.hero.eyebrow}</span>
              <span aria-hidden="true">•</span>
              <span>2026</span>
            </p>

            <h1 id="hero-title">Kevin Santana</h1>
            <p className="hero-role">{copy.hero.role}</p>
            <p className="hero-intro">{copy.hero.intro}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">
                {copy.hero.projects} <span aria-hidden="true">→</span>
              </a>
              <a
                className="button button-secondary resume-button"
                href="https://kevinsantanadev.com.br/Kevin-Santana-Curriculo-PT.pdf"
                download
              >
                {copy.hero.resumePt} <span aria-hidden="true">↓</span>
              </a>
              <a
                className="button button-secondary resume-button"
                href="https://kevinsantanadev.com.br/Kevin-Santana-Resume-EN.pdf"
                download
              >
                {copy.hero.resumeEn} <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div className="location-line">
              <span className="pin" aria-hidden="true" />
              <span>{copy.hero.location}</span>
              <span className="location-divider" aria-hidden="true" />
              <a
                href="https://www.linkedin.com/in/kevinsantanadosreis/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
                <span className="sr-only"> ({copy.newTab})</span>
              </a>
              <span className="location-divider" aria-hidden="true" />
              <a
                href="https://github.com/kevinsantanadev"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <span className="sr-only"> ({copy.newTab})</span>
              </a>
            </div>

            <ul
              className="technology-grid"
              aria-label={copy.hero.technologyLabel}
            >
              {technologies.map((technology) => (
                <li key={technology.name}>
                  <span className={`tech-mark ${technology.tone}`}>
                    {technology.mark}
                  </span>
                  {technology.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-visual" data-reveal="right">
            <div className="visual-aurora" aria-hidden="true" />
            <div className="portrait-card">
              <Image
                src="/kevin-santana.jpeg"
                alt={copy.hero.portraitAlt}
                width="1122"
                height="1402"
                priority
                sizes="(max-width: 900px) 92vw, 44vw"
              />
              <div className="portrait-shade" aria-hidden="true" />
            </div>

            <div className="floating-card floating-code" aria-hidden="true">
              <span className="code-symbol">&lt;/&gt;</span>
              <small>{copy.hero.development}</small>
            </div>
            <div className="floating-card floating-data" aria-hidden="true">
              <span className="database-icon">
                <i />
                <i />
                <i />
              </span>
              <small>{copy.hero.backend}</small>
            </div>
            <TechTerminalLoader label={copy.hero.terminalLabel} />
          </div>
        </section>

        <section id="sobre" className="content-section section-shell">
          <div className="section-heading" data-reveal="up">
            <p className="section-kicker">{copy.about.kicker}</p>
            <h2>{copy.about.title}</h2>
          </div>

          <div className="about-layout" data-reveal="up">
            <div className="about-copy">
              {copy.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="about-stats" aria-label={copy.about.highlightsLabel}>
              {copy.about.stats.map((stat) => (
                <article key={stat.value}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projetos" className="content-section section-shell">
          <div className="section-heading section-heading-row" data-reveal="up">
            <div>
              <p className="section-kicker">{copy.projects.kicker}</p>
              <h2>{copy.projects.title}</h2>
            </div>
            <span className="section-count">{copy.projects.count}</span>
          </div>

          <article className="featured-project" data-reveal="up">
            <div className="project-visual" aria-hidden="true">
              <div className="project-browser">
                <div className="browser-top">
                  <span />
                  <span />
                  <span />
                  <div>projetomed.com.br/ImunoLink</div>
                </div>
                <div className="browser-content">
                  <div className="imunolink-mark">iL</div>
                  <p>ImunoLink</p>
                  <div className="vaccine-lines">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
              <div className="project-orbit orbit-one" />
              <div className="project-orbit orbit-two" />
            </div>

            <div className="project-copy">
              <div className="project-meta">
                <span>{copy.projects.imunolink.meta}</span>
                <span>{copy.projects.imunolink.year}</span>
              </div>
              <h3>ImunoLink</h3>
              <p className="project-subtitle">
                {copy.projects.imunolink.subtitle}
              </p>
              <p>{copy.projects.imunolink.description}</p>
              <ul
                className="tag-list"
                aria-label={copy.projects.imunolink.technologiesLabel}
              >
                {["PHP", "Python", "MySQL", "JavaScript", "Bootstrap"].map(
                  (item) => (
                    <li key={item}>{item}</li>
                  ),
                )}
              </ul>
              <a
                className="text-link"
                href="https://projetomed.com.br/TECTI/2025/gp02/imunolink/app/index.php"
                target="_blank"
                rel="noreferrer"
              >
                {copy.projects.imunolink.link}{" "}
                <span aria-hidden="true">↗</span>
                <span className="sr-only"> ({copy.newTab})</span>
              </a>
            </div>
          </article>

          <article
            className="featured-project featured-project-vagatrack"
            data-reveal="up"
          >
            <div
              className="project-visual vagatrack-project-visual"
              aria-hidden="true"
            >
              <div className="vagatrack-screen">
                <div className="vagatrack-screen-top">
                  <span className="vagatrack-mini-logo">
                    <i className="mini-logo-line mini-logo-line-one" />
                    <i className="mini-logo-line mini-logo-line-two" />
                    <i className="mini-logo-node mini-logo-node-one" />
                    <i className="mini-logo-node mini-logo-node-two" />
                    <i className="mini-logo-node mini-logo-node-three" />
                  </span>
                  <strong>VagaTrack</strong>
                  <i />
                </div>
                <div className="vagatrack-screen-body">
                  <aside>
                    <span className="active" />
                    <span />
                    <span />
                  </aside>
                  <div>
                    <small>{copy.projects.vagatrack.overview}</small>
                    <h4>{copy.projects.vagatrack.greeting}</h4>
                    <div className="vagatrack-metrics">
                      <span>
                        <small>{copy.projects.vagatrack.applications}</small>
                        <strong>24</strong>
                      </span>
                      <span>
                        <small>{copy.projects.vagatrack.interviews}</small>
                        <strong>05</strong>
                      </span>
                      <span>
                        <small>{copy.projects.vagatrack.offers}</small>
                        <strong>01</strong>
                      </span>
                    </div>
                    <div className="vagatrack-chart">
                      {[38, 65, 48, 86, 72, 55, 78].map((height, index) => (
                        <i key={index} style={{ height: `${height}%` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="vagatrack-project-badge">
                <span>DB</span>
                <div>
                  <small>{copy.projects.vagatrack.persistentData}</small>
                  <strong>{copy.projects.vagatrack.connectedDatabase}</strong>
                </div>
              </div>
              <div className="project-orbit orbit-one" />
              <div className="project-orbit orbit-two" />
            </div>

            <div className="project-copy">
              <div className="project-meta">
                <span>{copy.projects.vagatrack.meta}</span>
                <span>{copy.projects.vagatrack.year}</span>
              </div>
              <h3>VagaTrack</h3>
              <p className="project-subtitle">
                {copy.projects.vagatrack.subtitle}
              </p>
              <p>{copy.projects.vagatrack.description}</p>
              <ul
                className="tag-list"
                aria-label={copy.projects.vagatrack.technologiesLabel}
              >
                {[
                  "Next.js",
                  "TypeScript",
                  "D1",
                  "REST API",
                  copy.projects.vagatrack.sessionTag,
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a
                className="text-link"
                href="https://vagatrack.kevinsantanadev.com.br"
                target="_blank"
                rel="noreferrer"
              >
                {copy.projects.vagatrack.link}{" "}
                <span aria-hidden="true">↗</span>
                <span className="sr-only"> ({copy.newTab})</span>
              </a>
            </div>
          </article>

          <article
            className="featured-project featured-project-prismivo"
            data-reveal="up"
          >
            <div
              className="project-visual prismivo-project-visual"
              aria-hidden="true"
            >
              <div className="prismivo-screen">
                <div className="prismivo-screen-top">
                  <span className="prismivo-mini-mark">
                    <i />
                    <i />
                    <i />
                  </span>
                  <strong>PRISMIVO</strong>
                  <span className="prismivo-live-dot" />
                </div>
                <div className="prismivo-screen-body">
                  <aside>
                    <span className="active" />
                    <span />
                    <span />
                    <span />
                  </aside>
                  <div className="prismivo-dashboard">
                    <small>{copy.projects.prismivo.dashboard}</small>
                    <h4>Clareza para cada ângulo.</h4>
                    <div className="prismivo-metrics">
                      <span>
                        <small>{copy.projects.prismivo.activeProjects}</small>
                        <strong>12</strong>
                      </span>
                      <span>
                        <small>{copy.projects.prismivo.approvals}</small>
                        <strong>08</strong>
                      </span>
                      <span>
                        <small>{copy.projects.prismivo.team}</small>
                        <strong>06</strong>
                      </span>
                    </div>
                    <div className="prismivo-flow">
                      {[72, 45, 88, 62, 94].map((width, index) => (
                        <span key={index}>
                          <i style={{ width: `${width}%` }} />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="prismivo-project-badge">
                <span>RLS</span>
                <div>
                  <small>{copy.projects.prismivo.protectedData}</small>
                  <strong>{copy.projects.prismivo.organizationIsolation}</strong>
                </div>
              </div>
              <div className="prismivo-glass prismivo-glass-one" />
              <div className="prismivo-glass prismivo-glass-two" />
            </div>

            <div className="project-copy">
              <div className="project-meta">
                <span>{copy.projects.prismivo.meta}</span>
                <span>{copy.projects.prismivo.year}</span>
              </div>
              <h3>Prismivo</h3>
              <p className="project-subtitle">
                {copy.projects.prismivo.subtitle}
              </p>
              <p>{copy.projects.prismivo.description}</p>
              <ul
                className="tag-list"
                aria-label={copy.projects.prismivo.technologiesLabel}
              >
                {[
                  "Next.js",
                  "TypeScript",
                  "PostgreSQL",
                  "Supabase",
                  "RLS",
                  "Playwright",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="project-links">
                <a
                  className="text-link"
                  href="https://prismivo.kevinsantanadev.com.br"
                  target="_blank"
                  rel="noreferrer"
                >
                  {copy.projects.prismivo.link}{" "}
                  <span aria-hidden="true">↗</span>
                  <span className="sr-only"> ({copy.newTab})</span>
                </a>
                <a
                  className="text-link text-link-secondary"
                  href="https://github.com/kevinsantanadev/prismivo"
                  target="_blank"
                  rel="noreferrer"
                >
                  {copy.projects.prismivo.repository}{" "}
                  <span aria-hidden="true">↗</span>
                  <span className="sr-only"> ({copy.newTab})</span>
                </a>
              </div>
            </div>
          </article>

          <div
            id="laboratorio"
            className="laboratory-heading"
            data-reveal="up"
          >
            <div>
              <p className="section-kicker">{copy.laboratory.kicker}</p>
              <h3>{copy.laboratory.title}</h3>
            </div>
            <p>{copy.laboratory.intro}</p>
          </div>

          <div className="future-projects laboratory-grid">
            {copy.laboratory.cards.map((card, index) => (
              <article
                className="laboratory-card"
                data-reveal="up"
                key={card.title}
              >
                <div className="laboratory-card-top">
                  <span
                    className={`status-dot${
                      card.tone === "violet"
                        ? " violet-dot"
                        : card.tone === "cyan"
                          ? " cyan-dot"
                          : ""
                    }`}
                  />
                  <span className="laboratory-status">{card.status}</span>
                </div>
                <p>{card.area}</p>
                <h3>{card.title}</h3>
                <span>{card.description}</span>
                <ul
                  className="laboratory-tags"
                  aria-label={
                    index === 0
                      ? copy.laboratory.technologyPlansLabel
                      : copy.laboratory.technologyStudiesLabel
                  }
                >
                  {card.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="laboratory-next-step">
                  <span>{copy.laboratory.nextStep}</span>
                  <strong>{card.next}</strong>
                </div>
              </article>
            ))}
          </div>

          <div
            className="knowledge-base"
            aria-labelledby="knowledge-title"
            data-reveal="up"
          >
            <div className="knowledge-intro">
              <div>
                <p className="section-kicker">{copy.knowledge.kicker}</p>
                <h3 id="knowledge-title">{copy.knowledge.title}</h3>
              </div>
              <p>{copy.knowledge.intro}</p>
            </div>

            <div className="knowledge-grid">
              {learningResources.map((resource) => (
                <a
                  className="knowledge-card"
                  href={resource.href}
                  key={resource.title}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={copy.knowledge.openLabel.replace(
                    "{title}",
                    resource.title,
                  )}
                >
                  <div className="knowledge-card-top">
                    <span className="knowledge-mark" aria-hidden="true">
                      {resource.mark}
                    </span>
                    <span className="source-badge">{copy.knowledge.official}</span>
                  </div>
                  <p>{resource.area}</p>
                  <h4>{resource.title}</h4>
                  <span className="knowledge-description">
                    {resource.description}
                  </span>
                  <ul
                    aria-label={copy.knowledge.topicsLabel.replace(
                      "{title}",
                      resource.title,
                    )}
                  >
                    {resource.topics.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                  <span className="knowledge-link">
                    {copy.knowledge.consult} <i aria-hidden="true">↗</i>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="habilidades" className="content-section section-shell">
          <div className="section-heading section-heading-row" data-reveal="up">
            <div>
              <p className="section-kicker">{copy.skills.kicker}</p>
              <h2>{copy.skills.title}</h2>
            </div>
            <p className="section-aside">{copy.skills.aside}</p>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article data-reveal="up" key={group.number}>
                <span className="skill-number">{group.number}</span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="experiencia" className="content-section section-shell">
          <div className="section-heading" data-reveal="up">
            <p className="section-kicker">{copy.experience.kicker}</p>
            <h2>{copy.experience.title}</h2>
          </div>

          <div className="experience-layout" data-reveal="up">
            <div className="timeline">
              <article>
                <span className="timeline-dot" />
                <div className="timeline-meta">{copy.experience.professional}</div>
                <h3>{copy.experience.adminTitle}</h3>
                <p className="timeline-place">
                  {copy.experience.adminCompany}
                </p>
                <p>{copy.experience.adminDescription}</p>
              </article>
              <article>
                <span className="timeline-dot" />
                <div className="timeline-meta">
                  {copy.experience.internshipMeta}
                </div>
                <h3>{copy.experience.internshipTitle}</h3>
                <p className="timeline-place">
                  {copy.experience.internshipPlace}
                </p>
                <p>{copy.experience.internshipDescription}</p>
              </article>
            </div>

            <aside className="education-card">
              <p className="card-label">{copy.experience.educationLabel}</p>
              <div>
                <span>{copy.experience.inProgress}</span>
                <h3>{copy.experience.degree}</h3>
                <p>{copy.experience.university}</p>
              </div>
              <div>
                <span>{copy.experience.technicalYear}</span>
                <h3>{copy.experience.technical}</h3>
                <p>{copy.experience.technicalSchool}</p>
              </div>
              <div className="education-tools">
                <span>VS Code</span>
                <span>Figma</span>
                <span>Google Workspace</span>
                <span>Microsoft Office</span>
              </div>
            </aside>
          </div>
        </section>

        <section
          id="contato"
          className="contact-section section-shell"
          data-reveal="up"
        >
          <div className="contact-glow" aria-hidden="true" />
          <div className="contact-copy">
            <p className="section-kicker">{copy.contact.kicker}</p>
            <h2>{copy.contact.title}</h2>
            <p>{copy.contact.intro}</p>
          </div>
          <div className="contact-actions">
            <a
              className="button button-primary"
              href="https://kevinsantanadev.com.br/#contato"
              target="_blank"
              rel="noreferrer"
            >
              {copy.contact.portfolioAction} <span aria-hidden="true">↗</span>
              <span className="sr-only"> ({copy.newTab})</span>
            </a>
            <a
              className="button button-secondary"
              href="https://www.linkedin.com/in/kevinsantanadosreis/"
              target="_blank"
              rel="noreferrer"
            >
              {copy.contact.linkedInAction} <span aria-hidden="true">↗</span>
              <span className="sr-only"> ({copy.newTab})</span>
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/kevinsantanadev"
              target="_blank"
              rel="noreferrer"
            >
              {copy.contact.githubAction} <span aria-hidden="true">↗</span>
              <span className="sr-only"> ({copy.newTab})</span>
            </a>
          </div>

          <div className="contact-details">
            <a
              href="https://kevinsantanadev.com.br"
              target="_blank"
              rel="noreferrer"
            >
              <span>{copy.contact.website}</span>
              kevinsantanadev.com.br
              <span className="sr-only"> ({copy.newTab})</span>
            </a>
            <p>
              <span>{copy.contact.location}</span>
              {copy.contact.locationValue}
            </p>
          </div>
        </section>
      </div>

      <footer className="site-footer section-shell">
        <a className="brand footer-brand" href="#inicio">
          Kevin Santana <span aria-hidden="true" />
        </a>
        <p>{copy.footerRole}</p>
        <p>{copy.copyright}</p>
      </footer>
    </main>
  );
}
