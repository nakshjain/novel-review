import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Novel} from "../../types/novels.types";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {NovelService} from "../../api/novel.service";

@Component({
  selector: 'app-novel',
  templateUrl: './novel.component.html',
  styleUrls: ['./novel.component.css'],
})
export class NovelComponent implements OnInit{
  novel: any;
  novelRating: any;
  novels:Novel[]=[]
  titleSimilar='Similar Novels'

  constructor(private route: ActivatedRoute, private ngxService: NgxUiLoaderService, private novelService:NovelService) {
  }

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.ngxService.start()
      const novelId = params['id'];
      this.getNovelById(novelId);
      this.ngxService.stop()
    });
  }

  getNovelById(id: string){
    this.novel=this.novelService.getNovelById(id)
    this.getNovelsByGenre(this.novel.genre)
  }

  getNovelsByGenre(genre: string){
    this.novels=this.novelService.getNovelsByGenre(genre)
  }
}
