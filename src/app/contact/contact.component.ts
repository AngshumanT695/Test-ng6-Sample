import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
  <p class="td">Contact Works</p>
  <form #contactForm="ngForm" (ngSubmit)="onSubmitClick(contactForm.value)">
  <input type="text" name="contactName" placeholder="name" ngModel>
  <input type="text" name="email" placeholder="email" ngModel>
  <input type="submit" value="submit">
  </form>
  `
})
export class ContactComponent {

  onSubmitClick(data) {
    alert(data.contactName);
  }
}
