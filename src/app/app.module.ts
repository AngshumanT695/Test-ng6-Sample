import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';

const routes: Routes = [
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: 'contact', loadChildren: './contact/contact.module#ContactModule' }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
