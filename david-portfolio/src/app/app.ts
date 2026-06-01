import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './sections/hero/hero';
import { Experience } from './sections/experience/experience';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Hero,Experience],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('david-portfolio');
}
