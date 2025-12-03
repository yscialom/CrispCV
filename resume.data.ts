import { Resume } from './resume.models';

export const RESUME_DATA: Resume = {
  profile: {
    name: 'John Doe',
    title: 'Senior Software Engineer',
    summary: 'A passionate and experienced software engineer with a focus on building high-quality, scalable, and maintainable applications.',
    email: 'john.doe@example.com',
    phone: '+1 123-456-7890',
    website: 'https://johndoe.dev',
    location: 'San Francisco, CA',
  },
  experiences: [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Corp',
      location: 'San Francisco, CA',
      startDate: '2020-01-01',
      endDate: 'Present',
      description: [
        'Led the development of a new microservices-based platform.',
        'Improved application performance by 30% by optimizing database queries.',
        'Mentored junior engineers and conducted code reviews.',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Innovate LLC',
      location: 'Palo Alto, CA',
      startDate: '2017-06-01',
      endDate: '2019-12-31',
      description: [
        'Developed and maintained features for a large-scale web application.',
        'Collaborated with a team of designers and product managers to create a user-friendly product.',
        'Wrote and maintained unit and integration tests.',
      ],
    },
  ],
  educations: [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'Stanford University',
      location: 'Stanford, CA',
      startDate: '2015-09-01',
      endDate: '2017-05-31',
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      startDate: '2011-09-01',
      endDate: '2015-05-31',
    },
  ],
  skills: [
    {
      name: 'TypeScript',
      level: 5,
    },
    {
      name: 'Angular',
      level: 5,
    },
    {
      name: 'Node.js',
      level: 4,
    },
    {
      name: 'SQL',
      level: 4,
    },
    {
      name: 'Docker',
      level: 3,
    },
  ],
};
