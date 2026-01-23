// Icon type used in skills and tools
export interface Icon {
  id: number;
  name: string;
  path: string;
  moreInfo?: string;
}

// Skill item for the landing page
export interface SkillItem {
  id: number;
  name: string;
  percentage: number;
  time: number;
  icons: Icon[];
}

// Skills category
export interface SkillsCategory {
  id: number;
  name: string;
  items: SkillItem[];
}

// Tag for projects
export interface Tag {
  id: number;
  name: string;
  highlighted: boolean;
}

// Tool used in experiments
export interface Tool {
  id: number;
  name: string;
  path: string;
}

// Experiment item
export interface Experiment {
  id: number;
  name: string;
  description: string;
  fullDescription?: string;
  borderRadius?: string;
  tags: Tag[];
  toolsUsed: Tool[];
  features?: string[];
  screenshots?: string[];
  isMobile?: boolean;
  appStoreUrl?: string;
  playStoreUrl?: string;
  page: string;
  source: string;
  status?: string;
}

// Experiments category
export interface ExperimentsCategory {
  id: string;
  items: Experiment[];
}

// Subject in education
export interface Subject {
  id: number;
  name: string;
  grade: string;
}

// Education item
export interface EducationItem {
  id: number;
  title: string;
  gpa: number;
  school: string;
  location: string;
  period: string;
  schoolSpeciality: string;
  subjects: Subject[];
}

// Education category
export interface EducationCategory {
  id: number;
  name: string;
  items: EducationItem[];
}

// Navigation item
export interface NavItem {
  id: number;
  name: string;
  url: string;
}

// Contact form data
export interface ContactFormData {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
}

// Publication item
export interface Publication {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
}

// Publications category
export interface PublicationsCategory {
  id: string;
  items: Publication[];
}
