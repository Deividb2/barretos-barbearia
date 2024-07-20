import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-title',
  host: { 'class': 'co-card__title' }
})
export class CardTitleDirective {}
