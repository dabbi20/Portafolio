import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Navbar } from './navbar';
import { ThemeService } from '../../core/services/theme.service';

describe('Navbar', () => {
  let component: Navbar;
  let fixture: ComponentFixture<Navbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar],
      providers: [ThemeService],
    }).compileComponents();

    fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create navbar component', () => {
    expect(component).toBeTruthy();
  });

  it('should render navigation links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('a');

    expect(links.length).toBeGreaterThan(0);
  });

  it('should render theme toggle button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button[aria-label="Cambiar tema"]');

    expect(button).toBeTruthy();
  });

  it('should toggle theme when calling toggleTheme', () => {
    const initialTheme = component.themeService.theme();

    component.toggleTheme();

    expect(component.themeService.theme()).not.toBe(initialTheme);
  });
});