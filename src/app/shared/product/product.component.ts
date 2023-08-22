import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {product} from "../../types/products.types";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {ProductService} from "../../api/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit{
  product: any;
  productsByGenre:product[]=[]
  titleSimilar='Similar products'
  backgroundColor='#FFF0F5'

  constructor(private route: ActivatedRoute, private ngxService: NgxUiLoaderService, private productService:ProductService) {
  }

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.ngxService.start()
      const productId = params['id'];
      this.getproductById(productId);
    });
  }

  getproductById(id: string){
    this.productService.getproductById(id).subscribe(
      (product)=>{
        this.product=product;
        this.ngxService.stop()
        this.getproductsByGenre(this.product.genre)
      }
    )
  }

  getproductsByGenre(genre: string){
    this.productService.getproductsByGenre(genre).subscribe(
      (productsByGenre)=>{
        this.productsByGenre=productsByGenre
      }
    )
  }
}
