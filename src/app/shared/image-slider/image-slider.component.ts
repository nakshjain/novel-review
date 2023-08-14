import {Component, Input} from '@angular/core';
import {Novel} from "../../types/novels.types";
import {Router} from "@angular/router";

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent {
  @Input()
  slideConfigDesktop={
    "slidesToShow": 10,
    "slidesToScroll": 1,
    "autoplay":true,
    "autoplaySpeed": 900,
    "infinite": true
  }
  @Input()
  slideConfigMobile={
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "autoplay":true,
    "autoplaySpeed": 900,
    "infinite": true
  }
  @Input()
  genre: string=''
  @Input()
  title: string=''
  @Input()
  novels :Novel[]=[]

  constructor(private router: Router){
    console.log(this.novels)
  }

  viewNovelDetails(novelId: string): void {
    console.log(novelId)
    this.router.navigate(['novel', novelId]); // Navigate to detail page with novel ID
  }
}
