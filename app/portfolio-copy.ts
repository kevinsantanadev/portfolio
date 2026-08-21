export type PortfolioLanguage = "pt" | "en" | "es";

export const languageOptions = [
  { key: "pt", short: "PT-BR", label: "Português (Brasil)", href: "/" },
  { key: "en", short: "EN", label: "English", href: "/en" },
  { key: "es", short: "ES", label: "Español", href: "/es" },
] as const;

export const copyByLanguage = {
  pt: {
    locale: "pt-BR",
    languageMenu: "Selecionar idioma",
    themeToLight: "Ativar modo claro",
    themeToDark: "Ativar modo escuro",
    newTab: "Abre em uma nova aba",
    skip: "Ir para o conteúdo",
    brandHome: "Voltar ao início",
    navigationLabel: "Navegação principal",
    mobileMenu: "Abrir menu",
    mobileNavigation: "Navegação para celular",
    navigation: [
      { label: "Sobre", href: "#sobre" },
      { label: "Projetos", href: "#projetos" },
      { label: "Laboratório", href: "#laboratorio" },
      { label: "Habilidades", href: "#habilidades" },
      { label: "Experiência", href: "#experiencia" },
      { label: "Contato", href: "#contato" },
    ],
    hero: {
      eyebrow: "Portfólio",
      role: "Desenvolvedor Full Stack",
      intro:
        "Construo soluções digitais eficientes, bem estruturadas e preparadas para evoluir.",
      projects: "Ver projetos",
      resumePt: "Currículo PT",
      resumeEn: "Resume EN",
      portraitLabel: "Retrato de Kevin Santana",
      portraitAlt: "Kevin Santana usando terno preto em retrato profissional",
      development: "Desenvolvimento",
      backend: "Back-end",
      location: "Hortolândia, SP",
      technologyLabel: "Principais tecnologias",
      terminalLabel:
        "Terminal de computador tridimensional interativo que reage ao movimento do cursor e à rolagem",
    },
    about: {
      kicker: "Sobre mim",
      title: "Tecnologia com propósito, clareza e evolução constante.",
      paragraphs: [
        "Sou Desenvolvedor Full Stack, com formação técnica em Tecnologia da Informação e graduação em Análise e Desenvolvimento de Sistemas em andamento no UNASP.",
        "Minha experiência reúne desenvolvimento web, lógica de negócio, banco de dados e colaboração em equipe. No ImunoLink, projeto desenvolvido por dois integrantes, atuei principalmente no back-end e também contribuí pontualmente no front-end, ampliando minha vivência full stack.",
      ],
      highlightsLabel: "Destaques profissionais",
      stats: [
        { value: "200h", label: "de estágio supervisionado em TI" },
        { value: "Full Stack", label: "base completa com foco em back-end" },
        { value: "Inglês", label: "intermediário para leitura técnica" },
      ],
    },
    projects: {
      kicker: "Projetos selecionados",
      title: "Soluções que transformam conhecimento em experiência real.",
      count: "04 projetos publicados",
      imunolink: {
        meta: "Projeto em destaque",
        year: "Equipe de 2 · 2025",
        subtitle: "Plataforma digital para gestão de vacinas e perfis de saúde.",
        description:
          "Projeto desenvolvido por dois integrantes. Meu colega concentrou sua atuação no front-end, enquanto fui responsável principalmente pelo back-end: regras de negócio, estruturação do banco de dados, integrações, validações e segurança das informações. Também colaborei em etapas do front-end, exercendo uma atuação full stack em momentos do projeto.",
        technologiesLabel: "Tecnologias do ImunoLink",
        link: "Acessar projeto",
      },
      psagenda: {
        meta: "Produto desenvolvido para cliente",
        year: "2026",
        subtitle:
          "Agenda digital criada sob demanda para transformar uma necessidade real em uma rotina mais organizada.",
        description:
          "Projeto real desenvolvido para um cliente, com foco em organização de compromissos, experiência responsiva e persistência segura de dados com Supabase. O código e o ambiente administrativo permanecem privados para preservar o trabalho contratado e as informações do cliente.",
        technologiesLabel: "Tecnologias e características do PS Agenda",
        privacyTag: "Código privado",
        link: "Acessar PS Agenda",
        overview: "AGENDA DO DIA",
        greeting: "Rotina organizada em um só lugar.",
        appointments: "AGENDADOS",
        completed: "CONCLUÍDOS",
        upcoming: "PRÓXIMOS",
        clientProject: "PROJETO PARA CLIENTE",
        protectedData: "Dados e código protegidos",
      },
      prismivo: {
        meta: "Produto SaaS Full Stack",
        year: "2026",
        subtitle:
          "Plataforma B2B para organizar clientes, projetos, entregas e decisões em uma única operação.",
        description:
          "Produto digital completo com autenticação, PostgreSQL, isolamento por organização, papéis e permissões, arquivos privados, aprovações, atendimento, conteúdo, assinaturas demonstrativas, PWA, acessibilidade e testes automatizados. A arquitetura foi preparada para evolução contínua e publicação independente.",
        technologiesLabel: "Tecnologias do Prismivo",
        link: "Acessar Prismivo",
        repository: "Ver código no GitHub",
        dashboard: "OPERAÇÃO CENTRAL",
        activeProjects: "PROJETOS ATIVOS",
        approvals: "APROVAÇÕES",
        team: "EQUIPE",
        protectedData: "DADOS PROTEGIDOS",
        organizationIsolation: "Isolamento por organização",
      },
      bruna: {
        meta: "Portfólio desenvolvido para cliente",
        year: "2026",
        subtitle:
          "Presença profissional para uma Técnica em Enfermagem, com identidade clínica, acessibilidade e currículo para download.",
        description:
          "Projeto entregue a uma cliente real para organizar formação, experiências, estágios, certificações e contatos em uma apresentação pública responsiva. Desenvolvi a direção visual, a arquitetura de conteúdo, o SEO, a prévia social, animações sutis, acessibilidade, domínio próprio e um currículo otimizado. O código permanece privado para proteger o trabalho contratado e os arquivos da cliente.",
        technologiesLabel: "Tecnologias e características do portfólio da Bruna",
        privacyTag: "Código privado",
        responsiveTag: "Design responsivo",
        accessibilityTag: "Acessibilidade",
        link: "Acessar portfólio",
        role: "Técnica em Enfermagem",
        portfolioLabel: "PORTFÓLIO PROFISSIONAL",
        visualTitle: "Cuidado que se transforma em presença profissional.",
        education: "FORMAÇÃO",
        educationValue: "Técnica + Graduação",
        experience: "VIVÊNCIA",
        experienceValue: "Assistência e estágios",
        curriculum: "CURRÍCULO PROFISSIONAL",
        download: "Download disponível",
      },
    },
    laboratory: {
      kicker: "Laboratório",
      title: "Estudos que se transformam em produtos.",
      intro:
        "Um espaço transparente para registrar ideias, competências em desenvolvimento e os próximos desafios técnicos de cada estudo.",
      nextStep: "Próximo passo",
      technologyPlansLabel: "Tecnologias planejadas",
      technologyStudiesLabel: "Tecnologias estudadas",
      cards: [
        {
          status: "Conceito em estudo",
          area: "Login e banco de dados",
          title: "NexoDesk",
          description:
            "Central de chamados para equipes, com prioridades, responsáveis e acompanhamento por SLA, pensada para praticar autenticação, permissões e separação segura de dados.",
          tags: ["Next.js", "PostgreSQL", "Login próprio"],
          next: "Mapear entidades, perfis e permissões",
          tone: "default",
        },
        {
          status: "Pesquisa aplicada",
          area: "Dashboards e relatórios",
          title: "Dashboard Lab",
          description:
            "Estudo de indicadores, filtros, visualização de dados e relatórios exportáveis para apoiar decisões com informações claras.",
          tags: ["TypeScript", "SQL", "CSV"],
          next: "Comparar métricas e padrões de visualização",
          tone: "violet",
        },
        {
          status: "Pesquisa técnica",
          area: "APIs e integrações",
          title: "Brasil Data Hub",
          description:
            "Experimento de integração e normalização de dados públicos para consultas rápidas por uma API unificada e resiliente.",
          tags: ["REST", "Validação", "Cache"],
          next: "Validar fontes públicas e contratos da API",
          tone: "violet",
        },
        {
          status: "Prática contínua",
          area: "Interface e experiência",
          title: "Motion UI Lab",
          description:
            "Coleção de componentes responsivos, microinterações discretas e padrões acessíveis para produtos digitais.",
          tags: ["React", "CSS", "Acessibilidade"],
          next: "Consolidar componentes e testes de teclado",
          tone: "cyan",
        },
      ],
    },
    knowledge: {
      kicker: "Fontes de estudo",
      title: "Biblioteca técnica do laboratório.",
      intro:
        "Documentações e plataformas oficiais selecionadas para orientar meus estudos, consultar conceitos e validar decisões durante o desenvolvimento.",
      official: "Fonte oficial",
      consult: "Consultar referência",
      openLabel: "Acessar {title} em uma nova aba",
      topicsLabel: "Assuntos em {title}",
      resources: [
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
      ],
    },
    skills: {
      kicker: "Habilidades",
      title: "Uma base completa para construir produtos digitais.",
      aside:
        "Aprendizado contínuo, organização e atenção aos detalhes fazem parte do meu processo.",
      groups: [
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
      ],
    },
    experience: {
      kicker: "Experiência e formação",
      title: "Conhecimento técnico conectado à prática profissional.",
      professional: "Experiência profissional",
      adminTitle: "Assistente Administrativo",
      adminCompany: "Crespo e Caires Advocacia e Associados",
      adminDescription:
        "Atendimento a clientes, organização de documentos e processos, controle de agendas, elaboração de planilhas e suporte às rotinas da equipe jurídica.",
      internshipMeta: "2025 · 200 horas",
      internshipTitle: "Estágio Supervisionado em TI",
      internshipPlace: "UNASP - Hortolândia",
      internshipDescription:
        "Desenvolvimento e manutenção de sistemas web, testes, documentação técnica e colaboração em projetos reais.",
      educationLabel: "Formação acadêmica",
      inProgress: "Em andamento",
      degree: "Análise e Desenvolvimento de Sistemas",
      university: "Centro Universitário Adventista de São Paulo - UNASP",
      technicalYear: "2025",
      technical: "Técnico em Tecnologia da Informação",
      technicalSchool: "Ensino Médio com Técnico Integrado - UNASP",
    },
    contact: {
      kicker: "Vamos conversar?",
      title: "Disponível para oportunidades e novos desafios.",
      intro:
        "Se meu perfil combina com a sua equipe ou projeto, entre em contato. Será um prazer conversar.",
      portfolioAction: "Contato pelo portfólio",
      linkedInAction: "Ver LinkedIn",
      githubAction: "Ver GitHub",
      website: "Portfólio",
      location: "Localização",
      locationValue: "Hortolândia, São Paulo",
    },
    footerRole: "Desenvolvedor Full Stack",
    copyright: "© 2026 Kevin Santana. Todos os direitos reservados.",
  },
  en: {
    locale: "en",
    languageMenu: "Select language",
    themeToLight: "Switch to light mode",
    themeToDark: "Switch to dark mode",
    newTab: "Opens in a new tab",
    skip: "Skip to content",
    brandHome: "Back to top",
    navigationLabel: "Main navigation",
    mobileMenu: "Open menu",
    mobileNavigation: "Mobile navigation",
    navigation: [
      { label: "About", href: "#sobre" },
      { label: "Projects", href: "#projetos" },
      { label: "Lab", href: "#laboratorio" },
      { label: "Skills", href: "#habilidades" },
      { label: "Experience", href: "#experiencia" },
      { label: "Contact", href: "#contato" },
    ],
    hero: {
      eyebrow: "Portfolio",
      role: "Full Stack Developer",
      intro:
        "I build efficient, well-structured digital solutions designed to evolve.",
      projects: "View projects",
      resumePt: "Portuguese CV",
      resumeEn: "English resume",
      portraitLabel: "Portrait of Kevin Santana",
      portraitAlt: "Kevin Santana wearing a black suit in a professional portrait",
      development: "Development",
      backend: "Back-end",
      location: "Hortolândia, SP, Brazil",
      technologyLabel: "Core technologies",
      terminalLabel:
        "Interactive three-dimensional computer terminal that responds to pointer movement and scrolling",
    },
    about: {
      kicker: "About me",
      title: "Technology with purpose, clarity, and continuous growth.",
      paragraphs: [
        "I am a Full Stack Developer with a technical background in Information Technology, currently pursuing a degree in Systems Analysis and Development at UNASP.",
        "My experience combines web development, business logic, databases, and teamwork. ImunoLink was built by a two-person team: I worked mainly on the back-end and also contributed to the front-end at key stages, expanding my full stack experience.",
      ],
      highlightsLabel: "Professional highlights",
      stats: [
        { value: "200h", label: "of supervised IT internship" },
        { value: "Full Stack", label: "broad foundation with a back-end focus" },
        { value: "English", label: "intermediate technical reading" },
      ],
    },
    projects: {
      kicker: "Selected projects",
      title: "Solutions that turn knowledge into real-world experience.",
      count: "04 published projects",
      imunolink: {
        meta: "Featured project",
        year: "Two-person team · 2025",
        subtitle: "Digital platform for vaccine and health-profile management.",
        description:
          "Built by a two-person team. My teammate focused on the front-end, while I was primarily responsible for the back-end: business rules, database structure, integrations, validations, and information security. I also contributed to front-end stages, taking on a full stack role at key moments of the project.",
        technologiesLabel: "ImunoLink technologies",
        link: "Open project",
      },
      psagenda: {
        meta: "Client-commissioned product",
        year: "2026",
        subtitle:
          "A custom digital planner that turns a real client need into a more organized routine.",
        description:
          "A real project developed for a client, focused on appointment organization, a responsive experience, and secure data persistence with Supabase. The source code and administration environment remain private to protect the commissioned work and client information.",
        technologiesLabel: "PS Agenda technologies and characteristics",
        privacyTag: "Private source code",
        link: "Open PS Agenda",
        overview: "TODAY'S SCHEDULE",
        greeting: "One place for an organized routine.",
        appointments: "SCHEDULED",
        completed: "COMPLETED",
        upcoming: "UPCOMING",
        clientProject: "CLIENT PROJECT",
        protectedData: "Protected data and code",
      },
      prismivo: {
        meta: "Full Stack SaaS product",
        year: "2026",
        subtitle:
          "B2B platform that brings clients, projects, deliverables, and decisions into one operation.",
        description:
          "A complete digital product with authentication, PostgreSQL, organization isolation, roles and permissions, private files, approvals, support, content, demo subscriptions, PWA, accessibility, and automated tests. Its architecture is ready for continuous evolution and independent deployment.",
        technologiesLabel: "Prismivo technologies",
        link: "Open Prismivo",
        repository: "View code on GitHub",
        dashboard: "OPERATIONS HUB",
        activeProjects: "ACTIVE PROJECTS",
        approvals: "APPROVALS",
        team: "TEAM",
        protectedData: "PROTECTED DATA",
        organizationIsolation: "Organization-level isolation",
      },
      bruna: {
        meta: "Client portfolio project",
        year: "2026",
        subtitle:
          "A professional presence for a Nursing Technician, combining a clinical identity, accessibility, and a downloadable résumé.",
        description:
          "A real client project that organizes education, work experience, clinical placements, certifications, and contact details in a responsive public presentation. I developed the visual direction, content architecture, SEO, social preview, subtle motion, accessibility, custom domain, and an optimized résumé. The source code remains private to protect the commissioned work and client files.",
        technologiesLabel: "Bruna portfolio technologies and characteristics",
        privacyTag: "Private source code",
        responsiveTag: "Responsive design",
        accessibilityTag: "Accessibility",
        link: "Open portfolio",
        role: "Nursing Technician",
        portfolioLabel: "PROFESSIONAL PORTFOLIO",
        visualTitle: "Care transformed into professional presence.",
        education: "EDUCATION",
        educationValue: "Technical + Degree",
        experience: "EXPERIENCE",
        experienceValue: "Care and placements",
        curriculum: "PROFESSIONAL RÉSUMÉ",
        download: "Download available",
      },
    },
    laboratory: {
      kicker: "Laboratory",
      title: "Studies that grow into products.",
      intro:
        "A transparent space for documenting ideas, developing skills, and mapping the next technical challenge behind each study.",
      nextStep: "Next step",
      technologyPlansLabel: "Planned technologies",
      technologyStudiesLabel: "Technologies under study",
      cards: [
        {
          status: "Concept study",
          area: "Authentication and databases",
          title: "NexoDesk",
          description:
            "A support desk for teams with priorities, owners, and SLA tracking, designed to practice authentication, permissions, and secure data isolation.",
          tags: ["Next.js", "PostgreSQL", "Custom login"],
          next: "Map entities, roles, and permissions",
          tone: "default",
        },
        {
          status: "Applied research",
          area: "Dashboards and reports",
          title: "Dashboard Lab",
          description:
            "A study of metrics, filters, data visualization, and exportable reports designed to support clear decision-making.",
          tags: ["TypeScript", "SQL", "CSV"],
          next: "Compare metrics and visualization patterns",
          tone: "violet",
        },
        {
          status: "Technical research",
          area: "APIs and integrations",
          title: "Brasil Data Hub",
          description:
            "An experiment in integrating and normalizing public data for fast queries through a unified, resilient API.",
          tags: ["REST", "Validation", "Cache"],
          next: "Validate public sources and API contracts",
          tone: "violet",
        },
        {
          status: "Continuous practice",
          area: "Interface and experience",
          title: "Motion UI Lab",
          description:
            "A collection of responsive components, subtle microinteractions, and accessible patterns for digital products.",
          tags: ["React", "CSS", "Accessibility"],
          next: "Consolidate components and keyboard tests",
          tone: "cyan",
        },
      ],
    },
    knowledge: {
      kicker: "Study sources",
      title: "The laboratory's technical library.",
      intro:
        "Official documentation and platforms selected to guide my studies, review concepts, and validate decisions throughout development.",
      official: "Official source",
      consult: "Open reference",
      openLabel: "Open {title} in a new tab",
      topicsLabel: "Topics in {title}",
      resources: [
        {
          area: "Web foundations",
          title: "MDN Web Docs",
          mark: "WEB",
          description:
            "A reference for HTML, CSS, JavaScript, accessibility, and Web APIs.",
          topics: ["HTML", "CSS", "JavaScript"],
          href: "https://developer.mozilla.org/en-US/docs/Web",
        },
        {
          area: "Back-end",
          title: "PHP Manual",
          mark: "PHP",
          description:
            "Official language documentation covering functions, examples, databases, and best practices.",
          topics: ["PHP", "PDO", "APIs"],
          href: "https://www.php.net/manual/en/",
        },
        {
          area: "Programming",
          title: "Python Docs",
          mark: "PY",
          description:
            "Official documentation for learning syntax, the standard library, and Python development.",
          topics: ["Python", "Logic", "Libraries"],
          href: "https://docs.python.org/3/",
        },
        {
          area: "Databases",
          title: "MySQL Reference",
          mark: "SQL",
          description:
            "Technical reference for SQL queries, modeling, administration, performance, and data security.",
          topics: ["MySQL", "SQL", "Modeling"],
          href: "https://dev.mysql.com/doc/refman/8.4/en/",
        },
        {
          area: "Version control",
          title: "GitHub Skills",
          mark: "GIT",
          description:
            "Interactive exercises for practicing Git, GitHub, collaboration, and development workflows.",
          topics: ["Git", "GitHub", "Collaboration"],
          href: "https://skills.github.com/",
        },
        {
          area: "Security",
          title: "OWASP Top 10",
          mark: "SEC",
          description:
            "An awareness reference for the most critical web-application risks and how to reduce them.",
          topics: ["Web Security", "Risks", "Best practices"],
          href: "https://owasp.org/www-project-top-ten/",
        },
      ],
    },
    skills: {
      kicker: "Skills",
      title: "A complete foundation for building digital products.",
      aside:
        "Continuous learning, organization, and attention to detail are part of my process.",
      groups: [
        {
          number: "01",
          title: "Front-end",
          description:
            "Responsive, accessible, and organized interfaces for different devices.",
          items: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
        },
        {
          number: "02",
          title: "Back-end",
          description:
            "Business rules, integrations, validations, and solution-oriented development.",
          items: ["PHP", "Python", "Programming logic", "APIs"],
        },
        {
          number: "03",
          title: "Data and tools",
          description:
            "Data structure, version control, and collaboration throughout development.",
          items: ["MySQL", "SQL", "Git", "GitHub", "Figma", "VS Code"],
        },
      ],
    },
    experience: {
      kicker: "Experience and education",
      title: "Technical knowledge connected to professional practice.",
      professional: "Professional experience",
      adminTitle: "Administrative Assistant",
      adminCompany: "Crespo e Caires Advocacia e Associados",
      adminDescription:
        "Customer service, organization of documents and case records, schedule management, spreadsheet preparation, and support for the legal team's administrative routines.",
      internshipMeta: "2025 · 200 hours",
      internshipTitle: "Supervised IT Internship",
      internshipPlace: "UNASP - Hortolândia",
      internshipDescription:
        "Web-system development and maintenance, testing, technical documentation, and collaboration on real-world projects.",
      educationLabel: "Education",
      inProgress: "In progress",
      degree: "Systems Analysis and Development",
      university: "Adventist University Center of São Paulo - UNASP",
      technicalYear: "2025",
      technical: "Information Technology Technician",
      technicalSchool: "High School with an Integrated Technical Program - UNASP",
    },
    contact: {
      kicker: "Let's talk?",
      title: "Available for opportunities and new challenges.",
      intro:
        "If my profile fits your team or project, get in touch. I would be glad to connect.",
      portfolioAction: "Contact through portfolio",
      linkedInAction: "View LinkedIn",
      githubAction: "View GitHub",
      website: "Portfolio",
      location: "Location",
      locationValue: "Hortolândia, São Paulo, Brazil",
    },
    footerRole: "Full Stack Developer",
    copyright: "© 2026 Kevin Santana. All rights reserved.",
  },
  es: {
    locale: "es",
    languageMenu: "Seleccionar idioma",
    themeToLight: "Activar modo claro",
    themeToDark: "Activar modo oscuro",
    newTab: "Se abre en una pestaña nueva",
    skip: "Ir al contenido",
    brandHome: "Volver al inicio",
    navigationLabel: "Navegación principal",
    mobileMenu: "Abrir menú",
    mobileNavigation: "Navegación móvil",
    navigation: [
      { label: "Sobre mí", href: "#sobre" },
      { label: "Proyectos", href: "#projetos" },
      { label: "Laboratorio", href: "#laboratorio" },
      { label: "Habilidades", href: "#habilidades" },
      { label: "Experiencia", href: "#experiencia" },
      { label: "Contacto", href: "#contato" },
    ],
    hero: {
      eyebrow: "Portafolio",
      role: "Desarrollador Full Stack",
      intro:
        "Creo soluciones digitales eficientes, bien estructuradas y preparadas para evolucionar.",
      projects: "Ver proyectos",
      resumePt: "CV en portugués",
      resumeEn: "Resume en inglés",
      portraitLabel: "Retrato de Kevin Santana",
      portraitAlt: "Kevin Santana con traje negro en un retrato profesional",
      development: "Desarrollo",
      backend: "Back-end",
      location: "Hortolândia, SP, Brasil",
      technologyLabel: "Tecnologías principales",
      terminalLabel:
        "Terminal de computadora tridimensional interactivo que responde al cursor y al desplazamiento",
    },
    about: {
      kicker: "Sobre mí",
      title: "Tecnología con propósito, claridad y evolución constante.",
      paragraphs: [
        "Soy Desarrollador Full Stack, con formación técnica en Tecnología de la Información y actualmente curso Análisis y Desarrollo de Sistemas en UNASP.",
        "Mi experiencia combina desarrollo web, lógica de negocio, bases de datos y trabajo en equipo. ImunoLink fue desarrollado por un equipo de dos personas: trabajé principalmente en el back-end y también contribuí al front-end en etapas clave, ampliando mi experiencia full stack.",
      ],
      highlightsLabel: "Aspectos profesionales destacados",
      stats: [
        { value: "200h", label: "de prácticas supervisadas en TI" },
        { value: "Full Stack", label: "base amplia con enfoque en back-end" },
        { value: "Inglés", label: "intermedio para lectura técnica" },
      ],
    },
    projects: {
      kicker: "Proyectos seleccionados",
      title: "Soluciones que convierten el conocimiento en experiencia real.",
      count: "04 proyectos publicados",
      imunolink: {
        meta: "Proyecto destacado",
        year: "Equipo de 2 · 2025",
        subtitle: "Plataforma digital para gestionar vacunas y perfiles de salud.",
        description:
          "Desarrollado por un equipo de dos personas. Mi compañero se concentró en el front-end, mientras yo fui responsable principalmente del back-end: reglas de negocio, estructura de la base de datos, integraciones, validaciones y seguridad de la información. También contribuí a etapas del front-end, asumiendo una función full stack en momentos clave del proyecto.",
        technologiesLabel: "Tecnologías de ImunoLink",
        link: "Abrir proyecto",
      },
      psagenda: {
        meta: "Producto desarrollado para cliente",
        year: "2026",
        subtitle:
          "Agenda digital creada a medida para convertir una necesidad real en una rutina más organizada.",
        description:
          "Proyecto real desarrollado para un cliente, centrado en la organización de citas, una experiencia adaptable y la persistencia segura de datos con Supabase. El código y el entorno administrativo permanecen privados para proteger el trabajo contratado y la información del cliente.",
        technologiesLabel: "Tecnologías y características de PS Agenda",
        privacyTag: "Proyecto privado",
        link: "Abrir PS Agenda",
        overview: "AGENDA DE HOY",
        greeting: "Una rutina organizada en un solo lugar.",
        appointments: "PROGRAMADOS",
        completed: "COMPLETADOS",
        upcoming: "PRÓXIMOS",
        clientProject: "PROYECTO PARA CLIENTE",
        protectedData: "Datos y código protegidos",
      },
      prismivo: {
        meta: "Producto SaaS Full Stack",
        year: "2026",
        subtitle:
          "Plataforma B2B para reunir clientes, proyectos, entregas y decisiones en una sola operación.",
        description:
          "Producto digital completo con autenticación, PostgreSQL, aislamiento por organización, roles y permisos, archivos privados, aprobaciones, soporte, contenido, suscripciones demostrativas, PWA, accesibilidad y pruebas automatizadas. Su arquitectura está preparada para evolución continua y publicación independiente.",
        technologiesLabel: "Tecnologías de Prismivo",
        link: "Abrir Prismivo",
        repository: "Ver código en GitHub",
        dashboard: "OPERACIÓN CENTRAL",
        activeProjects: "PROYECTOS ACTIVOS",
        approvals: "APROBACIONES",
        team: "EQUIPO",
        protectedData: "DATOS PROTEGIDOS",
        organizationIsolation: "Aislamiento por organización",
      },
      bruna: {
        meta: "Portafolio desarrollado para cliente",
        year: "2026",
        subtitle:
          "Presencia profesional para una Técnica en Enfermería, con identidad clínica, accesibilidad y currículum descargable.",
        description:
          "Proyecto entregado a una cliente real para organizar formación, experiencia, prácticas, certificaciones y contacto en una presentación pública adaptable. Desarrollé la dirección visual, la arquitectura de contenido, el SEO, la vista previa social, animaciones sutiles, accesibilidad, dominio propio y un currículum optimizado. El código permanece privado para proteger el trabajo contratado y los archivos de la cliente.",
        technologiesLabel: "Tecnologías y características del portafolio de Bruna",
        privacyTag: "Código privado",
        responsiveTag: "Diseño adaptable",
        accessibilityTag: "Accesibilidad",
        link: "Abrir portafolio",
        role: "Técnica en Enfermería",
        portfolioLabel: "PORTAFOLIO PROFESIONAL",
        visualTitle: "Cuidado que se transforma en presencia profesional.",
        education: "FORMACIÓN",
        educationValue: "Técnico + Grado",
        experience: "EXPERIENCIA",
        experienceValue: "Atención y prácticas",
        curriculum: "CURRÍCULUM PROFESIONAL",
        download: "Descarga disponible",
      },
    },
    laboratory: {
      kicker: "Laboratorio",
      title: "Estudios que se transforman en productos.",
      intro:
        "Un espacio transparente para registrar ideas, desarrollar competencias y definir el próximo desafío técnico de cada estudio.",
      nextStep: "Próximo paso",
      technologyPlansLabel: "Tecnologías planificadas",
      technologyStudiesLabel: "Tecnologías estudiadas",
      cards: [
        {
          status: "Concepto en estudio",
          area: "Autenticación y bases de datos",
          title: "NexoDesk",
          description:
            "Mesa de ayuda para equipos con prioridades, responsables y seguimiento de SLA, diseñada para practicar autenticación, permisos y separación segura de datos.",
          tags: ["Next.js", "PostgreSQL", "Login propio"],
          next: "Mapear entidades, perfiles y permisos",
          tone: "default",
        },
        {
          status: "Investigación aplicada",
          area: "Paneles e informes",
          title: "Dashboard Lab",
          description:
            "Estudio de métricas, filtros, visualización de datos e informes exportables para apoyar decisiones claras.",
          tags: ["TypeScript", "SQL", "CSV"],
          next: "Comparar métricas y patrones de visualización",
          tone: "violet",
        },
        {
          status: "Investigación técnica",
          area: "APIs e integraciones",
          title: "Brasil Data Hub",
          description:
            "Experimento de integración y normalización de datos públicos para consultas rápidas mediante una API unificada y resiliente.",
          tags: ["REST", "Validación", "Caché"],
          next: "Validar fuentes públicas y contratos de API",
          tone: "violet",
        },
        {
          status: "Práctica continua",
          area: "Interfaz y experiencia",
          title: "Motion UI Lab",
          description:
            "Colección de componentes responsivos, microinteracciones discretas y patrones accesibles para productos digitales.",
          tags: ["React", "CSS", "Accesibilidad"],
          next: "Consolidar componentes y pruebas de teclado",
          tone: "cyan",
        },
      ],
    },
    knowledge: {
      kicker: "Fuentes de estudio",
      title: "Biblioteca técnica del laboratorio.",
      intro:
        "Documentación y plataformas oficiales seleccionadas para orientar mis estudios, consultar conceptos y validar decisiones durante el desarrollo.",
      official: "Fuente oficial",
      consult: "Consultar referencia",
      openLabel: "Abrir {title} en una pestaña nueva",
      topicsLabel: "Temas de {title}",
      resources: [
        {
          area: "Fundamentos web",
          title: "MDN Web Docs",
          mark: "WEB",
          description:
            "Referencia para estudiar HTML, CSS, JavaScript, accesibilidad y APIs web.",
          topics: ["HTML", "CSS", "JavaScript"],
          href: "https://developer.mozilla.org/es/docs/Web",
        },
        {
          area: "Back-end",
          title: "Manual de PHP",
          mark: "PHP",
          description:
            "Documentación oficial del lenguaje con funciones, ejemplos, bases de datos y buenas prácticas.",
          topics: ["PHP", "PDO", "APIs"],
          href: "https://www.php.net/manual/es/",
        },
        {
          area: "Programación",
          title: "Python Docs",
          mark: "PY",
          description:
            "Documentación oficial para profundizar en sintaxis, biblioteca estándar y desarrollo con Python.",
          topics: ["Python", "Lógica", "Bibliotecas"],
          href: "https://docs.python.org/es/3/",
        },
        {
          area: "Bases de datos",
          title: "MySQL Reference",
          mark: "SQL",
          description:
            "Referencia técnica para consultas SQL, modelado, administración, rendimiento y seguridad de datos.",
          topics: ["MySQL", "SQL", "Modelado"],
          href: "https://dev.mysql.com/doc/refman/8.4/en/",
        },
        {
          area: "Control de versiones",
          title: "GitHub Skills",
          mark: "GIT",
          description:
            "Ejercicios interactivos para practicar Git, GitHub, colaboración y flujos de desarrollo.",
          topics: ["Git", "GitHub", "Colaboración"],
          href: "https://skills.github.com/",
        },
        {
          area: "Seguridad",
          title: "OWASP Top 10",
          mark: "SEC",
          description:
            "Referencia sobre los riesgos más críticos en aplicaciones web y cómo reducirlos.",
          topics: ["Seguridad web", "Riesgos", "Buenas prácticas"],
          href: "https://owasp.org/www-project-top-ten/",
        },
      ],
    },
    skills: {
      kicker: "Habilidades",
      title: "Una base completa para crear productos digitales.",
      aside:
        "El aprendizaje continuo, la organización y la atención al detalle forman parte de mi proceso.",
      groups: [
        {
          number: "01",
          title: "Front-end",
          description:
            "Interfaces responsivas, accesibles y organizadas para distintos dispositivos.",
          items: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
        },
        {
          number: "02",
          title: "Back-end",
          description:
            "Reglas de negocio, integraciones, validaciones y desarrollo orientado a soluciones.",
          items: ["PHP", "Python", "Lógica de programación", "APIs"],
        },
        {
          number: "03",
          title: "Datos y herramientas",
          description:
            "Estructuración de datos, control de versiones y colaboración durante el desarrollo.",
          items: ["MySQL", "SQL", "Git", "GitHub", "Figma", "VS Code"],
        },
      ],
    },
    experience: {
      kicker: "Experiencia y formación",
      title: "Conocimiento técnico conectado con la práctica profesional.",
      professional: "Experiencia profesional",
      adminTitle: "Asistente Administrativo",
      adminCompany: "Crespo e Caires Advocacia e Associados",
      adminDescription:
        "Atención al cliente, organización de documentos y expedientes, gestión de agendas, elaboración de hojas de cálculo y apoyo a las rutinas administrativas del equipo jurídico.",
      internshipMeta: "2025 · 200 horas",
      internshipTitle: "Prácticas Supervisadas en TI",
      internshipPlace: "UNASP - Hortolândia",
      internshipDescription:
        "Desarrollo y mantenimiento de sistemas web, pruebas, documentación técnica y colaboración en proyectos reales.",
      educationLabel: "Formación académica",
      inProgress: "En curso",
      degree: "Análisis y Desarrollo de Sistemas",
      university: "Centro Universitario Adventista de São Paulo - UNASP",
      technicalYear: "2025",
      technical: "Técnico en Tecnología de la Información",
      technicalSchool: "Secundaria con programa técnico integrado - UNASP",
    },
    contact: {
      kicker: "¿Hablamos?",
      title: "Disponible para oportunidades y nuevos desafíos.",
      intro:
        "Si mi perfil encaja con tu equipo o proyecto, ponte en contacto. Será un placer conversar.",
      portfolioAction: "Contacto por el portafolio",
      linkedInAction: "Ver LinkedIn",
      githubAction: "Ver GitHub",
      website: "Portafolio",
      location: "Ubicación",
      locationValue: "Hortolândia, São Paulo, Brasil",
    },
    footerRole: "Desarrollador Full Stack",
    copyright: "© 2026 Kevin Santana. Todos los derechos reservados.",
  },
} as const;
