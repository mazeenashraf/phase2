import { Routes } from '@angular/router';
import { HomeComponent } from '../../public/pages/home/home/home.component';
import { AboutComponent } from '../../public/pages/about/about.component';
import { ContactComponent } from '../../public/pages/contact/contact/contact.component';

export const routes: Routes = [
  {path:"" , redirectTo:"home", pathMatch:"full"},
  {path:"home" , component:HomeComponent, title:"home"},
  {path:"about" , component:AboutComponent, title:"about"},
  {path:"contact" , component:ContactComponent, title:"contact"},

];
