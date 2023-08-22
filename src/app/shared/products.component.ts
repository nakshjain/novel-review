import {Component, Input, OnInit} from '@angular/core';
import {product} from "../types/products.types";
import {NgxUiLoaderService} from "ngx-ui-loader";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  @Input()
  title=''

  @Input()
  genre=''

  @Input()
  hideFilterBar: boolean=false
  @Input()
  hideSelectBar: boolean=false
  @Input()
  hideSearchBar: boolean=false
  @Input()
  backgroundColor: string='lightblue'

  products: product[]=[]
  searchText=''
  genreSelect=''

  onSearchTextEntered(searchValue: string){
    this.searchText=searchValue
  }

  onGenreSelected(selectValue: string){
    this.genreSelect=selectValue
  }

  constructor(private ngxService:NgxUiLoaderService) {
  }
  ngOnInit(): void {
    this.onSearchTextEntered(this.searchText)
    this.onGenreSelected(this.genreSelect)
    this.ngxService.start()
    setTimeout(()=>{
      this.ngxService.stop()
    })
  }
}
