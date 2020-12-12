import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { AboutOneComponent } from './about-one.component';
import { AboutTwoComponent } from './about-two.component';

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
        AboutTwoComponent
    ],
    imports: [RouterModule.forChild(routes)]
})
export class AboutModule {}
