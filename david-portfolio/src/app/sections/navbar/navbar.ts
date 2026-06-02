import { Component } from '@angular/core';
import { NAVIGATION } from '../../data/navigation/navigation.data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  navigation = NAVIGATION;
}