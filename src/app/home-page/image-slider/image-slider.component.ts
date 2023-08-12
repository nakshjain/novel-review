import {Component, Input} from '@angular/core';
import {Image} from "./images.types";

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent {
  slideConfig = {
    "slidesToShow": 10,
    "slidesToScroll": 1,
    "autoplay":true,
    "autoplaySpeed": 900,
    // "dots": true,
    "infinite": true
  };

  @Input()
  title: string=''

  @Input()
  images :Image[]=[]
}
