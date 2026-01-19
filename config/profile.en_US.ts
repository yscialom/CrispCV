import { Resume } from '../src/app/core/models/resume.models';

export const PROFILE_CONFIG: Resume = {
  profilePicturePath: 'profile-picture.png',
  name: 'Yankel Scialom',
  title: 'Delivery Manager',
  summary:
    "Engineer passionate about technology, code, mathematics, and the performance of the human approach: 'how to efficiently build a valued and useful solution as an organization, a team, and an individual?'",
  email: 'yankel-pro@scialom.org',
  phone: '+336 87 63 83 13',
  website: 'scialom.org/cv',
  location: 'Châtillon, Île-de-France, France',
  birthDate: '1987-09-21',
  nationality: 'French',
  drivingLicense: 'Driving License (B)',
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
  volunteering: [
    {
      organization: 'Example Org',
      role: 'Volunteer',
      startDate: '2020',
      endDate: 'Present',
      description: 'Helping out with things.',
    },
  ],
  hobbies: ['Coding', 'Reading', 'Running', 'Piano'],
  aboutDescription: `
# About Me

Passionate about computer science from a very young age, I have always sought to understand how things work.
My career has led me to work on critical and complex systems, where rigor and method are paramount.

Today, I thrive in team management and the improvement of development processes, while keeping a foot in the technical side.
`,
  personalProjects: [
    {
      name: 'PinaNas',
      description: 'Cloud services, safely hosted at home.',
      url: 'https://github.com/yscialom/pinanas',
      technologies: ['Homelab', 'Ansible', 'Docker'],
      startDate: '2020-04',
      endDate: 'Present',
    },
    {
      name: 'CrispCV',
      description: 'The project you are looking at right now!',
      url: 'https://github.com/yscialom/crispcv',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      startDate: '2025-11',
      endDate: 'Present',
    },
  ],

  experiences: [
    {
      title: 'Practice Leader Dev & Lead Delivery',
      company: 'Capfi',
      location: 'Paris, France',
      startDate: '2023-05',
      endDate: 'Present',
      missions: [
        {
          title: 'Practice Leader Software Engineering',
          description: `
- Responsible for **dev expertise** within the company.
- Responsible for evaluation & recruitment requirements, **building a recruitment process** based on objective assessment of candidates on their technical or functional skills, their consultant posture, and their soft skills.
- Animation of expert communities.
- Training of consultants & career support.`,
        },
        {
          title: 'Management',
          description: `
- Animation of the manager community.
- Management of consultants and consultant-managers.`,
        },
        {
          title: 'Transformation Support',
          description: `
- Internal merger of Capfi entities.
- Transparent communication and value-creating collaboration between experts, managers, recruitment, and business.
- Internal IT tooling projects.`,
        },
      ],
      keywords: ['Dev Expertise', 'Management', 'Recruitment', 'Transformation'],
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
- **Release strategy**: maximum quality & minimal time-to-market objective.
- **Culture**: promoting accountability by involving everyone in decision-making.
- **Process**: from development to deployment in alignment with our strategy and culture.
- **Coordination**: synchronization and support of 16 development teams.
- **Prioritization**: stability vs urgency vs special cases and projects.`,
        },
      ],
      keywords: ['Release Management', 'Orchestrade', 'Strategy', 'Culture', 'Process'],
    },
    {
      title: 'Project Manager',
      company: 'Société Générale',
      location: 'Paris area, France',
      startDate: '2022-05',
      endDate: '2023-05',
      missions: [
        {
          title: 'SOC Strategy Transformation',
          description: `Project Manager for projects resulting from the redefinition of Société Générale's SOC strategy.
- Opportunity studies.
- Scoping, launching, monitoring, and closing transformation projects.
- Tenders / RFPs.
- Transverse team management.
- Budget management (millions of euros for 2023).`,
        },
      ],
      keywords: ['Project Management', 'SOC', 'Strategy', 'Budget', 'Cybersecurity'],
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
          description:
            'As part of the FRTB regulatory project, Natixis Global Markets is revamping its pricing services and breaking down existing silos. The SUNRISE project is a front-to-risk platform (stress tests, VAR, US FED needs), with the _Pricing Services_ component—which I joined—at its core.',
        },
        {
          title: 'Technical Project Manager',
          description: `
- **Release Management**: planning, monitoring, communication.
- **Infrastructure creation and evolution**: prioritization, planning & monitoring of developments.
- Management of **schedules**, **risks**, and **program alerts**.
- Implementation of a **new distributed grid calculation technology** at Natixis: GridGain.
- **Synchronization** of the Pricing Services team with: infrastructure teams, operations teams, security teams, architecture teams, etc.
- **Management and planning of evolutions** related to data security, software, and infrastructure elements: DMZ, Illumio, Disaster Recovery Plan, awareness training & control of developers regarding source code security vulnerabilities...`,
        },
        {
          title: 'DevOps Engineer',
          description:
            'Construction of a complete analysis, build, deployment, operation, and monitoring chain.',
        },
        {
          title: 'Scrum Master',
          description: `
- Compliance with SAFe and Scrum: PI Planning, Sprint planning, retrospective.
- Onboarding and mentoring of new members.
- Planning and steering of demos.`,
        },
      ],
      keywords: ['SAFe', 'Scrum', 'DevOps'],
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
          description:
            "I was mandated at Ingenico to support the department's technical and methodological transformation: agile kickoff & technological modernization.",
        },
        {
          title: 'Scrum Master',
          description: `
- **Team Scrum Kickoff**.
- Awareness and monitoring of members, the PO, and management.
- Supporting the PO in slicing and documentation.`,
        },
        {
          title: 'Tech Lead',
          description: `
- Tool modernization:
  - svn to git,
  - C++98 to C++14,
  - Redhat 5 to 7.
- Implementation of CI/CD (GitLab & CMake).
- Automated tests (behave).
- Definition of the workflow from user story creation to production deployment.
- Definition of acceptance criteria for code reviews and functional tests.
- Training teams in C++14.
- Continuous integration & continuous deployment of applications.
- Adoption of Docker to facilitate tests, their automation & their reproducibility.`,
        },
      ],
      keywords: ['Scrum', 'DevOps', 'C++', 'PostgreSQL', 'Docker'],
    },
    {
      title: 'Industrial C++ Developer, Paylib / Wero project',
      company: 'STET',
      location: 'Puteaux, La Défense, France',
      startDate: '2015-01',
      endDate: '2018-02',
      missions: [
        {
          title: 'Apple Pay & Paylib / Wero',
          description:
            'Solutions designed from scratch. 99.999% SLA. Hot version upgrades. PCI-DSS security.',
        },
        {
          title: 'Design & Development',
          description: `
- Integration of Apple Pay into the French Carte Bancaire system.
- Technical design.
- C++98 development of the TSP (Secure Coding, robustness, TCP, multithreading).
- Profiling (performance, memory leaks).
- End-to-end tests.
- Support and training.`,
        },
      ],
      keywords: ['C++', 'PostgreSQL', 'TCP', 'Multithreading', 'Secure Coding', 'Redhat Linux'],
    },
    {
      title: 'Sophis Software Engineer',
      company: 'Tikehau Capital',
      location: 'Paris VIII, France',
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
          description:
            'Sophis Toolkit: reverse-engineering, optimization, new columns. Sophis: import/export, scripting language, performance attribution. Satellite developments (reconciliation, automation, reports).',
        },
      ],
      keywords: ['Redhat Linux', 'C++', 'C99', 'PostgreSQL', 'Sophis', 'Lua', 'Finance'],
    },
    {
      title: 'Software Design Engineer',
      company: 'Thales Raytheon Systems',
      location: 'Massy, France',
      startDate: '2013-05',
      endDate: '2014-07',
      missions: [
        {
          title: 'C++ & Java Software Developer',
          description:
            'Design, development, and integration of HMI and communication functionalities. Implementation of multi-platform test procedures. Technical fact tracking.',
        },
        {
          title: 'Service Center Manager',
          description:
            'Assistant to the Project Director. Technical management of quotes & client billing.',
        },
      ],
      keywords: ['C++', 'Java', 'CMake'],
    },
    {
      title: 'Embedded Systems Engineer Intern',
      company: 'SYSNAV',
      location: 'Île-de-France, France',
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
            'Design & development of a real-time OS: scheduler, memory emulation, I/O virtualization.',
        },
        {
          title: 'Porting',
          description: 'Porting the API to Windows and Linux. Documentation.',
        },
      ],
      keywords: ['C ANSI', 'Embedded', 'Real-time'],
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
            'Feature addition for drone management (multi-language, video, mapping). Ergonomic redesign.',
        },
        {
          title: 'DTM Library',
          description:
            'Management of Digital Terrain Models (SRTM, DTED). Shared storage. 3D calculation.',
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
      description: '_with honors_',
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
      name: 'Certified ScrumMaster (CSM)',
      organization: 'Scrum Alliance',
      date: '2019',
      verificationUrl: 'https://bcert.me/example',
    },
    {
      name: 'AWS Certified Solutions Architect – Associate',
      organization: 'Amazon Web Services (AWS)',
      date: '2023',
      verificationUrl: 'https://www.credly.com/example',
    },
  ],
  skills: [
    { name: 'French', level: 5 },
    { name: 'English', level: 5 },
    { name: 'German', level: 2 },
    { name: 'C++', level: 5 },
    { name: 'Java', level: 4 },
    { name: 'Python', level: 4 },
    { name: 'Docker', level: 4 },
    { name: 'Kubernetes', level: 3 },
    { name: 'CI/CD', level: 4 },
    { name: 'Agile/Scrum', level: 5 },
    { name: 'SAFe', level: 4 },
    { name: 'SQL', level: 4 },
    { name: 'Linux', level: 4 },
  ],
};
