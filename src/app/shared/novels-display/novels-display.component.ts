import {Component, Input, OnInit} from '@angular/core';
import {Novel} from "../../types/novels.types";
import {Router} from "@angular/router";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {NovelService} from "../../api/novel.service";

@Component({
  selector: 'app-novels-display',
  templateUrl: './novels-display.component.html',
  styleUrls: ['./novels-display.component.css']
})
export class NovelsDisplayComponent implements OnInit{
  novels: Novel[]=[]
  @Input()
  searchText=''
  @Input()
  genre=''

  constructor(private router: Router, private ngxService: NgxUiLoaderService, private novelService: NovelService) {
  }

  ngOnInit(): void {
    this.getNovels();
  }

  getNovels(): void {
    this.novels=this.novelService.getNovelsAll()
  }
  viewNovelDetails(novelId: string): void {
    this.router.navigate(['novel', novelId]); // Navigate to detail page with novel ID
  }
}
