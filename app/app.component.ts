import { Component } from '@angular/core';
import { CarPartsComponent } from 'app/car-parts.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [ CarPartsComponent ]
})

export class AppComponent {
	title = 'Vehicle Parts';
}