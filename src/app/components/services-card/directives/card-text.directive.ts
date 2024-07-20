import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-text',
  host: { 'class': 'co-card__text' }
})
export class CardTextDirective {}
