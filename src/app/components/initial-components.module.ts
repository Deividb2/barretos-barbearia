import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

import { NgIconsModule } from '@ng-icons/core';
import { matMenu as menu, matClose as closeMenu, matWhatsapp } from '@ng-icons/material-icons/baseline';

import { CortesComponent } from './cortes/cortes.component';
import { BannerComponent } from './banner/banner.component';
import { ServicesCardComponent } from './services-card/services-card.component';
import { CardComponent } from './services-card/components/card/card.component';
import { CardTitleDirective } from './services-card/directives/card-title.directive';
import { CardTextDirective } from './services-card/directives/card-text.directive';
import { CardPriceDirective } from './services-card/directives/card-price.directive';
import { WhatsBtnComponent } from './whats-btn/whats-btn.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CortesComponent,
    BannerComponent,
    ServicesCardComponent,
    CardComponent,
    CardTitleDirective,
    CardTextDirective,
    CardPriceDirective,
    WhatsBtnComponent,
    AboutUsComponent,
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({ menu, closeMenu, matWhatsapp })
  ],
  exports: [
    HeaderComponent,
    CortesComponent,
    BannerComponent,
    ServicesCardComponent,
    CardComponent,
    WhatsBtnComponent,
    AboutUsComponent,
  ]
})
export class InitialComponentsModule { }
