export interface Resume extends Profile {
  experiences: Experience[];
  educations: Education[];
  certifications?: Certification[];
  skills: Skill[];
}

export interface Profile {
  name?: string;
  title?: string;
  summary?: string;
  email: string;
  phone: string;
  website: string;
  location: string;
  profilePicturePath?: string;
  birthDate?: string;
  nationality?: string;
  drivingLicense?: string;
  languages?: Skill[];
  socialLinks?: SocialLink[];
  volunteering?: Volunteering[];
  hobbies?: string[];
  aboutDescription?: string;
  personalProjects?: Project[];
}

export interface SocialLink {
  platform: string;
  url: string;
  username?: string;
  icon?: string;
}

export interface Volunteering {
  organization: string;
  role: string;
  startDate: string;
  endDate?: string;
  description?: string;
  website?: string;
}

export interface Project {
  name: string;
  description: string;
  url?: string;
  technologies?: string[];
  startDate?: string;
  endDate?: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  missions: Mission[];
  keywords?: string[];
}

export interface Mission {
  title: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Certification {
  name: string;
  organization: string;
  location?: string;
  date: string;
  description?: string;
  verificationUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
}
