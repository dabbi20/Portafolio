import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  standalone: true,
  templateUrl: './scroll-top.html',
  styleUrl: './scroll-top.css'
})
export class ScrollTop {

  isVisible = false;

  @HostListener('window:scroll')
  onScroll() {
    this.isVisible = window.scrollY > 500;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}