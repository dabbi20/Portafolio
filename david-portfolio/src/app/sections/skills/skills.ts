import { Component } from '@angular/core';
import { SKILLS } from '../../data/skills/skills.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skills = SKILLS;

  skillGroups = [
    {
      id: 'frontend',
      title: 'Frontend',
      description: 'Interfaces modernas, responsivas y orientadas a experiencia de usuario.',
    },
    {
      id: 'backend',
      title: 'Backend',
      description: 'APIs, lógica de negocio, seguridad y arquitectura de servicios.',
    },
    {
      id: 'data',
      title: 'Data',
      description: 'Bases de datos relacionales, NoSQL y gestión de información.',
    },
    {
      id: 'cloud',
      title: 'Cloud & DevOps',
      description: 'Servicios cloud, despliegues, Linux y contenedores.',
    },
    {
      id: 'automation-tools',
      title: 'Automation & Tools',
      description: 'Automatización de procesos, versionamiento y herramientas de desarrollo.',
    },
  ];

  getSkillsByCategory(categoryId: string) {
    return this.skills.filter((skill) => skill.category === categoryId);
  }
}