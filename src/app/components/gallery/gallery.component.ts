import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  images: ReadonlyArray<string> = [ 
    '../../../assets/images/gallery-01.png', 
    '../../../assets/images/gallery-02.png', 
    '../../../assets/images/gallery-03.png', 
    '../../../assets/images/gallery-04.png', 
    '../../../assets/images/gallery-05.png', 
    '../../../assets/images/gallery-06.png', 
    '../../../assets/images/gallery-07.png', 
    '../../../assets/images/gallery-08.png', 
  ]
}
