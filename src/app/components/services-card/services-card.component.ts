import { Component } from '@angular/core';
import { Services } from '../../datas/services-datas';
import { CardComponent } from './components/card/card.component';
import { CardPriceDirective } from './directives/card-price.directive';
import { CardTextDirective } from './directives/card-text.directive';
import { CardTitleDirective } from './directives/card-title.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-card',
  standalone: true,
  imports: [CommonModule, CardComponent, CardPriceDirective, CardTextDirective, CardTitleDirective],
  templateUrl: './services-card.component.html',
  styleUrl: './services-card.component.scss'
})
export class ServicesCardComponent {
  Services = Services
}
