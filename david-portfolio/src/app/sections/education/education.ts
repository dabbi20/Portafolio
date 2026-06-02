import { Component } from '@angular/core';
import { EDUCATION } from '../../data/education/education.data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  education = EDUCATION.filter(
    (item) => item.type === 'education'
  );

  certifications = EDUCATION.filter(
    (item) => item.type === 'certification'
  );
}