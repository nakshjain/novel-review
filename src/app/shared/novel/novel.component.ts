import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NovelService} from "../../api/novel.service";
import {Novel} from "../../types/novels.types";

@Component({
  selector: 'app-novel',
  templateUrl: './novel.component.html',
  styleUrls: ['./novel.component.css'],
})
export class NovelComponent {
  novel: any;
  novelRating: any;
  novels:Novel[]=[]
  titleSimilar='Similar Novels'

  constructor(private route: ActivatedRoute, private novelService:NovelService) {
  }

  ngOnInit(){
    this.route.params.subscribe(params => {
      const novelId = params['id'];
      this.getNovelById(novelId);
    });
  }

  getNovelById(id: string){
    this.novelService.getNovelById(id)
      .subscribe(
        (novel) => {
        this.novel = novel;
        this.getNovelsByGenre(novel.genre)
        },
        (error)=>{
        console.log(error)
        }
      );
  }

  getNovelsByGenre(genre: string){
    console.log(genre)
    this.novelService.getAllNovelsByGenre(genre)
      .subscribe(
        (novels)=>{
          console.log(novels)
        this.novels=novels.novels
        },
        (error)=>{
          console.log(error)
        }
      )
  }
}
