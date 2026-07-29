import Image from "next/image";

const navigation = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Laboratório", href: "#laboratorio" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Contato", href: "#contato" },
];

const technologies = [
  { name: "HTML5", mark: "H5", tone: "orange" },
  { name: "CSS3", mark: "C3", tone: "blue" },
  { name: "JavaScript", mark: "JS", tone: "yellow" },
  { name: "PHP", mark: "PHP", tone: "violet" },
  { name: "Python", mark: "PY", tone: "cyan" },
  { name: "MySQL", mark: "SQL", tone: "teal" },
];

const skillGroups = [
  {
    number: "01",
    title: "Front-end",
    description:
      "Interfaces responsivas, acessíveis e organizadas para diferentes dispositivos.",
    items: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },
  {
    number: "02",
    title: "Back-end",
    description:
      "Regras de negócio, integrações, validações e desenvolvimento orientado a soluções.",
    items: ["PHP", "Python", "Lógica de programação", "APIs"],
  },
  {
    number: "03",
    title: "Dados e ferramentas",
    description:
      "Estruturação de dados, versionamento e colaboração durante todo o desenvolvimento.",
    items: ["MySQL", "SQL", "Git", "GitHub", "Figma", "VS Code"],
  },
];

const learningResources = [
  {
    area: "Base da Web",
    title: "MDN Web Docs",
    mark: "WEB",
    description:
      "Referência para estudar e consultar HTML, CSS, JavaScript, acessibilidade e APIs da Web.",
    topics: ["HTML", "CSS", "JavaScript"],
    href: "https://developer.mozilla.org/pt-BR/docs/Web",
  },
  {
    area: "Back-end",
    title: "Manual do PHP",
    mark: "PHP",
    description:
      "Documentação oficial da linguagem, com funções, exemplos, banco de dados e boas práticas.",
    topics: ["PHP", "PDO", "APIs"],
    href: "https://www.php.net/manual/pt_BR/",
  },
  {
    area: "Programação",
    title: "Python Docs",
    mark: "PY",
    description:
      "Documentação oficial para aprofundar sintaxe, biblioteca padrão e desenvolvimento com Python.",
    topics: ["Python", "Lógica", "Bibliotecas"],
    href: "https://docs.python.org/pt-br/3/",
  },
  {
    area: "Banco de dados",
    title: "MySQL Reference",
    mark: "SQL",
    description:
      "Manual técnico para consultas SQL, modelagem, administração, desempenho e segurança de dados.",
    topics: ["MySQL", "SQL", "Modelagem"],
    href: "https://dev.mysql.com/doc/refman/8.4/en/",
  },
  {
    area: "Versionamento",
    title: "GitHub Skills",
    mark: "GIT",
    description:
      "Exercícios interativos para praticar Git, GitHub, colaboração e fluxo de desenvolvimento.",
    topics: ["Git", "GitHub", "Colaboração"],
    href: "https://skills.github.com/",
  },
  {
    area: "Segurança",
    title: "OWASP Top 10",
    mark: "SEC",
    description:
      "Referência de conscientização sobre os riscos mais críticos em aplicações web e como reduzi-los.",
    topics: ["Segurança Web", "Riscos", "Boas práticas"],
    href: "https://owasp.org/www-project-top-ten/",
  },
];

