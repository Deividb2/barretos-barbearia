import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { ServicesCardComponent } from './components/services-card/services-card.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { WhatsBtnComponent } from './components/whats-btn/whats-btn.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HeaderComponent, BannerComponent, ServicesCardComponent, AboutUsComponent, ContactComponent, WhatsBtnComponent, FooterComponent]
})
export class AppComponent implements OnInit { 

  ngOnInit() {
    console.log('Site desenvolvido por Deivid Barreto')
  }

}
