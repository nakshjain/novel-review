import { Component } from '@angular/core';
import {NgxUiLoaderService} from "ngx-ui-loader";
import {NovelsByGenre} from "../types/novels.types";
import {NovelService} from "../api/novel.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  allNovelsByGenre: NovelsByGenre[]=[]

  constructor(private ngxService: NgxUiLoaderService, private novelService:NovelService) {
  }

  ngOnInit() {
    this.novelService.getAllNovelsByGenres()
      .subscribe(
        (novelsByGenre)=>{
          this.ngxService.start()
          console.log(novelsByGenre)
          this.allNovelsByGenre=novelsByGenre
          this.ngxService.stop()
        }
      )
  }
}
