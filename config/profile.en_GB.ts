import { Resume } from '../src/app/core/models/resume.models';

export const PROFILE_CONFIG: Resume = {
  profilePicturePath: 'profile-picture.png',
  name: 'Yankel Scialom',
  title: 'Delivery Manager',
  summary: `
    Engineer passionate about technology, coding, and maths, but also about
    the performance of the human approach: "how to efficiently build a valued
    and useful solution as an organisation, a team, or an individual?"`,
  email: 'yankel-pro@scialom.org',
  phone: '+336 87 63 83 13',
  website: 'scialom.org/cv',
  location: 'Châtillon, Île-de-France, France',
  birthDate: '1987-04-24',
  nationality: 'French',
  drivingLicense: 'Driving Licence (Class B)',
  languages: [
    { name: 'French', level: 5 },
    { name: 'English', level: 4 },
    { name: 'German', level: 1 },
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
  hobbies: ['Technical Watch', 'Paragliding', 'Badminton', 'Hiking'],
  aboutDescription: `
# About Me

Passionate about computer science from a very young age, I have always sought
to understand how things work. My career has led me to work on critical and
complex systems, where rigour and method are paramount.

Today, I thrive in the management of organisations and the improvement of
development processes, while keeping a foot in the technical side.`,
  personalProjects: [
    {
      name: 'PinaNas',
      description: 'Cloud services, safely hosted at home.',
      url: 'https://github.com/yscialom/pinanas',
      technologies: ['Homelab', 'Ansible', 'Docker'],
      startDate: '2020-04',
    },
    {
      name: 'CrispCV',
      description: 'The project you are looking at right now!',
      url: 'https://github.com/yscialom/crispcv',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      startDate: '2025-11',
      endDate: '2026-01',
    },
    {
      name: 'ysc::matrix',
      description: 'A header-only C++20 template library providing a general-purpose multi-dimensional container with static dimensions.',
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
      location: 'Paris, France',
      startDate: '2023-05',
      endDate: 'Present',
      missions: [
        {
          title: 'Practice Leader Software Engineering',
          description: `
- Guarantor of **development expertise** within the company.
- Steering of internal projects.
- Guarantor of recruitment evaluation & requirements, **building a recruitment process**
    based on objective assessment of candidates' technical or functional skills,
    consultant posture, and soft skills.
- Coordination of expert communities.
- Consultant training & career support.`,
        },
        {
          title: 'Management',
          description: `
- Coordination of the manager community.
- Management of consultants and consultant-managers.`,
        },
        {
          title: 'Transformation Support',
          description: `
- Internal merger of Capfi entities.
- Transparent communication and value-creating collaboration between experts,
    managers, recruitment, and sales.
- Internal IT tooling projects.`,
        },
      ],
      keywords: [
        'Dev Expertise',
        'Project Manager',
        'Management',
        'Recruitment',
        'Transformation',
        'Strategy',
      ],
    },
    {
      title: 'Release Manager',
      company: 'Crédit Agricole CIB',
      location: 'Montrouge, Île-de-France, France',
      startDate: '2023-06',
      endDate: '2025-03',
      missions: [
        {
          title: 'Orchestrade Release Manager for CACIB and its related software and services.',
          description: `
- **Release strategy**: goal of maximum quality & minimal time-to-market.
- **Culture**: promoting accountability by involving everyone in decision-making.
- **Process**: from development to deployment in accordance with our strategy and culture.
- **Coordination**: synchronisation and support of 16 development teams.
- **Prioritisation**: stability vs. urgency vs. special cases and projects.`,
        },
      ],
      keywords: ['Release Management', 'Orchestrade', 'Management', 'Transformation', 'Strategy'],
    },
    {
      title: 'Project Manager',
      company: 'Société Générale',
      location: 'Paris area',
      startDate: '2022-05',
      endDate: '2023-05',
      missions: [
        {
          title: 'SOC Strategy Transformation',
          description: `
Programme Director for projects arising from the redefinition of
Société Générale's SOC strategy.
- Opportunity studies.
- Scoping, launching, monitoring, and closing of transformation projects.
- Tenders / RFPs.
- Cross-functional team management.
- Budget management (millions of euros for 2023).`,
        },
      ],
      keywords: ['Project Manager', 'SOC', 'Strategy', 'Budget', 'Cybersecurity'],
    },
    {
      title: 'Project Manager, Agile Master',
      company: 'Natixis Corporate & Investment Banking',
      location: 'Paris, France',
      startDate: '2019-05',
      endDate: '2022-04',
      missions: [
        {
          title: 'Context',
          description: `
As part of the FRTB regulatory project, Natixis Global Markets is revamping its pricing
services and breaking down existing silos. The SUNRISE project is a front-to-risk
platform (stress tests, VAR, US Fed requirements) whose core is the _Pricing Services_
component, which I joined.`,
        },
        {
          title: 'Technical Project Manager',
          description: `
- **Release Management**: planning, monitoring, communication.
- **Infrastructure creation and evolution**: prioritisation, planning & monitoring of
    developments.
- Management of **schedules**, **risks**, and escalation of **programme alerts**.
- Implementation of a **new distributed computing grid technology** at Natixis:
    GridGain.
- **Synchronisation** of the Pricing Services team with: infrastructure, operations,
    security, and architecture teams...
- **Management and planning of developments** related to data, software, and
    infrastructure security: DMZ, Illumio, Disaster Recovery Plan, awareness
    training, and monitoring of developers regarding source code vulnerabilities...`,
        },
        {
          title: 'DevOps Engineer',
          description:
            'Building a complete analysis, build, deployment, operation, and monitoring pipeline.',
        },
        {
          title: 'Scrum Master',
          description: `
- Compliance with SAFe and Scrum: PI Planning, Sprint planning, retrospectives.
- Onboarding and follow-up of new members.
- Planning and steering of demos.`,
        },
      ],
      keywords: ['Project Manager', 'SAFe', 'Scrum', 'DevOps', 'Capital Markets'],
    },
    {
      title: 'Tech Lead, Scrum Master',
      company: 'Ingenico',
      location: 'Paris, France',
      startDate: '2018-03',
      endDate: '2019-05',
      missions: [
        {
          title: 'Context',
          description: `
I was commissioned at Ingenico to support the department's technical and
methodological transformation: agile kickoff & technological modernisation.`,
        },
        {
          title: 'Scrum Master',
          description: `
- **Team Scrum Kickoff**.
- Awareness and follow-up of members, PO, and management.
- Supporting the PO with story slicing and documentation.`,
        },
        {
          title: 'Tech Lead',
          description: `
- Tool modernisation:
  - svn to git,
  - C++98 to C++14,
  - Redhat 5 to 7.
- Implementation of CI/CD (GitLab & CMake).
- Automated tests (behave).
- Definition of the workflow from user story creation to production deployment.
- Definition of acceptance criteria for code reviews and functional tests.
- Training teams in C++14.
- Continuous integration & continuous deployment of applications.
- Adoption of Docker to facilitate testing, automation, and reproducibility.`,
        },
      ],
      keywords: ['Scrum', 'DevOps', 'C++', 'PostgreSQL', 'Docker'],
    },
    {
      title: 'Industrial C++ Developer, Paylib / Wero project',
      company: 'STET',
      location: 'Puteaux, La Défense',
      startDate: '2015-01',
      endDate: '2018-02',
      missions: [
        {
          title: 'Apple Pay & Paylib / Wero',
          description:
            'Solutions designed from scratch. 99.999% SLA. Hot-swappable version upgrades. PCI-DSS security.',
        },
        {
          title: 'Design & Development',
          description: `
- Integration of Apple Pay into the French Carte Bancaire system.
- Technical design.
- C++98 development of the TSP (Secure Coding, robustness, TCP, multithreading).
- Profiling (performance, memory leaks).
- End-to-end testing.
- Support and training.`,
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
          title: 'Project Manager',
          description:
            'Sophis Lua Toolkit: extension allowing column definition in Lua. Automatic diagnostic tool.',
        },
        {
          title: 'Developer',
          description: `
- Sophis Toolkit: reverse-engineering, optimisation, new columns.
- Sophis: import/export, scripting language, performance attribution.
- Satellite developments (reconciliation, automation, reports).`,
        },
      ],
      keywords: ['Linux', 'C++', 'C', 'PostgreSQL', 'Sophis', 'Lua', 'Capital Markets'],
    },
    {
      title: 'Software Design Engineer',
      company: 'Thales Raytheon Systems',
      location: 'Massy',
      startDate: '2013-05',
      endDate: '2014-07',
      missions: [
        {
          title: 'C++ & Java Software Developer',
          description: `
- Design, development, and integration of HMI and communication functionalities.
- Implementation of multi-platform testing procedures. Technical issue tracking.`,
        },
        {
          title: 'Service Centre Manager',
          description:
            'Assistant to the Project Director. Technical management of quotes and client billing.',
        },
      ],
      keywords: ['C++', 'Java', 'Linux', 'LPM', 'HMI'],
    },
    {
      title: 'Embedded Systems Engineer Intern',
      company: 'SYSNAV',
      location: 'Vernon, Eure',
      startDate: '2012-01',
      endDate: '2012-08',
      missions: [
        {
          title: 'HAL Design & Development',
          description:
            'Renesas microcontroller configuration. Protocols (UART, SPI, USB). DMA, RAM, ALU.',
        },
        {
          title: 'Real-time OS',
          description:
            'Design & development of a real-time OS: scheduler, memory emulation, I/O virtualisation.',
        },
        {
          title: 'Porting',
          description: 'Porting the API to Windows and Linux. Documentation.',
        },
      ],
      keywords: ['C', 'Embedded', 'Real-time'],
    },
    {
      title: 'Software Developer Intern',
      company: 'Thales Optronique SA',
      location: 'Élancourt, France',
      startDate: '2009-07',
      endDate: '2010-02',
      missions: [
        {
          title: 'HMI Development',
          description:
            'Adding features for drone management (multilingual, video, mapping). Ergonomic redesign.',
        },
        {
          title: 'DTM Library',
          description:
            'Digital Terrain Model management (SRTM, DTED). Shared storage. 3D calculation.',
        },
        {
          title: 'Miscellaneous',
          description: 'Real-time diagnostic tool. Alert server. Git implementation.',
        },
      ],
      keywords: ['C', 'OCaml', 'HMI', 'Mapping'],
    },
  ],
  educations: [
    {
      degree: 'Engineering Degree, Mobile Technologies and Embedded Systems',
      institution: 'University of Technology of Troyes',
      location: 'Troyes, France',
      startDate: '2006',
      endDate: '2012',
      description: '_minor in entrepreneurship and administrative law_',
    },
    {
      degree: 'Scientific Baccalaureate, Mathematics option',
      institution: 'Lycée Blaise Cendrars',
      location: 'Sevran, Seine-Saint-Denis, France',
      startDate: '2005',
      endDate: '2005',
      description: '_with honours_',
    },
    {
      degree: 'Physics (Continuing Studies)',
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
      name: 'TOSCANE Path - Support for team transformation',
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
    { name: 'French', level: 5 },
    { name: 'English', level: 5 },
    { name: 'German', level: 2 },
  ],
};
