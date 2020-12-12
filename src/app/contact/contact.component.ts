import {Component} from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
  <p class="td">Contact Works</p>
  `,
  styles: [`
    :host /deep/ .td { font-style: italic }
    `]
})
export class ContactComponent {}
