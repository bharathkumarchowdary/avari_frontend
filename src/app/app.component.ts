import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<div>Hello {{value}}</div>`,
  templateUrl:'./app.component.html',
})
export class AppComponent {
  value = 'World';
}
