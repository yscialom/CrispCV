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
    { name: 'English', level: 5 },
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
      name: 'Vibed Resume',
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
- Responsible for evaluation & recruitment requirements, **building a recruitment process** based on objective assessment of candidates on their technical or functional skills, their consultant posture and their soft skills.
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
- Transparent communication and value-creating collaboration between experts, managers, recruitment and business.
- Internal IT tooling projects.`,
        },
      ],
      keywords: ['Dev Expertise', 'Management', 'Recruitment', 'Transformation'],
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
