import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as events from "events";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  searchText=''
  @Input()
  hideFilterBar: boolean=false
  @Input()
  hideSearchBar: boolean=false
  @Input()
  hideSelectBar: boolean=false
  @Input()
  genreName=''
  @Output()
  genreSelected: EventEmitter<string>=new EventEmitter<string>()
  onGenreSelectChanged(event: any){
    const genreSelect= event.value
    this.genreSelected.emit(genreSelect)
  }
  genres=['Genre1', 'Genre2', 'Genre3']
  @Output()
  searchTextChanged: EventEmitter<string>=new EventEmitter<string>()
  onSearchTextChanged(){
    this.searchTextChanged.emit(this.searchText)
  }
  ngOnInit() {
    if(this.genreName.length!==0){
      const genreToEmit=this.genreName
      this.hideSelectBar=true
      this.genreSelected.emit(genreToEmit)
    }
  }
}
