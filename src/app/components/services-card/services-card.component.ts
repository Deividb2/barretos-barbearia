import { Component } from '@angular/core';
import { Services } from '../../datas/services-datas';

@Component({
  selector: 'app-services-card',
  templateUrl: './services-card.component.html',
  styleUrl: './services-card.component.scss'
})
export class ServicesCardComponent {
  Services = Services
}
