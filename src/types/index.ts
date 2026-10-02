// 1. Interfaces (Modelos de Dados)
export interface Skill {
  title: string;
  description: string;
  items: string[];
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  category: "Dados & BI" | "Programação";
  images: ProjectImage[];
  overview: string;
  features?: string[];
  roleNote?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface CertificatePage {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
}

export interface Certificate {
  id: string;
  title: string;
  trackName: string;
  issuer: string;
  credentialUrl: string;
  pdfUrl: string;
  issueDate: string;
  workload: string;
  coursesCount: number;
  description: string;
  tags: string[];
  courses: string[];
  pages: CertificatePage[];
}
