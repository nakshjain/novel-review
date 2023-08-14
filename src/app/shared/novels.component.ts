import {Component, Input, OnInit} from '@angular/core';
import {Novel} from "../types/novels.types";

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

  novels: Novel[]=[]
  searchText=''
  genreSelect=''

  onSearchTextEntered(searchValue: string){
    this.searchText=searchValue
  }

  onGenreSelected(selectValue: string){
    this.genreSelect=selectValue
  }

  ngOnInit(): void {
    this.onSearchTextEntered(this.searchText)
    this.onGenreSelected(this.genreSelect)
  }
}
