import { Social } from '../../core/models/social.model';

export const SOCIALS: Social[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/dabbi20',
    icon: 'github',
    featured: true,
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/david-carrasco-desarrollador-fullstack/',
    icon: 'linkedin',
    featured: true,
  },
  {
    id: 'email',
    name: 'Email',
    url: 'mailto:davidack123456789@gmail.com',
    icon: 'mail',
    featured: true,
  },
  {
    id: 'cv',
    name: 'CV',
    url: '/assets/docs/cv-david-carrasco.pdf',
    icon: 'file-text',
    featured: true,
  },
];