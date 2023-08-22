import {Component, Input} from '@angular/core';
import {product} from "../../types/products.types";
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
    "slidesToShow": 3,
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
  products :product[]=[]

  constructor(private router: Router){
  }

  viewproductDetails(productId: string): void {
    this.router.navigate(['product', productId]); // Navigate to detail page with product ID
  }
}
