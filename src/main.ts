// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module'; // Assure-toi que les routes sont exportées

import { AppComponent } from './app/app.component'; // Importer le composant standalone

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) // Fournir les routes
  ]
})
.catch(err => console.error(err));