export default function Home() {
  return (
    <main id="inicio">
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <div className="space-atmosphere" aria-hidden="true">
        <span className="star-field star-field-far" />
        <span className="star-field star-field-near" />
        <span className="space-orbit space-orbit-top" />
        <span className="space-orbit space-orbit-bottom" />
        <span className="comet comet-one" />
        <span className="comet comet-two" />
      </div>

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Voltar ao início">
          Kevin Santana <span aria-hidden="true" />
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <details className="mobile-nav">
          <summary aria-label="Abrir menu">
            <span />
            <span />
          </summary>
          <nav aria-label="Navegação para celular">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </details>
      </header>

      <div id="conteudo">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span>Portfólio</span>
              <span aria-hidden="true">•</span>
              <span>2026</span>
            </p>

            <h1 id="hero-title">Kevin Santana</h1>
            <p className="hero-role">Desenvolvedor de Software Júnior</p>
            <p className="hero-intro">
              Construo soluções digitais eficientes, bem estruturadas e
              preparadas para evoluir.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">
                Ver projetos <span aria-hidden="true">→</span>
              </a>
              <a
                className="button button-secondary"
                href="/Curriculo-Kevin-Santana.pdf"
                download
              >
                Baixar currículo <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div className="location-line">
              <span className="pin" aria-hidden="true" />
              <span>Hortolândia, SP</span>
              <span className="location-divider" aria-hidden="true" />
              <a
                href="https://www.linkedin.com/in/kevinsantanadosreis/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <span className="location-divider" aria-hidden="true" />
              <a
                href="https://github.com/kevinsantanadev"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>

            <ul className="technology-grid" aria-label="Principais tecnologias">
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

          <div className="hero-visual" aria-label="Retrato de Kevin Santana">
            <div className="visual-aurora" aria-hidden="true" />
            <div className="portrait-card">
              <Image
                src="/kevin-santana.jpeg"
                alt="Kevin Santana usando terno preto em retrato profissional"
                width="1122"
                height="1402"
                sizes="(max-width: 760px) 88vw, 38vw"
                priority
              />
              <div className="portrait-shade" aria-hidden="true" />
            </div>

            <div className="floating-card floating-code" aria-hidden="true">
              <span className="code-symbol">&lt;/&gt;</span>
              <small>Desenvolvimento</small>
            </div>
            <div className="floating-card floating-data" aria-hidden="true">
              <span className="database-icon">
                <i />
                <i />
                <i />
              </span>
              <small>Back-end</small>
            </div>
            <div className="floating-card floating-initials" aria-hidden="true">
              <strong>KS</strong>
            </div>
          </div>
        </section>

        <section id="sobre" className="content-section section-shell">
          <div className="section-heading">
            <p className="section-kicker">Sobre mim</p>
            <h2>Tecnologia com propósito, clareza e evolução constante.</h2>
          </div>

          <div className="about-layout">
            <div className="about-copy">
              <p>
                Sou desenvolvedor de software júnior, com formação técnica em
                Tecnologia da Informação e graduação em Análise e
                Desenvolvimento de Sistemas em andamento no UNASP.
              </p>
              <p>
                Minha experiência une desenvolvimento web, lógica de negócio,
                banco de dados e trabalho colaborativo. No ImunoLink, atuei
                principalmente no back-end, contribuindo com integrações,
                validações, segurança de dados e melhorias contínuas.
              </p>
            </div>

            <div className="about-stats" aria-label="Destaques profissionais">
              <article>
                <strong>200h</strong>
                <span>de estágio supervisionado em TI</span>
              </article>
              <article>
                <strong>Full Stack</strong>
                <span>base completa com foco em back-end</span>
              </article>
              <article>
                <strong>Inglês</strong>
                <span>intermediário para leitura técnica</span>
              </article>
            </div>
          </div>
        </section>

        <section id="projetos" className="content-section section-shell">
          <div className="section-heading section-heading-row">
            <div>
              <p className="section-kicker">Projetos selecionados</p>
              <h2>Soluções que transformam conhecimento em experiência real.</h2>
            </div>
            <span className="section-count">02 projetos publicados</span>
          </div>

          <article className="featured-project">
            <div className="project-visual" aria-hidden="true">
              <div className="project-browser">
                <div className="browser-top">
                  <span />
                  <span />
                  <span />
                  <div>imunolink.com.br</div>
                </div>
                <div className="browser-content">
                  <div className="imunolink-mark">iL</div>
                  <p>Saúde e tecnologia</p>
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
                <span>Projeto em destaque</span>
                <span>2025</span>
              </div>
              <h3>ImunoLink</h3>
              <p className="project-subtitle">
                Plataforma digital para gestão de vacinas e perfis de saúde.
              </p>
              <p>
                Atuação como desenvolvedor com responsabilidade predominante no
                back-end: regras de negócio, estruturação do banco de dados,
                integrações, validações e segurança das informações.
              </p>
              <ul className="tag-list" aria-label="Tecnologias do ImunoLink">
                {["PHP", "Python", "MySQL", "JavaScript", "Bootstrap"].map(
                  (item) => (
                    <li key={item}>{item}</li>
                  ),
                )}
              </ul>
              <a
                className="text-link"
                href="https://imunolink.com.br"
                target="_blank"
                rel="noreferrer"
              >
                Acessar projeto <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          <article className="featured-project featured-project-vagatrack">
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
                    <small>VISÃO GERAL</small>
                    <h4>Olá, usuário.</h4>
                    <div className="vagatrack-metrics">
                      <span>
                        <small>CANDIDATURAS</small>
                        <strong>24</strong>
                      </span>
                      <span>
                        <small>ENTREVISTAS</small>
                        <strong>05</strong>
                      </span>
                      <span>
                        <small>PROPOSTAS</small>
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
                  <small>DADOS PERSISTENTES</small>
                  <strong>Banco conectado</strong>
                </div>
              </div>
              <div className="project-orbit orbit-one" />
              <div className="project-orbit orbit-two" />
            </div>

            <div className="project-copy">
              <div className="project-meta">
                <span>Aplicação Full Stack</span>
                <span>2026</span>
              </div>
              <h3>VagaTrack</h3>
              <p className="project-subtitle">
                Plataforma para gestão estratégica de candidaturas e processos
                seletivos.
              </p>
              <p>
                Produto completo com espaços demonstrativos isolados, banco de
                dados persistente, operações de cadastro, edição e exclusão,
                dashboard com indicadores, filtros e integração de localização
                por API.
              </p>
              <ul className="tag-list" aria-label="Tecnologias do VagaTrack">
                {[
                  "Next.js",
                  "TypeScript",
                  "D1",
                  "REST API",
                  "Sessões isoladas",
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
                Acessar VagaTrack <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          <div id="laboratorio" className="laboratory-heading">
            <div>
              <p className="section-kicker">Laboratório</p>
              <h3>Estudos que se transformam em produtos.</h3>
            </div>
            <p>
              Um espaço transparente para registrar ideias, competências em
              desenvolvimento e os próximos desafios técnicos de cada estudo.
            </p>
          </div>

          <div className="future-projects laboratory-grid">
            <article className="laboratory-card">
              <div className="laboratory-card-top">
                <span className="status-dot" />
                <span className="laboratory-status">Conceito em estudo</span>
              </div>
              <p>Login e banco de dados</p>
              <h3>NexoDesk</h3>
              <span>
                Central de chamados para equipes, com prioridades, responsáveis
                e acompanhamento por SLA, pensada para praticar autenticação,
                permissões e separação segura de dados.
              </span>
              <ul className="laboratory-tags" aria-label="Tecnologias planejadas">
                <li>Next.js</li>
                <li>PostgreSQL</li>
                <li>Login próprio</li>
              </ul>
              <div className="laboratory-next-step">
                <span>Próximo passo</span>
                <strong>Mapear entidades, perfis e permissões</strong>
              </div>
            </article>

            <article className="laboratory-card">
              <div className="laboratory-card-top">
                <span className="status-dot violet-dot" />
                <span className="laboratory-status">Pesquisa aplicada</span>
              </div>
              <p>Dashboards e relatórios</p>
              <h3>Dashboard Lab</h3>
              <span>
                Estudo de indicadores, filtros, visualização de dados e
                relatórios exportáveis para apoiar decisões com informações
                claras.
              </span>
              <ul className="laboratory-tags" aria-label="Tecnologias estudadas">
                <li>TypeScript</li>
                <li>SQL</li>
                <li>CSV</li>
              </ul>
              <div className="laboratory-next-step">
                <span>Próximo passo</span>
                <strong>Comparar métricas e padrões de visualização</strong>
              </div>
            </article>

            <article className="laboratory-card">
              <div className="laboratory-card-top">
                <span className="status-dot violet-dot" />
                <span className="laboratory-status">Pesquisa técnica</span>
              </div>
              <p>APIs e integrações</p>
              <h3>Brasil Data Hub</h3>
              <span>
                Experimento de integração e normalização de dados públicos para
                consultas rápidas por uma API unificada e resiliente.
              </span>
              <ul className="laboratory-tags" aria-label="Tecnologias estudadas">
                <li>REST</li>
                <li>Validação</li>
                <li>Cache</li>
              </ul>
              <div className="laboratory-next-step">
                <span>Próximo passo</span>
                <strong>Validar fontes públicas e contratos da API</strong>
              </div>
            </article>

            <article className="laboratory-card">
              <div className="laboratory-card-top">
                <span className="status-dot cyan-dot" />
                <span className="laboratory-status">Prática contínua</span>
              </div>
              <p>Interface e experiência</p>
              <h3>Motion UI Lab</h3>
              <span>
                Coleção de componentes responsivos, microinterações discretas e
                padrões acessíveis para produtos digitais.
              </span>
              <ul className="laboratory-tags" aria-label="Tecnologias estudadas">
                <li>React</li>
                <li>CSS</li>
                <li>Acessibilidade</li>
              </ul>
              <div className="laboratory-next-step">
                <span>Próximo passo</span>
                <strong>Consolidar componentes e testes de teclado</strong>
              </div>
            </article>
          </div>

          <div className="knowledge-base" aria-labelledby="knowledge-title">
            <div className="knowledge-intro">
              <div>
                <p className="section-kicker">Fontes de estudo</p>
                <h3 id="knowledge-title">Biblioteca técnica do laboratório.</h3>
              </div>
              <p>
                Documentações e plataformas oficiais selecionadas para orientar
                meus estudos, consultar conceitos e validar decisões durante o
                desenvolvimento.
              </p>
            </div>

            <div className="knowledge-grid">
              {learningResources.map((resource) => (
                <a
                  className="knowledge-card"
                  href={resource.href}
                  key={resource.title}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Acessar ${resource.title} em uma nova aba`}
                >
                  <div className="knowledge-card-top">
                    <span className="knowledge-mark" aria-hidden="true">
                      {resource.mark}
                    </span>
                    <span className="source-badge">Fonte oficial</span>
                  </div>
                  <p>{resource.area}</p>
                  <h4>{resource.title}</h4>
                  <span className="knowledge-description">
                    {resource.description}
                  </span>
                  <ul aria-label={`Assuntos em ${resource.title}`}>
                    {resource.topics.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                  <span className="knowledge-link">
                    Consultar referência <i aria-hidden="true">↗</i>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="habilidades" className="content-section section-shell">
          <div className="section-heading section-heading-row">
            <div>
              <p className="section-kicker">Habilidades</p>
              <h2>Uma base completa para construir produtos digitais.</h2>
            </div>
            <p className="section-aside">
              Aprendizado contínuo, organização e atenção aos detalhes fazem
              parte do meu processo.
            </p>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article key={group.number}>
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
          <div className="section-heading">
            <p className="section-kicker">Experiência e formação</p>
            <h2>Conhecimento técnico conectado à prática profissional.</h2>
          </div>

          <div className="experience-layout">
            <div className="timeline">
              <article>
                <span className="timeline-dot" />
                <div className="timeline-meta">Experiência profissional</div>
                <h3>Assistente Administrativo</h3>
                <p className="timeline-place">
                  Crespo e Caires Advocacia e Associados
                </p>
                <p>
                  Atendimento a clientes, organização de documentos e
                  processos, controle de agendas, elaboração de planilhas e
                  suporte às rotinas da equipe jurídica.
                </p>
              </article>
              <article>
                <span className="timeline-dot" />
                <div className="timeline-meta">2025 · 200 horas</div>
                <h3>Estágio Supervisionado em TI</h3>
                <p className="timeline-place">UNASP - Hortolândia</p>
                <p>
                  Desenvolvimento e manutenção de sistemas web, testes,
                  documentação técnica e colaboração em projetos reais.
                </p>
              </article>
            </div>

            <aside className="education-card">
              <p className="card-label">Formação acadêmica</p>
              <div>
                <span>Em andamento</span>
                <h3>Análise e Desenvolvimento de Sistemas</h3>
                <p>Centro Universitário Adventista de São Paulo - UNASP</p>
              </div>
              <div>
                <span>2025</span>
                <h3>Técnico em Tecnologia da Informação</h3>
                <p>Ensino Médio com Técnico Integrado - UNASP</p>
              </div>
              <div className="education-tools">
                <span>VS Code</span>
                <span>Figma</span>
                <span>Google Workspace</span>
                <span>Pacote Office</span>
              </div>
            </aside>
          </div>
        </section>

        <section id="contato" className="contact-section section-shell">
          <div className="contact-glow" aria-hidden="true" />
          <div className="contact-copy">
            <p className="section-kicker">Vamos conversar?</p>
            <h2>Disponível para oportunidades e novos desafios.</h2>
            <p>
              Se meu perfil combina com a sua equipe ou projeto, entre em
              contato. Será um prazer conversar.
            </p>
          </div>
          <div className="contact-actions">
            <a
              className="button button-primary"
              href="mailto:reiscampos.ke@gmail.com"
            >
              Enviar e-mail <span aria-hidden="true">→</span>
            </a>
            <a
              className="button button-secondary"
              href="https://www.linkedin.com/in/kevinsantanadosreis/"
              target="_blank"
              rel="noreferrer"
            >
              Ver LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/kevinsantanadev"
              target="_blank"
              rel="noreferrer"
            >
              Ver GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="contact-details">
            <a href="mailto:reiscampos.ke@gmail.com">
              <span>E-mail</span>
              reiscampos.ke@gmail.com
            </a>
            <a href="tel:+5519978298186">
              <span>Telefone</span>
              (19) 97829-8186
            </a>
            <p>
              <span>Localização</span>
              Hortolândia, São Paulo
            </p>
          </div>
        </section>
      </div>

      <footer className="site-footer section-shell">
        <a className="brand footer-brand" href="#inicio">
          Kevin Santana <span aria-hidden="true" />
        </a>
        <p>Desenvolvedor de Software Júnior</p>
        <p>© 2026 Kevin Santana. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
