import {Component, Input, OnInit} from '@angular/core';
import {Novel} from "../home-page/image-slider/novels.types";

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
  hideSearchBar: boolean=true;

  novels: Novel[]=[]
  searchText=''

  onSearchTextEntered(searchValue: string){
    this.searchText=searchValue
  }

  ngOnInit(): void {
    this.onSearchTextEntered(this.searchText)
  }
}
