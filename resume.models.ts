export interface Resume {
  profile: Profile;
  experiences: Experience[];
  educations: Education[];
  skills: Skill[];
}

export interface Profile {
  name: string;
  title: string;
  summary: string;
  email: string;
  phone: string;
  website: string;
  location: string;
  profilePicturePath: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
}
