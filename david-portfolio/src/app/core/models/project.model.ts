export interface Project {
  id: string;
  title: string;
  description: string;
  categories: string[];
  technologies: string[];
  status: ProjectStatus;
  links: ProjectLink[];
  imageUrl?: string;
  year?: number;
  featured: boolean;
}

export interface ProjectLink {
  label: string;
  url: string;
  type: ProjectLinkType;
}

export type ProjectLinkType =
  | 'github'
  | 'frontend'
  | 'backend'
  | 'demo'
  | 'video';

export type ProjectStatus =
  | 'production'
  | 'completed'
  | 'in-progress'
  | 'practice'
  | 'archived';