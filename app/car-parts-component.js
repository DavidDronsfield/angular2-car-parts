"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var CarPartsComponent = (function () {
    function CarPartsComponent() {
        this.carParts = [{
                "id": 1,
                "name": "Tyres",
                "description": "These tyres are the best",
                "inStock": 5,
                "price": 4.99
            },
            {
                "id": 1,
                "name": "Tyres",
                "description": "These tyres are the best",
                "inStock": 6,
                "price": 10.99
            },
            {
                "id": 1,
                "name": "Tyres",
                "description": "These tyres are the best",
                "inStock": 0,
                "price": 14.99
            }];
    }
    CarPartsComponent.prototype.totalCarParts = function () {
        var total = 0;
        this.carParts.forEach(function (carPart) {
            total += carPart.inStock;
        });
        return total;
    };
    CarPartsComponent = __decorate([
        core_1.Component({
            selector: 'car-parts',
            template: "\n  \t\t\t<p>There are {{ totalCarParts() }} car parts in stock.</p>\n\t\t\t<ul>\n\t\t\t\t<li *ngFor=\"let carPart of carParts\">\n\t\t\t\t\t<h2>{{ carPart.name }}</h2>\n\t\t\t\t\t<p>{{ carPart.description }}</p>\n\t\t\t\t\t<p>{{ carPart.price | currency:'GBP':true }}</p>\n\t\t\t\t\t<p *ngIf=\"carPart.inStock > 0\">{{ carPart.inStock }} in stock</p>\n\t\t\t\t\t<p *ngIf=\"!carPart.inStock\">Out of stock</p>\n\t\t\t\t</li>\n\t\t\t</ul>"
        }), 
        __metadata('design:paramtypes', [])
    ], CarPartsComponent);
    return CarPartsComponent;
}());
exports.CarPartsComponent = CarPartsComponent;
//# sourceMappingURL=car-parts-component.js.map