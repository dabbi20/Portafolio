export interface Project {
  id: string;
  title: string;
  description: string;
  categories: string[];
  technologies: string[];
  status: ProjectStatus;
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

export type ProjectStatus =
  | 'production'
  | 'completed'
  | 'in-progress'
  | 'practice';