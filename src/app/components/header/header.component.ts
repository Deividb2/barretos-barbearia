import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionMenu as menu, ionClose as menuClose} from '@ng-icons/ionicons'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ menu, menuClose })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('navList') navList!: ElementRef<HTMLAnchorElement>

  hendleMenuIcon: boolean = false
  menuAtualIcon: string = 'menu'

  changeIcon() {
    this.hendleMenuIcon = !this.hendleMenuIcon
    this.hendleMenuIcon ? this.menuAtualIcon = 'menuClose' : this.menuAtualIcon = 'menu'
  }
}
