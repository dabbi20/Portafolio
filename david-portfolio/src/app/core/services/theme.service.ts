import { Injectable, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  theme = signal<Theme>('dark');

  constructor() {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const initialTheme = savedTheme ?? 'dark';

    this.setTheme(initialTheme);
  }

  toggleTheme() {
    const nextTheme = this.theme() === 'dark' ? 'light' : 'dark';
    this.setTheme(nextTheme);
  }

  setTheme(theme: Theme) {
    this.theme.set(theme);
    localStorage.setItem('theme', theme);

    document.documentElement.classList.toggle('light', theme === 'light');
    document.documentElement.classList.toggle('dark', theme === 'dark');

    this.updateFavicon(theme);
  }

  private updateFavicon(theme: Theme) {
    const favicon = document.querySelector(
      "link[rel='icon']"
    ) as HTMLLinkElement;

    if (!favicon) return;

    favicon.href =
      theme === 'dark'
        ? 'assets/logos/logo-square-dark-favicon.png'
        : 'assets/logos/logo-square-light-favicon.png';
  }
}