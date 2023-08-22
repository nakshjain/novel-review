import {Component, OnInit} from '@angular/core';
import {NgxUiLoaderService} from "ngx-ui-loader";
import {productsByGenre} from "../types/products.types";
import {ProductService} from "../api/product.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit{
  allproductsByGenre: productsByGenre[]=[]

  constructor(private ngxService: NgxUiLoaderService, private productService:ProductService) {
  }

  ngOnInit(): void {
    this.ngxService.start()
    this.productService.getAllproductsByGenre().subscribe(
      (allproductsByGenre)=>{
        this.allproductsByGenre=allproductsByGenre
        this.ngxService.stop()
      }
    )
  }
}
