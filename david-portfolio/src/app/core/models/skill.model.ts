export interface Skill {
  id: string;
  name: string;
  level: SkillLevel;
  category: SkillCategory;
  featured: boolean;
}

export type SkillLevel =
  | 'advanced'
  | 'intermediate'
  | 'beginner';

export type SkillCategory =
  | 'frontend'
  | 'backend'
  | 'data'
  | 'automation-tools'
  | 'cloud';