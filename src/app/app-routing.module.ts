// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Assure-toi que HomeComponent est importé
import { ContactComponent } from './contact/contact.component'; // Assure-toi que ContactComponent est importé

export const routes: Routes = [ // Exporter routes ici
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
