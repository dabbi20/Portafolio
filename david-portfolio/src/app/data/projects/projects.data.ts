import { Project } from '../../core/models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'restaurant-order-system',
    title: 'Restaurant Order System',
    description:
      'Sistema Full Stack para la gestión de pedidos de restaurante. Permite autenticación con JWT, administración de productos, carrito de compras, gestión de órdenes y control de roles Cliente/Administrador. Implementa arquitectura en capas, patrones de diseño y una API REST con Spring Boot y PostgreSQL.',
    categories: ['frontend', 'backend', 'full-stack', 'databases'],
    technologies: [
      'Angular',
      'TypeScript',
      'Tailwind CSS',
      'Java',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'PostgreSQL',
      'Maven',
    ],
    status: 'completed',
    links: [
      {
        label: 'Frontend',
        url: 'https://github.com/dabbi20/Aplicacion-de-Ordenes-Frontend.git',
        type: 'frontend',
      },
      {
        label: 'Backend',
        url: 'https://github.com/dabbi20/Aplicacion-de-Ordenes-Backend.git',
        type: 'backend',
      },
    ],
    imageUrl: '/assets/images/projects/restaurant-order-system.png',
    year: 2026,
    featured: true,
  },
  {
    id: 'atalaya-studio',
    title: 'Atalaya Studio',
    description:
      'Landing page profesional para una agencia de diseño y desarrollo web. Incluye formulario de contacto conectado a una API REST con Node.js y PostgreSQL, diseño responsive Mobile First, accesibilidad básica y despliegue en Netlify.',
    categories: ['frontend', 'backend', 'full-stack', 'databases'],
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Netlify',
    ],
    status: 'production',
    links: [
      {
        label: 'Demo',
        url: 'https://atalantapanel.netlify.app/',
        type: 'demo',
      },
      {
        label: 'Frontend',
        url: 'https://github.com/dabbi20/Landing-page-Atalaya-Studio.git',
        type: 'frontend',
      },
      {
        label: 'Backend',
        url: 'https://github.com/dabbi20/server-Atalaya.git',
        type: 'backend',
      },
    ],
    imageUrl: '/assets/images/projects/atalaya-studio.png',
    year: 2026,
    featured: true,
  },
  {
    id: 'bit-commerce-platform',
    title: 'Bit Commerce Platform',
    description:
      'Plataforma Full Stack con autenticación JWT, roles de usuario y administrador, gestión de productos, carga de imágenes y verificación por correo. Incluye backend con Node.js, Express y MongoDB, junto a un frontend independiente.',
    categories: ['frontend', 'backend', 'full-stack', 'databases'],
    technologies: [
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'JWT',
      'Bcrypt',
      'Multer',
      'Nodemailer',
      'JavaScript',
    ],
    status: 'completed',
    links: [
      {
        label: 'Frontend',
        url: 'https://github.com/dabbi20/bit-frontend.git',
        type: 'frontend',
      },
      {
        label: 'Backend',
        url: 'https://github.com/dabbi20/bit-backend.git',
        type: 'backend',
      },
    ],
    imageUrl: '/assets/images/projects/bit-commerce-platform.png',
    year: 2026,
    featured: true,
  },
  {
    id: 'pc-espaciales',
    title: 'PC Espaciales',
    description:
      'Sistema Full Stack para venta de productos tecnológicos y gestión de servicios técnicos. Incluye catálogo de productos, autenticación, carrito de compras, solicitudes de reparación, inventario y paneles para cliente, técnico y vendedor.',
    categories: ['frontend', 'backend', 'full-stack', 'databases'],
    technologies: [
      'PHP',
      'MySQL',
      'JavaScript',
      'Bootstrap',
      'HTML',
      'CSS',
      'XAMPP',
    ],
    status: 'completed',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/dabbi20/PC-espaciales.git',
        type: 'github',
      },
    ],
    imageUrl: '/assets/images/projects/pc-espaciales.png',
    year: 2025,
    featured: true,
  },
  {
    id: 'ues-academic-management-system',
    title: 'UES Academic Management System',
    description:
      'Sistema académico desarrollado en Java para modelar facultades, cursos, profesores, estudiantes, proyectos de investigación y evaluaciones. Aplica POO, Factory Method y Adapter para integrar información externa del ICCIS.',
    categories: ['backend'],
    technologies: [
      'Java',
      'POO',
      'Factory Method',
      'Adapter',
      'Domain Modeling',
    ],
    status: 'completed',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/dabbi20/ues.git',
        type: 'github',
      },
    ],
    imageUrl: '/assets/images/projects/ues-academic-management-system.png',
    year: 2026,
    featured: false,
  },
  {
    id: 'registro-student',
    title: 'RegistroStudent',
    description:
      'Proyecto Java enfocado en registro y gestión de estudiantes. Refuerza fundamentos de programación orientada a objetos, estructuras de control, manejo de datos y lógica CRUD en consola o entorno académico.',
    categories: ['backend'],
    technologies: ['Java', 'POO', 'CRUD'],
    status: 'practice',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/dabbi20/RegistroStudent.git',
        type: 'github',
      },
    ],
    imageUrl: '/assets/images/projects/registro-student.png',
    year: 2026,
    featured: false,
  },
  {
    id: 'codeart-crm',
    title: 'CodeArt CRM',
    description:
      'Proyecto académico Full Stack sobre programación como hobby. Integra frontend con HTML, CSS y JavaScript, junto a un backend Node.js + Express con arquitectura modular por capas, CRUD en memoria, Repository Pattern y Service Layer.',
    categories: ['frontend', 'backend', 'full-stack'],
    technologies: [
      'Node.js',
      'Express',
      'JavaScript',
      'HTML',
      'CSS',
      'MVC',
      'Repository Pattern',
    ],
    status: 'completed',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/dabbi20/practicaCRM-2.git',
        type: 'github',
      },
    ],
    imageUrl: '/assets/images/projects/codeart-crm.png',
    year: 2026,
    featured: false,
  },
  {
    id: 'java-challenge-repository',
    title: 'Java Challenge Repository',
    description:
      'Repositorio de práctica con ejercicios Java orientados a fortalecer fundamentos de programación, POO, lógica, estructuras de datos, ciclos, condicionales y resolución de problemas técnicos.',
    categories: ['backend'],
    technologies: ['Java', 'POO', 'Algorithms', 'Problem Solving'],
    status: 'practice',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/dabbi20/Chagenlle-Java-Ejercicios-50.git',
        type: 'github',
      },
    ],
    imageUrl: '/assets/images/projects/java-challenge-repository.png',
    year: 2026,
    featured: false,
  },
];