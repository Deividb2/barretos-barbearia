import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('navList') navList!: ElementRef<HTMLAnchorElement>

  hendleMenuIcon: boolean = false
  menuAtualIcon: string = 'menu'

  changeIcon() {
    this.hendleMenuIcon = !this.hendleMenuIcon
    this.hendleMenuIcon ? this.menuAtualIcon = 'closeMenu' : this.menuAtualIcon = 'menu'
  }
}
