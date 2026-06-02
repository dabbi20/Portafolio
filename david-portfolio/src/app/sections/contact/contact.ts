import { Component } from '@angular/core';
import { CONTACT } from '../../data/contact/contact.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contact = CONTACT;
}