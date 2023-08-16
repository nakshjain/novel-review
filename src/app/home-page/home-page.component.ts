import {Component, OnInit} from '@angular/core';
import {NgxUiLoaderService} from "ngx-ui-loader";
import {NovelsByGenre} from "../types/novels.types";
import {NovelService} from "../api/novel.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit{
  allNovelsByGenre: NovelsByGenre[]=[]

  constructor(private ngxService: NgxUiLoaderService, private novelService:NovelService) {
  }

  ngOnInit(): void {
    this.ngxService.start()
    this.novelService.getAllNovelsByGenre().subscribe(
      (allNovelsByGenre)=>{
        this.allNovelsByGenre=allNovelsByGenre
        this.ngxService.stop()
      }
    )
  }
}
