import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionLogoWhatsapp as whats, ionLogoInstagram as insta, ionLogoYoutube as youtube } from '@ng-icons/ionicons'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ whats, insta, youtube   })],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
