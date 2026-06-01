import { Component } from '@angular/core';
import { PROFILE } from '../../data/profile/profile.data';
import { STATS } from '../../data/stats/stats.data';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  profile = PROFILE;
  stats = STATS;
}
