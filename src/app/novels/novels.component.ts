import {Component, OnInit} from '@angular/core';
import {NovelsServices} from "../api/novel-service/novels.services";
import {Novel} from "../home-page/image-slider/novels.types";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-novel-directory',
  templateUrl: './novels.component.html',
  styleUrls: ['./novels.component.css']
})
export class NovelsComponent implements OnInit{
  title: any
  novels: Novel[]=[]
  searchText=''
  genre: any

  onSearchTextEntered(searchValue: string){
    this.searchText=searchValue
    this.novels=this.novelsServices.getNovelsSearched(this.searchText, this.genre)
  }
  constructor(private activatedRoute: ActivatedRoute, private novelsServices:NovelsServices) {
  }

  ngOnInit(): void {
    this.genre=this.activatedRoute.snapshot.paramMap.get('genre');
    if(this.genre){
      this.title=this.genre
    }
    else{
      this.title='Novels'
    }
    this.onSearchTextEntered(this.searchText)
  }
}
