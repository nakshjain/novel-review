import { Component } from '@angular/core';
import {NgxUiLoaderService} from "ngx-ui-loader";
import {NovelsByGenre} from "./image-slider/novels.types";
import {NovelsServices} from "../api/novel-service/novels.services";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  title='GENRE'
  allNovelsByGenre: NovelsByGenre[]=[]

  constructor(private ngxService: NgxUiLoaderService, private novelsServices:NovelsServices) {}
  ngOnInit() {
    this.ngxService.start();
    setTimeout(() => {
      this.ngxService.stop();
    }, 1000);
    this.allNovelsByGenre=this.novelsServices.getAllNovelsByGenre()
  }
}
