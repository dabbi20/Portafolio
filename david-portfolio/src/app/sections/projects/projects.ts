import { Component } from '@angular/core';
import { PROJECTS } from '../../data/projects/projects.data';
import { CATEGORIES } from '../../data/categories/categories.data';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = PROJECTS;
  categories = CATEGORIES;
  selectedCategory = 'all';

  get filteredProjects() {
    if (this.selectedCategory === 'all') {
      return this.projects;
    }

    return this.projects.filter((project) =>
      project.categories.includes(this.selectedCategory)
    );
  }

  selectCategory(categoryId: string) {
    this.selectedCategory = categoryId;
  }
}