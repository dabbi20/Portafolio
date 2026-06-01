import { Skill } from '../../core/models/skill.model';

export const SKILLS: Skill[] = [
  // Frontend
  {
    id: 'angular',
    name: 'Angular',
    level: 'advanced',
    category: 'frontend',
    featured: true,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    level: 'intermediate',
    category: 'frontend',
    featured: true,
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    level: 'intermediate',
    category: 'frontend',
    featured: true,
  },
  {
    id: 'html',
    name: 'HTML',
    level: 'advanced',
    category: 'frontend',
    featured: false,
  },
  {
    id: 'css',
    name: 'CSS',
    level: 'advanced',
    category: 'frontend',
    featured: false,
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    level: 'intermediate',
    category: 'frontend',
    featured: false,
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    level: 'intermediate',
    category: 'frontend',
    featured: false,
  },

  // Backend
  {
    id: 'java',
    name: 'Java',
    level: 'intermediate',
    category: 'backend',
    featured: true,
  },
  {
    id: 'spring-boot',
    name: 'Spring Boot',
    level: 'intermediate',
    category: 'backend',
    featured: false,
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    level: 'intermediate',
    category: 'backend',
    featured: true,
  },
  {
    id: 'express',
    name: 'Express',
    level: 'intermediate',
    category: 'backend',
    featured: false,
  },
  {
    id: 'python',
    name: 'Python',
    level: 'intermediate',
    category: 'backend',
    featured: false,
  },

  // Data
  {
    id: 'sql',
    name: 'SQL',
    level: 'intermediate',
    category: 'data',
    featured: true,
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    level: 'intermediate',
    category: 'data',
    featured: false,
  },
  {
    id: 'mysql',
    name: 'MySQL',
    level: 'intermediate',
    category: 'data',
    featured: false,
  },
  {
    id: 'sqlserver',
    name: 'SQL Server',
    level: 'intermediate',
    category: 'data',
    featured: false,
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    level: 'intermediate',
    category: 'data',
    featured: false,
  },

  // Automation & Tools
  {
    id: 'n8n',
    name: 'n8n',
    level: 'advanced',
    category: 'automation-tools',
    featured: true,
  },
  {
    id: 'git',
    name: 'Git',
    level: 'intermediate',
    category: 'automation-tools',
    featured: true,
  },
  {
    id: 'github',
    name: 'GitHub',
    level: 'intermediate',
    category: 'automation-tools',
    featured: false,
  },

  // Cloud & DevOps
  {
    id: 'docker',
    name: 'Docker',
    level: 'intermediate',
    category: 'cloud',
    featured: false,
  },
  {
    id: 'linux',
    name: 'Linux',
    level: 'intermediate',
    category: 'cloud',
    featured: false,
  },
  {
    id: 'aws',
    name: 'AWS',
    level: 'intermediate',
    category: 'cloud',
    featured: true,
  },
  {
    id: 'ec2',
    name: 'EC2',
    level: 'intermediate',
    category: 'cloud',
    featured: false,
  },
  {
    id: 's3',
    name: 'S3',
    level: 'intermediate',
    category: 'cloud',
    featured: false,
  },
  {
    id: 'lambda',
    name: 'Lambda',
    level: 'intermediate',
    category: 'cloud',
    featured: false,
  },
  {
    id: 'rds',
    name: 'RDS',
    level: 'intermediate',
    category: 'cloud',
    featured: false,
  },
];