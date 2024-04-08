import { Component } from '@angular/core';
import { Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BooksComponent } from './books/books.component';
import { ContactComponent } from './contact/contact.component';
import { DegreeComponent } from './degree/degree.component';
import { DiplomaComponent } from './diploma/diploma.component';
import { PgComponent } from './pg/pg.component';
import { GovtComponent } from './govt/govt.component';



const routerOptions: ExtraOptions = {
    scrollPositionRestoration: 'top',
  };

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
  
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'books',component:BooksComponent},
    {path:'contact',component:ContactComponent},
    {path:'degree',component:DegreeComponent},
    {path:'diploma',component:DiplomaComponent},
    {path:'pg',component:PgComponent},
    {path:'govt',component:GovtComponent},
];
