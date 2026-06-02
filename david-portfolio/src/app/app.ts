import { AfterViewInit, Component, signal } from '@angular/core';


import AOS from 'aos';


import { Navbar } from './sections/navbar/navbar';
import { Hero } from './sections/hero/hero';
import { Experience } from './sections/experience/experience';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';
import { Education } from './sections/education/education';
import { Contact } from './sections/contact/contact';
import { Footer } from './sections/footer/footer';
import { ScrollTop } from './shared/components/scroll-top/scroll-top';

@Component({
  selector: 'app-root',
  imports: [
   
    Navbar,
    Hero,
    Experience,
    Projects,
    Skills,
    Education,
    Contact,
    Footer,
    ScrollTop,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit {
  protected readonly title = signal('david-portfolio');

  ngAfterViewInit(): void {
    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    });
  }
}