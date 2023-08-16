import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-browse-by-genre',
  templateUrl: './browse-by-genre.component.html',
  styleUrls: ['./browse-by-genre.component.css']
})
export class BrowseByGenreComponent implements OnInit{
  title='Browse By '
  genreHeading='Genre'
  genre: any;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.genre= params['genre'];
    });
    if(this.genre){
      this.genreHeading=this.genre
    }
  }
}
