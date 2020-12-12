import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    template: `<p>About Works</p>
    <a routerLink="about-one">One</a>
    <a routerLink="about-two">Two</a>
    <router-outlet></router-outlet>`,
    styles: [`a { padding-right: 1em; }`]
})
export class AboutComponent {}
