import {Component, Input} from '@angular/core';
import {Novel} from "../../types/novels.types";
import {NovelService} from "../../api/novel.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-novels-display',
  templateUrl: './novels-display.component.html',
  styleUrls: ['./novels-display.component.css']
})
export class NovelsDisplayComponent {
  novels: Novel[]=[]
  @Input()
  searchText=''
  @Input()
  genre=''

  constructor(private router: Router, private novelService: NovelService) {
  }

  ngOnInit(): void {
    this.getNovels();
  }

  getNovels(): void {
    this.novelService.getAllNovels()
      .subscribe(novels => {
        console.log(novels)
        this.novels = novels;
      });
  }
  viewNovelDetails(novelId: string): void {
    this.router.navigate(['novel', novelId]); // Navigate to detail page with novel ID
  }
}
