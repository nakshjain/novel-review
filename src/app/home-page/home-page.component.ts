import { Component } from '@angular/core';
import {NgxUiLoaderService} from "ngx-ui-loader";
import {NovelsByGenre} from "./image-slider/novels.types";
import {NovelsServices} from "../api/novel-service/novels.services";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  title='GENRE'
  allNovelsByGenre: NovelsByGenre[]=[]

  constructor(private router:Router, private ngxService: NgxUiLoaderService, private novelsServices:NovelsServices) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.ngxService.stop();
      }
    });

  }

  ngOnInit() {
    this.showLoader();
    this.allNovelsByGenre=this.novelsServices.getAllNovelsByGenre()
    if(this.allNovelsByGenre){
      console.log(this.allNovelsByGenre)
      this.hideLoader()
    }
  }

  showLoader() {
    this.ngxService.start();
  }

  hideLoader() {
    this.ngxService.stop();
  }
}
