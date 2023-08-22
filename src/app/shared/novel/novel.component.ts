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
  novelsByGenre:Novel[]=[]
  titleSimilar='Similar Novels'
  backgroundColor='#FFF0F5'

  constructor(private route: ActivatedRoute, private ngxService: NgxUiLoaderService, private novelService:NovelService) {
  }

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.ngxService.start()
      const novelId = params['id'];
      this.getNovelById(novelId);
    });
  }

  getNovelById(id: string){
    this.novelService.getNovelById(id).subscribe(
      (novel)=>{
        this.novel=novel;
        this.ngxService.stop()
        this.getNovelsByGenre(this.novel.genre)
      }
    )
  }

  getNovelsByGenre(genre: string){
    this.novelService.getNovelsByGenre(genre).subscribe(
      (novelsByGenre)=>{
        this.novelsByGenre=novelsByGenre
      }
    )
  }
}
