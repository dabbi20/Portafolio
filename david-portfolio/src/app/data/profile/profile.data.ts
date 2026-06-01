import { Profile } from '../../core/models/profile.model';

export const PROFILE: Profile = {
  name: 'David Carrasco',

  role: 'Full Stack Developer',

  headline:
    'Systems Engineer building scalable applications, automation solutions and cloud-enabled platforms.',

  description:
    'Systems Engineer and Full Stack Developer with experience in Java, Node.js, databases, cloud services, automation and modern web technologies. Passionate about backend development, software architecture and scalable systems.',

  location: 'Bogotá, Colombia',

  availability: 'Open to opportunities',

  primaryCta: {
    label: 'Ver Proyectos',
    url: '#projects',
    type: 'primary',
  },

  secondaryCta: {
    label: 'Descargar CV',
    url: '/assets/docs/cv-david-carrasco.pdf',
    type: 'secondary',
  },
};