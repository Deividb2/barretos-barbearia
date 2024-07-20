import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-price',
  host: { 'class': 'co-card__price' }
})
export class CardPriceDirective {}