import { Component } from '@angular/core';
import { CarPart } from './car-part';
import { CARPARTS } from './mocks';

@Component({
  selector: 'car-parts',
  templateUrl: 'app/car-parts.component.html',
  styleUrls: ['app/car-parts.component.css']
})

export class CarPartsComponent {
	carParts: CarPart[];
	ngOnInit() {
		this.carParts = CARPARTS;
	}
	totalCarParts() {
		let total = 0;
		this.carParts.forEach( (carPart) => {
			total += carPart.inStock;
		})
		return total;
	}
	downQuantity(carPart) {
		if (carPart.quantity != 0) { carPart.quantity--; }
	}
	upQuantity(carPart) {
		if (carPart.quantity < carPart.inStock) { carPart.quantity++; }
	}
}