import { Profile } from '../../core/models/profile.model';

export const PROFILE: Profile = {
  name: 'David Carrasco',

  role: 'Full Stack Developer',

  headline:
    'Ingeniero de Sistemas especializado en desarrollo backend, automatización y aplicaciones web escalables.',

  description:
    'Ingeniero de Sistemas y Full Stack Developer con experiencia en Java, Spring Boot, Node.js, Angular, automatización con n8n, bases de datos SQL y NoSQL, integración de APIs REST y servicios cloud. Apasionado por el desarrollo backend, la arquitectura de software y la construcción de soluciones escalables.',

  location: 'Bogotá, Colombia',

  availability: 'Disponible para oportunidades',

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