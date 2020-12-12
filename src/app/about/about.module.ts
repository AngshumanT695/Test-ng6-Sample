import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { AboutOneComponent } from './about-one.component';
import { AboutTwoComponent } from './about-two.component';
import { AboutContentComponent } from './about-content.component';
import { AboutContentDetailComponent } from './about-content-detail.component';

const routes: Routes = [
    { path: '', component: AboutComponent, children: [
        { path: 'about-one', component: AboutOneComponent },
        { path: 'about-two', component: AboutTwoComponent }
    ]}
];

@NgModule({
    declarations: [
        AboutComponent,
        AboutOneComponent,
        AboutTwoComponent,
        AboutContentComponent,
        AboutContentDetailComponent
    ],
    imports: [RouterModule.forChild(routes)]
})
export class AboutModule {}
