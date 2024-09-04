// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Importer AppRoutingModule
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component'; // Si NavbarComponent est standalone, l'importer ici

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Importer AppRoutingModule ici
    NavbarComponent // Si NavbarComponent est standalone, l'importer ici
  ],
  providers: [],
  bootstrap: [] // Pas de composant bootstrap ici
})
export class AppModule { }
