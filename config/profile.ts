import { Resume } from '../src/app/core/models/resume.models';

export const PROFILE_CONFIG: Resume = {
  profilePicturePath: 'profile-picture.png',
  name: 'Yankel Scialom',
  title: 'Delivery Manager',
  summary:
    "Ingénieur passioné par la technique, le code, les maths mais aussi par la performance de l'approche humaine : « comment construire efficacement en tant qu'organisaiton, qu'équipe, qu'individu une solution apprciée et utile ? »",
  email: 'yankel-pro@scialom.org',
  phone: '+336 87 63 83 13',
  website: 'scialom.org/cv',
  location: 'Châtillon, Île-de-France, France',

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
- Garant de l'**expertise dev** au sein de l'entreprise.
- Garant de l'évaluation & de l'exigence au recrutement, **construction d'un processus de recrutement** basé sur l'évaluation objective des candidats sur leurs compétences technique ou fonctionnelles, sur leur posture consultant et sur leur savoir-être.
- Animation de communautés d'experts.
- Formation de consultants & accompagnement de carrière.`,
        },
        {
          title: 'Management',
          description: `
- Animation de la communauté des managers.
- Management de consultants et consultants-managers.`,
        },
        {
          title: 'Accompagnement de la transformation',
          description: `
- Fusion interne des entités de Capfi.
- Communication transparente et collaboration créatrice de valeur entre les experts, les managers, le recrutement et le commerce.
- Projets internes d'outillage IT.`,
        },
      ],
      keywords: ['Expertise Dev', 'Management', 'Recrutement', 'Transformation'],
    },
    {
      title: 'Release Manager',
      company: 'Crédit Agricole CIB',
      location: 'Montrouge, Île-de-France, France',
      startDate: '2023-06',
      endDate: '2025-03',
      missions: [
        {
          title:
            "Release Manager d'Orchestrade pour CACIB ainsi que de ses logiciels et services annexes.",
          description: `
- **Stratégie de release** : objectif qualité maximale & time-to-market minimal.
- **Culture** : promotion de la responsabilisation par l'implication de tous aux prises de décisions.
- **Processus** : du développement au déploiement en accord avec notre stratégie et notre culture.
- **Animation** : synchronisation et accompagnement des 16 équipes de développement.
- **Priorisation** : stabilité vs urgence vs cas et projets particuliers.`,
        },
      ],
      keywords: ['Release Management', 'Orchestrade', 'Stratégie', 'Culture', 'Processus'],
    },
    {
      title: 'Chef de projet',
      company: 'Société Générale',
      location: 'Paris et périphérie',
      startDate: '2022-05',
      endDate: '2023-05',
      missions: [
        {
          title: 'Transformation Stratégie SOC',
          description: `Project Manager des projets issues de la redéfinition de la stratégie SOC de la Société Générale.
- Études d'opportunités.
- Cadrage, lancement, suivi et clôture des projets de transformation.
- Appels d'offre.
- Management transverse d'équipes.
- Gestion des budgets (millions d'euros pour 2023).`,
        },
      ],
      keywords: ['Project Management', 'SOC', 'Stratégie', 'Budget', 'Cybersécurité'],
    },
    {
      title: 'Chef de projets, Agile Master',
      company: 'Natixis Corporate & Investment Banking',
      location: 'Paris, France',
      startDate: '2019-05',
      endDate: '2022-04',
      missions: [
        {
          title: 'Contexte',
          description:
            "Dans le cadre du projet règlementaire FRTB, Natixis Global Markets refond ses services de pricing et casse les silos existants. Le projet SUNRISE est une plateforme front-to-risk (stress tests, VAR, besoins FED US) dont le cœur est le composant _Pricing Services_ dont j'ai intégré l'équipe.",
        },
        {
          title: 'Chef de projets techniques',
          description: `
- **Release Management** : planification, suivi, communication
- **Création et évolutions d’infrastructures** : priorisation, planification & suivi des développements
- Gestion des **plannings**, **risques** et remontée d'**alertes** au programme
- Mise en place d’une **nouvelle technologie de grille** de calcul distribué chez Natixis : GridGain
- **Synchronisation** de l’équipe Pricing Services avec : équipes infrastructure, équipes d’exploitation, équipes sécurité, équipes architecture, …
- **Management et planification des évolutions** liées à la sécurité des données, des logiciels et des éléments d’infrastructure : DMZ, Illumio, Disaster Recovery Plan, sensibilisation formation & contrôle des développeurs faces aux failles de sécurité de notre code source …`,
        },
        {
          title: 'Ingénieur DevOps',
          description:
            "Construction d'une chaine d'analyse, de build, de déploiement, d'exploitation et de monitoring complète.",
        },
        {
          title: 'Scrum Master',
          description: `
- Respect de SAFe et Scrum : PI Planning, Sprint planning, rétro.
- Accueil et suivi des nouveaux membres.
- Planification et pilotage des démos.`,
        },
      ],
      keywords: ['SAFe', 'Scrum', 'DevOps'],
    },
    {
      title: 'Tech lead, Scrum Master',
      company: 'Ingenico',
      location: 'Paris, France',
      startDate: '2018-03',
      endDate: '2019-05',
      missions: [
        {
          title: 'Contexte',
          description:
            'J’ai été mandaté chez Ingénico pour accompagner à la transformation technique et méthodologique du département : kickoff agile & modernisation technologique.',
        },
        {
          title: 'Scrum Master',
          description: `
- **Kickoff Scrum** de l’équipe.
- Sensibilisation et suivi des membres, du PO et du management.
- Accompagnement du PO pour le découpage et la documentation.`,
        },
        {
          title: 'Tech lead',
          description: `
- Modernisation des outils:
  - svn vers git,
  - C++98 vers C++14,
  - Redhat 5 vers 7.
- Mise en place CI/CD (GitLab & CMake).
- Tests automatiques (behave).
- Définition du workflow de la création d’une user story à sa mise en production.
- Définition de critères d’acceptance pour les revues de code et les tests fonctionnels.
- Formation des équipes au C++14.
— Intégration continue & déploiement continu des applications.
— Adoption de Docker pour faciliter les tests, leur automatisation & leur rejouabilité.`,
        },
      ],
      keywords: ['Scrum', 'DevOps', 'C++14', 'PostgreSQL', 'Docker'],
    },
    {
      title: 'Développeur C++ industriel, projet Paylib / Wero',
      company: 'STET',
      location: 'Puteaux, La Défense',
      startDate: '2015-01',
      endDate: '2018-02',
      missions: [
        {
          title: 'Apple Pay & Paylib / Wero',
          description:
            'Solutions conçues ex nihilo. SLA 99,999%. Montée de version à chaud. Sécurité PCI-DSS.',
        },
        {
          title: 'Conception & Développement',
          description: `
- Intégration d’Apple Pay dans le système français Carte Bancaire.
- Conception technique.
- Développement C++98 du TSP (Secure Coding, robustesse, TCP, multithreading).
- Profiling (performance, memory leaks).
- Tests de bout-en-bout.
- Support et formation.`,
        },
      ],
      keywords: ['C++98', 'PostgreSQL', 'TCP', 'Multithreading', 'Secure Coding', 'Redhat Linux'],
    },
    {
      title: 'Ingénieur logiciel Sophis',
      company: 'Tikehau Capital',
      location: 'Paris VIII',
      startDate: '2014-07',
      endDate: '2015-01',
      missions: [
        {
          title: 'Chef de projet',
          description:
            'Sophis Toolkit lua : extension permettant la définition de colonnes en lua. Outil de diagnostic automatique.',
        },
        {
          title: 'Développeur',
          description:
            'Toolkit Sophis : reverse-engineering, optimisation, nouvelles colonnes. Sophis : import/export, langage de script, attribution de performance. Développements satellites (réconciliation, automatisation, rapports).',
        },
      ],
      keywords: ['Redhat Linux', 'C++', 'C99', 'PostgreSQL', 'Sophis', 'Lua', 'Finance'],
    },
    {
      title: 'Ingénieur conception logicielle',
      company: 'Thales Raytheon Systems',
      location: 'Massy',
      startDate: '2013-05',
      endDate: '2014-07',
      missions: [
        {
          title: 'Développeur logiciel C++ & Java',
          description:
            'Conception, développement et intégration de fonctionnalités IHM et communication. Mise en place de procédures de tests multi-plateforme. Suivi de fait technique.',
        },
        {
          title: 'Manager de centre de service',
          description:
            'Assistant au directeur de projet. Gestion technique des devis & facturations client.',
        },
      ],
      keywords: ['C++', 'Java', 'CMake'],
    },
    {
      title: 'Stagiaire ingénieur systèmes embarqués',
      company: 'SYSNAV',
      location: 'Île-de-France',
      startDate: '2012-01',
      endDate: '2012-08',
      missions: [
        {
          title: 'Conception & développement HAL',
          description:
            'Configuration micro-contrôleur Renesas. Protocoles (UART, SPI, USB). DMA, RAM, ALU.',
        },
        {
          title: 'OS Temps-réel',
          description:
            "Conception & développement d'un OS temps-réel : ordonnanceur, émulation mémoire, virtualisation E/S.",
        },
        {
          title: 'Portage',
          description: "Portage de l'API sur Windows et Linux. Documentation.",
        },
      ],
      keywords: ['C ANSI', 'Embarqué', 'Temps-réel'],
    },
    {
      title: 'Stagiaire Développeur informatique',
      company: 'Thales Optronique SA',
      location: 'Élancourt',
      startDate: '2009-07',
      endDate: '2010-02',
      missions: [
        {
          title: 'Développement IHM',
          description:
            'Ajout de fonctionnalités pour gestion de drones (multi-lingue, vidéo, cartographie). Refonte ergonomique.',
        },
        {
          title: 'Bibliothèque MNT',
          description:
            'Gestion des modèles numériques de terrain (SRTM, DTED). Stockage partagé. Calcul 3D.',
        },
        {
          title: 'Divers',
          description: "Outil de diagnostic temps-réel. Serveur d'alertes. Mise en place git.",
        },
      ],
      keywords: ['C', 'OCaml', 'IHM', 'Cartographie'],
    },
  ],
  educations: [
    {
      degree: "Diplôme d'ingénieur, Technologies mobiles et systèmes embarqués",
      institution: 'Université de Technologie de Troyes',
      location: 'Troyes, France',
      startDate: '2006',
      endDate: '2012',
    },
    {
      degree: 'Physics (Continuing Studies)',
      institution: 'Stanford University',
      location: 'Online',
      startDate: '2012',
      endDate: '2013',
    },
  ],
  skills: [
    { name: 'Français', level: 5 },
    { name: 'Anglais', level: 5 },
    { name: 'Allemand', level: 2 },
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
