import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    localStorage.clear();

    document.documentElement.classList.remove('dark');
    document.documentElement.classList.remove('light');

    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set dark theme by default', () => {
    expect(service.theme()).toBe('dark');
  expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('should toggle theme from dark to light', () => {
    service.toggleTheme();

    expect(service.theme()).toBe('light');
    expect(localStorage.getItem('theme')).toBe('light');
    expect(document.documentElement.classList.contains('light')).toBe(true);
  });

  it('should toggle theme from light to dark', () => {
    service.setTheme('light');
    service.toggleTheme();

    expect(service.theme()).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
  expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('should save selected theme in localStorage', () => {
    service.setTheme('light');

    expect(localStorage.getItem('theme')).toBe('light');
  });
});