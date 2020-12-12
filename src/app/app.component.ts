import { Component, ViewChild, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test-ng6';
  imgSource = '';
  @ViewChild('logo') logo: ElementRef;

  constructor(private http: Http) {}

  // getData() {
  //   this.http.get('/assets/something.json').subscribe((res: any) => {
  //     this.imgSource = res.json().data;
  //   });
  // }

  getDataPipe() {
    this.http.get('/assets/something.json')
    .pipe(map(res => res.json()))
    .subscribe(res => this.imgSource = res.data);
  }

  removeImage() {
    this.imgSource = null;
  }
}
