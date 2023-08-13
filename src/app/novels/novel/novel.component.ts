import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NovelsServices} from "../../api/novel-service/novels.services";

@Component({
  selector: 'app-novel',
  templateUrl: './novel.component.html',
  styleUrls: ['./novel.component.css'],
  providers:[NovelsServices]
})
export class NovelComponent {
  novel: any;
  novelId: any;
  novelRating:any;
  constructor(private activatedRoute: ActivatedRoute, private novelsServices:NovelsServices) {
  }

  ngOnInit() {
    this.novelId=this.activatedRoute.snapshot.paramMap.get('id');
    this.novel=this.novelsServices.allNovels.find(x=>x.id ==this.novelId)
  }
}
