import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit{
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
