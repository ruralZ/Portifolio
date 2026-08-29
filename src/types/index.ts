// 1. Interfaces (Modelos de Dados)
export interface Skill {
  title: string;
  description: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  category: "Power BI" | "Excel";
  images: { src: string; alt: string }[];
  overview: string;
}
