import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InitialComponentsModule } from './components/initial-components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InitialComponentsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
