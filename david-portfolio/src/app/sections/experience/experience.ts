import { Component } from '@angular/core';
import { EXPERIENCE } from '../../data/experience/experience.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  experiences = EXPERIENCE;
}