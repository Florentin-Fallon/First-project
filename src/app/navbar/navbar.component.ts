// src/app/navbar/navbar.component.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // Importer RouterLink

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [RouterLink] // Importer RouterLink pour l'utiliser dans le template
})
export class NavbarComponent { }
