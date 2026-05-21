import { Resume } from '../src/app/core/models/resume.models';

export const PROFILE_CONFIG: Resume = {
  profilePicturePath: 'profile-picture.png',
  name: 'Yankel Scialom',
  title: 'Delivery Manager',
  summary: `
    Ingenieur mit Leidenschaft für Technologie, Programmierung und Mathematik, aber auch für
    die Leistungsfähigkeit des menschlichen Ansatzes: „Wie lässt sich als Organisation, Team
    oder Einzelperson effizient eine wertvolle und nützliche Lösung entwickeln?“`,
  email: 'yankel-pro@scialom.org',
  phone: '+336 87 63 83 13',
  website: 'scialom.org/cv',
  location: 'Châtillon, Île-de-France, Frankreich',
  birthDate: '1987-04-24',
  nationality: 'Französisch',
  drivingLicense: 'Führerschein (Klasse B)',
  languages: [
    { name: 'Französisch', level: 5 },
    { name: 'Englisch', level: 4 },
    { name: 'Deutsch', level: 1 },
  ],
  socialLinks: [
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yankel-scialom/',
      username: 'yankel-scialom',
      icon: 'fab fa-linkedin',
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/yscialom',
      username: 'yscialom',
      icon: 'fab fa-github',
    },
  ],
  volunteering: [],
  hobbies: ['Technologie-Beobachtung', 'Gleitschirmfliegen', 'Badminton', 'Wandern'],
  aboutDescription: `
# Über mich

Schon in jungen Jahren von der Informatik fasziniert, habe ich immer versucht
    zu verstehen, wie die Dinge funktionieren. Mein Werdegang hat mich dazu geführt, an kritischen und
    komplexen Systemen zu arbeiten, bei denen Genauigkeit und Methode an erster Stelle stehen.

Heute gehe ich in der Leitung von Organisationen und der Verbesserung von
    Entwicklungsprozessen auf, behalte dabei aber immer einen Fuß in der Technik.`,
  personalProjects: [
    {
      name: 'PinaNas',
      description: 'Cloud-Dienste, sicher zu Hause gehostet.',
      url: 'https://github.com/yscialom/pinanas',
      technologies: ['Homelab', 'Ansible', 'Docker'],
      startDate: '2020-04',
    },
    {
      name: 'CrispCV',
      description: 'Das Projekt, das Sie gerade betrachten!',
      url: 'https://github.com/yscialom/crispcv',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      startDate: '2025-11',
      endDate: '2026-01',
    },
    {
      name: 'ysc::matrix',
      description: 'Eine Header-only-C++20-Template-Bibliothek, die einen universellen mehrdimensionalen Container mit statischen Dimensionen bereitstellt.',
      url: 'https://github.com/yscialom/matrix',
      technologies: ['C++', 'C++20'],
      startDate: '2026-03',
      endDate: '2026-06',
    },
  ],

  experiences: [
    {
      title: 'Practice Leader Dev & Delivery Manager',
      company: 'Capfi',
      location: 'Paris, Frankreich',
      startDate: '2023-05',
      endDate: 'Present',
      missions: [
        {
          title: 'Practice Leader Software Engineering',
          description: `
- Zuständig für **Entwicklungsexpertise** im Unternehmen.
- Steuerung interner Projekte.
- Verantwortlich für die Rekrutierungsbewertung und -anforderungen, **Aufbau eines Rekrutierungsprozesses**
    basierend auf der objektiven Bewertung der technischen oder funktionalen Fähigkeiten der Kandidaten,
    Beraterhaltung und Soft Skills.
- Koordination von Experten-Communities.
- Ausbildung und Karriereunterstützung für Berater.`,
        },
        {
          title: 'Management',
          description: `
- Koordination der Manager-Community.
- Management von Beratern und Berater-Managern.`,
        },
        {
          title: 'Unterstützung bei der Transformation',
          description: `
- Interne Fusion von Capfi-Einheiten.
- Transparente Kommunikation und wertschöpfende Zusammenarbeit zwischen Experten,
    Managern, Rekrutierung und Vertrieb.
- Interne IT-Tooling-Projekte.`,
        },
      ],
      keywords: [
        'Dev-Expertise',
        'Projektleiter',
        'Management',
        'Rekrutierung',
        'Transformation',
        'Strategie',
      ],
    },
    {
      title: 'Release Manager',
      company: 'Crédit Agricole CIB',
      location: 'Montrouge, Île-de-France, Frankreich',
      startDate: '2023-06',
      endDate: '2025-03',
      missions: [
        {
          title:
            'Orchestrade Release Manager für CACIB und die zugehörige Software und Dienstleistungen.',
          description: `
- **Release-Strategie**: Ziel maximaler Qualität und minimaler Time-to-Market.
- **Kultur**: Förderung der Eigenverantwortung durch Einbeziehung aller Beteiligten in Entscheidungsprozesse.
- **Prozess**: Von der Entwicklung bis zum Deployment in Übereinstimmung mit unserer Strategie und Kultur.
- **Koordination**: Synchronisierung und Unterstützung von 16 Entwicklungsteams.
- **Priorisierung**: Stabilität vs. Dringlichkeit vs. Sonderfälle und Projekte.`,
        },
      ],
      keywords: ['Release Management', 'Orchestrade', 'Management', 'Transformation', 'Strategie'],
    },
    {
      title: 'Project Manager',
      company: 'Société Générale',
      location: 'Großraum Paris',
      startDate: '2022-05',
      endDate: '2023-05',
      missions: [
        {
          title: 'Transformation der SOC-Strategie',
          description: `
Programmdirektor für Projekte aus der Neudefinition der
SOC-Strategie der Société Générale.
- Machbarkeitsstudien.
- Scoping, Start, Überwachung und Abschluss von Transformationsprojekten.
- Ausschreibungen / RFPs.
- Funktionsübergreifendes Teammanagement.
- Budgetmanagement (Millionen Euro für 2023).`,
        },
      ],
      keywords: ['Projektmanager', 'SOC', 'Strategie', 'Budget', 'Cybersecurity'],
    },
    {
      title: 'Project Manager, Agile Master',
      company: 'Natixis Corporate & Investment Banking',
      location: 'Paris, Frankreich',
      startDate: '2019-05',
      endDate: '2022-04',
      missions: [
        {
          title: 'Kontext',
          description: `
Im Rahmen des FRTB-Regulierungsprojekts überarbeitet Natixis Global Markets seine Pricing-Services
und bricht bestehende Silos auf. Das SUNRISE-Projekt ist eine Front-to-Risk-Plattform
(Stresstests, VAR, US-Fed-Anforderungen), deren Herzstück die Komponente _Pricing Services_ ist,
der ich mich angeschlossen habe.`,
        },
        {
          title: 'Technischer Projektmanager',
          description: `
- **Release Management**: Planung, Überwachung, Kommunikation.
- **Aufbau und Weiterentwicklung der Infrastruktur**: Priorisierung, Planung und Überwachung der
    Entwicklungen.
- Management von **Zeitplänen**, **Risiken** und Eskalation von **Programmalarmen**.
- Implementierung einer **neuen Distributed-Computing-Grid-Technologie** bei Natixis:
    GridGain.
- **Synchronisation** des Pricing Services-Teams mit: Infrastruktur-, Betriebs-,
    Sicherheits- und Architekturteams...
- **Management und Planung von Entwicklungen** im Zusammenhang mit Daten-, Software- und
    Infrastruktursicherheit: DMZ, Illumio, Disaster Recovery Plan, Sensibilisierungsschulungen
    und Überwachung der Entwickler hinsichtlich Schwachstellen im Quellcode...`,
        },
        {
          title: 'DevOps-Ingenieur',
          description:
            'Aufbau einer vollständigen Analyse-, Build-, Deployment-, Betriebs- und Monitoring-Pipeline.',
        },
        {
          title: 'Scrum Master',
          description: `
- Einhaltung von SAFe und Scrum: PI Planning, Sprint Planung, Retrospektiven.
- Onboarding und Nachverfolgung neuer Mitglieder.
- Planung und Steuerung von Demos.`,
        },
      ],
      keywords: ['Projektmanager', 'SAFe', 'Scrum', 'DevOps', 'Kapitalmärkte'],
    },
    {
      title: 'Tech Lead, Scrum Master',
      company: 'Ingenico',
      location: 'Paris, Frankreich',
      startDate: '2018-03',
      endDate: '2019-05',
      missions: [
        {
          title: 'Kontext',
          description: `
Ich wurde bei Ingenico beauftragt, die technische und methodische Transformation der Abteilung
zu unterstützen: Agiler Kickoff & technologische Modernisierung.`,
        },
        {
          title: 'Scrum Master',
          description: `
- **Team Scrum Kickoff**.
- Sensibilisierung und Nachverfolgung von Mitgliedern, PO und Management.
- Unterstützung des PO bei Story Slicing und Dokumentation.`,
        },
        {
          title: 'Tech Lead',
          description: `
- Tool-Modernisierung:
  - svn zu git,
  - C++98 zu C++14,
  - Redhat 5 zu 7.
- Implementierung von CI/CD (GitLab & CMake).
- Automatisierte Tests (behave).
- Definition des Workflows von der Erstellung der User Story bis zum Deployment in die Produktion.
- Definition von Akzeptanzkriterien für Code-Reviews und Funktionstests.
- Schulung der Teams in C++14.
- Continuous Integration & Continuous Deployment von Anwendungen.
- Einführung von Docker zur Erleichterung von Tests, Automatisierung und Reproduzierbarkeit.`,
        },
      ],
      keywords: ['Scrum', 'DevOps', 'C++', 'PostgreSQL', 'Docker'],
    },
    {
      title: 'Industrieller C++-Entwickler, Projekt Paylib / Wero',
      company: 'STET',
      location: 'Puteaux, La Défense',
      startDate: '2015-01',
      endDate: '2018-02',
      missions: [
        {
          title: 'Apple Pay & Paylib / Wero',
          description:
            'Lösungen von Grund auf neu entwickelt. 99,999 % SLA. Hot-Swap-Versionsupgrades. PCI-DSS-Sicherheit.',
        },
        {
          title: 'Design & Entwicklung',
          description: `
- Integration von Apple Pay in das französische Carte Bancaire System.
- Technisches Design.
- C++98-Entwicklung des TSP (Secure Coding, Robustheit, TCP, Multithreading).
- Profiling (Performance, Memory Leaks).
- End-to-end-Tests.
- Support und Training.`,
        },
      ],
      keywords: ['C++', 'PostgreSQL', 'TCP', 'Multithreading', 'Secure Coding', 'Linux'],
    },
    {
      title: 'Sophis Software Engineer',
      company: 'Tikehau Capital',
      location: 'Paris VIII',
      startDate: '2014-07',
      endDate: '2015-01',
      missions: [
        {
          title: 'Projektleiter',
          description:
            'Sophis Lua Toolkit: Erweiterung zur Spaltendefinition in Lua. Automatisches Diagnosetool.',
        },
        {
          title: 'Entwickler',
          description: `
- Sophis Toolkit: Reverse Engineering, Optimierung, neue Spalten.
- Sophis: Import/Export, Skriptsprache, Performance-Attribution.
- Satellitenentwicklungen (Reconciliation, Automatisierung, Reports).`,
        },
      ],
      keywords: ['Linux', 'C++', 'C', 'PostgreSQL', 'Sophis', 'Lua', 'Kapitalmärkte'],
    },
    {
      title: 'Software Design Engineer',
      company: 'Thales Raytheon Systems',
      location: 'Massy',
      startDate: '2013-05',
      endDate: '2014-07',
      missions: [
        {
          title: 'C++ & Java Software-Entwickler',
          description: `
- Design, Entwicklung und Integration von HMI- und Kommunikationsfunktionen.
- Implementierung von Multi-Plattform-Testverfahren. Nachverfolgung technischer Probleme.`,
        },
        {
          title: 'Service Center Manager',
          description:
            'Assistent des Projektdirektors. Technische Verwaltung von Angeboten und Kundenabrechnung.',
        },
      ],
      keywords: ['C++', 'Java', 'Linux', 'LPM', 'HMI'],
    },
    {
      title: 'Praktikant Ingenieur für eingebettete Systeme',
      company: 'SYSNAV',
      location: 'Vernon, Eure',
      startDate: '2012-01',
      endDate: '2012-08',
      missions: [
        {
          title: 'HAL Design & Entwicklung',
          description:
            'Konfiguration von Renesas-Mikrocontrollern. Protokolle (UART, SPI, USB). DMA, RAM, ALU.',
        },
        {
          title: 'Echtzeit-Betriebssystem',
          description:
            'Design und Entwicklung eines Echtzeit-Betriebssystems: Scheduler, Speicheremulation, E/A-Virtualisierung.',
        },
        {
          title: 'Portierung',
          description: 'Portierung der API auf Windows und Linux. Dokumentation.',
        },
      ],
      keywords: ['C', 'Eingebettete Systeme', 'Echtzeit'],
    },
    {
      title: 'Praktikant Software-Entwickler',
      company: 'Thales Optronique SA',
      location: 'Élancourt, Frankreich',
      startDate: '2009-07',
      endDate: '2010-02',
      missions: [
        {
          title: 'HMI-Entwicklung',
          description:
            'Hinzufügen von Funktionen für das Drohnenmanagement (mehrsprachig, Video, Kartierung). Ergonomische Neugestaltung.',
        },
        {
          title: 'DTM-Bibliothek',
          description:
            'Verwaltung digitaler Geländemodelle (SRTM, DTED). Gemeinsamer Speicher. 3D-Berechnung.',
        },
        {
          title: 'Verschiedenes',
          description: 'Echtzeit-Diagnosetool. Alarmserver. Git-Implementierung.',
        },
      ],
      keywords: ['C', 'OCaml', 'HMI', 'Kartierung'],
    },
  ],
  educations: [
    {
      degree: 'Diplom-Ingenieur, Mobile Technologien und eingebettete Systeme',
      institution: 'Universität für Technologie Troyes',
      location: 'Troyes, Frankreich',
      startDate: '2006',
      endDate: '2012',
      description: '_Nebenfach Unternehmertum und Verwaltungsrecht_',
    },
    {
      degree: 'Naturwissenschaftliches Abitur, Schwerpunkt Mathematik',
      institution: 'Lycée Blaise Cendrars',
      location: 'Sevran, Seine-Saint-Denis, Frankreich',
      startDate: '2005',
      endDate: '2005',
      description: '_mit Auszeichnung_',
    },
    {
      degree: 'Physik (Weiterführendes Studium)',
      institution: 'Stanford University',
      location: 'Online',
      startDate: '2012',
      endDate: '2013',
    },
  ],
  certifications: [
    {
      name: 'Microsoft Azure - AZ204',
      organization: 'Microsoft',
      date: '2024',
    },
    {
      name: 'SAFe Scrum Master',
      organization: 'SAFe',
      date: '2022',
    },
    {
      name: 'Professional Scrum Product Owner',
      organization: 'Scrum',
      date: '2022',
    },
    {
      name: 'PRINCE2 Practitioner - Agile Project Management',
      organization: 'PRINCE2',
      date: '2021',
    },
    {
      name: 'TOSCANE Path - Begleitung der Teamtransformation',
      organization: 'Toscane',
      date: '2020',
    },
    {
      name: 'Benevolent Communication',
      organization: 'Capfi',
      date: '2020',
    },
  ],
  skills: [
    { name: 'Französisch', level: 5 },
    { name: 'Englisch', level: 5 },
    { name: 'Deutsch', level: 2 },
  ],
};
