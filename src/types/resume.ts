export interface Experience {
  title: string;
  company: string;
  dates: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  dates: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Resume {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
  };
  experience: Experience[];
  education: Education[];
  skills: SkillCategory[];
}
