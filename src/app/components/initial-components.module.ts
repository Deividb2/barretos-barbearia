import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Icons
import { NgIconsModule } from '@ng-icons/core';
import { matMenu as menu, matClose as closeMenu, matWhatsapp as whats } from '@ng-icons/material-icons/baseline';
import { ionLogoInstagram as insta, ionLogoYoutube as youtube } from '@ng-icons/ionicons'

// Components
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ServicesCardComponent } from './services-card/services-card.component';
import { CardComponent } from './services-card/components/card/card.component';
import { WhatsBtnComponent } from './whats-btn/whats-btn.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';

// Directives
import { CardTitleDirective } from './services-card/directives/card-title.directive';
import { CardTextDirective } from './services-card/directives/card-text.directive';
import { CardPriceDirective } from './services-card/directives/card-price.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    ServicesCardComponent,
    CardComponent,
    GalleryComponent,
    AboutUsComponent,
    ContactComponent,
    WhatsBtnComponent,
    FooterComponent,
    CardTitleDirective,
    CardTextDirective,
    CardPriceDirective,
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({ menu, closeMenu, whats, insta, youtube })
  ],
  exports: [
    HeaderComponent,
    BannerComponent,
    ServicesCardComponent,
    CardComponent,
    GalleryComponent,
    AboutUsComponent,
    ContactComponent,
    WhatsBtnComponent,
    FooterComponent,
  ]
})
export class InitialComponentsModule { }
