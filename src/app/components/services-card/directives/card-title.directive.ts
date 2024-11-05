import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-title',
  standalone: true,
  host: { 'class': 'co-card__title' }
})
export class CardTitleDirective {}
