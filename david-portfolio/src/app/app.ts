import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './sections/hero/hero';
import { Experience } from './sections/experience/experience';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';
import { Education } from './sections/education/education';
import { Contact } from './sections/contact/contact';
import { Navbar } from './sections/navbar/navbar';
import { Footer } from './sections/footer/footer';
import { ScrollTop } from './shared/components/scroll-top/scroll-top';

@Component({
  selector: 'app-root',
  imports: [
  RouterOutlet,
  Navbar,
  Hero,
  Experience,
  Projects,
  Skills,
  Education,
  Contact,
  Footer,
  ScrollTop
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('david-portfolio');
}
