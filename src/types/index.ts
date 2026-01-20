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
}

export interface ContactFormState {
  name: string;
  email: string;
  message: string;
}