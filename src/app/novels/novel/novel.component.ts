import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NovelsServices} from "../../api/novel-service/novels.services";
import {Novel} from "../../home-page/image-slider/novels.types";

@Component({
  selector: 'app-novel',
  templateUrl: './novel.component.html',
  styleUrls: ['./novel.component.css'],
  providers:[NovelsServices]
})
export class NovelComponent {
  novel: any;
  novelId: any;
  constructor(private activatedRoute: ActivatedRoute, private novelsServices:NovelsServices) {
  }

  ngOnInit() {
    this.novelId=this.activatedRoute.snapshot.paramMap.get('id');
    this.novel=this.novelsServices.genre.find(x=>x.id ==this.novelId)
  }
}