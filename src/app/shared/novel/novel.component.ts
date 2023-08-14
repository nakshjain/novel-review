import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NovelService} from "../../api/novel.service";

@Component({
  selector: 'app-novel',
  templateUrl: './novel.component.html',
  styleUrls: ['./novel.component.css'],
})
export class NovelComponent {
  novel: any;
  novelRating: any;

  constructor(private route: ActivatedRoute, private novelService:NovelService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const novelId = params['id'];
      this.getNovelById(novelId);
    });
  }

  getNovelById(id: string): void {
    this.novelService.getNovelById(id)
      .subscribe((novel) => {
        this.novel = novel;
        },
        (error)=>{
        console.log(error)
        }
      );
  }

}
