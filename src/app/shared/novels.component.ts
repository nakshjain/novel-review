import {Component, Input, OnInit} from '@angular/core';
import {Novel} from "../types/novels.types";
import {NgxUiLoaderService} from "ngx-ui-loader";

@Component({
  selector: 'app-novels',
  templateUrl: './novels.component.html',
  styleUrls: ['./novels.component.css']
})
export class NovelsComponent implements OnInit{
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

  novels: Novel[]=[]
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
