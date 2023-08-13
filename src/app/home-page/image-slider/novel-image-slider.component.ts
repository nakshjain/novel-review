import {Component, Input} from '@angular/core';
import {Novel} from "./novels.types";

@Component({
  selector: 'app-image-slider',
  templateUrl: './novel-image-slider.component.html',
  styleUrls: ['./novel-image-slider.component.css']
})
export class NovelImageSliderComponent {
  slideConfigDesktop = {
    "slidesToShow": 10,
    "slidesToScroll": 1,
    "autoplay":true,
    "autoplaySpeed": 900,
    "infinite": true
  };
  slideConfigMobile = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "autoplay":true,
    "autoplaySpeed": 900,
    "infinite": true
  };

  @Input()
  genre: string=''

  @Input()
  images :Novel[]=[]
}
