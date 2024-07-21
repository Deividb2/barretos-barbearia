import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {

  @ViewChild('home') homeRef?: ElementRef<HTMLDivElement>
  @ViewChild('services') servicesRef?: ElementRef<HTMLDivElement>
  @ViewChild('about-us') aboutUsRef?: ElementRef<HTMLDivElement>

  ngAfterViewInit(): void {
    const fragment = window.location.hash.substring(1)
    if(fragment) {
      switch(fragment) {
        case 'home':
          this.homeRef?.nativeElement.scrollIntoView()
          break

        case 'services':
          this.servicesRef?.nativeElement.scrollIntoView()
          break

        case 'about-us':
          this.aboutUsRef?.nativeElement.scrollIntoView()
          break

        default: 
          break
      }
    }
  }

}
