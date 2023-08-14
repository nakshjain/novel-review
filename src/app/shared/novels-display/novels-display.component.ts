import {Component, Input} from '@angular/core';
import {Novel} from "../../home-page/image-slider/novels.types";
import {NovelsServices} from "../../api/novel-service/novels.services";

@Component({
  selector: 'app-novels-display',
  templateUrl: './novels-display.component.html',
  styleUrls: ['./novels-display.component.css']
})
export class NovelsDisplayComponent {
  novels: Novel[]=[]
  @Input()
  searchText=''
  @Input()
  genre=''

  onSearchTextEntered(searchValue: string){
    this.searchText=searchValue
  }

  constructor(private novelsServices:NovelsServices) {
  }

  ngOnInit(): void {
    this.novels=this.novelsServices.getNovelsSearched(this.searchText, this.genre)
    this.onSearchTextEntered(this.searchText)
  }
}
