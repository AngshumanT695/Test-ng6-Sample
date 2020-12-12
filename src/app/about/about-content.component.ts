import { Component, ContentChild, AfterContentInit } from '@angular/core';
import { AboutContentDetailComponent } from './about-content-detail.component';

@Component({
    selector: 'app-about-content',
    template: '<p>About ontent Works</p><ng-content></ng-content>',
    styles: []
})
export class AboutContentComponent implements AfterContentInit {

    @ContentChild(AboutContentDetailComponent) aboutContentDetailComponent: AboutContentDetailComponent;

    ngAfterContentInit() {
        console.log(this.aboutContentDetailComponent);
    }
}
