import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ContactComponent } from './contact.component';

const routes: Routes = [
    { path: '', component: ContactComponent }
];

@NgModule({
    declarations: [ContactComponent],
    imports: [
        RouterModule.forChild(routes),
        FormsModule
    ]
})
export class ContactModule { }
